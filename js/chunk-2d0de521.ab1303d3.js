(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de521"],{"84c2":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"loan"},[e("div",{staticStyle:{position:"fixed",top:"50%",left:"50%","z-index":"999"}},[t.loading?e("atom-spinner",{attrs:{"animation-duration":t.speed,size:t.config.size,color:t.spinnersColor}}):t._e()],1),t.processingError?e("div",{staticClass:"mb-3"},[e("va-notification",{attrs:{color:"danger",closeable:""}},[t._v(" An error occurred! Please Try again later. ")])],1):t._e(),e("div",{staticClass:"row"},[e("div",{staticClass:"flex xs12 md6"},[e("va-card",{attrs:{title:t.$t("loans.payment")}},[e("template",{slot:"actions"},[e("va-button",{attrs:{icon:"fa fa-close"},on:{click:function(a){return t.$router.go(-1)}}},[t._v("Cancel")])],1),e("form",{on:{submit:function(a){return a.preventDefault(),t.onsubmit(a)}}},[e("va-input",{attrs:{label:t.$t("amount"),type:"number",error:!!t.amountErrors.length,"error-messages":t.amountErrors},model:{value:t.formdata.amount,callback:function(a){t.$set(t.formdata,"amount",a)},expression:"formdata.amount"}}),e("va-select",{staticClass:"mb-4",attrs:{label:"Payment Method",textBy:"description",options:t.PaymentOptions,"key-by":"id"},on:{input:t.setSelected},model:{value:t.formdata.payment_mode,callback:function(a){t.$set(t.formdata,"payment_mode",a)},expression:"formdata.payment_mode"}}),t.showFosa?e("va-input",{attrs:{label:t.$t("fosa"),readonly:!0,error:!!t.fosaErrors.length,"error-messages":t.fosaErrors},model:{value:t.formdata.paybill_code,callback:function(a){t.$set(t.formdata,"paybill_code",a)},expression:"formdata.paybill_code"}}):t._e(),t.showMpesa?e("va-input",{attrs:{label:t.$t("mpesa-phone"),error:!!t.phoneErrors.length,"error-messages":t.phoneErrors},model:{value:t.formdata.phone_no,callback:function(a){t.$set(t.formdata,"phone_no",a)},expression:"formdata.phone_no"}}):t._e(),e("div",{staticClass:"row mt-5"},[e("va-button",{attrs:{type:"submit"}},[t._v(" "+t._s(t.$t("forms.controls.submit"))+" ")])],1)],1)],2)],1)]),e("va-modal",{attrs:{position:"top",size:"medium",title:t.$t("confirm_trans"),cancelClass:"none",okText:t.$t("modal.confirm"),cancelText:t.$t("modal.cancel"),noOutsideDismiss:"",noEscDismiss:""},on:{ok:t.FinalPost},model:{value:t.showConfirmModal,callback:function(a){t.showConfirmModal=a},expression:"showConfirmModal"}},[e("table",{staticClass:"va-table va-table--striped va-table--hoverable",attrs:{width:"100%"}},[e("tbody",[e("tr",[e("td",[t._v("Loan No")]),e("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.loan_no))])]),e("tr",[e("td",[t._v("Payment Method")]),e("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.payment_method))])]),t.showMpesa?e("tr",[e("td",[t._v("Payment Phone No")]),e("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.paying_phone_no))])]):t._e(),t.showFosa?e("tr",[e("td",[t._v("Payment Account")]),e("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.accdetails.accname))])]):t._e(),e("tr",[e("td",[t._v("Transaction Charge")]),e("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(t._f("Currency")(t.charge)))])]),e("tr",[e("td",[t._v("Current Loan Balance")]),e("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(t._f("Currency")(t.loan_balance)))])]),e("tr",[e("td",[t._v("Payment Amount")]),e("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(t._f("Currency")(t.payment_amount)))])]),e("tr",[e("td",[t._v("New Loan Balance")]),e("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(t._f("Currency")(t.loan_balance-t.payment_amount)))])])])])])],1)},n=[],r=e("bc3a"),s=e.n(r),i=e("4583");function c(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?c(Object(e),!0).forEach((function(a){d(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var m={components:l({},i),name:"loan",data:function(){return{userData:JSON.parse(localStorage.getItem("LoggedUser")),accdetails:JSON.parse(localStorage.getItem("UserMianFosa")),token:JSON.parse(localStorage.getItem("Token")),loan_no:this.$route.params.loan_no,loading:!1,processingError:!1,payment_method:"",finalPost:"",formdata:{payment_mode:"",phone_no:"",amount:"",paybill_code:"",user:""},amountErrors:[],fosaErrors:[],phoneErrors:[],showMpesa:!1,showFosa:!1,showConfirmModal:!1,accname:"",phone_no:"",charge:"",loan_balance:"",payment_amount:"",paying_phone_no:"",PaymentOptions:[{id:"",description:"select an Option"},{id:"mpesa",description:"M-pesa"},{id:"fosa",description:"Fosa"}],config:{size:80,duration:1500},spinnersColor:this.$themes.secondary,currentDuration:1500,sliderDuration:{min:1e3,max:2e3}}},computed:{speed:function(){return this.sliderDuration.min+this.sliderDuration.max-this.currentDuration},formReady:function(){return!this.amountErrors.length&&!this.fosaErrors.length&&!this.phoneErrors.length}},methods:{onsubmit:function(){if(this.processingError=!1,this.amountErrors=this.formdata.amount?[]:["Amount is required"],this.showFosa&&(this.fosaErrors=this.formdata.paybill_code?[]:["You Don't have an active fosa account"]),this.showMpesa&&(this.phoneErrors=this.formdata.phone_no?[]:["Phone No is required"]),this.formReady){this.paying_phone_no=this.formdata.phone_no;var t=this.formdata.payment_mode;this.formdata.payment_mode=this.formdata.payment_mode.id;var a={data:this.formdata,loan:this.loan_no};this.loading=!0;var e=this,o={headers:{Authorization:this.userData.user_id+" "+this.token}};s.a.post("".concat(this.$apiUrl,"GetLoanDetails"),a,o).then((function(a){e.loading=!1,e.formdata.payment_mode=t,e.payment_method=t.description;var o=a.data;e.finalPost=o,"2"==o.success&&(e.phoneErrors=["Please enter a valid safaricom line"]),"1"==o.success&&(e.charge=o.amount,e.payment_amount=o.data.data.amount,e.loan_balance=o.acc_details.balance,e.showConfirmModal=!0)})).catch((function(t){console.log(t)}))}},FinalPost:function(){var t=this.showMpesa?"Enter M-pesa pin on payong phone to complete":"Thank you !";this.loading=!0;var a=this,e={headers:{Authorization:this.userData.user_id+" "+this.token}};s.a.post("".concat(this.$apiUrl,"repayLoanFinal"),this.finalPost,e).then((function(e){a.loading=!1;var o=e.data;"1"==o.response.success?(a.showToast("Payment Processed succefully ".concat(t),{position:"bottom-right",icon:"fa-check",duration:2500}),setTimeout((function(){return a.$router.go(-1)}),2500)):a.processingError=!0})).catch((function(t){console.log(t)}))},setSelected:function(t){var a=t.id;a&&("fosa"==a?(this.showFosa=!0,this.showMpesa=!1):(this.showMpesa=!0,this.showFosa=!1))}},created:function(){if(this.formdata.phone_no=this.userData.mobile_number,this.formdata.user=this.userData.user_id,this.formdata.paybill_code=this.accdetails.accname,1!=this.userData.is_registered_mobile_user){var t="fosa";this.PaymentOptions=this.PaymentOptions.filter((function(a){return a.id!==t}))}}},u=m,h=e("2877"),p=Object(h["a"])(u,o,n,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0de521.ab1303d3.js.map