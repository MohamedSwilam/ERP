(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

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

/***/ "./frontend/src/views/user/Create.vue":
/*!********************************************!*\
  !*** ./frontend/src/views/user/Create.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_388dffa5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=388dffa5& */ "./frontend/src/views/user/Create.vue?vue&type=template&id=388dffa5&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./frontend/src/views/user/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&lang=css& */ "./frontend/src/views/user/Create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_388dffa5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_388dffa5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/user/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/user/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./frontend/src/views/user/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/user/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/user/Create.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************!*\
  !*** ./frontend/src/views/user/Create.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/user/Create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/user/Create.vue?vue&type=template&id=388dffa5&":
/*!***************************************************************************!*\
  !*** ./frontend/src/views/user/Create.vue?vue&type=template&id=388dffa5& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_388dffa5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=388dffa5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/user/Create.vue?vue&type=template&id=388dffa5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_388dffa5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_388dffa5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/user/Create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/user/Create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./frontend/src/@core/components/toastification/ToastificationContent.vue");
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
  name: 'CreateUser',
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      user: {
        isCardLoading: false,
        isLoading: false,
        roles: [],
        permissions: {},
        selectedGroups: [],
        form: {
          roles: [],
          permissions: [],
          name: '',
          email: '',
          password: '',
          password_confirmation: ''
        }
      }
    };
  },
  mounted: function mounted() {
    this.browseRoles();
  },
  methods: {
    browseRoles: function browseRoles() {
      var _this = this;

      this.user.isCardLoading = true;
      this.$store.dispatch('rolesAndPermissions/browse', '').then(function (response) {
        _this.user.roles = response.data.data;

        _this.browsePermissions();
      })["catch"](function (error) {
        console.error(error);
        _this.user.isCardLoading = false;
      });
    },
    browsePermissions: function browsePermissions() {
      var _this2 = this;

      this.$store.dispatch('rolesAndPermissions/getPermissions', '').then(function (response) {
        _this2.user.permissions = _this2.groupPermissions(response.data.data);
        _this2.user.isCardLoading = false;
      })["catch"](function (error) {
        console.error(error);
        _this2.user.isCardLoading = false;
      });
    },
    groupPermissions: function groupPermissions(permissions) {
      var groups = {};
      permissions.forEach(function (permission) {
        // eslint-disable-next-line no-prototype-builtins
        if (groups.hasOwnProperty(permission.group)) groups[permission.group].push(permission);else groups[permission.group] = [permission];
      });
      return groups;
    },
    groupPressed: function groupPressed(group) {
      if (this.user.selectedGroups.includes(group)) {
        for (var i = 0; i < this.user.permissions[group].length; i += 1) {
          if (!this.user.form.permissions.includes(this.user.permissions[group][i].name)) {
            this.user.form.permissions.push(this.user.permissions[group][i].name);
          }
        }
      } else {
        for (var _i = 0; _i < this.user.permissions[group].length; _i += 1) {
          if (this.user.form.permissions.includes(this.user.permissions[group][_i].name)) {
            this.user.form.permissions.splice(this.user.form.permissions.indexOf(this.user.permissions[group][_i].name), 1);
          }
        }
      }
    },
    updatePermissionsCheckboxes: function updatePermissionsCheckboxes() {
      var _this3 = this;

      var permissions = [];
      var roles = this.user.roles.filter(function (role) {
        return _this3.user.form.roles.includes(role.name);
      });
      roles.forEach(function (role) {
        role.permissions.forEach(function (permission) {
          if (!permissions.includes(permission.name)) permissions.push(permission.name);
        });
      });
      this.user.form.permissions = permissions;
      this.updatePermissionGroupsCheckboxes();
    },
    updatePermissionGroupsCheckboxes: function updatePermissionGroupsCheckboxes() {
      var _this4 = this;

      Object.keys(this.user.permissions).forEach(function (group) {
        var allChecked = true;

        _this4.user.permissions[group].forEach(function (permission) {
          if (!_this4.user.form.permissions.includes(permission.name)) allChecked = false;
        });

        if (allChecked) {
          if (!_this4.user.selectedGroups.includes(group)) _this4.user.selectedGroups.push(group);
        } else {
          _this4.user.selectedGroups = _this4.user.selectedGroups.filter(function (groupName) {
            return groupName !== group;
          });
        }
      });
    },
    createUser: function createUser() {
      var _this5 = this;

      this.user.isLoading = true;
      this.$store.dispatch('user/create', this.user.form).then(function (response) {
        _this5.user.isLoading = false;

        _this5.$toast({
          component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
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

        _this5.$router.push("/users/".concat(response.data.data.id));
      })["catch"](function (error) {
        _this5.$refs.createUserForm.setErrors(error.response.data.errors);

        _this5.user.isLoading = false;
      });
    },
    reset: function reset() {
      this.user.form.role = [];
      this.user.form.permissions = [];
      this.user.form.name = '';
      this.user.form.email = '';
      this.user.form.password = '';
      this.user.form.password_confirmation = '';
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/user/Create.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/user/Create.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#user-form ul,\n#user-form li {\n    list-style-type: none;\n    text-decoration: none;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/user/Create.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/user/Create.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/user/Create.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/user/Create.vue?vue&type=template&id=388dffa5&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/user/Create.vue?vue&type=template&id=388dffa5& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "user-form" } },
    [
      _c(
        "b-container",
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
                    { attrs: { show: _vm.user.isCardLoading, rounded: "sm" } },
                    [
                      _c(
                        "b-card-actions",
                        {
                          ref: "createUser",
                          attrs: { title: "Create User", "action-collapse": "" }
                        },
                        [
                          _c("validation-observer", {
                            ref: "createUserForm",
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var handleSubmit = ref.handleSubmit
                                  return [
                                    _c(
                                      "b-form",
                                      {
                                        on: {
                                          submit: function($event) {
                                            $event.preventDefault()
                                            return handleSubmit(_vm.createUser)
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "b-row",
                                          [
                                            _c(
                                              "b-col",
                                              {
                                                attrs: {
                                                  lg: "12",
                                                  md: "12",
                                                  sm: "12",
                                                  xs: "12"
                                                }
                                              },
                                              [
                                                _c(
                                                  "b-form-group",
                                                  {
                                                    attrs: {
                                                      label: "User Roles"
                                                    }
                                                  },
                                                  [
                                                    _c("validation-provider", {
                                                      attrs: {
                                                        rules: "required",
                                                        name: "Role",
                                                        vid: "role"
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "default",
                                                            fn: function(ref) {
                                                              var errors =
                                                                ref.errors
                                                              return [
                                                                _vm._l(
                                                                  _vm.user
                                                                    .roles,
                                                                  function(
                                                                    role
                                                                  ) {
                                                                    return _c(
                                                                      "b-form-checkbox",
                                                                      {
                                                                        key:
                                                                          role.name,
                                                                        attrs: {
                                                                          value:
                                                                            role.name,
                                                                          name:
                                                                            "flavour-3a",
                                                                          inline:
                                                                            ""
                                                                        },
                                                                        on: {
                                                                          change:
                                                                            _vm.updatePermissionsCheckboxes
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .user
                                                                              .form
                                                                              .roles,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm
                                                                                .user
                                                                                .form,
                                                                              "roles",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "user.form.roles"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "\n                          " +
                                                                            _vm._s(
                                                                              role.name
                                                                            ) +
                                                                            "\n                        "
                                                                        )
                                                                      ]
                                                                    )
                                                                  }
                                                                ),
                                                                _vm._v(" "),
                                                                _c("br"),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "small",
                                                                  {
                                                                    staticClass:
                                                                      "text-danger"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        errors[0]
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            }
                                                          }
                                                        ],
                                                        null,
                                                        true
                                                      )
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
                                              { attrs: { cols: "12" } },
                                              [
                                                _c("h6", [
                                                  _vm._v("Permissions:")
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "b-row",
                                                  _vm._l(
                                                    Object.keys(
                                                      _vm.user.permissions
                                                    ),
                                                    function(key, index) {
                                                      return _c(
                                                        "b-col",
                                                        {
                                                          key: index,
                                                          staticClass: "mb-2",
                                                          attrs: {
                                                            lg: "4",
                                                            md: "6",
                                                            sm: "12",
                                                            xs: "12"
                                                          }
                                                        },
                                                        [
                                                          _c("ul", [
                                                            _c(
                                                              "li",
                                                              [
                                                                _c(
                                                                  "b-form-checkbox",
                                                                  {
                                                                    attrs: {
                                                                      value: key
                                                                    },
                                                                    on: {
                                                                      change: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.groupPressed(
                                                                          key
                                                                        )
                                                                      }
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm.user
                                                                          .selectedGroups,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.user,
                                                                          "selectedGroups",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "user.selectedGroups"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("b", [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          _vm._f(
                                                                            "capitalize"
                                                                          )(key)
                                                                        )
                                                                      )
                                                                    ])
                                                                  ]
                                                                )
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "ul",
                                                              _vm._l(
                                                                _vm.user
                                                                  .permissions[
                                                                  key
                                                                ],
                                                                function(
                                                                  permission,
                                                                  permission_index
                                                                ) {
                                                                  return _c(
                                                                    "li",
                                                                    {
                                                                      key:
                                                                        "p-" +
                                                                        permission_index
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "b-form-checkbox",
                                                                        {
                                                                          attrs: {
                                                                            value:
                                                                              permission.name
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              _vm
                                                                                .user
                                                                                .form
                                                                                .permissions,
                                                                            callback: function(
                                                                              $$v
                                                                            ) {
                                                                              _vm.$set(
                                                                                _vm
                                                                                  .user
                                                                                  .form,
                                                                                "permissions",
                                                                                $$v
                                                                              )
                                                                            },
                                                                            expression:
                                                                              "user.form.permissions"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "\n                                " +
                                                                              _vm._s(
                                                                                _vm._f(
                                                                                  "capitalize"
                                                                                )(
                                                                                  permission.name
                                                                                )
                                                                              ) +
                                                                              "\n                              "
                                                                          )
                                                                        ]
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                }
                                                              ),
                                                              0
                                                            )
                                                          ])
                                                        ]
                                                      )
                                                    }
                                                  ),
                                                  1
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "b-col",
                                              {
                                                attrs: {
                                                  lg: "6",
                                                  md: "6",
                                                  sm: "12",
                                                  xs: "12"
                                                }
                                              },
                                              [
                                                _c(
                                                  "b-form-group",
                                                  {
                                                    attrs: {
                                                      label: "Name",
                                                      "label-for": "name"
                                                    }
                                                  },
                                                  [
                                                    _c("validation-provider", {
                                                      attrs: {
                                                        rules: "required",
                                                        name: "Name",
                                                        vid: "name"
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "default",
                                                            fn: function(ref) {
                                                              var errors =
                                                                ref.errors
                                                              return [
                                                                _c(
                                                                  "b-input-group",
                                                                  {
                                                                    class:
                                                                      errors.length ===
                                                                      0
                                                                        ? ""
                                                                        : "is-invalid"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "b-input-group-prepend",
                                                                      {
                                                                        attrs: {
                                                                          "is-text":
                                                                            ""
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "feather-icon",
                                                                          {
                                                                            attrs: {
                                                                              icon:
                                                                                "UserIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "b-form-input",
                                                                      {
                                                                        attrs: {
                                                                          id:
                                                                            "name",
                                                                          state:
                                                                            errors.length >
                                                                            0
                                                                              ? false
                                                                              : null,
                                                                          placeholder:
                                                                            "Name"
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .user
                                                                              .form
                                                                              .name,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm
                                                                                .user
                                                                                .form,
                                                                              "name",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "user.form.name"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "small",
                                                                  {
                                                                    staticClass:
                                                                      "text-danger"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        errors[0]
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            }
                                                          }
                                                        ],
                                                        null,
                                                        true
                                                      )
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
                                                attrs: {
                                                  lg: "6",
                                                  md: "6",
                                                  sm: "12",
                                                  xs: "12"
                                                }
                                              },
                                              [
                                                _c(
                                                  "b-form-group",
                                                  {
                                                    attrs: {
                                                      label: "Email",
                                                      "label-for": "email"
                                                    }
                                                  },
                                                  [
                                                    _c("validation-provider", {
                                                      attrs: {
                                                        rules: "required|email",
                                                        name: "Email",
                                                        vid: "email"
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "default",
                                                            fn: function(ref) {
                                                              var errors =
                                                                ref.errors
                                                              return [
                                                                _c(
                                                                  "b-input-group",
                                                                  {
                                                                    class:
                                                                      errors.length ===
                                                                      0
                                                                        ? ""
                                                                        : "is-invalid"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "b-input-group-prepend",
                                                                      {
                                                                        attrs: {
                                                                          "is-text":
                                                                            ""
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "feather-icon",
                                                                          {
                                                                            attrs: {
                                                                              icon:
                                                                                "MailIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "b-form-input",
                                                                      {
                                                                        attrs: {
                                                                          id:
                                                                            "code",
                                                                          state:
                                                                            errors.length >
                                                                            0
                                                                              ? false
                                                                              : null,
                                                                          placeholder:
                                                                            "Email"
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .user
                                                                              .form
                                                                              .email,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm
                                                                                .user
                                                                                .form,
                                                                              "email",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "user.form.email"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "small",
                                                                  {
                                                                    staticClass:
                                                                      "text-danger"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        errors[0]
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            }
                                                          }
                                                        ],
                                                        null,
                                                        true
                                                      )
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
                                                attrs: {
                                                  lg: "6",
                                                  md: "6",
                                                  sm: "12",
                                                  xs: "12"
                                                }
                                              },
                                              [
                                                _c(
                                                  "b-form-group",
                                                  {
                                                    attrs: {
                                                      label: "Password",
                                                      "label-for": "password"
                                                    }
                                                  },
                                                  [
                                                    _c("validation-provider", {
                                                      attrs: {
                                                        rules:
                                                          "required|password",
                                                        name: "Password",
                                                        vid: "password"
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "default",
                                                            fn: function(ref) {
                                                              var errors =
                                                                ref.errors
                                                              return [
                                                                _c(
                                                                  "b-input-group",
                                                                  {
                                                                    class:
                                                                      errors.length ===
                                                                      0
                                                                        ? ""
                                                                        : "is-invalid"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "b-input-group-prepend",
                                                                      {
                                                                        attrs: {
                                                                          "is-text":
                                                                            ""
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "feather-icon",
                                                                          {
                                                                            attrs: {
                                                                              icon:
                                                                                "LockIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "b-form-input",
                                                                      {
                                                                        attrs: {
                                                                          id:
                                                                            "password",
                                                                          type:
                                                                            "password",
                                                                          state:
                                                                            errors.length >
                                                                            0
                                                                              ? false
                                                                              : null,
                                                                          placeholder:
                                                                            "Password"
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .user
                                                                              .form
                                                                              .password,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm
                                                                                .user
                                                                                .form,
                                                                              "password",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "user.form.password"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "small",
                                                                  {
                                                                    staticClass:
                                                                      "text-danger"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        errors[0]
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            }
                                                          }
                                                        ],
                                                        null,
                                                        true
                                                      )
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
                                                attrs: {
                                                  lg: "6",
                                                  md: "6",
                                                  sm: "12",
                                                  xs: "12"
                                                }
                                              },
                                              [
                                                _c(
                                                  "b-form-group",
                                                  {
                                                    attrs: {
                                                      label: "Confirm Password",
                                                      "label-for":
                                                        "confirm-password"
                                                    }
                                                  },
                                                  [
                                                    _c("validation-provider", {
                                                      attrs: {
                                                        rules:
                                                          "required|confirmed:password",
                                                        name:
                                                          "Confirm Password",
                                                        vid: "confirm-password"
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "default",
                                                            fn: function(ref) {
                                                              var errors =
                                                                ref.errors
                                                              return [
                                                                _c(
                                                                  "b-input-group",
                                                                  {
                                                                    class:
                                                                      errors.length ===
                                                                      0
                                                                        ? ""
                                                                        : "is-invalid"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "b-input-group-prepend",
                                                                      {
                                                                        attrs: {
                                                                          "is-text":
                                                                            ""
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "feather-icon",
                                                                          {
                                                                            attrs: {
                                                                              icon:
                                                                                "LockIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "b-form-input",
                                                                      {
                                                                        attrs: {
                                                                          id:
                                                                            "confirm-password",
                                                                          type:
                                                                            "password",
                                                                          state:
                                                                            errors.length >
                                                                            0
                                                                              ? false
                                                                              : null,
                                                                          placeholder:
                                                                            "Confirm Password"
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .user
                                                                              .form
                                                                              .password_confirmation,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm
                                                                                .user
                                                                                .form,
                                                                              "password_confirmation",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "user.form.password_confirmation"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "small",
                                                                  {
                                                                    staticClass:
                                                                      "text-danger"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        errors[0]
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            }
                                                          }
                                                        ],
                                                        null,
                                                        true
                                                      )
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
                                              { attrs: { cols: "12" } },
                                              [
                                                _c(
                                                  "b-container",
                                                  [
                                                    _c(
                                                      "b-row",
                                                      {
                                                        staticClass: "mt-1",
                                                        attrs: {
                                                          "align-h": "center"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "b-button",
                                                          {
                                                            directives: [
                                                              {
                                                                name: "ripple",
                                                                rawName:
                                                                  "v-ripple.400",
                                                                value:
                                                                  "rgba(255, 255, 255, 0.15)",
                                                                expression:
                                                                  "'rgba(255, 255, 255, 0.15)'",
                                                                modifiers: {
                                                                  "400": true
                                                                }
                                                              }
                                                            ],
                                                            staticClass: "mr-1",
                                                            attrs: {
                                                              type: "submit",
                                                              disabled:
                                                                _vm.user
                                                                  .isLoading,
                                                              variant: "primary"
                                                            }
                                                          },
                                                          [
                                                            _vm.user.isLoading
                                                              ? [
                                                                  _c(
                                                                    "b-spinner",
                                                                    {
                                                                      attrs: {
                                                                        small:
                                                                          ""
                                                                      }
                                                                    }
                                                                  ),
                                                                  _vm._v(
                                                                    "\n                            Loading...\n                          "
                                                                  )
                                                                ]
                                                              : [
                                                                  _c(
                                                                    "feather-icon",
                                                                    {
                                                                      staticClass:
                                                                        "mr-50",
                                                                      attrs: {
                                                                        icon:
                                                                          "SaveIcon"
                                                                      }
                                                                    }
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "align-middle"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "Submit"
                                                                      )
                                                                    ]
                                                                  )
                                                                ]
                                                          ],
                                                          2
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "b-button",
                                                          {
                                                            directives: [
                                                              {
                                                                name: "ripple",
                                                                rawName:
                                                                  "v-ripple.400",
                                                                value:
                                                                  "rgba(186, 191, 199, 0.15)",
                                                                expression:
                                                                  "'rgba(186, 191, 199, 0.15)'",
                                                                modifiers: {
                                                                  "400": true
                                                                }
                                                              }
                                                            ],
                                                            attrs: {
                                                              type: "reset",
                                                              variant: "warning"
                                                            },
                                                            on: {
                                                              click: _vm.reset
                                                            }
                                                          },
                                                          [
                                                            _c("feather-icon", {
                                                              staticClass:
                                                                "mr-50",
                                                              attrs: {
                                                                icon:
                                                                  "RefreshCcwIcon"
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "align-middle"
                                                              },
                                                              [_vm._v("Reset")]
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
                                  ]
                                }
                              }
                            ])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);