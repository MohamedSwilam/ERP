(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"1w2d":function(t,e,r){"use strict";var s={components:{BAvatar:r("G/QR").a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},o=(r("MOdh"),r("KHd+")),a=Object(o.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"toastification"},[r("div",{staticClass:"d-flex align-items-start"},[r("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[r("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),r("div",{staticClass:"d-flex flex-grow-1"},[r("div",[t.title?r("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?r("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),r("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():r("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"13ed5408",null);e.a=a.exports},"4cv3":function(t,e,r){"use strict";var s={bind:function(t,e){var r={event:"mousedown",transition:600};!function(t,e){t.forEach((function(t){isNaN(Number(t))?e.event=t:e.transition=t}))}(Object.keys(e.modifiers),r),t.addEventListener(r.event,(function(s){!function(t,e){var s=e,i=parseInt(getComputedStyle(s).borderWidth.replace("px","")),n=s.getBoundingClientRect(),l=n.left,c=n.top,u=s.offsetWidth,d=s.offsetHeight,m=t.clientX-l,p=t.clientY-c,f=Math.max(m,u-m),v=Math.max(p,d-p),h=window.getComputedStyle(s),b=Math.sqrt(f*f+v*v),g=i>0?i:0,_=document.createElement("div"),y=document.createElement("div");y.className="ripple-container",_.className="ripple",_.style.marginTop="0px",_.style.marginLeft="0px",_.style.width="1px",_.style.height="1px",_.style.transition="all "+r.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",_.style.borderRadius="50%",_.style.pointerEvents="none",_.style.position="relative",_.style.zIndex=a,_.style.backgroundColor=o,y.style.position="absolute",y.style.left=0-g+"px",y.style.top=0-g+"px",y.style.height="0",y.style.width="0",y.style.pointerEvents="none",y.style.overflow="hidden";var x=s.style.position.length>0?s.style.position:getComputedStyle(s).position;"relative"!==x&&(s.style.position="relative");function C(){setTimeout((function(){_.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){y.parentNode.removeChild(y)}),850),e.removeEventListener("mouseup",C,!1),setTimeout((function(){for(var t=!0,e=0;e<s.childNodes.length;e++)"ripple-container"===s.childNodes[e].className&&(t=!1);t&&(s.style.position="static"!==x?x:"")}),r.transition+250)}y.appendChild(_),s.appendChild(y),_.style.marginLeft=m+"px",_.style.marginTop=p+"px",y.style.width=u+"px",y.style.height=d+"px",y.style.borderTopLeftRadius=h.borderTopLeftRadius,y.style.borderTopRightRadius=h.borderTopRightRadius,y.style.borderBottomLeftRadius=h.borderBottomLeftRadius,y.style.borderBottomRightRadius=h.borderBottomRightRadius,y.style.direction="ltr",setTimeout((function(){_.style.width=2*b+"px",_.style.height=2*b+"px",_.style.marginLeft=m-b+"px",_.style.marginTop=p-b+"px"}),0),"mousedown"===t.type?e.addEventListener("mouseup",C,!1):C()}(s,t,e.value)}));var o=e.value||s.color||"rgba(0, 0, 0, 0.35)",a=s.zIndex||"9999"}};e.a=s},DEUr:function(t,e,r){var s=r("o1KL");"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(s,o);s.locals&&(t.exports=s.locals)},Kum6:function(t,e,r){"use strict";r("t8N3")},LaLd:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,"#customer-form li,#customer-form ul{list-style-type:none;text-decoration:none}",""])},MOdh:function(t,e,r){"use strict";r("DEUr")},aUQM:function(t,e,r){"use strict";r.r(e);var s=r("4cv3"),o=r("1w2d"),a={name:"CreateCustomer",directives:{Ripple:s.a},data:function(){return{customer:{isCardLoading:!1,isLoading:!1,customer_types:[],form:{name:"",email:"",phone:"",national_id:"",date_of_birth:"",address:"",customer_type_id:null}}}},mounted:function(){this.browseCustomerTypes()},methods:{browseCustomerTypes:function(){var t=this;this.customer.isCardLoading=!0,this.$store.dispatch("seed/browseCustomerTypes","").then((function(e){t.customer.customer_types=t.reformatCustomerTypesData(e.data.data),t.customer.isCardLoading=!1})).catch((function(e){console.error(e),t.customer.isCardLoading=!1}))},reformatCustomerTypesData:function(t){var e=[{value:null,text:"Select customer type"}];return t.forEach((function(t){e.push({value:t.id,text:t.type})})),e},createCustomer:function(){var t=this;this.customer.isLoading=!0,this.$store.dispatch("customer/create",this.customer.form).then((function(e){t.customer.isLoading=!1,t.$toast({component:o.a,props:{title:"Success",icon:"CheckCircleIcon",text:e.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3}),t.$router.push("/customers/".concat(e.data.data.id))})).catch((function(e){t.$refs.createCustomerForm.setErrors(e.response.data.errors),t.customer.isLoading=!1}))},reset:function(){this.customer.form.name="",this.customer.form.email="",this.customer.form.password="",this.customer.form.password_confirmation=""}}},i=(r("Kum6"),r("KHd+")),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"customer-form"}},[r("b-container",[r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("b-overlay",{attrs:{show:t.customer.isCardLoading,rounded:"sm"}},[r("b-card-actions",{ref:"createCustomer",attrs:{title:"Create Customer","action-collapse":""}},[r("validation-observer",{ref:"createCustomerForm",scopedSlots:t._u([{key:"default",fn:function(e){var s=e.handleSubmit;return[r("b-form",{on:{submit:function(e){return e.preventDefault(),s(t.createCustomer)}}},[r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Customer Type","label-for":"customer_type_id"}},[r("validation-provider",{attrs:{rules:"required",name:"Customer Type",vid:"customer_type_id"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[r("b-input-group",{class:0===s.length?"":"is-invalid"},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("feather-icon",{attrs:{icon:"UsersIcon"}})],1),t._v(" "),r("b-form-select",{attrs:{options:t.customer.customer_types,state:!(s.length>0)&&null},model:{value:t.customer.form.customer_type_id,callback:function(e){t.$set(t.customer.form,"customer_type_id",e)},expression:"customer.form.customer_type_id"}})],1),t._v(" "),r("small",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1)],1),t._v(" "),r("b-col",{attrs:{lg:"6",md:"6",sm:"12",xs:"12"}},[r("b-form-group",{attrs:{label:"Name","label-for":"name"}},[r("validation-provider",{attrs:{rules:"required",name:"Name",vid:"name"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[r("b-input-group",{class:0===s.length?"":"is-invalid"},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("feather-icon",{attrs:{icon:"UserIcon"}})],1),t._v(" "),r("b-form-input",{attrs:{id:"name",state:!(s.length>0)&&null,placeholder:"Name"},model:{value:t.customer.form.name,callback:function(e){t.$set(t.customer.form,"name",e)},expression:"customer.form.name"}})],1),t._v(" "),r("small",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1)],1),t._v(" "),r("b-col",{attrs:{lg:"6",md:"6",sm:"12",xs:"12"}},[r("b-form-group",{attrs:{label:"Email","label-for":"email"}},[r("validation-provider",{attrs:{rules:"required|email",name:"Email",vid:"email"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[r("b-input-group",{class:0===s.length?"":"is-invalid"},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("feather-icon",{attrs:{icon:"MailIcon"}})],1),t._v(" "),r("b-form-input",{attrs:{id:"code",state:!(s.length>0)&&null,placeholder:"Email"},model:{value:t.customer.form.email,callback:function(e){t.$set(t.customer.form,"email",e)},expression:"customer.form.email"}})],1),t._v(" "),r("small",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1)],1),t._v(" "),r("b-col",{attrs:{lg:"6",md:"6",sm:"12",xs:"12"}},[r("b-form-group",{attrs:{label:"Phone","label-for":"phone"}},[r("validation-provider",{attrs:{name:"Phone",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[r("b-input-group",{class:0===s.length?"":"is-invalid"},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("feather-icon",{attrs:{icon:"PhoneIcon"}})],1),t._v(" "),r("b-form-input",{attrs:{type:"number",state:!(s.length>0)&&null,placeholder:"Phone"},model:{value:t.customer.form.phone,callback:function(e){t.$set(t.customer.form,"phone",e)},expression:"customer.form.phone"}})],1),t._v(" "),r("small",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1)],1),t._v(" "),r("b-col",{attrs:{lg:"6",md:"6",sm:"12",xs:"12"}},[r("b-form-group",{attrs:{label:"Birth Date","label-for":"date_of_birth"}},[r("validation-provider",{attrs:{name:"Birth Date",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[r("b-input-group",{class:0===s.length?"":"is-invalid"},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("feather-icon",{attrs:{icon:"CalendarIcon"}})],1),t._v(" "),r("b-form-input",{attrs:{type:"date",state:!(s.length>0)&&null,placeholder:"Birth Date"},model:{value:t.customer.form.date_of_birth,callback:function(e){t.$set(t.customer.form,"date_of_birth",e)},expression:"customer.form.date_of_birth"}})],1),t._v(" "),r("small",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1)],1),t._v(" "),r("b-col",{attrs:{lg:"6",md:"6",sm:"12",xs:"12"}},[r("b-form-group",{attrs:{label:"National ID","label-for":"national_id"}},[r("validation-provider",{attrs:{name:"National Id",rules:"required|length:16"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[r("b-input-group",{class:0===s.length?"":"is-invalid"},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("feather-icon",{attrs:{icon:"CreditCardIcon"}})],1),t._v(" "),r("b-form-input",{attrs:{state:!(s.length>0)&&null,placeholder:"National ID"},model:{value:t.customer.form.national_id,callback:function(e){t.$set(t.customer.form,"national_id",e)},expression:"customer.form.national_id"}})],1),t._v(" "),r("small",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1)],1),t._v(" "),r("b-col",{attrs:{lg:"6",md:"6",sm:"12",xs:"12"}},[r("b-form-group",{attrs:{label:"Address","label-for":"address"}},[r("validation-provider",{attrs:{name:"Address",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[r("b-input-group",{class:0===s.length?"":"is-invalid"},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("feather-icon",{attrs:{icon:"HomeIcon"}})],1),t._v(" "),r("b-form-input",{attrs:{state:!(s.length>0)&&null,placeholder:"Address"},model:{value:t.customer.form.address,callback:function(e){t.$set(t.customer.form,"address",e)},expression:"customer.form.address"}})],1),t._v(" "),r("small",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1)],1),t._v(" "),r("b-col",{attrs:{cols:"12"}},[r("b-container",[r("b-row",{staticClass:"mt-1",attrs:{"align-h":"center"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{type:"submit",disabled:t.customer.isLoading,variant:"primary"}},[t.customer.isLoading?[r("b-spinner",{attrs:{small:""}}),t._v("\n                            Loading...\n                          ")]:[r("feather-icon",{staticClass:"mr-50",attrs:{icon:"SaveIcon"}}),t._v(" "),r("span",{staticClass:"align-middle"},[t._v("Submit")])]],2),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{type:"reset",variant:"warning"},on:{click:t.reset}},[r("feather-icon",{staticClass:"mr-50",attrs:{icon:"RefreshCcwIcon"}}),t._v(" "),r("span",{staticClass:"align-middle"},[t._v("Reset")])],1)],1)],1)],1)],1)],1)]}}])})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=n.exports},o1KL:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,".toastification-close-icon[data-v-13ed5408],.toastification-title[data-v-13ed5408]{line-height:26px}.toastification-title[data-v-13ed5408]{color:inherit}",""])},t8N3:function(t,e,r){var s=r("LaLd");"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(s,o);s.locals&&(t.exports=s.locals)}}]);