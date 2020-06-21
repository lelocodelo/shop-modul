export default {
  namespaced: true,
  state: {
    step: 1,
    shippingInfo: {
      fullname: '',
      address: '',
      city: '',
      plz: '',
      country: ''
    },
    billingInfo: {
      fullname: '',
      address: '',
      city: '',
      zip: '',
      country: ''
    },
    creditCardInfo: {
      cardNumber: '',
      cardHolderName: '',
      expireDate: '',
      cvv: ''
    },
    shippingCountries: [
      { name: "Deutschland", versandKosten: "4,99€" },
      { name: "Österreich", versandKosten: "4,99€" },
      { name: "Schweiz", versandKosten: "4,99€" },
      { name: "Frankreich", versandKosten: "4,99€" },
      { name: "Niederlande", versandKosten: "4,99€" },
      { name: "Belgien", versandKosten: "4,99€" },
      { name: "Luxemburg", versandKosten: "4,99€" },
      { name: "Dänemark", versandKosten: "4,99€" },
      { name: "Polen", versandKosten: "4,99€" },
      { name: "Tcheschien", versandKosten: "4,99€" }
    ]
  },
  mutations: {
    incrementStep(state) {
      if (state.step < 3) {
        state.step++;
      }
    },
    decrementStep(state) {
      if (state.step > 1) {
        state.step--;
      }
    },
    setShippingInfo(state,obj){
      state.fullname = obj.fullname
      state.address = obj.address
      state.city = obj.city
      state.plz = obj.plz
      state.country = obj.country
    }
  },
  actions: {
    saveShippingInfo({commit}, shippingAdress) {
      commit('setShippingInfo', shippingAdress)
    }
  },
  modules: {
  }
}