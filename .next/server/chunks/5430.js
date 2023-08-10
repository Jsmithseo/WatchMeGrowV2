"use strict";
exports.id = 5430;
exports.ids = [5430];
exports.modules = {

/***/ 5430:
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



function Timeline() {
    const timelineData = [
        {
            title: "Event 1",
            description: "Description for event 1"
        },
        {
            title: "Event 2",
            description: "Description for event 2"
        },
        {
            title: "Event 3",
            description: "Description for event 3"
        }
    ];
    const MainStyle = {
        padding: "20px"
    };
    const timelineItem = {
        marginBottom: "20px",
        position: "relative"
    };
    const timelineCard = {
        borderLeft: "3px solid #007bff",
        borderRadius: "0"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: MainStyle,
        className: "timeline-container",
        children: timelineData.map((event, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: timelineItem,
                className: "timeline-item",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            xs: "2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "timeline-icon"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            xs: "10",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
                                className: "timeline-card",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CardBody, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {
                                            tag: "h5",
                                            children: event.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CardText, {
                                            children: event.description
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }, index))
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timeline);


/***/ })

};
;