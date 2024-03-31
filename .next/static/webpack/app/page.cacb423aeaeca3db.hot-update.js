"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/SearchResultsList.js":
/*!*********************************************!*\
  !*** ./app/components/SearchResultsList.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchResultsList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_SearchResultsList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/SearchResultsList.css */ \"(app-pages-browser)/./app/styles/SearchResultsList.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _queries_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries.js */ \"(app-pages-browser)/./app/queries.js\");\n/* harmony import */ var _Tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tag.js */ \"(app-pages-browser)/./app/components/Tag.js\");\n\n\n\n\n\nfunction SearchResultsList(results) {\n    var pageItems = JSON.parse(results[\"results\"])[\"documents\"];\n    let arr = [];\n    for(let key in pageItems){\n        arr.push(pageItems[key]);\n    }\n    arr = (0,_queries_js__WEBPACK_IMPORTED_MODULE_3__.filterData)(arr);\n    if (arr.length == 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"No results found; try another search!\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this);\n    }\n    pageItems = JSON.parse(JSON.stringify(arr));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: pageItems.map(function(data) {\n            let screen_reader = [\n                \"aria-allowed-attr\",\n                \"aria-braille-equivalent\",\n                \"aria-command-name\",\n                \"aria-conditional-attr\",\n                \"aria-deprecated-role\",\n                \"aria-hidden-body\",\n                \"aria-hidden-focus\",\n                \"aria-input-field-name\",\n                \"aria-progressbar-name\",\n                \"aria-prohibited-attr\",\n                \"aria-required-attr\",\n                \"aria-required-children\",\n                \"aria-required-parent\",\n                \"aria-roles\",\n                \"aria-toggle-field-name\",\n                \"aria-tooltip-name\",\n                \"aria-valid-attr-value\",\n                \"aria-valid-attr\",\n                \"heading-order\"\n            ];\n            let text_contrast = [\n                \"color_contrast\",\n                \"color-contrast-enhanced\"\n            ];\n            let closed_captioning = [\n                \"audio-caption\"\n            ];\n            let no_audio = [\n                \"no-autoplay-audio\"\n            ];\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"results-list\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: data.url_dom,\n                        children: data.url\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: \"WCAG Test Results\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    \"Passes: \",\n                    data.pass_count,\n                    \" \\xa0 Incomplete passes: \",\n                    data.incomplete_count,\n                    \" \\xa0 Violations: \",\n                    data.violation_count,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                        lineNumber: 30,\n                        columnNumber: 129\n                    }, this),\n                    \"Overall Accessibility Score: \",\n                    (0,_queries_js__WEBPACK_IMPORTED_MODULE_3__.getScore)(data),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                        lineNumber: 31,\n                        columnNumber: 57\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: \"Subscores: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    \"Visual\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    \"Screen-Reader Optimized: \",\n                    (0,_queries_js__WEBPACK_IMPORTED_MODULE_3__.getScore)(data, screen_reader),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                        lineNumber: 34,\n                        columnNumber: 67\n                    }, this),\n                    \"Text Contrast: \",\n                    (0,_queries_js__WEBPACK_IMPORTED_MODULE_3__.getScore)(data, text_contrast),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                        lineNumber: 35,\n                        columnNumber: 57\n                    }, this),\n                    \"Audio\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                        lineNumber: 36,\n                        columnNumber: 16\n                    }, this),\n                    \"Closed Captioning: \",\n                    (0,_queries_js__WEBPACK_IMPORTED_MODULE_3__.getScore)(data, closed_captioning),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                        lineNumber: 37,\n                        columnNumber: 65\n                    }, this),\n                    \"No/Few Audio Clips: \",\n                    (0,_queries_js__WEBPACK_IMPORTED_MODULE_3__.getScore)(data, no_audio),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                        lineNumber: 38,\n                        columnNumber: 57\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TagContainer, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tag_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        category: \"SR\",\n                        number: (0,_queries_js__WEBPACK_IMPORTED_MODULE_3__.getScore)(data, screen_reader)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, data.url, true, {\n                fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                lineNumber: 26,\n                columnNumber: 16\n            }, this);\n        })\n    }, void 0, false);\n}\n_c = SearchResultsList;\nvar _c;\n$RefreshReg$(_c, \"SearchResultsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHNMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2Y7QUFDMkI7QUFDMUI7QUFFWixTQUFTSSxrQkFBa0JDLE9BQU87SUFDL0MsSUFBSUMsWUFBWUMsS0FBS0MsS0FBSyxDQUFDSCxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWTtJQUUzRCxJQUFJSSxNQUFNLEVBQUU7SUFDWixJQUFLLElBQUlDLE9BQU9KLFVBQVc7UUFDekJHLElBQUlFLElBQUksQ0FBQ0wsU0FBUyxDQUFDSSxJQUFJO0lBQ3pCO0lBQ0FELE1BQU1SLHVEQUFVQSxDQUFDUTtJQUNqQixJQUFJQSxJQUFJRyxNQUFNLElBQUksR0FBRztRQUNuQixxQkFBUSw4REFBQ0M7c0JBQUk7Ozs7OztJQUNmO0lBRUFQLFlBQVlDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS08sU0FBUyxDQUFDTDtJQUN0QyxxQkFDRTtrQkFDR0gsVUFBVVMsR0FBRyxDQUFDLFNBQVVDLElBQUk7WUFDM0IsSUFBSUMsZ0JBQWdCO2dCQUFDO2dCQUFxQjtnQkFBMkI7Z0JBQXFCO2dCQUF5QjtnQkFBd0I7Z0JBQW9CO2dCQUFxQjtnQkFBeUI7Z0JBQXlCO2dCQUF3QjtnQkFBc0I7Z0JBQTBCO2dCQUF3QjtnQkFBYztnQkFBMEI7Z0JBQXFCO2dCQUF5QjtnQkFBbUI7YUFBZ0I7WUFDL2IsSUFBSUMsZ0JBQWdCO2dCQUFDO2dCQUFrQjthQUEwQjtZQUNqRSxJQUFJQyxvQkFBb0I7Z0JBQUM7YUFBZ0I7WUFDekMsSUFBSUMsV0FBVztnQkFBQzthQUFvQjtZQUNwQyxxQkFBTyw4REFBQ1A7Z0JBQW1CUSxXQUFVOztrQ0FDbkMsOERBQUNDO3dCQUFFQyxNQUFNUCxLQUFLUSxPQUFPO2tDQUFHUixLQUFLUyxHQUFHOzs7Ozs7a0NBQ2hDLDhEQUFDQzs7Ozs7a0NBQ0QsOERBQUNDO2tDQUFFOzs7Ozs7b0JBQXFCO29CQUNmWCxLQUFLWSxVQUFVO29CQUFDO29CQUE0QlosS0FBS2EsZ0JBQWdCO29CQUFDO29CQUFxQmIsS0FBS2MsZUFBZTtvQkFBQztrQ0FBQyw4REFBQ0o7Ozs7O29CQUFJO29CQUM3RnhCLHFEQUFRQSxDQUFDYztvQkFBTTtrQ0FBQyw4REFBQ1U7Ozs7O2tDQUMvQyw4REFBQ0M7a0NBQUU7Ozs7OztvQkFBZTtrQ0FDWiw4REFBQ0Q7Ozs7O29CQUFJO29CQUNleEIscURBQVFBLENBQUNjLE1BQU1DO2tDQUFlLDhEQUFDUzs7Ozs7b0JBQUk7b0JBQzdDeEIscURBQVFBLENBQUNjLE1BQU1FO2tDQUFlLDhEQUFDUTs7Ozs7b0JBQUk7a0NBQzlDLDhEQUFDQTs7Ozs7b0JBQUk7b0JBQ1V4QixxREFBUUEsQ0FBQ2MsTUFBTUc7a0NBQW1CLDhEQUFDTzs7Ozs7b0JBQUk7b0JBQ3RDeEIscURBQVFBLENBQUNjLE1BQU1JO2tDQUFVLDhEQUFDTTs7Ozs7a0NBRy9DLDhEQUFDSzs7Ozs7a0NBSUQsOERBQUM1QiwrQ0FBR0E7d0JBQ0Y2QixVQUFVO3dCQUNWQyxRQUFRL0IscURBQVFBLENBQUNjLE1BQU1DOzs7Ozs7O2VBckJWRCxLQUFLUyxHQUFHOzs7OztRQTBCM0I7O0FBR047S0FqRHdCckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0c0xpc3QuanM/Zjc2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvU2VhcmNoUmVzdWx0c0xpc3QuY3NzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmlsdGVyRGF0YSwgZ2V0U2NvcmUgfSBmcm9tIFwiLi4vcXVlcmllcy5qc1wiO1xyXG5pbXBvcnQgVGFnIGZyb20gXCIuL1RhZy5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoUmVzdWx0c0xpc3QocmVzdWx0cykge1xyXG4gIHZhciBwYWdlSXRlbXMgPSBKU09OLnBhcnNlKHJlc3VsdHNbXCJyZXN1bHRzXCJdKVtcImRvY3VtZW50c1wiXTtcclxuXHJcbiAgbGV0IGFyciA9IFtdO1xyXG4gIGZvciAobGV0IGtleSBpbiBwYWdlSXRlbXMpIHtcclxuICAgIGFyci5wdXNoKHBhZ2VJdGVtc1trZXldKTtcclxuICB9XHJcbiAgYXJyID0gZmlsdGVyRGF0YShhcnIpO1xyXG4gIGlmIChhcnIubGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybiAoPGRpdj5ObyByZXN1bHRzIGZvdW5kOyB0cnkgYW5vdGhlciBzZWFyY2ghPC9kaXY+KVxyXG4gIH1cclxuXHJcbiAgcGFnZUl0ZW1zID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhcnIpKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3BhZ2VJdGVtcy5tYXAoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBsZXQgc2NyZWVuX3JlYWRlciA9IFtcImFyaWEtYWxsb3dlZC1hdHRyXCIsIFwiYXJpYS1icmFpbGxlLWVxdWl2YWxlbnRcIiwgXCJhcmlhLWNvbW1hbmQtbmFtZVwiLCBcImFyaWEtY29uZGl0aW9uYWwtYXR0clwiLCBcImFyaWEtZGVwcmVjYXRlZC1yb2xlXCIsIFwiYXJpYS1oaWRkZW4tYm9keVwiLCBcImFyaWEtaGlkZGVuLWZvY3VzXCIsIFwiYXJpYS1pbnB1dC1maWVsZC1uYW1lXCIsIFwiYXJpYS1wcm9ncmVzc2Jhci1uYW1lXCIsIFwiYXJpYS1wcm9oaWJpdGVkLWF0dHJcIiwgXCJhcmlhLXJlcXVpcmVkLWF0dHJcIiwgXCJhcmlhLXJlcXVpcmVkLWNoaWxkcmVuXCIsIFwiYXJpYS1yZXF1aXJlZC1wYXJlbnRcIiwgXCJhcmlhLXJvbGVzXCIsIFwiYXJpYS10b2dnbGUtZmllbGQtbmFtZVwiLCBcImFyaWEtdG9vbHRpcC1uYW1lXCIsIFwiYXJpYS12YWxpZC1hdHRyLXZhbHVlXCIsIFwiYXJpYS12YWxpZC1hdHRyXCIsIFwiaGVhZGluZy1vcmRlclwiXTtcclxuICAgICAgICBsZXQgdGV4dF9jb250cmFzdCA9IFtcImNvbG9yX2NvbnRyYXN0XCIsIFwiY29sb3ItY29udHJhc3QtZW5oYW5jZWRcIl1cclxuICAgICAgICBsZXQgY2xvc2VkX2NhcHRpb25pbmcgPSBbXCJhdWRpby1jYXB0aW9uXCJdXHJcbiAgICAgICAgbGV0IG5vX2F1ZGlvID0gW1wibm8tYXV0b3BsYXktYXVkaW9cIl1cclxuICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2RhdGEudXJsfSBjbGFzc05hbWU9XCJyZXN1bHRzLWxpc3RcIj5cclxuICAgICAgICAgIDxhIGhyZWY9e2RhdGEudXJsX2RvbX0+e2RhdGEudXJsfTwvYT5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8Yj5XQ0FHIFRlc3QgUmVzdWx0czwvYj5cclxuICAgICAgICAgIFBhc3Nlczoge2RhdGEucGFzc19jb3VudH0gJm5ic3A7IEluY29tcGxldGUgcGFzc2VzOiB7ZGF0YS5pbmNvbXBsZXRlX2NvdW50fSAmbmJzcDsgVmlvbGF0aW9uczoge2RhdGEudmlvbGF0aW9uX2NvdW50fSA8YnIvPlxyXG4gICAgICAgICAgT3ZlcmFsbCBBY2Nlc3NpYmlsaXR5IFNjb3JlOiB7Z2V0U2NvcmUoZGF0YSl9IDxici8+XHJcbiAgICAgICAgICA8Yj5TdWJzY29yZXM6IDwvYj5cclxuICAgICAgICAgIFZpc3VhbDxici8+XHJcbiAgICAgICAgICBTY3JlZW4tUmVhZGVyIE9wdGltaXplZDoge2dldFNjb3JlKGRhdGEsIHNjcmVlbl9yZWFkZXIpfTxici8+XHJcbiAgICAgICAgICBUZXh0IENvbnRyYXN0OiB7Z2V0U2NvcmUoZGF0YSwgdGV4dF9jb250cmFzdCl9PGJyLz5cclxuICAgICAgICAgIEF1ZGlvPGJyLz5cclxuICAgICAgICAgIENsb3NlZCBDYXB0aW9uaW5nOiB7Z2V0U2NvcmUoZGF0YSwgY2xvc2VkX2NhcHRpb25pbmcpfTxici8+XHJcbiAgICAgICAgICBOby9GZXcgQXVkaW8gQ2xpcHM6IHtnZXRTY29yZShkYXRhLCBub19hdWRpbyl9PGJyLz5cclxuXHJcblxyXG4gICAgICAgICAgPFRhZ0NvbnRhaW5lclxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRhZyBcclxuICAgICAgICAgICAgY2F0ZWdvcnk9e1wiU1JcIn1cclxuICAgICAgICAgICAgbnVtYmVyPXtnZXRTY29yZShkYXRhLCBzY3JlZW5fcmVhZGVyKX1cclxuICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICAgIH0pfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJmaWx0ZXJEYXRhIiwiZ2V0U2NvcmUiLCJUYWciLCJTZWFyY2hSZXN1bHRzTGlzdCIsInJlc3VsdHMiLCJwYWdlSXRlbXMiLCJKU09OIiwicGFyc2UiLCJhcnIiLCJrZXkiLCJwdXNoIiwibGVuZ3RoIiwiZGl2Iiwic3RyaW5naWZ5IiwibWFwIiwiZGF0YSIsInNjcmVlbl9yZWFkZXIiLCJ0ZXh0X2NvbnRyYXN0IiwiY2xvc2VkX2NhcHRpb25pbmciLCJub19hdWRpbyIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwidXJsX2RvbSIsInVybCIsImJyIiwiYiIsInBhc3NfY291bnQiLCJpbmNvbXBsZXRlX2NvdW50IiwidmlvbGF0aW9uX2NvdW50IiwiVGFnQ29udGFpbmVyIiwiY2F0ZWdvcnkiLCJudW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/SearchResultsList.js\n"));

/***/ })

});