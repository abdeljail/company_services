<template>
  <div class="laptopflex">
    <div
      class="
        content-laptopflex
        d-flex
        align-items-center
        justify-content-between
      "
    >
      <div>
        <p class="m-0 text-capitalize">
          numbers items {{ typeItems }} <strong>{{ countItems }}</strong>
        </p>
      </div>
      <div
        class="
          border border-2
          rounded
          p-2
          bnt-show
          d-flex
          align-items-center
          justify-content-between
        "
      >
        <div>
          <span>show</span>
        </div>
        <div>
          <span
            @click="$emit('changeLayout', ( !show))"
            :class="!show ? 'active' : ''"
            class="
              border border-0
              rounded
              p-2
              d-flex
              align-items-center
              justify-content-center
            "
            tabindex="0"
            role="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM152 96H64V160H152V96zM208 160H296V96H208V160zM448 96H360V160H448V96zM64 288H152V224H64V288zM296 224H208V288H296V224zM360 288H448V224H360V288zM152 352H64V416H152V352zM208 416H296V352H208V416zM448 352H360V416H448V352z"
              />
            </svg>
          </span>
        </div>
        <div>
          <span
            @click="$emit('changeLayout', ( !show))"
            :class="show ? ' active' : ''"
            class="
              border border-0
              rounded
              p-2
              d-flex
              align-items-center
              justify-content-center
            "
            tabindex="0"
            role="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M88 48C101.3 48 112 58.75 112 72V120C112 133.3 101.3 144 88 144H40C26.75 144 16 133.3 16 120V72C16 58.75 26.75 48 40 48H88zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 232C16 218.7 26.75 208 40 208H88C101.3 208 112 218.7 112 232V280C112 293.3 101.3 304 88 304H40C26.75 304 16 293.3 16 280V232zM88 368C101.3 368 112 378.7 112 392V440C112 453.3 101.3 464 88 464H40C26.75 464 16 453.3 16 440V392C16 378.7 26.75 368 40 368H88z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "LaptopFlex",
  data() {
    return {};
  },
  props: {
    countItems: {
      type: Number,
      require: true,
    },
    typeItems: {
      type: String,
      require: true,
    },
    show: {
      type: Boolean,
      require: true,
    },
  },
};
</script>

<style scoped>
.bnt-show {
  min-width: 160px;
}
.bnt-show > div:not(div:first-child) span {
  background-color: #0e314c36;
}
.bnt-show > div:not(div:first-child) span.active {
  background-color: var(--second);
}
span svg {
  width: 20px;
  height: 20px;
  fill: var(--second) !important;
  transition: 0.2s ease;
}
.bnt-show > div:not(div:first-child) span.active svg {
  transform: scale(0.8, 0.8);
  fill: var(--bc-white) !important;
}
</style>