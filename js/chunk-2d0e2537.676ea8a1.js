(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2537"],{"7de9":function(r,s,o){"use strict";o.r(s);var t=function(){var r=this,s=r.$createElement,o=r._self._c||s;return o("div",{staticClass:"change-pin"},[o("div",{staticStyle:{position:"fixed",top:"50%",left:"50%","z-index":"999"}},[r.loading?o("atom-spinner",{attrs:{"animation-duration":r.speed,size:r.config.size,color:r.spinnersColor}}):r._e()],1),o("div",{staticClass:"row"},[o("div",{staticClass:"flex xs12 md6"},[o("va-card",{attrs:{title:r.$t("user.change-password")}},[o("form",{on:{submit:function(s){return s.preventDefault(),r.onsubmit(s)}}},[o("va-input",{attrs:{type:"password",label:r.$t("auth.old-password"),error:!!r.oldpasswordErrors.length,"error-messages":r.oldpasswordErrors},on:{input:r.checklength},model:{value:r.form.oldpassword,callback:function(s){r.$set(r.form,"oldpassword",s)},expression:"form.oldpassword"}}),o("va-input",{attrs:{type:"password",label:r.$t("auth.new-password"),error:!!r.passwordErrors.length,"error-messages":r.passwordErrors},on:{input:r.checklength},model:{value:r.form.password,callback:function(s){r.$set(r.form,"password",s)},expression:"form.password"}}),o("va-input",{attrs:{type:"password",label:r.$t("auth.confirm-password"),error:!!r.confirmPasswordErrors.length,"error-messages":r.confirmPasswordErrors},model:{value:r.form.confirmpassword,callback:function(s){r.$set(r.form,"confirmpassword",s)},expression:"form.confirmpassword"}}),o("div",{staticClass:"row mt-5"},[o("va-button",{attrs:{type:"submit"}},[r._v(" "+r._s(r.$t("forms.controls.submit"))+" ")])],1)],1)])],1)])])},e=[],n=o("bc3a"),a=o.n(n),i=o("4583");function d(r,s){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable}))),o.push.apply(o,t)}return o}function c(r){for(var s=1;s<arguments.length;s++){var o=null!=arguments[s]?arguments[s]:{};s%2?d(Object(o),!0).forEach((function(s){p(r,s,o[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(o,s))}))}return r}function p(r,s,o){return s in r?Object.defineProperty(r,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[s]=o,r}var u={components:c({},i),name:"signup",data:function(){return{loading:!1,userData:JSON.parse(localStorage.getItem("LoggedUser")),form:{oldpassword:"",password:"",confirmpassword:"",user:""},oldpasswordErrors:[],passwordErrors:[],confirmPasswordErrors:[],config:{size:80,duration:1500},spinnersColor:this.$themes.secondary,currentDuration:1500,sliderDuration:{min:1e3,max:2e3}}},computed:{speed:function(){return this.sliderDuration.min+this.sliderDuration.max-this.currentDuration},formReady:function(){return!this.passwordErrors.length&&!this.oldpasswordErrors.length&&!this.confirmPasswordErrors.length}},methods:{checklength:function(){this.passwordErrors=4!=this.form.password.length?["Enter four digit PIN"]:[],this.passwordErrors.length||(this.passwordErrors=/^\d+$/.test(this.form.password)?[]:["Pin should countain digits only"])},onsubmit:function(){if(this.oldpasswordErrors=this.form.oldpassword?[]:["Old PIN is required"],this.passwordErrors=this.form.password?[]:["PIN is required"],this.confirmPasswordErrors=this.form.confirmpassword?[]:["Confirm PIN field is required"],this.form.password!=this.form.confirmpassword&&(this.passwordErrors=["PINs Do not Match"],this.confirmPasswordErrors=["PINs Do not Match"]),this.formReady){var r=this;r.loading=!0,r.disableButton=!0,a.a.post("".concat(this.$apiUrl,"UpdatePass"),this.form).then((function(s){r.loading=!1;var o=s.data;1===o.success&&(r.showToast("Successful! Your PIN Has Been Successfully Updated",{position:"bottom-right",icon:"fa-check",duration:1e4}),r.$router.push({name:"dashboard"})),0===o.success&&(r.oldpasswordErrors=["Incorrect PIN"],r.showToast("Input the correct password",{position:"bottom-right",icon:"fa-times",duration:1e4}))})).catch((function(r){console.log(r)}))}}},created:function(){this.form.user=this.userData.user_id}},l=u,f=o("2877"),m=Object(f["a"])(l,t,e,!1,null,null,null);s["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0e2537.676ea8a1.js.map