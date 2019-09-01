<template>
  <div class="formContainer">
    <div class="formContent">
    <div v-if="!this.$store.getters.isAuthenticated">
        <h2>Not authorized</h2>
    </div>
    <div v-else>
    <h2>Add runningdata</h2>
    <h3 class="alertText" v-if="emptyField">Empty fields detected</h3>
    <h3 v-else><br></h3>
    <form>
        <input type="date" v-model="input.date" placeholder="date" data-date="" data-date-format="DD MMMM YYYY" v-on:click="resetValidation()">
        <br/>
        <input type="text" v-model="input.start" placeholder="start location" v-on:click="resetValidation()">
        <br/>
        <input type="text" v-model="input.end" placeholder="end location" v-on:click="resetValidation()">
        <br/>
        <input type="number" v-model="input.distance" placeholder="distance" v-on:click="resetValidation()">
        <br/>
        <input type="time" v-model="input.time" placeholder="time" step="1" v-on:click="resetValidation()">
        <br/>
        <input type="text" v-model="input.averageSpeed" placeholder="average speed" readonly v-on:click="resetValidation()">
    </form>
    <br/>
    <button class="signin" v-on:click="submit()">
        <span>Submit</span>
    </button>
    <div class="sig"></div>
    </div>
    </div>
  </div>
</template>

<script>
import SpreadsheetUtil from "@/modules/SpreadsheetUtil.js";
import tableUtil from "@/modules/tableUtil.js";
import SheetData from "@/modules/sheetData.js"
export default {
  data() {
    return {
      input: new SheetData("","","","","",0),
      emptyField: false
    };
  },
  methods: {
    submit() {
      function isEmpty(obj) {
        for (let k in obj) {
            let x = obj[k];
          if ( x === "") {
            return true;
          }
        }
        return false;
      }
      if (isEmpty(this.input)) {
        this.emptyField = true;
        return;
      }
      console.log(this.input);
      SpreadsheetUtil.addNewRunningData(this.input);
    },
    resetValidation() {
      this.emptyField = false;
    },
    checkSpeedParams() {
      if (this.input.distance.length > 0 && this.input.time.length > 0) {
        return true;
      }
      return false;
    },
    timeToDecimal() {
      let formattedTime = tableUtil.timeToDecimal(this.input.time); 
      let speed = this.input.distance.replace(",", ".") / formattedTime;
      this.input.averageSpeed = speed;
    }
  },
  computed: {
    checkTime() {
      return this.input.time;
    },
    checkDistance() {
      return this.input.distance;
    }
  },
  watch: {
    checkTime() {
      if (this.checkSpeedParams()) {
        this.timeToDecimal();
      } else this.input.averageSpeed = 0;
    },
    checkDistance() {
      if (this.checkSpeedParams()) {
        this.timeToDecimal();
      } else this.input.averageSpeed = 0;
    }
  }
};
</script>

<style lang="scss">
@import url(../styles/form.scss);
</style>
