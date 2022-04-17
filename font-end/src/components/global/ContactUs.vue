<template>
  <div class="ContactUs px-4 py-4">
    <b-container>
      <b-row cols-sm="2" cols="1" class="px-5 d-flex align-items-center">
        <b-col class="p-3">
          <h3 class="text-white">A question ?</h3>
          <p class="text-white m-0">Do not hesitate to contact us</p>
        </b-col>
        <b-col
          class="
            p-3
            justify-content-sm-start
            d-flex
            align-items-center
            justify-content-md-center
          "
        >
          <b-button
            class="px-5 py-3 position-relative"
            to="/ContactUs"
          ></b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "ContactUs",
};
</script>
<style scoped>
.ContactUs {
  background-color: var(--second);

}
.ContactUs .btn {
  background-color: var(--primary);
}
.ContactUs .container > div{
  height: 300px;
}
.ContactUs .btn:after {
  content: "Contact Us ";
  background-color: var(--primary);
  width: 25px;
  height: 25px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.ContactUs .btn:focus {
  box-shadow: none !important;
}
.ContactUs .btn:focus:after {
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
@media (max-width: 575px) {
  .row {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .container-sm,
  .container {
    max-width: 300px !important;
  }
}
</style>