(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"0cHv":function(t,e,i){"use strict";i("lz2E")},"1w2d":function(t,e,i){"use strict";var o={components:{BAvatar:i("G/QR").a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},s=(i("MOdh"),i("KHd+")),a=Object(s.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"toastification"},[i("div",{staticClass:"d-flex align-items-start"},[i("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[i("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),i("div",{staticClass:"d-flex flex-grow-1"},[i("div",[t.title?i("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?i("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),i("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():i("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"13ed5408",null);e.a=a.exports},"4cv3":function(t,e,i){"use strict";var o={bind:function(t,e){var i={event:"mousedown",transition:600};!function(t,e){t.forEach((function(t){isNaN(Number(t))?e.event=t:e.transition=t}))}(Object.keys(e.modifiers),i),t.addEventListener(i.event,(function(o){!function(t,e){var o=e,r=parseInt(getComputedStyle(o).borderWidth.replace("px","")),n=o.getBoundingClientRect(),l=n.left,c=n.top,p=o.offsetWidth,d=o.offsetHeight,u=t.clientX-l,m=t.clientY-c,f=Math.max(u,p-u),v=Math.max(m,d-m),b=window.getComputedStyle(o),g=Math.sqrt(f*f+v*v),h=r>0?r:0,y=document.createElement("div"),_=document.createElement("div");_.className="ripple-container",y.className="ripple",y.style.marginTop="0px",y.style.marginLeft="0px",y.style.width="1px",y.style.height="1px",y.style.transition="all "+i.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",y.style.borderRadius="50%",y.style.pointerEvents="none",y.style.position="relative",y.style.zIndex=a,y.style.backgroundColor=s,_.style.position="absolute",_.style.left=0-h+"px",_.style.top=0-h+"px",_.style.height="0",_.style.width="0",_.style.pointerEvents="none",_.style.overflow="hidden";var k=o.style.position.length>0?o.style.position:getComputedStyle(o).position;"relative"!==k&&(o.style.position="relative");function x(){setTimeout((function(){y.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){_.parentNode.removeChild(_)}),850),e.removeEventListener("mouseup",x,!1),setTimeout((function(){for(var t=!0,e=0;e<o.childNodes.length;e++)"ripple-container"===o.childNodes[e].className&&(t=!1);t&&(o.style.position="static"!==k?k:"")}),i.transition+250)}_.appendChild(y),o.appendChild(_),y.style.marginLeft=u+"px",y.style.marginTop=m+"px",_.style.width=p+"px",_.style.height=d+"px",_.style.borderTopLeftRadius=b.borderTopLeftRadius,_.style.borderTopRightRadius=b.borderTopRightRadius,_.style.borderBottomLeftRadius=b.borderBottomLeftRadius,_.style.borderBottomRightRadius=b.borderBottomRightRadius,_.style.direction="ltr",setTimeout((function(){y.style.width=2*g+"px",y.style.height=2*g+"px",y.style.marginLeft=u-g+"px",y.style.marginTop=m-g+"px"}),0),"mousedown"===t.type?e.addEventListener("mouseup",x,!1):x()}(o,t,e.value)}));var s=e.value||o.color||"rgba(0, 0, 0, 0.35)",a=o.zIndex||"9999"}};e.a=o},"5je1":function(t,e,i){"use strict";i.r(e);var o=i("4cv3"),s=i("1w2d"),a={name:"EditStock",directives:{Ripple:o.a},data:function(){return{stock:{isCardLoading:!1,isLoading:!1,stock_types:[],form:{name:"",quantity:0,price_per_piece:0,sale_price:0,payment_type:"",total:0,paid:0}}}},mounted:function(){this.viewStock()},methods:{viewStock:function(){var t=this;this.stock.isCardLoading=!0,this.$store.dispatch("stock/view",this.$route.params.id).then((function(e){t.stock.form=e.data.data,t.stock.isCardLoading=!1})).catch((function(e){console.error(e),t.stock.isCardLoading=!1}))},editStock:function(){var t=this;this.stock.isLoading=!0,this.$store.dispatch("stock/update",{id:this.$route.params.id,data:this.stock.form}).then((function(e){t.stock.isLoading=!1,t.$toast({component:s.a,props:{title:"Success",icon:"CheckCircleIcon",text:e.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3}),t.$router.push("/stocks/".concat(t.$route.params.id))})).catch((function(e){t.$refs.editStockForm.setErrors(e.response.data.errors),t.stock.isLoading=!1}))},reset:function(){this.viewStock()}}},r=(i("0cHv"),i("KHd+")),n=Object(r.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"stock-form"}},[i("b-container",[i("b-row",[i("b-col",{attrs:{cols:"12"}},[i("b-overlay",{attrs:{show:t.stock.isCardLoading,rounded:"sm"}},[i("b-card-actions",{ref:"editStock",attrs:{title:"Edit Stock","action-collapse":""}},[i("validation-observer",{ref:"editStockForm",scopedSlots:t._u([{key:"default",fn:function(e){var o=e.handleSubmit;return[i("b-form",{on:{submit:function(e){return e.preventDefault(),o(t.editStock)}}},[i("b-row",[i("b-col",{attrs:{lg:"6",md:"6",sm:"12",xs:"12"}},[i("b-form-group",{attrs:{label:"Name","label-for":"name"}},[i("validation-provider",{attrs:{rules:"required",name:"Name",vid:"name"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[i("b-input-group",{class:0===o.length?"":"is-invalid"},[i("b-input-group-prepend",{attrs:{"is-text":""}},[i("feather-icon",{attrs:{icon:"BoxIcon"}})],1),t._v(" "),i("b-form-input",{attrs:{id:"name",state:!(o.length>0)&&null,placeholder:"Name"},model:{value:t.stock.form.name,callback:function(e){t.$set(t.stock.form,"name",e)},expression:"stock.form.name"}})],1),t._v(" "),i("small",{staticClass:"text-danger"},[t._v(t._s(o[0]))])]}}],null,!0)})],1)],1),t._v(" "),i("b-col",{attrs:{lg:"6",md:"6",sm:"12",xs:"12"}},[i("b-form-group",{attrs:{label:"Quantity","label-for":"quantity"}},[i("validation-provider",{attrs:{rules:"required",name:"Quantity",vid:"quantity"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[i("b-input-group",{class:0===o.length?"":"is-invalid"},[i("b-input-group-prepend",{attrs:{"is-text":""}},[i("feather-icon",{attrs:{icon:"LayersIcon"}})],1),t._v(" "),i("b-form-input",{attrs:{id:"quantity",type:"number",state:!(o.length>0)&&null,placeholder:"Quantity"},model:{value:t.stock.form.quantity,callback:function(e){t.$set(t.stock.form,"quantity",t._n(e))},expression:"stock.form.quantity"}})],1),t._v(" "),i("small",{staticClass:"text-danger"},[t._v(t._s(o[0]))])]}}],null,!0)})],1)],1),t._v(" "),i("b-col",{attrs:{lg:"6",md:"6",sm:"12",xs:"12"}},[i("b-form-group",{attrs:{label:"Price Per Piece","label-for":"price_per_piece"}},[i("validation-provider",{attrs:{rules:"required",name:"Price per piece",vid:"price_per_piece"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[i("b-input-group",{class:0===o.length?"":"is-invalid"},[i("b-input-group-prepend",{attrs:{"is-text":""}},[i("feather-icon",{attrs:{icon:"DollarSignIcon"}})],1),t._v(" "),i("b-form-input",{attrs:{id:"price_per_piece",type:"number",state:!(o.length>0)&&null,placeholder:"Price per piece"},model:{value:t.stock.form.price_per_piece,callback:function(e){t.$set(t.stock.form,"price_per_piece",t._n(e))},expression:"stock.form.price_per_piece"}})],1),t._v(" "),i("small",{staticClass:"text-danger"},[t._v(t._s(o[0]))])]}}],null,!0)})],1)],1),t._v(" "),i("b-col",{attrs:{lg:"6",md:"6",sm:"12",xs:"12"}},[i("b-form-group",{attrs:{label:"Sale Price","label-for":"sale_price"}},[i("validation-provider",{attrs:{rules:"required",name:"Sale price",vid:"sale_price"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[i("b-input-group",{class:0===o.length?"":"is-invalid"},[i("b-input-group-prepend",{attrs:{"is-text":""}},[i("feather-icon",{attrs:{icon:"DollarSignIcon"}})],1),t._v(" "),i("b-form-input",{attrs:{id:"sale_price",type:"number",state:!(o.length>0)&&null,placeholder:"Sale price"},model:{value:t.stock.form.sale_price,callback:function(e){t.$set(t.stock.form,"sale_price",t._n(e))},expression:"stock.form.sale_price"}})],1),t._v(" "),i("small",{staticClass:"text-danger"},[t._v(t._s(o[0]))])]}}],null,!0)})],1)],1),t._v(" "),i("b-col",{attrs:{lg:"6",md:"6",sm:"12",xs:"12"}},[i("b-form-group",{attrs:{label:"Payment Type","label-for":"payment_type"}},[i("validation-provider",{attrs:{rules:"required",name:"Payment type",vid:"payment_type"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[i("b-input-group",{class:0===o.length?"":"is-invalid"},[i("b-input-group-prepend",{attrs:{"is-text":""}},[i("feather-icon",{attrs:{icon:"CreditCardIcon"}})],1),t._v(" "),i("b-form-input",{attrs:{id:"payment_type",state:!(o.length>0)&&null,placeholder:"Payment type"},model:{value:t.stock.form.payment_type,callback:function(e){t.$set(t.stock.form,"payment_type",e)},expression:"stock.form.payment_type"}})],1),t._v(" "),i("small",{staticClass:"text-danger"},[t._v(t._s(o[0]))])]}}],null,!0)})],1)],1),t._v(" "),i("b-col",{attrs:{lg:"6",md:"6",sm:"12",xs:"12"}},[i("b-form-group",{attrs:{label:"Total","label-for":"total"}},[i("validation-provider",{attrs:{rules:"required",name:"Total",vid:"total"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[i("b-input-group",{class:0===o.length?"":"is-invalid"},[i("b-input-group-prepend",{attrs:{"is-text":""}},[i("feather-icon",{attrs:{icon:"DollarSignIcon"}})],1),t._v(" "),i("b-form-input",{attrs:{id:"total",type:"number",state:!(o.length>0)&&null,placeholder:"Total"},model:{value:t.stock.form.total,callback:function(e){t.$set(t.stock.form,"total",t._n(e))},expression:"stock.form.total"}})],1),t._v(" "),i("small",{staticClass:"text-danger"},[t._v(t._s(o[0]))])]}}],null,!0)})],1)],1),t._v(" "),i("b-col",{attrs:{lg:"6",md:"6",sm:"12",xs:"12"}},[i("b-form-group",{attrs:{label:"Paid","label-for":"paid"}},[i("validation-provider",{attrs:{rules:"required",name:"Paid",vid:"paid"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[i("b-input-group",{class:0===o.length?"":"is-invalid"},[i("b-input-group-prepend",{attrs:{"is-text":""}},[i("feather-icon",{attrs:{icon:"DollarSignIcon"}})],1),t._v(" "),i("b-form-input",{attrs:{id:"paid",type:"number",state:!(o.length>0)&&null,placeholder:"Paid"},model:{value:t.stock.form.paid,callback:function(e){t.$set(t.stock.form,"paid",t._n(e))},expression:"stock.form.paid"}})],1),t._v(" "),i("small",{staticClass:"text-danger"},[t._v(t._s(o[0]))])]}}],null,!0)})],1)],1),t._v(" "),i("b-col",{attrs:{cols:"12"}},[i("b-container",[i("b-row",{staticClass:"mt-1",attrs:{"align-h":"center"}},[i("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{type:"submit",disabled:t.stock.isLoading,variant:"primary"}},[t.stock.isLoading?[i("b-spinner",{attrs:{small:""}}),t._v("\n                            Loading...\n                          ")]:[i("feather-icon",{staticClass:"mr-50",attrs:{icon:"SaveIcon"}}),t._v(" "),i("span",{staticClass:"align-middle"},[t._v("Submit")])]],2),t._v(" "),i("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"warning"},on:{click:t.reset}},[i("feather-icon",{staticClass:"mr-50",attrs:{icon:"RefreshCcwIcon"}}),t._v(" "),i("span",{staticClass:"align-middle"},[t._v("Reset")])],1)],1)],1)],1)],1)],1)]}}])})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=n.exports},DEUr:function(t,e,i){var o=i("o1KL");"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(o,s);o.locals&&(t.exports=o.locals)},MOdh:function(t,e,i){"use strict";i("DEUr")},"gP+F":function(t,e,i){(t.exports=i("I1BE")(!1)).push([t.i,"#stock-form li,#stock-form ul{list-style-type:none;text-decoration:none}",""])},lz2E:function(t,e,i){var o=i("gP+F");"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(o,s);o.locals&&(t.exports=o.locals)},o1KL:function(t,e,i){(t.exports=i("I1BE")(!1)).push([t.i,".toastification-close-icon[data-v-13ed5408],.toastification-title[data-v-13ed5408]{line-height:26px}.toastification-title[data-v-13ed5408]{color:inherit}",""])}}]);