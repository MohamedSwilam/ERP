(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"1w2d":function(t,s,e){"use strict";var a={components:{BAvatar:e("G/QR").a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},i=(e("MOdh"),e("KHd+")),o=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(s){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"13ed5408",null);s.a=o.exports},"4cv3":function(t,s,e){"use strict";var a={bind:function(t,s){var e={event:"mousedown",transition:600};!function(t,s){t.forEach((function(t){isNaN(Number(t))?s.event=t:s.transition=t}))}(Object.keys(s.modifiers),e),t.addEventListener(e.event,(function(a){!function(t,s){var a=s,n=parseInt(getComputedStyle(a).borderWidth.replace("px","")),l=a.getBoundingClientRect(),c=l.left,r=l.top,d=a.offsetWidth,m=a.offsetHeight,p=t.clientX-c,v=t.clientY-r,u=Math.max(p,d-p),b=Math.max(v,m-v),_=window.getComputedStyle(a),g=Math.sqrt(u*u+b*b),f=n>0?n:0,h=document.createElement("div"),y=document.createElement("div");y.className="ripple-container",h.className="ripple",h.style.marginTop="0px",h.style.marginLeft="0px",h.style.width="1px",h.style.height="1px",h.style.transition="all "+e.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",h.style.borderRadius="50%",h.style.pointerEvents="none",h.style.position="relative",h.style.zIndex=o,h.style.backgroundColor=i,y.style.position="absolute",y.style.left=0-f+"px",y.style.top=0-f+"px",y.style.height="0",y.style.width="0",y.style.pointerEvents="none",y.style.overflow="hidden";var C=a.style.position.length>0?a.style.position:getComputedStyle(a).position;"relative"!==C&&(a.style.position="relative");function k(){setTimeout((function(){h.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){y.parentNode.removeChild(y)}),850),s.removeEventListener("mouseup",k,!1),setTimeout((function(){for(var t=!0,s=0;s<a.childNodes.length;s++)"ripple-container"===a.childNodes[s].className&&(t=!1);t&&(a.style.position="static"!==C?C:"")}),e.transition+250)}y.appendChild(h),a.appendChild(y),h.style.marginLeft=p+"px",h.style.marginTop=v+"px",y.style.width=d+"px",y.style.height=m+"px",y.style.borderTopLeftRadius=_.borderTopLeftRadius,y.style.borderTopRightRadius=_.borderTopRightRadius,y.style.borderBottomLeftRadius=_.borderBottomLeftRadius,y.style.borderBottomRightRadius=_.borderBottomRightRadius,y.style.direction="ltr",setTimeout((function(){h.style.width=2*g+"px",h.style.height=2*g+"px",h.style.marginLeft=p-g+"px",h.style.marginTop=v-g+"px"}),0),"mousedown"===t.type?s.addEventListener("mouseup",k,!1):k()}(a,t,s.value)}));var i=s.value||a.color||"rgba(0, 0, 0, 0.35)",o=a.zIndex||"9999"}};s.a=a},DEUr:function(t,s,e){var a=e("o1KL");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,i);a.locals&&(t.exports=a.locals)},HJZT:function(t,s,e){"use strict";e.r(s);var a=e("4cv3"),i=e("1w2d"),o={name:"ViewStock",directives:{Ripple:a.a},data:function(){return{stocks:{isLoading:!1,isLoadingDelete:!1,data:null}}},mounted:function(){this.viewStock()},methods:{viewStock:function(){var t=this;this.stocks.isLoading=!0,this.$store.dispatch("stock/view",this.$route.params.id).then((function(s){t.stocks.data=s.data.data,t.stocks.isLoading=!1})).catch((function(s){console.error(s),t.stocks.isLoading=!1}))},deleteStock:function(t){var s=this;this.$bvModal.msgBoxConfirm("You will not be able to retrieve this again!",{title:"Are you sure?",size:"sm",okTitle:"Yes, Delete",okVariant:"danger",cancelTitle:"Cancel",cancelVariant:"outline-primary",centered:!0}).then((function(e){e&&(s.stocks.isLoadingDelete=!0,s.$store.dispatch("stock/delete",t).then((function(t){s.stocks.isLoadingDelete=!1,s.$toast({component:i.a,props:{title:"Success",icon:"CheckCircleIcon",text:t.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3}),s.$router.push("/stocks")})).catch((function(t){console.error(t),s.stocks.isLoadingDelete=!1})))}))}}},n=e("KHd+"),l=Object(n.a)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("b-overlay",{attrs:{show:t.stocks.isLoading,rounded:"sm"}},[e("b-card-actions",{ref:"stocksCard",attrs:{title:"Stock Details","action-collapse":""}},[t.stocks.data?e("b-row",[e("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[e("b",[t._v("ID")])]),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.stocks.data.id)+"\n            ")]),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[e("b",[t._v("Name")])]),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.stocks.data.name)+"\n            ")]),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[e("b",[t._v("Quantity")])]),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.stocks.data.quantity)+"\n            ")]),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[e("b",[t._v("Price Per Piece")])]),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.stocks.data.price_per_piece)+"\n            ")]),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[e("b",[t._v("Sale Price")])]),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.stocks.data.sale_price)+"\n            ")]),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[e("b",[t._v("Payment Type")])]),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.stocks.data.payment_type)+"\n            ")]),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[e("b",[t._v("Total")])]),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.stocks.data.total)+"\n            ")]),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[e("b",[t._v("Paid")])]),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.stocks.data.paid)+"\n            ")]),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[e("b",[t._v("Created At")])]),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t._f("date")(t.stocks.data.created_at,!0))+" - "+t._s(t._f("time")(t.stocks.data.created_at))+"\n            ")]),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[e("b",[t._v("Updated At")])]),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t._f("date")(t.stocks.data.updated_at,!0))+" - "+t._s(t._f("time")(t.stocks.data.updated_at))+"\n            ")])],1):t._e(),t._v(" "),e("hr"),t._v(" "),e("b-container",[e("b-row",{staticClass:"mt-1",attrs:{"align-h":"center"}},[e("b-col",{staticStyle:{"text-align":"center"},attrs:{cols:"12"}},[t.can("update_stock")?e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"warning",to:"/stocks/"+t.$route.params.id+"/edit"}},[e("feather-icon",{staticClass:"mr-50",attrs:{icon:"EditIcon"}}),t._v(" "),e("span",{staticClass:"align-middle"},[t._v("Edit Stock")])],1):t._e(),t._v(" "),t.can("delete_stock")?e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"ml-1",attrs:{disabled:t.stocks.isLoadingDelete,variant:"danger"},on:{click:function(s){return t.deleteStock(t.stocks.data.id)}}},[t.stocks.isLoadingDelete?[e("b-spinner",{attrs:{small:""}}),t._v("\n                    Loading...\n                  ")]:[e("feather-icon",{staticClass:"mr-50",attrs:{icon:"TrashIcon"}}),t._v(" "),e("span",{staticClass:"align-middle"},[t._v("Delete Stock")])]],2):t._e()],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"1600c24b",null);s.default=l.exports},MOdh:function(t,s,e){"use strict";e("DEUr")},o1KL:function(t,s,e){(t.exports=e("I1BE")(!1)).push([t.i,".toastification-close-icon[data-v-13ed5408],.toastification-title[data-v-13ed5408]{line-height:26px}.toastification-title[data-v-13ed5408]{color:inherit}",""])}}]);