<template>
  <div class="ManagementCategories pb-5">
    <SectionUnder
      heading="management categories"
      para="Our knowledge base is here to help. Find a Category"
      @searchCategory="searchCategory"
    />
    <div class="content-ManagementCategories">
      <div>
        <H2Button heading="management categories" :objLink="objLink" />
      </div>
      <div>
        <b-container>
          <LaptopFlex
            :show="isShow"
            typeItems="categories"
            :countItems="getCategory.length"
            @changeLayout="Layout"
          />
        </b-container>
      </div>
      <div class="categories">
        <div
          v-if="!loading"
          class="loading d-flex align-items-center justify-content-center"
        >
          <span class="border border-5 rounded-circle"></span>
        </div>
        <div v-else class="content-categories">
          <b-container>
            <div
              class="box-category py-3"
              :class="
                !isShow
                  ? 'flex-wrap  d-flex align-items-center justify-content-center'
                  : ''
              "
            >
              <div v-if="getCategory.length === 0">
                <MessageSeach name="Category" />
              </div>
              <Item
                v-for="(category, idx) in getCategory"
                :key="idx"
                :item="category"
                @edit="editCategory"
                @delete="deleteCategory"
                :class="!isShow ? 'w-l mx-1' : ''"
              />
            </div>
            <div
              v-if="!checkLimt"
              :class="getCategory.length === 0 ? 'd-none' : ''"
            >
              <BtnSowMore
                @show="showMoreCategory"
                :loading="getLoading"
                :data-number-show="getNumberShow"
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
  name: "ManagementCategories",
  data() {
    return {
      categories: [],
      loading: false,
      loadingShow: false,
      searchInput: "",
      checkLimt: false,
      isShow: true,
      objLink: {
        nameLink: "add category",
        pathLink: "/added-category",
      },
      passedInfoItem: {
        id: undefined,
        name: "",
        heading: "category",
        pathDrop: "category/delete/",
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
      this.fetchCategories("http://localhost:3000/all-categories")
        .then((response) => {
          this.loading = !this.loading;
          this.categories = response.data.categories;
        })
        .catch((error) => {
          this.loading = !this.loading;
          console.error(error);
        });
    }
  },
  methods: {
    fetchCategories(url) {
      return axios({
        method: "get",
        url: url,
      });
    },
    searchCategory(search) {
      console.log(search);
      if (this.getCategory.length == this.categories.length && search == "")
        return;
      this.$router.push(`./${search}`);
      this.searchInput = search;
      if (Boolean(this.getCategory.length)) return;
      this.loading = !this.loading;
      this.fetchCategories(`http://localhost:3000/one-category/${search} `)
        .then((response) => {
          this.loading = !this.loading;
          if (!Boolean(response.data.categories.length)) return;
          this.categories.push(response.data.categories[0]);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    showMoreCategory(number) {
      if (this.searchInput !== "") this.searchInput = "";
      this.loadingShow = !this.loadingShow;
      this.fetchCategories(`http://localhost:3000/all-categories/${number} `)
        .then((response) => {
          if (!Boolean(response.data.categories.length))
            return (this.checkLimt = !this.checkLimt);
          this.loadingShow = !this.loadingShow;
          this.categories = [...this.categories, ...response.data.categories];
        })
        .catch((error) => {
          console.error(error);
        });
    },
    editCategory(id) {
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i]._idCat === id) {
          localStorage.setItem("editCategoryName", this.categories[i]._name);
          localStorage.setItem("editCategoryId", this.categories[i]._idCat);
          this.$router.push(
            `/edit-category/${this.categories[i]._idCat}/${this.categories[i]._name}`
          );
          break;
        }
      }
    },
    deleteCategory([name, id]) {
      document.getElementById("model").classList.add("overly");
      this.passedInfoItem.id = id;
      this.passedInfoItem.name = name;
    },
    deleteItem(id) {
      this.categories = this.categories.filter(
        ({ _idCat }, idx) => _idCat !== id
      );
      console.log(this.categories);
      this.passedInfoItem.id = undefined;
      this.passedInfoItem.name = "";
    },
    Layout(bool) {
      console.log(bool);
      this.isShow = bool;
    },
  },
  computed: {
    getCategory() {
      return this.categories.filter((cats) => {
        return cats._name.match(new RegExp(this.searchInput, "i"));
      });
    },
    getNumberShow() {
      return this.categories.length;
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