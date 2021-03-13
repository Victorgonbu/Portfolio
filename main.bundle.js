/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/scripts/main.js":
/*!************************************!*\
  !*** ./src/assets/scripts/main.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/reset.css */ \"./src/assets/style/reset.css\");\n/* harmony import */ var _style_small_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/small.css */ \"./src/assets/style/small.css\");\n/* harmony import */ var _style_medium_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/medium.css */ \"./src/assets/style/medium.css\");\n/* harmony import */ var _style_big_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/big.css */ \"./src/assets/style/big.css\");\n\n\n\n\nvar dropdown = document.querySelector('[data-dropdown]');\nvar dropdownMenu = document.querySelector('[data-dropdown-menu]');\ndropdown.addEventListener('click', function () {\n  dropdownMenu.classList.toggle('active');\n});\nvar navLink = document.querySelectorAll('.nav-link');\nnavLink.forEach(function (link) {\n  link.addEventListener('click', function () {\n    dropdownMenu.classList.toggle('active');\n  });\n});\n\n//# sourceURL=webpack://portfolio/./src/assets/scripts/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style/big.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style/big.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@media (min-width: 1280px) {\\r\\n    .navbar {\\r\\n        padding: 0 96px;\\r\\n       \\r\\n    }\\r\\n\\r\\n    .section {\\r\\n        position: relative;\\r\\n        padding: 0 96px;\\r\\n      }\\r\\n      \\r\\n      .intro {\\r\\n        height: 100vh;\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        justify-content: center;\\r\\n        font-family: 'Special Elite', cursive;\\r\\n        font-size: 3em;\\r\\n        overflow: hidden;\\r\\n      }\\r\\n\\r\\n      .intro-info {\\r\\n        width: 50%;\\r\\n      }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio/./src/assets/style/big.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style/medium.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style/medium.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@media (min-width: 500px) {\\r\\n    .navigation-links {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n    }\\r\\n    .drop-down {\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .dropdown-menu {\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .hero-span {\\r\\n        right: 15%;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio/./src/assets/style/medium.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style/reset.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style/reset.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ \\r\\n   v2.0 | 20110126\\r\\n   License: none (public domain)\\r\\n*/\\r\\n\\r\\nhtml, body, div, span, applet, object, iframe,\\r\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\r\\na, abbr, acronym, address, big, cite, code,\\r\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\r\\nsmall, strike, strong, sub, sup, tt, var,\\r\\nb, u, i, center,\\r\\ndl, dt, dd, ol, ul, li,\\r\\nfieldset, form, label, legend,\\r\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\r\\narticle, aside, canvas, details, embed, \\r\\nfigure, figcaption, footer, header, hgroup, \\r\\nmenu, nav, output, ruby, section, summary,\\r\\ntime, mark, audio, video {\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n\\tborder: 0;\\r\\n\\tfont-size: 100%;\\r\\n\\tfont: inherit;\\r\\n    vertical-align: baseline;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n/* HTML5 display-role reset for older browsers */\\r\\narticle, aside, details, figcaption, figure, \\r\\nfooter, header, hgroup, menu, nav, section {\\r\\n\\tdisplay: block;\\r\\n}\\r\\nbody {\\r\\n\\tline-height: 1;\\r\\n}\\r\\nol, ul {\\r\\n\\tlist-style: none;\\r\\n}\\r\\nblockquote, q {\\r\\n\\tquotes: none;\\r\\n}\\r\\nblockquote:before, blockquote:after,\\r\\nq:before, q:after {\\r\\n\\tcontent: '';\\r\\n\\tcontent: none;\\r\\n}\\r\\ntable {\\r\\n\\tborder-collapse: collapse;\\r\\n\\tborder-spacing: 0;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio/./src/assets/style/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style/small.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style/small.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_mockups_PAW_SHAPED_MOCK_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/mockups/PAW_SHAPED_MOCK.png */ \"./src/assets/images/mockups/PAW_SHAPED_MOCK.png\");\n/* harmony import */ var _images_mockups_GO_ON_SALES_MOCK_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/mockups/GO_ON_SALES_MOCK.png */ \"./src/assets/images/mockups/GO_ON_SALES_MOCK.png\");\n/* harmony import */ var _images_mockups_RUBY_DOCS_MOCK_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/mockups/RUBY_DOCS_MOCK.png */ \"./src/assets/images/mockups/RUBY_DOCS_MOCK.png\");\n/* harmony import */ var _images_mockups_PRIVATE_EVENTS_MOCK_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/mockups/PRIVATE_EVENTS_MOCK.png */ \"./src/assets/images/mockups/PRIVATE_EVENTS_MOCK.png\");\n/* harmony import */ var _images_mockups_STAY_TOUCH_MOCK_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/mockups/STAY_TOUCH_MOCK.png */ \"./src/assets/images/mockups/STAY_TOUCH_MOCK.png\");\n// Imports\n\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_mockups_PAW_SHAPED_MOCK_png__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_mockups_GO_ON_SALES_MOCK_png__WEBPACK_IMPORTED_MODULE_3__);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_mockups_RUBY_DOCS_MOCK_png__WEBPACK_IMPORTED_MODULE_4__);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_mockups_PRIVATE_EVENTS_MOCK_png__WEBPACK_IMPORTED_MODULE_5__);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_mockups_STAY_TOUCH_MOCK_png__WEBPACK_IMPORTED_MODULE_6__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --yellow: rgb(255, 230, 0);\\r\\n  --brown: #4c4637;\\r\\n  --beich: #b2ab99;\\r\\n  --exo-green: #00e4c2;\\r\\n  --background: #e6e6e6;\\r\\n}\\r\\n\\r\\n.body {\\r\\n  font-family: 'Merienda One', cursive;\\r\\n  background-color: var(--background);\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  height: 10%;\\r\\n  position: fixed;\\r\\n  width: 100%;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  height: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 0 20px;\\r\\n  background-color: var(--background);\\r\\n}\\r\\n\\r\\n.brand {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  font-weight: 900;\\r\\n  font-size: 2em;\\r\\n  font-family: 'Special Elite', cursive;\\r\\n}\\r\\n\\r\\n.drop-down {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.dropdown-menu {\\r\\n  position: absolute;\\r\\n  top: 9.9%;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 50%;\\r\\n  background-color: var(--background);\\r\\n  z-index: 10;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-around;\\r\\n  text-align: center;\\r\\n  font-size: 1.5em;\\r\\n  transform: scaleY(0);\\r\\n  transition: 200ms ease-in;\\r\\n  transform-origin: top;\\r\\n}\\r\\n\\r\\n.dropdown-menu.active {\\r\\n  transform: scaleY(1);\\r\\n  position: fixed;\\r\\n}\\r\\n\\r\\n.drop-down-icon {\\r\\n  font-size: 2em;\\r\\n}\\r\\n\\r\\n.navigation-links {\\r\\n  display: none;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.navigation-links li {\\r\\n  padding: 0 1em;\\r\\n  font-size: 1.2em;\\r\\n}\\r\\n\\r\\n.nav-link {\\r\\n  text-decoration: none;\\r\\n  position: relative;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.nav-link::before {\\r\\n  content: '';\\r\\n  height: 2px;\\r\\n  width: 100%;\\r\\n  position: absolute;\\r\\n  background-color: var(--yellow);\\r\\n  bottom: 0;\\r\\n  transform: scaleX(0);\\r\\n  transform-origin: left;\\r\\n  transition: all 150ms ease-in;\\r\\n}\\r\\n\\r\\n.navigation-links li:hover .nav-link::before {\\r\\n  transform: scaleX(1);\\r\\n  background-color: var(--exo-green);\\r\\n  transform-origin: right;\\r\\n}\\r\\n\\r\\n.main {\\r\\n  min-height: 90%;\\r\\n  position: relative;\\r\\n  top: 10%;\\r\\n  z-index: 0;\\r\\n}\\r\\n\\r\\n.section {\\r\\n  position: relative;\\r\\n  padding: 0 20px;\\r\\n}\\r\\n\\r\\n.intro {\\r\\n  height: 100vh;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  font-family: 'Special Elite', cursive;\\r\\n  font-size: 3em;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.intro-info {\\r\\n  width: 95%;\\r\\n}\\r\\n\\r\\n.hero-title {\\r\\n  font-size: 0.6em;\\r\\n  padding-bottom: 0.2em;\\r\\n}\\r\\n\\r\\n.hero-name {\\r\\n  font-size: 2em;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.hero-span {\\r\\n  line-height: 0;\\r\\n  white-space: nowrap;\\r\\n  position: absolute;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  font-size: 0.3em;\\r\\n}\\r\\n\\r\\n.social-links {\\r\\n  position: absolute;\\r\\n  bottom: 2em;\\r\\n  display: flex;\\r\\n  font-size: 0.65em;\\r\\n  font-family: 'Merienda One', cursive;\\r\\n  z-index: 10;\\r\\n}\\r\\n\\r\\n.social-networks {\\r\\n  padding-left: 1em;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.social-link {\\r\\n  padding: 0 5px;\\r\\n  color: var(--brown);\\r\\n  transition: color 100ms ease-out;\\r\\n  font-size: 1.2em;\\r\\n}\\r\\n\\r\\n.social-link:hover {\\r\\n  color: var(--yellow);\\r\\n}\\r\\n\\r\\n.background-logo-container {\\r\\n  position: absolute;\\r\\n  width: 100%;\\r\\n  z-index: -1;\\r\\n  top: 0;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.background-logo {\\r\\n  transform: rotate(-90deg);\\r\\n  position: absolute;\\r\\n  right: 0;\\r\\n  bottom: -10%;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  height: 100vh;\\r\\n  width: 100%;\\r\\n  padding: 0 96px;\\r\\n  padding-top: 10vh;\\r\\n}\\r\\n\\r\\n.featured-work {\\r\\n  padding-top: 12vh;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.featured-work-title {\\r\\n  height: 10vh;\\r\\n  font-size: 3em;\\r\\n}\\r\\n\\r\\n.grid {\\r\\n  height: 78vh;\\r\\n}\\r\\n\\r\\n.row {\\r\\n  height: 38vh;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.item-row {\\r\\n  padding: 2rem 2rem 3rem 2rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  align-items: flex-start;\\r\\n  height: calc(100% - 1em);\\r\\n  position: relative;\\r\\n  background-position: center;\\r\\n  background-size: cover;\\r\\n  background-repeat: no-repeat;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.project-1 {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n.project-2 {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n}\\r\\n\\r\\n.project-3 {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n}\\r\\n\\r\\n.project-4 {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\r\\n}\\r\\n\\r\\n.project-5 {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\r\\n}\\r\\n\\r\\n.shade {\\r\\n  position: absolute;\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  z-index: -1;\\r\\n  background: rgb(0, 0, 0);\\r\\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.9766281512605042) 0%, rgba(2, 2, 32, 0.11948529411764708) 34%, rgba(1, 1, 8, 0.2763480392156863) 70%, rgba(0, 0, 0, 0.9066001400560224) 100%);\\r\\n  opacity: 0;\\r\\n  transition: opacity 100ms ease-in;\\r\\n}\\r\\n\\r\\n.item-row:hover .shade {\\r\\n  opacity: 0.3;\\r\\n}\\r\\n\\r\\n.project-title {\\r\\n  padding-right: 1em;\\r\\n  font-size: 1.5em;\\r\\n  margin-bottom: 0.8em;\\r\\n  position: relative;\\r\\n  color: transparent;\\r\\n  z-index: 1;\\r\\n  transition: color 150ms ease-in;\\r\\n}\\r\\n\\r\\n.item-row:hover .project-title {\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.project-title::before {\\r\\n  content: '';\\r\\n  left: -2rem;\\r\\n  top: -0.25rem;\\r\\n  bottom: -0.25rem;\\r\\n  right: 0;\\r\\n  background-color: var(--yellow);\\r\\n  position: absolute;\\r\\n  z-index: -1;\\r\\n  transform: scaleX(0);\\r\\n  transform-origin: left;\\r\\n  transition: transform 200ms ease-in;\\r\\n}\\r\\n\\r\\n.item-row:hover .project-title::before {\\r\\n  transform: scaleX(1);\\r\\n}\\r\\n\\r\\n.built-item {\\r\\n  padding: 2px 5px;\\r\\n  color: transparent;\\r\\n  transition: all 200ms ease-in 200ms;\\r\\n}\\r\\n\\r\\n.item-row:hover .built-item {\\r\\n  background-color: var(--brown);\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.project-link {\\r\\n  padding: 1em;\\r\\n  font-size: 1.1em;\\r\\n  position: relative;\\r\\n  z-index: 1;\\r\\n  color: transparent;\\r\\n  text-decoration: none;\\r\\n  transition: color 20ms ease-in 440ms;\\r\\n}\\r\\n\\r\\n.project-link i {\\r\\n  vertical-align: middle;\\r\\n  font-size: 2em;\\r\\n}\\r\\n\\r\\n.project-link::after {\\r\\n  content: '';\\r\\n  position: absolute;\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  background-color: var(--yellow);\\r\\n  z-index: -1;\\r\\n  transform: scale(0);\\r\\n  transform-origin: bottom;\\r\\n  transition: transform 180ms ease-in;\\r\\n  transition-delay: 400ms;\\r\\n}\\r\\n\\r\\n.item-row:hover .project-link {\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.item-row:hover .project-link::after {\\r\\n  transform: scale(1);\\r\\n  transform-origin: top;\\r\\n}\\r\\n\\r\\n.item-row-1 {\\r\\n  width: calc(50% - 0.5em);\\r\\n}\\r\\n\\r\\n.item-row-2 {\\r\\n  width: calc(33.3% - 0.5em);\\r\\n}\\r\\n\\r\\n.about {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.about-logo {\\r\\n  position: absolute;\\r\\n  z-index: 0;\\r\\n  right: -10%;\\r\\n  bottom: -4%;\\r\\n}\\r\\n\\r\\n.about-section {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.about-section > div {\\r\\n  width: 50%;\\r\\n  padding-top: 1em;\\r\\n  padding-bottom: 1em;\\r\\n}\\r\\n\\r\\n.about-me h1 {\\r\\n  font-size: 2.5em;\\r\\n  padding-bottom: 0;\\r\\n  font-weight: 900;\\r\\n}\\r\\n\\r\\n.about-me p {\\r\\n  color: #787878;\\r\\n  line-height: 1.2;\\r\\n  margin: 2em 0;\\r\\n  font-size: 1.2em;\\r\\n  width: 65%;\\r\\n}\\r\\n\\r\\n.about-me a {\\r\\n  border: 1px solid white;\\r\\n  font-size: 1.4em;\\r\\n  text-decoration: none;\\r\\n  padding: 9px 18px;\\r\\n  background-color: var(--yellow);\\r\\n  color: var(--brown);\\r\\n}\\r\\n\\r\\n.about-attributes {\\r\\n  padding: 0 2em;\\r\\n}\\r\\n\\r\\n.attribute {\\r\\n  border-bottom: 1px solid #727274;\\r\\n}\\r\\n\\r\\n.attribute h2 {\\r\\n  font-size: 1.3em;\\r\\n  font-weight: 900;\\r\\n  padding: 1em 0;\\r\\n}\\r\\n\\r\\n.attribute:first-child h2 {\\r\\n  padding-top: 0;\\r\\n}\\r\\n\\r\\n.attribute:last-child {\\r\\n  border-bottom: 0;\\r\\n}\\r\\n\\r\\n.attribute .tags {\\r\\n  padding-bottom: 1em;\\r\\n  color: #787878;\\r\\n}\\r\\n\\r\\n.attribute .tags span {\\r\\n  padding-right: 8px;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  background-color: var(--yellow);\\r\\n  position: relative;\\r\\n  z-index: 3;\\r\\n  top: 10%;\\r\\n}\\r\\n\\r\\n.footer-header {\\r\\n  text-align: center;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.footer-header h3 {\\r\\n  padding: 1em;\\r\\n  font-size: 2.5em;\\r\\n}\\r\\n\\r\\n.footer-header p {\\r\\n  line-height: 1.5;\\r\\n  font-size: 1.2em;\\r\\n}\\r\\n\\r\\n.form-wrap {\\r\\n  width: 50%;\\r\\n  margin: 2.5em 0;\\r\\n}\\r\\n\\r\\n.info-form {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.submit {\\r\\n  border: 1px solid black;\\r\\n  width: 100%;\\r\\n  background-color: black;\\r\\n  color: white;\\r\\n  margin-top: 1em;\\r\\n  padding: 1em 0;\\r\\n  font-size: 1.2em;\\r\\n}\\r\\n\\r\\n.info-form input {\\r\\n  width: 44%;\\r\\n  padding: 1em;\\r\\n  font-size: 1.2em;\\r\\n  border-radius: 5px;\\r\\n  border: white;\\r\\n}\\r\\n\\r\\n.form .message-box {\\r\\n  margin-top: 1.2em;\\r\\n  width: calc(100% - 2em);\\r\\n  resize: none;\\r\\n  padding: 1em;\\r\\n  border-radius: 5px;\\r\\n  border: white;\\r\\n}\\r\\n\\r\\n.footer-links {\\r\\n  padding: 4em 0;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 1px solid var(--beich);\\r\\n}\\r\\n\\r\\n.footer-link {\\r\\n  padding: 0 0.5em;\\r\\n  color: var(--beich);\\r\\n  font-size: 1.8em;\\r\\n  transition: color 100ms ease-in;\\r\\n}\\r\\n\\r\\n.footer-link:hover {\\r\\n  color: var(--brown);\\r\\n}\\r\\n\\r\\n.email {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  color: var(--brown);\\r\\n  font-size: 1.3em;\\r\\n}\\r\\n\\r\\n.copyright {\\r\\n  color: var(--brown);\\r\\n}\\r\\n\\r\\n@media (max-width: 1366px) {\\r\\n  .body {\\r\\n    font-size: 11px;\\r\\n  }\\r\\n\\r\\n  .about-logo {\\r\\n    position: absolute;\\r\\n    z-index: 0;\\r\\n    right: -10%;\\r\\n    bottom: -6%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio/./src/assets/style/small.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/assets/style/big.css":
