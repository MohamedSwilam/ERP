(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"1w2d":function(e,t,s){"use strict";var i={components:{BAvatar:s("G/QR").a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},o=(s("MOdh"),s("KHd+")),r=Object(o.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"toastification"},[s("div",{staticClass:"d-flex align-items-start"},[s("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:e.variant,size:"1.8rem"}},[s("feather-icon",{attrs:{icon:e.icon,size:"15"}})],1),e._v(" "),s("div",{staticClass:"d-flex flex-grow-1"},[s("div",[e.title?s("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+e.variant,domProps:{textContent:e._s(e.title)}}):e._e(),e._v(" "),e.text?s("small",{staticClass:"d-inline-block text-body",domProps:{textContent:e._s(e.text)}}):e._e()]),e._v(" "),s("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(t){return e.$emit("close-toast")}}},[e.hideClose?e._e():s("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"13ed5408",null);t.a=r.exports},"4cv3":function(e,t,s){"use strict";var i={bind:function(e,t){var s={event:"mousedown",transition:600};!function(e,t){e.forEach((function(e){isNaN(Number(e))?t.event=e:t.transition=e}))}(Object.keys(t.modifiers),s),e.addEventListener(s.event,(function(i){!function(e,t){var i=t,n=parseInt(getComputedStyle(i).borderWidth.replace("px","")),a=i.getBoundingClientRect(),l=a.left,c=a.top,d=i.offsetWidth,u=i.offsetHeight,p=e.clientX-l,m=e.clientY-c,f=Math.max(p,d-p),h=Math.max(m,u-m),v=window.getComputedStyle(i),b=Math.sqrt(f*f+h*h),g=n>0?n:0,y=document.createElement("div"),x=document.createElement("div");x.className="ripple-container",y.className="ripple",y.style.marginTop="0px",y.style.marginLeft="0px",y.style.width="1px",y.style.height="1px",y.style.transition="all "+s.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",y.style.borderRadius="50%",y.style.pointerEvents="none",y.style.position="relative",y.style.zIndex=r,y.style.backgroundColor=o,x.style.position="absolute",x.style.left=0-g+"px",x.style.top=0-g+"px",x.style.height="0",x.style.width="0",x.style.pointerEvents="none",x.style.overflow="hidden";var C=i.style.position.length>0?i.style.position:getComputedStyle(i).position;"relative"!==C&&(i.style.position="relative");function _(){setTimeout((function(){y.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){x.parentNode.removeChild(x)}),850),t.removeEventListener("mouseup",_,!1),setTimeout((function(){for(var e=!0,t=0;t<i.childNodes.length;t++)"ripple-container"===i.childNodes[t].className&&(e=!1);e&&(i.style.position="static"!==C?C:"")}),s.transition+250)}x.appendChild(y),i.appendChild(x),y.style.marginLeft=p+"px",y.style.marginTop=m+"px",x.style.width=d+"px",x.style.height=u+"px",x.style.borderTopLeftRadius=v.borderTopLeftRadius,x.style.borderTopRightRadius=v.borderTopRightRadius,x.style.borderBottomLeftRadius=v.borderBottomLeftRadius,x.style.borderBottomRightRadius=v.borderBottomRightRadius,x.style.direction="ltr",setTimeout((function(){y.style.width=2*b+"px",y.style.height=2*b+"px",y.style.marginLeft=p-b+"px",y.style.marginTop=m-b+"px"}),0),"mousedown"===e.type?t.addEventListener("mouseup",_,!1):_()}(i,e,t.value)}));var o=t.value||i.color||"rgba(0, 0, 0, 0.35)",r=i.zIndex||"9999"}};t.a=i},DEUr:function(e,t,s){var i=s("o1KL");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(i,o);i.locals&&(e.exports=i.locals)},IEG4:function(e,t,s){"use strict";s("QfFo")},MOdh:function(e,t,s){"use strict";s("DEUr")},QfFo:function(e,t,s){var i=s("y9Jb");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(i,o);i.locals&&(e.exports=i.locals)},lcCk:function(e,t,s){"use strict";s.r(t);var i=s("4cv3"),o=s("1w2d"),r={name:"Edit",directives:{Ripple:i.a},data:function(){return{role:{permissions:{},selectedGroups:[],isCardLoading:!1,isLoading:!1,form:{name:"",is_core:!1,permissions:[]}}}},mounted:function(){this.browsePermissions()},methods:{browsePermissions:function(){var e=this;this.role.isCardLoading=!0,this.$store.dispatch("rolesAndPermissions/getPermissions","").then((function(t){e.role.permissions=e.groupPermissions(t.data.data),e.viewRole()})).catch((function(t){console.log(t),e.role.isCardLoading=!1}))},groupPermissions:function(e){var t={};return e.forEach((function(e){t.hasOwnProperty(e.group)?t[e.group].push(e):t[e.group]=[e]})),t},viewRole:function(){var e=this;this.$store.dispatch("rolesAndPermissions/view",this.$route.params.id).then((function(t){e.role.form.name=t.data.data.name,e.checkPermissions(t.data.data.permissions),e.role.isCardLoading=!1})).catch((function(t){console.error(t),e.role.isCardLoading=!1}))},checkPermissions:function(e){var t=this;this.role.form.permissions=[],e.forEach((function(e){t.role.form.permissions.push(e.name)})),Object.keys(this.role.permissions).forEach((function(e){var s=!0;t.role.permissions[e].forEach((function(e){t.role.form.permissions.includes(e.name)||(s=!1)})),s&&t.role.selectedGroups.push(e)}))},groupPressed:function(e){if(this.role.selectedGroups.includes(e))for(var t=0;t<this.role.permissions[e].length;t+=1)this.role.form.permissions.includes(this.role.permissions[e][t].name)||this.role.form.permissions.push(this.role.permissions[e][t].name);else for(var s=0;s<this.role.permissions[e].length;s+=1)this.role.form.permissions.includes(this.role.permissions[e][s].name)&&this.role.form.permissions.splice(this.role.form.permissions.indexOf(this.role.permissions[e][s].name),1)},editRole:function(){var e=this;this.role.isLoading=!0,this.$store.dispatch("rolesAndPermissions/update",{id:this.$route.params.id,data:this.role.form}).then((function(t){e.role.isLoading=!1,e.$toast({component:o.a,props:{title:"Success",icon:"CheckCircleIcon",text:t.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3}),e.$router.push("/roles/".concat(t.data.data.id))})).catch((function(t){e.$refs.editRoleForm.setErrors(t.response.data.errors),e.role.isLoading=!1}))},reset:function(){this.viewRole()}}},n=(s("IEG4"),s("KHd+")),a=Object(n.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{attrs:{id:"role-form"}},[s("b-container",[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-overlay",{attrs:{show:e.role.isCardLoading,rounded:"sm"}},[s("b-card-actions",{ref:"editRole",attrs:{title:"Edit Role","action-collapse":""}},[s("validation-observer",{ref:"editRoleForm",scopedSlots:e._u([{key:"default",fn:function(t){var i=t.handleSubmit;return[s("b-form",{on:{submit:function(t){return t.preventDefault(),i(e.editRole)}}},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-form-group",{attrs:{label:"Name","label-for":"name"}},[s("validation-provider",{attrs:{rules:"required",name:"Name",vid:"name"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[s("b-input-group",{class:0===i.length?"":"is-invalid"},[s("b-input-group-prepend",{attrs:{"is-text":""}},[s("feather-icon",{attrs:{icon:"ShieldIcon"}})],1),e._v(" "),s("b-form-input",{attrs:{id:"name",state:!(i.length>0)&&null,placeholder:"Name",disabled:""},model:{value:e.role.form.name,callback:function(t){e.$set(e.role.form,"name",t)},expression:"role.form.name"}})],1),e._v(" "),s("small",{staticClass:"text-danger"},[e._v(e._s(i[0]))])]}}],null,!0)})],1)],1),e._v(" "),s("b-col",{attrs:{cols:"12"}},[s("h6",[e._v("Permissions:")]),e._v(" "),s("b-row",e._l(Object.keys(e.role.permissions),(function(t,i){return s("b-col",{key:i,staticClass:"mb-2",attrs:{lg:"4",md:"6",sm:"12",xs:"12"}},[s("ul",[s("li",[s("b-form-checkbox",{attrs:{value:t},on:{change:function(s){return e.groupPressed(t)}},model:{value:e.role.selectedGroups,callback:function(t){e.$set(e.role,"selectedGroups",t)},expression:"role.selectedGroups"}},[s("b",[e._v(e._s(e._f("capitalize")(t)))])])],1),e._v(" "),s("ul",e._l(e.role.permissions[t],(function(t,i){return s("li",{key:"p-"+i},[s("b-form-checkbox",{attrs:{value:t.name},model:{value:e.role.form.permissions,callback:function(t){e.$set(e.role.form,"permissions",t)},expression:"role.form.permissions"}},[e._v("\n                                "+e._s(e._f("capitalize")(t.name))+"\n                              ")])],1)})),0)])])})),1)],1),e._v(" "),s("b-col",{attrs:{cols:"12"}},[s("b-container",[s("b-row",{staticClass:"mt-1",attrs:{"align-h":"center"}},[s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{type:"submit",disabled:e.role.isLoading,variant:"primary"}},[e.role.isLoading?[s("b-spinner",{attrs:{small:""}}),e._v("\n                            Loading...\n                          ")]:[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"SaveIcon"}}),e._v(" "),s("span",{staticClass:"align-middle"},[e._v("Submit")])]],2),e._v(" "),s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-warning"},on:{click:e.reset}},[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"RefreshCcwIcon"}}),e._v(" "),s("span",{staticClass:"align-middle"},[e._v("Reset")])],1)],1)],1)],1)],1)],1)]}}])})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=a.exports},o1KL:function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,".toastification-close-icon[data-v-13ed5408],.toastification-title[data-v-13ed5408]{line-height:26px}.toastification-title[data-v-13ed5408]{color:inherit}",""])},y9Jb:function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,"#role-form li,#role-form ul{list-style-type:none;text-decoration:none}#role-form .weak-text{color:grey;position:relative;top:-5px;font-size:12px}",""])}}]);