<template>
  <div class="ManagementIntern pb-5">
    <SectionUnder heading="management Intern" />
    <div class="content-ManagementIntern">
      <div>
        <H2Button heading="management Intern" :objLink="objLink" />
      </div>
      <div>
        <b-container>
          <LaptopFlex
            :show="isShow"
            typeItems="Intern"
            :countItems="getIntern.length"
            @changeLayout="Layout"
          />
        </b-container>
      </div>
      <div class="Intern">
        <div
          v-if="!loading"
          class="loading d-flex align-items-center justify-content-center"
        >
          <span class="border border-5 rounded-circle"></span>
        </div>
        <div v-else class="content-Intern">
          <b-container>
            <div
              class="box-Intern py-3"
              :class="
                !isShow
                  ? 'flex-wrap  d-flex align-items-center justify-content-center'
                  : ''
              "
            >
              <div v-if="getIntern.length === 0">
                <MessageSeach name="Intern" />
              </div>
              <div v-else>
                <Item
                  v-for="(Intern, idx) in getIntern"
                  :key="idx"
                  :item="Intern"
                  @delete="deleteIntern"
                  :class="!isShow ? 'w-l mx-1' : ''"
                />
                <div
                  v-if="!checkLimt"
                  :class="getIntern.length === 0 ? 'd-none' : ''"
                >
                  <BtnSowMore
                    @show="showMoreIntern(getIntern.at(-1)._idI)"
                    :loading="getLoading"
                    :data-number-show="getIntern.at(-1)._IdI"
                  />
                </div>
              </div>
            </div>
          </b-container>
        </div>
      </div>
    </div>
    <Message
      :infoItem="getPassedInfoItem"
      :name="getPassedInfoItem.name"
      @deleteInArray="deleteItem"
    />
  </div>
</template>
<script>
import axios from "axios";
import SectionUnder from "@/components/admin/global/SectionUnder.vue";
import H2Button from "@/components/admin/global/H2Button.vue";
import LaptopFlex from "@/components/admin/global/LaptopFlex.vue";
import MessageSeach from "@/components/admin/global/MessageSeach.vue";
import Item from "@/components/admin/global/Items.vue";
import BtnSowMore from "@/components/admin/global/BtnSowMore.vue";
import Message from "@/components/admin/global/Message.vue";
export default {
  name: "ManagementIntern",
  data() {
    return {
      Intern: [],
      loading: false,
      loadingShow: false,
      searchInput: "",
      checkLimt: false,
      isShow: true,
      objLink: {
        nameLink: "add Intern",
        pathLink: "/added-Intern",
      },
      passedInfoItem: {
        id: undefined,
        name: "",
        heading: "Intern",
        pathDrop: "Intern/delete/",
      },
    };
  },
  props: {
    search: {
      type: String,
    },
  },
  components: {
    SectionUnder,
    H2Button,
    LaptopFlex,
    MessageSeach,
    Item,
    BtnSowMore,
    Message,
  },
  created() {
    {
      this.fetchIntern("http://localhost:3000/all-Intern")
        .then((response) => {
          this.loading = !this.loading;
          this.Intern = response.data.intern;
          console.log(this.getIntern.at(-1));
        })
        .catch((error) => {
          this.loading = !this.loading;
          console.error(error);
        });
    }
  },
  methods: {
    fetchIntern(url) {
      return axios({
        method: "get",
        url: url,
      });
    },
    showMoreIntern(number) {
      if (this.searchInput !== "") this.searchInput = "";
      this.loadingShow = !this.loadingShow;
      this.fetchIntern(`http://localhost:3000/all-Intern/${number} `)
        .then((response) => {
          if (!Boolean(response.data.Intern.length))
            return (this.checkLimt = !this.checkLimt);
          this.loadingShow = !this.loadingShow;
          this.Intern = [...this.Intern, ...response.data.Intern];
        })
        .catch((error) => {
          console.error(error);
        });
    },
    deleteIntern([name, id]) {
      document.getElementById("model").classList.add("overly");
      this.passedInfoItem.id = id;
      this.passedInfoItem.name = name;
    },
    deleteItem(id) {
      this.Intern = this.Intern.filter(({ _idCat }, idx) => _idCat !== id);
      console.log(this.Intern);
      this.passedInfoItem.id = undefined;
      this.passedInfoItem.name = "";
    },
    Layout(bool) {
      console.log(bool);
      this.isShow = bool;
    },
  },
  computed: {
    getIntern() {
      return this.Intern.filter((ints) => {
        return ints.nameClient.match(new RegExp(this.searchInput, "i"));
      });
    },
    getNumberShow() {
      return this.Intern.length;
    },
    getLoading() {
      return this.loadingShow;
    },
    getPassedInfoItem() {
      return this.passedInfoItem;
    },
  },
};
</script>

<style scoped>
.w-l {
  width: 300px;
}
.loading {
  height: 200px;
}
.loading span {
  animation: loding 1s linear infinite;
  border-bottom-color: var(--primary) !important;
  width: 70px;
  height: 70px;
}
@keyframes loding {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>