(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n  height: 80px;\n}\n\n.App-header {\n  background-color: #222;\n  height: 150px;\n  padding: 20px;\n  color: white;\n}\n\n.App-intro {\n  font-size: large;\n}\n\n@-webkit-keyframes App-logo-spin {\n  from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@keyframes App-logo-spin {\n  from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/mypage.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/mypage.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  #sidebar {\n            padding-left: 10px;\n        }\n        #btn {\n            padding: 0px;\n            margin-right: 10px;\n        }\n        .main {\n            margin: 0px;\n            padding: 0px;\n        }\n        .row {\n            width: 100%;\n            padding-top: 10px;\n        }\n        .articles {\n            padding: 10px;\n        }\n        .sidebar-head {\n            margin-top: 20px;\n        }", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*#!/usr/bin/env python\n// #-----------------------------------------------------------------------\n// # index.css\n// # Author: Olivia Zhang, Zoë Barnswell, Lyra Katzman \n// #-----------------------------------------------------------------------\n*/\n #sidebar {\n            padding-left: 10px;\n        }\n#btn {\n    padding: 0px;\n    margin-right: 10px;\n}\n.main {\n    margin: 0px;\n    padding: 0px;\n}\n.row {\n    width: 100%;\n    padding-top: 10px;\n}\n.articles {\n    padding: 10px;\n}\n.sidebar-head {\n    margin-top: 20px;\n}\n\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\na{\n\tdisplay: block;\n    height: 100%;\n    width: 100%;\n    text-decoration: none;\n}\n\na.headerLink{\n\tdisplay: inline;\n    \n}\n\ndiv.box:hover {\n    cursor: hand;\n    cursor: pointer;\n    opacity: .9;\n}\n/*\n.container {\n\tborder-color: blue;\n\tborder-style: dotted;\n\tbackground-color: white;\n\topacity: .7;\n\tcolor: #323299;\n\talign-self: center;\n\talign-content: center;\n\talign-items: center;\n\theight: 350px;\n}\n*/\n\na.divLink {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    text-decoration: none;\n    /* Makes sure the link doesn't get underlined */\n    z-index: 10;\n    /* raises anchor tag above everything else in div */\n    background-color: white;\n    /*workaround to make clickable in IE */\n    opacity: 0;\n    /*workaround to make clickable in IE */\n    filter: alpha(opacity=0);\n    /*workaround to make clickable in IE */\n}\n\n/**/\n\n\n\n\t/*width:500px;\n}\n*/\n/*.container{\n    width:200px;\n    height:200px;\n    background-color:black;\n    color:white;\n    /*Important:\n    position:relative;\n}*/\n\n/*Important:*/\n/*.link-spanner{\n  position:absolute; \n  width:100%;\n  top:0;\n  left: 0;\n  z-index: 1;\n  height:100px;\n   edit: fixes overlap error in IE7/8, \n     make sure you have an empty gif \n  background-image: url('empty.gif');\n}   */\n\n/*.app_container {\n\t\n\ttext-align: center;\n\talign-self: center;\n\tbackground-color: #CCCCFF;\n\theight:100%;\n}*/\n\n.preview_img{\n\theight:50px;\n\twidth:400px;\n\talign-self: right;\n}\n\nimg{\n\theight:250px;\n\twidth:250px;\n\talign-items: center;\n\talign-self: center;\n\n\tposition:relative; \n\tleft:-50px;\n\ttop:-50px;\n\n\n}\n\n.article_input {\n\theight:100px;\n\twidth:50%;\n\tfont-size:16px;\n}\n\ninput[type=button] {\n\theight:30px;\n\twidth:10%;\n\tfont-size:12px;\n\tbackground-color: #FFC0CB;\n}\n\ninput[type=submit] {\n\theight:30px;\n\twidth:10%;\n\tfont-size:16px;\n\tbackground-color: white;\n}\n\n\nheader {\n\talign-content: center;\n\ttext-align: center;\n\talign-self: center;\n\tcolor: #0B3861;\n\tfont-size:24px;\n\tbackground-color: white;\n\theight:200px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var components_Login_LoginContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Login/LoginContainer */ "./src/components/Login/LoginContainer.js");
/* harmony import */ var components_Logout_LogoutContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Logout/LogoutContainer */ "./src/components/Logout/LogoutContainer.js");
/* harmony import */ var components_Protected_ProtectedContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Protected/ProtectedContainer */ "./src/components/Protected/ProtectedContainer.js");
/* harmony import */ var components_PageContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/PageContainer */ "./src/components/PageContainer.js");
/* harmony import */ var components_Home_HomeContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Home/HomeContainer */ "./src/components/Home/HomeContainer.js");
/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Header */ "./src/components/Header.js");
/* harmony import */ var components_ArticleAdd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/ArticleAdd */ "./src/components/ArticleAdd.js");
/* harmony import */ var components_Article__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Article */ "./src/components/Article.js");
/* harmony import */ var components_LoadingView__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/LoadingView */ "./src/components/LoadingView.js");
/* harmony import */ var actions_appActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! actions/appActions */ "./src/actions/appActions.js");
/* harmony import */ var App_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! App.css */ "./src/App.css");
/* harmony import */ var App_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(App_css__WEBPACK_IMPORTED_MODULE_18__);





