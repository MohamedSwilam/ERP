(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"1w2d":function(t,e,s){"use strict";var a={components:{BAvatar:s("G/QR").a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},n=(s("MOdh"),s("KHd+")),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"toastification"},[s("div",{staticClass:"d-flex align-items-start"},[s("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[s("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),s("div",{staticClass:"d-flex flex-grow-1"},[s("div",[t.title?s("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?s("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),s("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():s("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"13ed5408",null);e.a=i.exports},"4cv3":function(t,e,s){"use strict";var a={bind:function(t,e){var s={event:"mousedown",transition:600};!function(t,e){t.forEach((function(t){isNaN(Number(t))?e.event=t:e.transition=t}))}(Object.keys(e.modifiers),s),t.addEventListener(s.event,(function(a){!function(t,e){var a=e,o=parseInt(getComputedStyle(a).borderWidth.replace("px","")),l=a.getBoundingClientRect(),r=l.left,c=l.top,d=a.offsetWidth,m=a.offsetHeight,v=t.clientX-r,u=t.clientY-c,b=Math.max(v,d-v),p=Math.max(u,m-u),_=window.getComputedStyle(a),g=Math.sqrt(b*b+p*p),f=o>0?o:0,h=document.createElement("div"),y=document.createElement("div");y.className="ripple-container",h.className="ripple",h.style.marginTop="0px",h.style.marginLeft="0px",h.style.width="1px",h.style.height="1px",h.style.transition="all "+s.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",h.style.borderRadius="50%",h.style.pointerEvents="none",h.style.position="relative",h.style.zIndex=i,h.style.backgroundColor=n,y.style.position="absolute",y.style.left=0-f+"px",y.style.top=0-f+"px",y.style.height="0",y.style.width="0",y.style.pointerEvents="none",y.style.overflow="hidden";var C=a.style.position.length>0?a.style.position:getComputedStyle(a).position;"relative"!==C&&(a.style.position="relative");function x(){setTimeout((function(){h.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){y.parentNode.removeChild(y)}),850),e.removeEventListener("mouseup",x,!1),setTimeout((function(){for(var t=!0,e=0;e<a.childNodes.length;e++)"ripple-container"===a.childNodes[e].className&&(t=!1);t&&(a.style.position="static"!==C?C:"")}),s.transition+250)}y.appendChild(h),a.appendChild(y),h.style.marginLeft=v+"px",h.style.marginTop=u+"px",y.style.width=d+"px",y.style.height=m+"px",y.style.borderTopLeftRadius=_.borderTopLeftRadius,y.style.borderTopRightRadius=_.borderTopRightRadius,y.style.borderBottomLeftRadius=_.borderBottomLeftRadius,y.style.borderBottomRightRadius=_.borderBottomRightRadius,y.style.direction="ltr",setTimeout((function(){h.style.width=2*g+"px",h.style.height=2*g+"px",h.style.marginLeft=v-g+"px",h.style.marginTop=u-g+"px"}),0),"mousedown"===t.type?e.addEventListener("mouseup",x,!1):x()}(a,t,e.value)}));var n=e.value||a.color||"rgba(0, 0, 0, 0.35)",i=a.zIndex||"9999"}};e.a=a},DEUr:function(t,e,s){var a=s("o1KL");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,n);a.locals&&(t.exports=a.locals)},MOdh:function(t,e,s){"use strict";s("DEUr")},o1KL:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".toastification-close-icon[data-v-13ed5408],.toastification-title[data-v-13ed5408]{line-height:26px}.toastification-title[data-v-13ed5408]{color:inherit}",""])},yvmo:function(t,e,s){"use strict";s.r(e);var a=s("4cv3"),n=s("1w2d"),i={name:"ViewEvent",directives:{Ripple:a.a},data:function(){return{events:{isLoading:!1,isLoadingDelete:!1,data:{id:1,title:"Event Title A",type:"Type A",instructor:"Instructor Name",budget:300,num_of_attendance:5,expenses:0,revenue:0,target_segment:"Target Segment",customer:{id:2,name:"Mohamed Swilam"},created_by:{id:3,name:"Mohamed Swilam"},created_at:(new Date).getTime(),updated_at:(new Date).getTime(),isDeleted:!1}}}},mounted:function(){},methods:{viewEvent:function(){var t=this;this.events.isLoading=!0,this.$store.dispatch("events/view",this.$route.params.id).then((function(e){t.events.data=e.data.data,t.events.isLoading=!1})).catch((function(e){console.error(e),t.events.isLoading=!1}))},deleteEvent:function(t){var e=this;this.$bvModal.msgBoxConfirm("You will not be able to retrieve this again!",{title:"Are you sure?",size:"sm",okTitle:"Yes, Delete",okVariant:"danger",cancelTitle:"Cancel",cancelVariant:"outline-primary",centered:!0}).then((function(s){s&&(e.events.isLoadingDelete=!0,e.$store.dispatch("events/delete",t).then((function(t){e.events.isLoadingDelete=!1,e.$toast({component:n.a,props:{title:"Success",icon:"CheckCircleIcon",text:t.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3}),e.$router.push("/eventss")})).catch((function(t){console.error(t),e.events.isLoadingDelete=!1})))}))}}},o=s("KHd+"),l=Object(o.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-overlay",{attrs:{show:t.events.isLoading,rounded:"sm"}},[s("b-card-actions",{ref:"eventsCard",attrs:{title:"Event Details","action-collapse":""}},[s("b-row",[s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("ID")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"10",md:"10",sm:"10"}},[t._v("\n              "+t._s(t.events.data.id)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Title")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.events.data.title)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Customer")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[s("router-link",{attrs:{to:"/customers/"+t.events.data.customer.id}},[t._v("\n                "+t._s(t.events.data.customer.name)+"\n              ")])],1),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Event Type")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.events.data.type)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Instructor")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.events.data.instructor)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Number Of Attendance")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.events.data.num_of_attendance)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Budget")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.events.data.budget)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Expenses")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.events.data.expenses)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Revenue")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.events.data.revenue)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Target Segment")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t.events.data.target_segment)+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Created By")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[s("router-link",{attrs:{to:"/users/"+t.events.data.created_by.id}},[t._v("\n                "+t._s(t.events.data.created_by.name)+"\n              ")])],1),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Created At")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t._f("date")(t.events.data.created_at,!0))+" - "+t._s(t._f("time")(t.events.data.created_at))+"\n            ")]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"4",lg:"2",md:"2",sm:"2"}},[s("b",[t._v("Updated At")])]),t._v(" "),s("b-col",{staticClass:"mb-1",attrs:{cols:"8",lg:"4",md:"4",sm:"10"}},[t._v("\n              "+t._s(t._f("date")(t.events.data.updated_at,!0))+" - "+t._s(t._f("time")(t.events.data.updated_at))+"\n            ")])],1),t._v(" "),s("hr"),t._v(" "),s("b-container",[s("b-row",{staticClass:"mt-1",attrs:{"align-h":"center"}},[s("b-col",{staticStyle:{"text-align":"center"},attrs:{cols:"12"}},[t.can("edit_events")?s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"warning",to:"/calendar?edit=3"}},[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"EditIcon"}}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("Edit Event")])],1):t._e(),t._v(" "),t.can("destroy_events")?s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"ml-1",attrs:{disabled:t.events.isLoadingDelete,variant:"danger"},on:{click:function(e){return t.deleteEvent(t.events.data.id)}}},[t.events.isLoadingDelete?[s("b-spinner",{attrs:{small:""}}),t._v("\n                    Loading...\n                  ")]:[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"TrashIcon"}}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("Delete Event")])]],2):t._e()],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"3ade8fc2",null);e.default=l.exports}}]);