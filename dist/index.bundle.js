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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant/./src/styles/style.css?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DOM)\n/* harmony export */ });\nclass DOM {\n  constructor() {}\n\n  static createElementAndAddTextContent(elementTag, textContent) {\n    let element = document.createElement(elementTag);\n    element.textContent = textContent;\n\n    return element;\n  }\n\n  static createEleAndAddClasses(elementTag, ...classes) {\n    let element = document.createElement(elementTag);\n    classes.forEach((c) => {\n      element.classList.add(c);\n    });\n\n    return element;\n  }\n\n  static createEleAndAddAttributes(elementTag, ...attrs) {\n    let element = document.createElement(elementTag);\n    attrs.forEach((attr) => {\n      element[attr[0]] = attr[1];\n    });\n\n    return element;\n  }\n\n  static appendChildren(element, ...children) {\n    children.forEach((child) => {\n      element.appendChild(child);\n    });\n  }\n\n  static setMultipleAttributes(element, attributes) {\n    Object.keys(attributes).forEach((attr) => {\n      element.setAttribute(attr, attributes[attr]);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://restaurant/./src/DOM.js?");

/***/ }),

/***/ "./src/DOMElements.js":
/*!****************************!*\
  !*** ./src/DOMElements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DOMElements)\n/* harmony export */ });\nclass DOMElements {\n  static content = document.querySelector('#content');\n\n  static getElementOfSelector(selector) {\n    return document.querySelector(selector);\n  }\n}\n\n\n//# sourceURL=webpack://restaurant/./src/DOMElements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n// https://unsplash.com/photos/poI7DelFiVA\n__webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\n\n_load__WEBPACK_IMPORTED_MODULE_0__.pageLoad();\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _DOMElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMElements */ \"./src/DOMElements.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _tabHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabHome */ \"./src/tabHome.js\");\n/* harmony import */ var _tabExp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabExp */ \"./src/tabExp.js\");\n/* harmony import */ var _tabBook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabBook */ \"./src/tabBook.js\");\n/* harmony import */ var _img_jason_leung_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/jason-leung-unsplash.jpg */ \"./src/img/jason-leung-unsplash.jpg\");\n\n\n\n\n\n\n\nfunction loadTabs() {\n  const tabsContainer = _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createEleAndAddClasses('nav', 'tabs');\n  const tab1 = _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElementAndAddTextContent('a', 'Home');\n  tab1.classList.add('home');\n\n  const tab2 = _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElementAndAddTextContent('a', 'The Experience');\n  tab2.classList.add('experience');\n\n  const tab3 = _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElementAndAddTextContent('a', 'Book The Experience!');\n  tab3.classList.add('book');\n\n  tabsContainer.appendChild(tab1);\n  tabsContainer.appendChild(tab2);\n  tabsContainer.appendChild(tab3);\n\n  _DOMElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].content.appendChild(tabsContainer);\n}\n\nfunction loadHeadImg(image, className) {\n  // const img = DOM.createEleAndAddAttributes(\n  //   'img',\n  //   ['src', image],\n  //   ['style', 'height: 20vh']\n  // );\n  const imgDiv = _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createEleAndAddClasses('div', className);\n  _DOMElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].content.appendChild(imgDiv);\n}\n\nfunction loadHeading(tag, text) {\n  const heading = _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElementAndAddTextContent(tag, text);\n  heading.classList.add('heading');\n\n  _DOMElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].content.appendChild(heading);\n}\n\nfunction loadIntro() {\n  _tabHome__WEBPACK_IMPORTED_MODULE_2__.loadContent();\n}\n\nfunction loadTabEventListeners() {\n  _DOMElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getElementOfSelector('.home').addEventListener(\n    'click',\n    getTabContent\n  );\n\n  _DOMElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getElementOfSelector('.experience').addEventListener(\n    'click',\n    getTabContent\n  );\n\n  _DOMElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getElementOfSelector('.book').addEventListener(\n    'click',\n    getTabContent\n  );\n}\n\nfunction clearTabContent() {\n  _DOMElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].content.removeChild(\n    _DOMElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getElementOfSelector('.tabContent')\n  );\n}\n\nfunction getTabContent(e) {\n  clearTabContent();\n  const tab = e.target.className;\n\n  switch (tab) {\n    case 'home':\n      _tabHome__WEBPACK_IMPORTED_MODULE_2__.loadContent();\n      break;\n\n    case 'experience':\n      _tabExp__WEBPACK_IMPORTED_MODULE_3__.loadContent();\n      break;\n\n    case 'book':\n      _tabBook__WEBPACK_IMPORTED_MODULE_4__.loadContent();\n      break;\n  }\n}\n\nfunction pageLoad() {\n  loadTabs();\n  loadHeading('h1', 'Rant-And-Rest');\n  loadIntro();\n  loadTabEventListeners();\n}\n\n\n//# sourceURL=webpack://restaurant/./src/load.js?");

