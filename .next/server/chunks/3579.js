"use strict";
exports.id = 3579;
exports.ids = [3579];
exports.modules = {

/***/ 3579:
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
    paddingBottom: "50px",
    backgroundColor: "#F5F0EF"
};
const buttonStyle = {
    marginTop: "30px"
};
const heading = {
    fontSize: "28px",
    fontFamily: "avenir",
    fontWeight: "bold"
};
const paraStyle = {
    fontFamily: "avenir",
    fontSize: "18px",
    fontWeight: "bold"
};
function TwoColumnLayout() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: mainStyle,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            md: "6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                width: "560",
                                height: "315",
                                src: "https://www.youtube.com/embed/YSEz2p56i9Q",
                                title: "YouTube video player",
                                frameborder: "0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                allowfullscreen: true
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            md: "6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: heading,
                                    children: "Youth Center"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: paraStyle,
                                    children: "Introducing the Watch Me Grow, Inc. Youth Center! Building on our commitment to innovative and culturally sensitive support, our new youth center aims to be a beacon for the young generation of Vallejo. Understanding the unique adversities they face, from trauma to misinformation, our center is devoted to filling the gap in essential resources. In collaboration with a myriad of public agencies and private organizations, our center is poised to offer a suite of services, from job placements to mental health support. Join us in our mission to pave a brighter, informed future for the youth of Vallejo!"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                    className: "justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        md: "4"
                    })
                })
            ]
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