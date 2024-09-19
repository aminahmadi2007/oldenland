<template>
  <div>
    <section class="h-650 position-relative">
      <div></div>
      <div class="bg-rgba position-absolute w-100 h-100 top-0">
        <div class="bot-10 position-absolute">
          <div class="display-1 d-flex text-white">
            <p class="border-top-orange">p</p>
            <p class="mt-2 display-1 m-0">ersian zaffron</p>
          </div>
          <div class="w-75 text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              nostrum labore corporis tempora repellat ali
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="row d-flex flex-column">
      <div class="col">
        <div class="row d-flex justify-content-between p-5">
          <h1 class="px-0 px-lg-4 col-5 h4 m-0">persian zafron</h1>
          <select
            class="form-select w-50 bg-secondary col-2 text-white h-75"
            aria-label="Default select example"
          >
            <option selected>select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="col">
        <NuxtLink to="/product/">
          <div class="row d-flex justify-content-center">
          <div
            v-for="x in 8"
            class="col-5 col-sm-3 col-md-3 col-xl-2 py-2 d-flex flex-column mx-2 my-3 rounded-3"
          >
            <div class="d-flex justify-content-center">
              <img
                src="/zafron-box.jpg"
                alt=""
                width="100%"
                class="rounded-4"
              />
            </div>
            <div>
              <div>
                <div class="d-flex justify-content-between">
                  <p class="m-0 mt-2 fs-15">persian zafron</p>
                  <p class="my-2 fs-15 mx-2">$25.00</p>
                </div>
                <div><img src="/star-rate5.png" alt="" width="100px" />5</div>
                <div class="d-flex align-items-center mt-1">
                  <button
                    class="fs-15 border-none rounded-3 px-3 py-1 border-redius-8 bg-C81D11 text-white mt-3"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      rate_star: [{ name: "5 star", rate: 2130, star_img: "/star-rate5.png" }],
    };
  },
};
</script>
<style>
.bot-10 {
  bottom: 10%;
  left: 8%;
}
.border-top-orange {
  border-top: 5px solid orange;
}
.bg-white-opacity {
  background-color: rgba(255, 255, 255, 0.959);
}
.fs-15 {
  font-size: 15px;
}
.w-200 {
  width: 200px;
}
.plus-mines {
  width: 28px;
  height: 28px;
  background-color: transparent;
  border-radius: 8px;
  background-color: #00a693;
  color: white;
  font-size: 20px;
  font-weight: 500;
}
.border-redius-20 {
  border-radius: 20px;
}
.border-redius-16 {
  border-radius: 16px;
}
.border-none {
  border: none;
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
.bg-EBEBF3 {
  background-color: #ebebf3;
}
.bg-363636 {
  background-color: #363636;
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
.h-650 {
  height: 650px;
  overflow: hidden;
  background-image: url(/zaferon1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-rgba {
  background-color: rgba(0, 0, 0, 0.5);
}
.name-site {
  color: white;
}
</style>