var _jsxFileName = "/Users/Olivia/School/noteable/client/src/App.js";
// #-----------------------------------------------------------------------
// # app.js
// # Author: Olivia Zhang, Zoë Barnswell, Lyra Katzman 
// #-----------------------------------------------------------------------















var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component);

  function App() {
    Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.loadUser();
    }
  }, {
    key: "render",
    value: function render() {
      var loadingAuth = this.props.loadingAuth;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        class: "loader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), !loadingAuth && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/",
        component: components_Login_LoginContainer__WEBPACK_IMPORTED_MODULE_8__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/login",
        component: components_Login_LoginContainer__WEBPACK_IMPORTED_MODULE_8__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/mypage",
        component: components_PageContainer__WEBPACK_IMPORTED_MODULE_11__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/quickadd",
        component: components_ArticleAdd__WEBPACK_IMPORTED_MODULE_14__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/logout",
        component: components_Logout_LogoutContainer__WEBPACK_IMPORTED_MODULE_9__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/protected",
        component: components_Protected_ProtectedContainer__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_LoadingView__WEBPACK_IMPORTED_MODULE_16__["default"], {
        currentlySending: loadingAuth,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loadingAuth: state.loadingAuth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadUser: function loadUser() {
      return dispatch(Object(actions_appActions__WEBPACK_IMPORTED_MODULE_17__["loadMe"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./src/actions/appActions.js":
/*!***********************************!*\
  !*** ./src/actions/appActions.js ***!
  \***********************************/
/*! exports provided: login, loadData, loadMe, logout, setErrorMessage, changeForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadData", function() { return loadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMe", function() { return loadMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setErrorMessage", function() { return setErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeForm", function() { return changeForm; });
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants_AppConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/AppConstants */ "./src/constants/AppConstants.js");


var login = function login(username, password) {
  return function (dispatch) {
    dispatch(sendingRequest(true));
    dispatch(setErrorMessage(''));
    fetch('/api/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(function (res) {
      if (res.ok) return res.json();else throw new Error(res.statusText);
    }).then(function (data) {
      dispatch(sendingRequest(false));
      dispatch(setAuthState(true));
    }).catch(function (error) {
      dispatch(sendingRequest(false));
      dispatch(setErrorMessage('Login failed'));
    });
  };
};
var loadData = function loadData(path, name) {
  return function (dispatch) {
    dispatch(setData(Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, '')));
    dispatch(sendingRequest(true));
    dispatch(setErrorMessage(''));
    api("/api".concat(path)).then(function (data) {
      dispatch(sendingRequest(false));
      dispatch(setData(Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, data.message)));
    }).catch(function (error) {
      dispatch(sendingRequest(false));
      dispatch(setErrorMessage('Error loading data'));

      if (error.message === '401') {
        dispatch(setAuthState(false));
      }
    });
  };
};
var loadMe = function loadMe() {
  return function (dispatch) {
    dispatch(loadingAuth(true));
    dispatch(setErrorMessage(''));
    api('/api/me').then(function (data) {
      dispatch(loadingAuth(false));
      dispatch(setAuthState(data.isLoggedIn));
    }).catch(function (error) {
      dispatch(loadingAuth(false));
    });
  };
};
var logout = function logout() {
  return function (dispatch) {
    dispatch(sendingRequest(true));
    dispatch(setErrorMessage(''));
    api('/api/logout').then(function (data) {
      dispatch(sendingRequest(false));
      dispatch(setAuthState(data.isLoggedIn));
    }).catch(function (error) {
      dispatch(sendingRequest(false));
      dispatch(setErrorMessage('Error logging out'));
    });
  };
};
var setErrorMessage = function setErrorMessage(message) {
  return {
    type: _constants_AppConstants__WEBPACK_IMPORTED_MODULE_1__["SET_ERROR_MESSAGE"],
    message: message
  };
};
var changeForm = function changeForm(newState) {
  return {
    type: _constants_AppConstants__WEBPACK_IMPORTED_MODULE_1__["CHANGE_FORM"],
    newState: newState
  };
};

var setAuthState = function setAuthState(newState) {
  return {
    type: _constants_AppConstants__WEBPACK_IMPORTED_MODULE_1__["SET_AUTH"],
    newState: newState
  };
};

var sendingRequest = function sendingRequest(sending) {
  return {
    type: _constants_AppConstants__WEBPACK_IMPORTED_MODULE_1__["SENDING_REQUEST"],
    sending: sending
  };
};

var loadingAuth = function loadingAuth(sending) {
  return {
    type: _constants_AppConstants__WEBPACK_IMPORTED_MODULE_1__["LOADING_AUTH"],
    sending: sending
  };
};

var setData = function setData(data) {
  return {
    type: _constants_AppConstants__WEBPACK_IMPORTED_MODULE_1__["SET_DATA"],
    data: data
  };
};

var api = function api(path) {
  return fetch(path, {
    credentials: 'same-origin'
  }).then(function (res) {
    if (res.ok) return res.json();else throw new Error(res.status);
  });
};

/***/ }),

/***/ "./src/components/Article.js":
/*!***********************************!*\
  !*** ./src/components/Article.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var actions_appActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! actions/appActions */ "./src/actions/appActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_lib_Panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/lib/Panel */ "./node_modules/react-bootstrap/lib/Panel.js");
/* harmony import */ var react_bootstrap_lib_Panel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Panel__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/lib/Button */ "./node_modules/react-bootstrap/lib/Button.js");
/* harmony import */ var react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/Users/Olivia/School/noteable/client/src/components/Article.js";
// ---------------------------------------
// Component to display one article
// Written in react native.js 
//
// Team Noteable -  Olivia, Zoe, and Lyra
//----------------------------------------










