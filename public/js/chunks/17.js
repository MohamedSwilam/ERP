(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1w2d":function(e,t,s){"use strict";var r={components:{BAvatar:s("G/QR").a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},a=(s("MOdh"),s("KHd+")),i=Object(a.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"toastification"},[s("div",{staticClass:"d-flex align-items-start"},[s("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:e.variant,size:"1.8rem"}},[s("feather-icon",{attrs:{icon:e.icon,size:"15"}})],1),e._v(" "),s("div",{staticClass:"d-flex flex-grow-1"},[s("div",[e.title?s("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+e.variant,domProps:{textContent:e._s(e.title)}}):e._e(),e._v(" "),e.text?s("small",{staticClass:"d-inline-block text-body",domProps:{textContent:e._s(e.text)}}):e._e()]),e._v(" "),s("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(t){return e.$emit("close-toast")}}},[e.hideClose?e._e():s("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"13ed5408",null);t.a=i.exports},"4cv3":function(e,t,s){"use strict";var r={bind:function(e,t){var s={event:"mousedown",transition:600};!function(e,t){e.forEach((function(e){isNaN(Number(e))?t.event=e:t.transition=e}))}(Object.keys(t.modifiers),s),e.addEventListener(s.event,(function(r){!function(e,t){var r=t,o=parseInt(getComputedStyle(r).borderWidth.replace("px","")),n=r.getBoundingClientRect(),l=n.left,c=n.top,d=r.offsetWidth,u=r.offsetHeight,p=e.clientX-l,m=e.clientY-c,f=Math.max(p,d-p),v=Math.max(m,u-m),h=window.getComputedStyle(r),b=Math.sqrt(f*f+v*v),g=o>0?o:0,y=document.createElement("div"),x=document.createElement("div");x.className="ripple-container",y.className="ripple",y.style.marginTop="0px",y.style.marginLeft="0px",y.style.width="1px",y.style.height="1px",y.style.transition="all "+s.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",y.style.borderRadius="50%",y.style.pointerEvents="none",y.style.position="relative",y.style.zIndex=i,y.style.backgroundColor=a,x.style.position="absolute",x.style.left=0-g+"px",x.style.top=0-g+"px",x.style.height="0",x.style.width="0",x.style.pointerEvents="none",x.style.overflow="hidden";var _=r.style.position.length>0?r.style.position:getComputedStyle(r).position;"relative"!==_&&(r.style.position="relative");function w(){setTimeout((function(){y.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){x.parentNode.removeChild(x)}),850),t.removeEventListener("mouseup",w,!1),setTimeout((function(){for(var e=!0,t=0;t<r.childNodes.length;t++)"ripple-container"===r.childNodes[t].className&&(e=!1);e&&(r.style.position="static"!==_?_:"")}),s.transition+250)}x.appendChild(y),r.appendChild(x),y.style.marginLeft=p+"px",y.style.marginTop=m+"px",x.style.width=d+"px",x.style.height=u+"px",x.style.borderTopLeftRadius=h.borderTopLeftRadius,x.style.borderTopRightRadius=h.borderTopRightRadius,x.style.borderBottomLeftRadius=h.borderBottomLeftRadius,x.style.borderBottomRightRadius=h.borderBottomRightRadius,x.style.direction="ltr",setTimeout((function(){y.style.width=2*b+"px",y.style.height=2*b+"px",y.style.marginLeft=p-b+"px",y.style.marginTop=m-b+"px"}),0),"mousedown"===e.type?t.addEventListener("mouseup",w,!1):w()}(r,e,t.value)}));var a=t.value||r.color||"rgba(0, 0, 0, 0.35)",i=r.zIndex||"9999"}};t.a=r},DEUr:function(e,t,s){var r=s("o1KL");"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(r,a);r.locals&&(e.exports=r.locals)},HFT3:function(e,t,s){"use strict";s("JkWj")},JkWj:function(e,t,s){var r=s("ltYP");"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(r,a);r.locals&&(e.exports=r.locals)},MOdh:function(e,t,s){"use strict";s("DEUr")},ltYP:function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,"[dir] .table .thead-dark th{background-color:#195cff!important;border-color:#195cff!important}.dark-layout .table thead.thead-dark th,[dir] .dark-layout .table tfoot.thead-dark th{color:#fff!important}",""])},o1KL:function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,".toastification-close-icon[data-v-13ed5408],.toastification-title[data-v-13ed5408]{line-height:26px}.toastification-title[data-v-13ed5408]{color:inherit}",""])},zWrW:function(e,t,s){"use strict";s.r(t);var r=s("1w2d"),a={name:"BrowseUsers",directives:{Ripple:s("4cv3").a},data:function(){return{users:{isLoading:!1,search:"",paginateOptions:[5,10,25,50,100,250],recordsPerPage:50,fields:[{key:"index",label:"#"},{key:"name",label:"Name"},{key:"email",label:"Email"},{key:"created_at",label:"Created At"},"Action"],data:[],meta:{count:0,current_page:1,links:{},per_page:0,total:0,total_pages:0}}}},mounted:function(){this.browseUsers(this.users.meta.current_page)},methods:{browseUsers:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.users.isLoading=!0,this.$store.dispatch("user/browse","?paginate=".concat(this.users.recordsPerPage,"&page=").concat(t,"&filter[search]=").concat(this.users.search)).then((function(t){e.users.data=t.data.data,e.users.meta=t.data.meta.pagination,e.users.isLoading=!1})).catch((function(t){console.error(t),e.users.isLoading=!1}))},deleteUser:function(e){var t=this;this.$bvModal.msgBoxConfirm("You will not be able to retrieve this again!",{title:"Are you sure?",size:"sm",okTitle:"Yes, Delete!",okVariant:"danger",cancelTitle:"Cancel",cancelVariant:"outline-primary",centered:!0}).then((function(s){s&&t.$store.dispatch("user/delete",e.item.id).then((function(s){t.users.data=t.users.data.filter((function(t){return t.id!==e.item.id})),t.$toast({component:r.a,props:{title:"Success",icon:"CheckCircleIcon",text:s.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3})})).catch((function(e){console.log(e)}))}))}}},i=(s("HFT3"),s("KHd+")),o=Object(i.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-overlay",{attrs:{show:e.users.isLoading,rounded:"sm"}},[s("b-card-actions",{ref:"userCard",attrs:{title:"Users List","action-collapse":""}},[s("b-modal",{attrs:{id:"delete-user-modal",title:"Are you sure?","ok-only":"","ok-variant":"danger","ok-title":"Yes, Delete","modal-class":"modal-danger",centered:"","no-close-on-backdrop":""}},[s("b-card-text",[e._v("\n              You will not be able to retrieve this again!\n            ")])],1),e._v(" "),s("b-row",[s("b-col",{attrs:{cols:"6","align-h":"center"}},[e.can("create_user")?s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255,255,255,0.15)",expression:"'rgba(255,255,255,0.15)'",modifiers:{400:!0}}],staticClass:"my-1",attrs:{size:"sm",variant:"primary",to:"/users/create"}},[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"PlusIcon"}}),e._v(" "),s("span",{staticClass:"align-middle"},[e._v("Create User")])],1):e._e()],1),e._v(" "),s("b-col",{staticClass:"text-right",attrs:{cols:"6","align-h":"center"}},[s("b-input-group",{staticStyle:{position:"relative",top:"13px"}},[s("b-input-group-prepend",{attrs:{"is-text":""}},[s("feather-icon",{attrs:{icon:"SearchIcon"}})],1),e._v(" "),s("b-form-input",{attrs:{id:"search",size:"sm",placeholder:"Search"},on:{change:e.browseUsers},model:{value:e.users.search,callback:function(t){e.$set(e.users,"search",t)},expression:"users.search"}})],1)],1),e._v(" "),s("b-col",{attrs:{cols:"12"}},[s("b-table",{attrs:{responsive:"",outlined:!0,items:e.users.data,fields:e.users.fields,"head-variant":"dark"},scopedSlots:e._u([{key:"cell(index)",fn:function(t){return[e._v("\n                  "+e._s(e.users.meta.current_page*e.users.recordsPerPage-e.users.recordsPerPage+t.index+1)+"\n                ")]}},{key:"cell(created_at)",fn:function(t){return[e._v("\n                  "+e._s(e._f("date")(t.item.created_at,!0))+" - "+e._s(e._f("time")(t.item.created_at))+"\n                ")]}},{key:"cell(action)",fn:function(t){return[s("span",{staticClass:"text-nowrap"},[e.can("view_user")?s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon rounded-circle",attrs:{title:"View User",variant:"primary",to:"/users/"+t.item.id}},[s("feather-icon",{attrs:{icon:"EyeIcon"}})],1):e._e(),e._v(" "),e.can("update_user")?s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-warning",modifiers:{hover:!0,"v-warning":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon rounded-circle ml-1",attrs:{title:"Edit User",variant:"warning",to:"/users/"+t.item.id+"/edit"}},[s("feather-icon",{attrs:{icon:"EditIcon"}})],1):e._e(),e._v(" "),e.can("delete_user")?s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-danger",modifiers:{hover:!0,"v-danger":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon rounded-circle ml-1",attrs:{title:"Delete User",variant:"danger"},on:{click:function(s){return e.deleteUser(t)}}},[s("feather-icon",{attrs:{icon:"TrashIcon"}})],1):e._e()],1)]}}])})],1),e._v(" "),s("b-col",{staticClass:"my-1",attrs:{md:"2",sm:"4",xs:"4"}},[s("b-form-group",{staticClass:"mb-0"},[s("label",{staticClass:"d-inline-block text-sm-left mr-50"},[e._v("Per page")]),e._v(" "),s("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:e.users.paginateOptions},on:{change:function(t){return e.browseUsers(1)}},model:{value:e.users.recordsPerPage,callback:function(t){e.$set(e.users,"recordsPerPage",t)},expression:"users.recordsPerPage"}})],1)],1),e._v(" "),s("b-col",{staticClass:"my-1",attrs:{md:"10",sm:"8",xs:"8"}},[s("b-pagination",{staticClass:"my-0",attrs:{"total-rows":e.users.meta.total,"per-page":e.users.recordsPerPage,align:"right","first-number":"","last-number":"","prev-class":"prev-item","next-class":"next-item"},on:{change:e.browseUsers},scopedSlots:e._u([{key:"prev-text",fn:function(){return[s("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"18"}})]},proxy:!0},{key:"next-text",fn:function(){return[s("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"18"}})]},proxy:!0}]),model:{value:e.users.meta.current_page,callback:function(t){e.$set(e.users.meta,"current_page",t)},expression:"users.meta.current_page"}})],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);