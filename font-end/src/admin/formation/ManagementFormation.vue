<template>
  <div class="ManagementFormation pb-5">
    <SectionUnder
      heading="management formation"
      para="Our knowledge base is here to help. Find a Formation"
      @searchCategory="searchFormation"
    />
    <div class="content-Managementformation">
      <div>
        <H2Button heading="management formation" :objLink="objLink" />
      </div>
      <div>
        <b-container>
          <LaptopFlex
            :show="isShow"
            typeItems="formation"
            :countItems="getFormation.length"
            @changeLayout="Layout"
          />
        </b-container>
      </div>
      <div class="formation">
        <div
          v-if="!loading"
          class="loading d-flex align-items-center justify-content-center"
        >
          <span class="border border-5 rounded-circle"></span>
        </div>
        <div v-else class="content-formation">
          <b-container>
            <div
              class="box-Formation py-3"
              :class="
                !isShow
                  ? 'flex-wrap d-flex align-items-start justify-content-center'
                  : ''
              "
            >
              <div v-if="getFormation.length === 0">
                <MessageSeach name="Formation" />
              </div>
              <Item
                v-for="(Formation, idx) in getFormation"
                :key="idx"
                :item="Formation"
                @edit="editFormation"
                @delete="deleteFormation"
                :class="!isShow ? 'w-l mx-1' : ''"
              />
            </div>
            <div
              v-if="!checkLimt"
              :class="getFormation.length === 0 ? 'd-none' : ''"
            >
              <BtnSowMore
                @show="showMoreFormation"
                :loading="getLoading"
                :data-number-show="getFormation.at(-1)._idF"
              />
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
  name: "ManagementFormation",
  data() {
    return {
      formation: [],
      loading: false,
      loadingShow: false,
      searchInput: "",
      checkLimt: false,
      isShow: true,
      objLink: {
        nameLink: "add formation",
        pathLink: "../add",
      },
      passedInfoItem: {
        id: undefined,
        name: "",
        heading: "Formation",
        pathDrop: "formation/delete/",
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
      this.fetchformation("http://localhost:3000/formation/all-formation")
        .then((response) => {
          this.loading = !this.loading;
          this.formation = response.data.formations;
        })
        .catch((error) => {
          this.loading = !this.loading;
          console.error(error);
        });
    }
  },
  methods: {
    fetchformation(url) {
      return axios({
        method: "get",
        url: url,
      });
    },
    searchFormation(search) {
      if (this.getFormation.length == this.formation.length && search == "")
        return;
      this.$router.push(`./${search}`);
      this.searchInput = search;
      if (Boolean(this.getFormation.length)) return;
      this.loading = !this.loading;
      this.fetchformation(
        `http://localhost:3000/formation/one-formation/${search} `
      )
        .then((response) => {
          this.loading = !this.loading;
          if (!Boolean(response.data.formation.length)) return;
          this.formation.push(response.data.formation[0]);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    showMoreFormation(number) {

console.log(number)

      if (this.searchInput !== "") this.searchInput = "";
      this.loadingShow = !this.loadingShow;
      this.fetchformation(`http://localhost:3000/formation/all-formation/${number} `)
        .then((response) => {
          console.log(response.data.formation)
          if (!Boolean(response.data.formation.length))
            return (this.checkLimt = !this.checkLimt);
          this.loadingShow = !this.loadingShow;
          this.formation = [...this.formation, ...response.data.formation];
        })
        .catch((error) => {
          console.error(error);
        });
    },
    editFormation(id) {
      for (let i = 0; i < this.formation.length; i++) {
        if (this.formation[i]._idF === id) {
          localStorage.setItem("editFormationName", this.formation[i]._name);
          localStorage.setItem("editFormationId", this.formation[i]._idCat);
          this.$router.push(
            `../edit-Formation/${this.formation[i]._idF}/${this.formation[i]._name}`
          );
          break;
        }
      }
    },
    deleteFormation([name, id]) {
      document.getElementById("model").classList.add("overly");
      this.passedInfoItem.id = id;
      this.passedInfoItem.name = name;
    },
    deleteItem(id) {
      this.formation = this.formation.filter(
        ({ _idF }, idx) => _idF !== id
      );
      console.log(this.formation);
      this.passedInfoItem.id = undefined;
      this.passedInfoItem.name = "";
    },
    Layout(bool) {
      console.log(bool);
      this.isShow = bool;
    },
  },
  computed: {
    getFormation() {
      return this.formation.filter((cats) => {
        return cats._name.match(new RegExp(this.searchInput, "i"));
      });
    },
    getNumberShow() {
      return this.formation.length;
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