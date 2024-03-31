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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchResultsList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_SearchResultsList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/SearchResultsList.css */ \"(app-pages-browser)/./app/styles/SearchResultsList.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _queries_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries.js */ \"(app-pages-browser)/./app/queries.js\");\n/* harmony import */ var _Tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tag.js */ \"(app-pages-browser)/./app/components/Tag.js\");\n/* harmony import */ var _TagContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TagContainer.js */ \"(app-pages-browser)/./app/components/TagContainer.js\");\n\n\n\n\n\n\nfunction SearchResultsList(results) {\n    var pageItems = JSON.parse(results[\"results\"])[\"documents\"];\n    let arr = [];\n    for(let key in pageItems){\n        arr.push(pageItems[key]);\n    }\n    arr = (0,_queries_js__WEBPACK_IMPORTED_MODULE_3__.filterData)(arr);\n    if (arr.length == 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"No results found; try another search!\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this);\n    }\n    pageItems = JSON.parse(JSON.stringify(arr));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: pageItems.map(function(data) {\n            let screen_reader = [\n                \"aria-allowed-attr\",\n                \"aria-braille-equivalent\",\n                \"aria-command-name\",\n                \"aria-conditional-attr\",\n                \"aria-deprecated-role\",\n                \"aria-hidden-body\",\n                \"aria-hidden-focus\",\n                \"aria-input-field-name\",\n                \"aria-progressbar-name\",\n                \"aria-prohibited-attr\",\n                \"aria-required-attr\",\n                \"aria-required-children\",\n                \"aria-required-parent\",\n                \"aria-roles\",\n                \"aria-toggle-field-name\",\n                \"aria-tooltip-name\",\n                \"aria-valid-attr-value\",\n                \"aria-valid-attr\",\n                \"heading-order\"\n            ];\n            let text_contrast = [\n                \"color_contrast\",\n                \"color-contrast-enhanced\"\n            ];\n            let closed_captioning = [\n                \"audio-caption\"\n            ];\n            let no_audio = [\n                \"no-autoplay-audio\"\n            ];\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"results-list\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: data.url_dom,\n                        children: data.url\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    \"Overall Accessibility Score: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: (0,_queries_js__WEBPACK_IMPORTED_MODULE_3__.getScore)(data)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                        lineNumber: 33,\n                        columnNumber: 40\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                        lineNumber: 33,\n                        columnNumber: 66\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TagContainer_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        screenReader: (0,_queries_js__WEBPACK_IMPORTED_MODULE_3__.getScore)(data, screen_reader),\n                        textContrast: (0,_queries_js__WEBPACK_IMPORTED_MODULE_3__.getScore)(data, text_contrast),\n                        closedCaptions: (0,_queries_js__WEBPACK_IMPORTED_MODULE_3__.getScore)(data, closed_captioning),\n                        noAudio: (0,_queries_js__WEBPACK_IMPORTED_MODULE_3__.getScore)(data, no_audio)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, data.url, true, {\n                fileName: \"C:\\\\Users\\\\reach\\\\Desktop\\\\IncluSite\\\\app\\\\components\\\\SearchResultsList.js\",\n                lineNumber: 28,\n                columnNumber: 16\n            }, this);\n        })\n    }, void 0, false);\n}\n_c = SearchResultsList;\nvar _c;\n$RefreshReg$(_c, \"SearchResultsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHNMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QztBQUNmO0FBQzJCO0FBQzFCO0FBQ2lCO0FBRzdCLFNBQVNLLGtCQUFrQkMsT0FBTztJQUMvQyxJQUFJQyxZQUFZQyxLQUFLQyxLQUFLLENBQUNILE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZO0lBRTNELElBQUlJLE1BQU0sRUFBRTtJQUNaLElBQUssSUFBSUMsT0FBT0osVUFBVztRQUN6QkcsSUFBSUUsSUFBSSxDQUFDTCxTQUFTLENBQUNJLElBQUk7SUFDekI7SUFDQUQsTUFBTVQsdURBQVVBLENBQUNTO0lBQ2pCLElBQUlBLElBQUlHLE1BQU0sSUFBSSxHQUFHO1FBQ25CLHFCQUFRLDhEQUFDQztzQkFBSTs7Ozs7O0lBQ2Y7SUFFQVAsWUFBWUMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLTyxTQUFTLENBQUNMO0lBQ3RDLHFCQUNFO2tCQUNHSCxVQUFVUyxHQUFHLENBQUMsU0FBVUMsSUFBSTtZQUMzQixJQUFJQyxnQkFBZ0I7Z0JBQUM7Z0JBQXFCO2dCQUEyQjtnQkFBcUI7Z0JBQXlCO2dCQUF3QjtnQkFBb0I7Z0JBQXFCO2dCQUF5QjtnQkFBeUI7Z0JBQXdCO2dCQUFzQjtnQkFBMEI7Z0JBQXdCO2dCQUFjO2dCQUEwQjtnQkFBcUI7Z0JBQXlCO2dCQUFtQjthQUFnQjtZQUMvYixJQUFJQyxnQkFBZ0I7Z0JBQUM7Z0JBQWtCO2FBQTBCO1lBQ2pFLElBQUlDLG9CQUFvQjtnQkFBQzthQUFnQjtZQUN6QyxJQUFJQyxXQUFXO2dCQUFDO2FBQW9CO1lBQ3BDLHFCQUFPLDhEQUFDUDtnQkFBbUJRLFdBQVU7O2tDQUNuQyw4REFBQ0M7d0JBQUVDLE1BQU1QLEtBQUtRLE9BQU87a0NBQUdSLEtBQUtTLEdBQUc7Ozs7OztrQ0FDaEMsOERBQUNDOzs7OztvQkFFa0k7a0NBQ3RHLDhEQUFDQztrQ0FBSTFCLHFEQUFRQSxDQUFDZTs7Ozs7O29CQUFXO2tDQUFDLDhEQUFDVTs7Ozs7a0NBRXhELDhEQUFDdkIsd0RBQVlBO3dCQUNYeUIsY0FBYzNCLHFEQUFRQSxDQUFDZSxNQUFNQzt3QkFDN0JZLGNBQWM1QixxREFBUUEsQ0FBQ2UsTUFBTUU7d0JBQzdCWSxnQkFBZ0I3QixxREFBUUEsQ0FBQ2UsTUFBTUc7d0JBQy9CWSxTQUFTOUIscURBQVFBLENBQUNlLE1BQU1JOzs7Ozs7O2VBWFhKLEtBQUtTLEdBQUc7Ozs7O1FBZTNCOztBQUdOO0tBdEN3QnJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHNMaXN0LmpzP2Y3NjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL1NlYXJjaFJlc3VsdHNMaXN0LmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZpbHRlckRhdGEsIGdldFNjb3JlIH0gZnJvbSBcIi4uL3F1ZXJpZXMuanNcIjtcclxuaW1wb3J0IFRhZyBmcm9tIFwiLi9UYWcuanNcIjtcclxuaW1wb3J0IFRhZ0NvbnRhaW5lciBmcm9tIFwiLi9UYWdDb250YWluZXIuanNcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaFJlc3VsdHNMaXN0KHJlc3VsdHMpIHtcclxuICB2YXIgcGFnZUl0ZW1zID0gSlNPTi5wYXJzZShyZXN1bHRzW1wicmVzdWx0c1wiXSlbXCJkb2N1bWVudHNcIl07XHJcblxyXG4gIGxldCBhcnIgPSBbXTtcclxuICBmb3IgKGxldCBrZXkgaW4gcGFnZUl0ZW1zKSB7XHJcbiAgICBhcnIucHVzaChwYWdlSXRlbXNba2V5XSk7XHJcbiAgfVxyXG4gIGFyciA9IGZpbHRlckRhdGEoYXJyKTtcclxuICBpZiAoYXJyLmxlbmd0aCA9PSAwKSB7XHJcbiAgICByZXR1cm4gKDxkaXY+Tm8gcmVzdWx0cyBmb3VuZDsgdHJ5IGFub3RoZXIgc2VhcmNoITwvZGl2PilcclxuICB9XHJcblxyXG4gIHBhZ2VJdGVtcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYXJyKSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtwYWdlSXRlbXMubWFwKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgbGV0IHNjcmVlbl9yZWFkZXIgPSBbXCJhcmlhLWFsbG93ZWQtYXR0clwiLCBcImFyaWEtYnJhaWxsZS1lcXVpdmFsZW50XCIsIFwiYXJpYS1jb21tYW5kLW5hbWVcIiwgXCJhcmlhLWNvbmRpdGlvbmFsLWF0dHJcIiwgXCJhcmlhLWRlcHJlY2F0ZWQtcm9sZVwiLCBcImFyaWEtaGlkZGVuLWJvZHlcIiwgXCJhcmlhLWhpZGRlbi1mb2N1c1wiLCBcImFyaWEtaW5wdXQtZmllbGQtbmFtZVwiLCBcImFyaWEtcHJvZ3Jlc3NiYXItbmFtZVwiLCBcImFyaWEtcHJvaGliaXRlZC1hdHRyXCIsIFwiYXJpYS1yZXF1aXJlZC1hdHRyXCIsIFwiYXJpYS1yZXF1aXJlZC1jaGlsZHJlblwiLCBcImFyaWEtcmVxdWlyZWQtcGFyZW50XCIsIFwiYXJpYS1yb2xlc1wiLCBcImFyaWEtdG9nZ2xlLWZpZWxkLW5hbWVcIiwgXCJhcmlhLXRvb2x0aXAtbmFtZVwiLCBcImFyaWEtdmFsaWQtYXR0ci12YWx1ZVwiLCBcImFyaWEtdmFsaWQtYXR0clwiLCBcImhlYWRpbmctb3JkZXJcIl07XHJcbiAgICAgICAgbGV0IHRleHRfY29udHJhc3QgPSBbXCJjb2xvcl9jb250cmFzdFwiLCBcImNvbG9yLWNvbnRyYXN0LWVuaGFuY2VkXCJdXHJcbiAgICAgICAgbGV0IGNsb3NlZF9jYXB0aW9uaW5nID0gW1wiYXVkaW8tY2FwdGlvblwiXVxyXG4gICAgICAgIGxldCBub19hdWRpbyA9IFtcIm5vLWF1dG9wbGF5LWF1ZGlvXCJdXHJcbiAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtkYXRhLnVybH0gY2xhc3NOYW1lPVwicmVzdWx0cy1saXN0XCI+XHJcbiAgICAgICAgICA8YSBocmVmPXtkYXRhLnVybF9kb219PntkYXRhLnVybH08L2E+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgey8qIDxoMz5XQ0FHIFRlc3QgUmVzdWx0czwvaDM+ICovfVxyXG4gICAgICAgICAgey8qIFBhc3Nlczoge2RhdGEucGFzc19jb3VudH0gJm5ic3A7IEluY29tcGxldGUgcGFzc2VzOiB7ZGF0YS5pbmNvbXBsZXRlX2NvdW50fSAmbmJzcDsgVmlvbGF0aW9uczoge2RhdGEudmlvbGF0aW9uX2NvdW50fSA8YnIvPiAqL31cclxuICAgICAgICAgIE92ZXJhbGwgQWNjZXNzaWJpbGl0eSBTY29yZTogPGgzPntnZXRTY29yZShkYXRhKX08L2gzPiA8YnIvPlxyXG5cclxuICAgICAgICAgIDxUYWdDb250YWluZXJcclxuICAgICAgICAgICAgc2NyZWVuUmVhZGVyPXtnZXRTY29yZShkYXRhLCBzY3JlZW5fcmVhZGVyKX1cclxuICAgICAgICAgICAgdGV4dENvbnRyYXN0PXtnZXRTY29yZShkYXRhLCB0ZXh0X2NvbnRyYXN0KX1cclxuICAgICAgICAgICAgY2xvc2VkQ2FwdGlvbnM9e2dldFNjb3JlKGRhdGEsIGNsb3NlZF9jYXB0aW9uaW5nKX1cclxuICAgICAgICAgICAgbm9BdWRpbz17Z2V0U2NvcmUoZGF0YSwgbm9fYXVkaW8pfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgICB9KX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmlsdGVyRGF0YSIsImdldFNjb3JlIiwiVGFnIiwiVGFnQ29udGFpbmVyIiwiU2VhcmNoUmVzdWx0c0xpc3QiLCJyZXN1bHRzIiwicGFnZUl0ZW1zIiwiSlNPTiIsInBhcnNlIiwiYXJyIiwia2V5IiwicHVzaCIsImxlbmd0aCIsImRpdiIsInN0cmluZ2lmeSIsIm1hcCIsImRhdGEiLCJzY3JlZW5fcmVhZGVyIiwidGV4dF9jb250cmFzdCIsImNsb3NlZF9jYXB0aW9uaW5nIiwibm9fYXVkaW8iLCJjbGFzc05hbWUiLCJhIiwiaHJlZiIsInVybF9kb20iLCJ1cmwiLCJiciIsImgzIiwic2NyZWVuUmVhZGVyIiwidGV4dENvbnRyYXN0IiwiY2xvc2VkQ2FwdGlvbnMiLCJub0F1ZGlvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/SearchResultsList.js\n"));

/***/ })

});