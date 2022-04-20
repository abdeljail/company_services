<template>
  <div class="home">
    <div class="local-h py-5">
      <b-container>
        <b-row class="py-4">
          <b-col class="d-flex justify-content-center flex-column">
            <div>
              <h1 class="py-4 text-uppercase">company services</h1>
              <p>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Quisque velit nisi, pretium ut lacinia in, elementum id
                enim. Sed porttitor lectus nibh. Cras ultricies ligula sed magna
                dictum porta.
              </p>
            </div>
          </b-col>
          <b-col>
            <div>
              <img
                class="w-100"
                :src="require('@/assets/images/local.png')"
                alt=""
              />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="packs py-5">
      <b-container>
        <b-row class="py-4" ols-sm="1" cols-md="1" cols="1">
          <b-col class="py-5">
            <PackH1ParaImg
              paragraph="Sed porttitor lectus nibh. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae; Donec
                velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
                ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor
                at sem. Vestibulum ac diam sit amet quam vehicula elementum sed
                sit amet dui."
              heading="our mission"
              srcImage="vision.png"
              classPack="mission-vision d-flex"
            />
          </b-col>
          <b-col class="py-5">
            <PackH1ParaImg
              paragraph="Sed porttitor lectus nibh. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae; Donec
                velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
                ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor
                at sem. Vestibulum ac diam sit amet quam vehicula elementum sed
                sit amet dui."
              heading="Our vision"
              srcImage="mission.png"
              classPack="mission-vision d-flex"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>

    <section class="py-5">
      <b-container>
        <div class="py-3 text-center">
          <h2>OUR STRONG POINTS</h2>
          <p>Discover what makes company services an exceptional agency</p>
        </div>
        <b-row class="px-4 py-4 box-pon" cols-sm="2" cols-md="2" cols="1">
          <b-col class="px-4 py-4">
            <div
              class="
                border
                px-4
                py-4
                d-flex
                justify-content-center
                align-items-center
                rounded
                bg-light
              "
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path
                    d="M9.375 233.4C3.375 239.4 0 247.5 0 256v128c0 8.5 3.375 16.62 9.375 22.62S23.5 416 32 416h32V224H32C23.5 224 15.38 227.4 9.375 233.4zM464 96H352V32c0-17.62-14.38-32-32-32S288 14.38 288 32v64H176C131.8 96 96 131.8 96 176V448c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V176C544 131.8 508.3 96 464 96zM256 416H192v-32h64V416zM224 296C201.9 296 184 278.1 184 256S201.9 216 224 216S264 233.9 264 256S246.1 296 224 296zM352 416H288v-32h64V416zM448 416h-64v-32h64V416zM416 296c-22.12 0-40-17.88-40-40S393.9 216 416 216S456 233.9 456 256S438.1 296 416 296zM630.6 233.4C624.6 227.4 616.5 224 608 224h-32v192h32c8.5 0 16.62-3.375 22.62-9.375S640 392.5 640 384V256C640 247.5 636.6 239.4 630.6 233.4z"
                  />
                </svg>
              </span>
              <p class="m-0 px-2">Legal Consultants</p>
            </div>
          </b-col>
          <b-col class="px-4 py-4">
            <div
              class="
                border
                px-4
                py-4
                d-flex
                justify-content-center
                align-items-center
                rounded
                bg-light
              "
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M257.1 95.53C245.8 95.53 234.7 96.72 223.1 98.97V33.97C234.8 32.36 245.9 31.53 257.1 31.53C315.3 31.53 368.3 53.72 408.2 90.11L437.6 60.69C447.7 50.61 464.9 57.75 464.9 72V177.4C464.9 186.2 457.7 193.4 448.9 193.4H343.5C329.3 193.4 322.1 176.1 332.2 166.1L362.9 135.4C334.7 110.6 297.7 95.53 257.1 95.53L257.1 95.53zM97.14 255.5C97.14 266.7 98.27 277.5 100.4 288H35.47C33.93 277.4 33.14 266.6 33.14 255.5C33.14 198.2 54.71 145.8 90.18 106.2L60.69 76.69C50.61 66.61 57.74 49.38 71.1 49.38H177.4C186.2 49.38 193.4 56.54 193.4 65.38V170.7C193.4 185 176.1 192.1 166.1 182.1L135.5 151.5C111.6 179.5 97.14 215.8 97.14 255.5V255.5zM182.1 348.2L153.1 377.1C181.1 401.1 217.4 415.5 257.1 415.5C267.7 415.5 278 414.5 288 412.6V477.4C277.9 478.8 267.6 479.5 257.1 479.5C199.8 479.5 147.4 457.1 107.8 422.5L76.69 453.6C66.61 463.7 49.37 456.5 49.37 442.3V336.9C49.37 328.1 56.54 320.9 65.37 320.9H170.7C184.1 320.9 192.1 338.1 182.1 348.2H182.1zM348.2 332.2L377.2 361.2C402.1 333.1 417.1 296.1 417.1 255.5C417.1 244.7 416.1 234.2 414 224H478.9C480.4 234.3 481.1 244.8 481.1 255.5C481.1 313.7 458.9 366.7 422.6 406.6L453.6 437.6C463.7 447.7 456.5 464.9 442.3 464.9H336.9C328.1 464.9 320.9 457.7 320.9 448.9V343.5C320.9 329.3 338.1 322.1 348.2 332.2L348.2 332.2z"
                  />
                </svg>
              </span>
              <p class="m-0 px-2">Marketing</p>
            </div>
          </b-col>
          <b-col class="px-4 py-4">
            <div
              class="
                border
                px-4
                py-4
                d-flex
                justify-content-center
                align-items-center
                rounded
                bg-light
              "
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M211.8 488.6C213.4 491.1 213.9 494.2 213.2 497.1C212.6 500 210.8 502.6 208.3 504.2C205.7 505.8 202.7 506.3 199.7 505.7C138.3 491.8 84.1 455.8 47.53 404.5C10.97 353.2-5.395 290.3 1.57 227.7C8.536 165 38.34 107.2 85.29 65.21C132.2 23.2 193-.0131 256 0C257.5 0 258.1 .2931 260.3 .8627C261.7 1.432 262.1 2.267 264 3.319C265.1 4.371 265.9 5.619 266.5 6.993C267 8.367 267.3 9.839 267.3 11.32V112.3L291.8 86.39C292.8 85.31 294 84.44 295.4 83.84C296.7 83.23 298.2 82.9 299.7 82.86C301.2 82.81 302.6 83.06 304 83.59C305.4 84.12 306.7 84.92 307.8 85.94C308.8 86.96 309.7 88.18 310.3 89.54C310.9 90.89 311.3 92.35 311.3 93.84C311.3 95.32 311.1 96.8 310.6 98.18C310 99.57 309.2 100.8 308.2 101.9L264.2 148.5C263.1 149.6 261.9 150.5 260.5 151.1C259 151.7 257.5 152 255.1 152C254.5 152 252.9 151.7 251.5 151.1C250.1 150.5 248.8 149.6 247.8 148.5L203.7 101.9C201.7 99.74 200.6 96.83 200.7 93.84C200.7 90.84 202 87.1 204.2 85.94C206.4 83.88 209.3 82.77 212.3 82.86C215.3 82.94 218.1 84.21 220.2 86.39L244.7 112.4V22.89C188.3 25.64 134.9 48.73 94.23 87.87C53.58 127 28.49 179.6 23.61 235.8C18.73 292 34.38 348.1 67.68 393.7C100.1 439.2 149.7 471.2 204.7 483.6C207.6 484.3 210.2 486.1 211.8 488.6L211.8 488.6zM171.4 126.1C170.6 127.4 169.5 128.5 168.3 129.3C147.8 143.2 131.1 161.9 119.5 183.8C107.9 205.7 101.8 230.1 101.8 254.9C101.8 279.7 107.9 304.1 119.5 325.1C131.1 347.9 147.8 366.6 168.3 380.5C170.8 382.2 172.5 384.8 173 387.8C173.6 390.7 172.1 393.8 171.3 396.2C169.6 398.7 166.1 400.4 164 400.1C161.1 401.5 158 400.9 155.6 399.2C132 383.2 112.8 361.7 99.46 336.5C86.15 311.4 79.19 283.4 79.19 254.9C79.19 226.5 86.15 198.4 99.46 173.3C112.8 148.1 132 126.6 155.6 110.6C156.8 109.8 158.2 109.2 159.6 108.8C161.1 108.5 162.6 108.5 164.1 108.8C165.5 109 166.9 109.6 168.2 110.4C169.5 111.2 170.5 112.3 171.4 113.5C172.2 114.7 172.8 116.1 173.1 117.6C173.4 119.1 173.4 120.6 173.1 122C172.8 123.5 172.3 124.9 171.4 126.1H171.4zM340.9 383.5C341.7 382.3 342.8 381.2 343.1 380.4V380.3C364.4 366.3 381.1 347.6 392.7 325.7C404.2 303.9 410.2 279.5 410.2 254.8C410.2 230.1 404.2 205.7 392.7 183.8C381.1 161.1 364.4 143.3 343.1 129.3C342.8 128.5 341.7 127.4 340.9 126.2C340.1 124.9 339.5 123.5 339.3 122.1C338.1 120.6 339 119.1 339.3 117.7C339.6 116.2 340.2 114.8 341 113.6C341.9 112.4 342.1 111.3 344.2 110.5C345.4 109.7 346.8 109.2 348.3 108.9C349.8 108.6 351.2 108.6 352.7 108.9C354.2 109.2 355.5 109.8 356.8 110.7C380.2 126.7 399.5 148.2 412.7 173.3C426 198.4 432.1 226.4 432.1 254.8C432.1 283.3 426 311.3 412.7 336.4C399.5 361.5 380.2 383 356.8 399C355.5 399.9 354.2 400.5 352.7 400.8C351.2 401.1 349.8 401.1 348.3 400.8C346.8 400.5 345.4 399.1 344.2 399.2C342.1 398.4 341.9 397.3 341 396.1C340.2 394.9 339.6 393.5 339.3 392C339 390.6 338.1 389.1 339.3 387.6C339.5 386.2 340.1 384.8 340.9 383.5V383.5zM312.3 6.307C368.5 19.04 418.7 50.28 455 95.01C485.4 132.6 504.6 178 510.3 226C515.9 274 507.9 322.7 487.1 366.3C466.2 409.9 433.5 446.8 392.6 472.6C351.7 498.3 304.4 512 256 512C254.5 512 253.1 511.7 251.7 511.1C250.3 510.6 249.1 509.7 248 508.7C246.1 507.6 246.1 506.4 245.6 505C245 503.6 244.7 502.2 244.7 500.7V401.5L220.2 427.5C218.1 429.7 215.3 430.1 212.3 431.1C209.3 431.2 206.4 430 204.2 427.1C202 425.9 200.7 423.1 200.7 420.1C200.6 417.1 201.7 414.2 203.7 412L247.8 365.4C249.1 363.2 252.9 362 255.1 362C259.1 362 262 363.2 264.2 365.4L308.2 412C310.3 414.2 311.4 417.1 311.3 420.1C311.2 423.1 309.9 425.9 307.8 427.1C305.6 430 302.7 431.2 299.7 431.1C296.7 430.1 293.8 429.7 291.8 427.5L267.3 401.6V489.1C323.7 486.3 377.1 463.3 417.8 424.1C458.5 384.1 483.6 332.4 488.5 276.2C493.3 219.1 477.7 163.9 444.4 118.3C411.1 72.75 362.4 40.79 307.4 28.36C305.9 28.03 304.6 27.42 303.3 26.57C302.1 25.71 301.1 24.63 300.3 23.37C299.5 22.12 298.1 20.72 298.7 19.26C298.5 17.8 298.5 16.3 298.8 14.85C299.2 13.41 299.8 12.04 300.6 10.82C301.5 9.61 302.6 8.577 303.8 7.784C305.1 6.99 306.5 6.451 307.9 6.198C309.4 5.945 310.9 5.982 312.3 6.307L312.3 6.307zM353.1 256.1C353.1 287.5 335.6 317.2 303.8 339.6C301.7 341.1 299 341.9 296.4 341.6C293.7 341.4 291.2 340.3 289.4 338.4L219.3 268.6C217.1 266.5 215.1 263.6 215.9 260.6C215.9 257.6 217.1 254.7 219.2 252.6C221.4 250.5 224.2 249.3 227.2 249.3C230.2 249.3 233.1 250.5 235.2 252.6L298.3 315.4C319.1 298.3 330.5 277.5 330.5 256.1C330.5 232.2 316.4 209.1 290.8 191C288.3 189.3 286.7 186.7 286.2 183.7C285.7 180.8 286.3 177.7 288.1 175.3C289.8 172.8 292.4 171.2 295.4 170.7C298.3 170.2 301.4 170.8 303.8 172.6C335.6 195 353.1 224.7 353.1 256.1V256.1zM216.7 341.5C213.7 342 210.7 341.3 208.2 339.6C176.5 317.2 158.1 287.5 158.1 256.1C158.1 224.7 176.5 195 208.2 172.6C210.4 171 213.1 170.3 215.7 170.5C218.4 170.8 220.8 171.9 222.7 173.8L292.8 243.6C294.9 245.7 296.1 248.6 296.1 251.6C296.1 254.6 294.1 257.4 292.8 259.6C290.7 261.7 287.8 262.9 284.9 262.9C281.9 262.9 278.1 261.7 276.9 259.6L213.8 196.7C192.9 214 181.6 234.7 181.6 256.1C181.6 279.1 195.7 303.1 221.3 321.1C223.7 322.9 225.4 325.5 225.9 328.5C226.4 331.4 225.7 334.4 224 336.9C222.3 339.3 219.6 341 216.7 341.5L216.7 341.5z"
                  />
                </svg>
              </span>
              <p class="m-0 px-2">Computer science</p>
            </div>
          </b-col>
          <b-col class="px-4 py-4">
            <div
              class="
                border
                px-4
                py-4
                d-flex
                justify-content-center
                align-items-center
                rounded
                bg-light
              "
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path
                    d="M0 96C0 60.65 28.65 32 64 32H512C547.3 32 576 60.65 576 96V416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V96zM160 256C160 238.3 145.7 224 128 224C110.3 224 96 238.3 96 256C96 273.7 110.3 288 128 288C145.7 288 160 273.7 160 256zM160 160C160 142.3 145.7 128 128 128C110.3 128 96 142.3 96 160C96 177.7 110.3 192 128 192C145.7 192 160 177.7 160 160zM160 352C160 334.3 145.7 320 128 320C110.3 320 96 334.3 96 352C96 369.7 110.3 384 128 384C145.7 384 160 369.7 160 352zM224 136C210.7 136 200 146.7 200 160C200 173.3 210.7 184 224 184H448C461.3 184 472 173.3 472 160C472 146.7 461.3 136 448 136H224zM224 232C210.7 232 200 242.7 200 256C200 269.3 210.7 280 224 280H448C461.3 280 472 269.3 472 256C472 242.7 461.3 232 448 232H224zM224 328C210.7 328 200 338.7 200 352C200 365.3 210.7 376 224 376H448C461.3 376 472 365.3 472 352C472 338.7 461.3 328 448 328H224z"
                  />
                </svg>
              </span>
              <p class="m-0 px-2">Formation</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <ContactUs />
    <NouvelleFormation />
    <GoogleMap />
  </div>
