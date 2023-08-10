"use strict";
exports.id = 8157;
exports.ids = [8157];
exports.modules = {

/***/ 8157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./pages/public/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.17479987.png","height":3000,"width":3000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAyUlEQVR42mNgZmZmZMAC/re4IsQVDbiZFbS5TRkYGHySGfj81wopKjMwMDB8zrODKWJyZmBgMGXIduGQzwyQWumiFlntpqQCM0CImYEhtOaYe+K0aUo185QYFuxy08sKn21ozgACCRFyUlGLbSwrmiX37oyI+L990rSnzQwMZgyWEtb/GVoYGRgqGFgmZRmF9DEw2M3qm2r5+f9/kP32arxyVgwwMJ9BVGKprU4QAwODMwirycraIyRdVGEuZbTV0FQICA4RQvYuANnMLkslk4EEAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./pages/public/words.png
/* harmony default export */ const words = ({"src":"/_next/static/media/words.e6cad5bb.png","height":1031,"width":1601,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAa0lEQVR42mMgCFRVVRnV1NSYjLS0GBk0VBk7NfQZj4R6MIXMC2eqXeHLSNgEoG4VdXV1XSNtbQ0GTTV1oAkaR8I89ILnRegDTeBnAEoqampqahhra6swaKmrd2kYqB8O99QOmhuhld3nKggAyiMWYDLF/SQAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6981);
;// CONCATENATED MODULE: ./pages/components/Header.js







function Header() {
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const toggle = ()=>setIsOpen(!isOpen);
    const navStyles = {
        backgroundColor: "#C11B27"
    };
    const navLinks = {
        font: "avenir",
        fontSize: "18px",
        color: "#fff",
        paddingRight: "25px",
        paddingTop: "50px",
        paddingLeft: "25px",
        textDecoration: "none",
        fontFamily: "avenir"
    };
    const aboveNavStyles = {
        paddingTop: "30px",
        paddingBottom: "30px"
    };
    const buttonStyle = {
        marginTop: "50px"
    };
    const buttonStyle2 = {
        marginTop: "50px",
        backgroundColor: "#C11C27"
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_reactstrap_.Row, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(external_reactstrap_.Col, {
                        md: {
                            size: 4,
                            offset: 2
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                            href: "/",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: logo,
                                    alt: "Description of Image",
                                    width: 150,
                                    height: 125
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: words,
                                    alt: "Description of Image",
                                    width: 150,
                                    height: 125
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_reactstrap_.Col, {
                        md: {
                            size: 4,
                            offset: 1
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/donate",
                                children: /*#__PURE__*/ jsx_runtime.jsx(external_reactstrap_.Button, {
                                    style: buttonStyle,
                                    color: "success",
                                    size: "lg",
                                    children: "Donate Now"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(external_reactstrap_.Button, {
                                style: buttonStyle2,
                                size: "lg",
                                children: "Join Newsletter"
                            }),
                            " "
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(external_reactstrap_.Navbar, {
                style: navStyles,
                light: true,
                expand: "md",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_reactstrap_.Col, {
                    md: {
                        size: 12,
                        offset: 3
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(external_reactstrap_.NavbarToggler, {
                            onClick: toggle
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(external_reactstrap_.Collapse, {
                            isOpen: isOpen,
                            navbar: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_reactstrap_.Nav, {
                                className: "ml-auto",
                                navbar: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(external_reactstrap_.NavItem, {
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            style: navLinks,
                                            href: "/about/",
                                            children: "About"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(external_reactstrap_.NavItem, {
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            style: navLinks,
                                            href: "/empower/",
                                            children: "Empowering Families"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(external_reactstrap_.NavItem, {
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            style: navLinks,
                                            href: "/involved/",
                                            children: "Get Involved"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(external_reactstrap_.NavItem, {
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            style: navLinks,
                                            href: "/programs/",
                                            children: "Programs"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const components_Header = (Header);


/***/ })

};
;