(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0UnL":function(t,a,e){"use strict";e.r(a);var r=e("KHd+"),i=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("svg",{attrs:{viewBox:"0 0 139 95",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",height:"24"}},[e("defs",[e("linearGradient",{attrs:{id:"linearGradient-1",x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%"}},[e("stop",{attrs:{"stop-color":"#000000",offset:"0%"}}),t._v(" "),e("stop",{attrs:{"stop-color":"#FFFFFF",offset:"100%"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"linearGradient-2",x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%"}},[e("stop",{attrs:{"stop-color":"#EEEEEE","stop-opacity":"0",offset:"0%"}}),t._v(" "),e("stop",{attrs:{"stop-color":"#FFFFFF",offset:"100%"}})],1)],1),t._v(" "),e("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{id:"Artboard",transform:"translate(-400.000000, -178.000000)"}},[e("g",{attrs:{id:"Group",transform:"translate(400.000000, 178.000000)"}},[e("path",{staticClass:"text-primary",staticStyle:{fill:"currentColor"},attrs:{id:"Path",d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"}}),t._v(" "),e("path",{attrs:{id:"Path1",d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",fill:"url(#linearGradient-1)",opacity:"0.2"}}),t._v(" "),e("polygon",{attrs:{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}}),t._v(" "),e("polygon",{attrs:{id:"Path-21",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}}),t._v(" "),e("polygon",{attrs:{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"}})])])])])}),[],!1,null,null,null).exports,o=e("dhAQ"),s=e("WHwe"),n=e("1w2d"),l={components:{VuexyLogo:i},mixins:[{data:function(){return{passwordFieldType:"password"}},methods:{togglePasswordVisibility:function(){this.passwordFieldType="password"===this.passwordFieldType?"text":"password"}}}],data:function(){return{password:"",userEmail:"",sideImg:e("7wjf"),required:o.b,email:o.a}},computed:{passwordToggleIcon:function(){return"password"===this.passwordFieldType?"EyeIcon":"EyeOffIcon"},imgUrl:function(){return"dark"===s.a.state.appConfig.layout.skin?(this.sideImg=e("QUcX"),this.sideImg):this.sideImg}},methods:{login:function(){var t=this;this.$store.dispatch("auth/login",{username:this.userEmail,password:this.password,grant_type:"password",client_id:"2",client_secret:"OAmr0mtp1Ud5YqyJoeJhvgsvFMILcbVXl5JLcYlZ"}).then((function(){t.$toast({component:n.a,props:{title:"Welcome Back👋",icon:"CheckCircleIcon",variant:"success"}})})).catch((function(a){t.$toast({component:n.a,props:{title:"Oops..",text:a.response.data.error,icon:"AlertCircleIcon",variant:"danger"}})}))}}},A=(e("fgPP"),Object(r.a)(l,(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"auth-wrapper auth-v2"},[r("b-row",{staticClass:"auth-inner m-0"},[r("b-link",{staticClass:"brand-logo"},[r("b-img",{staticStyle:{position:"relative",top:"-50px","max-width":"300px"},attrs:{alt:"logo",src:e("nvwF")}})],1),t._v(" "),r("b-col",{staticClass:"d-none d-lg-flex align-items-center p-5",attrs:{lg:"8"}},[r("div",{staticClass:"w-100 d-lg-flex align-items-center justify-content-center px-5"},[r("b-img",{attrs:{fluid:"",src:t.imgUrl,alt:"Login V2"}})],1)]),t._v(" "),r("b-col",{staticClass:"d-flex align-items-center auth-bg px-2 p-lg-5",attrs:{lg:"4"}},[r("b-col",{staticClass:"px-xl-2 mx-auto",attrs:{sm:"8",md:"6",lg:"12"}},[r("b-card-title",{staticClass:"font-weight-bold mb-1",attrs:{"title-tag":"h2"}},[t._v("\n          Welcome to Tktbosherp! 👋\n        ")]),t._v(" "),r("b-card-text",{staticClass:"mb-2"},[t._v("\n          Please sign-in to your account and start the adventure\n        ")]),t._v(" "),r("validation-observer",{ref:"loginValidation"},[r("b-form",{staticClass:"auth-login-form mt-2",on:{submit:function(t){t.preventDefault()}}},[r("b-form-group",{attrs:{label:"Email","label-for":"login-email"}},[r("validation-provider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors;return[r("b-form-input",{attrs:{id:"login-email",state:!(e.length>0)&&null,name:"login-email",placeholder:"john@example.com"},model:{value:t.userEmail,callback:function(a){t.userEmail=a},expression:"userEmail"}}),t._v(" "),r("small",{staticClass:"text-danger"},[t._v(t._s(e[0]))])]}}])})],1),t._v(" "),r("b-form-group",[r("div",{staticClass:"d-flex justify-content-between"},[r("label",[t._v("Password")])]),t._v(" "),r("validation-provider",{attrs:{name:"Password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors;return[r("b-input-group",{staticClass:"input-group-merge",class:e.length>0?"is-invalid":null},[r("b-form-input",{staticClass:"form-control-merge",attrs:{id:"login-password",state:!(e.length>0)&&null,type:t.passwordFieldType,name:"login-password",placeholder:"············"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),t._v(" "),r("b-input-group-append",{attrs:{"is-text":""}},[r("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:t.passwordToggleIcon},on:{click:t.togglePasswordVisibility}})],1)],1),t._v(" "),r("small",{staticClass:"text-danger"},[t._v(t._s(e[0]))])]}}])})],1),t._v(" "),r("b-button",{attrs:{type:"submit",variant:"primary",block:""},on:{click:t.login}},[t._v("\n              Sign in\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null));a.default=A.exports},"1w2d":function(t,a,e){"use strict";var r={components:{BAvatar:e("G/QR").a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},i=(e("MOdh"),e("KHd+")),o=Object(i.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(a){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"13ed5408",null);a.a=o.exports},"7wjf":function(t,a){t.exports="/images/_/_/_/_/tktbosherp/frontend/src/assets/images/pages/login-v2.svg"},DEUr:function(t,a,e){var r=e("o1KL");"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(r,i);r.locals&&(t.exports=r.locals)},MOdh:function(t,a,e){"use strict";e("DEUr")},QUcX:function(t,a){t.exports="/images/_/_/_/_/tktbosherp/frontend/src/assets/images/pages/login-v2-dark.svg"},U8Af:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,'.auth-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-preferred-size:100%;flex-basis:100%;min-height:100vh;min-height:calc(var(--vh, 1vh)*100);width:100%}.auth-wrapper .auth-inner{width:100%;position:relative}.auth-wrapper.auth-v1{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden}.auth-wrapper.auth-v1 .auth-inner:before{width:244px;height:243px;content:" ";position:absolute;top:-54px}[dir] .auth-wrapper.auth-v1 .auth-inner:before{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAADzCAMAAACG9Mt0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA9KADAAQAAAABAAAA8wAAAADhQHfUAAAAyVBMVEUAAAD///+AgP+AgP9mZv+AgNWAgP9tbf9gYP+AgP9xcf9mZv+AZuaAgP9dXf90dOhiYv92dv9mZu5mZv93d+53d/9paf94afCAcfFrXvJra/9mZvJzZvJzc/JoaP96b/Rqav91aupsYvV2bOt2bPVxaPZ7cfZqavZyau1waPd4aO9xafBxafh4afB1bfh4avFuZ/F2afJzZvJzZ/N0aPN0bvN3bPR0ae5yZ/R3be93bfR1au9zafBxbPVzavV0a/F0a/ZyafFwaPKZm3nTAAAAQ3RSTlMAAQIEBQYGBwgICQoKCgsLDQ0PDw8PERESExMUFBQWFxgYGhoaGxsdHSAgIiIiIyQlJygqLCwtLi8vLzAzNDU3Nzg7h9vbHgAAA9RJREFUeNrt3ftS2kAUx/Fc1gSyWsErtuJdRDQiiteolb7/QzUoTm07k4AzObuu3/MCez45yWbzT36eZ6b8erO1e1B97baadd+zocJWmg0HaXe/+uqmg2GWtkLT5Lle1m9LdhG2+1lvzuiUO1knEF81yFc1N+35m15kZOGodz1vyLx+v2Lseq/erxtZd/NuweCTtfiwaWLOD5FnsqI7+VnP3y8afnEs3Es/1+H1qvETwuq18B7e6VlwLup1ZM8kWWQBOsrmHL7GVtxvYRZYgQ4ywae61ffsqH5Lbq20bQm6ncp9P2ehJegwE/u+rl95ttSwLrVSc2ANetAU28dSa9Cp2E623bUG3d2VWmn/wBq0XCugQYMGLdVKoOJaoiuok1NdXSW1WAUfRPtRUllflaJf5ZE/O9pXVbZUPTov5c+IDqvtRwStdTgLutoxy6GnGfYb2o+1I2gd+1OiqzfLocvVE7TSDqG1mgodaqfQZbvZC9rXjqG1X45WzqFVKVpk0LLo4lGP0ZGD6KgMnTiITkrQgXYQrYNitHISrYrRsZPouBhdcxJdK0YnTqKTYrR2Eq1BgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRoh9DH59ag86ACoSYOL61B55EUQk1s3VqDzsNHhJpYe7QGncfMSHUxaliCHgcKSXVxeWQJehwdJdXF4dAS9DgkTKqLxuibFeiXODixNi7OrEC/BP+JtbE0WrYA/RrxKNfH2YUF6NegSbk+Gk87xtErN6EsWm88fzeMXpwE9EruLns/l42io4dJFLPo2/Po1w+D6IW7t9Bt2SPx3vOOMfS7eHVZtN54ulg2go56138Ct4XRunE2Ovsmjg46WeddUoUWr6WL0fCoIYgO2/2s91fstDZQjcPL0ePt5flpdXUwqW46uMrS1j95JNpQrW0dHp9UV/uT2m416/8HVGg3qzhpBjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KC/FDpx0pwUo2tOomvF6NhJdFyMVk6iVTE6cBIdeF9vJyvZx/I/AzuIjsrQvoNovwzt4FamSs0Ojrp80PmvoB0zh940pb7azf1yg7t0LIt978uppzbnalfucDW92ZndLPRmKweGPduYJ+zoM5/Dk+gD5NdvLhXXPp88qcUqmEH5G5JZRs6cuxwIAAAAAElFTkSuQmCC")}[dir=ltr] .auth-wrapper.auth-v1 .auth-inner:before{left:-46px}[dir=rtl] .auth-wrapper.auth-v1 .auth-inner:before{right:-46px}@media (max-width:575.98px){.auth-wrapper.auth-v1 .auth-inner:before{display:none}}.auth-wrapper.auth-v1 .auth-inner:after{width:272px;height:272px;content:" ";position:absolute;bottom:-55px;z-index:-1}[dir] .auth-wrapper.auth-v1 .auth-inner:after{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAEQCAMAAABP1NsnAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABEKADAAQAAAABAAABEAAAAAAQWxS2AAAAwFBMVEUAAAD///+AgICAgP9VVaqqVf+qqv+AgL+AgP9mZsxmZv+ZZv+AgNWAgP9tbdttbf+Sbf+AYN+AgN+AgP9xceNmZv+AZuaAZv90dOh0dP9qav+AauqAav+AgP92dv9tbf+Abe2Abf93Zu53d+6AcO94afCAcfF5a+R5a/JzZuaAZvKAc/J5bed5bfOAaPN6b/R1auqAavR6ZvV6cPV2bOuAbPV7aPZ2be2AbfZ7au17avZ3Zu53b+57a+97a/d4aO9J6CoeAAAAQHRSTlMAAQICAwMDBAQFBQUGBgcHBwgICAkKCgoLCwwMDAwNDg4ODw8QERITExQUFBUVFhcYGBkZGhobHBwdHR4eHx8gJ5uMWwAAA/FJREFUeNrt2G1XEkEYxvHZNk2xHGzdbKFl0cTwgdSkCKzu7/+t4pw6sAjtjIueE/f8r3fMO35nZnbuy5gVGcvfzJe0rnTfGI+MggGJRUZnbpPIhJKt88nU53JnFULvyISY6KAv8vPj0vr2rYwiE2Z2B9J+uNYcyyQxwWZvaeGH3G4bMjsvI/kcwTC/V+7kLoahlITzQojP3ZFgsJCh7IJQzpX0QFj4uMiY18eDMZ9bZCF9OQahnK6cm/Y7js0sh/LF3Auv1PlQd3MxbdXYIQspV44EEEAAAWTNDAYYkKdJbNMsLzYueZbaZ2iM46RVbHBaiZ9Js+nHEdli42N9XuSen5hGp1CQTuOJQDRsD99N4gMSpYWapNH6IJo83CIeILZQFesEaber79NCWRoukOpNEnW0gXQqD81w6ACxhbrYde7VuFCYeA2QRCNIsgZISyNIqz6IyhPjOjNVIFYniK3dmKU6QdLaJUimEySrDZLrBMlrgxRKU7sxCw/EMe0CAggggADySJCqxixIkKpNEh6IozELD8RxjQACCCCAAPJIkKrGLEgQXqqAAEJjxrQLCCCAAEJjRmNGY8a0CwgggABCYwYIfQgggNCYMe0CAggggNCY0ZjRmDHtAgIIIIAAQmNGHwIIIDRmTLuAAAIIIDRmNGY0Zky7gAACCCCA0JjRhwACCI0Z0y4ggAACCI0ZjRmNGdMuIIAAAgggNGb0IYAAQmPGtAsIIIAAQmNGY0ZjxrQLCCCAAAIIjRl9CCCA0Jgx7QICCCCA0JjRmNGYMe0CAggggABCY0YfAgggNGZMu4AAAgggNGY0ZjRmTLuAAAIIIIDQmNGHAAIIjRnTLiCAAAIIjRmNGY0ZIEy7gAACCCA0ZvQhgABCY8a0CwgggABCY0ZjBgiNGdMuIIAAAgiN2f/Sh+Q6PfLaIJlOkKw2SKoTJK3dmFmdILb2tBvrBIlrg5iWRo+WqQ+SaARJ1gCJAzsxThCN16p1vNurGjNjoo42j07kAHFskoY2kEbl33U0ZgoPjXW+Rl0gkarnahqtDaJKxMPDDWIiNafGenh4gExvVhXfmk7Da6L1AVGxSby2h6MxK79Zk42ea1pJbJ48sU2zDezQ8iy1z6BBwoyjMQsvXp8YQAAhgADilRfyy+wf8WqZZUfGZihvgZiB3FybC+kCUU5XLkAo50C+gbBQdUzkAIVyejIAYfFTI1solHP2HgNCnHn5AYNy4jvpoVB6fVzL91cwzLJ9Lfd7S0jhehxO5H5/yePr1W6gHonI7fJ5ORSR/n6Q2yQanq763zuXU5LJZRKiyD/W9/pjkdPZz0/yJ8fqVyry+qQZDMjJKoDfy8bRVhHhQTwAAAAASUVORK5CYII=")}[dir=ltr] .auth-wrapper.auth-v1 .auth-inner:after{right:-75px}[dir=rtl] .auth-wrapper.auth-v1 .auth-inner:after{left:-75px}@media (max-width:575.98px){.auth-wrapper.auth-v1 .auth-inner:after{display:none}}.auth-wrapper.auth-v2{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.auth-wrapper.auth-v2 .auth-inner{height:100vh;overflow-y:auto;height:calc(var(--vh, 1vh)*100)}.auth-wrapper.auth-v2 .brand-logo{position:absolute;top:2rem;z-index:1}[dir] .auth-wrapper.auth-v2 .brand-logo{margin:0}[dir=ltr] .auth-wrapper.auth-v2 .brand-logo{left:2rem}[dir=rtl] .auth-wrapper.auth-v2 .brand-logo{right:2rem}.auth-wrapper.auth-v1 .auth-inner{max-width:400px}.auth-wrapper .brand-logo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}[dir] .auth-wrapper .brand-logo{margin:1rem 0 2rem}.auth-wrapper .brand-logo .brand-text{font-weight:600}[dir] .auth-wrapper .auth-footer-btn .btn{padding:.6rem!important}[dir=ltr] .auth-wrapper .auth-footer-btn .btn:not(:last-child){margin-right:1rem}[dir=rtl] .auth-wrapper .auth-footer-btn .btn:not(:last-child){margin-left:1rem}@media (min-width:1200px){.auth-wrapper.auth-v2 .auth-card{width:400px}}[dir] .auth-wrapper .auth-bg{background-color:#fff}[dir] .dark-layout .auth-wrapper .auth-bg{background-color:#283046}.brand-logo svg{height:28px;width:40.95px}html[dir=rtl] svg.feather{-webkit-transform:rotate(180deg);transform:rotate(180deg)}',""])},fgPP:function(t,a,e){"use strict";e("h+V9")},"h+V9":function(t,a,e){var r=e("U8Af");"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(r,i);r.locals&&(t.exports=r.locals)},o1KL:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".toastification-close-icon[data-v-13ed5408],.toastification-title[data-v-13ed5408]{line-height:26px}.toastification-title[data-v-13ed5408]{color:inherit}",""])}}]);