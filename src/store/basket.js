export default {
  namespaced: true,
  state: {
    inBasket: []
  },
  getters: {
    totalPrice(state) {
      let total = 0;
      for (let i = 0; i < state.inBasket.length; i++) {
        total += state.inBasket[i].product.price * state.inBasket[i].qty
      }
      return total;
    }
  },
  mutations: {
    addToBasket(state, product) {
      let isInBasket = false;
      for (let i = 0; i < state.inBasket.length; i++) {
        if (state.inBasket[i].product == product) {
          isInBasket = true;
          state.inBasket[i].qty++;
        }
      }
      if (!isInBasket) {
        state.inBasket.push({ product: product, qty: 1 })
      }
    },
    changeQty(state, { product, newQty }) {
      for (let i = 0; i < state.inBasket.length; i++) {
        if (state.inBasket[i].product == product) {
          state.inBasket[i].qty = newQty
        }
      }
    },
    removeFromBasket(state, product) {
      for (let i = 0; i < state.inBasket.length; i++) {
        if (state.inBasket[i].product == product) {
          state.inBasket.splice(i, i + 1)
        }
      }
    }
  },
  actions: {
    findProductToAdd({ commit, rootState, state }, productName) {
      for (let i = 0; i < rootState.product.products.length; i++) {
        console.log(productName, rootState.product.products[i].name + " " + rootState.product.products[i].productType)
        if (rootState.product.products[i].name + " " + rootState.product.products[i].productType == productName) {
          commit("addToBasket", rootState.product.products[i])
          console.log(state.inBasket)
          return
        }
      }
    }
  },
  modules: {
  }
}