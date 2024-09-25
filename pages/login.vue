<template>
  <div>
    <div class="p-5"></div>
    <section
      class="container my-5 bg-primary h-750 rounded-4 d-flex justify-content-center align-items-center"
    >
      <div
        class="my-5 col-11 col-md-5 bg-flur col-lg-4 p-4 rounded-4 text-white h-60"
      >
      <div class="row px-1">
            <h2>Login</h2>
              <div class="col-12 mt-3 p-0">
                <p class="m-0 text-black">Email</p>
                <input
                  type="email"
                  class="w-100 border-none mt-2 px-3 py-3 bg-flur rounded-2"
                  placeholder="Email"
                />
              </div>
              <div class="col-12 mt-3 p-0">
                <p class="m-0 text-black">Password</p>
                <div class="d-flex position-relative align-items-center">
                  <input
                  :type="inputtype"
                  class="w-100 border-none mt-2 px-3 py-3 bg-flur rounded-2"
                  placeholder="password"
                />
                <img src="/icons8-hide-24.png" alt="" class="position-absolute right-10" v-if="hidePass"  @click="hidePass_showPass">
                <img src="/icons8-show-24.png" alt="" class="position-absolute right-10" v-if="!hidePass"   @click="hidePass_showPass">
                </div>
              </div>
              <input
                  type="submit"
                  class="w-100 border-none mt-4 px-3 py-3 bg-00214F rounded-2 text-white"
                  placeholder="Email"
                />
            </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        showPass:false,
        hidePass:true,
        inputtype:'password',
      }
    },
    methods:{
      hidePass_showPass(){
        this.hidePass=!this.hidePass;
        if(this.hidePass){
          this.inputtype="text";
        }
        else{
          this.inputtype="password";
        }
      }
    }
  }
</script>
<style>
.h-750 {
  height: 750px;
  background-image: url(/Untitled-1.jpg);
}
.bg-flur{
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
}
.right-10{
  right: 15px;
}
.h-60{
  height: 55%;
}
.bg-00214F{
        background-color: #0a3f8a;
    }
</style>
