(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22ce83"],{f4dc:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"change-package"},[r("div",{staticStyle:{position:"fixed",top:"50%",left:"50%","z-index":"999"}},[e.loading?r("atom-spinner",{attrs:{"animation-duration":e.speed,size:e.config.size,color:e.spinnersColor}}):e._e()],1),e.processingError?r("div",{staticClass:"mb-3"},[r("va-notification",{attrs:{color:"danger",closeable:""}},[e._v(" An error occurred! Please Try again later. ")])],1):e._e()])},o=[],a=r("bc3a"),i=r.n(a),s=r("4583");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p={components:u({},s),name:"funds-transfer",data:function(){return{userData:JSON.parse(localStorage.getItem("LoggedUser")),accdetails:JSON.parse(localStorage.getItem("UserMianFosa")),token:JSON.parse(localStorage.getItem("Token")),config:{size:80,duration:1500},spinnersColor:this.$themes.secondary,currentDuration:1500,sliderDuration:{min:1e3,max:2e3}}},computed:{speed:function(){return this.sliderDuration.min+this.sliderDuration.max-this.currentDuration}},methods:{onsubmit:function(){},FinalPost:function(){},GetPackageList:function(){var e=this,t={headers:{Authorization:this.userData.user_id+" "+this.token}};i.a.post("".concat(e.$apiUrl,"GetPackageList"),this.userData.user_id,t).then((function(e){e=e.data})).catch((function(e){console.log(e)}))}},created:function(){this.GetPackageList()}},d=p,f=r("2877"),g=Object(f["a"])(d,n,o,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d22ce83.726eb1f1.js.map