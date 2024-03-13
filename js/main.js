/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 903:
/***/ (() => {

class Accordion {
  constructor(node, options) {
    let defaultOptions = {
      isOpen: () => {},
      isClose: () => {},
      speed: 300
    };
    this.options = Object.assign(defaultOptions, options);
    this.accordion = node;
    this.control = this.accordion.querySelector(".accordion__control");
    this.content = this.accordion.querySelector(".accordion__content");
    this.event();
  }
  event() {
    if (this.accordion) {
      this.accordion.addEventListener("click", e => {
        this.accordion.classList.toggle("open");
        if (this.accordion.classList.contains("open")) {
          this.open();
        } else {
          this.close();
        }
      });
    }
  }
  open() {
    this.accordion.style.setProperty("--accordion-time", `${this.options.speed / 1000}s`);
    this.accordion.classList.add("accordion-is-open");
    this.control.setAttribute("aria-expanded", true);
    this.content.setAttribute("aria-hidden", false);
    this.content.style.maxHeight = this.content.scrollHeight + "px";
    this.options.isOpen(this);
  }
  close() {
    this.accordion.classList.remove("accordion-is-open");
    this.control.setAttribute("aria-expanded", false);
    this.content.setAttribute("aria-hidden", true);
    this.content.style.maxHeight = null;
    this.options.isClose(this);
  }
}
const accordions = document.querySelectorAll(".integr__accordion");
accordions.forEach(accodionNode => {
  let accordion = new Accordion(accodionNode, {
    speed: 400
  });
});

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/js/_vars.js
/* harmony default export */ const _vars = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});
// EXTERNAL MODULE: ./src/js/components/accordion.js
var accordion = __webpack_require__(903);
;// CONCATENATED MODULE: ./src/js/_components.js

;// CONCATENATED MODULE: ./src/js/main.js




})();

/******/ })()
;