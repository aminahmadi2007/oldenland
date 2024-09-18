<template>
  <div>
    <div class="p-5"></div>
    <section class="px-5 mx-xl-5">
      <div
        class="row d-flex flex-column flex-lg-row justify-content-around mx-xl-5"
      >
        <div class="gallery-image-product col-12 col-md-8 col-lg-5">
          <div class="row">
            <img src="/peste-box.jpg" alt="" class="p-0" />
          </div>
          <div class="row my-2">
            <div class="col-1 p-0 d-flex align-items-center">
              <img src="/icons8-left-24.png" alt="" width="30px" />
            </div>
            <div class="col col-lg-9">
              <div class="row">
                <div
                  class="col overflow-hidden p-0 mx-1 rounded-3 border-gray position-relative"
                >
                  <img src="/peste-box.jpg" alt="" width="100%" />
                  <div class="position-absolute bg-opacity-50"></div>
                </div>
                <div
                  class="col overflow-hidden p-0 mx-1 rounded-3 border-gray position-relative"
                >
                  <img src="/peste-box.jpg" alt="" width="100%" />
                  <div class="position-absolute bg-opacity-50"></div>
                </div>
                <div
                  class="col overflow-hidden p-0 mx-1 rounded-3 border-gray position-relative"
                >
                  <img src="/peste-box.jpg" alt="" width="100%" />
                  <div class="position-absolute bg-opacity-50"></div>
                </div>
                <div
                  class="col overflow-hidden p-0 mx-1 rounded-3 border-gray position-relative"
                >
                  <img src="/peste-box.jpg" alt="" width="100%" />
                  <div class="position-absolute bg-opacity-50"></div>
                </div>
                <div
                  class="col overflow-hidden p-0 mx-1 rounded-3 border-gray position-relative"
                >
                  <img src="/peste-box.jpg" alt="" width="100%" />
                  <div class="position-absolute bg-opacity-50"></div>
                </div>
              </div>
            </div>
            <div class="col-1 p-0 d-flex align-items-center">
              <img src="/icons8-right-24.png" alt="" width="20px" />
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 my-3 d-flex align-items-center">
          <div class="row">
            <div class="col-12">
              <div class="row d-flex flex-column">
                <div class="col border-but p-0">
                  <p class="h1">peste</p>
                  <div class="h5 d-flex align-items-center">
                    4.8
                    <img
                      class="mx-2"
                      src="/star-rate4.png"
                      alt=""
                      width="30%"
                    />
                    <span class="text-primary">2.650 rating</span>
                  </div>
                </div>
                <div class="p-0">
                  <p class="h5 mt-2 p-0">price : $25</p>
                </div>
                <div class="col p-0 mt-4">
                  <div class="d-flex align-items-center">
                    <button
                      class="border-00A693 plus-mines d-flex align-items-center p-0 justify-content-center"
                    >
                      <img src="/icons8-negative-20.png" alt="" width="15px" />
                    </button>
                    <p class="h5 mx-3 fs-15 d-flex align-items-center">0</p>
                    <button
                      class="border-00A693 plus-mines d-flex align-items-center p-0 justify-content-center"
                    >
                      <img src="/icons8-plus-20.png" alt="" width="15px" />
                    </button>
                  </div>

                  <button
                    class="border-none px-4 py-2 border-redius-8 bg-00A693 text-white mt-3"
                  >
                    Add to cart
                  </button>
                </div>
              </div>

              <div class="row d-flex flex-column p-0">
                <div class="col p-0">
                  <p class="mt-4 h2">product details</p>
                </div>
                <div class="col p-0 mt-2">
                  <div class="d-flex justify-content-between px-2 h6">
                    <div class="h6">Package weight:</div>
                    <div class=" "></div>
                  </div>
                  <div class="d-flex justify-content-between px-2 h6">
                    <div class="h6">Package deminsions :</div>
                    <div class=" "></div>
                  </div>
                  <div class="d-flex justify-content-between px-2 h6">
                    <div class="h6">Feutures :</div>
                    <div class=" "></div>
                  </div>
                  <div class="d-flex justify-content-between px-2 h6">
                    <div class="h6">other details :</div>
                    <div class=" "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="px-4 container-xl">
      <hr />
      <div class="my-3 d-flex flex-column">
        <div>
          <p class="h2">about this item</p>
        </div>
        <div class="fs-6">
          <p class="mt-4 text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt aut
            necessitatibus debitis a reprehenderit eveniet, pariatur temporibus
            rem? Voluptatem et, vel quidem hic molestias dolore assumenda
            ratione. Ea, esse magnam!
          </p>
          <p class="mt-4 text-justify">
            Repellendus placeat pariatur ducimus aliquam sequi voluptatem
            consequatur nemo vitae asperiores ab, rem maxime nobis accusamus
            hic, veniam dolore, ea culpa error dolorum consectetur doloremque
            illo blanditiis velit. Repudi
          </p>
        </div>
      </div>
      <hr />
    </section>
    <section class="position-relative container-xl">
      <div class="row d-flex justify-content-">
        <div class="col-12 col-md-6 col-lg-5">
          <div class="row">
            <div class="col-4"></div>
            <div class="px-5 py-3 c-005985 h6">
              <div>
                <p class="h2">Customer</p>
              </div>
              <div class="h5 d-flex align-items-center">
                5 <img class="mx-2 w-25" src="/star-rate5.png" alt="" />
                <span class="text-primary">2.650 rating</span>
              </div>
              <div class="mt-3">
                <div v-for="x in rate_star" class="mt-1">
                  {{ x.name
                  }}<img class="mx-3" :src="x.star_img" width="45%" alt="" />{{
                    x.rate
                  }}
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-11 input-con px-5">
              <div>
                <p class="h2">add your reviwe</p>
              </div>
              <div class="input-items py-2 d-flex flex-column">
                <input
                  class="border-3px-solid-ADC9D5 c-9CA0A1 border-radius-10 py-1 px-2 input-style"
                  type="text"
                  placeholder="Name"
                />
                <input
                  class="border-3px-solid-ADC9D5 c-9CA0A1 border-radius-10 p-2 input-style"
                  type="text"
                  placeholder="Title"
                />
                <textarea
                  class="border-3px-solid-ADC9D5 c-9CA0A1 border-radius-10 heigh-170 resize-none p-2 input-style"
                  name=""
                  id=""
                  placeholder="Write your reviwe"
                ></textarea>
                <button
                  class="bg-00A693 mt-2 border-redius-8 border-none p-1 b text-white"
                >
                  Send reviwe
                </button>
              </div>
            </div>
            <div class="col-4"></div>
          </div>
        </div>
        <div class="col-12 col-md col-lg-5 p-5">
          <p class="h2">Reviews</p>
          <div v-for="x in 5" class="mt-5 w-100">
            <div class="col-11 p-0">
              <div class="h5 d-flex align-items-center px-1">
                <img src="/icons8-person-35.png" alt="" width="20px" />
                <p class="pt-1 m-0 mx-2">amin ahmadi</p>
              </div>
              <div class="h5 d-flex align-items-center pt-1">
                <img class="mx-2" src="/star-rate5.png" alt="" width="10%" />
                <span class="h-5"> i got ////////</span>
              </div>
              <p class="py-1 px-2 w-100">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas placeat sit earum
              </p>
              <div class="px-2">
                <img src="/like.png" alt="" /><img src="/dislike.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rate_star: [
        { name: "5 star", rate: 2130, star_img: "/star-rate5.png" },
        { name: "4 star", rate: 1130, star_img: "/star-rate4.png" },
        { name: "3 star", rate: 530, star_img: "/star-rate3.png" },
        { name: "2 star", rate: 230, star_img: "/star-rate2.png" },
        { name: "1 star", rate: 130, star_img: "/star-rate1.png" },
      ],
    };
  },
  methods: {
    addtocart(item) {
      this.$store.dispatch("addProduct", item);
    },
  },
};
</script>
<style>
.overflow-hidden {
  overflow: hidden;
}
.float-right {
  float: right;
}
.border-redius-20 {
  border-radius: 20px;
}
.border-redius-16 {
  border-radius: 16px;
}
.border-redius-12 {
  border-radius: 12px;
}
.border-redius-8 {
  border-radius: 8px;
}
.border-but {
  border-bottom: 2px solid lightgray;
}
.border-gray {
  border: 1px solid lightgray;
}
.border-00A693 {
  border: 2px solid #00a693;
}
.bg-00A693 {
  background-color: #00a693;
}
.plus-mines {
  width: 25px;
  height: 25px;
  background-color: transparent;
  border-radius: 5px;
  color: #00a693;
  font-size: 20px;
  font-weight: 500;
}
.border-none {
  border: none;
}
.bg-opacity-50 {
  width: 100%;
  height: 100%;
  background: aqua;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
}
.text-justify {
  text-align: justify;
}
.bg-E5EFF1 {
  background-color: #e5eff1;
}
.border-radius-10 {
  border-radius: 10px;
}
.c-9CA0A1 {
  color: #9ca0a1;
}
.c-005985 {
  color: #005985;
}
.border-3px-solid-ADC9D5 {
  border: 3px solid #adc9d5;
}
.input-style {
  border-radius: 10px;
  border: 3px solid #adc9d5;
  background-color: #e5eff1;
  color: #9ca0a1;
  margin-top: 10px;
}
.resize-none {
  resize: none;
}
.heigh-170 {
  height: 170px;
}
.name-site{
  color: black;
}
</style>
n
