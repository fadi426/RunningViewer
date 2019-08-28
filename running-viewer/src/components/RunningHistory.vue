<template>
  <div>
    <div class="limiter">
      <div class="container-table100">
        <div class="wrap-table100">
          <div class="table100">
            <table>
              <thead>
                <tr class="table100-head">
                  <th class="column1">Date</th>
                  <th class="column2">Start</th>
                  <th class="column3">End</th>
                  <th class="column4">Distance (km)</th>
                  <th class="column5">Time (hours)</th>
                  <th class="column6">Average speed (km/h)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="value in this.$store.state.runningData" v-bind:key="value.Date">
                  <td class="column1">{{value.Date}}</td>
                  <td class="column2">{{value.Start}}</td>
                  <td class="column3">{{value.End}}</td>
                  <td class="column4">{{value.Distance}}</td>
                  <td class="column5">{{value.Time}}</td>
                  <td class="column6">{{value.AverageSpeed}}</td>
                </tr>
                <!-- <tr>
                  <td class="column1">2017-09-29 01:22</td>
                  <td class="column2">200398</td>
                  <td class="column3">iPhone X 64Gb Grey</td>
                  <td class="column4">$999.00</td>
                  <td class="column5">1</td>
                  <td class="column6">$999.00</td>
                </tr> -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpreadsheetUtil from "@/modules/SpreadsheetUtil.js";
export default {
  data() {
    return {
    };
  },
  methods: {
    sheetContent() {
      SpreadsheetUtil.getGoogleSheetData().then((result) => {
        this.$store.commit("addRunningData", result.data);
      })
    }
  },
  created() {
    if(this.$store.state.runningData.length == 0)
      this.sheetContent();
  }
};
</script>

<style>
/* oswald-regular - latin */
@font-face {
  font-family: "Oswald";
  font-style: normal;
  font-weight: 400;
  src: url("../fonts/oswald-v24-latin-regular.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("../fonts/oswald-v24-latin-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../fonts/oswald-v24-latin-regular.woff2") format("woff2"),
    /* Super Modern Browsers */ url("../fonts/oswald-v24-latin-regular.woff")
      format("woff"),
    /* Modern Browsers */ url("../fonts/oswald-v24-latin-regular.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("../fonts/oswald-v24-latin-regular.svg#Oswald") format("svg"); /* Legacy iOS */
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
}

a:focus {
  outline: none !important;
}

a:hover {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

p {
  margin: 0;
}

ul,
li {
  margin: 0;
  list-style-type: none;
}

input {
  display: block;
  outline: none;
  border: none !important;
}

textarea {
  display: block;
  outline: none;
}

textarea:focus,
input:focus {
  border-color: transparent !important;
}

button {
  outline: none !important;
  border: none;
  background: 0 0;
}

button:hover {
  cursor: pointer;
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
}

table * {
  position: relative;
}

table td,
table th {
  padding-left: 8px;
}

table thead tr {
  height: 60px;
  background: #673ab7;
}

table tbody tr {
  height: 50px;
}

table tbody tr:last-child {
  border: 0;
}

table td,
table th {
  text-align: left;
}

table td.l,
table th.l {
  text-align: right;
}

table td.c,
table th.c {
  text-align: center;
}

table td.r,
table th.r {
  text-align: center;
}

.table100-head th {
  font-family: oswald;
  font-size: 18px;
  color: #fff;
  line-height: 1.2;
  font-weight: unset;
}

tbody tr:nth-child(even) {
  background-color: #f5f5f5;
}

tbody tr {
  font-family: oswald;
  font-size: 15px;
  color: gray;
  line-height: 1.2;
  font-weight: unset;
}

tbody tr:hover {
  color: #555;
  background-color: #f5f5f5;
  cursor: pointer;
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
  table {
    display: block;
  }
  table > *,
  table tr,
  table td,
  table th {
    display: block;
  }
  table thead {
    display: none;
  }
  table tbody tr {
    height: auto;
    padding: 37px 0;
  }
  table tbody tr td {
    padding-left: 60% !important;
    margin-bottom: 24px;
  }
  table tbody tr td:last-child {
    margin-bottom: 0;
  }
  table tbody tr td:before {
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
  table tbody tr td:nth-child(1):before {
    content: "Date";
  }
  table tbody tr td:nth-child(2):before {
    content: "Start";
  }
  table tbody tr td:nth-child(3):before {
    content: "End";
  }
  table tbody tr td:nth-child(4):before {
    content: "Distance (km)";
  }
  table tbody tr td:nth-child(5):before {
    content: "Time (hours)";
  }
  table tbody tr td:nth-child(6):before {
    content: "Average speed (km/h)";
  }
  .column4,
  .column5,
  .column6 {
    text-align: left;
  }
  .column4,
  .column5,
  .column6,
  .column1,
  .column2,
  .column3 {
    width: 100%;
  }
  tbody tr {
    font-size: 14px;
  }
}

@media (max-width: 576px) {
  .container-table100 {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
