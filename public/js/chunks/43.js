(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"1w2d":function(t,e,s){"use strict";var a={components:{BAvatar:s("G/QR").a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},i=(s("MOdh"),s("KHd+")),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"toastification"},[s("div",{staticClass:"d-flex align-items-start"},[s("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[s("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),s("div",{staticClass:"d-flex flex-grow-1"},[s("div",[t.title?s("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?s("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),s("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():s("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"13ed5408",null);e.a=o.exports},"4cv3":function(t,e,s){"use strict";var a={bind:function(t,e){var s={event:"mousedown",transition:600};!function(t,e){t.forEach((function(t){isNaN(Number(t))?e.event=t:e.transition=t}))}(Object.keys(e.modifiers),s),t.addEventListener(s.event,(function(a){!function(t,e){var a=e,n=parseInt(getComputedStyle(a).borderWidth.replace("px","")),l=a.getBoundingClientRect(),r=l.left,c=l.top,d=a.offsetWidth,m=a.offsetHeight,p=t.clientX-r,u=t.clientY-c,v=Math.max(p,d-p),b=Math.max(u,m-u),f=window.getComputedStyle(a),g=Math.sqrt(v*v+b*b),h=n>0?n:0,_=document.createElement("div"),y=document.createElement("div");y.className="ripple-container",_.className="ripple",_.style.marginTop="0px",_.style.marginLeft="0px",_.style.width="1px",_.style.height="1px",_.style.transition="all "+s.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",_.style.borderRadius="50%",_.style.pointerEvents="none",_.style.position="relative",_.style.zIndex=o,_.style.backgroundColor=i,y.style.position="absolute",y.style.left=0-h+"px",y.style.top=0-h+"px",y.style.height="0",y.style.width="0",y.style.pointerEvents="none",y.style.overflow="hidden";var C=a.style.position.length>0?a.style.position:getComputedStyle(a).position;"relative"!==C&&(a.style.position="relative");function x(){setTimeout((function(){_.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){y.parentNode.removeChild(y)}),850),e.removeEventListener("mouseup",x,!1),setTimeout((function(){for(var t=!0,e=0;e<a.childNodes.length;e++)"ripple-container"===a.childNodes[e].className&&(t=!1);t&&(a.style.position="static"!==C?C:"")}),s.transition+250)}y.appendChild(_),a.appendChild(y),_.style.marginLeft=p+"px",_.style.marginTop=u+"px",y.style.width=d+"px",y.style.height=m+"px",y.style.borderTopLeftRadius=f.borderTopLeftRadius,y.style.borderTopRightRadius=f.borderTopRightRadius,y.style.borderBottomLeftRadius=f.borderBottomLeftRadius,y.style.borderBottomRightRadius=f.borderBottomRightRadius,y.style.direction="ltr",setTimeout((function(){_.style.width=2*g+"px",_.style.height=2*g+"px",_.style.marginLeft=p-g+"px",_.style.marginTop=u-g+"px"}),0),"mousedown"===t.type?e.addEventListener("mouseup",x,!1):x()}(a,t,e.value)}));var i=e.value||a.color||"rgba(0, 0, 0, 0.35)",o=a.zIndex||"9999"}};e.a=a},DEUr:function(t,e,s){var a=s("o1KL");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,i);a.locals&&(t.exports=a.locals)},MOdh:function(t,e,s){"use strict";s("DEUr")},eMIF:function(t,e,s){"use strict";s.r(e);var a=s("4cv3"),i=s("1w2d"),o={name:"ViewRole",directives:{Ripple:a.a},data:function(){return{role:{isLoading:!1,isLoadingDelete:!1,data:{id:1,name:"Super Admin",is_core:!0,createdAt:(new Date).getTime(),updatedAt:(new Date).getTime(),isDeleted:!1,permissions:[]}}}},mounted:function(){this.viewRole()},methods:{viewRole:function(){var t=this;this.role.isLoading=!0,this.$store.dispatch("rolesAndPermissions/view",this.$route.params.id).then((function(e){t.role.data=e.data.data,t.role.isLoading=!1})).catch((function(e){console.error(e),t.role.isLoading=!1}))},deleteRole:function(t){var e=this;this.$bvModal.msgBoxConfirm("You will not be able to retrieve this again!",{title:"Are you sure?",size:"sm",okTitle:"Yes, Delete",okVariant:"danger",cancelTitle:"Cancel",cancelVariant:"outline-primary",centered:!0}).then((function(s){s&&(e.role.isLoadingDelete=!0,e.$store.dispatch("rolesAndPermissions/delete",t).then((function(t){e.role.isLoadingDelete=!1,e.$toast({component:i.a,props:{title:"Success",icon:"CheckCircleIcon",text:t.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3}),e.$router.push("/roles")})).catch((function(t){console.error(t),e.role.isLoadingDelete=!1})))}))}}},n=s("KHd+"),l=Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-overlay",{attrs:{show:t.role.isLoading,rounded:"sm"}},[s("b-card-actions",{ref:"roleCard",attrs:{title:"Role Details","action-collapse":""}},[s("b-row",[s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("ID")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"10",md:"10",sm:"10"}},[t._v("\n              "+t._s(t.role.data.id)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("is Core?")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[s("b-badge",{attrs:{variant:t.role.data.core?"success":"danger"}},[t._v("\n                "+t._s(t.role.data.core?"Yes":"No")+"\n              ")])],1),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Name")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.role.data.name)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Created At")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t._f("date")(t.role.data.created_at,!0))+" - "+t._s(t._f("time")(t.role.data.created_at))+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Updated At")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t._f("date")(t.role.data.updated_at,!0))+" - "+t._s(t._f("time")(t.role.data.updated_at))+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"12"}},[s("b",[t._v("Permissions")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"12"}},t._l(t.role.data.permissions,(function(e,a){return s("b-badge",{key:a,staticClass:"ml-1 mb-1",attrs:{variant:"primary"}},[t._v("\n                "+t._s(t._f("capitalize")(e.name))+"\n              ")])})),1)],1),t._v(" "),s("hr"),t._v(" "),s("b-container",[s("b-row",{staticClass:"mt-1",attrs:{"align-h":"center"}},[s("b-col",{staticStyle:{"text-align":"center"},attrs:{cols:"12"}},[t.can("update_role")?s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"warning",to:"/roles/"+t.role.data.id+"/edit"}},[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"EditIcon"}}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("Edit Role")])],1):t._e(),t._v(" "),t.can("delete_role")&&!t.role.data.core?s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"ml-1",attrs:{disabled:t.role.isLoadingDelete,variant:"danger"},on:{click:function(e){return t.deleteRole(t.role.data.id)}}},[t.role.isLoadingDelete?[s("b-spinner",{attrs:{small:""}}),t._v("\n                    Loading...\n                  ")]:[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"TrashIcon"}}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("Delete Role")])]],2):t._e()],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"1ccf47e2",null);e.default=l.exports},o1KL:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".toastification-close-icon[data-v-13ed5408],.toastification-title[data-v-13ed5408]{line-height:26px}.toastification-title[data-v-13ed5408]{color:inherit}",""])}}]);