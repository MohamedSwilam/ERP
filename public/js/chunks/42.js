(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"1w2d":function(t,e,s){"use strict";var o={components:{BAvatar:s("G/QR").a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},i=(s("MOdh"),s("KHd+")),a=Object(i.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"toastification"},[s("div",{staticClass:"d-flex align-items-start"},[s("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[s("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),s("div",{staticClass:"d-flex flex-grow-1"},[s("div",[t.title?s("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?s("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),s("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():s("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"13ed5408",null);e.a=a.exports},"4cv3":function(t,e,s){"use strict";var o={bind:function(t,e){var s={event:"mousedown",transition:600};!function(t,e){t.forEach((function(t){isNaN(Number(t))?e.event=t:e.transition=t}))}(Object.keys(e.modifiers),s),t.addEventListener(s.event,(function(o){!function(t,e){var o=e,r=parseInt(getComputedStyle(o).borderWidth.replace("px","")),n=o.getBoundingClientRect(),c=n.left,l=n.top,p=o.offsetWidth,d=o.offsetHeight,u=t.clientX-c,f=t.clientY-l,h=Math.max(u,p-u),m=Math.max(f,d-f),v=window.getComputedStyle(o),_=Math.sqrt(h*h+m*m),b=r>0?r:0,g=document.createElement("div"),y=document.createElement("div");y.className="ripple-container",g.className="ripple",g.style.marginTop="0px",g.style.marginLeft="0px",g.style.width="1px",g.style.height="1px",g.style.transition="all "+s.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",g.style.borderRadius="50%",g.style.pointerEvents="none",g.style.position="relative",g.style.zIndex=a,g.style.backgroundColor=i,y.style.position="absolute",y.style.left=0-b+"px",y.style.top=0-b+"px",y.style.height="0",y.style.width="0",y.style.pointerEvents="none",y.style.overflow="hidden";var k=o.style.position.length>0?o.style.position:getComputedStyle(o).position;"relative"!==k&&(o.style.position="relative");function x(){setTimeout((function(){g.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){y.parentNode.removeChild(y)}),850),e.removeEventListener("mouseup",x,!1),setTimeout((function(){for(var t=!0,e=0;e<o.childNodes.length;e++)"ripple-container"===o.childNodes[e].className&&(t=!1);t&&(o.style.position="static"!==k?k:"")}),s.transition+250)}y.appendChild(g),o.appendChild(y),g.style.marginLeft=u+"px",g.style.marginTop=f+"px",y.style.width=p+"px",y.style.height=d+"px",y.style.borderTopLeftRadius=v.borderTopLeftRadius,y.style.borderTopRightRadius=v.borderTopRightRadius,y.style.borderBottomLeftRadius=v.borderBottomLeftRadius,y.style.borderBottomRightRadius=v.borderBottomRightRadius,y.style.direction="ltr",setTimeout((function(){g.style.width=2*_+"px",g.style.height=2*_+"px",g.style.marginLeft=u-_+"px",g.style.marginTop=f-_+"px"}),0),"mousedown"===t.type?e.addEventListener("mouseup",x,!1):x()}(o,t,e.value)}));var i=e.value||o.color||"rgba(0, 0, 0, 0.35)",a=o.zIndex||"9999"}};e.a=o},"8j+T":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var s in t)e.hasOwnProperty(s)||(e[s]=t[s])}(s("Xljc"))},DEUr:function(t,e,s){var o=s("o1KL");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(o,i);o.locals&&(t.exports=o.locals)},MOdh:function(t,e,s){"use strict";s("DEUr")},Xljc:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return t.EOL="\r\n",t.BOM="\ufeff",t.DEFAULT_FIELD_SEPARATOR=",",t.DEFAULT_DECIMAL_SEPARATOR=".",t.DEFAULT_QUOTE='"',t.DEFAULT_SHOW_TITLE=!1,t.DEFAULT_TITLE="My Generated Report",t.DEFAULT_FILENAME="generated",t.DEFAULT_SHOW_LABELS=!1,t.DEFAULT_USE_TEXT_FILE=!1,t.DEFAULT_USE_BOM=!0,t.DEFAULT_HEADER=[],t.DEFAULT_KEYS_AS_HEADERS=!1,t}();e.CsvConfigConsts=o,e.ConfigDefaults={filename:o.DEFAULT_FILENAME,fieldSeparator:o.DEFAULT_FIELD_SEPARATOR,quoteStrings:o.DEFAULT_QUOTE,decimalSeparator:o.DEFAULT_DECIMAL_SEPARATOR,showLabels:o.DEFAULT_SHOW_LABELS,showTitle:o.DEFAULT_SHOW_TITLE,title:o.DEFAULT_TITLE,useTextFile:o.DEFAULT_USE_TEXT_FILE,useBom:o.DEFAULT_USE_BOM,headers:o.DEFAULT_HEADER,useKeysAsHeaders:o.DEFAULT_KEYS_AS_HEADERS};var i=function(){function t(t){this._csv="";var s=t||{};this._options=c({},e.ConfigDefaults,s),this._options.useKeysAsHeaders&&this._options.headers&&this._options.headers.length>0&&console.warn("Option to use object keys as headers was set, but headers were still passed!")}return Object.defineProperty(t.prototype,"options",{get:function(){return this._options},set:function(t){this._options=c({},e.ConfigDefaults,t)},enumerable:!0,configurable:!0}),t.prototype.generateCsv=function(t,e){if(void 0===e&&(e=!1),this._csv="",this._parseData(t),this._options.useBom&&(this._csv+=o.BOM),this._options.showTitle&&(this._csv+=this._options.title+"\r\n\n"),this._getHeaders(),this._getBody(),""!=this._csv){if(e)return this._csv;var s=this._options.useTextFile?"plain":"csv",i=this._options.useTextFile?".txt":".csv",a=new Blob([this._csv],{type:"text/"+s+";charset=utf8;"});if(navigator.msSaveBlob){var r=this._options.filename.replace(/ /g,"_")+i;navigator.msSaveBlob(a,r)}else{this._options.useTextFile,encodeURI(this._csv);var n=document.createElement("a");n.href=URL.createObjectURL(a),n.setAttribute("visibility","hidden"),n.download=this._options.filename.replace(/ /g,"_")+i,document.body.appendChild(n),n.click(),document.body.removeChild(n)}}else console.log("Invalid data")},t.prototype._getHeaders=function(){if(this._options.showLabels||this._options.useKeysAsHeaders){var t=this._options.useKeysAsHeaders?Object.keys(this._data[0]):this._options.headers;if(t.length>0){for(var e="",s=0;s<t.length;s++)e+=t[s]+this._options.fieldSeparator;e=e.slice(0,-1),this._csv+=e+o.EOL}}},t.prototype._getBody=function(){for(var t=Object.keys(this._data[0]),e=0;e<this._data.length;e++){for(var s="",i=0;i<t.length;i++){var a=t[i];s+=this._formatData(this._data[e][a])+this._options.fieldSeparator}s=s.slice(0,-1),this._csv+=s+o.EOL}},t.prototype._formatData=function(t){return"locale"===this._options.decimalSeparator&&this._isFloat(t)?t.toLocaleString():"."!==this._options.decimalSeparator&&this._isFloat(t)?t.toString().replace(".",this._options.decimalSeparator):"string"==typeof t?(t=t.replace(/"/g,'""'),(this._options.quoteStrings||t.indexOf(",")>-1||t.indexOf("\n")>-1||t.indexOf("\r")>-1)&&(t=this._options.quoteStrings+t+this._options.quoteStrings),t):"boolean"==typeof t?t?"TRUE":"FALSE":t},t.prototype._isFloat=function(t){return+t===t&&(!isFinite(t)||Boolean(t%1))},t.prototype._parseData=function(t){return this._data="object"!=typeof t?JSON.parse(t):t,this._data},t}();e.ExportToCsv=i;var a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function n(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function c(t){for(var e,s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];for(var i,c=n(t),l=1;l<arguments.length;l++){for(var p in e=Object(arguments[l]))a.call(e,p)&&(c[p]=e[p]);if(Object.getOwnPropertySymbols){i=Object.getOwnPropertySymbols(e);for(var d=0;d<i.length;d++)r.call(e,i[d])&&(c[i[d]]=e[i[d]])}}return c}},o1KL:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".toastification-close-icon[data-v-13ed5408],.toastification-title[data-v-13ed5408]{line-height:26px}.toastification-title[data-v-13ed5408]{color:inherit}",""])},rwL3:function(t,e,s){"use strict";s.r(e);var o=s("1w2d"),i=s("4cv3"),a=s("8j+T"),r={name:"BrowseStocks",directives:{Ripple:i.a},data:function(){return{stocks:{isLoading:!1,search:"",paginateOptions:[5,10,25,50,100,250],recordsPerPage:50,sort:{by:"",desc:!1,options:[{text:"Name",value:"name"},{text:"Quantity",value:"quantity"},{text:"Price Per Piece",value:"price_per_piece"},{text:"Sale Price",value:"sale_price"},{text:"Payment Type",value:"payment_type"},{text:"Total",value:"total"},{text:"Paid",value:"paid"},{text:"Created At",value:"created_at"}]},fields:[{key:"index",label:"#"},{key:"name",label:"Name"},{key:"quantity",label:"Quantity"},{key:"sale_price",label:"Sale Price"},{key:"total",label:"Total"},{key:"paid",label:"Paid"},{key:"created_at",label:"Created At"},"Action"],data:[],meta:{count:0,current_page:1,links:{},per_page:0,total:0,total_pages:0}}}},mounted:function(){this.browseStocks(this.stocks.meta.current_page)},methods:{browseStocks:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.stocks.isLoading=!0,this.$store.dispatch("stock/browse","?paginate=".concat(this.stocks.recordsPerPage,"&page=").concat(e,"&filter[search]=").concat(this.stocks.search,"&sort=").concat(this.stocks.sort.desc?"-":"").concat(this.stocks.sort.by)).then((function(e){t.stocks.data=e.data.data,t.stocks.meta=e.data.meta.pagination,t.stocks.isLoading=!1})).catch((function(e){console.error(e),t.stocks.isLoading=!1}))},deleteStock:function(t){var e=this;this.$bvModal.msgBoxConfirm("You will not be able to retrieve this again!",{title:"Are you sure?",size:"sm",okTitle:"Yes, Delete!",okVariant:"danger",cancelTitle:"Cancel",cancelVariant:"outline-primary",centered:!0}).then((function(s){s&&e.$store.dispatch("stock/delete",t.item.id).then((function(s){e.stocks.data=e.stocks.data.filter((function(e){return e.id!==t.item.id})),e.$toast({component:o.a,props:{title:"Success",icon:"CheckCircleIcon",text:s.data.message,variant:"success"}},{position:"bottom-right",timeout:5e3})})).catch((function(t){console.log(t)}))}))},exportCsv:function(){new a.ExportToCsv({fieldSeparator:",",quoteStrings:'"',decimalSeparator:".",showLabels:!0,showTitle:!0,title:"Stocks List",useTextFile:!1,useBom:!0,useKeysAsHeaders:!0}).generateCsv(this.stocks.data.map((function(t,e){return{"#":e+1,Name:t.name,Quantity:t.quantity,"Price Per Piece":t.price_per_piece,"Sale Price":t.sale_price,"Payment Type":t.payment_type,Total:t.total,Paid:t.paid,"Created At":new Date(t.created_at).toDateString()}})))}}},n=s("KHd+"),c=Object(n.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-overlay",{attrs:{show:t.stocks.isLoading,rounded:"sm"}},[s("b-card-actions",{ref:"stockCard",attrs:{title:"Stocks List","action-collapse":""}},[s("b-row",[s("b-col",{attrs:{cols:"6","align-h":"center"}},[t.can("create_stock")?s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255,255,255,0.15)",expression:"'rgba(255,255,255,0.15)'",modifiers:{400:!0}}],staticClass:"my-1",attrs:{size:"sm",variant:"primary",to:"/stocks/create"}},[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"PlusIcon"}}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("Create Stock")])],1):t._e()],1),t._v(" "),s("b-col",{staticClass:"text-right",attrs:{cols:"6","align-h":"center"}},[s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255,255,255,0.15)",expression:"'rgba(255,255,255,0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:t.exportCsv}},[s("feather-icon",{staticClass:"mr-50",attrs:{icon:"FileIcon"}}),t._v(" "),s("span",{staticClass:"align-middle"},[t._v("Export CSV")])],1)],1),t._v(" "),s("b-col",{staticClass:"mb-2",attrs:{cols:"6"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:"Sort","label-size":"sm","label-for":"sortBySelect"}},[s("b-input-group",{attrs:{size:"sm"}},[s("b-form-select",{staticClass:"w-75",attrs:{id:"sortBySelect",options:t.stocks.sort.options},on:{change:function(e){return t.browseStocks(1)}},scopedSlots:t._u([{key:"first",fn:function(){return[s("option",{attrs:{value:""}},[t._v("\n                        -- none --\n                      ")])]},proxy:!0}]),model:{value:t.stocks.sort.by,callback:function(e){t.$set(t.stocks.sort,"by",e)},expression:"stocks.sort.by"}}),t._v(" "),s("b-form-select",{staticClass:"w-25",attrs:{size:"sm",disabled:!t.stocks.sort.by},on:{change:function(e){return t.browseStocks(1)}},model:{value:t.stocks.sort.desc,callback:function(e){t.$set(t.stocks.sort,"desc",e)},expression:"stocks.sort.desc"}},[s("option",{domProps:{value:!1}},[t._v("\n                      Asc\n                    ")]),t._v(" "),s("option",{domProps:{value:!0}},[t._v("\n                      Desc\n                    ")])])],1)],1)],1),t._v(" "),s("b-col",{attrs:{cols:"6","align-h":"center"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:"Search","label-size":"sm","label-for":"search"}},[s("b-input-group",[s("b-input-group-prepend",{attrs:{"is-text":""}},[s("feather-icon",{attrs:{icon:"SearchIcon"}})],1),t._v(" "),s("b-form-input",{attrs:{id:"search",size:"sm",placeholder:"Search name"},on:{change:t.browseStocks},model:{value:t.stocks.search,callback:function(e){t.$set(t.stocks,"search",e)},expression:"stocks.search"}})],1)],1)],1),t._v(" "),s("b-col",{attrs:{cols:"12"}},[s("b-table",{attrs:{responsive:"",outlined:!0,items:t.stocks.data,fields:t.stocks.fields,"head-variant":"dark"},scopedSlots:t._u([{key:"cell(index)",fn:function(e){return[t._v("\n                  "+t._s(t.stocks.meta.current_page*t.stocks.recordsPerPage-t.stocks.recordsPerPage+e.index+1)+"\n                ")]}},{key:"cell(created_at)",fn:function(e){return[t._v("\n                  "+t._s(t._f("date")(e.item.created_at,!0))+" - "+t._s(t._f("time")(e.item.created_at))+"\n                ")]}},{key:"cell(action)",fn:function(e){return[s("span",{staticClass:"text-nowrap"},[t.can("view_stock")?s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon rounded-circle",attrs:{title:"View Stock",variant:"primary",to:"/stocks/"+e.item.id}},[s("feather-icon",{attrs:{icon:"EyeIcon"}})],1):t._e(),t._v(" "),t.can("update_stock")?s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-warning",modifiers:{hover:!0,"v-warning":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon rounded-circle ml-1",attrs:{title:"Edit Stock",variant:"warning",to:"/stocks/"+e.item.id+"/edit"}},[s("feather-icon",{attrs:{icon:"EditIcon"}})],1):t._e(),t._v(" "),t.can("delete_stock")?s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-danger",modifiers:{hover:!0,"v-danger":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon rounded-circle ml-1",attrs:{title:"Delete Stock",variant:"danger"},on:{click:function(s){return t.deleteStock(e)}}},[s("feather-icon",{attrs:{icon:"TrashIcon"}})],1):t._e()],1)]}}])})],1),t._v(" "),s("b-col",{staticClass:"my-1",attrs:{md:"2",sm:"4",xs:"4"}},[s("b-form-group",{staticClass:"mb-0"},[s("label",{staticClass:"d-inline-block text-sm-left mr-50"},[t._v("Per page")]),t._v(" "),s("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.stocks.paginateOptions},on:{change:function(e){return t.browseStocks(1)}},model:{value:t.stocks.recordsPerPage,callback:function(e){t.$set(t.stocks,"recordsPerPage",e)},expression:"stocks.recordsPerPage"}})],1)],1),t._v(" "),s("b-col",{staticClass:"my-1",attrs:{md:"10",sm:"8",xs:"8"}},[s("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.stocks.meta.total,"per-page":t.stocks.recordsPerPage,align:"right","first-number":"","last-number":"","prev-class":"prev-item","next-class":"next-item"},on:{change:t.browseStocks},scopedSlots:t._u([{key:"prev-text",fn:function(){return[s("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"18"}})]},proxy:!0},{key:"next-text",fn:function(){return[s("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"18"}})]},proxy:!0}]),model:{value:t.stocks.meta.current_page,callback:function(e){t.$set(t.stocks.meta,"current_page",e)},expression:"stocks.meta.current_page"}})],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=c.exports}}]);