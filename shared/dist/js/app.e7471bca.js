(function(t){function e(e){for(var n,o,r=e[0],l=e[1],h=e[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,h||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,r=1;r<i.length;r++){var l=i[r];0!==s[l]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var h=0;h<r.length;h++)e(r[h]);var c=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"020a":function(t,e,i){},"0312":function(t,e){},"034f":function(t,e,i){"use strict";i("85ec")},"0983":function(t,e,i){t.exports=i.p+"img/octocat.0ba2aa20.png"},"1f6b":function(t,e,i){},"1fe8":function(t,e,i){t.exports=i.p+"img/error.ccee805c.png"},"2c07":function(t,e,i){t.exports=i.p+"img/go.09706299.svg"},"3fb9":function(t,e,i){"use strict";var n=i("612b"),s=i("fa37"),a=i("2877"),o=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},"4f49":function(t,e,i){"use strict";i("6682")},5448:function(t,e,i){},"560b":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"primary"}},[n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),n("b-navbar-brand",{attrs:{to:"/"}},[n("img",{attrs:{src:i("7034"),height:"50px"}}),t._v("Vue.js & Go ")]),n("b-collapse",{attrs:{id:"nav_collapse","is-nav":""}},[n("b-navbar-nav",[n("b-button",{attrs:{to:"/home",variant:"dark"}},[n("fa",{attrs:{icon:"home"}}),t._v("  Home ")],1),n("b-button",{attrs:{to:"/info",variant:"dark"}},[n("fa",{attrs:{icon:"cogs"}}),t._v("  Info ")],1),n("b-button",{attrs:{to:"/monitor",variant:"dark"}},[n("fa",{attrs:{icon:"tachometer-alt"}}),t._v("  Monitor ")],1),n("b-button",{attrs:{to:"/weather",variant:"dark"}},[n("fa",{attrs:{icon:"umbrella"}}),t._v("  Weather ")],1),n("b-button",{attrs:{to:"/about",variant:"dark"}},[n("fa",{attrs:{icon:"info-circle"}}),t._v("  About ")],1)],1)],1)],1),n("br"),n("b-container",[n("transition",{attrs:{name:"slidedown"}},[n("router-view")],1)],1)],1)},a=[],o=(i("034f"),i("81e3"),i("2877")),r={},l=Object(o["a"])(r,s,a,!1,null,"2d322c18",null),h=l.exports,c=i("8c4f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-jumbotron",{attrs:{"bg-variant":"primary","text-variant":"white","border-variant":"dark"}},[n("template",{slot:"header"},[t._v(" Go & Vue.js Demo ")]),n("template",{slot:"lead"},[t._v(" This is a simple web application with a Go server/backend and a Vue.js single page application frontend. It has been designed with cloud demos & containers in mind. Demonstrating capabilities such as auto scaling, deployment to Azure or Kubernetes, or anytime you want something quick and lightweight to run & deploy. ")]),n("hr",{staticClass:"my-4"}),n("div",{staticClass:"dark-box"},[n("p",[n("img",{staticClass:"icon",attrs:{src:i("0983")}}),n("a",{staticClass:"btn btn-dark btn-lg",attrs:{target:"_blank",href:"https://github.com/benc-uk/vuego-demoapp"}},[t._v("Project on Github")]),n("img",{staticClass:"icon",staticStyle:{"margin-left":"50px"},attrs:{src:i("bcb8")}}),n("a",{staticClass:"btn btn-dark btn-lg",attrs:{target:"_blank",href:"https://github.com/users/benc-uk/packages/container/package/vuego-demoapp"}},[t._v("Docker Images")])]),n("hr",{staticStyle:{"background-color":"#777"}}),n("p",[n("img",{staticClass:"icon",attrs:{src:i("2c07")}}),n("a",{staticClass:"btn btn-dark btn-lg",attrs:{target:"_blank",href:"https://azure.microsoft.com/en-gb/develop/go/"}},[t._v("Get started with Azure & Go")])]),n("br"),n("p",[t._v("Microsoft ❤ Open Source")])])],2)},d=[],p=(i("5a9a"),{}),f=Object(o["a"])(p,u,d,!1,null,"4be7aa8c",null),m=f.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("div",{staticClass:"card-header bg-success h3"},[i("fa",{attrs:{icon:"info-circle"}}),t._v("  About ")],1),i("div",{staticClass:"card-body"},[t._v(" Developed by Ben Coleman, 2018/2019"),i("br"),i("br"),i("b",[t._v("App Version:")]),t._v(" "+t._s(t.version)),i("br"),i("b",[t._v("API Endpoint:")]),t._v(" "+t._s(t.apiEndpoint)+" ")])])},v=[];const b=i("9224");var _={data:function(){return{version:b.version,apiEndpoint:"http://10.0.0.8:4001/api"}}},x=_,y=Object(o["a"])(x,g,v,!1,null,null,null),w=y.exports,C=i("3fb9"),S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.error?i("b-alert",{attrs:{show:"",variant:"warning"}},[i("h4",[t._v("There was a problem 😥")]),i("div",{staticClass:"errmsg"},[t._v(" "+t._s(t.error)+" ")])]):t._e(),t.info||t.error?t._e():i("spinner"),i("div",{staticClass:"card"},[i("div",{staticClass:"card-header bg-success h3"},[i("fa",{attrs:{icon:"cogs"}}),t._v("  System Information ")],1),i("div",{staticClass:"card-body"},[t.info?i("table",{staticClass:"table table-hover table-sm table-striped"},[i("tbody",[i("tr",[i("td",[i("fa",{attrs:{icon:["fab","docker"],"fixed-width":""}}),t._v(" Containerized")],1),i("td",[t._v(t._s(t.info.isContainer?"Running in a container! 😁":"Not running in a container 😢"))])]),i("tr",[i("td",[i("fa",{attrs:{icon:"dharmachakra","fixed-width":""}}),t._v(" Kubernetes")],1),i("td",[t._v(t._s(t.info.isKubernetes?"Running in Kubernetes! 😄":"Not running in Kubernetes 😪"))])]),i("tr",[i("td",[i("fa",{attrs:{icon:"home","fixed-width":""}}),t._v(" Hostname")],1),i("td",[t._v(t._s(t.info.hostname))])]),i("tr",[i("td",[i("fa",{attrs:{icon:"wrench","fixed-width":""}}),t._v(" Platform")],1),i("td",[t._v(t._s(t.info.platform)+" "+t._s(t.info.architecture))])]),i("tr",[i("td",[i("fa",{attrs:{icon:"laptop-code","fixed-width":""}}),t._v(" Operating System")],1),i("td",[t._v(t._s(t.info.os))])]),i("tr",[i("td",[i("fa",{attrs:{icon:"microchip","fixed-width":""}}),t._v(" Processors")],1),i("td",[t._v(t._s(t.info.cpuCount)+" x "+t._s(t.info.cpuModel))])]),i("tr",[i("td",[i("fa",{attrs:{icon:"memory","fixed-width":""}}),t._v(" Memory")],1),i("td",[t._v(t._s((t.info.mem/1073741824).toFixed(2))+" GB")])]),i("tr",[i("td",[i("fa",{attrs:{icon:"flask","fixed-width":""}}),t._v(" Go Version")],1),i("td",[t._v(t._s(t.info.goVersion))])]),i("tr",[i("td",[i("fa",{attrs:{icon:"project-diagram","fixed-width":""}}),t._v(" Network Address")],1),i("td",[t._v(t._s(t.info.netHost))])])])]):t._e()])]),i("br"),i("div",{staticClass:"card"},[i("div",{staticClass:"card-header bg-success h3"},[i("fa",{attrs:{icon:"comment-dollar"}}),t._v("  Environment Variables ")],1),i("div",{staticClass:"card-body"},[t.info?i("table",{staticClass:"vartable"},[i("tbody",t._l(t.envVars,(function(e,n){return i("tr",{key:n},[i("td",[t._v(t._s(e.name))]),i("td",{staticClass:"value"},[t._v(" "+t._s(e.value)+" ")])])})),0)]):t._e()])])],1)},V=[],k={methods:{apiGetWeather:function(){return M("/weather")},apiGetMetrics:function(){return M("/metrics")},apiGetInfo:function(){return M("/info")}}};async function M(t,e="get",i=null){let n={};const s="http://10.0.0.8:4001/api"+t,a={method:e,headers:n};i&&(a.body=JSON.stringify(i));const o=await fetch(s,a);if(!o.ok){let t=`API call to ${s} failed with ${o.status} ${o.statusText}`;if("application/json"===o.headers.get("Content-Type")){t=`Status: ${o.statusText}\n`;let e=await o.json();for(const[i,n]of Object.entries(e))t+=`${i}: '${n}\n', `}throw new Error(t)}return"application/json"===o.headers.get("Content-Type")?o.json():o.text()}var P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"spinner"},[i("div",{staticClass:"bounce1"}),i("div",{staticClass:"bounce2"}),i("div",{staticClass:"bounce3"})])}],F={name:"Spinner"},W=F,I=(i("f22a"),Object(o["a"])(W,P,A,!1,null,null,null)),T=I.exports;const O=null;var E={components:{Spinner:T},mixins:[k],data:function(){return{info:O,error:null}},computed:{envVars:function(){let t=[];for(const e of this.info.envVars){const i=e.split("="),n=i[0],s=i[1];n.includes("PATH")||(n.includes("NPM_")||n.includes("VSCODE_")||t.push({name:n,value:s}))}return t=t.sort((t,e)=>t.name>e.name?1:-1),t}},created(){this.getInfo()},methods:{getInfo:async function(){try{this.info=await this.apiGetInfo()}catch(t){this.error=t}}}},G=E,j=(i("4f49"),Object(o["a"])(G,S,V,!1,null,"56482839",null)),$=j.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("div",{staticClass:"card-header bg-success h3"},[i("fa",{attrs:{icon:"tachometer-alt"}}),t._v("  Monitoring ")],1),i("div",{staticClass:"card-body"},[t.error?i("b-alert",{attrs:{show:"",variant:"warning"}},[i("h4",[t._v("There was a problem 😥")]),i("div",{staticClass:"errmsg"},[t._v(" "+t._s(t.error)+" ")])]):t._e(),t.metrics||t.error?t._e():i("spinner"),t.metrics?i("b-container",{attrs:{fluid:""}},[i("b-row",{attrs:{"align-h":"around"}},[i("b-col",{attrs:{md:""}},[i("dial",{attrs:{value:t.cpu,title:"CPU Load",percentage:!0}})],1),i("b-col",{attrs:{md:""}},[i("dial",{attrs:{value:t.mem,title:"Memory Used",percentage:!0}})],1)],1),i("b-row",{attrs:{"align-h":"around"}},[i("b-col",{attrs:{md:""}},[i("dial",{attrs:{value:t.disk,title:"Disk Used",percentage:!0}})],1),i("b-col",{attrs:{md:""}},[i("dial",{attrs:{value:t.net,title:"Net I/O",percentage:!1}})],1)],1)],1):t._e()],1)])},U=[],R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("canvas",{ref:"can"},[t._v(t._s(t.value))]),i("h5",[t._v(t._s(t.title)+": "+t._s(t.valComputed)),t.percentage?i("span",[t._v("%")]):t._e()])])},B=[],H=i("a29a");let L=[{strokeStyle:"#30B32D",min:0,max:70},{strokeStyle:"#FFDD00",min:70,max:90},{strokeStyle:"#F03E3E",min:90,max:100}],N={angle:-.15,lineWidth:.3,radiusScale:1,pointer:{length:.5,strokeWidth:.045,color:"#444"},colorStart:"#2063b9",limitMax:!1,limitMin:!1,strokeColor:"#ddd",generateGradient:!0,highDpiSupport:!0,fontSize:40};var q={name:"Dial",props:{value:{default:0,type:Number},title:{default:"No Label",type:String},percentage:{default:!0,type:Boolean}},data:function(){return{gauge:null,opts:N}},computed:{valComputed:function(){let t=Math.round(this.value*Math.pow(10,2))/Math.pow(10,2);return this.value&&this.gauge&&this.gauge.set(t),t}},mounted:function(){let t=this.$refs.can;this.percentage?this.opts.staticZones=L:this.opts.staticZones=null,this.opts.limitMax=this.percentage,this.gauge=new H["Gauge"](t).setOptions(this.opts),this.gauge.maxValue=this.percentage?100:1,this.gauge.setMinValue(0),this.gauge.set(this.value)}},z=q,K=(i("9af2"),Object(o["a"])(z,R,B,!1,null,"4310c46c",null)),J=K.exports;let Z,Y;var Q={components:{Spinner:T,Dial:J},mixins:[k],data:function(){return{metrics:null,prevNetBytes:null,error:null}},computed:{cpu:function(){return this.metrics?this.metrics.cpuPerc:0},mem:function(){return this.metrics?this.metrics.memUsed/this.metrics.memTotal*100:0},disk:function(){return this.metrics?100-this.metrics.diskFree/this.metrics.diskTotal*100:0},net:function(){let t=this.metrics.netBytesSent+this.metrics.netBytesRecv,e=t-Z;return Z?(Z=t,e/1e3):(Z=t,0)}},created(){this.update(),Y=setInterval(this.update,2500)},beforeDestroy(){clearInterval(Y)},methods:{update:async function(){this.error=null;try{this.metrics=await this.apiGetMetrics()}catch(t){this.error=t}}}},X=Q,tt=(i("b910"),Object(o["a"])(X,D,U,!1,null,"1f3d303a",null)),et=tt.exports,it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("div",{staticClass:"card-header bg-success h3"},[i("fa",{attrs:{icon:"umbrella"}}),t._v("  Weather ")],1),i("div",{staticClass:"card-body"},[t.error?i("b-alert",{attrs:{show:"",variant:"warning"}},[i("h4",[t._v("There was a problem 😥")]),i("div",{staticClass:"errmsg"},[t._v(" "+t._s(t.error)+" ")])]):t._e(),t.weather||t.error?t._e():i("spinner"),t.weather?i("div",{attrs:{id:"weather-div"}},[i("skycon",{attrs:{condition:t.weather.weather.currently.icon,width:256,height:256,color:"#223322"}})],1):t._e(),t.weather?i("table",{staticClass:"table table-hover"},[i("tbody",[i("tr",[t._m(0),i("td",[t._v(t._s(t.weather.ipAddress))])]),i("tr",[t._m(1),i("td",[t._v(t._s(t.weather.location.city)+" / "+t._s(t.weather.location.country_name))])]),i("tr",[t._m(2),i("td",[t._v(t._s(t.weather.weather.currently.summary))])]),i("tr",[t._m(3),i("td",[t._v(t._s(t.weather.weather.currently.temperature)+" °C")])]),i("tr",[t._m(4),i("td",[t._v(t._s(t.weather.weather.currently.precipProbability)+"%")])]),i("tr",[t._m(5),i("td",[t._v(t._s(t.weather.weather.currently.windSpeed)+" km/h")])]),i("tr",[t._m(6),i("td",[t._v(t._s(t.weather.weather.currently.uvIndex))])]),i("tr",[t._m(7),i("td",[t._v(t._s(t.weather.weather.currently.humidity))])])])]):t._e()],1)])},nt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",[i("b",[t._v("IP Address:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",[i("b",[t._v("Location:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",[i("b",[t._v("Summary:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",[i("b",[t._v("Temperature:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",[i("b",[t._v("Precipitation:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",[i("b",[t._v("Wind Speed:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",[i("b",[t._v("UV Index:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",[i("b",[t._v("Humidity:")])])}],st={components:{Spinner:T},mixins:[k],data:function(){return{weather:null,error:null}},computed:{},created(){this.update()},methods:{update:async function(){this.error=null;try{this.weather=await this.apiGetWeather()}catch(t){this.error=t,t.toString().includes("Not Implemented")&&(this.error="Feature not enabled on the server, WEATHER_API_KEY & IPSTACK_API_KEY need to be set")}}}},at=st,ot=(i("6ded"),Object(o["a"])(at,it,nt,!1,null,null,null)),rt=ot.exports;n["default"].use(c["a"]);var lt=new c["a"]({mode:"history",routes:[{path:"/",name:"home",component:m},{path:"/home",name:"apphome",component:m},{path:"/info",name:"info",component:$},{path:"/monitor",name:"monitor",component:et},{path:"/weather",name:"weather",component:rt},{path:"/about",name:"about",component:w},{path:"*",name:"catchall",component:C["default"]}]}),ht=i("5f5b"),ct=(i("f9e3"),i("2dd8"),i("560b"),i("ecee")),ut=i("c074"),dt=i("f2d1"),pt=i("ad3d"),ft=i("9fbf");ct["c"].add([ut["g"],ut["b"],ut["m"],ut["h"],dt["b"],dt["a"],ut["n"],ut["a"],ut["c"],ut["i"],ut["d"],ut["e"],ut["k"],ut["o"],ut["j"],ut["f"],ut["l"]]),n["default"].component("fa",pt["a"]),n["default"].component("Skycon",ft["a"]),n["default"].use(ht["a"]),n["default"].config.productionTip=!1,new n["default"]({router:lt,render:t=>t(h)}).$mount("#app")},"5a9a":function(t,e,i){"use strict";i("020a")},"612b":function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return s}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("div",{staticClass:"card-header bg-success h3"},[i("fa",{attrs:{icon:"bomb"}}),t._v("  Error ")],1),t._m(0)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-body"},[n("p",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:i("1fe8")}})])])}]},6682:function(t,e,i){},"6ded":function(t,e,i){"use strict";i("adf1")},7034:function(t,e,i){t.exports=i.p+"img/vuejs.f016bf23.svg"},"7a34":function(t,e,i){},"81e3":function(t,e,i){"use strict";i("7a34")},"85ec":function(t,e,i){},"8d09":function(t,e,i){},9224:function(t){t.exports=JSON.parse('{"name":"vuego-demoapp-spa","version":"1.8.4","private":true,"description":"Frontend web client SPA for vuego-demoapp","author":{"name":"Ben Coleman"},"repository":{"url":"https://github.com/benc-uk/vuego-demoapp"},"license":"MIT","scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.32","@fortawesome/free-brands-svg-icons":"^5.15.1","@fortawesome/free-solid-svg-icons":"^5.15.1","@fortawesome/vue-fontawesome":"^2.0.0","bootstrap-vue":"^2.18.1","vue":"^2.6.12","vue-router":"^3.4.8","vue-skycons":"^4.0.3"},"devDependencies":{"@vue/cli-service":"^4.5.8","node-sass":"4.14.1","sass-loader":"^10.0.4","vue-template-compiler":"^2.6.12","babel-eslint":"^10.1.0","eslint":"^7.12.1","eslint-plugin-vue":"^7.1.0","@vue/cli-plugin-eslint":"~4.5.8"},"postcss":{"plugins":{"autoprefixer":{}}},"browserslist":["> 1%","last 2 versions","not dead"]}')},"9af2":function(t,e,i){"use strict";i("8d09")},a29a:function(t,e,i){var n;(function(){let s,a,o,r,l,h,c,u,d,p,f,m,g,v=[].slice,b={}.hasOwnProperty,_=function(t,e){function i(){this.constructor=t}for(let n in e)b.call(e,n)&&(t[n]=e[n]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t};!function(){let t,e,i,n,s,a,o;for(o=["ms","moz","webkit","o"],i=0,s=o.length;i<s&&(a=o[i],!window.requestAnimationFrame);i++)window.requestAnimationFrame=window[a+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a+"CancelAnimationFrame"]||window[a+"CancelRequestAnimationFrame"];t=null,n=0,e={},requestAnimationFrame?window.cancelAnimationFrame||(t=window.requestAnimationFrame,window.requestAnimationFrame=function(i,s){let a;return a=++n,t((function(){if(!e[a])return i()}),s),a},window.cancelAnimationFrame=function(t){return e[t]=!0}):(window.requestAnimationFrame=function(t,e){let i,n,s,a;return i=(new Date).getTime(),a=Math.max(0,16-(i-s)),n=window.setTimeout((function(){return t(i+a)}),a),s=i+a,n},window.cancelAnimationFrame=function(t){return clearTimeout(t)})}(),g=function(t){let e,i;for(e=Math.floor(t/3600),i=Math.floor((t-3600*e)/60),t-=3600*e+60*i,t+="",i+="";i.length<2;)i="0"+i;for(;t.length<2;)t="0"+t;return(e=e?e+":":"")+i+":"+t},f=function(){let t,e,i;return e=1<=arguments.length?v.call(arguments,0):[],i=e[0],t=e[1],d(i.toFixed(t))},m=function(t,e){let i,n,s;for(i in n={},t)b.call(t,i)&&(s=t[i],n[i]=s);for(i in e)b.call(e,i)&&(s=e[i],n[i]=s);return n},d=function(t){let e,i,n,s;for(t+="",i=t.split("."),n=i[0],s="",i.length>1&&(s="."+i[1]),e=/(\d+)(\d{3})/;e.test(n);)n=n.replace(e,"$1,$2");return n+s},p=function(t){return"#"===t.charAt(0)?t.substring(1,7):t},u=function(){function t(t,e){null==t&&(t=!0),this.clear=null==e||e,t&&AnimationUpdater.add(this)}return t.prototype.animationSpeed=32,t.prototype.update=function(t){let e;return null==t&&(t=!1),!(!t&&this.displayedValue===this.value)&&(this.ctx&&this.clear&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),e=this.value-this.displayedValue,Math.abs(e/this.animationSpeed)<=.001?this.displayedValue=this.value:this.displayedValue=this.displayedValue+e/this.animationSpeed,this.render(),!0)},t}(),o=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return _(e,t),e.prototype.displayScale=1,e.prototype.forceUpdate=!0,e.prototype.setTextField=function(t,e){return this.textField=t instanceof c?t:new c(t,e)},e.prototype.setMinValue=function(t,e){let i,n,s,a,o;if(this.minValue=t,null==e&&(e=!0),e){for(this.displayedValue=this.minValue,a=this.gp||[],o=[],n=0,s=a.length;n<s;n++)i=a[n],o.push(i.displayedValue=this.minValue);return o}},e.prototype.setOptions=function(t){return null==t&&(t=null),this.options=m(this.options,t),this.textField&&(this.textField.el.style.fontSize=t.fontSize+"px"),this.options.angle>.5&&(this.options.angle=.5),this.configDisplayScale(),this},e.prototype.configDisplayScale=function(){let t,e,i,n,s;return n=this.displayScale,!1===this.options.highDpiSupport?delete this.displayScale:(e=window.devicePixelRatio||1,t=this.ctx.webkitBackingStorePixelRatio||this.ctx.mozBackingStorePixelRatio||this.ctx.msBackingStorePixelRatio||this.ctx.oBackingStorePixelRatio||this.ctx.backingStorePixelRatio||1,this.displayScale=e/t),this.displayScale!==n&&(s=this.canvas.G__width||this.canvas.width,i=this.canvas.G__height||this.canvas.height,this.canvas.width=s*this.displayScale,this.canvas.height=i*this.displayScale,this.canvas.style.width=s+"px",this.canvas.style.height=i+"px",this.canvas.G__width=s,this.canvas.G__height=i),this},e.prototype.parseValue=function(t){return t=parseFloat(t)||Number(t),isFinite(t)?t:0},e}(u),c=function(){function t(t,e){this.el=t,this.fractionDigits=e}return t.prototype.render=function(t){return this.el.innerHTML=f(t.displayedValue,this.fractionDigits)},t}(),s=function(t){function e(t,i){if(this.elem=t,this.text=null!=i&&i,e.__super__.constructor.call(this),void 0===this.elem)throw new Error("The element isn't defined.");this.value=1*this.elem.innerHTML,this.text&&(this.value=0)}return _(e,t),e.prototype.displayedValue=0,e.prototype.value=0,e.prototype.setVal=function(t){return this.value=1*t},e.prototype.render=function(){let t;return t=this.text?g(this.displayedValue.toFixed(0)):d(f(this.displayedValue)),this.elem.innerHTML=t},e}(u),h=function(t){function e(t){if(this.gauge=t,void 0===this.gauge)throw new Error("The element isn't defined.");this.ctx=this.gauge.ctx,this.canvas=this.gauge.canvas,e.__super__.constructor.call(this,!1,!1),this.setOptions()}return _(e,t),e.prototype.displayedValue=0,e.prototype.value=0,e.prototype.options={strokeWidth:.035,length:.1,color:"#000000",iconPath:null,iconScale:1,iconAngle:0},e.prototype.img=null,e.prototype.setOptions=function(t){if(null==t&&(t=null),this.options=m(this.options,t),this.length=2*this.gauge.radius*this.gauge.options.radiusScale*this.options.length,this.strokeWidth=this.canvas.height*this.options.strokeWidth,this.maxValue=this.gauge.maxValue,this.minValue=this.gauge.minValue,this.animationSpeed=this.gauge.animationSpeed,this.options.angle=this.gauge.options.angle,this.options.iconPath)return this.img=new Image,this.img.src=this.options.iconPath},e.prototype.render=function(){let t,e,i,n,s,a,o,r,l;if(t=this.gauge.getAngle.call(this,this.displayedValue),r=Math.round(this.length*Math.cos(t)),l=Math.round(this.length*Math.sin(t)),a=Math.round(this.strokeWidth*Math.cos(t-Math.PI/2)),o=Math.round(this.strokeWidth*Math.sin(t-Math.PI/2)),e=Math.round(this.strokeWidth*Math.cos(t+Math.PI/2)),i=Math.round(this.strokeWidth*Math.sin(t+Math.PI/2)),this.ctx.beginPath(),this.ctx.fillStyle=this.options.color,this.ctx.arc(0,0,this.strokeWidth,0,2*Math.PI,!1),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(a,o),this.ctx.lineTo(r,l),this.ctx.lineTo(e,i),this.ctx.fill(),this.img)return n=Math.round(this.img.width*this.options.iconScale),s=Math.round(this.img.height*this.options.iconScale),this.ctx.save(),this.ctx.translate(r,l),this.ctx.rotate(t+Math.PI/180*(90+this.options.iconAngle)),this.ctx.drawImage(this.img,-n/2,-s/2,n,s),this.ctx.restore()},e}(u),function(){function t(t){this.elem=t}t.prototype.updateValues=function(t){return this.value=t[0],this.maxValue=t[1],this.avgValue=t[2],this.render()},t.prototype.render=function(){let t,e;return this.textField&&this.textField.text(f(this.value)),0===this.maxValue&&(this.maxValue=2*this.avgValue),e=this.value/this.maxValue*100,t=this.avgValue/this.maxValue*100,$(".bar-value",this.elem).css({width:e+"%"}),$(".typical-value",this.elem).css({width:t+"%"})}}(),l=function(t){function e(t){let i,n;this.canvas=t,e.__super__.constructor.call(this),this.percentColors=null,"undefined"!=typeof G_vmlCanvasManager&&(this.canvas=window.G_vmlCanvasManager.initElement(this.canvas)),this.ctx=this.canvas.getContext("2d"),i=this.canvas.clientHeight,n=this.canvas.clientWidth,this.canvas.height=i,this.canvas.width=n,this.gp=[new h(this)],this.setOptions()}return _(e,t),e.prototype.elem=null,e.prototype.value=[20],e.prototype.maxValue=80,e.prototype.minValue=0,e.prototype.displayedAngle=0,e.prototype.displayedValue=0,e.prototype.lineWidth=40,e.prototype.paddingTop=.1,e.prototype.paddingBottom=.1,e.prototype.percentColors=null,e.prototype.options={colorStart:"#6fadcf",colorStop:void 0,gradientType:0,strokeColor:"#e0e0e0",pointer:{length:.8,strokeWidth:.035,iconScale:1},angle:.15,lineWidth:.44,radiusScale:1,fontSize:40,limitMax:!1,limitMin:!1},e.prototype.setOptions=function(t){let i,n,s,a,o;for(null==t&&(t=null),e.__super__.setOptions.call(this,t),this.configPercentColors(),this.extraPadding=0,this.options.angle<0&&(a=Math.PI*(1+this.options.angle),this.extraPadding=Math.sin(a)),this.availableHeight=this.canvas.height*(1-this.paddingTop-this.paddingBottom),this.lineWidth=this.availableHeight*this.options.lineWidth,this.radius=(this.availableHeight-this.lineWidth/2)/(1+this.extraPadding),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),o=this.gp,n=0,s=o.length;n<s;n++)i=o[n],i.setOptions(this.options.pointer),i.render();return this.render(),this},e.prototype.configPercentColors=function(){let t,e,i,n,s,a,o;if(this.percentColors=null,void 0!==this.options.percentColors){for(this.percentColors=new Array,a=[],i=n=0,s=this.options.percentColors.length-1;0<=s?n<=s:n>=s;i=0<=s?++n:--n)o=parseInt(p(this.options.percentColors[i][1]).substring(0,2),16),e=parseInt(p(this.options.percentColors[i][1]).substring(2,4),16),t=parseInt(p(this.options.percentColors[i][1]).substring(4,6),16),a.push(this.percentColors[i]={pct:this.options.percentColors[i][0],color:{r:o,g:e,b:t}});return a}},e.prototype.set=function(t){let e,i,n,s,a,o,r,l,c;for(t instanceof Array||(t=[t]),i=n=0,r=t.length-1;0<=r?n<=r:n>=r;i=0<=r?++n:--n)t[i]=this.parseValue(t[i]);if(t.length>this.gp.length)for(i=s=0,l=t.length-this.gp.length;0<=l?s<l:s>l;i=0<=l?++s:--s)e=new h(this),e.setOptions(this.options.pointer),this.gp.push(e);else t.length<this.gp.length&&(this.gp=this.gp.slice(this.gp.length-t.length));for(i=0,a=0,o=t.length;a<o;a++)c=t[a],c>this.maxValue?this.options.limitMax?c=this.maxValue:this.maxValue=c+1:c<this.minValue&&(this.options.limitMin?c=this.minValue:this.minValue=c-1),this.gp[i].value=c,this.gp[i++].setOptions({minValue:this.minValue,maxValue:this.maxValue,angle:this.options.angle});return this.value=Math.max(Math.min(t[t.length-1],this.maxValue),this.minValue),AnimationUpdater.run(this.forceUpdate),this.forceUpdate=!1},e.prototype.getAngle=function(t){return(1+this.options.angle)*Math.PI+(t-this.minValue)/(this.maxValue-this.minValue)*(1-2*this.options.angle)*Math.PI},e.prototype.getColorForPercentage=function(t,e){let i,n,s,a,o,r,l;if(0===t)i=this.percentColors[0].color;else for(i=this.percentColors[this.percentColors.length-1].color,s=a=0,r=this.percentColors.length-1;0<=r?a<=r:a>=r;s=0<=r?++a:--a)if(t<=this.percentColors[s].pct){!0===e?(l=this.percentColors[s-1]||this.percentColors[0],n=this.percentColors[s],o=(t-l.pct)/(n.pct-l.pct),i={r:Math.floor(l.color.r*(1-o)+n.color.r*o),g:Math.floor(l.color.g*(1-o)+n.color.g*o),b:Math.floor(l.color.b*(1-o)+n.color.b*o)}):i=this.percentColors[s].color;break}return"rgb("+[i.r,i.g,i.b].join(",")+")"},e.prototype.getColorForValue=function(t,e){let i;return i=(t-this.minValue)/(this.maxValue-this.minValue),this.getColorForPercentage(i,e)},e.prototype.renderStaticLabels=function(t,e,i,n){let s,a,o,r,l,h,c,u,d,p;for(this.ctx.save(),this.ctx.translate(e,i),s=t.font||"10px Times",h=/\d+\.?\d?/,l=s.match(h)[0],u=s.slice(l.length),a=parseFloat(l)*this.displayScale,this.ctx.font=a+u,this.ctx.fillStyle=t.color||"#000000",this.ctx.textBaseline="bottom",this.ctx.textAlign="center",c=t.labels,o=0,r=c.length;o<r;o++)p=c[o],void 0!==p.label?(!this.options.limitMin||p>=this.minValue)&&(!this.options.limitMax||p<=this.maxValue)&&(s=p.font||t.font,l=s.match(h)[0],u=s.slice(l.length),a=parseFloat(l)*this.displayScale,this.ctx.font=a+u,d=this.getAngle(p.label)-3*Math.PI/2,this.ctx.rotate(d),this.ctx.fillText(f(p.label,t.fractionDigits),0,-n-this.lineWidth/2),this.ctx.rotate(-d)):(!this.options.limitMin||p>=this.minValue)&&(!this.options.limitMax||p<=this.maxValue)&&(d=this.getAngle(p)-3*Math.PI/2,this.ctx.rotate(d),this.ctx.fillText(f(p,t.fractionDigits),0,-n-this.lineWidth/2),this.ctx.rotate(-d));return this.ctx.restore()},e.prototype.renderTicks=function(t,e,i,n){let s,a,o,r,l,h,c,u,d,p,f,m,g,v,b,_,x,y,w,C,S;if(t!=={}){for(h=t.divisions||0,w=t.subDivisions||0,o=t.divColor||"#fff",b=t.subColor||"#fff",r=t.divLength||.7,x=t.subLength||.2,d=parseFloat(this.maxValue)-parseFloat(this.minValue),p=parseFloat(d)/parseFloat(t.divisions),_=parseFloat(p)/parseFloat(t.subDivisions),s=parseFloat(this.minValue),a=0+_,u=d/400,l=u*(t.divWidth||1),y=u*(t.subWidth||1),m=[],C=c=0,f=h+1;c<f;C=c+=1)this.ctx.lineWidth=this.lineWidth*r,g=this.lineWidth/2*(1-r),S=this.radius*this.options.radiusScale+g,this.ctx.strokeStyle=o,this.ctx.beginPath(),this.ctx.arc(0,0,S,this.getAngle(s-l),this.getAngle(s+l),!1),this.ctx.stroke(),a=s+_,s+=p,C!==t.divisions&&w>0?m.push(function(){let t,e,i;for(i=[],v=t=0,e=w-1;t<e;v=t+=1)this.ctx.lineWidth=this.lineWidth*x,g=this.lineWidth/2*(1-x),S=this.radius*this.options.radiusScale+g,this.ctx.strokeStyle=b,this.ctx.beginPath(),this.ctx.arc(0,0,S,this.getAngle(a-y),this.getAngle(a+y),!1),this.ctx.stroke(),i.push(a+=_);return i}.call(this)):m.push(void 0);return m}},e.prototype.render=function(){let t,e,i,n,s,a,o,r,l,h,c,u,d,p,f,m,g;if(m=this.canvas.width/2,n=this.canvas.height*this.paddingTop+this.availableHeight-(this.radius+this.lineWidth/2)*this.extraPadding,t=this.getAngle(this.displayedValue),this.textField&&this.textField.render(this),this.ctx.lineCap="butt",c=this.radius*this.options.radiusScale,this.options.staticLabels&&this.renderStaticLabels(this.options.staticLabels,m,n,c),this.options.staticZones)for(this.ctx.save(),this.ctx.translate(m,n),this.ctx.lineWidth=this.lineWidth,u=this.options.staticZones,s=0,o=u.length;s<o;s++)g=u[s],h=g.min,this.options.limitMin&&h<this.minValue&&(h=this.minValue),l=g.max,this.options.limitMax&&l>this.maxValue&&(l=this.maxValue),f=this.radius*this.options.radiusScale,g.height&&(this.ctx.lineWidth=this.lineWidth*g.height,p=this.lineWidth/2*(g.offset||1-g.height),f=this.radius*this.options.radiusScale+p),this.ctx.strokeStyle=g.strokeStyle,this.ctx.beginPath(),this.ctx.arc(0,0,f,this.getAngle(h),this.getAngle(l),!1),this.ctx.stroke();else void 0!==this.options.customFillStyle?e=this.options.customFillStyle(this):null!==this.percentColors?e=this.getColorForValue(this.displayedValue,this.options.generateGradient):void 0!==this.options.colorStop?(e=0===this.options.gradientType?this.ctx.createRadialGradient(m,n,9,m,n,70):this.ctx.createLinearGradient(0,0,m,0),e.addColorStop(0,this.options.colorStart),e.addColorStop(1,this.options.colorStop)):e=this.options.colorStart,this.ctx.strokeStyle=e,this.ctx.beginPath(),this.ctx.arc(m,n,c,(1+this.options.angle)*Math.PI,t,!1),this.ctx.lineWidth=this.lineWidth,this.ctx.stroke(),this.ctx.strokeStyle=this.options.strokeColor,this.ctx.beginPath(),this.ctx.arc(m,n,c,t,(2-this.options.angle)*Math.PI,!1),this.ctx.stroke(),this.ctx.save(),this.ctx.translate(m,n);for(this.options.renderTicks&&this.renderTicks(this.options.renderTicks,m,n,c),this.ctx.restore(),this.ctx.translate(m,n),d=this.gp,a=0,r=d.length;a<r;a++)i=d[a],i.update(!0);return this.ctx.translate(-m,-n)},e}(o),a=function(t){function e(t){this.canvas=t,e.__super__.constructor.call(this),"undefined"!=typeof G_vmlCanvasManager&&(this.canvas=window.G_vmlCanvasManager.initElement(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.setOptions(),this.render()}return _(e,t),e.prototype.lineWidth=15,e.prototype.displayedValue=0,e.prototype.value=33,e.prototype.maxValue=80,e.prototype.minValue=0,e.prototype.options={lineWidth:.1,colorStart:"#6f6ea0",colorStop:"#c0c0db",strokeColor:"#eeeeee",shadowColor:"#d5d5d5",angle:.35,radiusScale:1},e.prototype.getAngle=function(t){return(1-this.options.angle)*Math.PI+(t-this.minValue)/(this.maxValue-this.minValue)*(2+this.options.angle-(1-this.options.angle))*Math.PI},e.prototype.setOptions=function(t){return null==t&&(t=null),e.__super__.setOptions.call(this,t),this.lineWidth=this.canvas.height*this.options.lineWidth,this.radius=this.options.radiusScale*(this.canvas.height/2-this.lineWidth/2),this},e.prototype.set=function(t){return this.value=this.parseValue(t),this.value>this.maxValue?this.options.limitMax?this.value=this.maxValue:this.maxValue=this.value:this.value<this.minValue&&(this.options.limitMin?this.value=this.minValue:this.minValue=this.value),AnimationUpdater.run(this.forceUpdate),this.forceUpdate=!1},e.prototype.render=function(){let t,e,i,n;return t=this.getAngle(this.displayedValue),n=this.canvas.width/2,i=this.canvas.height/2,this.textField&&this.textField.render(this),e=this.ctx.createRadialGradient(n,i,39,n,i,70),e.addColorStop(0,this.options.colorStart),e.addColorStop(1,this.options.colorStop),this.radius,this.lineWidth,this.radius,this.lineWidth,this.ctx.strokeStyle=this.options.strokeColor,this.ctx.beginPath(),this.ctx.arc(n,i,this.radius,(1-this.options.angle)*Math.PI,(2+this.options.angle)*Math.PI,!1),this.ctx.lineWidth=this.lineWidth,this.ctx.lineCap="round",this.ctx.stroke(),this.ctx.strokeStyle=e,this.ctx.beginPath(),this.ctx.arc(n,i,this.radius,(1-this.options.angle)*Math.PI,t,!1),this.ctx.stroke()},e}(o),r=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return _(e,t),e.prototype.strokeGradient=function(t,e,i,n){let s;return s=this.ctx.createRadialGradient(t,e,i,t,e,n),s.addColorStop(0,this.options.shadowColor),s.addColorStop(.12,this.options._orgStrokeColor),s.addColorStop(.88,this.options._orgStrokeColor),s.addColorStop(1,this.options.shadowColor),s},e.prototype.setOptions=function(t){let i,n,s,a;return null==t&&(t=null),e.__super__.setOptions.call(this,t),a=this.canvas.width/2,i=this.canvas.height/2,n=this.radius-this.lineWidth/2,s=this.radius+this.lineWidth/2,this.options._orgStrokeColor=this.options.strokeColor,this.options.strokeColor=this.strokeGradient(a,i,n,s),this},e}(a),window.AnimationUpdater={elements:[],animId:null,addAll:function(t){let e,i,n,s;for(s=[],i=0,n=t.length;i<n;i++)e=t[i],s.push(AnimationUpdater.elements.push(e));return s},add:function(t){return AnimationUpdater.elements.push(t)},run:function(t){let e,i,n,s,a;if(null==t&&(t=!1),isFinite(parseFloat(t))||!0===t){for(i=!0,a=AnimationUpdater.elements,n=0,s=a.length;n<s;n++)e=a[n],e.update(!0===t)&&(i=!1);return AnimationUpdater.animId=i?null:requestAnimationFrame(AnimationUpdater.run)}if(!1===t)return!0===AnimationUpdater.animId&&cancelAnimationFrame(AnimationUpdater.animId),AnimationUpdater.animId=requestAnimationFrame(AnimationUpdater.run)}},"function"==typeof window.define&&null!=window.define.amd?(n=function(){return{Gauge:l,Donut:r,BaseDonut:a,TextRenderer:c}}.call(e,i,e,t),void 0===n||(t.exports=n)):null!=t.exports?t.exports={Gauge:l,Donut:r,BaseDonut:a,TextRenderer:c}:(window.Gauge=l,window.Donut=r,window.BaseDonut=a,window.TextRenderer=c)}).call(this)},adf1:function(t,e,i){},b910:function(t,e,i){"use strict";i("5448")},bcb8:function(t,e,i){t.exports=i.p+"img/docker.840afa97.png"},f22a:function(t,e,i){"use strict";i("1f6b")},fa37:function(t,e,i){"use strict";var n=i("0312"),s=i.n(n);e["default"]=s.a}});