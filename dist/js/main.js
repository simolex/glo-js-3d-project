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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_serviceBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/serviceBlock */ \"./modules/serviceBlock.js\");\n/* harmony import */ var _modules_calculate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculate */ \"./modules/calculate.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_formValidate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/formValidate */ \"./modules/formValidate.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//import smoothScroll from \"./modules/smoothScroll\";\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"08 march 2022\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_serviceBlock__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_calculate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(100);\r\n\r\nconst forms = {\r\n  constransTemplates: {\r\n    hasNotName: /[^а-яёА-ЯЁ \\-]/gi,\r\n    hasNotMessage: /[^а-яёА-ЯЁ \\-\\.\\!\\?\\:\\;\\(\\)0-9]/gi,\r\n    hasNotEmail: /[^\\w\\-\\@\\.\\!\\~\\*\\']/gi,\r\n    hasNotTelephone: /[^\\d\\(\\)\\-\\+]/gi,\r\n  },\r\n  formList: [\r\n    {\r\n      formId: \"form1\",\r\n      formFields: [\r\n        {\r\n          fieldSelector: \"input[name=user_name]\",\r\n          fieldConstrians: [\"hasNotName\"],\r\n        },\r\n        {\r\n          fieldSelector: \"input[name=user_email]\",\r\n          fieldConstrians: [\"hasNotEmail\"],\r\n        },\r\n        {\r\n          fieldSelector: \"input[name=user_phone]\",\r\n          fieldConstrians: [\"hasNotTelephone\"],\r\n        },\r\n      ],\r\n    },\r\n    {\r\n      formId: \"form2\",\r\n      formFields: [\r\n        {\r\n          fieldSelector: \"input[name=user_name]\",\r\n          fieldConstrians: [\"hasNotName\"],\r\n        },\r\n        {\r\n          fieldSelector: \"input[name=user_message]\",\r\n          fieldConstrians: [\"hasNotMessage\"],\r\n        },\r\n        {\r\n          fieldSelector: \"input[name=user_email]\",\r\n          fieldConstrians: [\"hasNotEmail\"],\r\n        },\r\n        {\r\n          fieldSelector: \"input[name=user_phone]\",\r\n          fieldConstrians: [\"hasNotTelephone\"],\r\n        },\r\n      ],\r\n    },\r\n    {\r\n      formId: \"form3\",\r\n      formFields: [\r\n        {\r\n          fieldSelector: \"input[name=user_name]\",\r\n          fieldConstrians: [\"hasNotText\"],\r\n        },\r\n        {\r\n          fieldSelector: \"input[name=user_email]\",\r\n          fieldConstrians: [\"hasNotEmail\"],\r\n        },\r\n        {\r\n          fieldSelector: \"input[name=user_phone]\",\r\n          fieldConstrians: [\"hasNotTelephone\"],\r\n        },\r\n      ],\r\n    },\r\n  ],\r\n};\r\n(0,_modules_formValidate__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(forms);\r\n\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__.tabs)();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ autoInterval: 2000, activeDotClass: \"dot-active\", activeSlideClass: \"portfolio-item-active\" });\r\n//   {\r\n//   autoInterval: 2000,\r\n//   sliderClass: \"portfolio-content\",\r\n//   itemSlideClass: \"portfolio-item\",\r\n//   activeSlideClass: \"portfolio-item-active\",\r\n//   dotsBlock: \"portfolio-dots\",\r\n//   itemDotClass: \"dot\",\r\n//   activeDotClass: \"dot-active\",\r\n//   arrowClass: \"portfolio-btn\",\r\n//   prevArrowClass: \"prev\",\r\n//   nextArrowClass: \"next\",\r\n// }\r\n\r\n//slider2();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\r\n  formId: \"form1\",\r\n  someElement: [\r\n    {\r\n      type: \"block\",\r\n      id: \"total\",\r\n    },\r\n  ],\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\r\n  formId: \"form2\",\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\r\n  formId: \"form3\",\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculate.js":
/*!******************************!*\
  !*** ./modules/calculate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst calculate = (price = 100) => {\r\n  const calcBlock = document.querySelector(\".calc-block\");\r\n  const calcType = document.querySelector(\".calc-type\");\r\n  const calcSquare = document.querySelector(\".calc-square\");\r\n  const calcCount = document.querySelector(\".calc-count\");\r\n  const calcDay = document.querySelector(\".calc-day\");\r\n  const total = document.getElementById(\"total\");\r\n\r\n  const calculateResult = () => {\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n    const calcSquareValue = +calcSquare.value;\r\n    let startAnimateValue, targetAnimateValue;\r\n    let totalValue = 0;\r\n    let calcCountValue = 1;\r\n    let calcDayValue = 1;\r\n\r\n    if (calcDay.value && +calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    }\r\n\r\n    if (+calcCount.value > 1) {\r\n      calcCountValue += +calcCount.value / 10;\r\n    }\r\n\r\n    if (calcType.value && calcSquare.value) {\r\n      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n    } else {\r\n      totalValue = 0;\r\n    }\r\n\r\n    startAnimateValue = +total.textContent;\r\n    targetAnimateValue = totalValue;\r\n\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n      duration: 400,\r\n      timing: (timeFraction) => timeFraction,\r\n      draw(progress) {\r\n        total.textContent =\r\n          startAnimateValue + Math.round((targetAnimateValue - startAnimateValue) * progress);\r\n      },\r\n    });\r\n  };\r\n\r\n  calcBlock.addEventListener(\"input\", (e) => {\r\n    if (\r\n      e.target === calcType ||\r\n      e.target === calcSquare ||\r\n      e.target === calcCount ||\r\n      e.target === calcDay\r\n    ) {\r\n      if (e.target !== calcType) {\r\n        e.target.value = e.target.value.replace(/\\D+/gi, \"\");\r\n      }\r\n      calculateResult();\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculate);\r\n\n\n//# sourceURL=webpack:///./modules/calculate.js?");

/***/ }),

/***/ "./modules/formValidate.js":
/*!*********************************!*\
  !*** ./modules/formValidate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formValidate = (forms) => {\r\n  const clearData = (regexp, value) => {\r\n    const repeatSpace = /( ){2,}/gi;\r\n    const repeatMinus = /(\\-){2,}/gi;\r\n    const edgeSpace = /(^[ \\-]+|[ \\-]+$)/gi;\r\n\r\n    value = value.replace(regexp, \"\");\r\n    value = value.replace(repeatSpace, (str, $1) => $1);\r\n    value = value.replace(repeatMinus, (str, $1) => $1);\r\n    value = value.replace(edgeSpace, \"\");\r\n    return value;\r\n  };\r\n\r\n  const upperFirstLitter = (value) => {\r\n    const firstLitter = /((^[а-яё])|((?<=[^а-яё])[а-яё]))/gi;\r\n    value = value.toLowerCase();\r\n    value = value.replace(firstLitter, (str, $1) => {\r\n      return ($1 + \"\").toUpperCase();\r\n    });\r\n    return value;\r\n  };\r\n\r\n  try {\r\n    forms.formList.forEach((formItem) => {\r\n      formItem.form = document.getElementById(formItem.formId);\r\n      if (!formItem.form) {\r\n        throw new Error(`Отсутствует элемент с id=\"${formItem.formId}\"`);\r\n      }\r\n      formItem.formFields.forEach((fieldItem) => {\r\n        fieldItem.field = formItem.form.querySelector(fieldItem.fieldSelector);\r\n        if (!fieldItem.field) {\r\n          throw new Error(`Отсутствует элемент с селектором=\"${formItem.formId}\"`);\r\n        }\r\n        fieldItem.field.classList.add(\"form-control\");\r\n        fieldItem.field.addEventListener(\"input\", (e) => {\r\n          e.target.value = e.target.value.replace(\r\n            forms.constransTemplates[fieldItem.fieldConstrians[0]], //для одного ограничения\r\n            \"\"\r\n          );\r\n          e.target.classList.remove(\"is-valid\");\r\n          e.target.classList.remove(\"is-invalid\");\r\n        });\r\n        fieldItem.field.addEventListener(\"blur\", (e) => {\r\n          e.target.value = clearData(\r\n            forms.constransTemplates[fieldItem.fieldConstrians[0]], //для одного ограничения\r\n            e.target.value\r\n          );\r\n          if (/user_name/gi.test(fieldItem.fieldSelector)) {\r\n            e.target.value = upperFirstLitter(e.target.value);\r\n          }\r\n        });\r\n      });\r\n\r\n      formItem.form.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        const selfFields = formItem.formFields;\r\n\r\n        selfFields.forEach((fieldItem) => {\r\n          if (\r\n            !forms.constransTemplates[fieldItem.fieldConstrians[0]].test(fieldItem.field.value) && //для одного ограничения\r\n            fieldItem.field.value !== \"\"\r\n          ) {\r\n            fieldItem.field.classList.remove(\"is-invalid\");\r\n            fieldItem.field.classList.add(\"is-valid\");\r\n          } else {\r\n            fieldItem.field.classList.remove(\"is-valid\");\r\n            fieldItem.field.classList.add(\"is-invalid\");\r\n          }\r\n        });\r\n      });\r\n    });\r\n  } catch (error) {\r\n    console.log(error.message);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValidate);\r\n\n\n//# sourceURL=webpack:///./modules/formValidate.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"quadEaseInOut\": () => (/* binding */ quadEaseInOut),\n/* harmony export */   \"circEaseInOut\": () => (/* binding */ circEaseInOut)\n/* harmony export */ });\n/**\r\n * https://learn.javascript.ru/js-animation#bolee-interesnaya-funktsiya-draw\r\n */\r\n\r\nconst animateQuad = (timeFraction) => {\r\n  return Math.pow(timeFraction, 2);\r\n};\r\n\r\nconst animateCirc = (timeFraction) => {\r\n  return 1 - Math.sin(Math.acos(timeFraction));\r\n};\r\n\r\nconst makeEaseInOut = (timing) => {\r\n  return function (timeFraction) {\r\n    if (timeFraction < 0.5) {\r\n      return timing(2 * timeFraction) / 2;\r\n    } else {\r\n      return (2 - timing(2 * (1 - timeFraction))) / 2;\r\n    }\r\n  };\r\n};\r\n\r\nconst quadEaseInOut = makeEaseInOut(animateQuad);\r\nconst circEaseInOut = makeEaseInOut(animateCirc);\r\n\r\nconst animate = ({ timing, draw, duration }) => {\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) {\r\n      timeFraction = 1;\r\n    }\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\r\n// animate({\r\n//   duration: 400,\r\n//   timing: circEaseInOut,\r\n//   draw(progress) {\r\n//     modalBlock.style.top = `${\r\n//       percentStartPosition + Math.round((percentStopPosition - percentStartPosition) * progress)\r\n//     }%`;\r\n//   },\r\n// });\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _smoothScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoothScroll */ \"./modules/smoothScroll.js\");\n\r\nconst menu = () => {\r\n  const menuContent = document.querySelector(\"menu\");\r\n\r\n  const toggleMenu = (e) => {\r\n    if (e.target.closest(\".menu\") || e.target.closest(\"menu\")) {\r\n      e.preventDefault();\r\n      if (e.target.matches(\"ul>li>a\")) {\r\n        (0,_smoothScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e.target);\r\n      } else if (!e.target.classList.contains(\"close-btn\") && e.target.closest(\"menu\")) {\r\n        return;\r\n      }\r\n    } else if (!menuContent.classList.contains(\"active-menu\")) {\r\n      return;\r\n    }\r\n    menuContent.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  document.addEventListener(\"click\", (e) => toggleMenu(e));\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n  const modalOverlay = document.querySelector(\".popup\");\r\n  const modalBlock = modalOverlay.querySelector(\".popup-content\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n\r\n  const percentStartPosition = -50;\r\n  const percentStopPosition = 10;\r\n\r\n  buttons.forEach((btn) =>\r\n    btn.addEventListener(\"click\", () => {\r\n      modalOverlay.style.display = \"block\";\r\n      if (window.outerWidth > 768) {\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n          duration: 400,\r\n          timing: _helpers__WEBPACK_IMPORTED_MODULE_0__.circEaseInOut,\r\n          draw(progress) {\r\n            modalBlock.style.top = `${\r\n              percentStartPosition +\r\n              Math.round((percentStopPosition - percentStartPosition) * progress)\r\n            }%`;\r\n          },\r\n        });\r\n      }\r\n    })\r\n  );\r\n  modalOverlay.addEventListener(\"click\", (e) => {\r\n    if (!e.target.closest(\".popup-content\") || e.target.classList.contains(\"popup-close\")) {\r\n      modalOverlay.style.display = \"\";\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElement = [] }) => {\r\n  const form = document.getElementById(formId);\r\n  const statusBlock = document.createElement(\"div\");\r\n  const loadText = \"Загрузка...\";\r\n  const errorText = \"Ошибка..\";\r\n  const successText = \"Спасибо! Наш менеджер с вами свяжется.\";\r\n\r\n  const validate = (list) => {\r\n    let success = true;\r\n    list.forEach((input) => {\r\n      if (!input.classList.contains(\"is-invalid\")) {\r\n        success = false;\r\n      }\r\n    });\r\n    return success;\r\n  };\r\n\r\n  const sendData = (data) => {\r\n    return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n      // \"./dist/server.php\"\r\n      method: \"POST\",\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        \"Content-Type\": \"application/json; charset=utf-8\",\r\n      },\r\n    }).then((resp) => resp.json());\r\n  };\r\n\r\n  const submitForm = () => {\r\n    const formElements = form.querySelectorAll(\"input\");\r\n    const formData = new FormData(form);\r\n    const formBody = {};\r\n\r\n    statusBlock.textContent = loadText;\r\n    form.append(statusBlock);\r\n    formData.forEach((value, key) => {\r\n      formBody[key] = value;\r\n    });\r\n    someElement.forEach((elem) => {\r\n      const element = document.getElementById(elem.id);\r\n      if (elem.type === \"block\") {\r\n        formBody[elem.id] = element.textContent;\r\n      } else if (elem.type === \"input\") {\r\n        formBody[elem.id] = element.value;\r\n      }\r\n    });\r\n\r\n    if (validate(formElements)) {\r\n      sendData(formBody)\r\n        .then((data) => {\r\n          statusBlock.textContent = successText;\r\n          formElements.forEach((input) => {\r\n            input.value = \"\";\r\n          });\r\n        })\r\n        .catch((error) => {\r\n          statusBlock.textContent = errorText;\r\n        });\r\n    } else {\r\n      alert(\"Данные не валидны!!!\");\r\n    }\r\n  };\r\n  try {\r\n    if (!form) {\r\n      throw new Error(\"Отсутствует форма или неверный индентификатор формы\");\r\n    }\r\n    form.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n      submitForm();\r\n    });\r\n  } catch (error) {\r\n    console.log(error.message);\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/serviceBlock.js":
