<template>
  <div>
    <div class="limiter">
      <div class="container-table100 animated fadeIn">
        <div class="wrap-table100">
          <div class="table100">
            <table>
              <thead>
                <tr class="table100-head">
                  <th class="column1" v-on:click="sortTable('Date')">Date</th>
                  <th class="column2" v-on:click="sortTable('Start')">Start</th>
                  <th class="column3" v-on:click="sortTable('End')">End</th>
                  <th class="column4" v-on:click="sortTable('Distance')">Distance (km)</th>
                  <th class="column5" v-on:click="sortTable('Time')">Time (hours)</th>
                  <th class="column6" v-on:click="sortTable('Speed')">Average speed (km/h)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="value in dataList" v-bind:key="value.date">
                  <td class="column1">{{value.date}}</td>
                  <td class="column2">{{value.start}}</td>
                  <td class="column3">{{value.end}}</td>
                  <td class="column4">{{value.distance}}</td>
                  <td class="column5">{{value.time}}</td>
                  <td class="column6">{{value.averageSpeed}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
	<ActionButton/>
  </div>
</template>

<script>
import SpreadsheetUtil from "@/modules/SpreadsheetUtil.js";
import tableUtil from "@/modules/tableUtil.js";
import ActionButton from "@/components/ActionButton";
import { mapState } from "vuex";
export default {
  data() {
    return {
      dataList: []
    };
  },
  methods: {
    sheetContent() {
      SpreadsheetUtil.getGoogleSheetData().then(result => {
        this.$store.commit("addRunningData", result);
        this.dataList = result;
      });
    },
    filterDataList() {
      function checkDestination(selectedValue) {
        return function(value) {
          if (value.end == selectedValue) return value;
        };
      }
      this.dataList = this.$store.state.runningData.filter(
        checkDestination(this.selectedDestination)
      );
    },
    sortTable(mode) {
      if (mode == "Date") this.dataList = tableUtil.sortByDate(this.dataList);

      if (mode == "Start") this.dataList = tableUtil.sortByStart(this.dataList);

      if (mode == "End") this.dataList = tableUtil.sortByEnd(this.dataList);

      if (mode == "Distance")
        this.dataList = tableUtil.sortByDistance(this.dataList);

      if (mode == "Time") this.dataList = tableUtil.sortByTime(this.dataList);

      if (mode == "Speed") this.dataList = tableUtil.sortBySpeed(this.dataList);
    },
  },
  computed: mapState(["selectedDestination"]),
  watch: {
    selectedDestination: function() {
      this.filterDataList();
    }
  },
  created() {
    if (this.$store.state.runningData.length == 0) this.sheetContent();
    else this.dataList = this.$store.state.runningData;
  },
  components: {
    ActionButton
  }
};
</script>

<style lang="scss">
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
@font-face {
  font-family: "Oswald";
  font-style: normal;
  font-weight: 400;
  src: url("../fonts/oswald-v24-latin-regular.eot");
  src: local(""),
    url("../fonts/oswald-v24-latin-regular.eot?#iefix")
      format("embedded-opentype"),
    url("../fonts/oswald-v24-latin-regular.woff2") format("woff2"),
    url("../fonts/oswald-v24-latin-regular.woff") format("woff"),
    url("../fonts/oswald-v24-latin-regular.ttf") format("truetype"),
    url("../fonts/oswald-v24-latin-regular.svg#Oswald") format("svg");
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
div {
  height: 100%;
  font-family: oswald;
}
a {
  margin: 0;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  &:focus {
    outline: none !important;
  }
  &:hover {
    text-decoration: none;
  }
}
h1 {
  margin: 0;
}
h2 {
  margin: 0;
}
h3 {
  margin: 0;
}
h4 {
  margin: 0;
}
h5 {
  margin: 0;
}
h6 {
  margin: 0;
}
p {
  margin: 0;
}
ul {
  margin: 0;
  list-style-type: none;
}
li {
  margin: 0;
  list-style-type: none;
}
input {
  display: block;
  outline: none;
  border: none !important;
  &:focus {
    border-color: transparent !important;
  }
}
textarea {
  display: block;
  outline: none;
  &:focus {
    border-color: transparent !important;
  }
}
button {
  outline: none !important;
  border: none;
  background: 0 0;
  &:hover {
    cursor: pointer;
  }
}
iframe {
  border: none !important;
}
.limiter {
  width: 100%;
  margin: 0 auto;
}
.container-table100 {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 33px 30px;
}
.wrap-table100 {
  width: 1170px;
}
table {
  border-spacing: 1;
  border-collapse: collapse;
  background: #fff;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  position: relative;
  * {
    position: relative;
  }
  td {
    padding-left: 8px;
    text-align: left;
  }
  th {
    padding-left: 8px;
    text-align: left;
  }
  thead {
    tr {
      height: 60px;
      background: #673ab7;
    }
  }
  tbody {
    tr {
      height: 50px;
      &:last-child {
        border: 0;
      }
    }
  }
  td.l {
    text-align: right;
  }
  th.l {
    text-align: right;
  }
  td.c {
    text-align: center;
  }
  th.c {
    text-align: center;
  }
  td.r {
    text-align: center;
  }
  th.r {
    text-align: center;
  }
}
.table100-head {
  th {
    font-family: oswald;
    font-size: 18px;
    color: #fff;
    line-height: 1.2;
    font-weight: unset;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
}
tbody {
  tr {
    &:nth-child(even) {
      background-color: #f5f5f5;
    }
    font-family: oswald;
    font-size: 15px;
    color: gray;
    line-height: 1.2;
    font-weight: unset;
    &:hover {
      color: #999;
      background-color: #f5f5f5;
      cursor: pointer;
    }
  }
}
.column1 {
  width: 260px;
  padding-left: 40px;
}
.column2 {
  width: 160px;
}
.column3 {
  width: 245px;
}
.column4 {
  width: 110px;
  text-align: right;
}
.column5 {
  width: 170px;
  text-align: right;
}
.column6 {
  width: 222px;
  text-align: right;
  padding-right: 62px;
}
@media screen and (max-width: 992px) {
  .container-table100{ 
    align-items: normal;
  }
  table {
    display: block;
    > * {
      display: block;
    }
    tr {
      display: block;
    }
    td {
      display: block;
    }
    th {
      display: block;
    }
    thead {
      display: none;
    }
    tbody {
      tr {
        height: auto;
        padding: 37px 0;
        td {
          padding-left: 60% !important;
          margin-bottom: 24px;
          &:last-child {
            margin-bottom: 0;
          }
          &:before {
            font-family: oswald;
            font-size: 14px;
            color: #999;
            line-height: 1.2;
            font-weight: unset;
            position: absolute;
            width: 40%;
            left: 30px;
            top: 0;
          }
          &:nth-child(1) {
            &:before {
              content: "Date";
            }
          }
          &:nth-child(2) {
            &:before {
              content: "Start";
            }
          }
          &:nth-child(3) {
            &:before {
              content: "End";
            }
          }
          &:nth-child(4) {
            &:before {
              content: "Distance (km)";
            }
          }
          &:nth-child(5) {
            &:before {
              content: "Time (hours)";
            }
          }
          &:nth-child(6) {
            &:before {
              content: "Average speed (km/h)";
            }
          }
        }
      }
    }
  }
  .column4 {
    text-align: left;
    width: 100%;
  }
  .column5 {
    text-align: left;
    width: 100%;
  }
  .column6 {
    text-align: left;
    width: 100%;
  }
  .column1 {
    width: 100%;
  }
  .column2 {
    width: 100%;
  }
  .column3 {
    width: 100%;
  }
  tbody {
    tr {
      font-size: 14px;
    }
  }
}
@media (max-width: 576px) {
  .container-table100 {
    padding-left: 15px;
    padding-right: 15px;
    align-items: normal;
  }
}
</style>
