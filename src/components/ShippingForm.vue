<template>
  <div class="hero">
    <p class="title has -text-centered">Eine Versandadresse eingeben</p>

    <div class="container has-text-left">
      <div class="field" id="fullnameField">
        <label class="label">Vor- und Nachname</label>
        <div class="control">
          <input class="input" type="text" v-model="fullName" @input="formIsFilled" />
        </div>
      </div>

      <div class="field is-grouped">
        <label class="label has-text-centered is-paddingless is-marginless" id="strasseLabel">Straße</label>
        <div class="control" id="strasseControl">
          <input class="input" type="text" v-model="strasse" id="strasseInput" />
        </div>
        <label class="label has-text-centered is-paddingless is-marginless" id="hNrLabel">Hausnr.</label>
        <div class="control">
          <input @input="formIsFilled" class="input" id="hNrInput" type="text" v-model="hausnr" />
        </div>
      </div>

      <div class="field" id="cityField">
        <label class="label">Stadt</label>
        <div class="control">
          <input class="input" type="text" v-model="city" />
        </div>
      </div>

      <div class="field is-grouped">
        <label class="label has-text-centered is-paddingless is-marginless" id="plzLabel">PLZ</label>
        <div class="control">
          <input @input="formIsFilled" class="input" type="number" id="plzInput" v-model="plz" />
        </div>
        <p class="control has-icons-left">
          <span class="select has-text-left" id="countrySlct">
            <select v-model="country">
              <option v-for="country in shippingCountries" :key="country.name">{{country.name}}</option>
            </select>
          </span>
        </p>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-success" :disabled="!formComplete" @click="nextStep()">Weiter</button>
        </div>
        <div class="control">
          <button class="button is-link is-light" @click="this.$router.push('/')">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      fullName: "",
      strasse: "",
      hausnr: "",
      city: "",
      plz: "",
      country: "Deutschland",
      formComplete: false
    };
  },
  computed: {
    ...mapState("checkout", {
      shippingCountries: function(state) {
        return state.shippingCountries;
      }
    })
  },
  methods: {
    ...mapActions("checkout", ["saveShippingInfo"]),
    ...mapMutations("checkout", ["incrementStep"]),
    formIsFilled() {
      let inputs = document.getElementsByClassName("input");
      let isFilled = true;
      Array.prototype.forEach.call(inputs, el => {
        if (el.value == "") {
          isFilled = false;
        }
      });
      if (isFilled) {
        this.formComplete = true;
      } else {
        this.formComplete = false;
      }
    },
    nextStep() {
      this.saveShippingInfo({
        fullname: this.fullName,
        adress: this.strasse + " " + this.hausnr,
        city: this.city,
        plz: this.plz,
        country: this.country
      });
      this.incrementStep();
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and(min-width: 768px) {
  .is-grouped > .label {
    width: 125px;
    padding-right: 5%;
  }
  #plzInput {
    width: 100px;
  }
}
@media screen and(max-width: 767px) {
  .is-grouped > .label {
    width: 75px;
    padding-right: 5%;
  }
  #strasseLabel {
    padding-left: 5%;
    padding-top: 2.5%;
  }
  #hNrLabel {
    padding-top: 2.5%;
  }
  #fullnameField,
  #cityField {
    margin-left: 5%;
    width: 95%;
  }
  #plzLabel {
    padding-left: 5%;
    padding-top: 2.5%;
  }
  #strasseControl {
    max-width: 125px;
  }
  #plzInput {
    width: 75px;
  }
}
#hNrInput {
  width: 50px;
}
</style>