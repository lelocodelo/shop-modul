<template>
  <div id="productTile" class="container">
    <div class="img has-text-centered">
      <img v-lazy="imgSrc" id="previewImg" />
    </div>
    <div class="text has-text-centered">
      <p class="has-text-left has-text-weight-bold is-size-6">{{productName}} {{productType}}</p>
      <p class="has-text-left is-size-7">{{shortDescription}}</p>
      <p class="has-text-right has-text-weight-semibold is-size-5">
        {{price}}€
        <button
          class="button is-small is-paddingless"
          id="addToBasketBtn"
          @click="findProductToAdd(productName+ ' ' + productType)"
        >
          <span class="icon">
            <i class="fas fa-plus"></i>
          </span>
        </button>
        <span class="hoverText is-size-7">Add To Basket</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  props: ["productName", "productType", "price", "imgSrc", "shortDescription"],
  methods: {
    ...mapMutations("basket", ["addToBasket"]),
    ...mapActions("basket", ["findProductToAdd"])
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #productTile {
    width: 20vw;
    height: 30vh;
    min-height: 320px;
  }
}
@media screen and (max-width: 1023px) {
  #productTile {
    width: 45vw;
    height: 33vh;
    min-height: 320px;
  }
}
.text {
  width: 75%;
}
#productTile {
  box-sizing: content-box;
  background-color: white;
  padding-left: 10%;
  padding-right: 10%;
}
#addToBasketBtn {
  width: 30px;
  height: 30px;
  margin-left: 5%;
}
.text {
  position: relative;
  display: inline-block;
}
.text .hoverText {
  bottom: 35%;
  left: 92%;
  margin-left: -60px;
  visibility: hidden;
  transform: scale(0.75, 0.75);
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}
.text:hover .hoverText {
  visibility: visible;
}
</style>