var Article =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Article, _React$Component);

  function Article() {
    Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Article);

    return Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Article).call(this));
  }

  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Article, [{
    key: "render",
    value: function render() {
      var _this = this;

      var handleDelete = function handleDelete(event) {
        event.preventDefault();
        var r = window.confirm('Are you sure you want to delete this article from your page?');

        if (r == true) {
          _this.serverRequest = axios__WEBPACK_IMPORTED_MODULE_9___default.a.post('/api/deletearticle', {
            article_url: _this.props.link
          }).then(function (res) {
            if (res.data) {
              console.log(res.data);
              console.log('delete successful');
            }
          });
          window.location.reload();
        } else {
          console.log('dsafa');
          return;
        }
      };

      var Tag_1 = "food";
      var Tag_2 = "sports";
      var Tag_3 = "funny";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Panel__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Panel__WEBPACK_IMPORTED_MODULE_10___default.a.Heading, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Panel__WEBPACK_IMPORTED_MODULE_10___default.a.Title, {
        componentClass: "h3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, this.props.title, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: handleDelete,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "X"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: this.props.link,
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Panel__WEBPACK_IMPORTED_MODULE_10___default.a.Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "link-spanner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), this.props.descrip, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, " ", this.props.sitename, " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: this.props.image,
        className: "img-responsive center-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, Tag_1), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, Tag_2), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, Tag_3))))));
    }
  }]);

  return Article;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleChange: function handleChange(values) {
      return dispatch(Object(actions_appActions__WEBPACK_IMPORTED_MODULE_8__["changeForm"])(values));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Article));

/***/ }),

/***/ "./src/components/ArticleAdd.js":
/*!**************************************!*\
  !*** ./src/components/ArticleAdd.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var actions_appActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! actions/appActions */ "./src/actions/appActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_lib_Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/lib/Nav */ "./node_modules/react-bootstrap/lib/Nav.js");
/* harmony import */ var react_bootstrap_lib_Nav__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Nav__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_lib_Navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/lib/Navbar */ "./node_modules/react-bootstrap/lib/Navbar.js");
/* harmony import */ var react_bootstrap_lib_Navbar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Navbar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_lib_NavDropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/lib/NavDropdown */ "./node_modules/react-bootstrap/lib/NavDropdown.js");
/* harmony import */ var react_bootstrap_lib_NavDropdown__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_NavDropdown__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_bootstrap_lib_MenuItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/lib/MenuItem */ "./node_modules/react-bootstrap/lib/MenuItem.js");
/* harmony import */ var react_bootstrap_lib_MenuItem__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_MenuItem__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_bootstrap_lib_FormGroup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap/lib/FormGroup */ "./node_modules/react-bootstrap/lib/FormGroup.js");
/* harmony import */ var react_bootstrap_lib_FormGroup__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_FormGroup__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_bootstrap_lib_FormControl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap/lib/FormControl */ "./node_modules/react-bootstrap/lib/FormControl.js");
/* harmony import */ var react_bootstrap_lib_FormControl__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_FormControl__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap/lib/NavItem */ "./node_modules/react-bootstrap/lib/NavItem.js");
/* harmony import */ var react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_bootstrap_lib_Row__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap/lib/Row */ "./node_modules/react-bootstrap/lib/Row.js");
/* harmony import */ var react_bootstrap_lib_Row__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Row__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_bootstrap_lib_Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-bootstrap/lib/Grid */ "./node_modules/react-bootstrap/lib/Grid.js");
/* harmony import */ var react_bootstrap_lib_Grid__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Grid__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_bootstrap_lib_Col__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-bootstrap/lib/Col */ "./node_modules/react-bootstrap/lib/Col.js");
/* harmony import */ var react_bootstrap_lib_Col__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Col__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_bootstrap_lib_Glyphicon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-bootstrap/lib/Glyphicon */ "./node_modules/react-bootstrap/lib/Glyphicon.js");
/* harmony import */ var react_bootstrap_lib_Glyphicon__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Glyphicon__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-bootstrap/lib/Button */ "./node_modules/react-bootstrap/lib/Button.js");
/* harmony import */ var react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_bootstrap_lib_ButtonToolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-bootstrap/lib/ButtonToolbar */ "./node_modules/react-bootstrap/lib/ButtonToolbar.js");
/* harmony import */ var react_bootstrap_lib_ButtonToolbar__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_ButtonToolbar__WEBPACK_IMPORTED_MODULE_23__);






var _jsxFileName = "/Users/Olivia/School/noteable/client/src/components/ArticleAdd.js";
// ---------------------------------------
// Component housing URL submission form
// Written in react native.js 
//
// Team Noteable -  Olivia, Zoe, and Lyra
//----------------------------------------



















