(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{D6WO:function(t,e,s){"use strict";s.r(e);var a=s("4cv3"),r=s("1w2d"),o=s("ZHCp"),n=s("S1G4"),i={name:"ViewOrder",directives:{Ripple:a.a},components:{AppTimeline:o.a,AppTimelineItem:n.a},data:function(){return{orders:{isLoading:!1,isLoadingDelete:!1,data:{id:null,customers:[],created_by:{id:null,name:""},package:{id:null,name:""},created_at:(new Date).getTime(),updated_at:(new Date).getTime(),isDeleted:!1}},comments:{isLoading:!1,isCreateLoading:!1,data:[],form:{comment:""},editForm:{id:null,index:null,isLoading:!1,data:{comment:""}}}}},mounted:function(){this.viewOrder(),this.can("browse_order_comment")&&this.browseComments()},methods:{viewOrder:function(){var t=this;this.orders.isLoading=!0,this.$store.dispatch("orders/view",this.$route.params.id).then((function(e){t.orders.data=e.data.data,t.orders.isLoading=!1})).catch((function(e){console.error(e),t.orders.isLoading=!1}))},deleteOrder:function(t){var e=this;this.$bvModal.msgBoxConfirm("You will not be able to retrieve this again!",{title:"Are you sure?",size:"sm",okTitle:"Yes, Delete",okVariant:"danger",cancelTitle:"Cancel",cancelVariant:"outline-primary",centered:!0}).then((function(s){s&&(e.orders.isLoadingDelete=!0,e.$store.dispatch("orders/delete",t).then((function(t){e.orders.isLoadingDelete=!1,e.$toast({component:r.a,props:{title:"Success",icon:"CheckCircleIcon",text:t.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3}),e.$router.push("/orders")})).catch((function(t){console.error(t),e.orders.isLoadingDelete=!1})))}))},browseComments:function(){var t=this;this.comments.isLoading=!0,this.$store.dispatch("orders/browseComments",{id:this.$route.params.id,filters:"?sort=-created_at"}).then((function(e){t.comments.data=e.data.data,t.comments.isLoading=!1})).catch((function(e){console.error(e),t.comments.isLoading=!1}))},createComment:function(){var t=this;this.comments.isCreateLoading=!0,this.$store.dispatch("orders/createComment",{id:this.$route.params.id,data:this.comments.form}).then((function(e){t.comments.isCreateLoading=!1,t.$toast({component:r.a,props:{title:"Success",icon:"CheckCircleIcon",text:e.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3}),t.comments.data.unshift(e.data.data),t.comments.form.comment="."})).catch((function(e){t.$refs.createCommentForm.setErrors(e.response.data.errors),t.comments.isCreateLoading=!1}))},deleteComment:function(t){var e=this;this.$bvModal.msgBoxConfirm("You will not be able to retrieve this again!",{title:"Are you sure?",size:"sm",okTitle:"Yes, Delete",okVariant:"danger",cancelTitle:"Cancel",cancelVariant:"outline-primary",centered:!0}).then((function(s){s&&(e.orders.isLoadingDelete=!0,e.$store.dispatch("comment/delete",t).then((function(s){e.orders.isLoadingDelete=!1,e.$toast({component:r.a,props:{title:"Success",icon:"CheckCircleIcon",text:s.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3}),e.comments.data=e.comments.data.filter((function(e){return e.id!==t}))})).catch((function(t){console.error(t),e.orders.isLoadingDelete=!1})))}))},viewCommentEditForm:function(t,e){this.comments.editForm.data.comment=t.comment,this.comments.editForm.id=t.id,this.comments.editForm.index=e},hideCommentEditForm:function(){this.comments.editForm.id=null,this.comments.editForm.index=null,this.comments.editForm.data.comment=""},editComment:function(){var t=this;this.comments.editForm.isLoading=!0,this.$store.dispatch("comment/update",{id:this.comments.editForm.id,data:this.comments.editForm.data}).then((function(e){t.comments.editForm.isLoading=!1,t.$toast({component:r.a,props:{title:"Success",icon:"CheckCircleIcon",text:e.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3}),t.comments.data[t.comments.editForm.index]=e.data.data,t.hideCommentEditForm()})).catch((function(e){t.$refs.editCommentForm.setErrors(e.response.data.errors),t.comments.editForm.isLoading=!1}))}}},m=s("KHd+"),c=Object(m.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-overlay",{attrs:{show:t.orders.isLoading,rounded:"sm"}},[s("b-card-actions",{ref:"ordersCard",attrs:{title:"Order Details","action-collapse":""}},[s("b-row",[s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("ID")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.orders.data.id)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Package")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[s("router-link",{attrs:{to:"/packages/"+t.orders.data.package.id}},[t._v("\n                "+t._s(t.orders.data.package.name)+"\n              ")])],1),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Total Hours")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.orders.data.total_hours)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Remaining Hours")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.orders.data.remaining_hours)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Starts_at")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t._f("date")(t.orders.data.starts_at,!0))+" - "+t._s(t._f("time")(t.orders.data.starts_at))+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Expires At")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t._f("date")(t.orders.data.expires_at,!0))+" - "+t._s(t._f("time")(t.orders.data.expires_at))+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Customers")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},t._l(t.orders.data.customers,(function(e,a){return s("router-link",{key:a,staticClass:"mr-1 mb-1",attrs:{to:"/customers/"+e.id}},[s("b-badge",{attrs:{variant:"primary"}},[t._v("\n                  #TKB"+t._s(e.id)+" - "+t._s(t._f("capitalize")(e.name))+"\n                ")])],1)})),1),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Created By")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[s("router-link",{attrs:{to:"/users/"+t.orders.data.created_by.id}},[t._v("\n                "+t._s(t.orders.data.created_by.name)+"\n              ")])],1),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Seller")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.orders.data.seller)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Discount")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.orders.data.discount)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Created At")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t._f("date")(t.orders.data.created_at,!0))+" - "+t._s(t._f("time")(t.orders.data.created_at))+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Updated At")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t._f("date")(t.orders.data.updated_at,!0))+" - "+t._s(t._f("time")(t.orders.data.updated_at))+"\n            ")])],1),t._v(" "),s("hr"),t._v(" "),s("b-container",[s("b-row",{staticClass:"mt-1",attrs:{"align-h":"center"}},[s("b-col",{staticStyle:{"text-align":"center"},attrs:{cols:"12"}},[t.can("update_orders")?s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"warning",to:"/orders/"+t.orders.data.id+"/edit"}},[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"EditIcon"}}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("Edit Order")])],1):t._e(),t._v(" "),t.can("delete_order")?s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"ml-1",attrs:{disabled:t.orders.isLoadingDelete,variant:"danger"},on:{click:function(e){return t.deleteOrder(t.orders.data.id)}}},[t.orders.isLoadingDelete?[s("b-spinner",{attrs:{small:""}}),t._v("\n                    Loading...\n                  ")]:[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"TrashIcon"}}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("Delete Order")])]],2):t._e()],1)],1)],1)],1)],1)],1)],1),t._v(" "),t.can("browse_order_comment")?s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-overlay",{attrs:{show:t.comments.isLoading,rounded:"sm"}},[s("b-card-actions",{ref:"commentsCard",attrs:{title:"Comments","action-collapse":""}},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("app-timeline",[t.can("create_order_comment")?s("app-timeline-item",[s("validation-observer",{ref:"createCommentForm",scopedSlots:t._u([{key:"default",fn:function(e){var a=e.handleSubmit;return[s("b-form",{on:{submit:function(e){return e.preventDefault(),a(t.createComment)}}},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-form-group",{attrs:{label:"Comment","label-for":"comment"}},[s("validation-provider",{attrs:{name:"Comment",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("b-form-textarea",{attrs:{placeholder:"type your comment here...",rows:"3",state:!(a.length>0)&&null},model:{value:t.comments.form.comment,callback:function(e){t.$set(t.comments.form,"comment",e)},expression:"comments.form.comment"}}),t._v(" "),s("small",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)],1),t._v(" "),s("b-col",{staticClass:"text-right",attrs:{cols:"12"}},[s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{type:"submit",disabled:t.comments.isCreateLoading,variant:"primary",size:"sm"}},[t.comments.isCreateLoading?[s("b-spinner",{attrs:{small:""}}),t._v("\n                              Loading...\n                            ")]:[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"SendIcon"}}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("Post Comment")])]],2)],1)],1)],1)]}}],null,!1,1764072698)})],1):t._e(),t._v(" "),t._l(t.comments.data,(function(e,a){return s("app-timeline-item",{key:a},[e.id!==t.comments.editForm.id?s("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[s("h6",[t._v("\n                      "+t._s(e.comment)+"\n                      "),s("div",{staticClass:"mt-1"},[t.can("update_comment")?s("b-button",{attrs:{size:"sm",variant:"warning"},on:{click:function(s){return t.viewCommentEditForm(e,a)}}},[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"EditIcon"}}),t._v("\n                          Edit\n                        ")],1):t._e(),t._v(" "),t.can("delete_comment")?s("b-button",{staticClass:"ml-1",attrs:{size:"sm",variant:"danger"},on:{click:function(s){return t.deleteComment(e.id)}}},[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"TrashIcon"}}),t._v("\n                          Delete\n                        ")],1):t._e()],1)]),t._v(" "),s("small",{staticClass:"text-muted"},[t._v("\n                      "+t._s(t._f("date")(e.created_at,!0))+" - "+t._s(t._f("time")(e.created_at))+"\n                      "),s("p",{staticClass:"mb-0"},[t._v("\n                        By "),s("router-link",{attrs:{to:"/users/"+e.created_by.id}},[t._v("\n                          "+t._s(e.created_by.name)+"\n                        ")])],1)])]):s("div",[s("validation-observer",{ref:"editCommentForm",refInFor:!0,scopedSlots:t._u([{key:"default",fn:function(e){var a=e.handleSubmit;return[s("b-form",{on:{submit:function(e){return e.preventDefault(),a(t.editComment)}}},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-form-group",{attrs:{label:"Comment","label-for":"comment"}},[s("validation-provider",{attrs:{name:"Comment",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("b-form-textarea",{attrs:{placeholder:"type your comment here...",rows:"3",state:!(a.length>0)&&null},model:{value:t.comments.editForm.data.comment,callback:function(e){t.$set(t.comments.editForm.data,"comment",e)},expression:"comments.editForm.data.comment"}}),t._v(" "),s("small",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)],1),t._v(" "),s("b-col",{staticClass:"text-right",attrs:{cols:"12"}},[s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{type:"submit",variant:"outline-danger",size:"sm"},on:{click:t.hideCommentEditForm}},[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"XIcon"}}),t._v(" Cancel\n                            ")],1),t._v(" "),s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{type:"submit",disabled:t.comments.editForm.isLoading,variant:"primary",size:"sm"}},[t.comments.editForm.isLoading?[s("b-spinner",{attrs:{small:""}}),t._v("\n                                Loading...\n                              ")]:[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"SaveIcon"}}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("Save Comment")])]],2)],1)],1)],1)]}}],null,!0)})],1)])}))],2)],1)],1)],1)],1)],1)],1):t._e()],1)}),[],!1,null,"6ff9a197",null);e.default=c.exports}}]);