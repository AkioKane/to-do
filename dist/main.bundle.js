/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do"] = self["webpackChunkto_do"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto/Roboto-Regular.ttf */ \"./src/fonts/Roboto/Roboto-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"Roboto\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n:root {\n  --bg-color: #f1f5f9;\n  --btn-color: #71717a;\n  --btn-margin: 1em;\n  --btn-add: #4ade80;\n  --btn-cancel: #f87171;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nbutton {\n  font-family: \"Roboto\", sans-serif;\n}\n\ninput {\n  border-radius: 5px;\n  border: 1px solid #a1a1aa;\n  padding-left: 3px;\n}\n\ninput:focus {\n  border: 2px solid var(--btn-color);\n}\n\n.main {\n  min-height: 100vh;\n  background-color: var(--bg-color);\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10vh;\n  background-color: rgb(15 23 42);\n  color: white;\n}\n\nheader h1 {\n  font-family: \"Roboto\";\n  transition: all 0.2s ease;\n}\n\nheader h1:hover {\n  opacity: 0.5;\n}\n\n#content {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  min-height: calc(100vh - 10vh);\n  width: 100vw;\n}\n\n.panel {\n  text-align: center;\n  background-color: #a1a1aa;\n  max-width: 400px;\n  min-width: 200px;\n}\n\n.container > .btn-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: var(--btn-margin);\n  margin-bottom: 0;\n  width: calc(100% - var(--btn-margin)*2);\n  border: none;\n  border-radius: 5px;\n  height: 2em;\n  transition: all 0.2s ease;\n}\n\n.container .btn-item:hover {\n  background-color: var(--btn-color);\n}\n\n.btn-item.active {\n  background-color: var(--btn-color);\n}\n\n.container h2 {\n  display: flex;\n  margin-top: 1em;\n  justify-content: center;\n}\n\n.add-project {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: var(--btn-margin);\n  margin-bottom: 0;\n  width: calc(100% - var(--btn-margin)*2);\n  border: none;\n  border-radius: 5px;\n  height: 2em;\n  transition: all 0.2s ease;\n}\n\n.container .add-project:hover {\n  background-color: #d9f99d;\n}\n\n.container .add-project:active {\n  background-color: #a3e635;\n}\n\n.container .item-project {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: var(--btn-margin);\n  margin-bottom: 0;\n  width: calc(100% - var(--btn-margin)*2);\n  border: none;\n  border-radius: 5px;\n  height: 2em;\n  transition: all 0.2s ease;\n}\n\n.container .added-project {\n  display: none;\n  margin: var(--btn-margin);\n  width: calc(100% - var(--btn-margin)*2);\n}\n\n.container .added-project input {\n  width: 100%;\n  height: 2em;\n}\n\n.container .added-project .btns-added-project {\n  display: flex;\n  margin-top: 0.25em;\n  justify-content: space-between;\n  gap: 3em;\n}\n\n.container .added-project .btns-added-project button {\n  width: 100%;\n  height: 2em;\n}\n\n.btn-cancel {\n  margin-left: 2em;\n}\n\n.container-projects {\n  display: flex;\n  justify-content: center;\n}\n\n.container-projects .content {\n  margin: 2em;\n}\n\n.container-projects .content, .container-page, .items{\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\n\n.container-projects .content .container-page h1 { margin-bottom: 0.25em; }\n.container-projects .content button, .item {\n  width: 50%;\n  height: 2em;\n  margin-bottom: 0.5em;\n  border: 1px solid black;\n  border-radius: 5px;\n  background-color: white;\n  transition: all 0.2s ease;\n}\n\n.item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.container-projects .content button:hover {\n  background-color: var(--btn-color);\n  border: none;\n}\n\n.container-projects .content button:active {\n  background-color: var(--btn-color);\n}\n\n.content .added-project {\n  display: none;\n  width: 50%;\n}\n\n.content .added-project .btns-added-project{\n  width: 100%;\n}\n\n.content .added-project input{\n  height: 2em;\n  width: 100%;\n}\n\n.content .added-project button {\n  width: 20;\n}\n\n.content .added-project .btns-added-project {\n  display: flex;\n  margin-top: 0.25em;\n  justify-content: space-between;\n  gap: 1em;\n}\n\n.content .added-project .btns-added-project .btn-add {\n  background-color: var(--btn-add);\n}\n\n.content .added-project .btns-added-project .btn-add:active {\n  border: 5px solid var(--btn-add);\n}\n\n.content .added-project .btns-added-project .btn-cancel {\n  background-color: var(--btn-cancel);\n}\n\n.content .added-project .btns-added-project .btn-cancel:active {\n  border: 5px solid var(--btn-cancel);\n}\n\n.input-date-item {\n  /* display: none; */\n  display: flex;\n  border: none;\n  background-color: white;\n  transition: border 0.2s ease-in-out;\n\n}\n\n.input-date-item:focus {\n  border: 1px solid black;\n}\n\n.checkbox-input:checked {\n  background-color: black;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://to-do/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/add.svg */ \"./src/assets/add.svg\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ \"./src/register.js\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_register__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst content = document.getElementById(\"content\")\n\nfunction start() {\n  _register__WEBPACK_IMPORTED_MODULE_2__.activeButton()\n  _register__WEBPACK_IMPORTED_MODULE_2__.addProject()\n}\n\nstart()\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/register.js":
/*!*************************!*\
  !*** ./src/register.js ***!
  \*************************/
/***/ ((module) => {

eval("let currentlyPage = \"inbox\"\n\nlet projectsList = []\n\nfunction activeButton(flag) {\n  const buttons = document.querySelectorAll(\".btn-item\")\n  const inbox = document.querySelector(\"#inbox\")\n  const today = document.querySelector(\"#today\")\n  const week = document.querySelector(\"#week\")\n\n  if (flag != true) {\n    inbox.classList.add(\"active\");\n  }\n  \n  buttons.forEach(button => {\n    button.addEventListener(\"mousedown\", () => {\n      buttons.forEach(btn => btn.classList.remove(\"active\"));\n      \n      button.classList.add(\"active\");\n    });\n  });\n\n  inbox.addEventListener(\"mousedown\", () => {\n    buttons.forEach(btn => btn.classList.remove(\"active\"));\n    inbox.classList.add(\"active\");\n  });\n\n  today.addEventListener(\"mousedown\", () => {\n    buttons.forEach(btn => btn.classList.remove(\"active\"));\n    today.classList.add(\"active\");\n  });\n\n  week.addEventListener(\"mousedown\", () => {\n    buttons.forEach(btn => btn.classList.remove(\"active\"));\n    week.classList.add(\"active\");\n  });\n}\n\nfunction addProject() {\n  const btn = document.querySelector(\".add-project\")\n  const panel = document.querySelector(\".added-project\")\n  const btnAdd = document.querySelector(\".btn-add\")\n  const btnCancel = document.querySelector(\".btn-cancel\")\n\n  const btnAddContent = document.querySelector(\".add-item\")\n  const panelContent = document.querySelector(\".add-panel-content\")\n  const btnAddItem = document.querySelector(\".btn-add-item\")\n\n  const btnItem = document.querySelectorAll(\".btn-item\")\n  const today = document.querySelector(\"#today-page\")\n  const week = document.querySelector(\"#week-page\")\n\n  today.style.display = \"none\";\n  week.style.display = \"none\";\n\n  btnItem.forEach(btn => {\n    btn.addEventListener(\"click\", () => {\n      activePage(btn.id)\n    })\n  })\n\n  btn.addEventListener(\"click\", () => {\n    panel.style.display = \"block\";\n    btn.style.display = \"none\";\n  })\n  btnAdd.addEventListener(\"click\", () => {\n    // function add project\n    const input = document.querySelector(\".input-project\")\n    addProjectItem(input)\n    resetElement(input)\n    \n    panel.style.display = \"none\";\n    btn.style.display = \"flex\";\n  })\n  btnCancel.addEventListener(\"click\", () => {\n    panel.style.display = \"none\";\n    btn.style.display = \"flex\";\n  })\n  btnAddContent.addEventListener(\"click\", () => {\n    panelContent.style.display = \"block\";\n    btnAddContent.style.display = \"none\";\n  })\n  btnAddItem.addEventListener(\"click\", () => {\n    const input = document.querySelector(\".input-content\")\n    addContentItem(input, currentlyPage)\n    resetElement(input)\n\n    panelContent.style.display = \"none\";\n    btnAddContent.style.display = \"block\"\n  })\n}\n\nfunction addProjectItem(value) {\n  const container = document.querySelector(\".container\")\n  const item = document.createElement(\"button\")\n\n  if (value.value != \"\") {\n    item.innerHTML = value.value\n    item.id = value.value\n    item.classList.add(\"btn-item\")\n    projectsList.push(value.value)\n    \n    item.addEventListener(\"click\", () => {\n      activeButton(true)\n      activePage(item.id);\n      \n    });\n  }\n  else {\n    return alert(\"The field must not be empty\")\n  }\n\n  container.appendChild(item)\n}\n\nfunction addContentItem(value, currentlyPage) {\n  const container = document.querySelector(`.items-${currentlyPage}`)\n  const item = document.createElement(\"button\")\n\n  item.classList.add(\"item\")\n\n  if (value.value != \"\") {\n    const i = document.createElement(\"input\")\n    i.classList.add(\"checkbox-input\")\n    i.type = \"checkbox\"\n    item.appendChild(i)\n\n    const p = document.createElement(\"p\")\n    p.innerHTML = value.value\n    item.appendChild(p)\n\n    const date = document.createElement(\"input\")\n    date.classList.add(\"input-date-item\")\n    date.type = \"date\"\n    item.appendChild(date)\n  }\n  else {\n    return alert(\"The field must not be empty\")\n  }\n\n  container.appendChild(item)\n}\n\nfunction resetElement(element) {\n  return element.value = \"\"\n}\n\nfunction resetPage(btn) {\n  const allItems = document.querySelectorAll(\".container-page\")\n  allItems.forEach(item => {item.style.display = \"none\";})\n\n  btn.style.display = \"block\"\n}\n\nfunction activePage(btn) {\n  const inbox = document.querySelector(\"#inbox-page\")\n  const today = document.querySelector(\"#today-page\")\n  const week = document.querySelector(\"#week-page\")\n  const customItems = document.querySelectorAll(\".custom-items\")\n\n  console.log(\"active\")\n\n  if (btn == \"inbox\" || btn == \"today\" || btn == \"week\") {\n    inbox.style.display = \"none\";\n    today.style.display = \"none\";\n    week.style.display = \"none\";\n    customItems.forEach(item => {item.style.display = \"none\"})\n    document.querySelector(`#${btn}-page`).style.display = \"block\"\n    currentlyPage = btn\n  }\n  else {\n    const container = document.querySelector(\".content\")\n    const itemContent = container.querySelector(`.r${btn}`)\n    if (!itemContent) {\n      const btnAdd = document.querySelector(\".add-item\")\n\n      const div = document.createElement(\"div\")\n      div.classList.add(`r${btn}`)\n      div.classList.add(\"custom-items\")\n      div.classList.add(\"container-page\")\n      div.id = `${btn}-page`\n      container.insertBefore(div, btnAdd)\n      resetPage(div)\n\n      const h1 = document.createElement(\"h1\")\n      h1.innerHTML = btn\n      div.appendChild(h1)\n\n      const items = document.createElement(\"div\")\n      items.classList.add(\"items\")\n      items.classList.add(`items-${btn}`)\n      div.appendChild(items)\n\n      currentlyPage = btn\n    }\n    else {\n      resetPage(itemContent)\n      itemContent.style.display = \"block\"\n    }\n  }\n}\n\nfunction updateScreen() {\n\n}\n\nmodule.exports = {\n  activeButton,\n  addProject\n}\n\n//# sourceURL=webpack://to-do/./src/register.js?");

/***/ }),

/***/ "./src/assets/add.svg":
/*!****************************!*\
  !*** ./src/assets/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/add.svg\";\n\n//# sourceURL=webpack://to-do/./src/assets/add.svg?");

/***/ }),

/***/ "./src/fonts/Roboto/Roboto-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/Roboto/Roboto-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/Roboto-Regular.ttf\";\n\n//# sourceURL=webpack://to-do/./src/fonts/Roboto/Roboto-Regular.ttf?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);