var ArticleAdd =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ArticleAdd, _React$Component);

  function ArticleAdd() {
    Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ArticleAdd);

    return Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ArticleAdd).apply(this, arguments));
  }

  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ArticleAdd, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    }
  }, {
    key: "tag_article",
    value: function tag_article(tag_name) {
      alert(tag_name);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var status = 'Enter Article URL';
      var labelname1 = "Eats";
      var labelname2 = "Tech";
      var labelname3 = "Wow";

      var submitArticle = function submitArticle(event) {
        event.preventDefault();
        alert('Submitted ' + _this.state.article_url);
        axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('/api/addarticle', {
          article_url: _this.state.article_url
        }).then(function (res) {
          console.log("Received response: ", res.data);
        });

        _this.props.history.push('/mypage');
      };

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Grid__WEBPACK_IMPORTED_MODULE_19___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Row__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Col__WEBPACK_IMPORTED_MODULE_20___default.a, {
        xs: 4,
        md: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Tags"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Nav__WEBPACK_IMPORTED_MODULE_11___default.a, {
        stacked: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
        eventKey: 2,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Food", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Glyphicon__WEBPACK_IMPORTED_MODULE_21___default.a, {
        glyph: "star",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
        eventKey: 2,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Photography"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
        eventKey: 2,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Travel"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
        eventKey: 2,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Funny")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Time"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Nav__WEBPACK_IMPORTED_MODULE_11___default.a, {
        stacked: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
        eventKey: 2,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "All Time"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
        eventKey: 2,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Last Month"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
        eventKey: 2,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Last Week"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
        eventKey: 2,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Today"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, " Noteable "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, " ", status, " "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onSubmit: submitArticle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        className: "article_input",
        name: "article_url",
        ref: "article_add_place",
        type: "text",
        onChange: function onChange(e) {
          return _this.handleChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_ButtonToolbar__WEBPACK_IMPORTED_MODULE_23___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_22___default.a, {
        bsStyle: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, " ", labelname1), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_22___default.a, {
        bsStyle: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, " ", labelname2), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_22___default.a, {
        bsStyle: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, " ", labelname3), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_22___default.a, {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, " Submit"))))));
    }
  }]);

  return ArticleAdd;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleChange: function handleChange(values) {
      return dispatch(Object(actions_appActions__WEBPACK_IMPORTED_MODULE_9__["changeForm"])(values));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(ArticleAdd));

/***/ }),

/***/ "./src/components/ErrorView.js":
/*!*************************************!*\
  !*** ./src/components/ErrorView.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Olivia/School/noteable/client/src/components/ErrorView.js";


var ErrorView = function ErrorView(props) {
  return props.message ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, " ", props.message, " ") : null;
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorView);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/lib/Button */ "./node_modules/react-bootstrap/lib/Button.js");
/* harmony import */ var react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_lib_Nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/lib/Nav */ "./node_modules/react-bootstrap/lib/Nav.js");
/* harmony import */ var react_bootstrap_lib_Nav__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Nav__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_lib_Navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/lib/Navbar */ "./node_modules/react-bootstrap/lib/Navbar.js");
/* harmony import */ var react_bootstrap_lib_Navbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Navbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_lib_NavDropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/lib/NavDropdown */ "./node_modules/react-bootstrap/lib/NavDropdown.js");
/* harmony import */ var react_bootstrap_lib_NavDropdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_NavDropdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_lib_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/lib/MenuItem */ "./node_modules/react-bootstrap/lib/MenuItem.js");
/* harmony import */ var react_bootstrap_lib_MenuItem__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_MenuItem__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_bootstrap_lib_FormGroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/lib/FormGroup */ "./node_modules/react-bootstrap/lib/FormGroup.js");
/* harmony import */ var react_bootstrap_lib_FormGroup__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_FormGroup__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_bootstrap_lib_FormControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap/lib/FormControl */ "./node_modules/react-bootstrap/lib/FormControl.js");
/* harmony import */ var react_bootstrap_lib_FormControl__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_FormControl__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap/lib/NavItem */ "./node_modules/react-bootstrap/lib/NavItem.js");
/* harmony import */ var react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mypage_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mypage.css */ "./src/components/mypage.css");
/* harmony import */ var _mypage_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mypage_css__WEBPACK_IMPORTED_MODULE_17__);






var _jsxFileName = "/Users/Olivia/School/noteable/client/src/components/Header.js";