/*!*********************************!*\
  !*** ./modules/serviceBlock.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _smoothScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoothScroll */ \"./modules/smoothScroll.js\");\n\r\n\r\nconst serviceBlock = () => {\r\n  const serviceButton = document.querySelector(`a[href=\"#service-block\"]`);\r\n  serviceButton.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    (0,_smoothScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e.target);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serviceBlock);\r\n\n\n//# sourceURL=webpack:///./modules/serviceBlock.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (currentSettings) => {\r\n  const settings = {\r\n    autoInterval: 2000,\r\n    sliderClass: \"portfolio-content\",\r\n    itemSlideClass: \"portfolio-item\",\r\n    activeSlideClass: \"slide-active\",\r\n    dotsBlock: \"portfolio-dots\",\r\n    itemDotClass: \"dot\",\r\n    activeDotClass: \"dot-active\",\r\n    arrowClass: \"portfolio-btn\",\r\n    prevArrowClass: \"prev\",\r\n    nextArrowClass: \"next\",\r\n    ...currentSettings,\r\n  };\r\n\r\n  const sliderBlock = document.querySelector(`.${settings.sliderClass}`);\r\n  const sliders = document.querySelectorAll(`.${settings.itemSlideClass}`);\r\n  const dotBlock = document.querySelector(`.${settings.dotsBlock}`);\r\n  const timeInterval = settings.autoInterval;\r\n\r\n  let currentSlide = 0;\r\n  let interval;\r\n  let dots;\r\n\r\n  const initSlide = (activeClassSlide, activeClassDot) => {\r\n    dotBlock.innerHTML = \"\";\r\n\r\n    sliders.forEach((slide, index) => {\r\n      const dot = document.createElement(\"li\");\r\n      dot.classList.add(settings.itemDotClass);\r\n      if (slide.classList.contains(activeClassSlide)) {\r\n        dot.classList.add(activeClassDot);\r\n        currentSlide = index;\r\n      }\r\n      dotBlock.append(dot);\r\n    });\r\n\r\n    dots = document.querySelectorAll(`.${settings.itemDotClass}`);\r\n  };\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass);\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass);\r\n  };\r\n  //,\r\n\r\n  const motionSlide = (callbackMotion) => {\r\n    prevSlide(sliders, currentSlide, settings.activeSlideClass);\r\n    prevSlide(dots, currentSlide, settings.activeDotClass);\r\n\r\n    callbackMotion();\r\n\r\n    nextSlide(sliders, currentSlide, settings.activeSlideClass);\r\n    nextSlide(dots, currentSlide, settings.activeDotClass);\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    motionSlide(() => {\r\n      currentSlide = currentSlide < sliders.length - 1 ? currentSlide + 1 : 0;\r\n    });\r\n  };\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  if (!!sliderBlock && sliders.length > 0) {\r\n    initSlide(settings.activeSlideClass, settings.activeDotClass);\r\n\r\n    sliderBlock.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      if (!e.target.matches(`.${settings.arrowClass}, .${settings.itemDotClass}`)) {\r\n        return;\r\n      }\r\n      motionSlide(() => {\r\n        if (e.target.matches(`.${settings.arrowClass}.${settings.prevArrowClass}`)) {\r\n          currentSlide = currentSlide > 0 ? currentSlide - 1 : sliders.length - 1;\r\n        } else if (e.target.matches(`.${settings.arrowClass}.${settings.nextArrowClass}`)) {\r\n          currentSlide = currentSlide < sliders.length - 1 ? currentSlide + 1 : 0;\r\n        } else if (e.target.classList.contains(settings.itemDotClass)) {\r\n          dots.forEach((dot, index) => {\r\n            if (e.target === dot) {\r\n              currentSlide = index;\r\n            }\r\n          });\r\n        }\r\n      });\r\n    });\r\n\r\n    sliderBlock.addEventListener(\r\n      \"mouseenter\",\r\n      (e) => {\r\n        if (e.target.matches(`.${settings.arrowClass}, .${settings.itemDotClass}`)) {\r\n          stopSlide();\r\n        }\r\n      },\r\n      true\r\n    );\r\n\r\n    sliderBlock.addEventListener(\r\n      \"mouseleave\",\r\n      (e) => {\r\n        if (e.target.matches(`.${settings.arrowClass}, .${settings.itemDotClass}`)) {\r\n          startSlide(timeInterval);\r\n        }\r\n      },\r\n      true\r\n    );\r\n\r\n    startSlide(timeInterval);\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/smoothScroll.js":