/***/ }),

/***/ "./src/tabBook.js":
/*!************************!*\
  !*** ./src/tabBook.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContent\": () => (/* binding */ loadContent)\n/* harmony export */ });\n/* harmony import */ var _DOMElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMElements */ \"./src/DOMElements.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\n\nfunction loadContent() {\n  const tabContent = _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createEleAndAddClasses('section', 'tabContent');\n\n  const para1 = document.createElement('p');\n  para1.textContent = 'Want to Book The Experience\\u2122?';\n\n  const para2 = document.createElement('p');\n  para2.textContent +=\n    \"We allot three hours for all standard bookings! Of course, it is up to you to utilise the time you have, but we'd like to imagine you would break it down into an hour each of Ranting, Eating And Resting (REAR\\u2122), to best utilise our soundproof rooms, our extremely tasty breakfast food and our beds with handpicked mattresses for the Best Rest You Can Ever Get\\u2122!\";\n\n  _DOMElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getElementOfSelector('.heading').textContent =\n    'Book The Experience';\n\n  tabContent.appendChild(para1);\n  tabContent.appendChild(para2);\n\n  _DOMElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].content.appendChild(tabContent);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/tabBook.js?");

/***/ }),

/***/ "./src/tabExp.js":
/*!***********************!*\
  !*** ./src/tabExp.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContent\": () => (/* binding */ loadContent)\n/* harmony export */ });\n/* harmony import */ var _DOMElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMElements */ \"./src/DOMElements.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\n\nfunction loadContent() {\n  const tabContent = _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createEleAndAddClasses('section', 'tabContent');\n\n  const para1 = document.createElement('p');\n  para1.textContent =\n    'An Experience Out Of This World\\u2122 is the experience you will experience!';\n\n  const para2 = document.createElement('p');\n  para2.textContent +=\n    \"We allot three hours for all standard bookings! Of course, it is up to you to utilise the time you have, but we'd like to imagine you would break it down into an hour each of Ranting, Eating And Resting (REAR\\u2122), to best utilise our soundproof rooms, our extremely tasty breakfast food and our beds with handpicked mattresses for the Best Rest You Can Ever Get\\u2122!\";\n\n  _DOMElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getElementOfSelector('.heading').textContent = 'The Experience';\n\n  tabContent.appendChild(para1);\n  tabContent.appendChild(para2);\n\n  _DOMElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].content.appendChild(tabContent);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/tabExp.js?");

/***/ }),

/***/ "./src/tabHome.js":
/*!************************!*\
  !*** ./src/tabHome.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContent\": () => (/* binding */ loadContent)\n/* harmony export */ });\n/* harmony import */ var _DOMElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMElements */ \"./src/DOMElements.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\n\nfunction loadContent() {\n  const tabContent = _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createEleAndAddClasses('section', 'tabContent');\n\n  const para1 = document.createElement('p');\n  para1.textContent =\n    'Welcome to Rant-And-Rest\\u2122, a deviation from the usual concept of a Restaurant! Here, you can book a soundproof room where you can rant all you like, eat up one of our deliciously made breakfast food after, and rest!';\n\n  const para2 = document.createElement('p');\n  para2.textContent +=\n    \"We allot three hours for all standard bookings! Of course, it is up to you to utilise the time you have, but we'd like to imagine you would break it down into an hour each of Ranting, Eating And Resting (REAR\\u2122), to best utilise our soundproof rooms, our extremely tasty breakfast food and our beds with handpicked mattresses for the Best Rest You Can Ever Get\\u2122!\";\n\n  _DOMElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getElementOfSelector('.heading').textContent = 'Rant-And-Rest';\n\n  tabContent.appendChild(para1);\n  tabContent.appendChild(para2);\n\n  _DOMElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].content.appendChild(tabContent);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/tabHome.js?");

/***/ }),

/***/ "./src/img/jason-leung-unsplash.jpg":
/*!******************************************!*\
  !*** ./src/img/jason-leung-unsplash.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"static/img/496eb3fe4d69e349dbe8.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/img/jason-leung-unsplash.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;