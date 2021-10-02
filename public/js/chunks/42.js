(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

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

/***/ "./frontend/src/@core/components/statistics-cards/StatisticCardHorizontal.vue":
/*!************************************************************************************!*\
  !*** ./frontend/src/@core/components/statistics-cards/StatisticCardHorizontal.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatisticCardHorizontal_vue_vue_type_template_id_0182a35d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatisticCardHorizontal.vue?vue&type=template&id=0182a35d& */ "./frontend/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=template&id=0182a35d&");
/* harmony import */ var _StatisticCardHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatisticCardHorizontal.vue?vue&type=script&lang=js& */ "./frontend/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StatisticCardHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatisticCardHorizontal_vue_vue_type_template_id_0182a35d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatisticCardHorizontal_vue_vue_type_template_id_0182a35d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/components/statistics-cards/StatisticCardHorizontal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./frontend/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticCardHorizontal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=template&id=0182a35d&":
/*!*******************************************************************************************************************!*\
  !*** ./frontend/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=template&id=0182a35d& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardHorizontal_vue_vue_type_template_id_0182a35d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticCardHorizontal.vue?vue&type=template&id=0182a35d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=template&id=0182a35d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardHorizontal_vue_vue_type_template_id_0182a35d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardHorizontal_vue_vue_type_template_id_0182a35d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/Home.vue":
/*!*************************************!*\
  !*** ./frontend/src/views/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_a19270ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=a19270ec& */ "./frontend/src/views/Home.vue?vue&type=template&id=a19270ec&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./frontend/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=scss& */ "./frontend/src/views/Home.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_a19270ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_a19270ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./frontend/src/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/Home.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************!*\
  !*** ./frontend/src/views/Home.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/Home.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/Home.vue?vue&type=template&id=a19270ec&":
