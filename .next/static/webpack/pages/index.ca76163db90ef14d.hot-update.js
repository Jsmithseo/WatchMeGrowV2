"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/NewsletterForm.js":
/*!********************************************!*\
  !*** ./pages/components/NewsletterForm.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction NewsletterForm() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (email) {\n            // Handle email submission logic here\n            console.log(\"Email submitted: \".concat(email));\n            setEmail(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormGroup, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Label, {\n                        for: \"email\",\n                        children: \"Email:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/smittyhamm/Development/watchmegrow/Watch me Grow V2/pages/components/NewsletterForm.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                        type: \"email\",\n                        name: \"email\",\n                        id: \"email\",\n                        placeholder: \"Enter your email\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/smittyhamm/Development/watchmegrow/Watch me Grow V2/pages/components/NewsletterForm.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/smittyhamm/Development/watchmegrow/Watch me Grow V2/pages/components/NewsletterForm.js\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                type: \"submit\",\n                color: \"primary\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/smittyhamm/Development/watchmegrow/Watch me Grow V2/pages/components/NewsletterForm.js\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/smittyhamm/Development/watchmegrow/Watch me Grow V2/pages/components/NewsletterForm.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(NewsletterForm, \"qu4bovk5U4+JuhY7vxbmswqixrc=\");\n_c = NewsletterForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsletterForm);\nvar _c;\n$RefreshReg$(_c, \"NewsletterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL05ld3NsZXR0ZXJGb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQUNxRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUU3RixTQUFTUzs7SUFDUCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFFakMsTUFBTVcsZUFBZSxDQUFDQztRQUNsQkEsRUFBRUMsY0FBYztRQUNoQixJQUFHSixPQUFPO1lBQ04scUNBQXFDO1lBQ3JDSyxRQUFRQyxHQUFHLENBQUMsb0JBQTBCLE9BQU5OO1lBQ2hDQyxTQUFTO1FBQ2I7SUFDSjtJQUVGLHFCQUNFLDhEQUFDTiw0REFBSUE7UUFBQ1ksVUFBVUw7OzBCQUNoQiw4REFBQ007O2tDQUNHLDhEQUFDQzt3QkFBTUMsS0FBSTtrQ0FBUTs7Ozs7O2tDQUNuQiw4REFBQ0M7d0JBQ0dDLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0hDLGFBQVk7d0JBQ1pDLE9BQU9oQjt3QkFDUGlCLFVBQVUsQ0FBQ2QsSUFBTUYsU0FBU0UsRUFBRWUsTUFBTSxDQUFDRixLQUFLO3dCQUN4Q0csUUFBUTs7Ozs7Ozs7Ozs7OzBCQUdoQiw4REFBQ3JCLDhEQUFNQTtnQkFBQ2MsTUFBSztnQkFBU1EsT0FBTTswQkFBVTs7Ozs7Ozs7Ozs7O0FBRzFDO0dBN0JTckI7S0FBQUE7QUErQlQsK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9OZXdzbGV0dGVyRm9ybS5qcz9iODBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIEZvcm0sIElucHV0R3JvdXAsIEZvcm1Db250cm9sLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5mdW5jdGlvbiBOZXdzbGV0dGVyRm9ybSgpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGVtYWlsKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgZW1haWwgc3VibWlzc2lvbiBsb2dpYyBoZXJlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRW1haWwgc3VibWl0dGVkOiAke2VtYWlsfWApO1xuICAgICAgICAgICAgc2V0RW1haWwoJycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgPEZvcm1Hcm91cD5cbiAgICAgICAgPExhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9MYWJlbD5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjb2xvcj1cInByaW1hcnlcIj5TdWJtaXQ8L0J1dHRvbj5cbjwvRm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3NsZXR0ZXJGb3JtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJGb3JtIiwiSW5wdXRHcm91cCIsIkZvcm1Db250cm9sIiwiQnV0dG9uIiwiTmV3c2xldHRlckZvcm0iLCJlbWFpbCIsInNldEVtYWlsIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiRm9ybUdyb3VwIiwiTGFiZWwiLCJmb3IiLCJJbnB1dCIsInR5cGUiLCJuYW1lIiwiaWQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/NewsletterForm.js\n"));

/***/ })

});