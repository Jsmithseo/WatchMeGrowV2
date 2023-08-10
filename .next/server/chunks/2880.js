"use strict";
exports.id = 2880;
exports.ids = [2880];
exports.modules = {

/***/ 2880:
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



function NewsletterForm() {
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (email) {
            // Handle email submission logic here
            console.log(`Email submitted: ${email}`);
            setEmail("");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Form, {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Input, {
                    type: "email",
                    name: "email",
                    id: "email",
                    placeholder: "Enter your email",
                    value: email,
                    onChange: (e)=>setEmail(e.target.value),
                    required: true
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
                type: "submit",
                color: "primary",
                children: "Submit"
            })
        ]
    });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsletterForm);


/***/ })

};
;