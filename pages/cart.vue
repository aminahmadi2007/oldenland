<template>
  <div>
    <div class="p-5"></div>
    <div class="row d-flex justify-content-around align-items-center px-4 mt-4">
      <div class="col-12 col-md-6">
        <div>
          <h1 class="h1">Shopping Cart</h1>
          <p class="h5">You have {{ items_size }} item(s) in your cart</p>
        </div>
        <div class="mt-5">
          <div class="row border-but fs-15 d-flex justify-content-around py-3">
            <div class="fs-15 col-4 h5 p-0 m-0">Product</div>
            <div class="fs-15 col-1 h5 p-0 m-0 d-flex justify-content-center">
              Price
            </div>
            <div class="fs-15 col-3 h5 p-0 m-0 d-flex justify-content-center">
              Quantity
            </div>
            <div class="fs-15 col-1 h5 p-0 m-0 d-flex justify-content-center">
              Subtotal
            </div>
          </div>
          <div
            v-if="item.count > 0"
            v-for="item in items"
            :key="item.name"
            class="row border-but d-flex align-items-center justify-content-around py-2"
          >
            <div class="col-4 m-0 h5 d-flex align-items-center p-0">
              <img
                :src="item.image"
                alt=""
                width="70px"
                height="70px"
                class="border-product m-0"
              />
              <p class="fs-15 m-0 mx-2 mw-100">{{ item.name }}</p>
            </div>
            <div class="col-1 h5 fs-15 p-0 m-0 d-flex justify-content-center">
              ${{ item.price }}
            </div>
            <div class="col-3 h5 p-0 m-0 d-flex justify-content-center">
              <div class="d-flex align-items-center">
                <button
                  @click="decreaseItem(item.name)"
                  class="border-00A693 plus-mines d-flex align-items-center p-0 justify-content-center"
                  :class="{ 'border-red': item.count <= 1 }"
                >
                  <img
                    src="/icons8-delete-20.png"
                    alt=""
                    v-if="item.count <= 1"
                  />

                  <img
                    v-if="item.count > 1"
                    src="/icons8-negative-20.png"
                    alt=""
                    width="15px"
                  />
                </button>
                <p class="h5 mx-3 fs-15 d-flex align-items-center">
                  {{ item.count }}
                </p>
                <button
                  @click="increaseItem(item.name)"
                  class="border-00A693 plus-mines d-flex align-items-center p-0 justify-content-center"
                >
                  <img src="/icons8-plus-20.png" alt="" width="15px" />
                </button>
              </div>
            </div>
            <div class="col-1 h5 fs-15 p-0 m-0 d-flex justify-content-center">
              ${{ item.price * item.count }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="my-5 col-11 col-md-5 col-lg-4 bg-363636 p-4 rounded-4 text-white"
      >
        <div class="row d-flex flex-column px-2">
          <p class="fs-2 col-12 p-0 mx-1">Card Details</p>
          <div class="col-12">
            <div class="row">
              <div class="p-0 mx-1 col-12">
                <p>card type</p>
              </div>
              <div class="col mx-1 rounded-2 bg-primary p-4"></div>
              <div class="col mx-1 rounded-2 bg-primary p-4"></div>
              <div class="col mx-1 rounded-2 bg-primary p-4"></div>
              <div class="col mx-1 rounded-2 bg-primary p-4"></div>
            </div>
            <div class="row px-1">
              <div class="col-12 mt-3 p-0">
                <p class="m-0">Name on card</p>
                <input
                  type="text"
                  class="w-100 border-none mt-2 px-3 py-2 bg-545454 rounded-2"
                  placeholder="Name"
                />
              </div>
              <div class="col-12 mt-3 p-0">
                <p class="m-0">Card number</p>
                <input
                  type="number"
                  class="w-100 border-none mt-2 px-3 py-2 bg-545454 rounded-2"
                  placeholder="000 000 000 000"
                />
              </div>
              <div class="col-12 mt-3">
                <div class="row">
                  <div class="col p-0 mr-5">
                    <p class="m-0">card date</p>
                    <input
                      type="number"
                      class="w-100 border-none mt-1 px-3 py-2 bg-545454 rounded-2"
                      placeholder="01/02"
                    />
                  </div>
                  <div class="col p-0 mr-5">
                    <p class="m-0">cvv2</p>
                    <input
                      type="number"
                      class="w-100 border-none mt-1 px-3 py-2 bg-545454 rounded-2"
                      placeholder="8888"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="mt-4" />
        </div>
        <div class="row mt-3 px-1">
          <div class="col-12">
            <div class="row">
              <div class="col-6 h5 fs-15">Total Price:</div>
              <div class="col h5 fs-15" dir="rtl">${{ totalPrice }}</div>
            </div>
            <div class="col-12 py-2 mt-3 text-white rounded-3 bg-primary">
              <div class="m-0 row">
                <div class="m-0 col h5 fs-15 d-flex align-items-center">
                  ${{ totalPrice }}
                </div>
                <div class="m-0 col-6 h5 fs-15" dir="rtl">
                  <img src="/icons8-right-35.png" alt="" width="30px" /> Add
                  address
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="product in products">
      {{ product.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["items", "items_size", "totalPrice"]),

    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    ...mapMutations(["increaseCount", "decreaseCount"]),
    increaseItem(name) {
      this.increaseCount(name);
    },
    decreaseItem(name) {
      this.decreaseCount(name);
    },
  },
};
</script>

<style>
.border-none {
  border: none;
}
.mr-5 {
  margin-right: 8px;
}
.fs-15 {
  font-size: 14px;
}
.border-but {
  border-bottom: 3px solid lightgray;
}
.border-product {
  border: 2px solid lightgray;
  border-radius: 8px;
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
.border-00A693 {
  border: 2px solid #00a693;
}
.border-red {
  border: 1px solid #ff0000;
}
.bg-363636 {
  background-color: #363636;
}
.bg-545454 {
  background-color: #545454;
}
.name-site{
  color: black;
}
</style>
