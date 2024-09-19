# STORE

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your Vuex Store files.
Vuex Store option is implemented in the Nuxt.js framework.

Creating a file in this directory automatically activates the option in the framework.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/vuex-store).
<div
          @click="showSearch = !showSearch"
          class="box-search-notactive rounded-pill position-relative d-flex align-items-center justify-content-between px-3"
        >
          <input type="text" placeholder="search" class="bg-none border-none text-white outline-none d-none">
          <img  src="/3.png" alt="" style="width:10%" />
          .box-search-active{
  width: 270px;
  height: 35px;
  border: 2px solid white;
}