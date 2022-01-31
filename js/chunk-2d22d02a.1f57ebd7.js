(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d02a"],{f659:function(t,s,o){"use strict";o.r(s);var a=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"funds-deposit"},[o("div",{staticStyle:{position:"fixed",top:"50%",left:"50%","z-index":"999"}},[t.loading?o("atom-spinner",{attrs:{"animation-duration":t.speed,size:t.config.size,color:t.spinnersColor}}):t._e()],1),t.processingError?o("div",{staticClass:"mb-3"},[o("va-notification",{attrs:{color:"danger",closeable:""}},[t._v(" An error occurred! Please Try again later. ")])],1):t._e(),o("div",{staticClass:"row"},[o("div",{staticClass:"flex xs12 md6 lg6"},[o("va-card",{attrs:{title:t.$t("activities.password_form")}},[o("form",{on:{submit:function(s){return s.preventDefault(),t.onsubmit(s)}}},[o("va-input",{staticClass:"mb-4",attrs:{label:"Edit Password",type:"password",error:!!t.passwordErrors.length,"error-messages":t.passwordErrors},model:{value:t.formdata.password,callback:function(s){t.$set(t.formdata,"password",s)},expression:"formdata.password"}}),o("va-input",{attrs:{label:"Confirm Password",type:"password",error:!!t.passwordErrors.length,"error-messages":t.passwordErrors},model:{value:t.formdata.confirm,callback:function(s){t.$set(t.formdata,"confirm",s)},expression:"formdata.confirm"}}),o("div",{staticClass:"row mt-5"},[o("va-button",{attrs:{type:"submit"}},[t._v(" "+t._s(t.$t("forms.controls.submit"))+" ")])],1)],1)])],1)]),o("va-modal",{attrs:{position:"top",size:"medium",title:t.$t("confirm_trans"),cancelClass:"none",okText:t.$t("modal.confirm"),cancelText:t.$t("modal.cancel"),noOutsideDismiss:"",noEscDismiss:""},on:{ok:t.FinalPost},model:{value:t.showConfirmModal,callback:function(s){t.showConfirmModal=s},expression:"showConfirmModal"}},[o("table",{staticClass:"va-table va-table--striped va-table--hoverable",attrs:{width:"100%"}},[o("tbody",[o("tr",[o("td",[t._v("Password")]),o("td",{staticStyle:{"text-align":"right"}},[t._v(" "+t._s(t.new_pass)+" ")])])])])])],1)},r=[],e=o("bc3a"),n=o.n(e),i=o("4583");function c(t,s){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),o.push.apply(o,a)}return o}function d(t){for(var s=1;s<arguments.length;s++){var o=null!=arguments[s]?arguments[s]:{};s%2?c(Object(o),!0).forEach((function(s){l(t,s,o[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(o,s))}))}return t}function l(t,s,o){return s in t?Object.defineProperty(t,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[s]=o,t}var u={components:d({},i),name:"funds-deposit",data:function(){return{userData:JSON.parse(localStorage.getItem("LoggedUser")),accdetails:JSON.parse(localStorage.getItem("UserMianFosa")),token:JSON.parse(localStorage.getItem("Token")),loading:!1,processingError:!1,loadSelect:!1,showConfirmModal:!1,new_pass:"",router_name:"",accounts:JSON.parse(localStorage.getItem("UserFosas")),fosas:JSON.parse(localStorage.getItem("UserFosas")),config:{size:80,duration:1500},spinnersColor:this.$themes.secondary,currentDuration:1500,sliderDuration:{min:1e3,max:2e3},formdata:{name:"",password:"",confirm:""},passwordErrors:[],showBosa:!1,showFosa:!1,acc_code:{},selected:{},postdata:{}}},computed:{speed:function(){return this.sliderDuration.min+this.sliderDuration.max-this.currentDuration},formReady:function(){return!this.passwordErrors.length}},methods:{getSelected:function(t){return console.log(t),this.accounts.find((function(s){return s.paybill_code.toLowerCase()==t.toLowerCase()}))},onsubmit:function(){this.processingError=!1,this.passwordErrors=this.formdata.password==this.formdata.confirm?[]:["Password do not match"],this.formReady&&(this.new_pass=this.formdata.password,this.showConfirmModal=!0)},FinalPost:function(){this.formdata.password;var t="Password Changed Successfully";this.loading=!0;var s=this,o={headers:{Authorization:this.userData.user_id+" "+this.token}};n.a.post("".concat(this.$apiUrl,"ChangeWifiPass"),this.formdata,o).then((function(o){s.loading=!1,s.formdata.password=this.formdata.password;var a=o.data;"1"==a.response.success?s.showToast("Password Changed Successfully ".concat(t),{position:"bottom-right",icon:"fa-check",duration:2500}):s.processingError=!0})).catch((function(t){console.log(t)}))},loadBosaAccs:function(){this.loadSelect=!0;var t=this,s={headers:{Authorization:this.userData.user_id+" "+this.token}};n.a.post("".concat(t.$apiUrl,"GetBackOfficeAccounts"),t.userData.user_id,s).then((function(s){t.accounts=s.data,t.loadSelect=!1})).catch((function(t){console.log(t)}))},setSelected:function(t){this.formdata.acc_code={};var s=t.id;s&&("fosa"==s?(this.accounts=this.fosas,this.loadSelect=!1,this.showFosa=!0,this.showBosa=!1):(this.showBosa=!0,this.showFosa=!1,this.loadBosaAccs()))}},created:function(){this.formdata.phone_no=this.userData.mobile_number,this.formdata.user=this.userData.user_id}},f=u,p=o("2877"),m=Object(p["a"])(f,a,r,!1,null,null,null);s["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d22d02a.1f57ebd7.js.map