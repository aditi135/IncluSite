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

/***/ "(app-pages-browser)/./app/components/SearchBar.js":
/*!*************************************!*\
  !*** ./app/components/SearchBar.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_SearchBar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/SearchBar.css */ \"(app-pages-browser)/./app/styles/SearchBar.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction SearchBar(param) {\n    let { setResults } = param;\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const fetchData = (query)=>{\n        // call api here\n        fetch(\"https://jsonplaceholder.typicode.com/users\").then((response)=>response.json()).then((json)=>{\n            setResults(json);\n            console.log(json);\n        });\n    };\n    const handleChange = (value)=>{\n        setInput(value);\n        fetchData(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"search\",\n        id: \"search\",\n        placeholder: \"Search\",\n        value: input,\n        onChange: (e)=>handleChange(e.target.value)\n    }, void 0, false, {\n        fileName: \"/Users/jiagill/Documents/VSCode/IncluSite/app/components/SearchBar.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(SearchBar, \"RL+Zbs2TIka0YpcBOJptmHqCgYA=\");\n_c = SearchBar;\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NlYXJjaEJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzZDO0FBQ0w7QUFFekIsU0FBU0csVUFBVSxLQUFZO1FBQVosRUFBQ0MsVUFBVSxFQUFDLEdBQVo7O0lBQ2hDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNSyxZQUFZLENBQUNDO1FBQ2pCLGdCQUFnQjtRQUNoQkMsTUFBTSw4Q0FDSEMsSUFBSSxDQUFDLENBQUNDLFdBQWFBLFNBQVNDLElBQUksSUFDaENGLElBQUksQ0FBQyxDQUFDRTtZQUNMUixXQUFXUTtZQUNYQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDSjtJQUNBLE1BQU1HLGVBQWUsQ0FBQ0M7UUFDcEJWLFNBQVNVO1FBQ1RULFVBQVVTO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ1g7UUFDQ1ksTUFBSztRQUNMQyxJQUFHO1FBQ0hDLGFBQVk7UUFDWkgsT0FBT1g7UUFDUGUsVUFBVSxDQUFDQyxJQUFNTixhQUFhTSxFQUFFQyxNQUFNLENBQUNOLEtBQUs7Ozs7OztBQUdsRDtHQXpCd0JiO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1NlYXJjaEJhci5qcz9hMGU1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1NlYXJjaEJhci5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hCYXIoe3NldFJlc3VsdHN9KSB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGZldGNoRGF0YSA9IChxdWVyeSkgPT4ge1xuICAgIC8vIGNhbGwgYXBpIGhlcmVcbiAgICBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICBzZXRSZXN1bHRzKGpzb24pO1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgIH0pO1xuICB9O1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBzZXRJbnB1dCh2YWx1ZSk7XG4gICAgZmV0Y2hEYXRhKHZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICBpZD1cInNlYXJjaFwiXG4gICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgLz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiU2VhcmNoQmFyIiwic2V0UmVzdWx0cyIsImlucHV0Iiwic2V0SW5wdXQiLCJmZXRjaERhdGEiLCJxdWVyeSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/SearchBar.js\n"));

/***/ })

});