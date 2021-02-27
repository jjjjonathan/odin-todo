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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function dom() {\n  const renderProjects = (projects, activeProjectIndex) => {\n    const projectContainer = document.getElementById(\"project-container\");\n    projectContainer.textContent = \"\";\n\n    projects.forEach((project, index) => {\n      const listItem = document.createElement(\"li\");\n      listItem.dataset.index = index;\n      listItem.textContent = project.getTitle();\n\n      if (project.hasOwnProperty(\"empty\")) {\n        listItem.id = \"trash\";\n\n        const icon = document.createElement(\"ion-icon\");\n        icon.setAttribute(\"name\", \"trash\");\n        listItem.appendChild(icon);\n      }\n\n      if (index == activeProjectIndex) {\n        listItem.classList.add(\"active-project\");\n      }\n\n      listItem.addEventListener(\"click\", handleProjectClick);\n      projectContainer.appendChild(listItem);\n    });\n  };\n\n  const renderTodosByProject = (project) => {\n    const todoContainer = document.getElementById(\"todo-container\");\n    todoContainer.textContent = \"\";\n\n    project.getChildren().forEach((todo, index) => {\n      const listItem = document.createElement(\"li\");\n      listItem.dataset.index = index;\n      listItem.classList.add(\"escape\");\n\n      const checkbox = document.createElement(\"ion-icon\");\n      checkbox.setAttribute(\n        \"name\",\n        todo.getCheckedState() ? \"checkbox-outline\" : \"square-outline\"\n      );\n      checkbox.classList.add(\"checkbox\");\n      checkbox.dataset.index = index;\n      listItem.appendChild(checkbox);\n\n      const title = document.createElement(\"span\");\n      title.classList.add(\"todo-title\");\n      title.textContent = todo.getTitle();\n      title.dataset.index = index;\n      listItem.appendChild(title);\n\n      const dueDate = document.createElement(\"span\");\n      dueDate.classList.add(\"pill-badge\", \"due-date\");\n      dueDate.textContent = todo.getDueDate();\n      dueDate.dataset.index = index;\n      listItem.appendChild(dueDate);\n\n      const priority = document.createElement(\"span\");\n      priority.classList.add(\n        \"pill-badge\",\n        \"priority\",\n        \"priority-\" + todo.getPriority()\n      );\n      priority.dataset.index = index;\n      listItem.appendChild(priority);\n\n      todoContainer.appendChild(listItem);\n\n      // event listeners\n      checkbox.addEventListener(\"click\", handleCheckboxClick);\n      title.addEventListener(\"click\", handleTextFieldClick);\n      dueDate.addEventListener(\"click\", handleTextFieldClick);\n      priority.addEventListener(\"click\", handlePriorityClick);\n    });\n  };\n\n  const renderTodos = () => {\n    renderTodosByProject(_index_js__WEBPACK_IMPORTED_MODULE_0__.default.getActiveProject());\n  };\n\n  const renderAll = () => {\n    renderProjects(_index_js__WEBPACK_IMPORTED_MODULE_0__.default.getProjectArray(), _index_js__WEBPACK_IMPORTED_MODULE_0__.default.getActiveProjectIndex());\n    renderTodos();\n  };\n\n  const commitTextField = () => {\n    const input = document.querySelector(\".todo-text-edit\");\n\n    if (input) {\n      const newValue = input.value;\n      const node = input.parentNode;\n      const index = node.dataset.index;\n      const currentTodo = _index_js__WEBPACK_IMPORTED_MODULE_0__.default.getActiveProject().getChildren()[index];\n\n      if (node.classList.contains(\"todo-title\")) {\n        currentTodo.setTitle(newValue);\n        node.textContent = currentTodo.getTitle();\n      } else if (node.classList.contains(\"due-date\")) {\n        currentTodo.setDueDate(newValue);\n        node.textContent = currentTodo.getDueDate();\n      }\n\n      document.removeEventListener(\"click\", handleClickToCloseTextField);\n      node.addEventListener(\"click\", handleTextFieldClick);\n    }\n  };\n\n  // click handlers\n\n  const handleProjectClick = (event) => {\n    commitTextField();\n    const clickedIndex = event.target.dataset.index;\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.default.setActiveProject(clickedIndex);\n    renderAll();\n  };\n\n  const handleCheckboxClick = (event) => {\n    const clickedIndex = event.target.dataset.index;\n    const currentTodo = _index_js__WEBPACK_IMPORTED_MODULE_0__.default.getActiveProject().getChildren()[clickedIndex];\n    currentTodo.toggleCheckedState();\n    \n    const node = document.querySelector(\n      `.checkbox[data-index=\"${clickedIndex}\"]`\n    );\n    node.setAttribute(\n      \"name\",\n      currentTodo.getCheckedState() ? \"checkbox-outline\" : \"square-outline\"\n    )\n  };\n\n  const handleTextFieldClick = (event) => {\n    commitTextField();\n    const clickedIndex = event.target.dataset.index;\n    const currentTodo = _index_js__WEBPACK_IMPORTED_MODULE_0__.default.getActiveProject().getChildren()[clickedIndex];\n\n    const node = event.target;\n    node.textContent = \"\";\n\n    const input = document.createElement(\"input\");\n    input.type = \"text\";\n    input.classList.add(\"todo-text-edit\");\n\n    if (node.classList.contains(\"todo-title\")) {\n      input.classList.add(\"todo-title-edit\");\n      input.value = currentTodo.getTitle();\n    } else if (node.classList.contains(\"due-date\")) {\n      input.classList.add(\"due-date-edit\");\n      input.value = currentTodo.getDueDate();\n    }\n\n    node.appendChild(input);\n    input.focus();\n\n    node.removeEventListener(\"click\", handleTextFieldClick);\n    document.addEventListener(\"click\", handleClickToCloseTextField);\n  };\n\n  const handlePriorityClick = (event) => {\n    const clickedIndex = event.target.dataset.index;\n    const currentTodo = _index_js__WEBPACK_IMPORTED_MODULE_0__.default.getActiveProject().getChildren()[clickedIndex];\n    currentTodo.togglePriority();\n\n    const node = document.querySelector(\n      `.priority[data-index=\"${clickedIndex}\"]`\n    );\n    node.className = \"\";\n    node.classList.add(\n      \"pill-badge\",\n      \"priority\",\n      \"priority-\" + currentTodo.getPriority()\n    );\n  };\n\n  const handleClickToCloseTextField = (event) => {\n    if (event.target.classList.contains(\"escape\")) {\n      commitTextField();\n    }\n  };\n\n  return {\n    renderAll,\n    renderTodos,\n  };\n})());\n\n\n//# sourceURL=webpack://odin-todo/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _trash_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trash.js */ \"./src/trash.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\n\n\n\nconst state = (() => {\n  // initialize project array, default project, test project, and trash\n  const projects = [];\n  projects.push((0,_project_js__WEBPACK_IMPORTED_MODULE_1__.default)(\"Default Project\", []));\n  projects.push((0,_project_js__WEBPACK_IMPORTED_MODULE_1__.default)(\"Test Project\", []));\n  projects.push(_trash_js__WEBPACK_IMPORTED_MODULE_2__.default);\n\n  // add example todos\n  projects[0].addChild((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"Walk the dog\", \"March 17\", \"2\", true), -1);\n  projects[1].addChild((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"Walk the frog\", \"Anytime\", \"3\", false), -1);\n\n  let activeProject = 0;\n\n  const getActiveProjectIndex = () => activeProject;\n  const setActiveProject = (newActiveProject) => {\n    activeProject = newActiveProject;\n  };\n  const getActiveProject = () => projects[activeProject];\n\n  const getProjectByIndex = (index) => projects[index];\n  const getProjectArray = () => projects;\n\n  return {\n    getActiveProjectIndex,\n    setActiveProject,\n    getActiveProject,\n    getProjectByIndex,\n    getProjectArray,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);\n\n// add example todos\nstate.getProjectByIndex(1).addChild((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"Stalk the log\", \"March 19\", \"1\", true), -1);\n\ndocument.addEventListener(\"DOMContentLoaded\", _dom_js__WEBPACK_IMPORTED_MODULE_3__.default.renderAll);\n\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nfunction Todo(title, dueDate, priority, isChecked) {\n  const getTitle = () => title;\n  const getDueDate = () => dueDate;\n  const getPriority = () => priority;\n  const getCheckedState = () => isChecked;\n\n  const setTitle = (newTitle) => {\n    title = newTitle;\n  };\n  const setDueDate = (newDueDate) => {\n    dueDate = newDueDate;\n  };\n  const togglePriority = () => {\n    if (priority === \"3\") {\n      priority = \"2\";\n    } else if (priority === \"2\") {\n      priority = \"1\";\n    } else if (priority === \"1\") {\n      priority = \"3\";\n    }\n  };\n  const toggleCheckedState = () => {\n    isChecked = isChecked ? false : true;\n  };\n\n  return {\n    getTitle,\n    getDueDate,\n    getPriority,\n    getCheckedState,\n    setTitle,\n    setDueDate,\n    togglePriority,\n    toggleCheckedState,\n  };\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/todo.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;