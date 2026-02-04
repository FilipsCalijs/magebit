/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var emailInput = document.getElementById('reg-email');
  var passwordInput = document.getElementById('reg-password');
  var confirmInput = document.getElementById('reg-password-confirm');
  var firstInput = document.getElementById('firstname');
  var lastInput = document.getElementById('lastname');
  var emailError = document.getElementById('error-email');
  var passwordError = document.getElementById('error-password');
  var confirmError = document.getElementById('error-password-confirm');
  var firstError = document.getElementById('error-firstname');
  var lastError = document.getElementById('error-lastname');
  var regFormMessage = document.createElement('div');
  regFormMessage.className = 'text-red-500 text-sm mt-2';
  regFormMessage.id = 'form-message';
  var regForm = document.getElementById('customer-register-form');
  if (regForm) regForm.appendChild(regFormMessage);
  function validateEmail() {
    var value = emailInput.value.trim();
    var message = '';
    if (!value) message = 'Email address is required';else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = 'Please provide a valid e-mail address';
    emailError.textContent = message;
    return message === '';
  }
  function validatePassword() {
    var value = passwordInput.value.trim();
    var message = '';
    if (!value) message = 'Password is required';else if (value.length < 8) message = 'The password must be at least 8 characters.';else if (!/[A-Za-z]/.test(value)) message = 'The password must contain at least one letter.';else if (!/\d/.test(value)) message = 'The password must contain at least one number.';
    passwordError.textContent = message;
    return message === '';
  }
  function validateConfirm() {
    var password = passwordInput.value;
    var confirm = confirmInput.value;
    var message = '';
    if (!confirm) message = 'Please confirm your password';else if (password !== confirm) message = 'This field value must be the same as "Password".';
    confirmError.textContent = message;
    return message === '';
  }
  function validateFirstName() {
    var value = firstInput.value.trim();
    var message = value ? '' : 'First name is required';
    firstError.textContent = message;
    return message === '';
  }
  function validateLastName() {
    var value = lastInput.value.trim();
    var message = value ? '' : 'Last name is required';
    lastError.textContent = message;
    return message === '';
  }
  function validateAll() {
    var emailValid = validateEmail();
    var passwordValid = validatePassword();
    var confirmValid = validateConfirm();
    var firstValid = validateFirstName();
    var lastValid = validateLastName();
    return emailValid && passwordValid && confirmValid && firstValid && lastValid;
  }
  emailInput && emailInput.addEventListener('blur', validateEmail);
  passwordInput && passwordInput.addEventListener('blur', validatePassword);
  confirmInput && confirmInput.addEventListener('blur', validateConfirm);
  firstInput && firstInput.addEventListener('blur', validateFirstName);
  lastInput && lastInput.addEventListener('blur', validateLastName);
  regForm && regForm.addEventListener('submit', function (e) {
    regFormMessage.textContent = '';
    var isValid = validateAll();
    if (!isValid) {
      e.preventDefault();
      regFormMessage.textContent = 'Please fix the errors above before continuing';
    }
  });

  // Логин
  var loginEmail = document.getElementById('email');
  var loginPass = document.getElementById('pass');
  var loginForm = loginEmail ? loginEmail.closest('form') : null;
  var loginFormMessage = document.createElement('div');
  loginFormMessage.className = 'text-red-500 text-sm mt-2';
  loginFormMessage.id = 'login-form-message';
  if (loginForm) loginForm.appendChild(loginFormMessage);
  function validateLoginEmail() {
    var value = loginEmail.value.trim();
    var message = '';
    if (!value) message = 'Email address is required';else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = 'Please provide a valid e-mail address';
    return message;
  }
  function validateLoginPassword() {
    var value = loginPass.value.trim();
    var message = '';
    if (!value) message = 'Password is required';
    return message;
  }
  loginForm && loginForm.addEventListener('submit', function (e) {
    var emailMsg = validateLoginEmail();
    var passMsg = validateLoginPassword();
    if (emailMsg || passMsg) {
      e.preventDefault();
      loginFormMessage.textContent = emailMsg || passMsg;
    } else {
      loginFormMessage.textContent = '';
    }
  });

  // Show/Hide Password
  var passwordFields = document.querySelectorAll('input[type="password"]');
  passwordFields.forEach(function (passwordField) {
    var toggleIcon = passwordField.parentElement.querySelector('[aria-label="Show Password"]');
    if (!toggleIcon) return;
    toggleIcon.addEventListener('click', function () {
      var type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordField.setAttribute('type', type);
      var svg = toggleIcon.querySelector('svg');
      if (svg) {
        if (type === 'text') svg.setAttribute('fill', '#1f2937');else svg.setAttribute('fill', 'currentColor');
      }
    });
  });
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;