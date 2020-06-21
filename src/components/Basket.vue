<template>
  <div class="container">
    <div class="basketHead"></div>
    <div class="basketCenter">
      <div class="box" v-for="product in basket" :key="product.name">
        <div class="columns is-mobile">
          <div class="column is-3">
            <img v-lazy="product.product.img[0]" width="75px" height="75px" />
          </div>
          <div class="column is-7 has-text-left">
            <p>{{product.product.name}} {{product.product.productType}} - {{product.qty}}x</p>
          </div>
          <div class="column is-2">{{product.product.price}}</div>
        </div>
      </div>
    </div>
    <div class="basketFoot">
      <p>
        <span class="is-pulled-left icon" id="basketIcon">
          <i class="fas fa-shopping-basket"></i>
        </span>
        <span class="is-pulled-right" id="totalPrice">{{totalPrice}} €</span>
      </p>
      <p>
        <button class="has-text-centered button is-success is-small" id="checkoutBtn" @click="redirectToCheckout">Checkout</button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState("basket", {
      basket: function(state) {
        return state.inBasket;
      }
    }),
    ...mapGetters("basket", ["totalPrice"])
  },
  methods: {
    redirectToCheckout() {
      this.$router.push('checkout')
    }
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  .container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    min-width: 20vw;
    height: 80vh;
    position: relative;
  }
}
@media screen and (max-width: 1023px) {
  .container {
    min-width: 80vw;
  }
}
p {
  min-width: 20vw;
}
#basketIcon,
#checkoutBtn,
#totalPrice {
  margin-top: 2.5%;
}
.basketHead,
.basketFoot {
  border: 1px solid black;
  height: 50px;
}
.basketCenter {
  min-height: 50px;
  width: inherit;
  border-right: 1px solid black;
  border-left: 1px solid black;
}
</style>