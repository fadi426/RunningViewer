(function(t){function e(e){for(var a,s,r=e[0],c=e[1],u=e[2],l=0,f=[];l<r.length;l++)s=r[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function s(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ec101fe4"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=i[t]=[e,a]});e.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=s(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}i[t]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"16a3":function(t,e,n){"use strict";var a=n("b415"),i=n.n(a);i.a},"1be7":function(t,e,n){t.exports=n.p+"img/_ionicons_svg_md-stopwatch.a4424533.svg"},"1ffe":function(t,e,n){},"21bb":function(t,e,n){"use strict";var a=n("7a98"),i=n.n(a);i.a},"23de":function(t,e,n){"use strict";var a=n("1ffe"),i=n.n(a);i.a},2829:function(t,e,n){t.exports=n.p+"img/_ionicons_svg_md-speedometer.a6dc68ca.svg"},"2eaa":function(t,e,n){t.exports=n.p+"img/_ionicons_svg_md-flag.c7bd5c0f.svg"},3543:function(t,e,n){"use strict";var a=n("c1cc"),i=n.n(a);i.a},"46ea":function(t,e,n){"use strict";var a=n("7f01"),i=n.n(a);i.a},"4d63":function(t,e,n){},"524e":function(t,e,n){t.exports=n.p+"img/_ionicons_svg_md-calendar.947c6330.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view")],1)},o=[],s=n("bc3a"),r=n.n(s),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("router-link",{staticClass:"menuOption",attrs:{to:"/"}},[t._v("Home")]),n("router-link",{staticClass:"menuOption",attrs:{to:"/about"}},[t._v("About")]),t.isAuthenticated?t._e():n("router-link",{staticClass:"menuOption",attrs:{to:"/login"}},[t._v("Login")]),n("router-link",{staticClass:"menuOption",attrs:{to:"/controlpanel"}},[t._v(" "+t._s(this.fullUserName()))]),t.isAuthenticated&&!t.authLoading?n("a",{staticClass:"menuOption",on:{click:function(e){return t.logout()}}},[t._v("Logout")]):t._e()],1)},u=[],l=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),d=n("2f62"),f="AUTH_REQUEST",p="AUTH_SUCCESS",h="AUTH_ERROR",m="AUTH_LOGOUT";function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(n,!0).forEach(function(e){Object(l["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var b,y,k,S={name:"Navbar",data:function(){return{}},methods:{logout:function(){var t=this;this.$store.dispatch(m).then(function(){return t.$router.push("/login")})},fullUserName:function(){if(void 0!=this.user.userName||void 0!=this.user.userSurname)return this.user.userName+" "+this.user.userSurname}},computed:g({},Object(d["b"])(["getProfile","isAuthenticated","isProfileLoaded"]),{},Object(d["c"])({authLoading:function(t){return"loading"===t.auth.status},user:function(t){return t.user.profile}}))},_=S,O=(n("16a3"),n("2877")),C=Object(O["a"])(_,c,u,!1,null,null,null),w=C.exports,j="USER_REQUEST",D="USER_SUCCESS",T="USER_ERROR",E={name:"App",data:function(){return{}},created:function(){this.$store.getters.isAuthenticated&&this.$store.dispatch(j)},components:{Navbar:w}},B=E,P=(n("5c0b"),Object(O["a"])(B,i,o,!1,null,null,null)),L=P.exports,x=n("8c4f"),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"destinationMenu"},[n("destination-menu")],1),n("div",{staticClass:"runningHistory"},[n("RunningHistory")],1)])},A=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"limiter"},[n("div",{staticClass:"container-table100 animated fadeIn"},[n("div",{staticClass:"wrap-table100"},[n("div",{staticClass:"table100"},[n("table",[n("thead",[n("tr",{staticClass:"table100-head"},[n("th",{staticClass:"column1",on:{click:function(e){return t.sortTable("Date")}}},[t._v("Date")]),n("th",{staticClass:"column2",on:{click:function(e){return t.sortTable("Start")}}},[t._v("Start")]),n("th",{staticClass:"column3",on:{click:function(e){return t.sortTable("End")}}},[t._v("End")]),n("th",{staticClass:"column4",on:{click:function(e){return t.sortTable("Distance")}}},[t._v("Distance (km)")]),n("th",{staticClass:"column5",on:{click:function(e){return t.sortTable("Time")}}},[t._v("Time (hours)")]),n("th",{staticClass:"column6",on:{click:function(e){return t.sortTable("Speed")}}},[t._v("Average speed (km/h)")])])]),n("tbody",t._l(t.dataList,function(e){return n("tr",{key:e.date},[n("td",{staticClass:"column1"},[t._v(t._s(e.date))]),n("td",{staticClass:"column2"},[t._v(t._s(e.start))]),n("td",{staticClass:"column3"},[t._v(t._s(e.end))]),n("td",{staticClass:"column4"},[t._v(t._s(e.distance))]),n("td",{staticClass:"column5"},[t._v(t._s(e.time))]),n("td",{staticClass:"column6"},[t._v(t._s(e.averageSpeed))])])}),0)])])])])]),n("ActionButton")],1)},R=[],F=(n("b54a"),n("d225")),I=n("b0b4"),U=n("4be7"),M=function(){function t(e,n,a,i,o,s){Object(F["a"])(this,t),Object(l["a"])(this,"date",""),Object(l["a"])(this,"start",""),Object(l["a"])(this,"end",""),Object(l["a"])(this,"distance",""),Object(l["a"])(this,"time",""),Object(l["a"])(this,"averageSpeed",0),this.date=e,this.start=n,this.end=a,this.distance=i,this.time=o,this.averageSpeed=s}return Object(I["a"])(t,[{key:"reset",value:function(){this.date="",this.start="",this.end="",this.distance="",this.time="",this.averageSpeed=0}},{key:"sheetdataToGoogledata",value:function(t){return{Date:this.date,Start:this.start,End:this.end,Distance:this.distance,Time:this.time,AverageSpeed:this.averageSpeed}}},{key:"date",get:function(){return this.date},set:function(t){this.date=t}},{key:"start",get:function(){return thisstart},set:function(t){this.start=t}},{key:"end",get:function(){return this.end},set:function(t){this.end=t}},{key:"distance",get:function(){return this.distance},set:function(t){this.distance=t}},{key:"time",get:function(){return this.time},set:function(t){this.time=t}},{key:"averageSpeed",get:function(){return this.averageSpeed},set:function(t){this.averageSpeed=t}}]),t}(),V=function(){function t(){Object(F["a"])(this,t)}return Object(I["a"])(t,null,[{key:"getGoogleSheetData",value:function(){var t=this;return new Promise(function(e){r.a.get("https://sheetdb.io/api/v1/yendulnmcrp6l").then(function(n){e(t.googledataToSheetdata(n.data))}).catch(function(t){e(t)})})}},{key:"addNewRunningData",value:function(t){var e=this;return new Promise(function(n){var a=[];console.log(t.sheetdataToGoogledata()),a.push(t.sheetdataToGoogledata());var i={data:a};e.getSheetLink().then(function(t){r.a.post(t.data.link,i,{headers:{"Content-Type":"application/json"}}).then(function(t){n(t)}).catch(function(t){Object(U["reject"])(t)})})})}},{key:"getSheetLink",value:function(){return new Promise(function(t){var e=localStorage.getItem("user-token");r.a.get("https://localhost:5001/api/authentication/runningviewer/"+e).then(function(e){t(e)}).catch(function(e){t(e)})})}},{key:"googledataToSheetdata",value:function(t){var e=[];return t.forEach(function(t){var n=t.Date,a=t.Start,i=t.End,o=t.Distance,s=t.Time,r=t.AverageSpeed,c=new M(n,a,i,o,s,r);e.push(c)}),e}}]),t}(),z=(n("a481"),n("28a5"),n("55dd"),function(){function t(){Object(F["a"])(this,t)}return Object(I["a"])(t,null,[{key:"sortByDate",value:function(t){return t.sort(function(t,e){var n=t.date.split("-").reverse().join(),a=e.date.split("-").reverse().join();return n<a?-1:n>a?1:0})}},{key:"sortByStart",value:function(t){return t.sort(function(t,e){return t.start<e.start?-1:t.start>e.start?1:0})}},{key:"sortByEnd",value:function(t){return t.sort(function(t,e){return t.end<e.end?-1:t.end>e.end?1:0})}},{key:"sortByDistance",value:function(t){return t.sort(function(t,e){var n=t.distance.replace(",","."),a=e.distance.replace(",",".");return parseFloat(n)-parseFloat(a)})}},{key:"sortByTime",value:function(t){return t.sort(function(t,e){var n=t.averageSpeed.replace(",","."),a=e.averageSpeed.replace(",",".");return parseFloat(a)-parseFloat(n)})}},{key:"sortBySpeed",value:function(t){return t.sort(function(t,e){var n=t.averageSpeed.replace(",","."),a=e.averageSpeed.replace(",",".");return parseFloat(a)-parseFloat(n)})}},{key:"timeToDecimal",value:function(t){var e=t.split(":").map(function(t){return parseInt(t,10)}).reduce(function(t,e,n,a){return t+e/Math.pow(60,n)});return e}}]),t}()),H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"zoom"},[a("a",{staticClass:"actionButton mainButton",attrs:{id:"zoomBtn"},on:{click:t.toggleMenu}},[a("img",{staticClass:"mainButtonIcon",attrs:{src:n("af17")}})]),a("ul",{staticClass:"zoom-menu"},[a("li",[a("a",{staticClass:"actionButton subButton Date scale-transition scale-out",on:{click:function(e){return t.selectSubButton(e,"Date")}}},[a("img",{attrs:{src:n("524e")}})])]),a("li",[a("a",{staticClass:"actionButton subButton start scale-transition scale-out",on:{click:function(e){return t.selectSubButton(e,"Start")}}},[a("img",{attrs:{src:n("d75c")}})])]),a("li",[a("a",{staticClass:"actionButton subButton end scale-transition scale-out",on:{click:function(e){return t.selectSubButton(e,"End")}}},[a("img",{attrs:{src:n("2eaa")}})])]),a("li",[a("a",{staticClass:"actionButton subButton distance scale-transition scale-out",on:{click:function(e){return t.selectSubButton(e,"Distance")}}},[a("img",{attrs:{src:n("574a")}})])]),a("li",[a("a",{staticClass:"actionButton subButton time scale-transition scale-out",on:{click:function(e){return t.selectSubButton(e,"Time")}}},[a("img",{attrs:{src:n("1be7")}})])]),a("li",[a("a",{staticClass:"actionButton subButton speed scale-transition scale-out",on:{click:function(e){return t.selectSubButton(e,"Speed")}}},[a("img",{attrs:{src:n("2829")}})])])])])},G=[],q=(n("ac4d"),n("8a81"),{data:function(){return{}},methods:{toggleMenu:function(){var t=document.getElementsByClassName("subButton"),e=!0,n=!1,a=void 0;try{for(var i,o=t[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var s=i.value;s.classList.toggle("scale-out")}}catch(r){n=!0,a=r}finally{try{e||null==o.return||o.return()}finally{if(n)throw a}}},selectSubButton:function(t,e){var n=document.getElementsByClassName("subButton"),a=!0,i=!1,o=void 0;try{for(var s,r=n[Symbol.iterator]();!(a=(s=r.next()).done);a=!0){var c=s.value;c.style.opacity=1}}catch(u){i=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}t.target.parentElement.style.opacity=.6;this.$parent.sortTable(e)}}}),Y=q,J=(n("af10"),Object(O["a"])(Y,H,G,!1,null,null,null)),Q=J.exports,K={data:function(){return{dataList:[]}},methods:{sheetContent:function(){var t=this;V.getGoogleSheetData().then(function(e){t.$store.commit("addRunningData",e),t.dataList=e})},filterDataList:function(){function t(t){return function(e){if(e.end==t)return e}}this.dataList=this.$store.state.runningData.filter(t(this.selectedDestination))},sortTable:function(t){"Date"==t&&(this.dataList=z.sortByDate(this.dataList)),"Start"==t&&(this.dataList=z.sortByStart(this.dataList)),"End"==t&&(this.dataList=z.sortByEnd(this.dataList)),"Distance"==t&&(this.dataList=z.sortByDistance(this.dataList)),"Time"==t&&(this.dataList=z.sortByTime(this.dataList)),"Speed"==t&&(this.dataList=z.sortBySpeed(this.dataList))}},computed:Object(d["c"])(["selectedDestination"]),watch:{selectedDestination:function(){this.filterDataList()}},created:function(){0==this.$store.state.runningData.length?this.sheetContent():this.dataList=this.$store.state.runningData},components:{ActionButton:Q}},W=K,X=(n("23de"),Object(O["a"])(W,N,R,!1,null,null,null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menuContainer"},[n("div",{staticClass:"select animated fadeIn"},[n("label",[n("input",{attrs:{type:"checkbox",name:"placeholder"},on:{click:function(e){return t.checkForToggle()}}}),n("i",{staticClass:"toggle icon icon-arrow-down"}),n("i",{staticClass:"toggle icon icon-arrow-up"}),n("span",{staticClass:"placeholder"},[t._v("Choose your destination")]),n("div",{staticClass:"scrollableDiv"},t._l(t.destinationList,function(e){return n("label",{key:e,staticClass:"option",on:{click:t.setSelectedValue}},[n("input",{attrs:{type:"radio",name:"option"},on:{click:function(e){return t.checkForToggle()}}}),n("span",{staticClass:"title animated fadeIn"},[t._v(t._s(e))])])}),0)])])])},et=[],nt=(n("6762"),n("2fdb"),{data:function(){return{destinationList:[]}},methods:{setSelectedValue:function(){var t=this;document.getElementsByName("option").forEach(function(e){if(e.checked){var n=e.parentElement.getElementsByTagName("span")[0].textContent;t.$store.commit("setSelectedDestination",n)}}),document.getElementsByName("placeholder")[0].checked=!1,this.checkForToggle()},createDestinationList:function(){var t=this;this.runningData.forEach(function(e){t.destinationList.includes(e.end)||t.destinationList.push(e.end)})},checkForToggle:function(){var t=document.getElementsByName("placeholder")[0].checked,e=document.getElementsByClassName("menuContainer")[0];e.style.height=t?"35vh":"60px"}},computed:Object(d["c"])(["runningData"]),watch:{runningData:function(){this.createDestinationList()}},created:function(){this.createDestinationList()}}),at=nt,it=(n("ea35"),Object(O["a"])(at,tt,et,!1,null,null,null)),ot=it.exports,st={name:"home",components:{RunningHistory:Z,DestinationMenu:ot}},rt=st,ct=(n("21bb"),Object(O["a"])(rt,$,A,!1,null,null,null)),ut=ct.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"formContainer"},[n("div",{staticClass:"formContent"},[n("h2",[t._v("login")]),t.incorrectPass?n("h3",{staticClass:"alertText"},[t._v("Incorrect username or password")]):n("h3",[n("br")]),n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:t.user.username},on:{click:function(e){return t.resetValidation()},input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.user.password},on:{click:function(e){return t.resetValidation()},input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),n("br"),n("button",{staticClass:"signin",on:{click:function(e){return t.login()}}},[n("span",[t._v("Login")])]),n("div",{staticClass:"sig"})])])},dt=[],ft=(n("f4ff"),function(){function t(){Object(F["a"])(this,t)}return Object(I["a"])(t,null,[{key:"requestValidation",value:function(t){return new Promise(function(e,n){function a(t){for(var e,n=0;n<t.length;n++)e=Math.imul(31,e)+t.charCodeAt(n)|0;return e}var i=a(t.username)+a(t.password),o={authenticationToken:i};r.a.post("https://personal-authentication-api.azurewebsites.net/api/authentication",o,{headers:{"Content-Type":"application/json"}}).then(function(t){e(t.data)}).catch(function(t){n(t)})})}},{key:"getAccountInfo",value:function(){return new Promise(function(t,e){var n=localStorage.getItem("user-token");r.a.get("https://personal-authentication-api.azurewebsites.net/api/authentication/"+n).then(function(e){t(e.data)}).catch(function(t){e(t)})})}}]),t}()),pt={name:"Login",data:function(){return{user:{username:"",password:""},incorrectPass:!1}},methods:{login:function(){var t=this;if(""!=this.username&&""!=this.password){var e=this.user;this.$store.dispatch(f,e).then(function(){t.$router.push("/controlpanel")}).catch(function(){t.incorrectPass=!0}).finally(function(){t.incorrectPass=!0})}else this.incorrectPass=!0},resetValidation:function(){this.incorrectPass=!1}}},ht=pt,mt=(n("46ea"),Object(O["a"])(ht,lt,dt,!1,null,null,null)),vt=mt.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"formContainer"},[n("div",{staticClass:"formContent"},[this.$store.getters.isAuthenticated?n("div",[n("h2",[t._v("Add runningdata")]),t.emptyField?n("h3",{staticClass:"alertText"},[t._v("Empty fields detected")]):n("h3",[n("br")]),n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.date,expression:"input.date"}],attrs:{type:"date",placeholder:"date","data-date":"","data-date-format":"DD MMMM YYYY"},domProps:{value:t.input.date},on:{click:function(e){return t.resetValidation()},input:function(e){e.target.composing||t.$set(t.input,"date",e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.start,expression:"input.start"}],attrs:{type:"text",placeholder:"start location"},domProps:{value:t.input.start},on:{click:function(e){return t.resetValidation()},input:function(e){e.target.composing||t.$set(t.input,"start",e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.end,expression:"input.end"}],attrs:{type:"text",placeholder:"end location"},domProps:{value:t.input.end},on:{click:function(e){return t.resetValidation()},input:function(e){e.target.composing||t.$set(t.input,"end",e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.distance,expression:"input.distance"}],attrs:{type:"number",placeholder:"distance"},domProps:{value:t.input.distance},on:{click:function(e){return t.resetValidation()},input:function(e){e.target.composing||t.$set(t.input,"distance",e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.time,expression:"input.time"}],attrs:{type:"time",placeholder:"time",step:"1"},domProps:{value:t.input.time},on:{click:function(e){return t.resetValidation()},input:function(e){e.target.composing||t.$set(t.input,"time",e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.averageSpeed,expression:"input.averageSpeed"}],attrs:{type:"text",placeholder:"average speed",readonly:""},domProps:{value:t.input.averageSpeed},on:{click:function(e){return t.resetValidation()},input:function(e){e.target.composing||t.$set(t.input,"averageSpeed",e.target.value)}}})]),n("br"),n("button",{staticClass:"signin",on:{click:function(e){return t.submit()}}},[n("span",[t._v("Submit")])]),n("div",{staticClass:"sig"})]):n("div",[n("h2",[t._v("Not authorized")])])])])},bt=[],yt={data:function(){return{input:new M("","","","","",0),emptyField:!1}},methods:{submit:function(){function t(t){for(var e in t){var n=t[e];if(""===n)return!0}return!1}t(this.input)?this.emptyField=!0:(console.log(this.input),V.addNewRunningData(this.input))},resetValidation:function(){this.emptyField=!1},checkSpeedParams:function(){return this.input.distance.length>0&&this.input.time.length>0},timeToDecimal:function(){var t=z.timeToDecimal(this.input.time),e=this.input.distance.replace(",",".")/t;this.input.averageSpeed=e}},computed:{checkTime:function(){return this.input.time},checkDistance:function(){return this.input.distance}},watch:{checkTime:function(){this.checkSpeedParams()?this.timeToDecimal():this.input.averageSpeed=0},checkDistance:function(){this.checkSpeedParams()?this.timeToDecimal():this.input.averageSpeed=0}}},kt=yt,St=(n("3543"),Object(O["a"])(kt,gt,bt,!1,null,null,null)),_t=St.exports,Ot=(n("7f7f"),{status:"",profile:{}}),Ct={getProfile:function(t){return t.profile},isProfileLoaded:function(t){return!!t.profile.name}},wt=Object(l["a"])({},j,function(t){var e=t.commit,n=t.dispatch;e(j),ft.getAccountInfo().then(function(t){e(D,t)}).catch(function(t){e(T),n(m)})}),jt=(b={},Object(l["a"])(b,j,function(t){t.status="loading"}),Object(l["a"])(b,D,function(t,e){t.status="success",a["a"].set(t,"profile",e)}),Object(l["a"])(b,T,function(t){t.status="error"}),Object(l["a"])(b,m,function(t){t.profile={}}),b),Dt={state:Ot,getters:Ct,actions:wt,mutations:jt},Tt={token:localStorage.getItem("user-token")||"",status:"",hasLoadedOnce:!1},Et={isAuthenticated:function(t){return!!t.token},authStatus:function(t){return t.status}},Bt=(y={},Object(l["a"])(y,f,function(t,e){var n=t.commit,a=t.dispatch;return new Promise(function(t,i){n(f),ft.requestValidation(e).then(function(e){localStorage.setItem("user-token",e.token),r.a.defaults.headers.common["Authorization"]=e.token,n(p,e),a(j),t(e)}).catch(function(t){n(h,t),localStorage.removeItem("user-token"),i(t)})})}),Object(l["a"])(y,m,function(t){var e=t.commit;t.dispatch;return new Promise(function(t,n){e(m),localStorage.removeItem("user-token"),t()})}),y),Pt=(k={},Object(l["a"])(k,f,function(t){t.status="loading"}),Object(l["a"])(k,p,function(t,e){t.status="success",t.token=e.token,t.hasLoadedOnce=!0}),Object(l["a"])(k,h,function(t){t.status="error",t.hasLoadedOnce=!0}),Object(l["a"])(k,m,function(t){t.token=""}),k),Lt={state:Tt,getters:Et,actions:Bt,mutations:Pt};a["a"].use(d["a"]);var xt=new d["a"].Store({state:{runningData:[],selectedDestination:""},mutations:{addRunningData:function(t,e){t.runningData=e},setSelectedDestination:function(t,e){t.selectedDestination=e}},actions:{},modules:{user:Dt,auth:Lt}});a["a"].use(x["a"]);var $t=function(t,e,n){xt.getters.isAuthenticated?n("/"):n()},At=function(t,e,n){xt.getters.isAuthenticated?n():n("/login")},Nt=new x["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:ut},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"login",component:vt,beforeEnter:$t},{path:"/controlpanel",name:"controlpanel",component:_t,beforeEnter:At}]}),Rt=n("9483");Object(Rt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].config.productionTip=!1;var Ft=localStorage.getItem("user-token");Ft&&(r.a.defaults.headers.common["Authorization"]=Ft),new a["a"]({router:Nt,store:xt,render:function(t){return t(L)}}).$mount("#app")},"574a":function(t,e,n){t.exports=n.p+"img/distance.b5f5f416.svg"},"5c0b":function(t,e,n){"use strict";var a=n("e332"),i=n.n(a);i.a},"7a98":function(t,e,n){},"7f01":function(t,e,n){},8317:function(t,e,n){},af10:function(t,e,n){"use strict";var a=n("8317"),i=n.n(a);i.a},af17:function(t,e,n){t.exports=n.p+"img/filter-and-sort-arrows.95cc17ed.svg"},b415:function(t,e,n){},c1cc:function(t,e,n){},d75c:function(t,e,n){t.exports=n.p+"img/_ionicons_svg_md-pin.ccade153.svg"},e332:function(t,e,n){},ea35:function(t,e,n){"use strict";var a=n("4d63"),i=n.n(a);i.a}});
//# sourceMappingURL=app.7d76a144.js.map