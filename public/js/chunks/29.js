(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./frontend/node_modules/vue-ripple-directive/src/ripple.js":
/*!******************************************************************!*\
  !*** ./frontend/node_modules/vue-ripple-directive/src/ripple.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Ripple = {
    bind: function(el, binding){

        // Default values.
        var props = {
            event: 'mousedown',
            transition: 600
        };

        setProps(Object.keys(binding.modifiers),props);

        el.addEventListener(props.event, function(event) {
            rippler(event, el, binding.value);
        });

        var bg = binding.value || Ripple.color || 'rgba(0, 0, 0, 0.35)';
        var zIndex = Ripple.zIndex || '9999';

        function rippler(event, el) {
            var target = el;
            // Get border to avoid offsetting on ripple container position
            var targetBorder = parseInt((getComputedStyle(target).borderWidth).replace('px', ''));

            // Get necessary variables
            var rect        = target.getBoundingClientRect(),
                left        = rect.left,
                top         = rect.top,
                width       = target.offsetWidth,
                height      = target.offsetHeight,
                dx          = event.clientX - left,
                dy          = event.clientY - top,
                maxX        = Math.max(dx, width - dx),
                maxY        = Math.max(dy, height - dy),
                style       = window.getComputedStyle(target),
                radius      = Math.sqrt((maxX * maxX) + (maxY * maxY)),
                border      = (targetBorder > 0 ) ? targetBorder : 0;

            // Create the ripple and its container
            var ripple = document.createElement("div"),
                rippleContainer = document.createElement("div");
                rippleContainer.className = 'ripple-container';
                ripple.className = 'ripple';

            //Styles for ripple
            ripple.style.marginTop= '0px';
            ripple.style.marginLeft= '0px';
            ripple.style.width= '1px';
            ripple.style.height= '1px';
            ripple.style.transition= 'all ' + props.transition + 'ms cubic-bezier(0.4, 0, 0.2, 1)';
            ripple.style.borderRadius= '50%';
            ripple.style.pointerEvents= 'none';
            ripple.style.position= 'relative';
            ripple.style.zIndex= zIndex;
            ripple.style.backgroundColor  = bg;

            //Styles for rippleContainer
            rippleContainer.style.position= 'absolute';
            rippleContainer.style.left = 0 - border + 'px';
            rippleContainer.style.top = 0 - border + 'px';
            rippleContainer.style.height = '0';
            rippleContainer.style.width = '0';
            rippleContainer.style.pointerEvents = 'none';
            rippleContainer.style.overflow = 'hidden';

            // Store target position to change it after
            var storedTargetPosition =  ((target.style.position).length > 0) ? target.style.position : getComputedStyle(target).position;
            // Change target position to relative to guarantee ripples correct positioning
            if (storedTargetPosition !== 'relative') {
                target.style.position = 'relative';
            }

            rippleContainer.appendChild(ripple);
            target.appendChild(rippleContainer);

            ripple.style.marginLeft   = dx + "px";
            ripple.style.marginTop    = dy + "px";

            // No need to set positioning because ripple should be child of target and to it's relative position.
            // rippleContainer.style.left    = left + (((window.pageXOffset || document.scrollLeft) - (document.clientLeft || 0)) || 0) + "px";
            // rippleContainer.style.top     = top + (((window.pageYOffset || document.scrollTop) - (document.clientTop || 0)) || 0) + "px";
            rippleContainer.style.width   = width + "px";
            rippleContainer.style.height  = height + "px";
            rippleContainer.style.borderTopLeftRadius  = style.borderTopLeftRadius;
            rippleContainer.style.borderTopRightRadius  = style.borderTopRightRadius;
            rippleContainer.style.borderBottomLeftRadius  = style.borderBottomLeftRadius;
            rippleContainer.style.borderBottomRightRadius  = style.borderBottomRightRadius;

            rippleContainer.style.direction = 'ltr';

            setTimeout(function() {
                ripple.style.width  = radius * 2 + "px";
                ripple.style.height = radius * 2 + "px";
                ripple.style.marginLeft   = dx - radius + "px";
                ripple.style.marginTop    = dy - radius + "px";
            }, 0);

            function clearRipple() {
                setTimeout(function() {
                    ripple.style.backgroundColor = "rgba(0, 0, 0, 0)";
                }, 250);

                // Timeout set to get a smooth removal of the ripple
                setTimeout(function() {
                    rippleContainer.parentNode.removeChild(rippleContainer);
                }, 850);

                el.removeEventListener('mouseup', clearRipple, false);

                // After removing event set position to target to it's original one
                // Timeout it's needed to avoid jerky effect of ripple jumping out parent target
                setTimeout(function () {

                    var clearPosition = true;
                    for(var i = 0; i < target.childNodes.length; i++) {
                        if(target.childNodes[i].className === 'ripple-container') {
                            clearPosition = false;
                        }
                    }

                    if(clearPosition) {
                        if(storedTargetPosition !== 'static') {
                            target.style.position = storedTargetPosition;
                        } else {
                            target.style.position = '';
                        }
                    }

                }, props.transition + 250)
            }

            if(event.type === 'mousedown') {
                el.addEventListener('mouseup', clearRipple, false);
            } else {
                clearRipple();
            }
        }
    }
};

function setProps(modifiers,props) {
    modifiers.forEach(function(item) {
        if(isNaN(Number(item)))
            props.event = item;
        else
            props.transition = item;
    });
}

/* harmony default export */ __webpack_exports__["default"] = (Ripple);

/***/ }),

