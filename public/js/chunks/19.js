(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"0LR/":function(e,s,t){var r=t("GvV4");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,o);r.locals&&(e.exports=r.locals)},"1w2d":function(e,s,t){"use strict";var r={components:{BAvatar:t("G/QR").a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},o=(t("MOdh"),t("KHd+")),i=Object(o.a)(r,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"toastification"},[t("div",{staticClass:"d-flex align-items-start"},[t("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:e.variant,size:"1.8rem"}},[t("feather-icon",{attrs:{icon:e.icon,size:"15"}})],1),e._v(" "),t("div",{staticClass:"d-flex flex-grow-1"},[t("div",[e.title?t("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+e.variant,domProps:{textContent:e._s(e.title)}}):e._e(),e._v(" "),e.text?t("small",{staticClass:"d-inline-block text-body",domProps:{textContent:e._s(e.text)}}):e._e()]),e._v(" "),t("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(s){return e.$emit("close-toast")}}},[e.hideClose?e._e():t("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"13ed5408",null);s.a=i.exports},"4cv3":function(e,s,t){"use strict";var r={bind:function(e,s){var t={event:"mousedown",transition:600};!function(e,s){e.forEach((function(e){isNaN(Number(e))?s.event=e:s.transition=e}))}(Object.keys(s.modifiers),t),e.addEventListener(t.event,(function(r){!function(e,s){var r=s,n=parseInt(getComputedStyle(r).borderWidth.replace("px","")),a=r.getBoundingClientRect(),l=a.left,u=a.top,c=r.offsetWidth,d=r.offsetHeight,m=e.clientX-l,p=e.clientY-u,f=Math.max(m,c-m),v=Math.max(p,d-p),h=window.getComputedStyle(r),b=Math.sqrt(f*f+v*v),g=n>0?n:0,x=document.createElement("div"),y=document.createElement("div");y.className="ripple-container",x.className="ripple",x.style.marginTop="0px",x.style.marginLeft="0px",x.style.width="1px",x.style.height="1px",x.style.transition="all "+t.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",x.style.borderRadius="50%",x.style.pointerEvents="none",x.style.position="relative",x.style.zIndex=i,x.style.backgroundColor=o,y.style.position="absolute",y.style.left=0-g+"px",y.style.top=0-g+"px",y.style.height="0",y.style.width="0",y.style.pointerEvents="none",y.style.overflow="hidden";var _=r.style.position.length>0?r.style.position:getComputedStyle(r).position;"relative"!==_&&(r.style.position="relative");function w(){setTimeout((function(){x.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){y.parentNode.removeChild(y)}),850),s.removeEventListener("mouseup",w,!1),setTimeout((function(){for(var e=!0,s=0;s<r.childNodes.length;s++)"ripple-container"===r.childNodes[s].className&&(e=!1);e&&(r.style.position="static"!==_?_:"")}),t.transition+250)}y.appendChild(x),r.appendChild(y),x.style.marginLeft=m+"px",x.style.marginTop=p+"px",y.style.width=c+"px",y.style.height=d+"px",y.style.borderTopLeftRadius=h.borderTopLeftRadius,y.style.borderTopRightRadius=h.borderTopRightRadius,y.style.borderBottomLeftRadius=h.borderBottomLeftRadius,y.style.borderBottomRightRadius=h.borderBottomRightRadius,y.style.direction="ltr",setTimeout((function(){x.style.width=2*b+"px",x.style.height=2*b+"px",x.style.marginLeft=m-b+"px",x.style.marginTop=p-b+"px"}),0),"mousedown"===e.type?s.addEventListener("mouseup",w,!1):w()}(r,e,s.value)}));var o=s.value||r.color||"rgba(0, 0, 0, 0.35)",i=r.zIndex||"9999"}};s.a=r},DEUr:function(e,s,t){var r=t("o1KL");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,o);r.locals&&(e.exports=r.locals)},GvV4:function(e,s,t){(e.exports=t("I1BE")(!1)).push([e.i,"#user-form li,#user-form ul{list-style-type:none;text-decoration:none}",""])},MOdh:function(e,s,t){"use strict";t("DEUr")},o1KL:function(e,s,t){(e.exports=t("I1BE")(!1)).push([e.i,".toastification-close-icon[data-v-13ed5408],.toastification-title[data-v-13ed5408]{line-height:26px}.toastification-title[data-v-13ed5408]{color:inherit}",""])},tltj:function(e,s,t){"use strict";t.r(s);var r=t("4cv3"),o=t("1w2d"),i={name:"CreateUser",directives:{Ripple:r.a},data:function(){return{user:{isCardLoading:!1,isLoading:!1,roles:[],permissions:{},selectedGroups:[],form:{roles:[],permissions:[],name:"",email:"",password:"",password_confirmation:""}}}},mounted:function(){this.browseRoles()},methods:{browseRoles:function(){var e=this;this.user.isCardLoading=!0,this.$store.dispatch("rolesAndPermissions/browse","").then((function(s){e.user.roles=s.data.data,e.browsePermissions()})).catch((function(s){console.error(s),e.user.isCardLoading=!1}))},browsePermissions:function(){var e=this;this.$store.dispatch("rolesAndPermissions/getPermissions","").then((function(s){e.user.permissions=e.groupPermissions(s.data.data),e.user.isCardLoading=!1})).catch((function(s){console.error(s),e.user.isCardLoading=!1}))},groupPermissions:function(e){var s={};return e.forEach((function(e){s.hasOwnProperty(e.group)?s[e.group].push(e):s[e.group]=[e]})),s},groupPressed:function(e){if(this.user.selectedGroups.includes(e))for(var s=0;s<this.user.permissions[e].length;s+=1)this.user.form.permissions.includes(this.user.permissions[e][s].name)||this.user.form.permissions.push(this.user.permissions[e][s].name);else for(var t=0;t<this.user.permissions[e].length;t+=1)this.user.form.permissions.includes(this.user.permissions[e][t].name)&&this.user.form.permissions.splice(this.user.form.permissions.indexOf(this.user.permissions[e][t].name),1)},updatePermissionsCheckboxes:function(){var e=this,s=[];this.user.roles.filter((function(s){return e.user.form.roles.includes(s.name)})).forEach((function(e){e.permissions.forEach((function(e){s.includes(e.name)||s.push(e.name)}))})),this.user.form.permissions=s,this.updatePermissionGroupsCheckboxes()},updatePermissionGroupsCheckboxes:function(){var e=this;Object.keys(this.user.permissions).forEach((function(s){var t=!0;e.user.permissions[s].forEach((function(s){e.user.form.permissions.includes(s.name)||(t=!1)})),t?e.user.selectedGroups.includes(s)||e.user.selectedGroups.push(s):e.user.selectedGroups=e.user.selectedGroups.filter((function(e){return e!==s}))}))},createUser:function(){var e=this;this.user.isLoading=!0,this.$store.dispatch("user/create",this.user.form).then((function(s){e.user.isLoading=!1,e.$toast({component:o.a,props:{title:"Success",icon:"CheckCircleIcon",text:s.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3}),e.$router.push("/users/".concat(s.data.data.id))})).catch((function(s){e.$refs.createUserForm.setErrors(s.response.data.errors),e.user.isLoading=!1}))},reset:function(){this.user.form.role=[],this.user.form.permissions=[],this.user.form.name="",this.user.form.email="",this.user.form.password="",this.user.form.password_confirmation=""}}},n=(t("zG8o"),t("KHd+")),a=Object(n.a)(i,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{attrs:{id:"user-form"}},[t("b-container",[t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("b-overlay",{attrs:{show:e.user.isCardLoading,rounded:"sm"}},[t("b-card-actions",{ref:"createUser",attrs:{title:"Create User","action-collapse":""}},[t("validation-observer",{ref:"createUserForm",scopedSlots:e._u([{key:"default",fn:function(s){var r=s.handleSubmit;return[t("b-form",{on:{submit:function(s){return s.preventDefault(),r(e.createUser)}}},[t("b-row",[t("b-col",{attrs:{lg:"12",md:"12",sm:"12",xs:"12"}},[t("b-form-group",{attrs:{label:"User Roles"}},[t("validation-provider",{attrs:{rules:"required",name:"Role",vid:"role"},scopedSlots:e._u([{key:"default",fn:function(s){var r=s.errors;return[e._l(e.user.roles,(function(s){return t("b-form-checkbox",{key:s.name,attrs:{value:s.name,name:"flavour-3a",inline:""},on:{change:e.updatePermissionsCheckboxes},model:{value:e.user.form.roles,callback:function(s){e.$set(e.user.form,"roles",s)},expression:"user.form.roles"}},[e._v("\n                          "+e._s(s.name)+"\n                        ")])})),e._v(" "),t("br"),e._v(" "),t("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}],null,!0)})],1)],1),e._v(" "),t("b-col",{attrs:{cols:"12"}},[t("h6",[e._v("Permissions:")]),e._v(" "),t("b-row",e._l(Object.keys(e.user.permissions),(function(s,r){return t("b-col",{key:r,staticClass:"mb-2",attrs:{lg:"4",md:"6",sm:"12",xs:"12"}},[t("ul",[t("li",[t("b-form-checkbox",{attrs:{value:s},on:{change:function(t){return e.groupPressed(s)}},model:{value:e.user.selectedGroups,callback:function(s){e.$set(e.user,"selectedGroups",s)},expression:"user.selectedGroups"}},[t("b",[e._v(e._s(e._f("capitalize")(s)))])])],1),e._v(" "),t("ul",e._l(e.user.permissions[s],(function(s,r){return t("li",{key:"p-"+r},[t("b-form-checkbox",{attrs:{value:s.name},model:{value:e.user.form.permissions,callback:function(s){e.$set(e.user.form,"permissions",s)},expression:"user.form.permissions"}},[e._v("\n                                "+e._s(e._f("capitalize")(s.name))+"\n                              ")])],1)})),0)])])})),1)],1),e._v(" "),t("b-col",{attrs:{lg:"6",md:"6",sm:"12",xs:"12"}},[t("b-form-group",{attrs:{label:"Name","label-for":"name"}},[t("validation-provider",{attrs:{rules:"required",name:"Name",vid:"name"},scopedSlots:e._u([{key:"default",fn:function(s){var r=s.errors;return[t("b-input-group",{class:0===r.length?"":"is-invalid"},[t("b-input-group-prepend",{attrs:{"is-text":""}},[t("feather-icon",{attrs:{icon:"UserIcon"}})],1),e._v(" "),t("b-form-input",{attrs:{id:"name",state:!(r.length>0)&&null,placeholder:"Name"},model:{value:e.user.form.name,callback:function(s){e.$set(e.user.form,"name",s)},expression:"user.form.name"}})],1),e._v(" "),t("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}],null,!0)})],1)],1),e._v(" "),t("b-col",{attrs:{lg:"6",md:"6",sm:"12",xs:"12"}},[t("b-form-group",{attrs:{label:"Email","label-for":"email"}},[t("validation-provider",{attrs:{rules:"required|email",name:"Email",vid:"email"},scopedSlots:e._u([{key:"default",fn:function(s){var r=s.errors;return[t("b-input-group",{class:0===r.length?"":"is-invalid"},[t("b-input-group-prepend",{attrs:{"is-text":""}},[t("feather-icon",{attrs:{icon:"MailIcon"}})],1),e._v(" "),t("b-form-input",{attrs:{id:"code",state:!(r.length>0)&&null,placeholder:"Email"},model:{value:e.user.form.email,callback:function(s){e.$set(e.user.form,"email",s)},expression:"user.form.email"}})],1),e._v(" "),t("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}],null,!0)})],1)],1),e._v(" "),t("b-col",{attrs:{lg:"6",md:"6",sm:"12",xs:"12"}},[t("b-form-group",{attrs:{label:"Password","label-for":"password"}},[t("validation-provider",{attrs:{rules:"required|password",name:"Password",vid:"password"},scopedSlots:e._u([{key:"default",fn:function(s){var r=s.errors;return[t("b-input-group",{class:0===r.length?"":"is-invalid"},[t("b-input-group-prepend",{attrs:{"is-text":""}},[t("feather-icon",{attrs:{icon:"LockIcon"}})],1),e._v(" "),t("b-form-input",{attrs:{id:"password",type:"password",state:!(r.length>0)&&null,placeholder:"Password"},model:{value:e.user.form.password,callback:function(s){e.$set(e.user.form,"password",s)},expression:"user.form.password"}})],1),e._v(" "),t("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}],null,!0)})],1)],1),e._v(" "),t("b-col",{attrs:{lg:"6",md:"6",sm:"12",xs:"12"}},[t("b-form-group",{attrs:{label:"Confirm Password","label-for":"confirm-password"}},[t("validation-provider",{attrs:{rules:"required|confirmed:password",name:"Confirm Password",vid:"confirm-password"},scopedSlots:e._u([{key:"default",fn:function(s){var r=s.errors;return[t("b-input-group",{class:0===r.length?"":"is-invalid"},[t("b-input-group-prepend",{attrs:{"is-text":""}},[t("feather-icon",{attrs:{icon:"LockIcon"}})],1),e._v(" "),t("b-form-input",{attrs:{id:"confirm-password",type:"password",state:!(r.length>0)&&null,placeholder:"Confirm Password"},model:{value:e.user.form.password_confirmation,callback:function(s){e.$set(e.user.form,"password_confirmation",s)},expression:"user.form.password_confirmation"}})],1),e._v(" "),t("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}],null,!0)})],1)],1),e._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-container",[t("b-row",{staticClass:"mt-1",attrs:{"align-h":"center"}},[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{type:"submit",disabled:e.user.isLoading,variant:"primary"}},[e.user.isLoading?[t("b-spinner",{attrs:{small:""}}),e._v("\n                            Loading...\n                          ")]:[t("feather-icon",{staticClass:"mr-50",attrs:{icon:"SaveIcon"}}),e._v(" "),t("span",{staticClass:"align-middle"},[e._v("Submit")])]],2),e._v(" "),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{type:"reset",variant:"warning"},on:{click:e.reset}},[t("feather-icon",{staticClass:"mr-50",attrs:{icon:"RefreshCcwIcon"}}),e._v(" "),t("span",{staticClass:"align-middle"},[e._v("Reset")])],1)],1)],1)],1)],1)],1)]}}])})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);s.default=a.exports},zG8o:function(e,s,t){"use strict";t("0LR/")}}]);