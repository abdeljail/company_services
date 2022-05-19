<template>
  <div class="Item my-4">
    <div class="rounded content-item overflow-hidden">
      <div
        @click="check = !check"
        tabindex="0"
        role="button"
        class="
          content-header
          py-3
          px-4
          d-flex
          justify-content-between
          align-items-center
        "
        :class="check ? 'active' : ''"
      >
        <h3 class="m-0 text-capitalize">{{ item._name }}</h3>
        <span :class="check ? 'rotate' : ''">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
            <path
              d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
            />
          </svg>
        </span>
      </div>
      <div
        :class="check ? ' d-block ' : 'd-none'"
        class="content-body py-3 px-4"
      >
        <div v-if="getCountChildernItem">
          <div
            class="py-2 date d-flex justify-content-between align-items-center"
          >
            <p class="m-0 font-weight-bold text-capitalize">name formation :</p>
            <p class="m-0 text-capitalize">
              {{ item._name }}
            </p>
          </div>
          <div class="py-2 date">
            <p class="m-0 font-weight-bold text-capitalize">
              description formation :
            </p>
            <div
              v-html="item._description"
              class="py-2 m-0 text-capitalize"
            ></div>
          </div>
          <div class="py-2 date">
            <p class="m-0 font-weight-bold text-capitalize">
              description formation :
            </p>
            <div v-html="item._Goals" class="py-2 m-0 text-capitalize"></div>
          </div>
          <div
            class="py-2 date d-flex justify-content-start align-items-center"
          >
            <p class="m-0 font-weight-bold text-capitalize">
              image formation :
            </p>
            <div class="py-2 m-0 text-capitalize">
              <img
                class="border border-3 rounded"
                :src="`http://localhost:3000/uploads/images/${item._image}`"
              />
            </div>
          </div>
        </div>
        <div
          class="py-2 date d-flex justify-content-between align-items-center"
        >
          <p class="m-0 font-weight-bold text-capitalize">name categoty :</p>
          <p class="text-capitalize  m-0 py-2 px-3 bg-black border rounded text-white">
            {{ item.nameCat }}
          </p>
        </div>
        <div class="date d-flex justify-content-between align-items-center">
          <p class="m-0 font-weight-bold text-capitalize">
            date create formation :
          </p>
          <p class="m-0">
            <time :datetime="item._dateCreate">{{ item._dateCreate }}</time>
          </p>
        </div>
      </div>
      <div class="content-footer py-3 px-4 text-end">
        <button
          @click="$emit('edit', getCountChildernItem ? item._idF : item.idCat)"
          class="mx-3 text-capitalize text-white border-0 btn"
        >
          edit
        </button>
        <button
          @click="
            $emit('delete', [
              item._name,
              getCountChildernItem ? item._idF : item.idCat,
            ])
          "
          class="text-capitalize text-white border-0 btn"
        >
          delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {
      check: false,
    };
  },
  props: {
    item: {
      type: Object,
      require: true,
      default: null,
    },
  },
  created() {
    this.item._dateCreate = this.item._dateCreate
      .replace("T", " ")
      .replace(".000Z", "");
  },
  computed: {
    getCountChildernItem() {
      return Object.keys(this.item).length === 7;
    },
  },
};
</script>

<style>
.content-item {
  background-color: #f3f3f3;
  box-shadow: 0 0 11px 4px #dfdfdf;
}
.content-header {
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.content-header:hover,
.content-header.active {
  background-color: var(--second);
}
.content-header:hover h3,
.content-header.active h3 {
  color: var(--bc-white);
}
.content-header span,
.content-header h3,
.content-header span svg {
  transition: 0.2s ease-in-out;
}
.content-header span.rotate {
  transform: rotate(90deg);
}
.content-header span svg {
  width: 20px;
  fill: var(--second);
}
.content-header:hover span svg,
.content-header.active span svg {
  fill: var(--bc-white);
}
.content-body .date p:first-child {
  font-weight: 700;
}
.content-footer button {
  box-shadow: none !important;
}
.content-footer button:first-child {
  background-color: var(--primary);
}
.content-footer button:last-child {
  background-color: #f84545;
}
</style>