var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header() {
    Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Header);

    return Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Header).apply(this, arguments));
  }

  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Header, [{
    key: "handleChange",
    value: function handleChange(e) {
      alert(e.target.name);
      alert(e.target.value);
      this.setState(Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var loggedIn = this.props.loggedIn;

      var searchUser = function searchUser(event) {
        event.preventDefault();
        alert(_this.state.searchTerm);
      };

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Navbar__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Navbar__WEBPACK_IMPORTED_MODULE_11___default.a.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Navbar__WEBPACK_IMPORTED_MODULE_11___default.a.Brand, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Noteable")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Navbar__WEBPACK_IMPORTED_MODULE_11___default.a.Toggle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Nav__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
        eventKey: 2,
        href: "/quickadd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Add Article"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
        eventKey: 2,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Groups"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
        eventKey: 2,
        href: "/mypage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "My Page"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Navbar__WEBPACK_IMPORTED_MODULE_11___default.a.Form, {
        pullRight: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_FormGroup__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_FormControl__WEBPACK_IMPORTED_MODULE_15___default.a, {
        type: "text",
        placeholder: "Search",
        name: "searchTerm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "submit",
        onClick: function onClick(e) {
          return _this.handleChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Submit")))), ";") // <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      //   <MenuItem eventKey={3.1}>Action</MenuItem>
      //   <MenuItem eventKey={3.2}>Another action</MenuItem>
      //   <MenuItem eventKey={3.3}>Something else here</MenuItem>
      //   <MenuItem divider />
      //   <MenuItem eventKey={3.4}>Separated link</MenuItem>
      // </NavDropdown>
      //   <nav class="navbar navbar-expand-lg navbar-light bg-light">
      //   <a class="navbar-brand" href="#">Navbar</a>
      //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      //     <span class="navbar-toggler-icon"></span>
      //   </button>
      //   <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      //     <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      //       <li class="nav-item active">
      //         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      //       </li>
      //       <li class="nav-item">
      //          <Link to="/login" className="nav-link">| Login |</Link>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link disabled" href="/quickadd">Disabled</a>
      //       </li>
      //     </ul>
      //     <button type="button" id="navbutton" class="btn btn-primary navbar-btn">
      //         +
      //     </button>
      //     <form class="form-inline my-2 my-lg-0">
      //       <input class="form-control mr-sm-2" type="search" placeholder="Search"></input>
      //       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      //     </form>
      //   </div>
      // </nav>
      // </header>
      ;
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(Header));

/***/ }),

/***/ "./src/components/Home/HomeContainer.js":
/*!**********************************************!*\
  !*** ./src/components/Home/HomeContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Home_HomeView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Home/HomeView */ "./src/components/Home/HomeView.js");
/* harmony import */ var actions_appActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! actions/appActions */ "./src/actions/appActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");





var _jsxFileName = "/Users/Olivia/School/noteable/client/src/components/Home/HomeContainer.js";






var HomeContainer =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HomeContainer, _React$Component);

  function HomeContainer() {
    Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeContainer);

    return Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HomeContainer).apply(this, arguments));
  }

  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.loadData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          currentlySending = _this$props.currentlySending,
          data = _this$props.data,
          errorMessage = _this$props.errorMessage;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Home_HomeView__WEBPACK_IMPORTED_MODULE_6__["default"], {
        currentlySending: currentlySending,
        data: data,
        errorMessage: errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      });
    }
  }]);

  return HomeContainer;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.data.home,
    currentlySending: state.currentlySending,
    errorMessage: state.errorMessage
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadData: function loadData() {
      return dispatch(Object(actions_appActions__WEBPACK_IMPORTED_MODULE_7__["loadData"])('/', 'home'));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(HomeContainer)));

/***/ }),

/***/ "./src/components/Home/HomeView.js":
/*!*****************************************!*\
  !*** ./src/components/Home/HomeView.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ErrorView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ErrorView */ "./src/components/ErrorView.js");
/* harmony import */ var components_LoadingView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/LoadingView */ "./src/components/LoadingView.js");
var _jsxFileName = "/Users/Olivia/School/noteable/client/src/components/Home/HomeView.js";




var HomeView = function HomeView(_ref) {
  var data = _ref.data,
      currentlySending = _ref.currentlySending,
      errorMessage = _ref.errorMessage;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Welcome to this amazing site!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, data), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingView__WEBPACK_IMPORTED_MODULE_2__["default"], {
    currentlySending: currentlySending,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ErrorView__WEBPACK_IMPORTED_MODULE_1__["default"], {
    message: errorMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeView);

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var actions_appActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! actions/appActions */ "./src/actions/appActions.js");







var _jsxFileName = "/Users/Olivia/School/noteable/client/src/components/Input.js";




var Input =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Input, _React$Component);

  function Input(props) {
    var _this;

    Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Input);

    _this = Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Input).call(this, props));
    _this.changeInput = _this.changeInput.bind(Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)));
    return _this;
  }

  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Input, [{
    key: "changeInput",
    value: function changeInput(event) {
      var value = event.target.value;
      var name = event.target.name;
      this.props.handleChange(Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          type = _this$props.type,
          name = _this$props.name,
          model = _this$props.model,
          formState = _this$props.formState;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, label, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: type,
        name: name,
        value: formState[model],
        onChange: this.changeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }));
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    formState: state.formState
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleChange: function handleChange(values) {
      return dispatch(Object(actions_appActions__WEBPACK_IMPORTED_MODULE_9__["changeForm"])(values));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Input));

/***/ }),

/***/ "./src/components/LoadingView.js":
/*!***************************************!*\
  !*** ./src/components/LoadingView.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Olivia/School/noteable/client/src/components/LoadingView.js";


var LoadingView = function LoadingView(props) {
  return props.currentlySending ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, " Loading... ") : null;
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingView);

/***/ }),

/***/ "./src/components/Login/LoginContainer.js":
/*!************************************************!*\
  !*** ./src/components/Login/LoginContainer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var components_Login_LoginForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Login/LoginForm */ "./src/components/Login/LoginForm.js");
/* harmony import */ var actions_appActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! actions/appActions */ "./src/actions/appActions.js");





var _jsxFileName = "/Users/Olivia/School/noteable/client/src/components/Login/LoginContainer.js";






var LoginContainer =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LoginContainer, _React$Component);

  function LoginContainer() {
    Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginContainer);

    return Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LoginContainer).apply(this, arguments));
  }

  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginContainer, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.clearErrors();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          loggedIn = _this$props.loggedIn,
          handleSubmit = _this$props.handleSubmit,
          currentlySending = _this$props.currentlySending,
          formState = _this$props.formState,
          errorMessage = _this$props.errorMessage;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, loggedIn ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Redirect"], {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Login_LoginForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        handleSubmit: handleSubmit,
        currentlySending: currentlySending,
        formState: formState,
        errorMessage: errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }));
    }
  }]);

  return LoginContainer;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    currentlySending: state.currentlySending,
    formState: state.formState,
    errorMessage: state.errorMessage
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: function handleSubmit(username, password) {
      return dispatch(Object(actions_appActions__WEBPACK_IMPORTED_MODULE_9__["login"])(username, password));
    },
    clearErrors: function clearErrors() {
      return dispatch(Object(actions_appActions__WEBPACK_IMPORTED_MODULE_9__["setErrorMessage"])(''));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(LoginContainer)));

