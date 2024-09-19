<template>
  <div>
    <section class="position-relative">
      <div>
        <img v-if="$device.isDesktop" src="/zafro.jpg" alt="" width="100%" />

        <img v-if="$device.Mobile" src="/Asset 1-50.jpg" alt="" width="100%" />
      </div>

      <div class="position-absolute bot-50 text-white px-4">
        <p class="h1 text-secondary">Lorem ipsum</p>
        <p class="h1">Lorem ipsum dolor sit</p>
      </div>
    </section>
    <section class="bg-dec py-5">
      <div class="row d-flex justify-content-center fs-12">
        <div
          class="col-5 col-xl-2 mx-3 px-2 py-4 bg-white-opacity border-redius-20 d-flex justify-content-center align-items-center flex-column"
        >
          <div>
            <img src="/9.png" alt="" width="100px" />
          </div>
          <div>
            <h1 class="my-3 c-005884">farmer</h1>
          </div>
          <div>
            <p class="text-center c-005884">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              accusamus blanditiis minima aut in distinctio veritatis molestiae,
              praesentium dolor sequi
            </p>
          </div>
        </div>
        <div
          class="col-5 col-xl-2 m-2 p-2 bg-white-opacity border-redius-20 d-flex justify-content-center align-items-center flex-column"
        >
          <div>
            <img src="/9.png" alt="" width="100px" />
          </div>
          <div>
            <h1 class="my-3 c-005884">farmer</h1>
          </div>
          <div>
            <p class="text-center c-005884">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              accusamus blanditiis minima aut in distinctio veritatis molestiae,
              praesentium dolor sequi
            </p>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-center fs-12">
        <div
          class="col-5 col-xl-2 m-2 p-2 bg-white-opacity border-redius-20 d-flex justify-content-center align-items-center flex-column"
        >
          <div>
            <img src="/9.png" alt="" width="100px" />
          </div>
          <div>
            <h1 class="my-3 c-005884">farmer</h1>
          </div>
          <div>
            <p class="text-center c-005884">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              accusamus blanditiis minima aut in distinctio veritatis molestiae,
              praesentium dolor sequi
            </p>
          </div>
        </div>
        <div
          class="col-5 col-xl-2 m-2 p-2 bg-white-opacity border-redius-20 d-flex justify-content-center align-items-center flex-column"
        >
          <div>
            <img src="/9.png" alt="" width="100px" />
          </div>
          <div>
            <h1 class="my-3 c-005884">farmer</h1>
          </div>
          <div>
            <p class="text-center c-005884">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              accusamus blanditiis minima aut in distinctio veritatis molestiae,
              praesentium dolor sequi
            </p>
          </div>
        </div>
        <div
          class="col-5 col-xl-2 m-2 p-2 bg-white-opacity border-redius-20 d-flex justify-content-center align-items-center flex-column"
        >
          <div>
            <img src="/9.png" alt="" width="100px" />
          </div>
          <div>
            <h1 class="my-3 c-005884">farmer</h1>
          </div>
          <div>
            <p class="text-center c-005884">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              accusamus blanditiis minima aut in distinctio veritatis molestiae,
              praesentium dolor sequi
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="position-relative">
      <div>
        <img src="/bg-dec-zafron.jpg" alt="" class="d-block d-md-none" />
        <img src="/bg-zafron-dec-pc.jpg" alt="" class="d-none d-md-block" />
      </div>
      <div>
        <div class="position-absolute position-top-left-dec-product">
          <p class="h2 C81D11 fs-4vw">Discover our Persian saffron</p>
          <p class="w-75 fs-2vw my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            quisquam ab autem nam aliquam, nesciunt non
          </p>
          <NuxtLink to="/category">
            <button
              class="rounded-pill fs-6 px-3 bg-C81D11 border-none text-white"
            >
              View products <img src="/icons8-right-35.png" alt="" />
            </button>
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="my-5">
      <div class="row mx-5">
        <div>
          <p class="h1 C81D11">The latest saffron products</p>
        </div>
        <div></div>
      </div>
      <div class="d-flex justify-content-center">
        <b-carousel-list
          v-model="test_zafron"
          :data="zafron"
          :items-to-show="slide_number"
          class="mt-5 w-85 py-3 px-4 shadow-none"
        >
          <template #item="list">
            <div class="card mx-3 rounded-4 bg-EBEBF3 boxe">
              <div class="">
                <figure class="is-5by4 mx-4 mt-3">
                  <img :src="list.image" class="border-radius-16" />
                </figure>
                <b-tag
                  type="is-danger"
                  rounded
                  style="position: absolute; top: 0"
                  ><b>50%</b></b-tag
                >
              </div>
              <div class="card-content">
                <div class="content">
                  <p class="h3">product name</p>
                  <p class="h6 mt-2">
                    Lorem ipsum dolor, sit amet consectetur a
                  </p>
                  <div class="h4 mt-4">
                    $25
                    <button class="add-btn p-2 h6 bg-C81D11">
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </b-carousel-list>
      </div>
    </section>
    <section class="position-relative">
      <div>
        <img src="/peste.jpg" alt="" class="d-block d-md-none" />
        <img src="/bg-peste-dec-pc.jpg" alt="" class="d-none d-md-block" />
      </div>
      <div>
        <div class="position-absolute position-bot-left-dec-product">
          <p class="h2 c-00A693 fs-4vw">Discover our Persian saffron</p>
          <p class="w-75 fs-2vw my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            quisquam ab autem nam aliquam, nesciunt non
          </p>
          <NuxtLink to="/category">
            <button
              class="rounded-pill fs-6 px-3 bg-00A693 border-none text-white"
            >
              View products <img src="/icons8-right-35.png" alt="" />
            </button>
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="my-5">
      <div class="row mx-5">
        <div>
          <p class="h1 C81D11">The latest peste products</p>
        </div>
        <div></div>
      </div>
      <div class="d-flex justify-content-center">
        <b-carousel-list
          v-model="test_zafron"
          :data="peste"
          :items-to-show="slide_number"
          class="mt-5 w-85 py-3 shadow-none"
        >
          <template #item="list">
            <div class="card mx-3 rounded-4 bg-EBEBF3 boxe">
              <div class="">
                <figure class="is-5by4 mx-4 mt-3">
                  <img :src="list.image" class="rounded-3" />
                </figure>
                <b-tag
                  type="is-danger"
                  rounded
                  style="position: absolute; top: 0"
                  ><b>50%</b></b-tag
                >
              </div>
              <div class="card-content">
                <div class="content">
                  <p class="h3">product name</p>
                  <p class="h6 mt-2">
                    Lorem ipsum dolor, sit amet consectetur a
                  </p>
                  <div class="h4 mt-4">
                    $25
                    <button class="add-btn p-2 h6 bg-00A693">
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </b-carousel-list>
      </div>
    </section>
    <section class="my-5 py-5 bg-EBEBF3">
      <div class="row mx-5">
        <div>
          <p class="h1 c-701C1C">The latest products</p>
        </div>
        <div></div>
      </div>
      <div class="d-flex justify-content-center">
        <b-carousel-list
          v-model="test"
          :data="products"
          :items-to-show="slide_number"
          class="mt-5 w-85 py-3 px-4 shadow-none boxe"
        >
          <template #item="list">
            <div class="card mx-3 rounded-4 bg-EBEBF3 boxe">
              <div class="">
                <figure class="is-5by4 mx-4 mt-3">
                  <img :src="list.image" class="border-radius-16" />
                </figure>
                <b-tag
                  type="is-danger"
                  rounded
                  style="position: absolute; top: 0"
                  ><b>50%</b></b-tag
                >
              </div>
              <div class="card-content">
                <div class="content">
                  <p class="h3">product name</p>
                  <p class="h6 mt-2">
                    Lorem ipsum dolor, sit amet consectetur a
                  </p>
                  <div class="h4 mt-4">
                    $25 <button class="add-btn p-2 h6">add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </b-carousel-list>
      </div>
    </section>
    <section class="position-relative bg-company bg-primary">
      <div class=" px-4 top-0 position-absolute w-100 text-white bg-rgba h-100">
        <div class=" mt-5 d-flex justify-content-between">
          <p class="h1">about us</p>
          <div>
            <button
              class="rounded-pill px-3 py-1 border border-2 border-white text-white bg-none"
            >
              read nore <img src="/icons8-right-35.png" alt="" />
            </button>
          </div>
        </div>
        <div class="mt-4">
          <p class="h6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
            quibusdam voluptate aliquam maxime temporibus, inventore, nemo culpa
            error vitae debitis 
          </p>
          <p class="h6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
            quibusdam voluptate aliquam maxime temporibus, inventore, nemo culpa
            error vitae debitis 
          </p>
        </div>
      </div>
    </section>
    <section class="py-5">
      <div class="row d-flex justify-content-center">
        <div
          class="col-3 d-flex justify-content-center align-items-center flex-column"
        >
          <img src="/Trust-icon.png" alt="" />
          <p class="h6 text-center pt-3">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div
          class="col-3 d-flex justify-content-center align-items-center flex-column"
        >
          <img src="/Q-icon.png" alt="" />
          <p class="h6 text-center pt-3">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div
          class="col-3 d-flex justify-content-center align-items-center flex-column"
        >
          <img src="/D-bike-icon.png" alt="" class="py-2" />
          <p class="h6 text-center pt-3">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [
        { image: "/box-1.jpg", name: "zafron", price: "72" },
        { image: "/peste-box.jpg", name: "peste", price: "100" },
        { image: "/box-1.jpg", name: "golmohamadi", price: "23" },
        { image: "/mive-box.jpg", name: "frut", price: "10" },
        { image: "/box-1.jpg", name: "zafron", price: "72" },
        { image: "/peste-box.jpg", name: "peste", price: "100" },
        { image: "/box-1.jpg", name: "golmohamadi", price: "23" },
        { image: "/mive-box.jpg", name: "frut", price: "10" },
      ],
      slide_number: 0,
      currentSlide: 0,
      slides: [
        {
          image: "/1.jpg",
          caption: "Discover our Persian",
          subtittle: "Discover our Persian saffron",
        },
        {
          image: "/7.jpg",
          caption: "Discover our Persian",
          subtittle: "Discover our Persian saffron",
        },
      ],
      test: 0,
      test_mive: 0,
      test_peste: 0,
      test_gol: 0,
      test_zafron: 0,
      zafron: [
        {
          title: "zafron 1",
          image: "/box-1.jpg",
          rating: 4.4,
        },
        {
          title: "zafron 2",
          image: "/box-1.jpg",
          rating: 3.5,
        },
        {
          title: "zafron 3",
          image: "/box-1.jpg",
          rating: 5,
        },
        {
          title: "zafron 4",
          image: "/box-1.jpg",
        },
        {
          title: "zafron 5",
          image: "/box-1.jpg",
          rating: 5,
        },
        {
          title: "zafron 6",
          image: "/box-1.jpg",
          rating: 4,
        },
        {
          title: "zafron 7",
          image: "/box-1.jpg",
          rating: 2.7,
        },
        {
          title: "zafron 8",
          image: "/box-1.jpg",
          rating: 1.5,
        },
      ],
      peste: [
        {
          title: "peste 1",
          image: "/peste-box.jpg",
          rating: 4.4,
        },
        {
          title: "peste 2",
          image: "/peste-box.jpg",
          rating: 3.5,
        },
        {
          title: "peste 3",
          image: "/peste-box.jpg",
          rating: 5,
        },
        {
          title: "peste 4",
          image: "/peste-box.jpg",
        },
        {
          title: "peste 5",
          image: "/peste-box.jpg",
          rating: 5,
        },
        {
          title: "peste 6",
          image: "/peste-box.jpg",
          rating: 4,
        },
        {
          title: "peste 7",
          image: "/peste-box.jpg",
          rating: 2.7,
        },
        {
          title: "peste 8",
          image: "/peste-box.jpg",
          rating: 1.5,
        },
      ],
      gol: [
        {
          title: "gol 1",
          image: "/gol-m2.jpg",
          rating: 4.4,
        },
        {
          title: "gol 2",
          image: "/gol-m2.jpg",
          rating: 3.5,
        },
        {
          title: "gol 3",
          image: "/gol-m2.jpg",
          rating: 5,
        },
        {
          title: "gol 4",
          image: "/gol-m2.jpg",
        },
        {
          title: "gol 5",
          image: "/gol-m2.jpg",
          rating: 5,
        },
        {
          title: "gol 6",
          image: "/gol-m2.jpg",
          rating: 4,
        },
        {
          title: "gol 7",
          image: "/gol-m2.jpg",
          rating: 2.7,
        },
        {
          title: "gol 8",
          image: "/gol-m2.jpg",
          rating: 1.5,
        },
      ],
      mive: [
        {
          title: "mive 1",
          image: "/mive-box.jpg",
          rating: 4.4,
        },
        {
          title: "mive 2",
          image: "/mive-box.jpg",
          rating: 3.5,
        },
        {
          title: "mive 3",
          image: "/mive-box.jpg",
          rating: 5,
        },
        {
          title: "mive 4",
          image: "/mive-box.jpg",
        },
        {
          title: "mive 5",
          image: "/mive-box.jpg",
          rating: 5,
        },
        {
          title: "mive 6",
          image: "/mive-box.jpg",
          rating: 4,
        },
        {
          title: "mive 7",
          image: "/mive-box.jpg",
          rating: 2.7,
        },
        {
          title: "mive 8",
          image: "/mive-box.jpg",
          rating: 1.5,
        },
      ],
    };
  },
  methods: {
    change_slide_number() {
      if (this.$device.isMobile) this.slide_number = 1;
      else if (this.$device.isTablet) {
        this.slide_number = 2;
      } else if (this.$device.isDesktop) {
        this.slide_number = 4.5;
      }
    },
  },
  mounted() {
    this.change_slide_number();
  },
};
</script>
<style>
.bot-50 {
  bottom: 10%;
  left: 5%;
}
.h-140 {
  height: 140px;
}
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.bg-rgba{
  background-color: rgba(0, 0, 0, 0.5);
}
.fs-12 {
  font-size: 12px;
}
.active {
  background-color: #717171;
}
body {
  overflow-x: hidden;
}
html {
  overflow-x: hidden;
}
.c-005884{
  color: #005884;
}
.bg-dec {
  background-image: url(/pattern.png);
}
.bg-white-opacity {
  background-color: rgba(255, 255, 255, 0.959);
}
.border-redius-20 {
  border-radius: 20px;
}
.border-redius-16 {
  border-radius: 16px;
}
.fs-4vw {
  font-size: 4vw;
}
.fs-2vw {
  font-size: 1.5vw;
}
.text-justify {
  text-align: justify;
}
.bg-701C1C {
  background-color: #701c1c;
}
.bg-FE25A2 {
  background-color: #fe25a2;
}
.bg-C81D11 {
  background-color: #c81d11;
}
.h-600 {
  height: 600px;
}
.bg-363636 {
  background-color: #363636;
}
.bg-none {
  background-color: transparent;
}
.border-none {
  border: none;
}
.bg-00A693 {
  background-color: #00a693;
}
.c-701C1C {
  color: #701c1c;
}
.c-FE25A2 {
  color: #fe25a2;
}
.c-00A693 {
  color: #00a693;
}
.C81D11 {
  color: #c81d11;
}
.boxe {
  transition: all 0.3s;
}
.boxe:hover {
  box-shadow: 0 0 20px 2px rgb(194, 194, 194);
}
.w-85 {
  width: 85%;
}
.bg-company{
  height: 350px;
  background-image: url(/company.jpg);
  background-attachment: fixed
}
.bg-EBEBF3 {
  background-color: #ebebf3;
}
.shadow-none {
  box-shadow: none;
}
.add-btn {
  background-color: #00a693;
  color: white;
  border: none;
  border-radius: 8px;
}

header {
  overflow: hidden;
  width: 100%;
  height: 900px;
  position: relative;
  top: 0;
}
.bg-dec-zafron {
  background-image: url(/bg-dec-zafron.jpg);
  background-size: cover;
}
.position-top-left-dec-product {
  top: 8%;
  left: 3%;
}
.position-bot-left-dec-product {
  bottom: 8%;
  left: 5%;
}
@media (max-width: 768px) {
  .position-top-left-dec-product {
    top: 5%;
    left: 5%;
  }
  .fs-4vw {
    font-size: 6vw;
  }
  .fs-2vw {
    font-size: 4vw;
  }
}
.name-site {
  color: white;
}
</style>
