<template>
  <div id="productTile" class="container">
    <div class="img">
      <img :v-lazy="imgSrc" id="previewImg" />
    </div>
    <div class="text has-text-left">
      <p class="has-text-weight-bold is-size-6">{{productName}}</p>
      <p class="is-size-7">{{shortDescription}}</p>
      <p class="has-text-weight-semibold is-size-5">{{price}}€</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["productName", "productType", "price", "imgSrc", "shortDescription"]
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #productTile {
    width: 20vw;
    height: 30vh;
  }
}
@media screen and (max-width: 1023px) {
  #productTile {
    width: 45vw;
    height: 60vh;
  }
}
#productTile {
  box-sizing: content-box;
  background-color: white;
  padding-left: 5%;
  padding-right: 5%;
}
</style>