/***/ }),

/***/ "./src/components/Login/LoginForm.js":
/*!*******************************************!*\
  !*** ./src/components/Login/LoginForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ErrorView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ErrorView */ "./src/components/ErrorView.js");
/* harmony import */ var components_LoadingView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/LoadingView */ "./src/components/LoadingView.js");
/* harmony import */ var components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Input */ "./src/components/Input.js");
var _jsxFileName = "/Users/Olivia/School/noteable/client/src/components/Login/LoginForm.js";





var LoginForm = function LoginForm(props) {
  var formState = props.formState,
      handleSubmit = props.handleSubmit,
      errorMessage = props.errorMessage,
      currentlySending = props.currentlySending;

  var submitForm = function submitForm(event) {
    event.preventDefault();
    handleSubmit(formState.email, formState.password);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: submitForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "text",
    name: "email",
    model: "email",
    label: "Email:",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "password",
    name: "password",
    model: "password",
    label: "Password:",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "submit",
    value: "Submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingView__WEBPACK_IMPORTED_MODULE_2__["default"], {
    currentlySending: currentlySending,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ErrorView__WEBPACK_IMPORTED_MODULE_1__["default"], {
    message: errorMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./src/components/Logout/LogoutContainer.js":
/*!**************************************************!*\
  !*** ./src/components/Logout/LogoutContainer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var components_ErrorView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/ErrorView */ "./src/components/ErrorView.js");
/* harmony import */ var components_LoadingView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/LoadingView */ "./src/components/LoadingView.js");
/* harmony import */ var actions_appActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/appActions */ "./src/actions/appActions.js");





var _jsxFileName = "/Users/Olivia/School/noteable/client/src/components/Logout/LogoutContainer.js";







var LogoutContainer =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LogoutContainer, _React$Component);

  function LogoutContainer() {
    Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LogoutContainer);

    return Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LogoutContainer).apply(this, arguments));
  }

  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LogoutContainer, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.loggedIn) {
        this.props.handleLogout();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          loggedIn = _this$props.loggedIn,
          currentlySending = _this$props.currentlySending,
          errorMessage = _this$props.errorMessage;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, !loggedIn && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Redirect"], {
        to: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_LoadingView__WEBPACK_IMPORTED_MODULE_9__["default"], {
        currentlySending: currentlySending,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_ErrorView__WEBPACK_IMPORTED_MODULE_8__["default"], {
        message: errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }));
    }
  }]);

  return LogoutContainer;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    currentlySending: state.currentlySending,
    errorMessage: state.errorMessage
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleLogout: function handleLogout() {
      return dispatch(Object(actions_appActions__WEBPACK_IMPORTED_MODULE_10__["logout"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(LogoutContainer)));

/***/ }),

/***/ "./src/components/PageContainer.js":
/*!*****************************************!*\
  !*** ./src/components/PageContainer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var components_Article__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Article */ "./src/components/Article.js");
/* harmony import */ var components_Login_LoginForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Login/LoginForm */ "./src/components/Login/LoginForm.js");
/* harmony import */ var actions_appActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! actions/appActions */ "./src/actions/appActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/lib/Button */ "./node_modules/react-bootstrap/lib/Button.js");
/* harmony import */ var react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Button__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_bootstrap_lib_Row__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/lib/Row */ "./node_modules/react-bootstrap/lib/Row.js");
/* harmony import */ var react_bootstrap_lib_Row__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Row__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_bootstrap_lib_Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap/lib/Grid */ "./node_modules/react-bootstrap/lib/Grid.js");
/* harmony import */ var react_bootstrap_lib_Grid__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Grid__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_bootstrap_lib_Col__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap/lib/Col */ "./node_modules/react-bootstrap/lib/Col.js");
/* harmony import */ var react_bootstrap_lib_Col__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Col__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap/lib/NavItem */ "./node_modules/react-bootstrap/lib/NavItem.js");
/* harmony import */ var react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_bootstrap_lib_Nav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap/lib/Nav */ "./node_modules/react-bootstrap/lib/Nav.js");
/* harmony import */ var react_bootstrap_lib_Nav__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Nav__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_bootstrap_lib_Glyphicon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-bootstrap/lib/Glyphicon */ "./node_modules/react-bootstrap/lib/Glyphicon.js");
/* harmony import */ var react_bootstrap_lib_Glyphicon__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_Glyphicon__WEBPACK_IMPORTED_MODULE_19__);






var _jsxFileName = "/Users/Olivia/School/noteable/client/src/components/PageContainer.js";
// ---------------------------------------
// Component rendered showing "My Page"
// Written in react native.js 
//
// Team Noteable -  Olivia, Zoe, and Lyra
//----------------------------------------