</template>
<script>
import PackH1ParaImg from "@/components/global/PackH1ParaImg.vue";
import ContactUs from "@/components/global/ContactUs.vue";
import NouvelleFormation from "@/components/Home/NouvelleFormation.vue";
import GoogleMap from "@/components/global/GoogleMap.vue";
export default {
  name: "HomeView",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  components: {
    PackH1ParaImg,
    ContactUs,
    NouvelleFormation,
    GoogleMap,
  },
};
</script>
<style scoped>
h1 {
  font-family: var(--font-link);
  color: var(--cl-paragraph);
}
h1 + p {
  line-height: 1.8 !important;
}
h2 {
  font-family: var(--font-link);
  color: var(--cl-paragraph);
}

.box-pon > div > div {
  transition: 0.4s ease-in-out;
  box-shadow: -8px -9px 0px 2px var(--second);
  -webkit-box-shadow: -8px -9px 0px 2px var(--second);
  -moz-box-shadow: -8px -9px 0px 2px var(--second);
}
.box-pon > div > div:hover {
  transform: translateY(-10px);
  box-shadow: -0px -0px 0px 2px var(--second);
}
.box-pon svg {
  width: 30px;
  height: 30px;
}
@media (max-width: 767px) {
  .packs {
    background-color: #f8f9fa;
  }
  .local-h .container .row > div:first-child div {
    text-align: center;
  }
  .local-h .container .row > div:last-child {
    display: none !important;
  }
}
</style>
