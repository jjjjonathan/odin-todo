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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _trash_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trash.js */ \"./src/trash.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nfunction Project(title, children) {\n  // children is an array of todo objects\n  const getTitle = () => title;\n  const getChildren = () => children;\n\n  const setTitle = (newTitle) => {\n    title = newTitle;\n  };\n  const addChild = (newChild, index) => {\n    // if index is -1, append child to end, else insert child at index\n    if (index === -1) {\n      children.push(newChild);\n    } else {\n      children.splice(index, 0, newChild);\n    }\n  };\n  const removeChild = (indexOfChildToRemove) => {\n    // removes child and returns it\n    const returnedChildArray = children.splice(indexOfChildToRemove, 1);\n    return returnedChildArray[0];\n  };\n  const shiftChild = (startIndex, endIndex) => {\n    addChild(removeChild(startIndex), endIndex);\n  };\n\n  return {\n    getTitle,\n    getChildren,\n    setTitle,\n    addChild,\n    removeChild,\n    shiftChild,\n  };\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nfunction Todo(title, description, dueDate, priority) {\n  const getTitle = () => title;\n  const getDescription = () => description;\n  const getDueDate = () => dueDate;\n  const getPriority = () => priority;\n\n  const setTitle = (newTitle) => {\n    title = newTitle;\n  };\n  const setDescription = (newDescription) => {\n    description = newDescription;\n  };\n  const setDueDate = (newDueDate) => {\n    dueDate = newDueDate;\n  };\n  const setPriority = (newPriority) => {\n    priority = newPriority;\n  };\n\n  return {\n    getTitle,\n    getDescription,\n    getDueDate,\n    getPriority,\n    setTitle,\n    setDescription,\n    setDueDate,\n    setPriority,\n  };\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/todo.js?");

/***/ }),

/***/ "./src/trash.js":
/*!**********************!*\
  !*** ./src/trash.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function trash() {\n  const { getTitle, getChildren, addChild, removeChild, shiftChild } = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.default)(\n    \"Trash\",\n    []\n  );\n\n  const deleteChild = (indexOfChildToDelete) => {\n    // permanently deletes child\n    children.splice(indexOfChildToDelete, 1);\n  };\n\n  const empty = () => {\n    // if you get assignment to constant var error, remove them with a loop instead\n    children = [];\n  };\n\n  return {\n    getTitle,\n    getChildren,\n    addChild,\n    removeChild,\n    shiftChild,\n    deleteChild,\n    empty,\n  };\n})());\n\n\n//# sourceURL=webpack://odin-todo/./src/trash.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;