/***/ "./frontend/src/@core/components/toastification/ToastificationContent.vue":
/*!********************************************************************************!*\
  !*** ./frontend/src/@core/components/toastification/ToastificationContent.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToastificationContent_vue_vue_type_template_id_2fedfe59_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToastificationContent.vue?vue&type=template&id=2fedfe59&scoped=true& */ "./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=2fedfe59&scoped=true&");
/* harmony import */ var _ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToastificationContent.vue?vue&type=script&lang=js& */ "./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ToastificationContent_vue_vue_type_style_index_0_id_2fedfe59_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToastificationContent.vue?vue&type=style&index=0&id=2fedfe59&lang=scss&scoped=true& */ "./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=2fedfe59&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToastificationContent_vue_vue_type_template_id_2fedfe59_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ToastificationContent_vue_vue_type_template_id_2fedfe59_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2fedfe59",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/components/toastification/ToastificationContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=2fedfe59&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=2fedfe59&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_2fedfe59_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=style&index=0&id=2fedfe59&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=2fedfe59&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_2fedfe59_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_2fedfe59_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_2fedfe59_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_2fedfe59_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=2fedfe59&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=2fedfe59&scoped=true& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_template_id_2fedfe59_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=template&id=2fedfe59&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=2fedfe59&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_template_id_2fedfe59_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_template_id_2fedfe59_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/stock/Browse.vue":
/*!*********************************************!*\
  !*** ./frontend/src/views/stock/Browse.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Browse_vue_vue_type_template_id_d3a69d64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Browse.vue?vue&type=template&id=d3a69d64& */ "./frontend/src/views/stock/Browse.vue?vue&type=template&id=d3a69d64&");
