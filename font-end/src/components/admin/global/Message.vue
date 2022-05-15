<template>
  <div
    :class="Boolean(this.infoItem.id) ? 'show' : ''"
    id="del-mes"
    class="top-50 start-50 del-mes position-fixed bg-white rounded"
  >
    <div class="px-3 py-3 d-flex justify-content-between align-items-center">
      <h2 class="text-capitalize">Drop {{ infoItem.heading }}</h2>
      <span @click="hide" role="button" tabindex="0" class="p-2 rounded d-block"
        ><i class="fas fa-times text-black"></i>
      </span>
    </div>
    <div class="px-3 pb-3 d-flex justify-content-start align-items-center">
      <span class="align-self-baseline"
        ><i class="fas text-danger fa-exclamation"></i>
      </span>
      <p class="px-2 m-0">
        To drop
        <span class="text-warning">{{ infoItem.name }} </span> type the
        collection name category
      </p>
    </div>
    <div class="px-3 pb-3">
      <input
        type="text"
        class="bg-light px-2 py-2 w-100 rounded border"
        name="delete"
        id="delete"
        v-model="name"
      />
    </div>
    <div
      class="
        border-top border-light border-2
        px-3
        py-3
        d-flex
        justify-content-end
        align-items-center
      "
    >
      <button
        type="button"
        :class="[
          check ? 'delete-cat pe-auto' : 'pe-none',
          loading ? 'loading' : '',
        ]"
        :disabled="!check"
        class="
          border-0
          d-flex
          justify-content-center
          text-capitalize
          px-2
          py-2
          rounded
        "
        id="send"
        :name="'Drop' + infoItem.heading"
        @click="dropItem"
      ></button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Message",
  data() {
    return {
      show: false,
      name: undefined,
      check: false,
      loading: false,
    };
  },
  props: {
    infoItem: {
      type: Object,
      require: true,
    },
  },
  emits: ["deleteInArray"],
  watch: {
    name(value) {
      if (value !== this.infoItem.name)
        return this.check ? (this.check = !this.check) : null;
      this.check = !this.check;
    },
  },
  created() {},
  methods: {
    hide() {
      this.infoItem.id = undefined;
      this.name = "";
      document.getElementById("model").classList.remove("overly");
    },
    dropItem() {
      this.loading = !this.loading;
      axios
        .post(`http://localhost:3000/${this.infoItem.pathDrop}`, {
          id: this.infoItem.id,
        })
        .then((response) => {
          console.log(response);
          this.loading = !this.loading;
          if (response.data.delete) {
            this.$emit("deleteInArray", this.infoItem.id);
            this.infoItem.id = undefined;
            this.infoItem.name = "";
            document.getElementById("model").classList.remove("overly");
            this.name = "";
          }
        })
        .catch((error) => {
          this.loading = !this.loading;
          console.log(error);
        });
    },
  },
};
</script>

<style>
button,
input {
  outline: none;
}
.del-mes {
  width: 450px;
  z-index: 25;
  transform: translate(-40%, 40%) scale(0, 0);
  box-shadow: -10px -10px 0px 1px var(--second);
  transition: 0.3s 0.1s ease-in-out;
}
.del-mes.show {
  transform: translate(-50%, -50%) scale(1, 1);
}
.del-mes:hover {
  box-shadow: 0px 0px 0px 10px var(--second);
}
.del-mes h2 ~ span {
  cursor: pointer;
  transition: 0.2s ease-in;
}
.del-mes h2 ~ span:hover {
  background: var(--second);
}
.del-mes h2 ~ span:hover i {
  color: var(--bc-white) !important;
}
.del-mes div:nth-child(3) input:focus {
  border-color: var(--second) !important;
}
.del-mes div:last-child button {
  width: 140px;
  transition: 0.2s ease-in;
  color: #818a96;
  background: none;
}
.del-mes div:last-child button.delete-cat {
  background-color: #f84545;
  color: #fff !important;
}
.del-mes div:last-child button::after {
  content: attr(name);
}
.del-mes div:last-child button.delete-cat.loading::after {
  width: 25px;
  height: 25px;
  content: "";
  border-radius: 50%;
  border: 4px solid;
  animation: loding 1s linear infinite;
  border-color: #ff4101be #ff4101be #ff4101be var(--second);
}
.del-mes div:last-child button.delete-seccess {
  background-color: var(--primary) !important;
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