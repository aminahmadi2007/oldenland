<!-- /components/Navbar.vue -->
<template>
  <div>
    <nav
      class="d-flex align-items-center justify-content-between border-bot z-1"
    >
      <div class="d-flex align-items-center mx-3">
        <div
          class="box-img position-relative mx-1 d-flex align-items-center justify-content-center"
        >
          <img @click="showmenu = !showmenu" class="w-55" src="/4.png" alt="" />
          <div
            class="px-4 bg-white shadow-lg top-20-left-20 rounded-3 z-1 menue-box d-flex flex-column justify-content-around"
            v-if="showmenu"
          >
            <div class="position-relative row">
              <NuxtLink to="/" class="text-decoration-none text-black">
                <div class="col-12 d-flex align-items-center my-1">
                  <div class="div my-2">
                    <img src="/home.png" alt="" width="25px" />
                  </div>
                  <div class="div mx-3"><p class="m-0 h6">HOME</p></div>
                </div>
              </NuxtLink>
              <div
                class="col-12 d-flex align-items-center my-1 position-relative"
                @click="showsubmenu = !showsubmenu"
              >
                <div class="div my-2">
                  <img src="/cart.png" alt="" width="20px" />
                </div>
                <div class="div mx-3"><p class="m-0 h6">PRODUCT</p></div>
                <div
                  class="position-sub-menue px-2 bg-white shadow-lg rounded-3 z-2"
                  v-if="showsubmenu"
                >
                  <div
                    v-for="product_menue in products_menue"
                    class="col-12 d-flex align-items-center my-2"
                  >
                    <div class="div mx-3">
                      <p class="m-0 h6">{{ product_menue }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <NuxtLink to="/" class="text-decoration-none text-black">
                <div class="col-12 d-flex align-items-center my-1">
                  <div class="div my-2">
                    <img src="/help.png" alt="" width="25px" />
                  </div>
                  <div class="div mx-3"><p class="m-0 h6">HELP</p></div>
                </div>
              </NuxtLink>
              <NuxtLink to="/" class="text-decoration-none text-black">
                <div class="col-12 d-flex align-items-center my-1">
                  <div class="div my-2">
                    <img src="/profile.png" alt="" width="25px" />
                  </div>
                  <div class="div mx-3"><p class="m-0 h6">profile</p></div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="box-img d-flex d-lg-none"></div>
        <div class="box-img align-items-center d-none d-lg-flex">
          <div
          :class="{ 'search-style': showSearch }"
          class="rounded-pill position-absolute d-flex align-items-center justify-content-between px-3 base-style "
          
        >
          <input
            type="text"
            placeholder="search"
            :class="{ 'd-block': showSearch, 'd-none': !showSearch }"
            class="bg-none border-none text-white outline-none"
          />
          <img @click="showSearch = !showSearch"
           src="/3.png" alt="" style="width: 40%;" :style="showSearch ? { width: '10%' } : {}" />
        </div>
        </div>
      </div>
      <div>
        <NuxtLink to="/" class="text-decoration-none">
          <p class="h3 m-0 text-white">oldenland</p>
        </NuxtLink>
      </div>
      <div class="d-flex align-items-center mx-3">
        <NuxtLink to="/login">
          <div
            class="box-img position-relative mx-1 d-flex align-items-center justify-content-center"
          >
            <img class="w-55" src="/2.png" alt="" />
          </div>
        </NuxtLink>
        <NuxtLink to="/cart">
          <div
            class="box-img position-relative mt-1 d-flex align-items-center justify-content-center"
          >
            <img class="w-55" src="/1.png" alt="" />
          </div>
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showmenu: false,
      showsubmenu: false,
      showSearch: false, // مقدار پیش‌فرض
      searchStyle: {
        width: '270px',
        height: '35px',
        border: '2px solid white',
      },
      products_menue: ["zafron", "peste", "gol mohamadi", "mive"],
    };
  },
};
</script>
<style>
.top-20-left-20 {
  position: absolute;
  top: 50px;
  left: 2%;
}
.position-sub-menue {
  width: 200px;
  background-color: red;
  position: absolute;
  top: 20px;
  right: -130%;
}
.outline-none{
  outline: none;
}
.menue-box {
  width: 200px;
}
.border-bot {
  border-bottom: 2px solid gray;
}
html {
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
}
nav {
  width: 100%;
  height: 90px;
  background-size: cover;
  background-image: url(/bg-nav.png);
  position: absolute;
}
.box-img {
  width: 45px;
  height: 45px;
  justify-content: space-between;
  cursor: pointer;
}
.w-55 {
  width: 55%;
}
.base-style {
  height: 35px;
  transition: width 0.5s ease-in-out; /* تنظیم ترنزیشن با مدت زمان 0.5 ثانیه */
  width: 100px; /* مقدار اولیه عرض */
}

.search-style {
  width: 270px; /* مقدار عرض در حالت showSearch = true */
  border: 2px solid white;
}
</style>
