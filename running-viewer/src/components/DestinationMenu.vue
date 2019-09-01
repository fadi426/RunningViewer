<template>
    <div class="menuContainer">
            <div class="select animated fadeIn">
        <!-- You can toggle select (disabled) -->
        <label>
            <input type="checkbox" name="placeholder" v-on:click="checkForToggle()">
            <i class="toggle icon icon-arrow-down"></i>
            <i class="toggle icon icon-arrow-up"></i>
            <span class="placeholder">Choose your destination</span>
            <div class="scrollableDiv">
              <label class="option" v-for="destination in destinationList" v-bind:key="destination" v-on:click="setSelectedValue">
                  <input type="radio" name="option" v-on:click="checkForToggle()">
                  <span class="title animated fadeIn">{{destination}}</span>
              </label>
            </div>
        </label>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      destinationList: []
    };
  },
  methods: {
    setSelectedValue() {
      document.getElementsByName("option").forEach(element => {
        if (element.checked) {
          let selectedValue = element.parentElement.getElementsByTagName(
            "span"
          )[0].textContent;
          this.$store.commit("setSelectedDestination", selectedValue);
        }
      });
      document.getElementsByName('placeholder')[0].checked = false;
      this.checkForToggle();
    },
    createDestinationList() {
      this.runningData.forEach(dataElement => {
        if (!this.destinationList.includes(dataElement.end)) {
          this.destinationList.push(dataElement.end);
        }
      });
    },
    checkForToggle() {
      let isToggled = document.getElementsByName("placeholder")[0].checked;
      let menuContainer = document.getElementsByClassName("menuContainer")[0];
      if (!isToggled) menuContainer.style.height = "60px";
      else menuContainer.style.height = "35vh";
    }
  },
  computed: mapState(["runningData"]),
  watch: {
    runningData() {
      this.createDestinationList();
    }
  },
  created() {
    this.createDestinationList();
  }
};
</script>

<style lang="scss">
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.3.2/css/simple-line-icons.min.css";
.menuContainer {
  position: absolute;
  top: 15%;
  left: 50%;
  margin-left: -165px;
  z-index: 999;
  font-family: oswald;
  font-size: 18px;
  color: #fff;
  line-height: 1.2;
  font-weight: unset;
  height: 60px;

  @media (max-width: 576px) {
    top: 1%;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    margin-left: -50%;
  }

  @media screen and (max-width: 992px) {
      top: 1%;
  }
  .scrollableDiv {
    overflow-y: auto;
    height: 70%;
  }
  .select {
    position: relative;
    overflow: hidden;
    display: block;
    margin: auto;
    width: 330px;
    height: 100%;
    border-bottom: 0px;

    @media (max-width: 576px) {
      width: 100%;
    }

    i.toggle {
      position: absolute;
      z-index: 4;
      right: 1.5em;
      top: 1.6em;
      color: #fff;
    }
    .title,
    .placeholder {
      position: relative;
      display: block;
      width: 100%;
      height: 60px;
      padding: 1.5em 2em;
      background: rgb(248, 248, 255, 1);
      cursor: pointer;
    }
    & > label > input {
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: 2;
      width: 100%;
      display: block;
      opacity: 0;
      cursor: pointer;
      &:checked {
        z-index: 2;
        ~ i.toggle.icon-arrow-down {
          display: none;
        }
        ~ i.toggle.icon-arrow-up {
          display: block;
        }
      }
      &:not(:checked) {
        ~ i.toggle.icon-arrow-up {
          display: none;
        }
        ~ i.toggle.icon-arrow-down {
          display: block;
        }
        ~ label.option input:not(:checked) ~ .title {
          display: none !important;
        }
        ~ .select {
          height: 200px;
        }
      }
      &:disabled {
        cursor: no-drop;
      }
    }
    & label > span.placeholder {
      position: relative;
      z-index: 0;
      display: inline-block;
      width: 100%;
      color: #fff;
      border-top: 0px;
      background-color: #673ab7;
    }
    label.option {
      display: block;
      overflow: hidden;
      z-index: 1;
      width: 100%;
      transition: all 1s ease-out;
      span.title {
        position: relative;
        z-index: 2;
        transition: background 0.3s ease-out;
        color: grey;
        i.icon {
          padding-right: 8px;
          color: rgba(146, 168, 209, 1);
        }
        &:hover {
          color: #fff;
          background: rgba(155, 155, 155, 0.8);
          box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.1);
        }
      }
      input {
        display: none;
        &:checked ~ span.title {
          position: absolute;
          display: block;
          z-index: 1;
          top: 0px;
          background: #673ab7;
          border-top: 0px;
          box-shadow: none;
          color: inherit;
          width: 100%;
          color: #fff;
        }
      }
    }
  }
}
</style>

