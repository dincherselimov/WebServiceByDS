"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[2]!./src/styles/videopart.css":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[2]!./src/styles/videopart.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Roboto:400,500);\\r\\n@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css);\\r\\n*, *:before, *:after {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.slider1 {\\r\\n  height: 350px;\\r\\n  position: relative;\\r\\n  overflow: hidden;\\r\\n  display: flex;\\r\\n  flex-flow: row nowrap;\\r\\n  align-items: flex-end;\\r\\n  justify-content: center;\\r\\n}\\r\\n.slider__nav1 {\\r\\n  width: 12px;\\r\\n  height: 12px;\\r\\n  margin: 2rem 12px;\\r\\n  border-radius: 50%;\\r\\n  z-index: 10;\\r\\n  outline: 6px solid #ccc;\\r\\n  outline-offset: -6px;\\r\\n  box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);\\r\\n  cursor: pointer;\\r\\n  -webkit-appearance: none;\\r\\n     -moz-appearance: none;\\r\\n          appearance: none;\\r\\n  -webkit-backface-visibility: hidden;\\r\\n          backface-visibility: hidden;\\r\\n}\\r\\n.slider__nav:checked {\\r\\n  animation: check 0.4s linear forwards;\\r\\n}\\r\\n.slider__nav:checked:nth-of-type(1) ~ .slider__inner {\\r\\n  left: 0%;\\r\\n}\\r\\n.slider__nav:checked:nth-of-type(2) ~ .slider__inner {\\r\\n  left: -100%;\\r\\n}\\r\\n.slider__nav:checked:nth-of-type(3) ~ .slider__inner {\\r\\n  left: -200%;\\r\\n}\\r\\n.slider__nav:checked:nth-of-type(4) ~ .slider__inner {\\r\\n  left: -300%;\\r\\n}\\r\\n.slider__inner1 {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 400%;\\r\\n  height: 100%;\\r\\n  transition: left 0.4s;\\r\\n  display: flex;\\r\\n  flex-flow: row nowrap;\\r\\n}\\r\\n.slider__contents1 {\\r\\n  height: 100%;\\r\\n  padding: 2rem;\\r\\n  background-color: rgb(2, 61, 41);\\r\\n  text-align: center;\\r\\n  display: flex;\\r\\n  flex: 1 1;\\r\\n  flex-flow: column nowrap;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n.slider__image {\\r\\n  font-size: 2.7rem;\\r\\n      color: #2196F3;\\r\\n}\\r\\n.slider__caption1 {\\r\\n  font-weight: 500;\\r\\n  margin: 2rem 0 1rem;\\r\\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\\r\\n  text-transform: uppercase;\\r\\n  font-size: 30px;\\r\\n  color: black;\\r\\n  background-color: rgb(0, 0, 0);\\r\\n}\\r\\n.slider__txt {\\r\\n  color: #999;\\r\\n  margin-bottom: 3rem;\\r\\n  max-width: 300px;\\r\\n}\\r\\n\\r\\n@keyframes check {\\r\\n  50% {\\r\\n    outline-color: #333;\\r\\n    box-shadow: 0 0 0 12px #333, 0 0 0 36px rgba(51, 51, 51, 0.2);\\r\\n  }\\r\\n  100% {\\r\\n    outline-color: #333;\\r\\n    box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);\\r\\n  }\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/videopart.css\"],\"names\":[],\"mappings\":\"AAAA,mEAAmE;AACnE,wFAAwF;AACxF;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAIhB,aAAa;EAGL,qBAAqB;EAIrB,qBAAqB;EAIrB,uBAAuB;AACjC;AACA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,uBAAuB;EACvB,oBAAoB;EACpB,qDAAqD;EACrD,eAAe;EACf,wBAAwB;KACrB,qBAAqB;UAChB,gBAAgB;EACxB,mCAAmC;UAC3B,2BAA2B;AACrC;AACA;EAEU,qCAAqC;AAC/C;AACA;EACE,QAAQ;AACV;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EAEZ,qBAAqB;EAIrB,aAAa;EAGL,qBAAqB;AAC/B;AACA;EACE,YAAY;EACZ,aAAa;EACb,gCAAgC;EAChC,kBAAkB;EAIlB,aAAa;EAIL,SAAO;EAGP,wBAAwB;EAIxB,mBAAmB;EAInB,uBAAuB;AACjC;AACA;EACE,iBAAiB;MACb,cAAc;AACpB;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,yCAAyC;EACzC,yBAAyB;EACzB,eAAe;EACf,YAAY;EACZ,8BAA8B;AAChC;AACA;EACE,WAAW;EACX,mBAAmB;EACnB,gBAAgB;AAClB;;AAaA;EACE;IACE,mBAAmB;IACnB,6DAA6D;EAC/D;EACA;IACE,mBAAmB;IACnB,qDAAqD;EACvD;AACF\",\"sourcesContent\":[\"@import url(https://fonts.googleapis.com/css?family=Roboto:400,500);\\r\\n@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css);\\r\\n*, *:before, *:after {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.slider1 {\\r\\n  height: 350px;\\r\\n  position: relative;\\r\\n  overflow: hidden;\\r\\n  display: -webkit-box;\\r\\n  display: -webkit-flex;\\r\\n  display: -ms-flexbox;\\r\\n  display: flex;\\r\\n  -webkit-flex-flow: row nowrap;\\r\\n      -ms-flex-flow: row nowrap;\\r\\n          flex-flow: row nowrap;\\r\\n  -webkit-box-align: end;\\r\\n  -webkit-align-items: flex-end;\\r\\n      -ms-flex-align: end;\\r\\n          align-items: flex-end;\\r\\n  -webkit-box-pack: center;\\r\\n  -webkit-justify-content: center;\\r\\n      -ms-flex-pack: center;\\r\\n          justify-content: center;\\r\\n}\\r\\n.slider__nav1 {\\r\\n  width: 12px;\\r\\n  height: 12px;\\r\\n  margin: 2rem 12px;\\r\\n  border-radius: 50%;\\r\\n  z-index: 10;\\r\\n  outline: 6px solid #ccc;\\r\\n  outline-offset: -6px;\\r\\n  box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);\\r\\n  cursor: pointer;\\r\\n  -webkit-appearance: none;\\r\\n     -moz-appearance: none;\\r\\n          appearance: none;\\r\\n  -webkit-backface-visibility: hidden;\\r\\n          backface-visibility: hidden;\\r\\n}\\r\\n.slider__nav:checked {\\r\\n  -webkit-animation: check 0.4s linear forwards;\\r\\n          animation: check 0.4s linear forwards;\\r\\n}\\r\\n.slider__nav:checked:nth-of-type(1) ~ .slider__inner {\\r\\n  left: 0%;\\r\\n}\\r\\n.slider__nav:checked:nth-of-type(2) ~ .slider__inner {\\r\\n  left: -100%;\\r\\n}\\r\\n.slider__nav:checked:nth-of-type(3) ~ .slider__inner {\\r\\n  left: -200%;\\r\\n}\\r\\n.slider__nav:checked:nth-of-type(4) ~ .slider__inner {\\r\\n  left: -300%;\\r\\n}\\r\\n.slider__inner1 {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 400%;\\r\\n  height: 100%;\\r\\n  -webkit-transition: left 0.4s;\\r\\n  transition: left 0.4s;\\r\\n  display: -webkit-box;\\r\\n  display: -webkit-flex;\\r\\n  display: -ms-flexbox;\\r\\n  display: flex;\\r\\n  -webkit-flex-flow: row nowrap;\\r\\n      -ms-flex-flow: row nowrap;\\r\\n          flex-flow: row nowrap;\\r\\n}\\r\\n.slider__contents1 {\\r\\n  height: 100%;\\r\\n  padding: 2rem;\\r\\n  background-color: rgb(2, 61, 41);\\r\\n  text-align: center;\\r\\n  display: -webkit-box;\\r\\n  display: -webkit-flex;\\r\\n  display: -ms-flexbox;\\r\\n  display: flex;\\r\\n  -webkit-box-flex: 1;\\r\\n  -webkit-flex: 1;\\r\\n      -ms-flex: 1;\\r\\n          flex: 1;\\r\\n  -webkit-flex-flow: column nowrap;\\r\\n      -ms-flex-flow: column nowrap;\\r\\n          flex-flow: column nowrap;\\r\\n  -webkit-box-align: center;\\r\\n  -webkit-align-items: center;\\r\\n      -ms-flex-align: center;\\r\\n          align-items: center;\\r\\n  -webkit-box-pack: center;\\r\\n  -webkit-justify-content: center;\\r\\n      -ms-flex-pack: center;\\r\\n          justify-content: center;\\r\\n}\\r\\n.slider__image {\\r\\n  font-size: 2.7rem;\\r\\n      color: #2196F3;\\r\\n}\\r\\n.slider__caption1 {\\r\\n  font-weight: 500;\\r\\n  margin: 2rem 0 1rem;\\r\\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\\r\\n  text-transform: uppercase;\\r\\n  font-size: 30px;\\r\\n  color: black;\\r\\n  background-color: rgb(0, 0, 0);\\r\\n}\\r\\n.slider__txt {\\r\\n  color: #999;\\r\\n  margin-bottom: 3rem;\\r\\n  max-width: 300px;\\r\\n}\\r\\n\\r\\n@-webkit-keyframes check {\\r\\n  50% {\\r\\n    outline-color: #333;\\r\\n    box-shadow: 0 0 0 12px #333, 0 0 0 36px rgba(51, 51, 51, 0.2);\\r\\n  }\\r\\n  100% {\\r\\n    outline-color: #333;\\r\\n    box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes check {\\r\\n  50% {\\r\\n    outline-color: #333;\\r\\n    box-shadow: 0 0 0 12px #333, 0 0 0 36px rgba(51, 51, 51, 0.2);\\r\\n  }\\r\\n  100% {\\r\\n    outline-color: #333;\\r\\n    box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);\\r\\n  }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsxMV0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzExXS51c2VbMl0hLi9zcmMvc3R5bGVzL3ZpZGVvcGFydC5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDMkg7QUFDM0gsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLDhHQUE4Ryw2RkFBNkYsMEJBQTBCLDZCQUE2QixLQUFLLGtCQUFrQixvQkFBb0IseUJBQXlCLHVCQUF1QixvQkFBb0IsNEJBQTRCLDRCQUE0Qiw4QkFBOEIsS0FBSyxtQkFBbUIsa0JBQWtCLG1CQUFtQix3QkFBd0IseUJBQXlCLGtCQUFrQiw4QkFBOEIsMkJBQTJCLDREQUE0RCxzQkFBc0IsK0JBQStCLCtCQUErQiwrQkFBK0IsMENBQTBDLDBDQUEwQyxLQUFLLDBCQUEwQiw0Q0FBNEMsS0FBSywwREFBMEQsZUFBZSxLQUFLLDBEQUEwRCxrQkFBa0IsS0FBSywwREFBMEQsa0JBQWtCLEtBQUssMERBQTBELGtCQUFrQixLQUFLLHFCQUFxQix5QkFBeUIsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsNEJBQTRCLG9CQUFvQiw0QkFBNEIsS0FBSyx3QkFBd0IsbUJBQW1CLG9CQUFvQix1Q0FBdUMseUJBQXlCLG9CQUFvQixnQkFBZ0IsK0JBQStCLDBCQUEwQiw4QkFBOEIsS0FBSyxvQkFBb0Isd0JBQXdCLHlCQUF5QixLQUFLLHVCQUF1Qix1QkFBdUIsMEJBQTBCLGdEQUFnRCxnQ0FBZ0Msc0JBQXNCLG1CQUFtQixxQ0FBcUMsS0FBSyxrQkFBa0Isa0JBQWtCLDBCQUEwQix1QkFBdUIsS0FBSywwQkFBMEIsV0FBVyw0QkFBNEIsc0VBQXNFLE9BQU8sWUFBWSw0QkFBNEIsOERBQThELE9BQU8sS0FBSyxXQUFXLGdHQUFnRyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sNkZBQTZGLDZGQUE2RiwwQkFBMEIsNkJBQTZCLEtBQUssa0JBQWtCLG9CQUFvQix5QkFBeUIsdUJBQXVCLDJCQUEyQiw0QkFBNEIsMkJBQTJCLG9CQUFvQixvQ0FBb0Msb0NBQW9DLG9DQUFvQyw2QkFBNkIsb0NBQW9DLDhCQUE4QixvQ0FBb0MsK0JBQStCLHNDQUFzQyxnQ0FBZ0Msc0NBQXNDLEtBQUssbUJBQW1CLGtCQUFrQixtQkFBbUIsd0JBQXdCLHlCQUF5QixrQkFBa0IsOEJBQThCLDJCQUEyQiw0REFBNEQsc0JBQXNCLCtCQUErQiwrQkFBK0IsK0JBQStCLDBDQUEwQywwQ0FBMEMsS0FBSywwQkFBMEIsb0RBQW9ELG9EQUFvRCxLQUFLLDBEQUEwRCxlQUFlLEtBQUssMERBQTBELGtCQUFrQixLQUFLLDBEQUEwRCxrQkFBa0IsS0FBSywwREFBMEQsa0JBQWtCLEtBQUsscUJBQXFCLHlCQUF5QixhQUFhLGNBQWMsa0JBQWtCLG1CQUFtQixvQ0FBb0MsNEJBQTRCLDJCQUEyQiw0QkFBNEIsMkJBQTJCLG9CQUFvQixvQ0FBb0Msb0NBQW9DLG9DQUFvQyxLQUFLLHdCQUF3QixtQkFBbUIsb0JBQW9CLHVDQUF1Qyx5QkFBeUIsMkJBQTJCLDRCQUE0QiwyQkFBMkIsb0JBQW9CLDBCQUEwQixzQkFBc0Isc0JBQXNCLHNCQUFzQix1Q0FBdUMsdUNBQXVDLHVDQUF1QyxnQ0FBZ0Msa0NBQWtDLGlDQUFpQyxrQ0FBa0MsK0JBQStCLHNDQUFzQyxnQ0FBZ0Msc0NBQXNDLEtBQUssb0JBQW9CLHdCQUF3Qix5QkFBeUIsS0FBSyx1QkFBdUIsdUJBQXVCLDBCQUEwQixnREFBZ0QsZ0NBQWdDLHNCQUFzQixtQkFBbUIscUNBQXFDLEtBQUssa0JBQWtCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLEtBQUssa0NBQWtDLFdBQVcsNEJBQTRCLHNFQUFzRSxPQUFPLFlBQVksNEJBQTRCLDhEQUE4RCxPQUFPLEtBQUssMEJBQTBCLFdBQVcsNEJBQTRCLHNFQUFzRSxPQUFPLFlBQVksNEJBQTRCLDhEQUE4RCxPQUFPLEtBQUssdUJBQXVCO0FBQ2ovTjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvdmlkZW9wYXJ0LmNzcz9jOTVkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw1MDApO1xcclxcbkBpbXBvcnQgdXJsKGh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNS4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyk7XFxyXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlcjEge1xcclxcbiAgaGVpZ2h0OiAzNTBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5zbGlkZXJfX25hdjEge1xcclxcbiAgd2lkdGg6IDEycHg7XFxyXFxuICBoZWlnaHQ6IDEycHg7XFxyXFxuICBtYXJnaW46IDJyZW0gMTJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgb3V0bGluZTogNnB4IHNvbGlkICNjY2M7XFxyXFxuICBvdXRsaW5lLW9mZnNldDogLTZweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgIzMzMywgMCAwIDAgMCByZ2JhKDUxLCA1MSwgNTEsIDApO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuLnNsaWRlcl9fbmF2OmNoZWNrZWQge1xcclxcbiAgYW5pbWF0aW9uOiBjaGVjayAwLjRzIGxpbmVhciBmb3J3YXJkcztcXHJcXG59XFxyXFxuLnNsaWRlcl9fbmF2OmNoZWNrZWQ6bnRoLW9mLXR5cGUoMSkgfiAuc2xpZGVyX19pbm5lciB7XFxyXFxuICBsZWZ0OiAwJTtcXHJcXG59XFxyXFxuLnNsaWRlcl9fbmF2OmNoZWNrZWQ6bnRoLW9mLXR5cGUoMikgfiAuc2xpZGVyX19pbm5lciB7XFxyXFxuICBsZWZ0OiAtMTAwJTtcXHJcXG59XFxyXFxuLnNsaWRlcl9fbmF2OmNoZWNrZWQ6bnRoLW9mLXR5cGUoMykgfiAuc2xpZGVyX19pbm5lciB7XFxyXFxuICBsZWZ0OiAtMjAwJTtcXHJcXG59XFxyXFxuLnNsaWRlcl9fbmF2OmNoZWNrZWQ6bnRoLW9mLXR5cGUoNCkgfiAuc2xpZGVyX19pbm5lciB7XFxyXFxuICBsZWZ0OiAtMzAwJTtcXHJcXG59XFxyXFxuLnNsaWRlcl9faW5uZXIxIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogNDAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHRyYW5zaXRpb246IGxlZnQgMC40cztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxufVxcclxcbi5zbGlkZXJfX2NvbnRlbnRzMSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDYxLCA0MSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMSAxO1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uc2xpZGVyX19pbWFnZSB7XFxyXFxuICBmb250LXNpemU6IDIuN3JlbTtcXHJcXG4gICAgICBjb2xvcjogIzIxOTZGMztcXHJcXG59XFxyXFxuLnNsaWRlcl9fY2FwdGlvbjEge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIG1hcmdpbjogMnJlbSAwIDFyZW07XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxufVxcclxcbi5zbGlkZXJfX3R4dCB7XFxyXFxuICBjb2xvcjogIzk5OTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoZWNrIHtcXHJcXG4gIDUwJSB7XFxyXFxuICAgIG91dGxpbmUtY29sb3I6ICMzMzM7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDEycHggIzMzMywgMCAwIDAgMzZweCByZ2JhKDUxLCA1MSwgNTEsIDAuMik7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3V0bGluZS1jb2xvcjogIzMzMztcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCAjMzMzLCAwIDAgMCAwIHJnYmEoNTEsIDUxLCA1MSwgMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL3ZpZGVvcGFydC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbUVBQW1FO0FBQ25FLHdGQUF3RjtBQUN4RjtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBSWhCLGFBQWE7RUFHTCxxQkFBcUI7RUFJckIscUJBQXFCO0VBSXJCLHVCQUF1QjtBQUNqQztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHFEQUFxRDtFQUNyRCxlQUFlO0VBQ2Ysd0JBQXdCO0tBQ3JCLHFCQUFxQjtVQUNoQixnQkFBZ0I7RUFDeEIsbUNBQW1DO1VBQzNCLDJCQUEyQjtBQUNyQztBQUNBO0VBRVUscUNBQXFDO0FBQy9DO0FBQ0E7RUFDRSxRQUFRO0FBQ1Y7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBRVoscUJBQXFCO0VBSXJCLGFBQWE7RUFHTCxxQkFBcUI7QUFDL0I7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUlsQixhQUFhO0VBSUwsU0FBTztFQUdQLHdCQUF3QjtFQUl4QixtQkFBbUI7RUFJbkIsdUJBQXVCO0FBQ2pDO0FBQ0E7RUFDRSxpQkFBaUI7TUFDYixjQUFjO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6Qyx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQWFBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsNkRBQTZEO0VBQy9EO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIscURBQXFEO0VBQ3ZEO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwKTtcXHJcXG5AaW1wb3J0IHVybChodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjUuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MpO1xcclxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIxIHtcXHJcXG4gIGhlaWdodDogMzUwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtd2Via2l0LWZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgICAtbXMtZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xcclxcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXHJcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uc2xpZGVyX19uYXYxIHtcXHJcXG4gIHdpZHRoOiAxMnB4O1xcclxcbiAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgbWFyZ2luOiAycmVtIDEycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIG91dGxpbmU6IDZweCBzb2xpZCAjY2NjO1xcclxcbiAgb3V0bGluZS1vZmZzZXQ6IC02cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMCAwICMzMzMsIDAgMCAwIDAgcmdiYSg1MSwgNTEsIDUxLCAwKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcbi5zbGlkZXJfX25hdjpjaGVja2VkIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjaGVjayAwLjRzIGxpbmVhciBmb3J3YXJkcztcXHJcXG4gICAgICAgICAgYW5pbWF0aW9uOiBjaGVjayAwLjRzIGxpbmVhciBmb3J3YXJkcztcXHJcXG59XFxyXFxuLnNsaWRlcl9fbmF2OmNoZWNrZWQ6bnRoLW9mLXR5cGUoMSkgfiAuc2xpZGVyX19pbm5lciB7XFxyXFxuICBsZWZ0OiAwJTtcXHJcXG59XFxyXFxuLnNsaWRlcl9fbmF2OmNoZWNrZWQ6bnRoLW9mLXR5cGUoMikgfiAuc2xpZGVyX19pbm5lciB7XFxyXFxuICBsZWZ0OiAtMTAwJTtcXHJcXG59XFxyXFxuLnNsaWRlcl9fbmF2OmNoZWNrZWQ6bnRoLW9mLXR5cGUoMykgfiAuc2xpZGVyX19pbm5lciB7XFxyXFxuICBsZWZ0OiAtMjAwJTtcXHJcXG59XFxyXFxuLnNsaWRlcl9fbmF2OmNoZWNrZWQ6bnRoLW9mLXR5cGUoNCkgfiAuc2xpZGVyX19pbm5lciB7XFxyXFxuICBsZWZ0OiAtMzAwJTtcXHJcXG59XFxyXFxuLnNsaWRlcl9faW5uZXIxIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogNDAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbGVmdCAwLjRzO1xcclxcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjRzO1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtd2Via2l0LWZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgICAtbXMtZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxufVxcclxcbi5zbGlkZXJfX2NvbnRlbnRzMSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDYxLCA0MSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxyXFxuICAtd2Via2l0LWZsZXg6IDE7XFxyXFxuICAgICAgLW1zLWZsZXg6IDE7XFxyXFxuICAgICAgICAgIGZsZXg6IDE7XFxyXFxuICAtd2Via2l0LWZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gICAgICAtbXMtZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5zbGlkZXJfX2ltYWdlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi43cmVtO1xcclxcbiAgICAgIGNvbG9yOiAjMjE5NkYzO1xcclxcbn1cXHJcXG4uc2xpZGVyX19jYXB0aW9uMSB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgbWFyZ2luOiAycmVtIDAgMXJlbTtcXHJcXG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG59XFxyXFxuLnNsaWRlcl9fdHh0IHtcXHJcXG4gIGNvbG9yOiAjOTk5O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG4gIG1heC13aWR0aDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBjaGVjayB7XFxyXFxuICA1MCUge1xcclxcbiAgICBvdXRsaW5lLWNvbG9yOiAjMzMzO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMnB4ICMzMzMsIDAgMCAwIDM2cHggcmdiYSg1MSwgNTEsIDUxLCAwLjIpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG91dGxpbmUtY29sb3I6ICMzMzM7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgIzMzMywgMCAwIDAgMCByZ2JhKDUxLCA1MSwgNTEsIDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoZWNrIHtcXHJcXG4gIDUwJSB7XFxyXFxuICAgIG91dGxpbmUtY29sb3I6ICMzMzM7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDEycHggIzMzMywgMCAwIDAgMzZweCByZ2JhKDUxLCA1MSwgNTEsIDAuMik7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3V0bGluZS1jb2xvcjogIzMzMztcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCAjMzMzLCAwIDAgMCAwIHJnYmEoNTEsIDUxLCA1MSwgMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[2]!./src/styles/videopart.css\n"));

/***/ })

});