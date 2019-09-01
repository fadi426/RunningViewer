<template>
    <div class="zoom">
  <a class="actionButton mainButton" id="zoomBtn" v-on:click="toggleMenu">
    <img class="mainButtonIcon" v-bind:src="require('@/assets/filter-and-sort-arrows.svg')" />
  </a>
  <ul class="zoom-menu">
    <li><a class="actionButton subButton Date scale-transition scale-out" v-on:click="selectSubButton($event, 'Date')">
        <img v-bind:src="require('@/assets/_ionicons_svg_md-calendar.svg')" />
        </a>
    </li>
    <li><a class="actionButton subButton start scale-transition scale-out" v-on:click="selectSubButton($event, 'Start')">
        <img v-bind:src="require('@/assets/_ionicons_svg_md-pin.svg')" />
        </a>
    </li>
    <li><a class="actionButton subButton end scale-transition scale-out" v-on:click="selectSubButton($event, 'End')">
        <img v-bind:src="require('@/assets/_ionicons_svg_md-flag.svg')" />
        </a>
    </li>
    <li><a class="actionButton subButton distance scale-transition scale-out" v-on:click="selectSubButton($event, 'Distance')">
      <img v-bind:src="require('@/assets/distance.svg')" />
      </a>
    </li>
    <li><a class="actionButton subButton time scale-transition scale-out" v-on:click="selectSubButton($event, 'Time')">
        <img v-bind:src="require('@/assets/_ionicons_svg_md-stopwatch.svg')" />
        </a>
    </li>
    <li><a class="actionButton subButton speed scale-transition scale-out" v-on:click="selectSubButton($event, 'Speed')">
        <img v-bind:src="require('@/assets/_ionicons_svg_md-speedometer.svg')" />
        </a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleMenu() {
      let buttonList = document.getElementsByClassName("subButton");
      for (let button of buttonList) {
        button.classList.toggle("scale-out");
      }
    },
    selectSubButton(event, mode) {
      let buttonList = document.getElementsByClassName("subButton");
      for (let button of buttonList) {
        button.style.opacity = 1;
      }
      let selectedButton = (event.target.parentElement.style.opacity = 0.6);
      this.$parent.sortTable(mode);
    }
  }
};
</script>

<style lang="scss">
svg {
  fill: #fff;
}
.zoom {
  position: fixed;
  bottom: 0px;
  right: 19px;
  height: 70px;
}
img {
  height: 80%;
  padding-top: 5px;
}
.actionButton {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  background-color: #009688;
  vertical-align: middle;
  text-decoration: none;
  text-align: center;
  transition: 0.2s ease-out;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: #fff;
  &:hover {
    opacity: 0.6;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -1px rgba(0, 0, 0, 0.2);
  }
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.mainButton {
  width: 60px;
  height: 60px;
  line-height: 60px;
  background-color: #673ab7;
}
.mainButtonIcon {
  padding-top: 10px;
}
.zoom-menu {
  position: absolute;
  // right: -11px;
  // left: auto;
  // top: 50%;
  transform: translateY(50%);
  height: 0%;
  // width: 500px;
  // list-style: none;
  text-align: right;
  bottom: 370px;
  li {
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
.Date {
  background-color: #f44336;
}
.start {
  background-color: #ffeb3b;
}
.end {
  background-color: #4caf50;
}
.distance {
  background-color: #2196f3;
}
.time {
  background-color: #9c27b0;
}
.speed {
  background-color: #fe840e;
}

.scale-transition {
  transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;
}
.scale-transition.scale-out {
  transform: scale(0);
  transition: transform 0.2s !important;
}
.scale-transition.scale-in {
  transform: scale(1);
}
</style>