/*!*********************************!*\
  !*** ./modules/smoothScroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScroll = (targetEvent) => {\r\n  const ID =\r\n    targetEvent.tagName.toLowerCase() == \"a\"\r\n      ? targetEvent.getAttribute(\"href\").substr(1)\r\n      : targetEvent.closest(\"a\").getAttribute(\"href\").substr(1);\r\n\r\n  document.getElementById(ID).scrollIntoView({\r\n    behavior: \"smooth\",\r\n    block: \"start\",\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\r\n\n\n//# sourceURL=webpack:///./modules/smoothScroll.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabs\": () => (/* binding */ tabs)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector(\".service-header\");\r\n  const tabHeaders = document.querySelectorAll(\".service-header-tab\");\r\n  const tabContent = document.querySelectorAll(\".service-tab\");\r\n\r\n  tabPanel.addEventListener(\"click\", (e) => {\r\n    const clickedTab = e.target.closest(\".service-header-tab\");\r\n    if (clickedTab) {\r\n      tabHeaders.forEach((tab, index) => {\r\n        if (tab === clickedTab) {\r\n          tab.classList.add(\"active\");\r\n          tabContent[index].classList.remove(\"d-none\");\r\n        } else {\r\n          tab.classList.remove(\"active\");\r\n          tabContent[index].classList.add(\"d-none\");\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

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