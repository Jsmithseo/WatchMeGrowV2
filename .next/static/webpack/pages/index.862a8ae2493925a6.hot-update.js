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

/***/ "./pages/components/carosel.js":
/*!*************************************!*\
  !*** ./pages/components/carosel.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/esm/index.js\");\n// components/CustomCarousel.js\n\nvar _s = $RefreshSig$();\n\n\n// const BannerStyles = {\n//     backgroundColor: \"rgba(255, 0, 0, 0.3)\",\n//     color: \"#fff\",\n//     textAlign: \"center\",\n//     backgroundSize: \"cover\",\n//     backgroundRepeat: \"no-repeat\",\n//   }\nconst items = [\n    {\n        src: \"/path/to/first-image.jpg\",\n        altText: \"Slide 1\",\n        caption: \"Slide 1 Caption\"\n    },\n    {\n        src: \"/path/to/second-image.jpg\",\n        altText: \"Slide 2\",\n        caption: \"Slide 2 Caption\"\n    },\n    {\n        src: \"/path/to/third-image.jpg\",\n        altText: \"Slide 3\",\n        caption: \"Slide 3 Caption\"\n    }\n];\nfunction CustomCarousel() {\n    _s();\n    const [activeIndex, setActiveIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    const [animating, setAnimating] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const next = ()=>{\n        if (animating) return;\n        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;\n        setActiveIndex(nextIndex);\n    };\n    const previous = ()=>{\n        if (animating) return;\n        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;\n        setActiveIndex(nextIndex);\n    };\n    const goToIndex = (newIndex)=>{\n        if (animating) return;\n        setActiveIndex(newIndex);\n    };\n    const slides = items.map((item)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n            onExiting: ()=>setAnimating(true),\n            onExited: ()=>setAnimating(false),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: item.src,\n                    alt: item.altText,\n                    width: \"100%\"\n                }, void 0, false, {\n                    fileName: \"/Users/smittyhamm/Development/watchmegrow/Watch me Grow V2/pages/components/carosel.js\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CarouselCaption, {\n                    captionText: item.caption,\n                    captionHeader: item.altText\n                }, void 0, false, {\n                    fileName: \"/Users/smittyhamm/Development/watchmegrow/Watch me Grow V2/pages/components/carosel.js\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, item.src, true, {\n            fileName: \"/Users/smittyhamm/Development/watchmegrow/Watch me Grow V2/pages/components/carosel.js\",\n            lineNumber: 58,\n            columnNumber: 13\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n        activeIndex: activeIndex,\n        next: next,\n        previous: previous,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CarouselIndicators, {\n                items: items,\n                activeIndex: activeIndex,\n                onClickHandler: goToIndex\n            }, void 0, false, {\n                fileName: \"/Users/smittyhamm/Development/watchmegrow/Watch me Grow V2/pages/components/carosel.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            slides,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CarouselControl, {\n                direction: \"prev\",\n                directionText: \"Previous\",\n                onClickHandler: previous\n            }, void 0, false, {\n                fileName: \"/Users/smittyhamm/Development/watchmegrow/Watch me Grow V2/pages/components/carosel.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CarouselControl, {\n                direction: \"next\",\n                directionText: \"Next\",\n                onClickHandler: next\n            }, void 0, false, {\n                fileName: \"/Users/smittyhamm/Development/watchmegrow/Watch me Grow V2/pages/components/carosel.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/smittyhamm/Development/watchmegrow/Watch me Grow V2/pages/components/carosel.js\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, this);\n}\n_s(CustomCarousel, \"FYd3Lqf74+dQScd+D3/2SfzV0cE=\");\n_c = CustomCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomCarousel);\nvar _c;\n$RefreshReg$(_c, \"CustomCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2Nhcm9zZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsK0JBQStCOzs7QUFFTDtBQUNnRjtBQUkxRyx5QkFBeUI7QUFDekIsK0NBQStDO0FBQy9DLHFCQUFxQjtBQUNyQiwyQkFBMkI7QUFDM0IsK0JBQStCO0FBQy9CLHFDQUFxQztBQUVyQyxNQUFNO0FBRU4sTUFBTU0sUUFBUTtJQUNWO1FBQ0lDLEtBQUs7UUFDTEMsU0FBUztRQUNUQyxTQUFTO0lBQ2I7SUFDQTtRQUNJRixLQUFLO1FBQ0xDLFNBQVM7UUFDVEMsU0FBUztJQUNiO0lBQ0E7UUFDSUYsS0FBSztRQUNMQyxTQUFTO1FBQ1RDLFNBQVM7SUFDYjtDQUNIO0FBRUQsU0FBU0M7O0lBQ0wsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdaLHFEQUFjLENBQUM7SUFDckQsTUFBTSxDQUFDYyxXQUFXQyxhQUFhLEdBQUdmLHFEQUFjLENBQUM7SUFFakQsTUFBTWdCLE9BQU87UUFDVCxJQUFJRixXQUFXO1FBQ2YsTUFBTUcsWUFBWU4sZ0JBQWdCTCxNQUFNWSxNQUFNLEdBQUcsSUFBSSxJQUFJUCxjQUFjO1FBQ3ZFQyxlQUFlSztJQUNuQjtJQUVBLE1BQU1FLFdBQVc7UUFDYixJQUFJTCxXQUFXO1FBQ2YsTUFBTUcsWUFBWU4sZ0JBQWdCLElBQUlMLE1BQU1ZLE1BQU0sR0FBRyxJQUFJUCxjQUFjO1FBQ3ZFQyxlQUFlSztJQUNuQjtJQUVBLE1BQU1HLFlBQVksQ0FBQ0M7UUFDZixJQUFJUCxXQUFXO1FBQ2ZGLGVBQWVTO0lBQ25CO0lBRUEsTUFBTUMsU0FBU2hCLE1BQU1pQixHQUFHLENBQUMsQ0FBQ0M7UUFDdEIscUJBQ0ksOERBQUN0QixvREFBWUE7WUFDVHVCLFdBQVcsSUFBTVYsYUFBYTtZQUM5QlcsVUFBVSxJQUFNWCxhQUFhOzs4QkFHN0IsOERBQUNZO29CQUFJcEIsS0FBS2lCLEtBQUtqQixHQUFHO29CQUFFcUIsS0FBS0osS0FBS2hCLE9BQU87b0JBQUVxQixPQUFNOzs7Ozs7OEJBQzdDLDhEQUFDeEIsdURBQWVBO29CQUFDeUIsYUFBYU4sS0FBS2YsT0FBTztvQkFBRXNCLGVBQWVQLEtBQUtoQixPQUFPOzs7Ozs7O1dBSGxFZ0IsS0FBS2pCLEdBQUc7Ozs7O0lBTXpCO0lBRUEscUJBQ0ksOERBQUNOLGdEQUFRQTtRQUFDVSxhQUFhQTtRQUFhSyxNQUFNQTtRQUFNRyxVQUFVQTs7MEJBQ3RELDhEQUFDZiwwREFBa0JBO2dCQUFDRSxPQUFPQTtnQkFBT0ssYUFBYUE7Z0JBQWFxQixnQkFBZ0JaOzs7Ozs7WUFDM0VFOzBCQUNELDhEQUFDbkIsdURBQWVBO2dCQUFDOEIsV0FBVTtnQkFBT0MsZUFBYztnQkFBV0YsZ0JBQWdCYjs7Ozs7OzBCQUMzRSw4REFBQ2hCLHVEQUFlQTtnQkFBQzhCLFdBQVU7Z0JBQU9DLGVBQWM7Z0JBQU9GLGdCQUFnQmhCOzs7Ozs7Ozs7Ozs7QUFHbkY7R0ExQ1NOO0tBQUFBO0FBNENULCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvY2Fyb3NlbC5qcz83NDlkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvQ3VzdG9tQ2Fyb3VzZWwuanNcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcm91c2VsLCBDYXJvdXNlbEl0ZW0sIENhcm91c2VsQ29udHJvbCwgQ2Fyb3VzZWxJbmRpY2F0b3JzLCBDYXJvdXNlbENhcHRpb24gfSBmcm9tICdyZWFjdHN0cmFwJztcblxuXG5cbi8vIGNvbnN0IEJhbm5lclN0eWxlcyA9IHtcbi8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDAsIDAsIDAuMylcIixcbi8vICAgICBjb2xvcjogXCIjZmZmXCIsXG4vLyAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuLy8gICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4vLyAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgXG4vLyAgIH1cblxuY29uc3QgaXRlbXMgPSBbXG4gICAge1xuICAgICAgICBzcmM6ICcvcGF0aC90by9maXJzdC1pbWFnZS5qcGcnLFxuICAgICAgICBhbHRUZXh0OiAnU2xpZGUgMScsXG4gICAgICAgIGNhcHRpb246ICdTbGlkZSAxIENhcHRpb24nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogJy9wYXRoL3RvL3NlY29uZC1pbWFnZS5qcGcnLFxuICAgICAgICBhbHRUZXh0OiAnU2xpZGUgMicsXG4gICAgICAgIGNhcHRpb246ICdTbGlkZSAyIENhcHRpb24nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogJy9wYXRoL3RvL3RoaXJkLWltYWdlLmpwZycsXG4gICAgICAgIGFsdFRleHQ6ICdTbGlkZSAzJyxcbiAgICAgICAgY2FwdGlvbjogJ1NsaWRlIDMgQ2FwdGlvbidcbiAgICB9XG5dO1xuXG5mdW5jdGlvbiBDdXN0b21DYXJvdXNlbCgpIHtcbiAgICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFthbmltYXRpbmcsIHNldEFuaW1hdGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGFjdGl2ZUluZGV4ID09PSBpdGVtcy5sZW5ndGggLSAxID8gMCA6IGFjdGl2ZUluZGV4ICsgMTtcbiAgICAgICAgc2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmV2aW91cyA9ICgpID0+IHtcbiAgICAgICAgaWYgKGFuaW1hdGluZykgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCA9PT0gMCA/IGl0ZW1zLmxlbmd0aCAtIDEgOiBhY3RpdmVJbmRleCAtIDE7XG4gICAgICAgIHNldEFjdGl2ZUluZGV4KG5leHRJbmRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ29Ub0luZGV4ID0gKG5ld0luZGV4KSA9PiB7XG4gICAgICAgIGlmIChhbmltYXRpbmcpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlSW5kZXgobmV3SW5kZXgpO1xuICAgIH1cblxuICAgIGNvbnN0IHNsaWRlcyA9IGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcm91c2VsSXRlbVxuICAgICAgICAgICAgICAgIG9uRXhpdGluZz17KCkgPT4gc2V0QW5pbWF0aW5nKHRydWUpfVxuICAgICAgICAgICAgICAgIG9uRXhpdGVkPXsoKSA9PiBzZXRBbmltYXRpbmcoZmFsc2UpfVxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5zcmN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uc3JjfSBhbHQ9e2l0ZW0uYWx0VGV4dH0gd2lkdGg9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxDYXB0aW9uIGNhcHRpb25UZXh0PXtpdGVtLmNhcHRpb259IGNhcHRpb25IZWFkZXI9e2l0ZW0uYWx0VGV4dH0gLz5cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcm91c2VsIGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH0gbmV4dD17bmV4dH0gcHJldmlvdXM9e3ByZXZpb3VzfT5cbiAgICAgICAgICAgIDxDYXJvdXNlbEluZGljYXRvcnMgaXRlbXM9e2l0ZW1zfSBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9IG9uQ2xpY2tIYW5kbGVyPXtnb1RvSW5kZXh9IC8+XG4gICAgICAgICAgICB7c2xpZGVzfVxuICAgICAgICAgICAgPENhcm91c2VsQ29udHJvbCBkaXJlY3Rpb249XCJwcmV2XCIgZGlyZWN0aW9uVGV4dD1cIlByZXZpb3VzXCIgb25DbGlja0hhbmRsZXI9e3ByZXZpb3VzfSAvPlxuICAgICAgICAgICAgPENhcm91c2VsQ29udHJvbCBkaXJlY3Rpb249XCJuZXh0XCIgZGlyZWN0aW9uVGV4dD1cIk5leHRcIiBvbkNsaWNrSGFuZGxlcj17bmV4dH0gLz5cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21DYXJvdXNlbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcm91c2VsIiwiQ2Fyb3VzZWxJdGVtIiwiQ2Fyb3VzZWxDb250cm9sIiwiQ2Fyb3VzZWxJbmRpY2F0b3JzIiwiQ2Fyb3VzZWxDYXB0aW9uIiwiaXRlbXMiLCJzcmMiLCJhbHRUZXh0IiwiY2FwdGlvbiIsIkN1c3RvbUNhcm91c2VsIiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsInVzZVN0YXRlIiwiYW5pbWF0aW5nIiwic2V0QW5pbWF0aW5nIiwibmV4dCIsIm5leHRJbmRleCIsImxlbmd0aCIsInByZXZpb3VzIiwiZ29Ub0luZGV4IiwibmV3SW5kZXgiLCJzbGlkZXMiLCJtYXAiLCJpdGVtIiwib25FeGl0aW5nIiwib25FeGl0ZWQiLCJpbWciLCJhbHQiLCJ3aWR0aCIsImNhcHRpb25UZXh0IiwiY2FwdGlvbkhlYWRlciIsIm9uQ2xpY2tIYW5kbGVyIiwiZGlyZWN0aW9uIiwiZGlyZWN0aW9uVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/carosel.js\n"));

/***/ })

});