/*!**********************************!*\
  !*** ./src/assets/style/big.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_big_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./big.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/style/big.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_big_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_big_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://portfolio/./src/assets/style/big.css?");

/***/ }),

/***/ "./src/assets/style/medium.css":
/*!*************************************!*\
  !*** ./src/assets/style/medium.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_medium_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./medium.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/style/medium.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_medium_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_medium_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://portfolio/./src/assets/style/medium.css?");

/***/ }),

/***/ "./src/assets/style/reset.css":
/*!************************************!*\
  !*** ./src/assets/style/reset.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/style/reset.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://portfolio/./src/assets/style/reset.css?");

/***/ }),

/***/ "./src/assets/style/small.css":
/*!************************************!*\
  !*** ./src/assets/style/small.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_small_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./small.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/style/small.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_small_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_small_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://portfolio/./src/assets/style/small.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/images/mockups/GO_ON_SALES_MOCK.png":
/*!********************************************************!*\
  !*** ./src/assets/images/mockups/GO_ON_SALES_MOCK.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c8d0b1b8c5ed593ba82b.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/images/mockups/GO_ON_SALES_MOCK.png?");

/***/ }),

/***/ "./src/assets/images/mockups/PAW_SHAPED_MOCK.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/mockups/PAW_SHAPED_MOCK.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e18afb280c118832583.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/images/mockups/PAW_SHAPED_MOCK.png?");

/***/ }),

/***/ "./src/assets/images/mockups/PRIVATE_EVENTS_MOCK.png":
/*!***********************************************************!*\
  !*** ./src/assets/images/mockups/PRIVATE_EVENTS_MOCK.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"13a5f0869de4b9a5dbf2.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/images/mockups/PRIVATE_EVENTS_MOCK.png?");

/***/ }),

/***/ "./src/assets/images/mockups/RUBY_DOCS_MOCK.png":
/*!******************************************************!*\
  !*** ./src/assets/images/mockups/RUBY_DOCS_MOCK.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6b19b33f53cef3b282f2.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/images/mockups/RUBY_DOCS_MOCK.png?");

/***/ }),

/***/ "./src/assets/images/mockups/STAY_TOUCH_MOCK.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/mockups/STAY_TOUCH_MOCK.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4fd83a33e2e0bc7cf5e6.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/images/mockups/STAY_TOUCH_MOCK.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/scripts/main.js");
/******/ 	
/******/ })()
;