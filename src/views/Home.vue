<template>
  <div class="home hero">
    <div class="columns">
      <div class="hero-body column is-9">
        <div class="columns is-hidden-mobile" v-for="products in productGroups(3)" :key="products.index">
          <div class="column">
            <ProductTile
              :productName="products[0].name"
              :productType="products[0].productType"
              :price="products[0].price"
              :imgSrc="products[0].img[0]"
              :shortDescription="products[0].shortDesc"
            ></ProductTile>
          </div>
          <div class="column" v-if="products.length > 1">
            <ProductTile
              :productName="products[1].name"
              :productType="products[1].productType"
              :price="products[1].price"
              :imgSrc="products[1].img[0]"
              :shortDescription="products[1].shortDesc"
            ></ProductTile>
          </div>
          <div class="column" v-if="products.length > 2">
            <ProductTile
              :productName="products[2].name"
              :productType="products[2].productType"
              :price="products[2].price"
              :imgSrc="products[2].img[0]"
              :shortDescription="products[2].shortDesc"
            ></ProductTile>
          </div>
        </div>
        <div class="columns is-mobile is-hidden-desktop" v-for="products in productGroups(2)" :key="products.index">
          <div class="column">
            <ProductTile
              :productName="products[0].name"
              :productType="products[0].productType"
              :price="products[0].price"
              :imgSrc="products[0].img[0]"
              :shortDescription="products[0].shortDesc"
            ></ProductTile>
          </div>
          <div class="column" v-if="products.length > 1">
            <ProductTile
              :productName="products[1].name"
              :productType="products[1].productType"
              :price="products[1].price"
              :imgSrc="products[1].img[0]"
              :shortDescription="products[1].shortDesc"
            ></ProductTile>
          </div>
        </div>
      </div>
      <div class="hero-body column is-3"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProductTile from "../components/ProductTile";
export default {
  name: "Home",
  components: {
    ProductTile
  },
  computed: {
    ...mapState("product", {
      products: function(state) {
        return state.products;
      }
    }),
  },
  methods: {
    productGroups: function(size) {
      let groupSize = size;
      let grouped = [];
      for (let i = 0; i < this.products.length; i += groupSize) {
        grouped.push(this.products.slice(i, i + groupSize));
      }
      console.log(grouped);
      return grouped;
    }
  },
};
</script>

<style scoped>
</style>