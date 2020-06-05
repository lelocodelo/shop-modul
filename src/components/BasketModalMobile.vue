<template>
  <div id="basketModal">
    <div class="button is-pulled-right is-success is-rounded" id="launchModal" @click="openModal">
      <span class="is-pulled-left icon" id="basketIcon">
        <i class="fas fa-shopping-basket"></i>
      </span>
    </div>
    <div class="modal" :class="{'is-active': isActive}">
      <div class="modal-background has-background-light"></div>
      <div class="modal-content">
        <Basket id="basket"></Basket>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
    </div>
  </div>
</template>

<script>
import Basket from "./Basket";
export default {
  components: {
    Basket
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    openModal() {
      this.isActive = true;
    },
    closeModal() {
      this.isActive = false;
    }
  }
};
</script>

<style lang="scss" scoped>
#basketModal {
  position: relative;
  z-index: 1;
}
.modal-background{
  opacity: 0.75;
}
.modal-close{
  background-color: black;
}
#basket{
  width: 90vw;
}
#launchModal {
  width: 50px;
  height: 50px;
}
</style>