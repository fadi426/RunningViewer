<template>
    <div class="zoom">
  <a class="actionButton mainButton" id="zoomBtn" v-on:click="toggleMenu">Open</a>
  <ul class="zoom-menu">
    <li><a class="actionButton subButton Date scale-transition scale-out">
        <img v-bind:src="require('@/assets/_ionicons_svg_md-calendar.svg')" />
        </a>
    </li>
    <li><a class="actionButton subButton start scale-transition scale-out">
        <img v-bind:src="require('@/assets/_ionicons_svg_md-pin.svg')" />
        </a>
    </li>
    <li><a class="actionButton subButton end scale-transition scale-out">
        <img v-bind:src="require('@/assets/_ionicons_svg_md-flag.svg')" />
        </a>
    </li>
    <li><a class="actionButton subButton distance scale-transition scale-out">Action</a></li>
    <li><a class="actionButton subButton time scale-transition scale-out">
        <img v-bind:src="require('@/assets/_ionicons_svg_md-stopwatch.svg')" />
        </a>
    </li>
    <li><a class="actionButton subButton speed scale-transition scale-out">
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
    }
  }
};
</script>

<style lang="scss">
.zoom {
  position: fixed;
  bottom: 45px;
  right: 24px;
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
    background-color: #4db6ac;
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
  &:hover {
    background-color: #e57373;
  }
}
.start {
  background-color: #ffeb3b;
  &:hover {
    background-color: #fff176;
  }
}
.end {
  background-color: #4caf50;
  &:hover {
    background-color: #81c784;
  }
}
.distance {
  background-color: #2196f3;
  &:hover {
    background-color: #64b5f6;
  }
}
.time {
  background-color: #9c27b0;
  &:hover {
    background-color: #ba68c8;
  }
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


