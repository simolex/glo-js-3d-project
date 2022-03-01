/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_serviceBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/serviceBlock */ \"./modules/serviceBlock.js\");\n/* harmony import */ var _modules_calculate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculate */ \"./modules/calculate.js\");\n/* harmony import */ var _modules_formValidate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/formValidate */ \"./modules/formValidate.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//import smoothScroll from \"./modules/smoothScroll\";\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"08 march 2022\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_serviceBlock__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_calculate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\r\nconst forms = {\r\n  constransTemplates: {\r\n    hasNotText: /[^а-яёА-ЯЁ \\-]/gi,\r\n    hasNotEmail: /[^\\w\\-\\@\\.\\!\\~\\*\\']/gi,\r\n    hasNotTelephone: /[^\\d\\(\\)\\-']/gi,\r\n  },\r\n  formList: [\r\n    {\r\n      formId: \"form1\",\r\n      formFields: [\r\n        {\r\n          fieldId: \"form1-name\",\r\n          fieldConstrians: [\"hasNotText\"],\r\n        },\r\n        {\r\n          fieldId: \"form1-email\",\r\n          fieldConstrians: [\"hasNotEmail\"],\r\n        },\r\n        {\r\n          fieldId: \"form1-phone\",\r\n          fieldConstrians: [\"hasNotTelephone\"],\r\n        },\r\n      ],\r\n    },\r\n    {\r\n      formId: \"form2\",\r\n      formFields: [\r\n        {\r\n          fieldId: \"form2-name\",\r\n          fieldConstrians: [\"hasNotText\"],\r\n        },\r\n        {\r\n          fieldId: \"form2-message\",\r\n          fieldConstrians: [\"hasNotText\"],\r\n        },\r\n        {\r\n          fieldId: \"form2-email\",\r\n          fieldConstrians: [\"hasNotEmail\"],\r\n        },\r\n        {\r\n          fieldId: \"form2-phone\",\r\n          fieldConstrians: [\"hasNotTelephone\"],\r\n        },\r\n      ],\r\n    },\r\n    {\r\n      formId: \"form3\",\r\n      formFields: [\r\n        {\r\n          fieldId: \"form3-name\",\r\n          fieldConstrians: [\"hasNotText\"],\r\n        },\r\n        {\r\n          fieldId: \"form3-email\",\r\n          fieldConstrians: [\"hasNotEmail\"],\r\n        },\r\n        {\r\n          fieldId: \"form3-phone\",\r\n          fieldConstrians: [\"hasNotTelephone\"],\r\n        },\r\n      ],\r\n    },\r\n  ],\r\n};\r\n(0,_modules_formValidate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(forms);\r\n\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__.slider)({\r\n  sliderClass: \"portfolio-content\",\r\n  itemSlideClass: \"portfolio-item\",\r\n  activeSlideClass: \"portfolio-item-active\",\r\n  dotsBlock: \"portfolio-dots\",\r\n  itemDotClass: \"dot\",\r\n  activeDotClass: \"dot-active\",\r\n  prevArrowClass: \"portfolio-btn prev\",\r\n  nextArrowClass: \"portfolio-btn next\",\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculate.js":
/*!******************************!*\
  !*** ./modules/calculate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculate = () => {\r\n  const calcItems = document.querySelectorAll(\".calc-item\");\r\n\r\n  calcItems.forEach((item) => {\r\n    if (!item.classList.contains(\"calc-type\")) {\r\n      item.addEventListener(\"input\", (e) => {\r\n        e.target.value = e.target.value.replace(/\\D+/gi, \"\");\r\n      });\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculate);\r\n\n\n//# sourceURL=webpack:///./modules/calculate.js?");

/***/ }),

/***/ "./modules/formValidate.js":
/*!*********************************!*\
  !*** ./modules/formValidate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formValidate = (forms) => {\r\n  const clearData = (regexp, value) => {\r\n    const repeatSpace = /( ){2,}/gi;\r\n    const repeatMinus = /(\\-){2,}/gi;\r\n    const edgeSpace = /(^[ \\-]+|[ \\-]+$)/gi;\r\n\r\n    value = value.replace(regexp, \"\");\r\n    value = value.replace(repeatSpace, (str, $1) => $1);\r\n    value = value.replace(repeatMinus, (str, $1) => $1);\r\n    value = value.replace(edgeSpace, \"\");\r\n    return value;\r\n  };\r\n\r\n  const upperFirstLitter = (value) => {\r\n    const firstLitter = /((^[а-яё])|((?<=[^а-яё])[а-яё]))/gi;\r\n    value = value.toLowerCase();\r\n    value = value.replace(firstLitter, (str, $1) => {\r\n      return ($1 + \"\").toUpperCase();\r\n    });\r\n    return value;\r\n  };\r\n\r\n  forms.formList.forEach((formItem) => {\r\n    formItem.form = document.getElementById(formItem.formId);\r\n    formItem.formFields.forEach((fieldItem) => {\r\n      fieldItem.field = document.getElementById(fieldItem.fieldId);\r\n      fieldItem.field.addEventListener(\"input\", (e) => {\r\n        e.target.value = e.target.value.replace(\r\n          forms.constransTemplates[fieldItem.fieldConstrians[0]], //для одного ограничения\r\n          \"\"\r\n        );\r\n      });\r\n      fieldItem.field.addEventListener(\"blur\", (e) => {\r\n        e.target.value = clearData(\r\n          forms.constransTemplates[fieldItem.fieldConstrians[0]], //для одного ограничения\r\n          e.target.value\r\n        );\r\n        if (/name/gi.test(fieldItem.fieldId)) {\r\n          e.target.value = upperFirstLitter(e.target.value);\r\n        }\r\n      });\r\n    });\r\n\r\n    formItem.form.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n      const selfFields = formItem.formFields;\r\n      let isError = false;\r\n\r\n      selfFields.forEach((fieldItem) => {\r\n        if (\r\n          !forms.constransTemplates[fieldItem.fieldConstrians[0]].test(fieldItem.field.value) && //для одного ограничения\r\n          fieldItem.field.value !== \"\"\r\n        ) {\r\n          console.log(\"Поле корректное\");\r\n        } else {\r\n          isError = true;\r\n        }\r\n      });\r\n\r\n      !isError && console.log(\"Данные отправлены\");\r\n    });\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValidate);\r\n\n\n//# sourceURL=webpack:///./modules/formValidate.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _smoothScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoothScroll */ \"./modules/smoothScroll.js\");\n\r\nconst menu = () => {\r\n  const menuButton = document.querySelector(\".menu\");\r\n  const menuContent = document.querySelector(\"menu\");\r\n  const closeButton = menuContent.querySelector(\".close-btn\");\r\n  const menuItems = menuContent.querySelectorAll(\"ul>li>a\");\r\n\r\n  const toggleMenu = () => {\r\n    menuContent.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  menuButton.addEventListener(\"click\", toggleMenu);\r\n  closeButton.addEventListener(\"click\", toggleMenu);\r\n\r\n  menuItems.forEach((item) =>\r\n    item.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      toggleMenu();\r\n      (0,_smoothScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e.target);\r\n    })\r\n  );\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modalBlock = document.querySelector(\".popup\");\r\n  const modalContent = modalBlock.querySelector(\".popup-content\");\r\n  const popupClose = modalBlock.querySelector(\".popup-close\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n\r\n  const modalAnimation = function () {\r\n    let time;\r\n    let offset = -50;\r\n\r\n    const step = function () {\r\n      const now = new Date().getTime();\r\n      const dt = now - (time || now);\r\n\r\n      time = now;\r\n\r\n      offset += 0.5 * dt;\r\n      if (offset < 10) {\r\n        requestAnimationFrame(step);\r\n        modalContent.style.top = `${offset}%`;\r\n      } else {\r\n        modalContent.style.top = \"\";\r\n      }\r\n    };\r\n    step();\r\n  };\r\n\r\n  buttons.forEach((btn) =>\r\n    btn.addEventListener(\"click\", () => {\r\n      modalBlock.style.display = \"block\";\r\n      if (window.outerWidth > 768) {\r\n        modalAnimation();\r\n      }\r\n    })\r\n  );\r\n\r\n  popupClose.addEventListener(\"click\", () => {\r\n    modalBlock.style.display = \"\";\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/serviceBlock.js":
/*!*********************************!*\
  !*** ./modules/serviceBlock.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _smoothScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoothScroll */ \"./modules/smoothScroll.js\");\n\r\nconst serviceBlock = () => {\r\n  const serviceButton = document.querySelector(`a[href=\"#service-block\"]`);\r\n  serviceButton.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    (0,_smoothScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e.target);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serviceBlock);\r\n\n\n//# sourceURL=webpack:///./modules/serviceBlock.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slider\": () => (/* binding */ slider)\n/* harmony export */ });\nconst slider = (settings) => {\r\n  const sliderBlock = document.querySelector(`.${settings.sliderClass}`);\r\n  const sliders = document.querySelectorAll(`.${settings.itemSlideClass}`);\r\n  const dotBlock = document.querySelector(`.${settings.dotsBlock}`);\r\n  const timeInterval = 2000;\r\n\r\n  let currentSlide = 0;\r\n  let interval;\r\n  let dots;\r\n\r\n  const initSlide = (activeClassSlide, activeClassDot) => {\r\n    console.log(activeClassSlide, activeClassDot);\r\n    dotBlock.innerHTML = \"\";\r\n    sliders.forEach((slide, index) => {\r\n      const dot = document.createElement(\"li\");\r\n      dot.classList.add(\"dot\");\r\n      if (slide.classList.contains(activeClassSlide)) {\r\n        dot.classList.add(activeClassDot);\r\n        currentSlide = index;\r\n      }\r\n      dotBlock.append(dot);\r\n    });\r\n\r\n    // dots = document.querySelectorAll(\".dot\");\r\n    // if (!currentSlide && sliders.length > 0) {\r\n    //   currentSlide = 0;\r\n    // }\r\n  };\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass);\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass);\r\n  };\r\n\r\n  const motionSlide = (callbackMotion) => {\r\n    prevSlide(sliders, currentSlide, \"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide, \"dot-active\");\r\n\r\n    callbackMotion();\r\n\r\n    nextSlide(sliders, currentSlide, \"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide, \"dot-active\");\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    console.log(currentSlide);\r\n    motionSlide(() => {\r\n      currentSlide = currentSlide < sliders.length - 1 ? currentSlide + 1 : 0;\r\n    });\r\n  };\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    if (!e.target.matches(\".dot, .portfolio-btn\")) {\r\n      return;\r\n    }\r\n    motionSlide(() => {\r\n      if (e.target.matches(\"#arrow-left\")) {\r\n        currentSlide = currentSlide > 0 ? currentSlide - 1 : sliders.length - 1;\r\n      } else if (e.target.matches(\"#arrow-right\")) {\r\n        currentSlide = currentSlide < sliders.length - 1 ? currentSlide + 1 : 0;\r\n      } else if (e.target.classList.contains(\"dot\")) {\r\n        dots.forEach((dot, index) => {\r\n          if (e.target === dot) {\r\n            currentSlide = index;\r\n          }\r\n        });\r\n      }\r\n    });\r\n  });\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseenter\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        stopSlide();\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseleave\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        startSlide(timeInterval);\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  initSlide(settings.activeSlideClass, settings.activeDotClass);\r\n  startSlide(timeInterval);\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/smoothScroll.js":
/*!*********************************!*\
  !*** ./modules/smoothScroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScroll = (targetEvent) => {\r\n  const ID =\r\n    targetEvent.tagName.toLowerCase() == \"a\"\r\n      ? targetEvent.getAttribute(\"href\").substr(1)\r\n      : targetEvent.closest(\"a\").getAttribute(\"href\").substr(1);\r\n\r\n  document.getElementById(ID).scrollIntoView({\r\n    behavior: \"smooth\",\r\n    block: \"start\",\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\r\n\n\n//# sourceURL=webpack:///./modules/smoothScroll.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadLine, hasDays = false) => {\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n  const dateStop = new Date(deadLine).getTime();\r\n  let timerHandle;\r\n\r\n  const leadingZero = (num) => (num < 10 ? \"0\" + num : \"\" + num);\r\n\r\n  const getTimeRemaining = () => {\r\n    const dateNow = new Date().getTime();\r\n    const timeRemaining = (dateStop - dateNow) / 1000;\r\n    const days = Math.floor(timeRemaining / 3600 / 24);\r\n    let hours = Math.floor(timeRemaining / 3600);\r\n    hours = hasDays ? hours % 24 : hours;\r\n    const minutes = Math.floor(timeRemaining / 60) % 60;\r\n    const seconds = Math.floor(timeRemaining) % 60;\r\n    return {\r\n      timeRemaining,\r\n      days: leadingZero(days),\r\n      hours: leadingZero(hours),\r\n      minutes: leadingZero(minutes),\r\n      seconds: leadingZero(seconds),\r\n    };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    const getTime = getTimeRemaining();\r\n\r\n    if (getTime.timeRemaining <= 0) {\r\n      clearInterval(timerHandle);\r\n    } else {\r\n      timerHours.textContent = getTime.hours;\r\n      timerMinutes.textContent = getTime.minutes;\r\n      timerSeconds.textContent = getTime.seconds;\r\n    }\r\n  };\r\n\r\n  timerHandle = setInterval(updateClock, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;