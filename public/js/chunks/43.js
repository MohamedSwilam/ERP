(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"1w2d":function(e,t,o){"use strict";var a={components:{BAvatar:o("G/QR").a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},i=(o("MOdh"),o("KHd+")),r=Object(i.a)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"toastification"},[o("div",{staticClass:"d-flex align-items-start"},[o("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:e.variant,size:"1.8rem"}},[o("feather-icon",{attrs:{icon:e.icon,size:"15"}})],1),e._v(" "),o("div",{staticClass:"d-flex flex-grow-1"},[o("div",[e.title?o("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+e.variant,domProps:{textContent:e._s(e.title)}}):e._e(),e._v(" "),e.text?o("small",{staticClass:"d-inline-block text-body",domProps:{textContent:e._s(e.text)}}):e._e()]),e._v(" "),o("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(t){return e.$emit("close-toast")}}},[e.hideClose?e._e():o("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"13ed5408",null);t.a=r.exports},"4cv3":function(e,t,o){"use strict";var a={bind:function(e,t){var o={event:"mousedown",transition:600};!function(e,t){e.forEach((function(e){isNaN(Number(e))?t.event=e:t.transition=e}))}(Object.keys(t.modifiers),o),e.addEventListener(o.event,(function(a){!function(e,t){var a=t,s=parseInt(getComputedStyle(a).borderWidth.replace("px","")),n=a.getBoundingClientRect(),l=n.left,c=n.top,d=a.offsetWidth,p=a.offsetHeight,u=e.clientX-l,m=e.clientY-c,f=Math.max(u,d-u),v=Math.max(m,p-m),b=window.getComputedStyle(a),g=Math.sqrt(f*f+v*v),h=s>0?s:0,y=document.createElement("div"),_=document.createElement("div");_.className="ripple-container",y.className="ripple",y.style.marginTop="0px",y.style.marginLeft="0px",y.style.width="1px",y.style.height="1px",y.style.transition="all "+o.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",y.style.borderRadius="50%",y.style.pointerEvents="none",y.style.position="relative",y.style.zIndex=r,y.style.backgroundColor=i,_.style.position="absolute",_.style.left=0-h+"px",_.style.top=0-h+"px",_.style.height="0",_.style.width="0",_.style.pointerEvents="none",_.style.overflow="hidden";var x=a.style.position.length>0?a.style.position:getComputedStyle(a).position;"relative"!==x&&(a.style.position="relative");function w(){setTimeout((function(){y.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){_.parentNode.removeChild(_)}),850),t.removeEventListener("mouseup",w,!1),setTimeout((function(){for(var e=!0,t=0;t<a.childNodes.length;t++)"ripple-container"===a.childNodes[t].className&&(e=!1);e&&(a.style.position="static"!==x?x:"")}),o.transition+250)}_.appendChild(y),a.appendChild(_),y.style.marginLeft=u+"px",y.style.marginTop=m+"px",_.style.width=d+"px",_.style.height=p+"px",_.style.borderTopLeftRadius=b.borderTopLeftRadius,_.style.borderTopRightRadius=b.borderTopRightRadius,_.style.borderBottomLeftRadius=b.borderBottomLeftRadius,_.style.borderBottomRightRadius=b.borderBottomRightRadius,_.style.direction="ltr",setTimeout((function(){y.style.width=2*g+"px",y.style.height=2*g+"px",y.style.marginLeft=u-g+"px",y.style.marginTop=m-g+"px"}),0),"mousedown"===e.type?t.addEventListener("mouseup",w,!1):w()}(a,e,t.value)}));var i=t.value||a.color||"rgba(0, 0, 0, 0.35)",r=a.zIndex||"9999"}};t.a=a},DEUr:function(e,t,o){var a=o("o1KL");"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o("aET+")(a,i);a.locals&&(e.exports=a.locals)},MOdh:function(e,t,o){"use strict";o("DEUr")},o1KL:function(e,t,o){(e.exports=o("I1BE")(!1)).push([e.i,".toastification-close-icon[data-v-13ed5408],.toastification-title[data-v-13ed5408]{line-height:26px}.toastification-title[data-v-13ed5408]{color:inherit}",""])},y0ya:function(e,t,o){"use strict";o.r(t);var a=o("1w2d"),i={name:"BrowseRoles",directives:{Ripple:o("4cv3").a},data:function(){return{roles:{isLoading:!1,filter:"",paginateOptions:[5,10,25,50,100,250],recordsPerPage:50,fields:[{key:"index",label:"#"},{key:"name",label:"Name"},{key:"core",label:"Is Core?"},{key:"created_at",label:"Created At"},{key:"updated_at",label:"Updated At"},"Action"],data:[],meta:{count:0,current_page:1,links:{},per_page:0,total:0,total_pages:0}}}},mounted:function(){this.browseRoles(this.roles.meta.current_page)},methods:{browseRoles:function(e){var t=this;this.roles.isLoading=!0,this.$store.dispatch("rolesAndPermissions/browse","?paginate=".concat(this.roles.recordsPerPage,"&page=").concat(e)).then((function(e){t.roles.data=e.data.data,t.roles.meta=e.data.data.meta.pagination,t.roles.isLoading=!1})).catch((function(e){console.error(e),t.roles.isLoading=!1}))},deleteRole:function(e){var t=this;this.$bvModal.msgBoxConfirm("You will not be able to retrieve this again!",{title:"Are you sure?",size:"sm",okTitle:"Yes, Delete!",okVariant:"danger",cancelTitle:"Cancel",cancelVariant:"outline-primary",centered:!0}).then((function(o){o&&t.$store.dispatch("rolesAndPermissions/delete",e.item.id).then((function(o){t.roles.data=t.roles.data.filter((function(t){return t.id!==e.item.id})),t.$toast({component:a.a,props:{title:"Success",icon:"CheckCircleIcon",text:o.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3})})).catch((function(e){console.log(e)}))}))}}},r=o("KHd+"),s=Object(r.a)(i,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("b-row",[o("b-col",{attrs:{cols:"12"}},[o("b-overlay",{attrs:{show:e.roles.isLoading,rounded:"sm"}},[o("b-card-actions",{ref:"roleCard",attrs:{title:"Roles List","action-collapse":""}},[o("b-modal",{attrs:{id:"delete-role-modal",title:"Are you sure?","ok-only":"","ok-variant":"danger","ok-title":"Yes, Delete","modal-class":"modal-danger",centered:"","no-close-on-backdrop":""}},[o("b-card-text",[e._v("\n              You will not be able to retrieve this again!\n            ")])],1),e._v(" "),o("b-row",[o("b-col",{attrs:{cols:"6","align-h":"center"}},[e.can("create_role")?o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"my-1",attrs:{size:"sm",variant:"primary",to:"/roles/create"}},[o("feather-icon",{staticClass:"mr-50",attrs:{icon:"PlusIcon"}}),e._v(" "),o("span",{staticClass:"align-middle"},[e._v("Create Role")])],1):e._e()],1),e._v(" "),o("b-col",{attrs:{cols:"12"}},[o("b-table",{attrs:{responsive:"",outlined:!0,items:e.roles.data,fields:e.roles.fields,"head-variant":"dark"},scopedSlots:e._u([{key:"cell(index)",fn:function(t){return[e._v("\n                  "+e._s(e.roles.meta.current_page*e.roles.recordsPerPage-e.roles.recordsPerPage+t.index+1)+"\n                ")]}},{key:"cell(core)",fn:function(t){return[o("b-badge",{attrs:{variant:t.item.core?"success":"danger"}},[e._v("\n                    "+e._s(t.item.core?"Yes":"No")+"\n                  ")])]}},{key:"cell(created_at)",fn:function(t){return[e._v("\n                  "+e._s(e._f("date")(t.item.created_at,!0))+" - "+e._s(e._f("time")(t.item.created_at))+"\n                ")]}},{key:"cell(updated_at)",fn:function(t){return[e._v("\n                  "+e._s(e._f("date")(t.item.updated_at,!0))+" - "+e._s(e._f("time")(t.item.updated_at))+"\n                ")]}},{key:"cell(action)",fn:function(t){return[o("span",{staticClass:"text-nowrap"},[e.can("browse_role")?o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon rounded-circle",attrs:{title:"View Role",variant:"primary",to:"/roles/"+t.item.id}},[o("feather-icon",{attrs:{icon:"EyeIcon"}})],1):e._e(),e._v(" "),e.can("update_role")?o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-warning",modifiers:{hover:!0,"v-warning":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon rounded-circle ml-1",attrs:{title:"Edit Role",variant:"warning",to:"/roles/"+t.item.id+"/edit"}},[o("feather-icon",{attrs:{icon:"EditIcon"}})],1):e._e(),e._v(" "),e.can("delete_role")&&!t.item.core?o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-danger",modifiers:{hover:!0,"v-danger":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon rounded-circle ml-1",attrs:{title:"Delete Role",variant:"danger"},on:{click:function(o){return e.deleteRole(t)}}},[o("feather-icon",{attrs:{icon:"TrashIcon"}})],1):e._e()],1)]}}])})],1),e._v(" "),o("b-col",{staticClass:"my-1",attrs:{md:"2",sm:"4",xs:"4"}},[o("b-form-group",{staticClass:"mb-0"},[o("label",{staticClass:"d-inline-block text-sm-left mr-50"},[e._v("Per page")]),e._v(" "),o("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:e.roles.paginateOptions},on:{change:function(t){return e.browseRoles(1)}},model:{value:e.roles.recordsPerPage,callback:function(t){e.$set(e.roles,"recordsPerPage",t)},expression:"roles.recordsPerPage"}})],1)],1),e._v(" "),o("b-col",{staticClass:"my-1",attrs:{md:"10",sm:"8",xs:"8"}},[o("b-pagination",{staticClass:"my-0",attrs:{"total-rows":e.roles.meta.total,"per-page":e.roles.recordsPerPage,align:"right","first-number":"","last-number":"","prev-class":"prev-item","next-class":"next-item"},on:{change:e.browseRoles},scopedSlots:e._u([{key:"prev-text",fn:function(){return[o("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"18"}})]},proxy:!0},{key:"next-text",fn:function(){return[o("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"18"}})]},proxy:!0}]),model:{value:e.roles.meta.current_page,callback:function(t){e.$set(e.roles.meta,"current_page",t)},expression:"roles.meta.current_page"}})],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);