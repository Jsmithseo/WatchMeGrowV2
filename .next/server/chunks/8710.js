"use strict";
exports.id = 8710;
exports.ids = [8710];
exports.modules = {

/***/ 8710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Video1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(450);




const mainStyle = {
    marginTop: "0px",
    marginBottom: "2px",
    paddingTop: "50px",
    paddingBottom: "50px"
};
const buttonStyle = {
    marginTop: "30px"
};
const heading = {
    fontSize: "28px",
    fontFamily: "avenir",
    fontWeight: "bold",
    textAlign: "center"
};
const paraStyle = {
    fontFamily: "avenir",
    fontSize: "18px",
    textAlign: "center"
};
function TwoColumnLayout() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: mainStyle,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                    md: "12",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: heading,
                            children: "How We Nurture Our Garden"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            style: paraStyle,
                            children: "Watch Me Grow, Inc. embraces an innovative and culturally sensitive approach to meet the gaps in resources/services, consultant with organizations/businesses and effectively provide quality childcare while engage low-income parents/guardians in early childhood education and advocacy.  Watch Me Grow, Inc. supports parents who suffer from trauma and misinformation, and connect them with the proper resources and services offered by various public agencies and private organizations within Solano County, such as job placement, childcare alternative payment, rental assistance, mental health services... just to name a few."
                        })
                    ]
                })
            })
        })
    });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TwoColumnLayout);


/***/ }),

/***/ 450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function YoutubeEmbed() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "video-responsive",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
            width: "600",
            height: "380",
            src: `http://www.youtube.com/watch?v=YSEz2p56i9Q&t`,
            frameBorder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true,
            title: "Embedded youtube"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YoutubeEmbed);


/***/ })

};
;