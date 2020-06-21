<template>
  <div class="hero">
    <div class="container">
      <p class="title">Bestellung Bestätigen</p>
      <Shipping v-if="step == 1"></Shipping>
    </div>
  </div>
</template>

<script>
import Shipping from "../components/ShippingForm";
import { mapState } from "vuex";
export default {
  components: {
    Shipping
  },
  computed: {
    ...mapState("checkout", {
      step: function(state) {
        return state.step;
      }
    })
  }
};
</script>

<style lang="scss" scoped>
</style>