var PageContainer =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PageContainer, _React$Component);

  // 
  // Set some initial properties we want to 
  // access across functions
  // ---------------------------------------
  function PageContainer(props) {
    var _this;

    Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PageContainer);

    _this = Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PageContainer).call(this, props));
    _this.state = {
      'cleaned_article_names': [],
      'articles': [],
      'full_article_info': [],
      'article_components': []
    };
    _this._retrieved_articles = [];
    _this._ismounted = true; // Stores valid article URLs

    _this._article_urls = []; // Stores metadata of all valid article URLs 

    _this._full_article_info = []; // Stores the rendered Article components

    _this._ArticleComponents = [];
    _this._gotfulldata = false;
    return _this;
  } // Called right after component mounts
  // ---------------------------------------


  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PageContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          loggedIn = _this$props.loggedIn,
          handleSubmit = _this$props.handleSubmit,
          currentlySending = _this$props.currentlySending,
          formState = _this$props.formState,
          errorMessage = _this$props.errorMessage;
      this._ismounted = true;
      var article_names = [];
      var article = "";
      var cleaned_article_names = [];
      var full_info = [];
      var comp = [];
      console.log(this._ismounted); // {API} Load the articles from the database by calling getarticle

      if (typeof this._source != typeof undefined) {
        this._source.cancel('Operation canceled due to new request.');
      }

      this._source = axios__WEBPACK_IMPORTED_MODULE_12___default.a.CancelToken.source();
      this.serverRequest = axios__WEBPACK_IMPORTED_MODULE_12___default.a.get('/api/getarticles', {
        cancelToken: this._source.token
      }).then(function (res) {
        if (_this2._ismounted && res.data) {
          _this2._retrieved_articles = res.data.articles;
        }

        try {
          if (_this2._ismounted && _this2._retrieved_articles) {
            for (var i = 0; i < _this2._retrieved_articles.length; i++) {
              article = _this2._retrieved_articles[i];
              var defunct_urls = ["hellozoe!.com", "lol.com2", "cos333.com", "itsanewwebsiteurl.com", "dfafa.com", "articleURL", "articleURLs", "exampleartickeolivia.com"];

              if (defunct_urls.includes(article[6])) {
                continue;
              }

              _this2._article_urls.push(article[6]);
            }

            _this2.setState({
              "articles": _this2._article_urls
            });

            axios__WEBPACK_IMPORTED_MODULE_12___default.a.post('/api/getarticlesinfo', {
              'articles': JSON.stringify(_this2.state.articles)
            }).then(function (res) {
              if (_this2._ismounted && res.data) {
                _this2.setState({
                  'full_article_info': res.data.all_article_info
                });

                for (var article in _this2.state.full_article_info) {
                  var _React$createElement;

                  var article_info = _this2.state.full_article_info[article];
                  comp.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Article__WEBPACK_IMPORTED_MODULE_9__["default"], (_React$createElement = {
                    title: article,
                    link: article_info['url'],
                    descrip: article_info['descrip'],
                    image: article_info['image']
                  }, Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "title", article_info['title']), Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__source", {
                    fileName: _jsxFileName,
                    lineNumber: 101
                  }), Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__self", this), _React$createElement)));
                }

                _this2.setState({
                  'article_components': comp
                });

                document.getElementById("loader").remove();
              }
            });
          }
        } catch (err) {
          console.log("Error in loading articles from database", err);
        }
      });
      this.setState({
        art: comp
      });
    } // Keep track internally of mounted state
    // to avoid erros
    // ---------------------------------------

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._ismounted = false;
    } // Defines the HTML code atually returned and shown
    // in the component
    // ---------------------------------------    

  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Row__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Col__WEBPACK_IMPORTED_MODULE_16___default.a, {
        xs: 4,
        md: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Tags"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Nav__WEBPACK_IMPORTED_MODULE_18___default.a, {
        stacked: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
        eventKey: 2,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "Food", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Glyphicon__WEBPACK_IMPORTED_MODULE_19___default.a, {
        glyph: "star",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
        eventKey: 2,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Photography"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
        eventKey: 2,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Travel"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
        eventKey: 2,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Funny")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "Time"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Nav__WEBPACK_IMPORTED_MODULE_18___default.a, {
        stacked: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
        eventKey: 2,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "All Time"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
        eventKey: 2,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "Last Month"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
        eventKey: 2,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "Last Week"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_NavItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
        eventKey: 2,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "Today"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_lib_Col__WEBPACK_IMPORTED_MODULE_16___default.a, {
        xs: 6,
        md: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        id: "loader",
        src: "loading.gif",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }), this.state.article_components.map(function (article) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, article);
      })))), ";");
    }
  }]);

  return PageContainer;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    currentlySending: state.currentlySending,
    formState: state.formState,
    errorMessage: state.errorMessage
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: function handleSubmit(username, password) {
      return dispatch(Object(actions_appActions__WEBPACK_IMPORTED_MODULE_11__["login"])(username, password));
    },
    clearErrors: function clearErrors() {
      return dispatch(Object(actions_appActions__WEBPACK_IMPORTED_MODULE_11__["setErrorMessage"])(''));
    }
  };
}; // Make this component exportable to appear in other components


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(PageContainer));

/***/ }),

/***/ "./src/components/Protected/ProtectedContainer.js":
/*!********************************************************!*\
  !*** ./src/components/Protected/ProtectedContainer.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Protected_ProtectedView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Protected/ProtectedView */ "./src/components/Protected/ProtectedView.js");