/*!********************************************************************!*\
  !*** ./frontend/src/views/Home.vue?vue&type=template&id=a19270ec& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a19270ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=a19270ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/Home.vue?vue&type=template&id=a19270ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a19270ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a19270ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"]
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    statistic: {
      type: [Number, String],
      required: true
    },
    statisticTitle: {
      type: String,
      "default": ''
    },
    color: {
      type: String,
      "default": 'primary'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/vue */ "./frontend/node_modules/@fullcalendar/vue/dist/main.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/list */ "./frontend/node_modules/@fullcalendar/list/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./frontend/node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/interaction */ "./frontend/node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./frontend/node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var _core_components_statistics_cards_StatisticCardHorizontal_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/components/statistics-cards/StatisticCardHorizontal.vue */ "./frontend/src/@core/components/statistics-cards/StatisticCardHorizontal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







 // import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FullCalendar: _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    StatisticCardHorizontal: _core_components_statistics_cards_StatisticCardHorizontal_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      customers: {
        isLoading: false,
        search: '',
        paginateOptions: [5, 10, 25, 50, 100, 250],
        recordsPerPage: 50,
        fields: [{
          key: 'name',
          label: 'Name'
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
      },
      calendarOptions: {
        plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_2__["default"]],
        initialView: 'timeGridWeek',
        headerToolbar: {
          start: 'sidebarToggle, prev,next, title',
          end: 'timeGridWeek,timeGridDay,listMonth'
        },
        events: []
      },
      statistics: {
        isLoading: false,
        data: null
      }
    };
  },
  computed: {
    fullName: function fullName() {
      return JSON.parse(localStorage.getItem('vuex')).auth.user ? "".concat(JSON.parse(localStorage.getItem('vuex')).auth.user.name) : '';
    }
  },
  mounted: function mounted() {
    this.browseCustomers(this.customers.meta.current_page);
    this.fetchEvents();

    if (this.can('browse_statistics')) {
      this.browseStatistics();
    }
  },
  methods: {
    browseCustomers: function browseCustomers() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.customers.isLoading = true;
      this.$store.dispatch('customer/browse', "?paginate=".concat(this.customers.recordsPerPage, "&page=").concat(page, "&filter[search]=").concat(new Date().toISOString().split('T')[0])).then(function (response) {
        _this.customers.data = response.data.data;
        _this.customers.meta = response.data.meta.pagination;
        _this.customers.isLoading = false;
      })["catch"](function (error) {
        console.error(error);
        _this.customers.isLoading = false;
      });
    },
    browseStatistics: function browseStatistics() {
      var _this2 = this;

      this.statistics.isLoading = true;
      this.$store.dispatch('statistic/browse', '').then(function (response) {
        _this2.statistics.data = response.data.data;
        _this2.statistics.isLoading = false;
      })["catch"](function (error) {
        console.error(error);
        _this2.statistics.isLoading = false;
      });
    },
    fetchEvents: function fetchEvents() {
      var _this3 = this;

      _store__WEBPACK_IMPORTED_MODULE_6__["default"].dispatch('visits/browse', '').then(function (response) {
        _this3.calendarOptions.events = response.data.data.map(function (visit) {
          var _visit$room, _visit$bookable, _visit$bookable$packa, _visit$bookable2;

          return {
            allDay: false,
            start: new Date("".concat(visit.date, " ").concat(visit.start_time)),
            startStr: new Date("".concat(visit.date, " ").concat(visit.start_time)).toISOString(),
            end: new Date("".concat(visit.date, " ").concat(visit.end_time)),
            endStr: new Date("".concat(visit.date, " ").concat(visit.end_time)).toISOString(),
            timeZone: 'local',
            id: visit.id,
            url: '',
            title: "".concat(visit.isEvent ? visit.bookable.title : visit.room.name),
            extendedProps: {
              calendar: visit.visit_status.name
            },
            room_id: visit === null || visit === void 0 ? void 0 : (_visit$room = visit.room) === null || _visit$room === void 0 ? void 0 : _visit$room.id,
            date: visit.date,
            start_time: visit.start_time,
            end_time: visit.end_time,
            visit_status_id: visit.visit_status_id,
            order: visit.bookable,
            room: visit.room,
            rooms: visit.bookable ? visit === null || visit === void 0 ? void 0 : (_visit$bookable = visit.bookable) === null || _visit$bookable === void 0 ? void 0 : (_visit$bookable$packa = _visit$bookable["package"]) === null || _visit$bookable$packa === void 0 ? void 0 : _visit$bookable$packa.rooms : [],
            customers: visit.bookable ? visit === null || visit === void 0 ? void 0 : (_visit$bookable2 = visit.bookable) === null || _visit$bookable2 === void 0 ? void 0 : _visit$bookable2.customers : []
          };
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/Home.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/Home.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fc .fc-toolbar {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: row !important;\n          flex-direction: row !important;\n}\n.fc .fc-toolbar .fc-prev-button,\n.fc .fc-toolbar .fc-next-button {\n  display: inline-block;\n}\n[dir] .fc .fc-toolbar .fc-prev-button, [dir] .fc .fc-toolbar .fc-next-button {\n  background-color: transparent;\n  border-color: transparent;\n}\n.fc .fc-toolbar .fc-prev-button .fc-icon,\n.fc .fc-toolbar .fc-next-button .fc-icon {\n  color: #6e6b7b;\n}\n.fc .fc-toolbar .fc-prev-button:hover, .fc .fc-toolbar .fc-prev-button:active, .fc .fc-toolbar .fc-prev-button:focus,\n.fc .fc-toolbar .fc-next-button:hover,\n.fc .fc-toolbar .fc-next-button:active,\n.fc .fc-toolbar .fc-next-button:focus {\n  -webkit-box-shadow: none !important;\n}\n[dir] .fc .fc-toolbar .fc-prev-button:hover, [dir] .fc .fc-toolbar .fc-prev-button:active, [dir] .fc .fc-toolbar .fc-prev-button:focus, [dir] .fc .fc-toolbar .fc-next-button:hover, [dir] .fc .fc-toolbar .fc-next-button:active, [dir] .fc .fc-toolbar .fc-next-button:focus {\n  background-color: transparent !important;\n  border-color: transparent !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n}\n[dir=ltr] .fc .fc-toolbar .fc-prev-button {\n  padding-left: 0 !important;\n}\n[dir=rtl] .fc .fc-toolbar .fc-prev-button {\n  padding-right: 0 !important;\n}\n.fc .fc-toolbar .fc-toolbar-chunk:first-child {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n[dir] .fc .fc-toolbar .fc-button {\n  padding: 0.438rem 0.5rem;\n}\n.fc .fc-toolbar .fc-button:active, .fc .fc-toolbar .fc-button:focus {\n  -webkit-box-shadow: none;\n}\n[dir] .fc .fc-toolbar .fc-button:active, [dir] .fc .fc-toolbar .fc-button:focus {\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n}\n.fc .fc-toolbar .fc-button-group .fc-button {\n  text-transform: capitalize;\n}\n.fc .fc-toolbar .fc-button-group .fc-button:focus {\n  -webkit-box-shadow: none;\n}\n[dir] .fc .fc-toolbar .fc-button-group .fc-button:focus {\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n}\n.fc .fc-toolbar .fc-button-group .fc-button-primary:not(.fc-prev-button):not(.fc-next-button) {\n  color: #9b8666;\n}\n[dir] .fc .fc-toolbar .fc-button-group .fc-button-primary:not(.fc-prev-button):not(.fc-next-button) {\n  background-color: transparent;\n  border-color: #9b8666;\n}\n.fc .fc-toolbar .fc-button-group .fc-button-primary:not(.fc-prev-button):not(.fc-next-button).fc-button-active, .fc .fc-toolbar .fc-button-group .fc-button-primary:not(.fc-prev-button):not(.fc-next-button):hover {\n  color: #9b8666;\n}\n[dir] .fc .fc-toolbar .fc-button-group .fc-button-primary:not(.fc-prev-button):not(.fc-next-button).fc-button-active, [dir] .fc .fc-toolbar .fc-button-group .fc-button-primary:not(.fc-prev-button):not(.fc-next-button):hover {\n  background-color: rgba(155, 134, 102, 0.2) !important;\n  border-color: #9b8666 !important;\n}\n[dir] .fc .fc-toolbar .fc-button-group .fc-button-primary.fc-sidebarToggle-button {\n  border: 0;\n}\n.fc .fc-toolbar .fc-button-group .fc-button-primary.fc-sidebarToggle-button i,\n.fc .fc-toolbar .fc-button-group .fc-button-primary.fc-sidebarToggle-button svg {\n  height: 21px;\n  width: 21px;\n  font-size: 21px;\n}\n.fc .fc-toolbar .fc-button-group .fc-sidebarToggle-button {\n  color: #6e6b7b !important;\n}\n[dir] .fc .fc-toolbar .fc-button-group .fc-sidebarToggle-button {\n  background-color: transparent !important;\n}\n[dir=ltr] .fc .fc-toolbar .fc-button-group .fc-sidebarToggle-button {\n  padding-left: 0;\n}\n[dir=rtl] .fc .fc-toolbar .fc-button-group .fc-sidebarToggle-button {\n  padding-right: 0;\n}\n[dir] .fc .fc-toolbar .fc-button-group .fc-sidebarToggle-button:not(.fc-prev-button):not(.fc-next-button):hover {\n  background-color: transparent !important;\n}\n[dir=ltr] .fc .fc-toolbar .fc-button-group .fc-sidebarToggle-button + div {\n  margin-left: 0;\n}\n[dir=rtl] .fc .fc-toolbar .fc-button-group .fc-sidebarToggle-button + div {\n  margin-right: 0;\n}\n[dir] .fc .fc-toolbar .fc-button-group .fc-dayGridMonth-button, [dir] .fc .fc-toolbar .fc-button-group .fc-timeGridWeek-button, [dir] .fc .fc-toolbar .fc-button-group .fc-timeGridDay-button, [dir] .fc .fc-toolbar .fc-button-group .fc-listMonth-button {\n  padding: 0.55rem 1.5rem;\n}\n[dir] .fc .fc-toolbar .fc-button-group .fc-dayGridMonth-button:last-child, [dir] .fc .fc-toolbar .fc-button-group .fc-dayGridMonth-button:first-child, [dir] .fc .fc-toolbar .fc-button-group .fc-timeGridWeek-button:last-child, [dir] .fc .fc-toolbar .fc-button-group .fc-timeGridWeek-button:first-child, [dir] .fc .fc-toolbar .fc-button-group .fc-timeGridDay-button:last-child, [dir] .fc .fc-toolbar .fc-button-group .fc-timeGridDay-button:first-child, [dir] .fc .fc-toolbar .fc-button-group .fc-listMonth-button:last-child, [dir] .fc .fc-toolbar .fc-button-group .fc-listMonth-button:first-child {\n  border-radius: 0.358rem;\n}\n[dir=ltr] .fc .fc-toolbar .fc-button-group .fc-dayGridMonth-button:first-child, [dir=ltr] .fc .fc-toolbar .fc-button-group .fc-timeGridWeek-button:first-child, [dir=ltr] .fc .fc-toolbar .fc-button-group .fc-timeGridDay-button:first-child, [dir=ltr] .fc .fc-toolbar .fc-button-group .fc-listMonth-button:first-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .fc .fc-toolbar .fc-button-group .fc-dayGridMonth-button:first-child, [dir=rtl] .fc .fc-toolbar .fc-button-group .fc-timeGridWeek-button:first-child, [dir=rtl] .fc .fc-toolbar .fc-button-group .fc-timeGridDay-button:first-child, [dir=rtl] .fc .fc-toolbar .fc-button-group .fc-listMonth-button:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=ltr] .fc .fc-toolbar .fc-button-group .fc-dayGridMonth-button:last-child, [dir=ltr] .fc .fc-toolbar .fc-button-group .fc-timeGridWeek-button:last-child, [dir=ltr] .fc .fc-toolbar .fc-button-group .fc-timeGridDay-button:last-child, [dir=ltr] .fc .fc-toolbar .fc-button-group .fc-listMonth-button:last-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=rtl] .fc .fc-toolbar .fc-button-group .fc-dayGridMonth-button:last-child, [dir=rtl] .fc .fc-toolbar .fc-button-group .fc-timeGridWeek-button:last-child, [dir=rtl] .fc .fc-toolbar .fc-button-group .fc-timeGridDay-button:last-child, [dir=rtl] .fc .fc-toolbar .fc-button-group .fc-listMonth-button:last-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=ltr] .fc .fc-toolbar > * > :not(:first-child) {\n  margin-left: 0rem;\n}\n[dir=rtl] .fc .fc-toolbar > * > :not(:first-child) {\n  margin-right: 0rem;\n}\n[dir=ltr] .fc .fc-toolbar .fc-toolbar-title {\n  margin-left: 0.25rem;\n}\n[dir=rtl] .fc .fc-toolbar .fc-toolbar-title {\n  margin-right: 0.25rem;\n}\n.fc .fc-toolbar .fc--button:empty,\n.fc .fc-toolbar .fc-toolbar-chunk:empty {\n  display: none;\n}\n[dir] .fc tbody td, [dir] .fc thead th {\n  border-color: #ebe9f1;\n}\n[dir=ltr] .fc tbody td.fc-col-header-cell, [dir=ltr] .fc thead th.fc-col-header-cell {\n  border-right: 0;\n  border-left: 0;\n}\n[dir=rtl] .fc tbody td.fc-col-header-cell, [dir=rtl] .fc thead th.fc-col-header-cell {\n  border-left: 0;\n  border-right: 0;\n}\n.fc .fc-view-harness {\n  min-height: 650px;\n}\n[dir] .fc .fc-scrollgrid-section-liquid > td {\n  border-bottom: 0;\n}\n.fc .fc-daygrid-event-harness .fc-event {\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n[dir] .fc .fc-daygrid-event-harness .fc-event {\n  padding: 0.25rem 0.5rem;\n}\n[dir] .fc .fc-daygrid-event-harness + .fc-daygrid-event-harness {\n  margin-top: 0.3rem;\n}\n[dir] .fc .fc-daygrid-day-bottom {\n  margin-top: 0.3rem;\n}\n[dir] .fc .fc-daygrid-day {\n  padding: 5px;\n}\n.fc .fc-daygrid-day .fc-daygrid-day-top {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.fc .fc-daygrid-day-number,\n.fc .fc-timegrid-slot-label-cushion,\n.fc .fc-list-event-time {\n  color: #6e6b7b;\n}\n[dir] .fc .fc-day-today {\n  background: #f8f8f8 !important;\n  background-color: #f8f8f8 !important;\n}\n[dir] .fc .fc-timegrid .fc-scrollgrid-section .fc-col-header-cell, [dir] .fc .fc-timegrid .fc-scrollgrid-section .fc-timegrid-axis {\n  border-color: #ebe9f1;\n}\n[dir=ltr] .fc .fc-timegrid .fc-scrollgrid-section .fc-col-header-cell, [dir=ltr] .fc .fc-timegrid .fc-scrollgrid-section .fc-timegrid-axis {\n  border-left: 0;\n  border-right: 0;\n}\n[dir=rtl] .fc .fc-timegrid .fc-scrollgrid-section .fc-col-header-cell, [dir=rtl] .fc .fc-timegrid .fc-scrollgrid-section .fc-timegrid-axis {\n  border-right: 0;\n  border-left: 0;\n}\n[dir] .fc .fc-timegrid .fc-scrollgrid-section .fc-timegrid-axis {\n  border-color: #ebe9f1;\n}\n.fc .fc-timegrid .fc-timegrid-axis.fc-scrollgrid-shrink .fc-timegrid-axis-cushion {\n  text-transform: capitalize;\n  color: #b9b9c3;\n}\n.fc .fc-timegrid .fc-timegrid-slots .fc-timegrid-slot {\n  height: 3rem;\n}\n[dir] .fc .fc-timegrid .fc-timegrid-slots .fc-timegrid-slot .fc-timegrid-slot-label-frame {\n  text-align: center;\n}\n.fc .fc-timegrid .fc-timegrid-slots .fc-timegrid-slot .fc-timegrid-slot-label-frame .fc-timegrid-slot-label-cushion {\n  text-transform: uppercase;\n}\n.fc .fc-timegrid .fc-timegrid-divider {\n  display: none;\n}\n[dir] .fc .fc-list {\n  border-color: #ebe9f1;\n}\n[dir] .fc .fc-list .fc-list-day-cushion {\n  background: #f8f8f8;\n}\n[dir] .fc .fc-list .fc-list-event:hover td {\n  background-color: #f8f8f8;\n}\n[dir] .fc .fc-list .fc-list-event td {\n  border-color: #ebe9f1;\n}\n.app-calendar {\n  position: relative;\n}\n[dir] .app-calendar {\n  border-radius: 0.428rem;\n}\n.app-calendar .app-calendar-sidebar {\n  position: absolute;\n  width: 18rem;\n  height: 100%;\n  z-index: 5;\n  -ms-flex-preferred-size: 18rem;\n      flex-basis: 18rem;\n  -webkit-transition: all 0.2s, background 0s, border 0s;\n  transition: all 0.2s, background 0s, border 0s;\n}\n[dir] .app-calendar .app-calendar-sidebar {\n  background-color: #fff;\n  -webkit-transition: all 0.2s, background 0s, border 0s;\n}\n[dir=ltr] .app-calendar .app-calendar-sidebar {\n  left: calc(-18rem - 1.2rem);\n  border-right: 1px solid #ebe9f1;\n}\n[dir=rtl] .app-calendar .app-calendar-sidebar {\n  right: calc(-18rem - 1.2rem);\n  border-left: 1px solid #ebe9f1;\n}\n[dir=ltr] .app-calendar .app-calendar-sidebar.show {\n  left: 0;\n}\n[dir=rtl] .app-calendar .app-calendar-sidebar.show {\n  right: 0;\n}\n.app-calendar .app-calendar-sidebar .sidebar-content-title {\n  font-size: 0.85rem;\n  color: #b9b9c3;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n}\n.app-calendar .app-calendar-sidebar .select-all ~ label,\n.app-calendar .app-calendar-sidebar .input-filter ~ label {\n  color: #5e5873;\n  font-weight: 500;\n  letter-spacing: 0.4px;\n}\n.app-calendar .event-sidebar {\n  position: absolute;\n  top: 0;\n  width: 400px;\n  z-index: 15;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n[dir] .app-calendar .event-sidebar {\n  -webkit-transition: all 0.3s ease-in-out;\n}\n[dir=ltr] .app-calendar .event-sidebar {\n  right: 0;\n  -webkit-transform: translateX(120%);\n  transform: translateX(120%);\n}\n[dir=rtl] .app-calendar .event-sidebar {\n  left: 0;\n  -webkit-transform: translateX(-120%);\n          transform: translateX(-120%);\n}\n.app-calendar .event-sidebar .card {\n  height: calc(100vh - 12.96rem);\n  height: calc(var(--vh, 1vh) * 100 - 12.96rem);\n}\n[dir=ltr] .app-calendar .event-sidebar .card {\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n[dir=rtl] .app-calendar .event-sidebar .card {\n  border-radius: 0.25rem 0 0 0.25rem;\n}\n[dir] .app-calendar .event-sidebar .card .close-bar {\n  cursor: pointer;\n}\n.app-calendar .event-sidebar .card .todo-item-action {\n  width: 6rem;\n}\n.app-calendar .event-sidebar .card .todo-item-action .todo-item-info,\n.app-calendar .event-sidebar .card .todo-item-action .todo-item-favorite,\n.app-calendar .event-sidebar .card .todo-item-action .dropdown {\n  line-height: 1.5;\n}\n[dir] .app-calendar .event-sidebar .card .todo-item-action .todo-item-info, [dir] .app-calendar .event-sidebar .card .todo-item-action .todo-item-favorite, [dir] .app-calendar .event-sidebar .card .todo-item-action .dropdown {\n  cursor: pointer;\n}\n[dir] .app-calendar .event-sidebar .card .todo-item-action .dropdown .dropdown-menu .dropdown-item {\n  padding: 0.14rem 1.428rem;\n}\n.app-calendar .event-sidebar .card .todo-item-action .dropdown-toggle::after {\n  display: none;\n}\n.app-calendar .event-sidebar.show {\n  -webkit-transform: translateX(0);\n}\n[dir] .app-calendar .event-sidebar.show {\n          -webkit-transform: translateX(0);\n                  transform: translateX(0);\n}\n.app-calendar .fc-toolbar h2 {\n  font-size: 1.45rem;\n}\n[dir] .app-calendar .fc-header-toolbar {\n  margin-bottom: 1.75rem !important;\n}\n[dir] .app-calendar .fc-view-harness {\n  margin: 0 -1.6rem;\n}\n[dir] .app-calendar .fc-scrollgrid {\n  border-color: #ebe9f1;\n}\n.app-calendar .fc-day-past .fc-daygrid-day-number,\n.app-calendar .fc-day-future .fc-daygrid-day-number {\n  color: #b9b9c3;\n}\n.app-calendar .fc-popover {\n  -webkit-box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);\n}\n[dir] .app-calendar .fc-popover {\n          -webkit-box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);\n                  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);\n}\n[dir] .app-calendar .fc-popover .fc-popover-header {\n  background: transparent;\n  padding: 0.5rem;\n}\n.app-calendar .fc-popover .fc-popover-header .fc-popover-title,\n.app-calendar .fc-popover .fc-popover-header .fc-popover-close {\n  color: #5e5873;\n}\n[dir] .app-calendar .fc-popover .fc-popover-body *:not(:last-of-type) {\n  margin-bottom: 0.3rem;\n}\n.app-calendar .fc .fc-event .fc-event-main {\n  color: inherit;\n}\n[dir] .app-calendar .fc-list-event {\n  background: transparent !important;\n}\n@media (min-width: 992px) {\n.app-calendar .app-calendar-sidebar {\n    position: static;\n    height: auto;\n    -webkit-box-shadow: none !important;\n}\n[dir] .app-calendar .app-calendar-sidebar {\n            -webkit-box-shadow: none !important;\n                    box-shadow: none !important;\n}\n[dir] .app-calendar .app-calendar-sidebar .flatpickr-days {\n    background-color: transparent;\n}\n}\n.event-sidebar .select2-selection__choice__remove:before {\n  top: 40% !important;\n}\n[dir] .horizontal-layout .app-calendar {\n  margin-bottom: 1rem;\n}\n@media (max-width: 992px) {\n.fc .fc-sidebarToggle-button {\n    font-size: 0;\n}\n}\n@media (min-width: 992px) {\n.fc .fc-sidebarToggle-button {\n    display: none;\n}\n}\n@media (max-width: 700px) {\n[dir] .app-calendar .fc .fc-header-toolbar .fc-toolbar-chunk:last-of-type {\n    margin-top: 1rem;\n}\n}\n.fc-sidebarToggle-button {\n  width: 25px;\n  height: 25px;\n  display: block;\n}\n[dir] .fc-sidebarToggle-button {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' stroke='%236e6b7b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1'%3E%3Cline x1='3' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='21' y2='18'%3E%3C/line%3E%3C/svg%3E\");\n  background-position: center;\n  background-repeat: no-repeat;\n}\n[dir=ltr] .fc-sidebarToggle-button {\n  margin-right: 0.7rem !important;\n}\n[dir=rtl] .fc-sidebarToggle-button {\n  margin-left: 0.7rem !important;\n}\n[dir] .app-calendar {\n  padding: 40px;\n}\n.fc-timegrid-event .fc-event-time,\n.fc-v-event .fc-event-title-container {\n  color: white;\n  font-weight: bold;\n  font-size: 14px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/Home.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/Home.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/Home.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=template&id=0182a35d&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=template&id=0182a35d& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { attrs: { "no-body": "" } },
    [
      _c(
        "b-card-body",
        { staticClass: "d-flex justify-content-between align-items-center" },
        [
          _c("div", { staticClass: "truncate" }, [
            _c("h2", { staticClass: "mb-25 font-weight-bolder" }, [
              _vm._v("\n        " + _vm._s(_vm.statistic) + "\n      ")
            ]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.statisticTitle))])
          ]),
          _vm._v(" "),
          _c(
            "b-avatar",
            { attrs: { variant: "light-" + _vm.color, size: "45" } },
            [_c("feather-icon", { attrs: { size: "21", icon: _vm.icon } })],
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/Home.vue?vue&type=template&id=a19270ec&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/Home.vue?vue&type=template&id=a19270ec& ***!
  \**************************************************************************************************************************************************************************************************/
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
        { staticClass: "mt-2 mb-3" },
        [
          _c("b-col", { attrs: { cols: "12" } }, [
            _c("h1", { staticClass: "font-weight-bolder" }, [
              _vm._v("\n        Welcome "),
              _c("span", { staticClass: "text-primary" }, [
                _vm._v(_vm._s(_vm.fullName) + ",")
              ])
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.can("browse_statistics")
        ? _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { lg: "4", md: "4", sm: "6" } },
                [
                  _c("statistic-card-horizontal", {
                    attrs: {
                      icon: "UsersIcon",
                      statistic: _vm.statistics.data
                        ? _vm.statistics.data.monthly_registered_users
                        : 0,
                      "statistic-title": "Month Customers"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { lg: "4", md: "4", sm: "6" } },
                [
                  _c("statistic-card-horizontal", {
                    attrs: {
                      icon: "Edit3Icon",
                      statistic: _vm.statistics.data
                        ? _vm.statistics.data.monthly_orders
                        : 0,
                      "statistic-title": "Month Orders"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { lg: "4", md: "4", sm: "6" } },
                [
                  _c("statistic-card-horizontal", {
                    attrs: {
                      icon: "ShoppingBagIcon",
                      statistic: _vm.statistics.data
                        ? _vm.statistics.data.monthly_buffet_orders.count
                        : 0,
                      "statistic-title": "Month Buffet Orders"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { lg: "4", md: "4", sm: "6" } },
                [
                  _c("statistic-card-horizontal", {
                    attrs: {
                      icon: "DollarSignIcon",
                      statistic: _vm.statistics.data
                        ? _vm.statistics.data.monthly_package_sales.total
                        : 0,
                      "statistic-title": "Month Package Sales"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { lg: "4", md: "4", sm: "6" } },
                [
                  _c("statistic-card-horizontal", {
                    attrs: {
                      icon: "DollarSignIcon",
                      statistic: _vm.statistics.data
                        ? _vm.statistics.data.monthly_package_sales.paid
                        : 0,
                      "statistic-title": "Month Paid Sales"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { lg: "4", md: "4", sm: "6" } },
                [
                  _c("statistic-card-horizontal", {
                    attrs: {
                      icon: "DollarSignIcon",
                      statistic: _vm.statistics.data
                        ? _vm.statistics.data.monthly_package_sales.total -
                          _vm.statistics.data.monthly_package_sales.paid
                        : 0,
                      "statistic-title": "Month Remaining Sales"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { lg: "4", md: "4", sm: "6" } },
                [
                  _c("statistic-card-horizontal", {
                    attrs: {
                      icon: "DollarSignIcon",
                      statistic: _vm.statistics.data
                        ? _vm.statistics.data.monthly_buffet_orders.amount
                        : 0,
                      "statistic-title": "Month Buffet Sales"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { lg: "4", md: "4", sm: "6" } },
                [
                  _c("statistic-card-horizontal", {
                    attrs: {
                      icon: "CalendarIcon",
                      statistic: _vm.statistics.data
                        ? _vm.statistics.data.monthly_visits.orders
                        : 0,
                      "statistic-title": "Month Order Visits"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { lg: "4", md: "4", sm: "6" } },
                [
                  _c("statistic-card-horizontal", {
                    attrs: {
                      icon: "CalendarIcon",
                      statistic: _vm.statistics.data
                        ? _vm.statistics.data.monthly_visits.events
                        : 0,
                      "statistic-title": "Month Event Visits"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { lg: "6", md: "12", sm: "12" } },
            [
              _c(
                "b-overlay",
                { attrs: { show: _vm.customers.isLoading, rounded: "sm" } },
                [
                  _c(
                    "b-card-actions",
                    {
                      ref: "customerCard",
                      attrs: {
                        title: "Today's Birthdate Customers 🎂🎉",
                        "action-collapse": ""
                      }
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("b-table", {
                                attrs: {
                                  responsive: "",
                                  outlined: true,
                                  items: _vm.customers.data.filter(function(
                                    customer
                                  ) {
                                    return (
                                      new Date(
                                        customer.date_of_birth
                                      ).getDate() === new Date().getDate() &&
                                      new Date(
                                        customer.date_of_birth
                                      ).getMonth() === new Date().getMonth()
                                    )
                                  }),
                                  fields: _vm.customers.fields,
                                  "head-variant": "dark"
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "cell(name)",
                                    fn: function(data) {
                                      return [
                                        _vm._v(
                                          "\n                  #TKB" +
                                            _vm._s(data.item.id) +
                                            " "
                                        ),
                                        _c("br"),
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(data.item.name) +
                                            " "
                                        ),
                                        _c("br"),
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(data.item.email) +
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
                                            _vm.can("view_customer")
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
                                                      title: "View Customer",
                                                      variant: "primary",
                                                      to:
                                                        "/customers/" +
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
                              attrs: { md: "4", sm: "6", xs: "6" }
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
                                      options: _vm.customers.paginateOptions
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.browseCustomers(1)
                                      }
                                    },
                                    model: {
                                      value: _vm.customers.recordsPerPage,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.customers,
                                          "recordsPerPage",
                                          $$v
                                        )
                                      },
                                      expression: "customers.recordsPerPage"
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
                              attrs: { md: "8", sm: "6", xs: "6" }
                            },
                            [
                              _c("b-pagination", {
                                staticClass: "my-0",
                                attrs: {
                                  "total-rows": _vm.customers.meta.total,
                                  "per-page": _vm.customers.recordsPerPage,
                                  align: "right",
                                  "first-number": "",
                                  "last-number": "",
                                  "prev-class": "prev-item",
                                  "next-class": "next-item"
                                },
                                on: { change: _vm.browseCustomers },
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
                                  value: _vm.customers.meta.current_page,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.customers.meta,
                                      "current_page",
                                      $$v
                                    )
                                  },
                                  expression: "customers.meta.current_page"
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "6", md: "12", sm: "12" } },
            [
              _c(
                "b-overlay",
                { attrs: { show: _vm.customers.isLoading, rounded: "sm" } },
                [
                  _c(
                    "b-card-actions",
                    {
                      ref: "customerCard",
                      attrs: {
                        title: "Today's Follow Up ⏰",
                        "action-collapse": ""
                      }
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("b-table", {
                                attrs: {
                                  responsive: "",
                                  outlined: true,
                                  items: _vm.customers.data.filter(function(
                                    customer
                                  ) {
                                    return (
                                      new Date(
                                        customer.next_follow_up
                                      ).getDate() === new Date().getDate() &&
                                      new Date(
                                        customer.next_follow_up
                                      ).getMonth() === new Date().getMonth() &&
                                      new Date(
                                        customer.next_follow_up
                                      ).getUTCFullYear() ===
                                        new Date().getUTCFullYear()
                                    )
                                  }),
                                  fields: _vm.customers.fields,
                                  "head-variant": "dark"
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "cell(name)",
                                    fn: function(data) {
                                      return [
                                        _vm._v(
                                          "\n                  #TKB" +
                                            _vm._s(data.item.id) +
                                            " "
                                        ),
                                        _c("br"),
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(data.item.name) +
                                            " "
                                        ),
                                        _c("br"),
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(data.item.email) +
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
                                            _vm.can("view_customer")
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
                                                      title: "View Customer",
                                                      variant: "primary",
                                                      to:
                                                        "/customers/" +
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
                              attrs: { md: "4", sm: "6", xs: "6" }
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
                                      options: _vm.customers.paginateOptions
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.browseCustomers(1)
                                      }
                                    },
                                    model: {
                                      value: _vm.customers.recordsPerPage,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.customers,
                                          "recordsPerPage",
                                          $$v
                                        )
                                      },
                                      expression: "customers.recordsPerPage"
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
                              attrs: { md: "8", sm: "6", xs: "6" }
                            },
                            [
                              _c("b-pagination", {
                                staticClass: "my-0",
                                attrs: {
                                  "total-rows": _vm.customers.meta.total,
                                  "per-page": _vm.customers.recordsPerPage,
                                  align: "right",
                                  "first-number": "",
                                  "last-number": "",
                                  "prev-class": "prev-item",
                                  "next-class": "next-item"
                                },
                                on: { change: _vm.browseCustomers },
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
                                  value: _vm.customers.meta.current_page,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.customers.meta,
                                      "current_page",
                                      $$v
                                    )
                                  },
                                  expression: "customers.meta.current_page"
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
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-col", { attrs: { cols: "12" } }, [
            _c(
              "div",
              { staticClass: "app-calendar overflow-hidden border" },
              [
                _c("full-calendar", {
                  ref: "refCalendar",
                  staticClass: "full-calendar",
                  attrs: { options: _vm.calendarOptions }
                })
              ],
              1
            )
          ])
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