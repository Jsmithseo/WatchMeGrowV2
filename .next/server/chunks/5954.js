"use strict";
exports.id = 5954;
exports.ids = [5954];
exports.modules = {

/***/ 5954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_bannerImage_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(803);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);






const BannerStyles = {
    backgroundImage: `url('${_public_bannerImage_jpg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.src}')`,
    backgroundColor: "rgba(255, 0, 0, 0.3)",
    color: "#fff",
    textAlign: "center",
    height: "410px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
};
const bannerButton = {
    backgroundColor: "#fff",
    color: "#007bff",
    fontSize: "18px",
    padding: "5px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontFamily: "avenir",
    mariginTop: "10px"
};
const bannerCopy = {
    fontFamily: "avenir",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    paddingTop: "75px",
    paddingBottom: "99px",
    mariginLeft: "100px",
    fontSize: "22px",
    paddingLeft: "20px",
    paddingRight: "20px"
};
function Banner() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: BannerStyles,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                    md: {
                        size: 3,
                        offset: 1
                    },
                    style: bannerCopy,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "Watch Me Grow, Inc. empowers Solano County families by providing vital resources, uniting and strengthening communities for a brighter future."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "/about",
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    style: bannerButton,
                                    children: "Learn More"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {})
            ]
        })
    });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);


/***/ })

};
;