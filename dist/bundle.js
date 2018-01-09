/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_load_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_js__ = __webpack_require__(3);




Object(__WEBPACK_IMPORTED_MODULE_0__page_load_js__["a" /* pageLoad */])();

let mainButton = document.querySelector('#main');
mainButton.addEventListener('click', function(e){
  const content = document.querySelector("#content");
  content.innerHTML = "";
  Object(__WEBPACK_IMPORTED_MODULE_0__page_load_js__["a" /* pageLoad */])();
})

let menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', function(e){
  const content = document.querySelector("#content");
  content.innerHTML = "";
  Object(__WEBPACK_IMPORTED_MODULE_1__menu_js__["a" /* menuLoad */])();
})

let contactButton = document.querySelector('#contact');
contactButton.addEventListener('click', function(e){
  const content = document.querySelector("#content");
  content.innerHTML = "";
  Object(__WEBPACK_IMPORTED_MODULE_2__contacts_js__["a" /* contactLoad */])();
})


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pageLoad;
function pageLoad() {
  const content = document.querySelector('#content');
  let header = document.createElement('h1');
  let subtext = document.createElement('p');
  let image = document.createElement('img');
  header.textContent = "Welcome the Nice Food Spot";
  subtext.textContent = "We make food to eat!";
  image.src = "http://betheme.muffingroupsc.netdna-cdn.com/be/goodfood/wp-content/uploads/2016/06/home_goodfood_flatbox1.jpg";
  content.appendChild(header);
  content.appendChild(subtext);
  content.appendChild(image);
  console.log('page load!')
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = menuLoad;
function menuLoad() {

  class MenuItem {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }

  const content = document.querySelector('#content');

  const menuItems = [
    new MenuItem("fish", 39),
    new MenuItem("noodle", 45),
    new MenuItem("cake", 42),
    new MenuItem("snack", 10)
  ]

  let list = document.createElement('ul');

  menuItems.forEach(function(item){
    let listItem = document.createElement('li');
    listItem.textContent = `${item.name}.......$${item.price}.00`
    list.appendChild(listItem);
  })

  content.appendChild(list);
  console.log('menu')
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = contactLoad;
function contactLoad() {

  class Contact{
    constructor(name, phoneNumber) {
      this.name = name;
      this.phoneNumber = phoneNumber;
    }
  }

  const content = document.querySelector('#content');

  const contacts = [
    new Contact("dude", 394353544),
    new Contact("brian", 4534563544),
    new Contact("dingus", 424563564),
    new Contact("woybow", 5036214553)
  ]

  let list = document.createElement('ul');

  contacts.forEach(function(contact){
    let listItem = document.createElement('li');
    listItem.textContent = `${contact.name}.......$${contact.phoneNumber}.00`
    list.appendChild(listItem);
  })

  content.appendChild(list);
  console.log('contacts');
}


/***/ })
/******/ ]);