<template>
  <div
    class="
      content-application-r-i
      d-flex
      align-items-center
      m-auto
      flex-wrap
      justify-content-center
      px-4
      pt-3
    "
  >
    <div
      data-application="employment"
      class="employment w-100 overflow-hidden rounded"
    >
      <h3 class="p-3 bg-light m-0 text-center">Upload CV</h3>
      <form class="" action="">
        <div class="bg-white">
          <label @dragover.prevent @drop="onDrop" class="d-block" for="pdf">
            <div
              :class="
                !image
                  ? 'd-flex align-content-around justify-content-between flex-column flex-wrap w-100 h-100 d-block py-5 '
                  : 'd-none'
              "
            >
              <span>Drag in CV</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path
                    d="M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM223 263C213.7 272.4 213.7 287.6 223 296.1C232.4 306.3 247.6 306.3 256.1 296.1L296 257.9V392C296 405.3 306.7 416 320 416C333.3 416 344 405.3 344 392V257.9L383 296.1C392.4 306.3 407.6 306.3 416.1 296.1C426.3 287.6 426.3 272.4 416.1 263L336.1 183C327.6 173.7 312.4 173.7 303 183L223 263z"
                  />
                </svg>
              </span>
            </div>
            <div :class="image ? 'd-block w-100 h-100' : 'd-none'">
              <button
                class="text-white remove w-100 p-2 border-0 d-block"
                @click="remove($event)"
              >
                Remove CV
              </button>
              <div class="w-100 h-100">
                <iframe
                  v-if="image.includes('application/pdf')"
                  :src="image"
                  style="width: 100%; height: 700px"
                ></iframe>
                <img v-else :src="image" class="w-100 h-100" alt="image cv" />
              </div>
            </div>
            <input
              @change="onChange"
              class="d-none"
              type="file"
              name="pdf"
              id="pdf"
              accept=".pdf"
            />
          </label>
        </div>
        <div
          v-if="image"
          class="d-flex align-content-center justify-content-center"
        >
          <b-button
            :class="send ? 'send' : ''"
            @click="sendData($event)"
            class="
              position-relative
              btn-send
              mt-2
              border-0
              rounded
              text-capitalize
              px-5
              py-4
              d-block
            "
          ></b-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SelectTypeApplication",
  data() {
    return {
      image: "",
      send: false,
      file: "",
    };
  },
  created() {
    console.log();
  },
  mounted() {},
  methods: {
    onDrop: function (e) {
      e.stopPropagation();
      e.preventDefault();
      this.createFile(e.dataTransfer.files[0]);
    },
    onChange(e) {
      this.createFile(e.target.files[0]);
    },
    createFile(file) {
      if (!file.type.match("image.*") && !file.type.match("application/pdf")) {
        return;
      }
      this.file = file;
      let reader = new FileReader();
      reader.onload = (event) => (this.image = event.target.result);
      reader.readAsDataURL(file);
    },
    remove(e) {
      this.image = "";
      this.file = "";
      e.preventDefault();
    },
    sendData(e) {
      this.send = !this.send;
      let formData = new FormData();
      formData.append("type", this.$route.path.split("/").at(-1));
      formData.append("file", this.file);
      formData.append("idC", localStorage.getItem("clientId"));
      axios
        .post("http://localhost:3000/application/add-application", formData)
        .then((response) => {
          this.send = !this.send;
          console.log(response);
          if (response.data.message) {
            this.$router.push("/respanse-application/");
          }
        })
        .catch((error) => {
          this.send = !this.send;
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.content-application-r-i {
  min-width: 280px;
  max-width: 500px;
}
form > div:first-child {
  min-height: 190px;
  max-height: 400px;
  overflow: auto;
}
form div label {
  cursor: pointer;
  height: inherit;
}
form label span:first-child {
  font-size: 16px;
}
form label span {
  transition: 0.2s linear;
}
form label span:last-child {
  transition-delay: 0.1s;
}
form div:hover span {
  transform: translateY(-20px) scale(0.98, 0.98);
}
span svg {
  width: 60px;
  height: 60px;
}
span svg path {
  fill: var(--primary);
}
.remove {
  background-color: var(--second);
}
.btn-send {
  background: var(--primary);
}
.btn-send:focus,
.btn-send:hover {
  box-shadow: none !important;
  background: var(--primary) !important;
}

.btn-send:after {
  content: "Send";
  background-color: var(--primary);
  width: 25px;
  height: 25px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.btn-send.send:after {
  display: block;
  content: "";
  border: 6px solid #eee;
  animation: loding 1s linear infinite;
  border-bottom-color: var(--second);
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