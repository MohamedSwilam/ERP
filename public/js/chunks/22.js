(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"1w2d":function(t,e,s){"use strict";var a={components:{BAvatar:s("G/QR").a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},i=(s("MOdh"),s("KHd+")),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"toastification"},[s("div",{staticClass:"d-flex align-items-start"},[s("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[s("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),s("div",{staticClass:"d-flex flex-grow-1"},[s("div",[t.title?s("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?s("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),s("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():s("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"13ed5408",null);e.a=o.exports},"4cv3":function(t,e,s){"use strict";var a={bind:function(t,e){var s={event:"mousedown",transition:600};!function(t,e){t.forEach((function(t){isNaN(Number(t))?e.event=t:e.transition=t}))}(Object.keys(e.modifiers),s),t.addEventListener(s.event,(function(a){!function(t,e){var a=e,r=parseInt(getComputedStyle(a).borderWidth.replace("px","")),n=a.getBoundingClientRect(),l=n.left,d=n.top,c=a.offsetWidth,u=a.offsetHeight,m=t.clientX-l,p=t.clientY-d,v=Math.max(m,c-m),f=Math.max(p,u-p),b=window.getComputedStyle(a),g=Math.sqrt(v*v+f*f),h=r>0?r:0,_=document.createElement("div"),y=document.createElement("div");y.className="ripple-container",_.className="ripple",_.style.marginTop="0px",_.style.marginLeft="0px",_.style.width="1px",_.style.height="1px",_.style.transition="all "+s.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",_.style.borderRadius="50%",_.style.pointerEvents="none",_.style.position="relative",_.style.zIndex=o,_.style.backgroundColor=i,y.style.position="absolute",y.style.left=0-h+"px",y.style.top=0-h+"px",y.style.height="0",y.style.width="0",y.style.pointerEvents="none",y.style.overflow="hidden";var C=a.style.position.length>0?a.style.position:getComputedStyle(a).position;"relative"!==C&&(a.style.position="relative");function x(){setTimeout((function(){_.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){y.parentNode.removeChild(y)}),850),e.removeEventListener("mouseup",x,!1),setTimeout((function(){for(var t=!0,e=0;e<a.childNodes.length;e++)"ripple-container"===a.childNodes[e].className&&(t=!1);t&&(a.style.position="static"!==C?C:"")}),s.transition+250)}y.appendChild(_),a.appendChild(y),_.style.marginLeft=m+"px",_.style.marginTop=p+"px",y.style.width=c+"px",y.style.height=u+"px",y.style.borderTopLeftRadius=b.borderTopLeftRadius,y.style.borderTopRightRadius=b.borderTopRightRadius,y.style.borderBottomLeftRadius=b.borderBottomLeftRadius,y.style.borderBottomRightRadius=b.borderBottomRightRadius,y.style.direction="ltr",setTimeout((function(){_.style.width=2*g+"px",_.style.height=2*g+"px",_.style.marginLeft=m-g+"px",_.style.marginTop=p-g+"px"}),0),"mousedown"===t.type?e.addEventListener("mouseup",x,!1):x()}(a,t,e.value)}));var i=e.value||a.color||"rgba(0, 0, 0, 0.35)",o=a.zIndex||"9999"}};e.a=a},DEUr:function(t,e,s){var a=s("o1KL");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,i);a.locals&&(t.exports=a.locals)},MOdh:function(t,e,s){"use strict";s("DEUr")},Nh18:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"[dir] .mb-5-px{margin-bottom:5px}",""])},gPpC:function(t,e,s){var a=s("Nh18");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,i);a.locals&&(t.exports=a.locals)},gUXq:function(t,e,s){"use strict";s("gPpC")},o1KL:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".toastification-close-icon[data-v-13ed5408],.toastification-title[data-v-13ed5408]{line-height:26px}.toastification-title[data-v-13ed5408]{color:inherit}",""])},u6uQ:function(t,e,s){"use strict";s.r(e);var a=s("4cv3"),i=s("1w2d"),o={name:"ViewOrder",directives:{Ripple:a.a},data:function(){return{orders:{isLoading:!1,isLoadingDelete:!1,data:{id:null,customer_id:[],customer:{id:null,name:""},stocks:[],discount:0,created_at:(new Date).getTime(),updated_at:(new Date).getTime(),isDeleted:!1}}}},computed:{totalPrice:function(){var t=0;return this.orders.data.stocks.forEach((function(e){t+=e.sale_price*e.pivot.quantity})),t-t*this.orders.data.discount/100}},mounted:function(){this.viewBuffetOrder()},methods:{viewBuffetOrder:function(){var t=this;this.orders.isLoading=!0,this.$store.dispatch("buffetOrder/view",this.$route.params.id).then((function(e){t.orders.data=e.data.data,t.orders.isLoading=!1})).catch((function(e){console.error(e),t.orders.isLoading=!1}))},deleteOrder:function(t){var e=this;this.$bvModal.msgBoxConfirm("You will not be able to retrieve this again!",{title:"Are you sure?",size:"sm",okTitle:"Yes, Delete",okVariant:"danger",cancelTitle:"Cancel",cancelVariant:"outline-primary",centered:!0}).then((function(s){s&&(e.orders.isLoadingDelete=!0,e.$store.dispatch("buffetOrder/delete",t).then((function(t){e.orders.isLoadingDelete=!1,e.$toast({component:i.a,props:{title:"Success",icon:"CheckCircleIcon",text:t.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3}),e.$router.push("/buffet-orders")})).catch((function(t){console.error(t),e.orders.isLoadingDelete=!1})))}))}}},r=(s("gUXq"),s("KHd+")),n=Object(r.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-overlay",{attrs:{show:t.orders.isLoading,rounded:"sm"}},[s("b-card-actions",{ref:"ordersCard",attrs:{title:"Buffet Order Details","action-collapse":""}},[s("b-row",[s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("ID")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.orders.data.id)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Customer")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[s("router-link",{attrs:{to:"/customers/"+t.orders.data.customer.id}},[t._v("\n                #TKB"+t._s(t.orders.data.customer.id)+" - "+t._s(t.orders.data.customer.name)+"\n              ")])],1),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Items")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},t._l(t.orders.data.stocks,(function(e,a){return s("router-link",{key:a,staticClass:"mr-1 mb-1",attrs:{to:"/stocks/"+e.id}},[s("b-badge",{staticClass:"mb-5-px",attrs:{variant:"primary"}},[t._v("\n                  "+t._s(e.pivot.quantity)+" "+t._s(t._f("capitalize")(e.name))+"\n                ")])],1)})),1),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Discount")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.orders.data.discount)+"%\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Created At")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t._f("date")(t.orders.data.created_at,!0))+" - "+t._s(t._f("time")(t.orders.data.created_at))+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Updated At")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t._f("date")(t.orders.data.updated_at,!0))+" - "+t._s(t._f("time")(t.orders.data.updated_at))+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Total")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.totalPrice)+" EGP\n            ")])],1),t._v(" "),s("hr"),t._v(" "),s("b-container",[s("b-row",{staticClass:"mt-1",attrs:{"align-h":"center"}},[s("b-col",{staticStyle:{"text-align":"center"},attrs:{cols:"12"}},[t.can("update_buffet_order")?s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"warning",to:"/buffet-orders/"+t.orders.data.id+"/edit"}},[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"EditIcon"}}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("Edit Order")])],1):t._e(),t._v(" "),t.can("delete_buffet_order")?s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"ml-1",attrs:{disabled:t.orders.isLoadingDelete,variant:"danger"},on:{click:function(e){return t.deleteOrder(t.orders.data.id)}}},[t.orders.isLoadingDelete?[s("b-spinner",{attrs:{small:""}}),t._v("\n                    Loading...\n                  ")]:[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"TrashIcon"}}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("Delete Order")])]],2):t._e()],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);