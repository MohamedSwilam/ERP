(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"4cv3":function(t,e,s){"use strict";var r={bind:function(t,e){var s={event:"mousedown",transition:600};!function(t,e){t.forEach((function(t){isNaN(Number(t))?e.event=t:e.transition=t}))}(Object.keys(e.modifiers),s),t.addEventListener(s.event,(function(r){!function(t,e){var r=e,i=parseInt(getComputedStyle(r).borderWidth.replace("px","")),n=r.getBoundingClientRect(),c=n.left,l=n.top,m=r.offsetWidth,d=r.offsetHeight,u=t.clientX-c,p=t.clientY-l,f=Math.max(u,m-u),b=Math.max(p,d-p),v=window.getComputedStyle(r),_=Math.sqrt(f*f+b*b),g=i>0?i:0,h=document.createElement("div"),C=document.createElement("div");C.className="ripple-container",h.className="ripple",h.style.marginTop="0px",h.style.marginLeft="0px",h.style.width="1px",h.style.height="1px",h.style.transition="all "+s.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",h.style.borderRadius="50%",h.style.pointerEvents="none",h.style.position="relative",h.style.zIndex=o,h.style.backgroundColor=a,C.style.position="absolute",C.style.left=0-g+"px",C.style.top=0-g+"px",C.style.height="0",C.style.width="0",C.style.pointerEvents="none",C.style.overflow="hidden";var y=r.style.position.length>0?r.style.position:getComputedStyle(r).position;"relative"!==y&&(r.style.position="relative");function x(){setTimeout((function(){h.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){C.parentNode.removeChild(C)}),850),e.removeEventListener("mouseup",x,!1),setTimeout((function(){for(var t=!0,e=0;e<r.childNodes.length;e++)"ripple-container"===r.childNodes[e].className&&(t=!1);t&&(r.style.position="static"!==y?y:"")}),s.transition+250)}C.appendChild(h),r.appendChild(C),h.style.marginLeft=u+"px",h.style.marginTop=p+"px",C.style.width=m+"px",C.style.height=d+"px",C.style.borderTopLeftRadius=v.borderTopLeftRadius,C.style.borderTopRightRadius=v.borderTopRightRadius,C.style.borderBottomLeftRadius=v.borderBottomLeftRadius,C.style.borderBottomRightRadius=v.borderBottomRightRadius,C.style.direction="ltr",setTimeout((function(){h.style.width=2*_+"px",h.style.height=2*_+"px",h.style.marginLeft=u-_+"px",h.style.marginTop=p-_+"px"}),0),"mousedown"===t.type?e.addEventListener("mouseup",x,!1):x()}(r,t,e.value)}));var a=e.value||r.color||"rgba(0, 0, 0, 0.35)",o=r.zIndex||"9999"}};e.a=r},Otdp:function(t,e,s){"use strict";s("jgHG")},dz3f:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"[dir] .mb-5-px{margin-bottom:5px}",""])},jgHG:function(t,e,s){var r=s("dz3f");"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(r,a);r.locals&&(t.exports=r.locals)},pJLn:function(t,e,s){"use strict";s.r(e);var r=s("4cv3"),a=s("1w2d"),o=s("ZHCp"),i=s("S1G4"),n={name:"ViewCustomer",directives:{Ripple:r.a},components:{AppTimeline:o.a,AppTimelineItem:i.a},data:function(){return{customer:{isLoading:!1,isLoadingDelete:!1,data:{id:null,name:"",email:"",phone:"",address:"",customer_type_id:null,customer_type:{type:""},date_of_birth:"",createdAt:"",updatedAt:"",isDeleted:!1}},orders:{isLoading:!1,search:"",paginateOptions:[5,10,25,50,100,250],recordsPerPage:50,fields:[{key:"index",label:"#"},{key:"id",label:"ID"},{key:"total_hours",label:"Total Hours"},{key:"remaining_hours",label:"Remaining Hours"},{key:"customers",label:"Customer(s)"},{key:"expires_at",label:"Expiration Date"},{key:"created_by",label:"Created By"},"Action"],data:[],meta:{count:0,current_page:1,links:{},per_page:0,total:0,total_pages:0}},buffetOrders:{isLoading:!1,search:"",paginateOptions:[5,10,25,50,100,250],recordsPerPage:50,fields:[{key:"index",label:"#"},{key:"customer",label:"Customer"},{key:"stocks",label:"Items"},{key:"discount",label:"Discount"},{key:"total",label:"Total"},{key:"created_at",label:"Created At"},"Action"],data:[],meta:{count:0,current_page:1,links:{},per_page:0,total:0,total_pages:0}},comments:{isLoading:!1,isCreateLoading:!1,data:[],form:{comment:""},editForm:{id:null,index:null,isLoading:!1,data:{comment:""}}}}},mounted:function(){this.viewCustomer(),this.can("browse_customer_comment")&&this.browseComments(),this.can("browse_order")&&this.browseOrders(this.orders.meta.current_page),this.can("browse_buffet_order")&&this.browseBuffetOrders(this.orders.meta.current_page)},methods:{viewCustomer:function(){var t=this;this.customer.isLoading=!0,this.$store.dispatch("customer/view",this.$route.params.id).then((function(e){t.customer.data=e.data.data,t.customer.isLoading=!1})).catch((function(e){console.error(e),t.customer.isLoading=!1}))},deleteCustomer:function(t){var e=this;this.$bvModal.msgBoxConfirm("You will not be able to retrieve this again!",{title:"Are you sure?",size:"sm",okTitle:"Yes, Delete",okVariant:"danger",cancelTitle:"Cancel",cancelVariant:"outline-primary",centered:!0}).then((function(s){s&&(e.customer.isLoadingDelete=!0,e.$store.dispatch("customer/delete",t).then((function(t){e.customer.isLoadingDelete=!1,e.$toast({component:a.a,props:{title:"Success",icon:"CheckCircleIcon",text:t.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3}),e.$router.push("/customers")})).catch((function(t){console.error(t),e.customer.isLoadingDelete=!1})))}))},browseComments:function(){var t=this;this.comments.isLoading=!0,this.$store.dispatch("customer/browseComments",{id:this.$route.params.id,filters:"?sort=-created_at"}).then((function(e){t.comments.data=e.data.data,t.comments.isLoading=!1})).catch((function(e){console.error(e),t.comments.isLoading=!1}))},createComment:function(){var t=this;this.comments.isCreateLoading=!0,this.$store.dispatch("customer/createComment",{id:this.$route.params.id,data:this.comments.form}).then((function(e){t.comments.isCreateLoading=!1,t.$toast({component:a.a,props:{title:"Success",icon:"CheckCircleIcon",text:e.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3}),t.comments.data.unshift(e.data.data),t.comments.form.comment="."})).catch((function(e){t.$refs.createCommentForm.setErrors(e.response.data.errors),t.comments.isCreateLoading=!1}))},deleteComment:function(t){var e=this;this.$bvModal.msgBoxConfirm("You will not be able to retrieve this again!",{title:"Are you sure?",size:"sm",okTitle:"Yes, Delete",okVariant:"danger",cancelTitle:"Cancel",cancelVariant:"outline-primary",centered:!0}).then((function(s){s&&(e.customer.isLoadingDelete=!0,e.$store.dispatch("comment/delete",t).then((function(s){e.customer.isLoadingDelete=!1,e.$toast({component:a.a,props:{title:"Success",icon:"CheckCircleIcon",text:s.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3}),e.comments.data=e.comments.data.filter((function(e){return e.id!==t}))})).catch((function(t){console.error(t),e.customer.isLoadingDelete=!1})))}))},viewCommentEditForm:function(t,e){this.comments.editForm.data.comment=t.comment,this.comments.editForm.id=t.id,this.comments.editForm.index=e},hideCommentEditForm:function(){this.comments.editForm.id=null,this.comments.editForm.index=null,this.comments.editForm.data.comment=""},editComment:function(){var t=this;this.comments.editForm.isLoading=!0,this.$store.dispatch("comment/update",{id:this.comments.editForm.id,data:this.comments.editForm.data}).then((function(e){t.comments.editForm.isLoading=!1,t.$toast({component:a.a,props:{title:"Success",icon:"CheckCircleIcon",text:e.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3}),t.comments.data[t.comments.editForm.index]=e.data.data,t.hideCommentEditForm()})).catch((function(e){t.$refs.editCommentForm.setErrors(e.response.data.errors),t.comments.editForm.isLoading=!1}))},browseOrders:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.orders.isLoading=!0,this.$store.dispatch("orders/browse","?paginate=".concat(this.orders.recordsPerPage,"&page=").concat(e,"&filter[search]=").concat(this.orders.search,"&customer=").concat(this.$route.params.id)).then((function(e){t.orders.data=e.data.data,t.orders.meta=e.data.meta.pagination,t.orders.isLoading=!1})).catch((function(e){console.error(e),t.orders.isLoading=!1}))},deleteOrder:function(t){var e=this;this.$bvModal.msgBoxConfirm("You will not be able to retrieve this again!",{title:"Are you sure?",size:"sm",okTitle:"Yes, Delete!",okVariant:"danger",cancelTitle:"Cancel",cancelVariant:"outline-primary",centered:!0}).then((function(s){s&&e.$store.dispatch("orders/delete",t.item.id).then((function(s){e.orders.data=e.orders.data.filter((function(e){return e.id!==t.item.id})),e.$toast({component:a.a,props:{title:"Success",icon:"CheckCircleIcon",text:s.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3})})).catch((function(t){console.log(t)}))}))},browseBuffetOrders:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.buffetOrders.isLoading=!0,this.$store.dispatch("buffetOrder/browse","?paginate=".concat(this.buffetOrders.recordsPerPage,"&page=").concat(e,"&filter[search]=").concat(this.buffetOrders.search,"&customer=").concat(this.$route.params.id)).then((function(e){t.buffetOrders.data=e.data.data,t.buffetOrders.meta=e.data.meta.pagination,t.buffetOrders.isLoading=!1})).catch((function(e){console.error(e),t.buffetOrders.isLoading=!1}))},deleteBuffetOrder:function(t){var e=this;this.$bvModal.msgBoxConfirm("You will not be able to retrieve this again!",{title:"Are you sure?",size:"sm",okTitle:"Yes, Delete!",okVariant:"danger",cancelTitle:"Cancel",cancelVariant:"outline-primary",centered:!0}).then((function(s){s&&e.$store.dispatch("buffetOrder/delete",t.item.id).then((function(s){e.buffetOrders.data=e.buffetOrders.data.filter((function(e){return e.id!==t.item.id})),e.$toast({component:a.a,props:{title:"Success",icon:"CheckCircleIcon",text:s.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3})})).catch((function(t){console.log(t)}))}))},total:function(t){var e=t.stocks.reduce((function(t,e){return+t+ +e.sale_price*e.pivot.quantity}),0);return e-e*t.discount/100}}},c=(s("Otdp"),s("KHd+")),l=Object(c.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-overlay",{attrs:{show:t.customer.isLoading,rounded:"sm"}},[s("b-card-actions",{ref:"customerCard",attrs:{title:"Customer Details","action-collapse":""}},[s("b-row",[s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("ID")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              #TKB"+t._s(t.customer.data.id)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Type")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.customer.data.customer_type.type)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Name")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.customer.data.name)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Email")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.customer.data.email)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Phone")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.customer.data.phone)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("National ID")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.customer.data.national_id)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Address")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.customer.data.address)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Birth Date")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t._f("date")(t.customer.data.date_of_birth,!0))+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Last Follow Up")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t.customer.data.last_follow_up?s("span",[t._v(t._s(t._f("date")(t.customer.data.last_follow_up,!0))+" - "+t._s(t._f("time")(t.customer.data.last_follow_up)))]):s("span",[t._v("-")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Next Follow Up")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t.customer.data.next_follow_up?s("span",[t._v(t._s(t._f("date")(t.customer.data.next_follow_up,!0))+" - "+t._s(t._f("time")(t.customer.data.next_follow_up)))]):s("span",[t._v("-")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Created At")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t._f("date")(t.customer.data.created_at,!0))+" - "+t._s(t._f("time")(t.customer.data.created_at))+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Updated At")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t._f("date")(t.customer.data.updated_at,!0))+" - "+t._s(t._f("time")(t.customer.data.updated_at))+"\n            ")])],1),t._v(" "),s("hr"),t._v(" "),s("b-container",[s("b-row",{staticClass:"mt-1",attrs:{"align-h":"center"}},[s("b-col",{staticStyle:{"text-align":"center"},attrs:{cols:"12"}},[t.can("update_customer")?s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"warning",to:"/customers/"+t.customer.data.id+"/edit"}},[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"EditIcon"}}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("Edit Customer")])],1):t._e(),t._v(" "),t.can("delete_customer")?s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"ml-1",attrs:{disabled:t.customer.isLoadingDelete,variant:"danger"},on:{click:function(e){return t.deleteCustomer(t.customer.data.id)}}},[t.customer.isLoadingDelete?[s("b-spinner",{attrs:{small:""}}),t._v("\n                    Loading...\n                  ")]:[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"TrashIcon"}}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("Delete Customer")])]],2):t._e()],1)],1)],1)],1)],1)],1)],1),t._v(" "),t.can("browse_order")?s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-overlay",{attrs:{show:t.orders.isLoading,rounded:"sm"}},[s("b-card-actions",{ref:"orderCard",attrs:{title:"Orders List","action-collapse":""}},[s("b-row",[s("b-col",{attrs:{cols:"6","align-h":"center"}},[t.can("create_order")?s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255,255,255,0.15)",expression:"'rgba(255,255,255,0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary",to:"/orders/create"}},[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"PlusIcon"}}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("Create Order")])],1):t._e()],1),t._v(" "),s("b-col",{staticClass:"text-right mb-2",attrs:{cols:"6","align-h":"center"}},[s("b-input-group",{staticStyle:{position:"relative",top:"13px"}},[s("b-input-group-prepend",{attrs:{"is-text":""}},[s("feather-icon",{attrs:{icon:"SearchIcon"}})],1),t._v(" "),s("b-form-input",{attrs:{id:"search",size:"sm",placeholder:"Search"},on:{change:function(e){return t.browseOrders(1)}},model:{value:t.orders.search,callback:function(e){t.$set(t.orders,"search",e)},expression:"orders.search"}})],1)],1),t._v(" "),s("b-col",{attrs:{cols:"12"}},[s("b-table",{attrs:{responsive:"",outlined:!0,items:t.orders.data,fields:t.orders.fields,"head-variant":"dark"},scopedSlots:t._u([{key:"cell(index)",fn:function(e){return[t._v("\n                  "+t._s(t.orders.meta.current_page*t.orders.recordsPerPage-t.orders.recordsPerPage+e.index+1)+"\n                ")]}},{key:"cell(id)",fn:function(e){return[t._v("\n                  #TKB"+t._s(e.item.id)+"\n                ")]}},{key:"cell(customers)",fn:function(e){return t._l(e.item.customers,(function(e,r){return s("router-link",{key:r,attrs:{to:"/customers/"+e.id}},[s("b-badge",{staticClass:"mb-5-px",attrs:{variant:e.id===parseInt(t.$route.params.id)?"success":"primary"}},[t._v("\n                      #TKB"+t._s(e.id)+" - "+t._s(t._f("capitalize")(e.name))+"\n                    ")])],1)}))}},{key:"cell(expires_at)",fn:function(e){return[t._v("\n                  "+t._s(t._f("date")(e.item.expires_at,!0))+" - "+t._s(t._f("time")(e.item.expires_at))+"\n                ")]}},{key:"cell(customer)",fn:function(e){return[s("router-link",{attrs:{to:"/customers/"+e.item.customer.id}},[t._v("\n                    "+t._s(e.item.customer.name)+"\n                  ")])]}},{key:"cell(created_by)",fn:function(e){return[s("router-link",{attrs:{to:"/users/"+e.item.created_by.id}},[t._v("\n                    "+t._s(e.item.created_by.name)+"\n                  ")])]}},{key:"cell(action)",fn:function(e){return[s("span",{staticClass:"text-nowrap"},[t.can("view_order")?s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon rounded-circle",attrs:{title:"View Order",variant:"primary",to:"/orders/"+e.item.id}},[s("feather-icon",{attrs:{icon:"EyeIcon"}})],1):t._e(),t._v(" "),t.can("delete_order")?s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-danger",modifiers:{hover:!0,"v-danger":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon rounded-circle ml-1",attrs:{title:"Delete Order",variant:"danger"},on:{click:function(s){return t.deleteOrder(e)}}},[s("feather-icon",{attrs:{icon:"TrashIcon"}})],1):t._e()],1)]}}],null,!1,777984571)})],1),t._v(" "),s("b-col",{staticClass:"my-1",attrs:{md:"2",sm:"4",xs:"4"}},[s("b-form-group",{staticClass:"mb-0"},[s("label",{staticClass:"d-inline-block text-sm-left mr-50"},[t._v("Per page")]),t._v(" "),s("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.orders.paginateOptions},on:{change:function(e){return t.browseOrders(1)}},model:{value:t.orders.recordsPerPage,callback:function(e){t.$set(t.orders,"recordsPerPage",e)},expression:"orders.recordsPerPage"}})],1)],1),t._v(" "),s("b-col",{staticClass:"my-1",attrs:{md:"10",sm:"8",xs:"8"}},[s("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.orders.meta.total,"per-page":t.orders.recordsPerPage,align:"right","first-number":"","last-number":"","prev-class":"prev-item","next-class":"next-item"},on:{change:t.browseOrders},scopedSlots:t._u([{key:"prev-text",fn:function(){return[s("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"18"}})]},proxy:!0},{key:"next-text",fn:function(){return[s("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"18"}})]},proxy:!0}],null,!1,1308952388),model:{value:t.orders.meta.current_page,callback:function(e){t.$set(t.orders.meta,"current_page",e)},expression:"orders.meta.current_page"}})],1)],1)],1)],1)],1)],1):t._e(),t._v(" "),t.can("browse_buffet_order")?s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-overlay",{attrs:{show:t.buffetOrders.isLoading,rounded:"sm"}},[s("b-card-actions",{ref:"buffetOrderCard",attrs:{title:"Buffet Orders List","action-collapse":""}},[s("b-modal",{attrs:{id:"delete-buffet-order-modal",title:"Are you sure?","ok-only":"","ok-variant":"danger","ok-title":"Yes, Delete","modal-class":"modal-danger",centered:"","no-close-on-backdrop":""}},[s("b-card-text",[t._v("\n              You will not be able to retrieve this again!\n            ")])],1),t._v(" "),s("b-row",[s("b-col",{attrs:{cols:"6","align-h":"center"}},[t.can("create_buffet_order")?s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255,255,255,0.15)",expression:"'rgba(255,255,255,0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary",to:"/buffet-orders/create"}},[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"PlusIcon"}}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("Create Order")])],1):t._e()],1),t._v(" "),s("b-col",{staticClass:"text-right mb-2",attrs:{cols:"6","align-h":"center"}},[s("b-input-group",{staticStyle:{position:"relative",top:"13px"}},[s("b-input-group-prepend",{attrs:{"is-text":""}},[s("feather-icon",{attrs:{icon:"SearchIcon"}})],1),t._v(" "),s("b-form-input",{attrs:{id:"search",size:"sm",placeholder:"Search"},on:{change:t.browseBuffetOrders},model:{value:t.buffetOrders.search,callback:function(e){t.$set(t.buffetOrders,"search",e)},expression:"buffetOrders.search"}})],1)],1),t._v(" "),s("b-col",{attrs:{cols:"12"}},[s("b-table",{attrs:{responsive:"",outlined:!0,items:t.buffetOrders.data,fields:t.buffetOrders.fields,"head-variant":"dark"},scopedSlots:t._u([{key:"cell(index)",fn:function(e){return[t._v("\n                  "+t._s(t.buffetOrders.meta.current_page*t.buffetOrders.recordsPerPage-t.buffetOrders.recordsPerPage+e.index+1)+"\n                ")]}},{key:"cell(customer)",fn:function(e){return[s("router-link",{attrs:{to:"/customers/"+e.item.customer.id}},[t._v("\n                    #TKB"+t._s(e.item.customer.id)+" - "+t._s(t._f("capitalize")(e.item.customer.name))+"\n                  ")])]}},{key:"cell(stocks)",fn:function(e){return t._l(e.item.stocks,(function(e,r){return s("router-link",{key:r,attrs:{to:"/stocks/"+e.id}},[s("b-badge",{staticClass:"mb-5-px",attrs:{variant:"primary"}},[t._v("\n                      "+t._s(e.pivot.quantity)+" "+t._s(t._f("capitalize")(e.name))+"\n                    ")]),s("br")],1)}))}},{key:"cell(discount)",fn:function(e){return[t._v("\n                  "+t._s(e.item.discount)+"%\n                ")]}},{key:"cell(total)",fn:function(e){return[t._v("\n                  "+t._s(t.total(e.item))+" EGP\n                ")]}},{key:"cell(created_at)",fn:function(e){return[t._v("\n                  "+t._s(t._f("date")(e.item.created_at,!0))+" - "+t._s(t._f("time")(e.item.created_at))+"\n                ")]}},{key:"cell(action)",fn:function(e){return[s("span",{staticClass:"text-nowrap"},[t.can("view_buffet_order")?s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon rounded-circle",attrs:{title:"View Order",variant:"primary",to:"/buffet-orders/"+e.item.id}},[s("feather-icon",{attrs:{icon:"EyeIcon"}})],1):t._e(),t._v(" "),t.can("update_buffet_order")?s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-warning",modifiers:{hover:!0,"v-warning":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon rounded-circle ml-1",attrs:{title:"Edit Order",variant:"warning",to:"/buffet-orders/"+e.item.id+"/edit"}},[s("feather-icon",{attrs:{icon:"EditIcon"}})],1):t._e(),t._v(" "),t.can("delete_buffet_order")?s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-danger",modifiers:{hover:!0,"v-danger":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon rounded-circle ml-1",attrs:{title:"Delete Order",variant:"danger"},on:{click:function(s){return t.deleteBuffetOrder(e)}}},[s("feather-icon",{attrs:{icon:"TrashIcon"}})],1):t._e()],1)]}}],null,!1,3600427827)})],1),t._v(" "),s("b-col",{staticClass:"my-1",attrs:{md:"2",sm:"4",xs:"4"}},[s("b-form-group",{staticClass:"mb-0"},[s("label",{staticClass:"d-inline-block text-sm-left mr-50"},[t._v("Per page")]),t._v(" "),s("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.buffetOrders.paginateOptions},on:{change:function(e){return t.browseBuffetOrders(1)}},model:{value:t.buffetOrders.recordsPerPage,callback:function(e){t.$set(t.buffetOrders,"recordsPerPage",e)},expression:"buffetOrders.recordsPerPage"}})],1)],1),t._v(" "),s("b-col",{staticClass:"my-1",attrs:{md:"10",sm:"8",xs:"8"}},[s("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.buffetOrders.meta.total,"per-page":t.buffetOrders.recordsPerPage,align:"right","first-number":"","last-number":"","prev-class":"prev-item","next-class":"next-item"},on:{change:t.browseBuffetOrders},scopedSlots:t._u([{key:"prev-text",fn:function(){return[s("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"18"}})]},proxy:!0},{key:"next-text",fn:function(){return[s("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"18"}})]},proxy:!0}],null,!1,1308952388),model:{value:t.buffetOrders.meta.current_page,callback:function(e){t.$set(t.buffetOrders.meta,"current_page",e)},expression:"buffetOrders.meta.current_page"}})],1)],1)],1)],1)],1)],1):t._e(),t._v(" "),t.can("browse_customer_comment")?s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-overlay",{attrs:{show:t.comments.isLoading,rounded:"sm"}},[s("b-card-actions",{ref:"commentsCard",attrs:{title:"Comments","action-collapse":""}},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("app-timeline",[t.can("create_customer_comment")?s("app-timeline-item",[s("validation-observer",{ref:"createCommentForm",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.handleSubmit;return[s("b-form",{on:{submit:function(e){return e.preventDefault(),r(t.createComment)}}},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-form-group",{attrs:{label:"Comment","label-for":"comment"}},[s("validation-provider",{attrs:{name:"Comment",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[s("b-form-textarea",{attrs:{placeholder:"type your comment here...",rows:"3",state:!(r.length>0)&&null},model:{value:t.comments.form.comment,callback:function(e){t.$set(t.comments.form,"comment",e)},expression:"comments.form.comment"}}),t._v(" "),s("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1)],1),t._v(" "),s("b-col",{staticClass:"text-right",attrs:{cols:"12"}},[s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{type:"submit",disabled:t.comments.isCreateLoading,variant:"primary",size:"sm"}},[t.comments.isCreateLoading?[s("b-spinner",{attrs:{small:""}}),t._v("\n                              Loading...\n                            ")]:[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"SendIcon"}}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("Post Comment")])]],2)],1)],1)],1)]}}],null,!1,1764072698)})],1):t._e(),t._v(" "),t._l(t.comments.data,(function(e,r){return s("app-timeline-item",{key:r},[e.id!==t.comments.editForm.id?s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("h6",[t._v("\n                      "+t._s(e.comment)+"\n                      "),s("div",{staticClass:"mt-1"},[t.can("update_comment")?s("b-button",{attrs:{size:"sm",variant:"warning"},on:{click:function(s){return t.viewCommentEditForm(e,r)}}},[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"EditIcon"}}),t._v("\n                          Edit\n                        ")],1):t._e(),t._v(" "),t.can("delete_comment")?s("b-button",{staticClass:"ml-1",attrs:{size:"sm",variant:"danger"},on:{click:function(s){return t.deleteComment(e.id)}}},[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"TrashIcon"}}),t._v("\n                          Delete\n                        ")],1):t._e()],1)]),t._v(" "),s("small",{staticClass:"text-muted"},[t._v("\n                      "+t._s(t._f("date")(e.created_at,!0))+" - "+t._s(t._f("time")(e.created_at))+"\n                      "),s("p",{staticClass:"mb-0"},[t._v("\n                        By "),s("router-link",{attrs:{to:"/users/"+e.created_by.id}},[t._v("\n                          "+t._s(e.created_by.name)+"\n                        ")])],1)])]):s("div",[s("validation-observer",{ref:"editCommentForm",refInFor:!0,scopedSlots:t._u([{key:"default",fn:function(e){var r=e.handleSubmit;return[s("b-form",{on:{submit:function(e){return e.preventDefault(),r(t.editComment)}}},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-form-group",{attrs:{label:"Comment","label-for":"comment"}},[s("validation-provider",{attrs:{name:"Comment",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[s("b-form-textarea",{attrs:{placeholder:"type your comment here...",rows:"3",state:!(r.length>0)&&null},model:{value:t.comments.editForm.data.comment,callback:function(e){t.$set(t.comments.editForm.data,"comment",e)},expression:"comments.editForm.data.comment"}}),t._v(" "),s("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1)],1),t._v(" "),s("b-col",{staticClass:"text-right",attrs:{cols:"12"}},[s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{type:"submit",variant:"outline-danger",size:"sm"},on:{click:t.hideCommentEditForm}},[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"XIcon"}}),t._v(" Cancel\n                            ")],1),t._v(" "),s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{type:"submit",disabled:t.comments.editForm.isLoading,variant:"primary",size:"sm"}},[t.comments.editForm.isLoading?[s("b-spinner",{attrs:{small:""}}),t._v("\n                                Loading...\n                              ")]:[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"SaveIcon"}}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("Save Comment")])]],2)],1)],1)],1)]}}],null,!0)})],1)])}))],2)],1)],1)],1)],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=l.exports}}]);