/* harmony import */ var _Browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Browse.vue?vue&type=script&lang=js& */ "./frontend/src/views/stock/Browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Browse_vue_vue_type_template_id_d3a69d64___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Browse_vue_vue_type_template_id_d3a69d64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/stock/Browse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/stock/Browse.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./frontend/src/views/stock/Browse.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Browse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/stock/Browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/stock/Browse.vue?vue&type=template&id=d3a69d64&":
/*!****************************************************************************!*\
  !*** ./frontend/src/views/stock/Browse.vue?vue&type=template&id=d3a69d64& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_template_id_d3a69d64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Browse.vue?vue&type=template&id=d3a69d64& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/stock/Browse.vue?vue&type=template&id=d3a69d64&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_template_id_d3a69d64___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Browse_vue_vue_type_template_id_d3a69d64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"]
  },
  props: {
    variant: {
      type: String,
      "default": 'primary'
    },
    icon: {
      type: String,
      "default": null
    },
    title: {
      type: String,
      "default": null
    },
    text: {
      type: String,
      "default": null
    },
    hideClose: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/stock/Browse.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/stock/Browse.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./frontend/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BrowseStocks',
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      stocks: {
        isLoading: false,
        search: '',
        paginateOptions: [5, 10, 25, 50, 100, 250],
        recordsPerPage: 50,
        sort: {
          by: '',
          desc: false,
          options: [{
            text: 'Name',
            value: 'name'
          }, {
            text: 'Quantity',
            value: 'quantity'
          }, {
            text: 'Price Per Piece',
            value: 'price_per_piece'
          }, {
            text: 'Sale Price',
            value: 'sale_price'
          }, {
            text: 'Payment Type',
            value: 'payment_type'
          }, {
            text: 'Total',
            value: 'total'
          }, {
            text: 'Paid',
            value: 'paid'
          }, {
            text: 'Created At',
            value: 'created_at'
          }]
        },
        fields: [{
          key: 'index',
          label: '#'
        }, {
          key: 'name',
          label: 'Name'
        }, {
          key: 'quantity',
          label: 'Quantity'
        }, {
          key: 'sale_price',
          label: 'Sale Price'
        }, {
          key: 'total',
          label: 'Total'
        }, {
          key: 'paid',
          label: 'Paid'
        }, {
          key: 'created_at',
          label: 'Created At'
        }, 'Action'],
        data: [],
        meta: {
          count: 0,
          current_page: 1,
          links: {},
          per_page: 0,
          total: 0,
          total_pages: 0
        }
      }
    };
  },
  mounted: function mounted() {
    this.browseStocks(this.stocks.meta.current_page);
  },
  methods: {
    browseStocks: function browseStocks() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.stocks.isLoading = true;
      this.$store.dispatch('stock/browse', "?paginate=".concat(this.stocks.recordsPerPage, "&page=").concat(page, "&filter[search]=").concat(this.stocks.search, "&sort=").concat(this.stocks.sort.desc ? '-' : '').concat(this.stocks.sort.by)).then(function (response) {
        _this.stocks.data = response.data.data;
        _this.stocks.meta = response.data.meta.pagination;
        _this.stocks.isLoading = false;
      })["catch"](function (error) {
        console.error(error);
        _this.stocks.isLoading = false;
      });
    },
    deleteStock: function deleteStock(data) {
      var _this2 = this;

      this.$bvModal.msgBoxConfirm('You will not be able to retrieve this again!', {
        title: 'Are you sure?',
        size: 'sm',
        okTitle: 'Yes, Delete!',
        okVariant: 'danger',
        cancelTitle: 'Cancel',
        cancelVariant: 'outline-primary',
        centered: true
      }).then(function (confirmed) {
        if (confirmed) {
          _this2.$store.dispatch('stock/delete', data.item.id).then(function (response) {
            _this2.stocks.data = _this2.stocks.data.filter(function (stockDetails) {
              return stockDetails.id !== data.item.id;
            });

            _this2.$toast({
              component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
              props: {
                title: 'Success',
                icon: 'CheckCircleIcon',
                text: response.data.message,
                variant: 'success'
              }
            }, {
              position: 'bottom-right',
              timeout: 5000
            });
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=2fedfe59&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=2fedfe59&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toastification-close-icon[data-v-2fedfe59],\n.toastification-title[data-v-2fedfe59] {\n  line-height: 26px;\n}\n.toastification-title[data-v-2fedfe59] {\n  color: inherit;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=2fedfe59&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=2fedfe59&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=style&index=0&id=2fedfe59&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=2fedfe59&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=2fedfe59&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=2fedfe59&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "toastification" }, [
    _c(
      "div",
      { staticClass: "d-flex align-items-start" },
      [
        _c(
          "b-avatar",
          {
            staticClass: "mr-75 flex-shrink-0",
            attrs: { variant: _vm.variant, size: "1.8rem" }
          },
          [_c("feather-icon", { attrs: { icon: _vm.icon, size: "15" } })],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex flex-grow-1" }, [
          _c("div", [
            _vm.title
              ? _c("h5", {
                  staticClass: "mb-0 font-weight-bolder toastification-title",
                  class: "text-" + _vm.variant,
                  domProps: { textContent: _vm._s(_vm.title) }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.text
              ? _c("small", {
                  staticClass: "d-inline-block text-body",
                  domProps: { textContent: _vm._s(_vm.text) }
                })
              : _vm._e()
          ]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "cursor-pointer toastification-close-icon ml-auto ",
              on: {
                click: function($event) {
                  return _vm.$emit("close-toast")
                }
              }
            },
            [
              !_vm.hideClose
                ? _c("feather-icon", {
                    staticClass: "text-body",
                    attrs: { icon: "XIcon" }
                  })
                : _vm._e()
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/stock/Browse.vue?vue&type=template&id=d3a69d64&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/stock/Browse.vue?vue&type=template&id=d3a69d64& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "b-overlay",
                { attrs: { show: _vm.stocks.isLoading, rounded: "sm" } },
                [
                  _c(
                    "b-card-actions",
                    {
                      ref: "stockCard",
                      attrs: { title: "Stocks List", "action-collapse": "" }
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "12", "align-h": "center" } },
                            [
                              _vm.can("create_stock")
                                ? _c(
                                    "b-button",
                                    {
                                      directives: [
                                        {
                                          name: "ripple",
                                          rawName: "v-ripple.400",
                                          value: "rgba(255,255,255,0.15)",
                                          expression:
                                            "'rgba(255,255,255,0.15)'",
                                          modifiers: { "400": true }
                                        }
                                      ],
                                      staticClass: "my-1",
                                      attrs: {
                                        size: "sm",
                                        variant: "primary",
                                        to: "/stocks/create"
                                      }
                                    },
                                    [
                                      _c("feather-icon", {
                                        staticClass: "mr-50",
                                        attrs: { icon: "PlusIcon" }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "align-middle" },
                                        [_vm._v("Create Stock")]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { staticClass: "mb-2", attrs: { cols: "6" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  staticClass: "mb-0",
                                  attrs: {
                                    label: "Sort",
                                    "label-size": "sm",
                                    "label-for": "sortBySelect"
                                  }
                                },
                                [
                                  _c(
                                    "b-input-group",
                                    { attrs: { size: "sm" } },
                                    [
                                      _c("b-form-select", {
                                        staticClass: "w-75",
                                        attrs: {
                                          id: "sortBySelect",
                                          options: _vm.stocks.sort.options
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.browseStocks(1)
                                          }
                                        },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "first",
                                            fn: function() {
                                              return [
                                                _c(
                                                  "option",
                                                  { attrs: { value: "" } },
                                                  [
                                                    _vm._v(
                                                      "\n                        -- none --\n                      "
                                                    )
                                                  ]
                                                )
                                              ]
                                            },
                                            proxy: true
                                          }
                                        ]),
                                        model: {
                                          value: _vm.stocks.sort.by,
                                          callback: function($$v) {
                                            _vm.$set(_vm.stocks.sort, "by", $$v)
                                          },
                                          expression: "stocks.sort.by"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "b-form-select",
                                        {
                                          staticClass: "w-25",
                                          attrs: {
                                            size: "sm",
                                            disabled: !_vm.stocks.sort.by
                                          },
                                          on: {
                                            change: function($event) {
                                              return _vm.browseStocks(1)
                                            }
                                          },
                                          model: {
                                            value: _vm.stocks.sort.desc,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.stocks.sort,
                                                "desc",
                                                $$v
                                              )
                                            },
                                            expression: "stocks.sort.desc"
                                          }
                                        },
                                        [
                                          _c(
                                            "option",
                                            { domProps: { value: false } },
                                            [
                                              _vm._v(
                                                "\n                      Asc\n                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { domProps: { value: true } },
                                            [
                                              _vm._v(
                                                "\n                      Desc\n                    "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { cols: "6", "align-h": "center" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  staticClass: "mb-0",
                                  attrs: {
                                    label: "Search",
                                    "label-size": "sm",
                                    "label-for": "search"
                                  }
                                },
                                [
                                  _c(
                                    "b-input-group",
                                    [
                                      _c(
                                        "b-input-group-prepend",
                                        { attrs: { "is-text": "" } },
                                        [
                                          _c("feather-icon", {
                                            attrs: { icon: "SearchIcon" }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("b-form-input", {
                                        attrs: {
                                          id: "search",
                                          size: "sm",
                                          placeholder: "Search name"
                                        },
                                        on: { change: _vm.browseStocks },
                                        model: {
                                          value: _vm.stocks.search,
                                          callback: function($$v) {
                                            _vm.$set(_vm.stocks, "search", $$v)
                                          },
                                          expression: "stocks.search"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("b-table", {
                                attrs: {
                                  responsive: "",
                                  outlined: true,
                                  items: _vm.stocks.data,
                                  fields: _vm.stocks.fields,
                                  "head-variant": "dark"
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "cell(index)",
                                    fn: function(data) {
                                      return [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(
                                              _vm.stocks.meta.current_page *
                                                _vm.stocks.recordsPerPage -
                                                _vm.stocks.recordsPerPage +
                                                data.index +
                                                1
                                            ) +
                                            "\n                "
                                        )
                                      ]
                                    }
                                  },
                                  {
                                    key: "cell(created_at)",
                                    fn: function(data) {
                                      return [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(
                                              _vm._f("date")(
                                                data.item.created_at,
                                                true
                                              )
                                            ) +
                                            " - " +
                                            _vm._s(
                                              _vm._f("time")(
                                                data.item.created_at
                                              )
                                            ) +
                                            "\n                "
                                        )
                                      ]
                                    }
                                  },
                                  {
                                    key: "cell(action)",
                                    fn: function(data) {
                                      return [
                                        _c(
                                          "span",
                                          { staticClass: "text-nowrap" },
                                          [
                                            _vm.can("view_stock")
                                              ? _c(
                                                  "b-button",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "b-tooltip",
                                                        rawName:
                                                          "v-b-tooltip.hover.v-primary",
                                                        modifiers: {
                                                          hover: true,
                                                          "v-primary": true
                                                        }
                                                      },
                                                      {
                                                        name: "ripple",
                                                        rawName: "v-ripple.400",
                                                        value:
                                                          "rgba(255, 255, 255, 0.15)",
                                                        expression:
                                                          "'rgba(255, 255, 255, 0.15)'",
                                                        modifiers: {
                                                          "400": true
                                                        }
                                                      }
                                                    ],
                                                    staticClass:
                                                      "btn-icon rounded-circle",
                                                    attrs: {
                                                      title: "View Stock",
                                                      variant: "primary",
                                                      to:
                                                        "/stocks/" +
                                                        data.item.id
                                                    }
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: { icon: "EyeIcon" }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.can("update_stock")
                                              ? _c(
                                                  "b-button",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "b-tooltip",
                                                        rawName:
                                                          "v-b-tooltip.hover.v-warning",
                                                        modifiers: {
                                                          hover: true,
                                                          "v-warning": true
                                                        }
                                                      },
                                                      {
                                                        name: "ripple",
                                                        rawName: "v-ripple.400",
                                                        value:
                                                          "rgba(255, 255, 255, 0.15)",
                                                        expression:
                                                          "'rgba(255, 255, 255, 0.15)'",
                                                        modifiers: {
                                                          "400": true
                                                        }
                                                      }
                                                    ],
                                                    staticClass:
                                                      "btn-icon rounded-circle ml-1",
                                                    attrs: {
                                                      title: "Edit Stock",
                                                      variant: "warning",
                                                      to:
                                                        "/stocks/" +
                                                        data.item.id +
                                                        "/edit"
                                                    }
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: {
                                                        icon: "EditIcon"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.can("delete_stock")
                                              ? _c(
                                                  "b-button",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "b-tooltip",
                                                        rawName:
                                                          "v-b-tooltip.hover.v-danger",
                                                        modifiers: {
                                                          hover: true,
                                                          "v-danger": true
                                                        }
                                                      },
                                                      {
                                                        name: "ripple",
                                                        rawName: "v-ripple.400",
                                                        value:
                                                          "rgba(255, 255, 255, 0.15)",
                                                        expression:
                                                          "'rgba(255, 255, 255, 0.15)'",
                                                        modifiers: {
                                                          "400": true
                                                        }
                                                      }
                                                    ],
                                                    staticClass:
                                                      "btn-icon rounded-circle ml-1",
                                                    attrs: {
                                                      title: "Delete Stock",
                                                      variant: "danger"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.deleteStock(
                                                          data
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: {
                                                        icon: "TrashIcon"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ])
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            {
                              staticClass: "my-1",
                              attrs: { md: "2", sm: "4", xs: "4" }
                            },
                            [
                              _c(
                                "b-form-group",
                                { staticClass: "mb-0" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "d-inline-block text-sm-left mr-50"
                                    },
                                    [_vm._v("Per page")]
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-select", {
                                    staticClass: "w-50",
                                    attrs: {
                                      id: "perPageSelect",
                                      size: "sm",
                                      options: _vm.stocks.paginateOptions
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.browseStocks(1)
                                      }
                                    },
                                    model: {
                                      value: _vm.stocks.recordsPerPage,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.stocks,
                                          "recordsPerPage",
                                          $$v
                                        )
                                      },
                                      expression: "stocks.recordsPerPage"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            {
                              staticClass: "my-1",
                              attrs: { md: "10", sm: "8", xs: "8" }
                            },
                            [
                              _c("b-pagination", {
                                staticClass: "my-0",
                                attrs: {
                                  "total-rows": _vm.stocks.meta.total,
                                  "per-page": _vm.stocks.recordsPerPage,
                                  align: "right",
                                  "first-number": "",
                                  "last-number": "",
                                  "prev-class": "prev-item",
                                  "next-class": "next-item"
                                },
                                on: { change: _vm.browseStocks },
                                scopedSlots: _vm._u([
                                  {
                                    key: "prev-text",
                                    fn: function() {
                                      return [
                                        _c("feather-icon", {
                                          attrs: {
                                            icon: "ChevronLeftIcon",
                                            size: "18"
                                          }
                                        })
                                      ]
                                    },
                                    proxy: true
                                  },
                                  {
                                    key: "next-text",
                                    fn: function() {
                                      return [
                                        _c("feather-icon", {
                                          attrs: {
                                            icon: "ChevronRightIcon",
                                            size: "18"
                                          }
                                        })
                                      ]
                                    },
                                    proxy: true
                                  }
                                ]),
                                model: {
                                  value: _vm.stocks.meta.current_page,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.stocks.meta,
                                      "current_page",
                                      $$v
                                    )
                                  },
                                  expression: "stocks.meta.current_page"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);