/* harmony import */ var actions_appActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! actions/appActions */ "./src/actions/appActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");





var _jsxFileName = "/Users/Olivia/School/noteable/client/src/components/Protected/ProtectedContainer.js";






var ProtectedContainer =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProtectedContainer, _React$Component);

  function ProtectedContainer() {
    Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProtectedContainer);

    return Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProtectedContainer).apply(this, arguments));
  }

  Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProtectedContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.loadData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          currentlySending = _this$props.currentlySending,
          data = _this$props.data,
          errorMessage = _this$props.errorMessage;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Protected_ProtectedView__WEBPACK_IMPORTED_MODULE_6__["default"], {
        currentlySending: currentlySending,
        data: data,
        errorMessage: errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      });
    }
  }]);

  return ProtectedContainer;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.data.protected,
    currentlySending: state.currentlySending,
    errorMessage: state.errorMessage
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadData: function loadData() {
      return dispatch(Object(actions_appActions__WEBPACK_IMPORTED_MODULE_7__["loadData"])('/protected', 'protected'));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(ProtectedContainer)));

/***/ }),

/***/ "./src/components/Protected/ProtectedView.js":
/*!***************************************************!*\
  !*** ./src/components/Protected/ProtectedView.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ErrorView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ErrorView */ "./src/components/ErrorView.js");
/* harmony import */ var components_LoadingView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/LoadingView */ "./src/components/LoadingView.js");
var _jsxFileName = "/Users/Olivia/School/noteable/client/src/components/Protected/ProtectedView.js";




var ProtectedView = function ProtectedView(_ref) {
  var data = _ref.data,
      currentlySending = _ref.currentlySending,
      errorMessage = _ref.errorMessage;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "This is a protected page!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, data), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingView__WEBPACK_IMPORTED_MODULE_2__["default"], {
    currentlySending: currentlySending,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ErrorView__WEBPACK_IMPORTED_MODULE_1__["default"], {
    message: errorMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProtectedView);

/***/ }),

/***/ "./src/components/mypage.css":
/*!***********************************!*\
  !*** ./src/components/mypage.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./mypage.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/mypage.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./mypage.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/mypage.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./mypage.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/mypage.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/constants/AppConstants.js":
/*!***************************************!*\
  !*** ./src/constants/AppConstants.js ***!
  \***************************************/
/*! exports provided: CHANGE_FORM, SET_AUTH, SENDING_REQUEST, LOADING_AUTH, SET_ERROR_MESSAGE, SET_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_FORM", function() { return CHANGE_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUTH", function() { return SET_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SENDING_REQUEST", function() { return SENDING_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_AUTH", function() { return LOADING_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ERROR_MESSAGE", function() { return SET_ERROR_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DATA", function() { return SET_DATA; });
var CHANGE_FORM = 'CHANGE_FORM';
var SET_AUTH = 'SET_AUTH';
var SENDING_REQUEST = 'SENDING_REQUEST';
var LOADING_AUTH = 'LOADING_AUTH';
var SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
var SET_DATA = 'SET_DATA';

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/Olivia/School/noteable/client/src/index.js";
// ----------------------------------------------------------------------
//  index.js
//  Author: Olivia Zhang, Zoë Barnswell, Lyra Katzman 
// -----------------------------------------------------------------------








var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["homeReducer"], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"]));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "app_container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}))), document.getElementById('root'));

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: homeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeReducer", function() { return homeReducer; });
/* harmony import */ var _Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var constants_AppConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/AppConstants */ "./src/constants/AppConstants.js");


var initialState = {
  formState: {
    email: '',
    password: ''
  },
  currentlySending: false,
  loadingAuth: false,
  loggedIn: false,
  errorMessage: '',
  data: {
    home: '',
    protected: ''
  }
};
var homeReducer = function homeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants_AppConstants__WEBPACK_IMPORTED_MODULE_1__["CHANGE_FORM"]:
      return changeForm(state, action);

    case constants_AppConstants__WEBPACK_IMPORTED_MODULE_1__["SET_AUTH"]:
      return setAuth(state, action);

    case constants_AppConstants__WEBPACK_IMPORTED_MODULE_1__["SENDING_REQUEST"]:
      return sendingRequest(state, action);

    case constants_AppConstants__WEBPACK_IMPORTED_MODULE_1__["LOADING_AUTH"]:
      return loadingAuth(state, action);

    case constants_AppConstants__WEBPACK_IMPORTED_MODULE_1__["SET_ERROR_MESSAGE"]:
      return setErrorMessage(state, action);

    case constants_AppConstants__WEBPACK_IMPORTED_MODULE_1__["SET_DATA"]:
      return setData(state, action);

    default:
      return state;
  }
};

var changeForm = function changeForm(state, action) {
  return Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    formState: Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.formState, action.newState)
  });
};

var setAuth = function setAuth(state, action) {
  return Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    loggedIn: action.newState
  });
};

var sendingRequest = function sendingRequest(state, action) {
  return Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    currentlySending: action.sending
  });
};

var loadingAuth = function loadingAuth(state, action) {
  return Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    loadingAuth: action.sending
  });
};

var setErrorMessage = function setErrorMessage(state, action) {
  return Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    errorMessage: action.message
  });
};

var setData = function setData(state, action) {
  return Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    data: Object(_Users_Olivia_School_noteable_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.data, action.data)
  });
};

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Olivia/School/noteable/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/Olivia/School/noteable/client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map