(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1w2d":function(t,e,s){"use strict";var o={components:{BAvatar:s("G/QR").a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},r=(s("MOdh"),s("KHd+")),a=Object(r.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"toastification"},[s("div",{staticClass:"d-flex align-items-start"},[s("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[s("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),s("div",{staticClass:"d-flex flex-grow-1"},[s("div",[t.title?s("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?s("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),s("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():s("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"13ed5408",null);e.a=a.exports},"4cv3":function(t,e,s){"use strict";var o={bind:function(t,e){var s={event:"mousedown",transition:600};!function(t,e){t.forEach((function(t){isNaN(Number(t))?e.event=t:e.transition=t}))}(Object.keys(e.modifiers),s),t.addEventListener(s.event,(function(o){!function(t,e){var o=e,i=parseInt(getComputedStyle(o).borderWidth.replace("px","")),n=o.getBoundingClientRect(),c=n.left,l=n.top,d=o.offsetWidth,u=o.offsetHeight,m=t.clientX-c,p=t.clientY-l,f=Math.max(m,d-m),v=Math.max(p,u-p),h=window.getComputedStyle(o),b=Math.sqrt(f*f+v*v),g=i>0?i:0,y=document.createElement("div"),x=document.createElement("div");x.className="ripple-container",y.className="ripple",y.style.marginTop="0px",y.style.marginLeft="0px",y.style.width="1px",y.style.height="1px",y.style.transition="all "+s.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",y.style.borderRadius="50%",y.style.pointerEvents="none",y.style.position="relative",y.style.zIndex=a,y.style.backgroundColor=r,x.style.position="absolute",x.style.left=0-g+"px",x.style.top=0-g+"px",x.style.height="0",x.style.width="0",x.style.pointerEvents="none",x.style.overflow="hidden";var C=o.style.position.length>0?o.style.position:getComputedStyle(o).position;"relative"!==C&&(o.style.position="relative");function _(){setTimeout((function(){y.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){x.parentNode.removeChild(x)}),850),e.removeEventListener("mouseup",_,!1),setTimeout((function(){for(var t=!0,e=0;e<o.childNodes.length;e++)"ripple-container"===o.childNodes[e].className&&(t=!1);t&&(o.style.position="static"!==C?C:"")}),s.transition+250)}x.appendChild(y),o.appendChild(x),y.style.marginLeft=m+"px",y.style.marginTop=p+"px",x.style.width=d+"px",x.style.height=u+"px",x.style.borderTopLeftRadius=h.borderTopLeftRadius,x.style.borderTopRightRadius=h.borderTopRightRadius,x.style.borderBottomLeftRadius=h.borderBottomLeftRadius,x.style.borderBottomRightRadius=h.borderBottomRightRadius,x.style.direction="ltr",setTimeout((function(){y.style.width=2*b+"px",y.style.height=2*b+"px",y.style.marginLeft=m-b+"px",y.style.marginTop=p-b+"px"}),0),"mousedown"===t.type?e.addEventListener("mouseup",_,!1):_()}(o,t,e.value)}));var r=e.value||o.color||"rgba(0, 0, 0, 0.35)",a=o.zIndex||"9999"}};e.a=o},"5o0u":function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"[dir] .table .thead-dark th{background-color:#195cff!important;border-color:#195cff!important}.dark-layout .table thead.thead-dark th,[dir] .dark-layout .table tfoot.thead-dark th{color:#fff!important}",""])},DEUr:function(t,e,s){var o=s("o1KL");"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(o,r);o.locals&&(t.exports=o.locals)},MOdh:function(t,e,s){"use strict";s("DEUr")},YBGL:function(t,e,s){"use strict";s.r(e);var o=s("1w2d"),r={name:"BrowseCustomers",directives:{Ripple:s("4cv3").a},data:function(){return{customers:{isLoading:!1,search:"",paginateOptions:[5,10,25,50,100,250],recordsPerPage:50,fields:[{key:"index",label:"#"},{key:"name",label:"Name"},{key:"email",label:"Email"},{key:"phone",label:"Phone"},{key:"created_at",label:"Created At"},"Action"],data:[],meta:{count:0,current_page:1,links:{},per_page:0,total:0,total_pages:0}}}},mounted:function(){this.browseCustomers(this.customers.meta.current_page)},methods:{browseCustomers:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.customers.isLoading=!0,this.$store.dispatch("customer/browse","?paginate=".concat(this.customers.recordsPerPage,"&page=").concat(e,"&filter[search]=").concat(this.customers.search)).then((function(e){t.customers.data=e.data.data,t.customers.meta=e.data.meta.pagination,t.customers.isLoading=!1})).catch((function(e){console.error(e),t.customers.isLoading=!1}))},deleteCustomer:function(t){var e=this;this.$bvModal.msgBoxConfirm("You will not be able to retrieve this again!",{title:"Are you sure?",size:"sm",okTitle:"Yes, Delete!",okVariant:"danger",cancelTitle:"Cancel",cancelVariant:"outline-primary",centered:!0}).then((function(s){s&&e.$store.dispatch("customer/delete",t.item.id).then((function(s){e.customers.data=e.customers.data.filter((function(e){return e.id!==t.item.id})),e.$toast({component:o.a,props:{title:"Success",icon:"CheckCircleIcon",text:s.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3})})).catch((function(t){console.log(t)}))}))}}},a=(s("vtjB"),s("KHd+")),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-overlay",{attrs:{show:t.customers.isLoading,rounded:"sm"}},[s("b-card-actions",{ref:"customerCard",attrs:{title:"Customers List","action-collapse":""}},[s("b-modal",{attrs:{id:"delete-customer-modal",title:"Are you sure?","ok-only":"","ok-variant":"danger","ok-title":"Yes, Delete","modal-class":"modal-danger",centered:"","no-close-on-backdrop":""}},[s("b-card-text",[t._v("\n              You will not be able to retrieve this again!\n            ")])],1),t._v(" "),s("b-row",[s("b-col",{attrs:{cols:"6","align-h":"center"}},[t.can("store_customer")?s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255,255,255,0.15)",expression:"'rgba(255,255,255,0.15)'",modifiers:{400:!0}}],staticClass:"my-1",attrs:{size:"sm",variant:"primary",to:"/customers/create"}},[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"PlusIcon"}}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("Create Customer")])],1):t._e()],1),t._v(" "),s("b-col",{staticClass:"text-right",attrs:{cols:"6","align-h":"center"}},[s("b-input-group",{staticStyle:{position:"relative",top:"13px"}},[s("b-input-group-prepend",{attrs:{"is-text":""}},[s("feather-icon",{attrs:{icon:"SearchIcon"}})],1),t._v(" "),s("b-form-input",{attrs:{id:"search",size:"sm",placeholder:"Search"},on:{change:t.browseCustomers},model:{value:t.customers.search,callback:function(e){t.$set(t.customers,"search",e)},expression:"customers.search"}})],1)],1),t._v(" "),s("b-col",{attrs:{cols:"12"}},[s("b-table",{attrs:{responsive:"",outlined:!0,items:t.customers.data,fields:t.customers.fields,"head-variant":"dark"},scopedSlots:t._u([{key:"cell(index)",fn:function(e){return[t._v("\n                  "+t._s(t.customers.meta.current_page*t.customers.recordsPerPage-t.customers.recordsPerPage+e.index+1)+"\n                ")]}},{key:"cell(created_at)",fn:function(e){return[t._v("\n                  "+t._s(t._f("date")(e.item.created_at,!0))+" - "+t._s(t._f("time")(e.item.created_at))+"\n                ")]}},{key:"cell(action)",fn:function(e){return[s("span",{staticClass:"text-nowrap"},[t.can("view_customer")?s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon rounded-circle",attrs:{title:"View Customer",variant:"primary",to:"/customers/"+e.item.id}},[s("feather-icon",{attrs:{icon:"EyeIcon"}})],1):t._e(),t._v(" "),t.can("edit_customer")?s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-warning",modifiers:{hover:!0,"v-warning":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon rounded-circle ml-1",attrs:{title:"Edit Customer",variant:"warning",to:"/customers/"+e.item.id+"/edit"}},[s("feather-icon",{attrs:{icon:"EditIcon"}})],1):t._e(),t._v(" "),t.can("destroy_customer")?s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-danger",modifiers:{hover:!0,"v-danger":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon rounded-circle ml-1",attrs:{title:"Delete Customer",variant:"danger"},on:{click:function(s){return t.deleteCustomer(e)}}},[s("feather-icon",{attrs:{icon:"TrashIcon"}})],1):t._e()],1)]}}])})],1),t._v(" "),s("b-col",{staticClass:"my-1",attrs:{md:"2",sm:"4",xs:"4"}},[s("b-form-group",{staticClass:"mb-0"},[s("label",{staticClass:"d-inline-block text-sm-left mr-50"},[t._v("Per page")]),t._v(" "),s("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.customers.paginateOptions},on:{change:function(e){return t.browseCustomers(1)}},model:{value:t.customers.recordsPerPage,callback:function(e){t.$set(t.customers,"recordsPerPage",e)},expression:"customers.recordsPerPage"}})],1)],1),t._v(" "),s("b-col",{staticClass:"my-1",attrs:{md:"10",sm:"8",xs:"8"}},[s("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.customers.meta.total,"per-page":t.customers.recordsPerPage,align:"right","first-number":"","last-number":"","prev-class":"prev-item","next-class":"next-item"},on:{change:t.browseCustomers},scopedSlots:t._u([{key:"prev-text",fn:function(){return[s("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"18"}})]},proxy:!0},{key:"next-text",fn:function(){return[s("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"18"}})]},proxy:!0}]),model:{value:t.customers.meta.current_page,callback:function(e){t.$set(t.customers.meta,"current_page",e)},expression:"customers.meta.current_page"}})],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=i.exports},fEXY:function(t,e,s){var o=s("5o0u");"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(o,r);o.locals&&(t.exports=o.locals)},o1KL:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".toastification-close-icon[data-v-13ed5408],.toastification-title[data-v-13ed5408]{line-height:26px}.toastification-title[data-v-13ed5408]{color:inherit}",""])},vtjB:function(t,e,s){"use strict";s("fEXY")}}]);