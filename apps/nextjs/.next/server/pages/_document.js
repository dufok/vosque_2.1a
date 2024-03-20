"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"../../node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native */ \"../../node_modules/react-native-web/dist/cjs/index.js\");\n/* harmony import */ var _tamagui_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tamagui.config */ \"./tamagui.config.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tamagui_config__WEBPACK_IMPORTED_MODULE_3__]);\n_tamagui_config__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nclass Document extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    static async getInitialProps({ renderPage }) {\n        react_native__WEBPACK_IMPORTED_MODULE_4__.AppRegistry.registerComponent(\"Main\", ()=>next_document__WEBPACK_IMPORTED_MODULE_1__.Main);\n        const page = await renderPage();\n        // @ts-ignore\n        const { getStyleElement } = react_native__WEBPACK_IMPORTED_MODULE_4__.AppRegistry.getApplication(\"Main\");\n        /**\n     * Note: be sure to keep tamagui styles after react-native-web styles like it is here!\n     * So Tamagui styles can override the react-native-web styles.\n     */ const styles = [\n            getStyleElement(),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                dangerouslySetInnerHTML: {\n                    __html: _tamagui_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getCSS()\n                }\n            }, \"tamagui-css\", false, {\n                fileName: \"/workspaces/vosque_2.1a/apps/nextjs/pages/_document.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ];\n        return {\n            ...page,\n            styles: react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(styles)\n        };\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"X-UA-Compatible\",\n                        content: \"IE=edge\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/vosque_2.1a/apps/nextjs/pages/_document.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/workspaces/vosque_2.1a/apps/nextjs/pages/_document.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"/workspaces/vosque_2.1a/apps/nextjs/pages/_document.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: \"/workspaces/vosque_2.1a/apps/nextjs/pages/_document.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/vosque_2.1a/apps/nextjs/pages/_document.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/vosque_2.1a/apps/nextjs/pages/_document.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEU7QUFDMUM7QUFDVTtBQUVIO0FBRXhCLE1BQU1RLGlCQUFpQlIsc0RBQVlBO0lBQ2hELGFBQWFTLGdCQUFnQixFQUFFQyxVQUFVLEVBQU8sRUFBRTtRQUNoREoscURBQVdBLENBQUNLLGlCQUFpQixDQUFDLFFBQVEsSUFBTVIsK0NBQUlBO1FBQ2hELE1BQU1TLE9BQU8sTUFBTUY7UUFFbkIsYUFBYTtRQUNiLE1BQU0sRUFBRUcsZUFBZSxFQUFFLEdBQUdQLHFEQUFXQSxDQUFDUSxjQUFjLENBQUM7UUFFdkQ7OztLQUdDLEdBQ0QsTUFBTUMsU0FBUztZQUNiRjswQkFDQSw4REFBQ0c7Z0JBQXdCQyx5QkFBeUI7b0JBQUVDLFFBQVFYLDhEQUFjO2dCQUFHO2VBQWxFOzs7OztTQUNaO1FBRUQsT0FBTztZQUFFLEdBQUdLLElBQUk7WUFBRUcsUUFBUVYsMkNBQVFBLENBQUNlLE9BQU8sQ0FBQ0w7UUFBUTtJQUNyRDtJQUVBTSxTQUFTO1FBQ1AscUJBQ0UsOERBQUNuQiwrQ0FBSUE7OzhCQUNILDhEQUFDRCwrQ0FBSUE7OEJBQ0gsNEVBQUNxQjt3QkFBS0MsV0FBVTt3QkFBa0JDLFNBQVE7Ozs7Ozs7Ozs7OzhCQUU1Qyw4REFBQ0M7O3NDQUNDLDhEQUFDdEIsK0NBQUlBOzs7OztzQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztJQUluQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvX2RvY3VtZW50LnRzeD9kMzdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0RG9jdW1lbnQsIHsgSGVhZCwgSHRtbCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnXG5pbXBvcnQgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQXBwUmVnaXN0cnkgfSBmcm9tICdyZWFjdC1uYXRpdmUnXG5cbmltcG9ydCBUYW1hZ3VpIGZyb20gJy4uL3RhbWFndWkuY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudCBleHRlbmRzIE5leHREb2N1bWVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZW5kZXJQYWdlIH06IGFueSkge1xuICAgIEFwcFJlZ2lzdHJ5LnJlZ2lzdGVyQ29tcG9uZW50KCdNYWluJywgKCkgPT4gTWFpbilcbiAgICBjb25zdCBwYWdlID0gYXdhaXQgcmVuZGVyUGFnZSgpXG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgeyBnZXRTdHlsZUVsZW1lbnQgfSA9IEFwcFJlZ2lzdHJ5LmdldEFwcGxpY2F0aW9uKCdNYWluJylcblxuICAgIC8qKlxuICAgICAqIE5vdGU6IGJlIHN1cmUgdG8ga2VlcCB0YW1hZ3VpIHN0eWxlcyBhZnRlciByZWFjdC1uYXRpdmUtd2ViIHN0eWxlcyBsaWtlIGl0IGlzIGhlcmUhXG4gICAgICogU28gVGFtYWd1aSBzdHlsZXMgY2FuIG92ZXJyaWRlIHRoZSByZWFjdC1uYXRpdmUtd2ViIHN0eWxlcy5cbiAgICAgKi9cbiAgICBjb25zdCBzdHlsZXMgPSBbXG4gICAgICBnZXRTdHlsZUVsZW1lbnQoKSxcbiAgICAgIDxzdHlsZSBrZXk9XCJ0YW1hZ3VpLWNzc1wiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogVGFtYWd1aS5nZXRDU1MoKSB9fSAvPixcbiAgICBdXG5cbiAgICByZXR1cm4geyAuLi5wYWdlLCBzdHlsZXM6IENoaWxkcmVuLnRvQXJyYXkoc3R5bGVzKSB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L0h0bWw+XG4gICAgKVxuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dERvY3VtZW50IiwiSGVhZCIsIkh0bWwiLCJNYWluIiwiTmV4dFNjcmlwdCIsIkNoaWxkcmVuIiwiQXBwUmVnaXN0cnkiLCJUYW1hZ3VpIiwiRG9jdW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJyZW5kZXJQYWdlIiwicmVnaXN0ZXJDb21wb25lbnQiLCJwYWdlIiwiZ2V0U3R5bGVFbGVtZW50IiwiZ2V0QXBwbGljYXRpb24iLCJzdHlsZXMiLCJzdHlsZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0Q1NTIiwidG9BcnJheSIsInJlbmRlciIsIm1ldGEiLCJodHRwRXF1aXYiLCJjb250ZW50IiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_document.tsx\n");

/***/ }),

/***/ "../../packages/app/tamagui.config.ts":
/*!********************************************!*\
  !*** ../../packages/app/tamagui.config.ts ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _my_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @my/ui */ \"../../packages/ui/src/index.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_my_ui__WEBPACK_IMPORTED_MODULE_0__]);\n_my_ui__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_my_ui__WEBPACK_IMPORTED_MODULE_0__.config);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvYXBwL3RhbWFndWkuY29uZmlnLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStCO0FBRS9CLGlFQUFlQSwwQ0FBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uLi8uLi9wYWNrYWdlcy9hcHAvdGFtYWd1aS5jb25maWcudHM/MWYwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdAbXkvdWknXG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZyJdLCJuYW1lcyI6WyJjb25maWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../packages/app/tamagui.config.ts\n");

/***/ }),

/***/ "../../packages/ui/src/MyComponent.tsx":
/*!*********************************************!*\
  !*** ../../packages/ui/src/MyComponent.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MyComponent: () => (/* binding */ MyComponent)\n/* harmony export */ });\n/* harmony import */ var tamagui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tamagui */ \"../../node_modules/tamagui/dist/esm/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([tamagui__WEBPACK_IMPORTED_MODULE_0__]);\ntamagui__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst MyComponent = (0,tamagui__WEBPACK_IMPORTED_MODULE_0__.styled)(tamagui__WEBPACK_IMPORTED_MODULE_0__.YStack, {\n    name: \"MyComponent\",\n    bc: \"red\",\n    variants: {\n        blue: {\n            true: {\n                backgroundColor: \"blue\"\n            }\n        }\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvdWkvc3JjL015Q29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUVqQyxNQUFNRSxjQUFjRiwrQ0FBTUEsQ0FBQ0MsMkNBQU1BLEVBQUU7SUFDeENFLE1BQU07SUFDTkMsSUFBSTtJQUVKQyxVQUFVO1FBQ1JDLE1BQU07WUFDSkMsTUFBTTtnQkFDSkMsaUJBQWlCO1lBQ25CO1FBQ0Y7SUFDRjtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi4vLi4vcGFja2FnZXMvdWkvc3JjL015Q29tcG9uZW50LnRzeD85OTViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlZCwgWVN0YWNrIH0gZnJvbSAndGFtYWd1aSdcblxuZXhwb3J0IGNvbnN0IE15Q29tcG9uZW50ID0gc3R5bGVkKFlTdGFjaywge1xuICBuYW1lOiAnTXlDb21wb25lbnQnLFxuICBiYzogJ3JlZCcsXG5cbiAgdmFyaWFudHM6IHtcbiAgICBibHVlOiB7XG4gICAgICB0cnVlOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9IGFzIGNvbnN0LFxufSlcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJZU3RhY2siLCJNeUNvbXBvbmVudCIsIm5hbWUiLCJiYyIsInZhcmlhbnRzIiwiYmx1ZSIsInRydWUiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../packages/ui/src/MyComponent.tsx\n");

/***/ }),

/***/ "../../packages/ui/src/animations.ts":
/*!*******************************************!*\
  !*** ../../packages/ui/src/animations.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animations: () => (/* binding */ animations)\n/* harmony export */ });\n/* harmony import */ var _tamagui_animations_react_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tamagui/animations-react-native */ \"../../node_modules/@tamagui/animations-react-native/dist/cjs/index.js\");\n/* harmony import */ var _tamagui_animations_react_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tamagui_animations_react_native__WEBPACK_IMPORTED_MODULE_0__);\n\nconst animations = (0,_tamagui_animations_react_native__WEBPACK_IMPORTED_MODULE_0__.createAnimations)({\n    bouncy: {\n        type: \"spring\",\n        damping: 10,\n        mass: 0.9,\n        stiffness: 100\n    },\n    lazy: {\n        type: \"spring\",\n        damping: 20,\n        stiffness: 60\n    },\n    quick: {\n        type: \"spring\",\n        damping: 20,\n        mass: 1.2,\n        stiffness: 250\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvdWkvc3JjL2FuaW1hdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1FO0FBRTVELE1BQU1DLGFBQWFELGtGQUFnQkEsQ0FBQztJQUN6Q0UsUUFBUTtRQUNOQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsTUFBTTtRQUNOQyxXQUFXO0lBQ2I7SUFDQUMsTUFBTTtRQUNKSixNQUFNO1FBQ05DLFNBQVM7UUFDVEUsV0FBVztJQUNiO0lBQ0FFLE9BQU87UUFDTEwsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsV0FBVztJQUNiO0FBQ0YsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uLi8uLi9wYWNrYWdlcy91aS9zcmMvYW5pbWF0aW9ucy50cz8yYjc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFuaW1hdGlvbnMgfSBmcm9tICdAdGFtYWd1aS9hbmltYXRpb25zLXJlYWN0LW5hdGl2ZSdcblxuZXhwb3J0IGNvbnN0IGFuaW1hdGlvbnMgPSBjcmVhdGVBbmltYXRpb25zKHtcbiAgYm91bmN5OiB7XG4gICAgdHlwZTogJ3NwcmluZycsXG4gICAgZGFtcGluZzogMTAsXG4gICAgbWFzczogMC45LFxuICAgIHN0aWZmbmVzczogMTAwLFxuICB9LFxuICBsYXp5OiB7XG4gICAgdHlwZTogJ3NwcmluZycsXG4gICAgZGFtcGluZzogMjAsXG4gICAgc3RpZmZuZXNzOiA2MCxcbiAgfSxcbiAgcXVpY2s6IHtcbiAgICB0eXBlOiAnc3ByaW5nJyxcbiAgICBkYW1waW5nOiAyMCxcbiAgICBtYXNzOiAxLjIsXG4gICAgc3RpZmZuZXNzOiAyNTAsXG4gIH0sXG59KVxuIl0sIm5hbWVzIjpbImNyZWF0ZUFuaW1hdGlvbnMiLCJhbmltYXRpb25zIiwiYm91bmN5IiwidHlwZSIsImRhbXBpbmciLCJtYXNzIiwic3RpZmZuZXNzIiwibGF6eSIsInF1aWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../packages/ui/src/animations.ts\n");

/***/ }),

/***/ "../../packages/ui/src/index.tsx":
/*!***************************************!*\
  !*** ../../packages/ui/src/index.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* reexport safe */ _tamagui_config__WEBPACK_IMPORTED_MODULE_2__.config)\n/* harmony export */ });\n/* harmony import */ var tamagui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tamagui */ \"../../node_modules/tamagui/dist/esm/index.js\");\n/* harmony import */ var _MyComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyComponent */ \"../../packages/ui/src/MyComponent.tsx\");\n/* harmony import */ var _tamagui_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tamagui.config */ \"../../packages/ui/src/tamagui.config.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([tamagui__WEBPACK_IMPORTED_MODULE_0__, _MyComponent__WEBPACK_IMPORTED_MODULE_1__, _tamagui_config__WEBPACK_IMPORTED_MODULE_2__]);\n([tamagui__WEBPACK_IMPORTED_MODULE_0__, _MyComponent__WEBPACK_IMPORTED_MODULE_1__, _tamagui_config__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in tamagui__WEBPACK_IMPORTED_MODULE_0__) if([\"default\",\"config\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => tamagui__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _MyComponent__WEBPACK_IMPORTED_MODULE_1__) if([\"default\",\"config\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _MyComponent__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvdWkvc3JjL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ007QUFDWSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uLi8uLi9wYWNrYWdlcy91aS9zcmMvaW5kZXgudHN4P2QwODAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAndGFtYWd1aSdcbmV4cG9ydCAqIGZyb20gJy4vTXlDb21wb25lbnQnXG5leHBvcnQgeyBjb25maWcgfSBmcm9tICcuL3RhbWFndWkuY29uZmlnJ1xuIl0sIm5hbWVzIjpbImNvbmZpZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../packages/ui/src/index.tsx\n");

/***/ }),

/***/ "../../packages/ui/src/mytheme.ts":
/*!****************************************!*\
  !*** ../../packages/ui/src/mytheme.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   themes: () => (/* binding */ themes)\n/* harmony export */ });\nconst light = {\n    background: \"#FFFDEF\",\n    backgroundHover: \"#76714A9E\",\n    backgroundPress: \"#918a50\",\n    backgroundFocus: \"#76714A9E\",\n    backgroundLight: \"#76714A28\",\n    borderColor: \"#83503C\",\n    borderColorHover: \"#b87d65\",\n    borderColorPress: \"#83503C\",\n    borderColorFocus: \"#83503C\",\n    placeholderColor: \"#0A0C08\",\n    color: \"#121610\",\n    colorHover: \"#3A4733\",\n    colorPress: \"#272F22\",\n    colorFocus: \"#0A0C08\",\n    shadowColor: \"#0A0C08\",\n    shadowColorHover: \"#121610\",\n    color1: \"#121610\",\n    color2: \"#121610\",\n    color3: \"hsl(0, 0%, 95.1%)\",\n    color4: \"hsl(0, 0%, 93.0%)\",\n    color5: \"hsl(0, 0%, 90.9%)\",\n    color6: \"hsl(0, 0%, 88.7%)\",\n    color7: \"hsl(0, 0%, 85.8%)\",\n    color8: \"hsl(0, 0%, 78.0%)\",\n    color9: \"hsl(0, 0%, 56.1%)\",\n    color10: \"hsl(0, 0%, 52.3%)\",\n    color11: \"hsl(0, 0%, 43.5%)\",\n    color12: \"hsl(0, 0%, 9.0%)\"\n};\nconst dark = {\n    background: \"#FFFDEF\",\n    backgroundHover: \"#76714A9E\",\n    backgroundPress: \"#918a50\",\n    backgroundFocus: \"#76714A9E\",\n    backgroundLight: \"#76714A28\",\n    borderColor: \"#83503C\",\n    borderColorHover: \"#b87d65\",\n    borderColorPress: \"#83503C\",\n    borderColorFocus: \"#83503C\",\n    placeholderColor: \"#0A0C08\",\n    color: \"#121610\",\n    colorHover: \"#3A4733\",\n    colorPress: \"#272F22\",\n    colorFocus: \"#0A0C08\",\n    shadowColor: \"#0A0C08\",\n    shadowColorHover: \"#121610\",\n    color1: \"#121610\",\n    color2: \"#121610\",\n    color3: \"hsl(0, 0%, 95.1%)\",\n    color4: \"hsl(0, 0%, 93.0%)\",\n    color5: \"hsl(0, 0%, 90.9%)\",\n    color6: \"hsl(0, 0%, 88.7%)\",\n    color7: \"hsl(0, 0%, 85.8%)\",\n    color8: \"hsl(0, 0%, 78.0%)\",\n    color9: \"hsl(0, 0%, 56.1%)\",\n    color10: \"hsl(0, 0%, 52.3%)\",\n    color11: \"hsl(0, 0%, 43.5%)\",\n    color12: \"hsl(0, 0%, 9.0%)\"\n};\nconst allThemes = {\n    dark,\n    light\n};\n// 4. finally, export it with the stricter type\nconst themes = allThemes;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvdWkvc3JjL215dGhlbWUudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE1BQU1BLFFBQVE7SUFFWkMsWUFBWTtJQUNaQyxpQkFBaUI7SUFDakJDLGlCQUFpQjtJQUNqQkMsaUJBQWlCO0lBQ2pCQyxpQkFBaUI7SUFDakJDLGFBQWE7SUFDYkMsa0JBQWtCO0lBQ2xCQyxrQkFBa0I7SUFDbEJDLGtCQUFrQjtJQUNsQkMsa0JBQWtCO0lBQ2xCQyxPQUFPO0lBQ1BDLFlBQVk7SUFDWkMsWUFBWTtJQUNaQyxZQUFZO0lBQ1pDLGFBQWE7SUFDYkMsa0JBQWtCO0lBQ2xCQyxRQUFRO0lBQ1JDLFFBQVE7SUFDUkMsUUFBUTtJQUNSQyxRQUFRO0lBQ1JDLFFBQVE7SUFDUkMsUUFBUTtJQUNSQyxRQUFRO0lBQ1JDLFFBQVE7SUFDUkMsUUFBUTtJQUNSQyxTQUFTO0lBQ1RDLFNBQVM7SUFDVEMsU0FBUztBQUNYO0FBSUEsTUFBTUMsT0FBa0I7SUFDdEI1QixZQUFZO0lBQ1pDLGlCQUFpQjtJQUNqQkMsaUJBQWlCO0lBQ2pCQyxpQkFBaUI7SUFDakJDLGlCQUFpQjtJQUNqQkMsYUFBYTtJQUNiQyxrQkFBa0I7SUFDbEJDLGtCQUFrQjtJQUNsQkMsa0JBQWtCO0lBQ2xCQyxrQkFBa0I7SUFDbEJDLE9BQU87SUFDUEMsWUFBWTtJQUNaQyxZQUFZO0lBQ1pDLFlBQVk7SUFDWkMsYUFBYTtJQUNiQyxrQkFBa0I7SUFDbEJDLFFBQVE7SUFDUkMsUUFBUTtJQUNSQyxRQUFRO0lBQ1JDLFFBQVE7SUFDUkMsUUFBUTtJQUNSQyxRQUFRO0lBQ1JDLFFBQVE7SUFDUkMsUUFBUTtJQUNSQyxRQUFRO0lBQ1JDLFNBQVM7SUFDVEMsU0FBUztJQUNUQyxTQUFTO0FBQ1g7QUFFQSxNQUFNRSxZQUFZO0lBQ2hCRDtJQUNBN0I7QUFDRjtBQVNBLCtDQUErQztBQUV4QyxNQUFNK0IsU0FBaUJELFVBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi4vLi4vcGFja2FnZXMvdWkvc3JjL215dGhlbWUudHM/MzUzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgbGlnaHQgPSB7XHJcblxyXG4gIGJhY2tncm91bmQ6ICcjRkZGREVGJywgLy8gZGVmYXVsdCBiYWNrZ3JvdW5kIGxpZ2h0XHJcbiAgYmFja2dyb3VuZEhvdmVyOiAnIzc2NzE0QTlFJyxcclxuICBiYWNrZ3JvdW5kUHJlc3M6ICcjOTE4YTUwJyxcclxuICBiYWNrZ3JvdW5kRm9jdXM6ICcjNzY3MTRBOUUnLFxyXG4gIGJhY2tncm91bmRMaWdodDogJyM3NjcxNEEyOCcsXHJcbiAgYm9yZGVyQ29sb3I6ICcjODM1MDNDJyxcclxuICBib3JkZXJDb2xvckhvdmVyOiAnI2I4N2Q2NScsXHJcbiAgYm9yZGVyQ29sb3JQcmVzczogJyM4MzUwM0MnLFxyXG4gIGJvcmRlckNvbG9yRm9jdXM6ICcjODM1MDNDJyxcclxuICBwbGFjZWhvbGRlckNvbG9yOiAnIzBBMEMwOCcsXHJcbiAgY29sb3I6ICcjMTIxNjEwJyxcclxuICBjb2xvckhvdmVyOiAnIzNBNDczMycsXHJcbiAgY29sb3JQcmVzczogJyMyNzJGMjInLFxyXG4gIGNvbG9yRm9jdXM6ICcjMEEwQzA4JyxcclxuICBzaGFkb3dDb2xvcjogJyMwQTBDMDgnLFxyXG4gIHNoYWRvd0NvbG9ySG92ZXI6ICcjMTIxNjEwJyxcclxuICBjb2xvcjE6ICcjMTIxNjEwJyxcclxuICBjb2xvcjI6ICcjMTIxNjEwJywgXHJcbiAgY29sb3IzOiAnaHNsKDAsIDAlLCA5NS4xJSknLFxyXG4gIGNvbG9yNDogJ2hzbCgwLCAwJSwgOTMuMCUpJyxcclxuICBjb2xvcjU6ICdoc2woMCwgMCUsIDkwLjklKScsXHJcbiAgY29sb3I2OiAnaHNsKDAsIDAlLCA4OC43JSknLFxyXG4gIGNvbG9yNzogJ2hzbCgwLCAwJSwgODUuOCUpJyxcclxuICBjb2xvcjg6ICdoc2woMCwgMCUsIDc4LjAlKScsXHJcbiAgY29sb3I5OiAnaHNsKDAsIDAlLCA1Ni4xJSknLFxyXG4gIGNvbG9yMTA6ICdoc2woMCwgMCUsIDUyLjMlKScsXHJcbiAgY29sb3IxMTogJ2hzbCgwLCAwJSwgNDMuNSUpJyxcclxuICBjb2xvcjEyOiAnaHNsKDAsIDAlLCA5LjAlKScsXHJcbn1cclxuXHJcbnR5cGUgQmFzZVRoZW1lID0gdHlwZW9mIGxpZ2h0XHJcblxyXG5jb25zdCBkYXJrOiBCYXNlVGhlbWUgPSB7XHJcbiAgYmFja2dyb3VuZDogJyNGRkZERUYnLCAvLyBkZWZhdWx0IGJhY2tncm91bmQgbGlnaHRcclxuICBiYWNrZ3JvdW5kSG92ZXI6ICcjNzY3MTRBOUUnLFxyXG4gIGJhY2tncm91bmRQcmVzczogJyM5MThhNTAnLFxyXG4gIGJhY2tncm91bmRGb2N1czogJyM3NjcxNEE5RScsXHJcbiAgYmFja2dyb3VuZExpZ2h0OiAnIzc2NzE0QTI4JyxcclxuICBib3JkZXJDb2xvcjogJyM4MzUwM0MnLFxyXG4gIGJvcmRlckNvbG9ySG92ZXI6ICcjYjg3ZDY1JyxcclxuICBib3JkZXJDb2xvclByZXNzOiAnIzgzNTAzQycsXHJcbiAgYm9yZGVyQ29sb3JGb2N1czogJyM4MzUwM0MnLFxyXG4gIHBsYWNlaG9sZGVyQ29sb3I6ICcjMEEwQzA4JyxcclxuICBjb2xvcjogJyMxMjE2MTAnLFxyXG4gIGNvbG9ySG92ZXI6ICcjM0E0NzMzJyxcclxuICBjb2xvclByZXNzOiAnIzI3MkYyMicsXHJcbiAgY29sb3JGb2N1czogJyMwQTBDMDgnLFxyXG4gIHNoYWRvd0NvbG9yOiAnIzBBMEMwOCcsXHJcbiAgc2hhZG93Q29sb3JIb3ZlcjogJyMxMjE2MTAnLFxyXG4gIGNvbG9yMTogJyMxMjE2MTAnLFxyXG4gIGNvbG9yMjogJyMxMjE2MTAnLCBcclxuICBjb2xvcjM6ICdoc2woMCwgMCUsIDk1LjElKScsXHJcbiAgY29sb3I0OiAnaHNsKDAsIDAlLCA5My4wJSknLFxyXG4gIGNvbG9yNTogJ2hzbCgwLCAwJSwgOTAuOSUpJyxcclxuICBjb2xvcjY6ICdoc2woMCwgMCUsIDg4LjclKScsXHJcbiAgY29sb3I3OiAnaHNsKDAsIDAlLCA4NS44JSknLFxyXG4gIGNvbG9yODogJ2hzbCgwLCAwJSwgNzguMCUpJyxcclxuICBjb2xvcjk6ICdoc2woMCwgMCUsIDU2LjElKScsXHJcbiAgY29sb3IxMDogJ2hzbCgwLCAwJSwgNTIuMyUpJyxcclxuICBjb2xvcjExOiAnaHNsKDAsIDAlLCA0My41JSknLFxyXG4gIGNvbG9yMTI6ICdoc2woMCwgMCUsIDkuMCUpJyxcclxufVxyXG5cclxuY29uc3QgYWxsVGhlbWVzID0ge1xyXG4gIGRhcmssXHJcbiAgbGlnaHRcclxufVxyXG5cclxudHlwZSBUaGVtZU5hbWUgPSBrZXlvZiB0eXBlb2YgYWxsVGhlbWVzXHJcblxyXG50eXBlIFRoZW1lcyA9IHtcclxuXHJcbiAgW2tleSBpbiBUaGVtZU5hbWVdOiBCYXNlVGhlbWVcclxuXHJcbn1cclxuLy8gNC4gZmluYWxseSwgZXhwb3J0IGl0IHdpdGggdGhlIHN0cmljdGVyIHR5cGVcclxuXHJcbmV4cG9ydCBjb25zdCB0aGVtZXM6IFRoZW1lcyA9IGFsbFRoZW1lc1xyXG4iXSwibmFtZXMiOlsibGlnaHQiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZEhvdmVyIiwiYmFja2dyb3VuZFByZXNzIiwiYmFja2dyb3VuZEZvY3VzIiwiYmFja2dyb3VuZExpZ2h0IiwiYm9yZGVyQ29sb3IiLCJib3JkZXJDb2xvckhvdmVyIiwiYm9yZGVyQ29sb3JQcmVzcyIsImJvcmRlckNvbG9yRm9jdXMiLCJwbGFjZWhvbGRlckNvbG9yIiwiY29sb3IiLCJjb2xvckhvdmVyIiwiY29sb3JQcmVzcyIsImNvbG9yRm9jdXMiLCJzaGFkb3dDb2xvciIsInNoYWRvd0NvbG9ySG92ZXIiLCJjb2xvcjEiLCJjb2xvcjIiLCJjb2xvcjMiLCJjb2xvcjQiLCJjb2xvcjUiLCJjb2xvcjYiLCJjb2xvcjciLCJjb2xvcjgiLCJjb2xvcjkiLCJjb2xvcjEwIiwiY29sb3IxMSIsImNvbG9yMTIiLCJkYXJrIiwiYWxsVGhlbWVzIiwidGhlbWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../packages/ui/src/mytheme.ts\n");

/***/ }),

/***/ "../../packages/ui/src/tamagui.config.ts":
/*!***********************************************!*\
  !*** ../../packages/ui/src/tamagui.config.ts ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var tamagui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tamagui */ \"../../node_modules/tamagui/dist/esm/index.js\");\n/* harmony import */ var _tamagui_shorthands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tamagui/shorthands */ \"../../node_modules/@tamagui/shorthands/dist/esm/index.js\");\n/* harmony import */ var _tamagui_react_native_media_driver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tamagui/react-native-media-driver */ \"../../node_modules/@tamagui/react-native-media-driver/dist/cjs/index.js\");\n/* harmony import */ var _tamagui_react_native_media_driver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tamagui_react_native_media_driver__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mytheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mytheme */ \"../../packages/ui/src/mytheme.ts\");\n/* harmony import */ var _themes_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./themes/tokens */ \"../../packages/ui/src/themes/tokens.tsx\");\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ \"../../packages/ui/src/animations.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([tamagui__WEBPACK_IMPORTED_MODULE_2__]);\ntamagui__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst headingVosqueFont = (0,tamagui__WEBPACK_IMPORTED_MODULE_2__.createFont)({\n    family: \"VosqueStyleH\",\n    size: {\n        6: 13\n    },\n    lineHeight: {\n        6: 20\n    },\n    weight: {\n        6: \"700\"\n    },\n    letterSpacing: {\n        6: 1\n    },\n    face: {\n        700: {\n            normal: \"Montserrat-Bold\"\n        }\n    }\n});\nconst bodyVosqueFont = (0,tamagui__WEBPACK_IMPORTED_MODULE_2__.createFont)({\n    family: \"VosqueStyleB\",\n    size: {\n        1: 16,\n        2: 14,\n        3: 12,\n        4: 10,\n        5: 8,\n        6: 6,\n        true: 16\n    },\n    lineHeight: {\n        1: 18,\n        2: 16,\n        3: 14,\n        4: 12,\n        5: 10,\n        6: 8\n    },\n    weight: {\n        1: \"400\",\n        2: \"400\",\n        3: \"400\",\n        4: \"400\",\n        5: \"400\",\n        6: \"400\"\n    },\n    letterSpacing: {\n        1: -0.5,\n        2: -0.5,\n        3: -0.5,\n        4: -0.5,\n        5: -0.5,\n        6: -0.5\n    },\n    face: {\n        400: {\n            normal: \"NotoSans-Medium\"\n        }\n    }\n});\nconst bodyBoldVosqueFont = (0,tamagui__WEBPACK_IMPORTED_MODULE_2__.createFont)({\n    family: \"VosqueStyleBBold\",\n    size: {\n        1: 16,\n        2: 14,\n        3: 12,\n        4: 10,\n        5: 8,\n        6: 6,\n        true: 16\n    },\n    lineHeight: {\n        1: 18,\n        2: 16,\n        3: 14,\n        4: 12,\n        5: 10,\n        6: 8\n    },\n    weight: {\n        1: \"400\",\n        2: \"400\",\n        3: \"400\",\n        4: \"400\",\n        5: \"400\",\n        6: \"400\"\n    },\n    letterSpacing: {\n        1: -0.5,\n        2: -0.5,\n        3: -0.5,\n        4: -0.5,\n        5: -0.5,\n        6: -0.5\n    },\n    face: {\n        400: {\n            normal: \"NotoSans-Bold\"\n        }\n    }\n});\nconst hackVosqueFont = (0,tamagui__WEBPACK_IMPORTED_MODULE_2__.createFont)({\n    family: \"VosqueStyleHack\",\n    size: {\n        1: 16,\n        2: 14,\n        3: 12,\n        4: 10,\n        5: 8,\n        6: 6,\n        true: 16\n    },\n    lineHeight: {\n        1: 18,\n        2: 16,\n        3: 14,\n        4: 12,\n        5: 10,\n        6: 8\n    },\n    weight: {\n        1: \"400\",\n        2: \"400\",\n        3: \"400\",\n        4: \"400\",\n        5: \"400\",\n        6: \"400\"\n    },\n    letterSpacing: {\n        1: -0.5,\n        2: -0.5,\n        3: -0.5,\n        4: -0.5,\n        5: -0.5,\n        6: -0.5\n    },\n    face: {\n        400: {\n            normal: \"Montserrat-MediumItalic\"\n        }\n    }\n});\nconst config = (0,tamagui__WEBPACK_IMPORTED_MODULE_2__.createTamagui)({\n    animations: _animations__WEBPACK_IMPORTED_MODULE_3__.animations,\n    shouldAddPrefersColorThemes: true,\n    themeClassNameOnRoot: true,\n    shorthands: _tamagui_shorthands__WEBPACK_IMPORTED_MODULE_0__.shorthands,\n    tokens: _themes_tokens__WEBPACK_IMPORTED_MODULE_4__.tokens,\n    fonts: {\n        heading: headingVosqueFont,\n        body: bodyVosqueFont,\n        hack: hackVosqueFont,\n        bodyBold: bodyBoldVosqueFont\n    },\n    themes: _mytheme__WEBPACK_IMPORTED_MODULE_5__.themes,\n    media: (0,_tamagui_react_native_media_driver__WEBPACK_IMPORTED_MODULE_1__.createMedia)({\n        xs: {\n            maxWidth: 660\n        },\n        sm: {\n            maxWidth: 800\n        },\n        md: {\n            maxWidth: 1020\n        },\n        lg: {\n            maxWidth: 1280\n        },\n        xl: {\n            maxWidth: 1420\n        },\n        xxl: {\n            maxWidth: 1600\n        },\n        gtXs: {\n            minWidth: 660 + 1\n        },\n        gtSm: {\n            minWidth: 800 + 1\n        },\n        gtMd: {\n            minWidth: 1020 + 1\n        },\n        gtLg: {\n            minWidth: 1280 + 1\n        },\n        short: {\n            maxHeight: 820\n        },\n        tall: {\n            minHeight: 820\n        },\n        hoverNone: {\n            hover: \"none\"\n        },\n        pointerCoarse: {\n            pointer: \"coarse\"\n        }\n    })\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvdWkvc3JjL3RhbWFndWkuY29uZmlnLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtFO0FBQ2pCO0FBQ2dCO0FBQzlCO0FBQ007QUFFQTtBQUV6QyxNQUFNTyxvQkFBb0JOLG1EQUFVQSxDQUFDO0lBQ25DTyxRQUFRO0lBQ1JDLE1BQU07UUFDSixHQUFHO0lBQ0w7SUFDQUMsWUFBWTtRQUNWLEdBQUc7SUFDTDtJQUNBQyxRQUFRO1FBQ04sR0FBRztJQUNMO0lBQ0FDLGVBQWU7UUFDYixHQUFHO0lBQ0w7SUFDQUMsTUFBTTtRQUNKLEtBQUs7WUFBRUMsUUFBUTtRQUFrQjtJQUNuQztBQUNGO0FBRUEsTUFBTUMsaUJBQWlCZCxtREFBVUEsQ0FBQztJQUNoQ08sUUFBUTtJQUNSQyxNQUFNO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0hPLE1BQU07SUFDUjtJQUNBTixZQUFZO1FBQ1YsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0lBQ0w7SUFDQUMsUUFBUTtRQUNOLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztJQUNMO0lBQ0FDLGVBQWU7UUFDYixHQUFHLENBQUM7UUFDSixHQUFHLENBQUM7UUFDSixHQUFHLENBQUM7UUFDSixHQUFHLENBQUM7UUFDSixHQUFHLENBQUM7UUFDSixHQUFHLENBQUM7SUFDTjtJQUNBQyxNQUFNO1FBQ0osS0FBSztZQUFFQyxRQUFRO1FBQWtCO0lBQ25DO0FBQ0Y7QUFFQSxNQUFNRyxxQkFBcUJoQixtREFBVUEsQ0FBQztJQUNwQ08sUUFBUTtJQUNSQyxNQUFNO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0hPLE1BQU07SUFDUjtJQUNBTixZQUFZO1FBQ1YsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0lBQ0w7SUFDQUMsUUFBUTtRQUNOLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztJQUNMO0lBQ0FDLGVBQWU7UUFDYixHQUFHLENBQUM7UUFDSixHQUFHLENBQUM7UUFDSixHQUFHLENBQUM7UUFDSixHQUFHLENBQUM7UUFDSixHQUFHLENBQUM7UUFDSixHQUFHLENBQUM7SUFDTjtJQUNBQyxNQUFNO1FBQ0osS0FBSztZQUFFQyxRQUFRO1FBQWdCO0lBQ2pDO0FBQ0Y7QUFFQSxNQUFNSSxpQkFBaUJqQixtREFBVUEsQ0FBQztJQUNoQ08sUUFBUTtJQUNSQyxNQUFNO1FBQ0osR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0hPLE1BQU07SUFDUjtJQUNBTixZQUFZO1FBQ1YsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0lBQ0w7SUFDQUMsUUFBUTtRQUNOLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztJQUNMO0lBQ0FDLGVBQWU7UUFDYixHQUFHLENBQUM7UUFDSixHQUFHLENBQUM7UUFDSixHQUFHLENBQUM7UUFDSixHQUFHLENBQUM7UUFDSixHQUFHLENBQUM7UUFDSixHQUFHLENBQUM7SUFDTjtJQUNBQyxNQUFNO1FBQ0osS0FBSztZQUFFQyxRQUFRO1FBQTBCO0lBQzNDO0FBQ0Y7QUFJTyxNQUFNSyxTQUFTbkIsc0RBQWFBLENBQUM7SUFDbENNLFVBQVVBLHFEQUFBQTtJQUNWYyw2QkFBNkI7SUFDN0JDLHNCQUFzQjtJQUN0Qm5CLFVBQVVBLDZEQUFBQTtJQUNWRyxNQUFNQSxvREFBQUE7SUFDTmlCLE9BQU87UUFDTEMsU0FBU2hCO1FBQ1RpQixNQUFNVDtRQUNOVSxNQUFNUDtRQUNOUSxVQUFVVDtJQUNaO0lBQ0FiLE1BQU1BLDhDQUFBQTtJQUNOdUIsT0FBT3hCLCtFQUFXQSxDQUFDO1FBQ2pCeUIsSUFBSTtZQUFFQyxVQUFVO1FBQUk7UUFDcEJDLElBQUk7WUFBRUQsVUFBVTtRQUFJO1FBQ3BCRSxJQUFJO1lBQUVGLFVBQVU7UUFBSztRQUNyQkcsSUFBSTtZQUFFSCxVQUFVO1FBQUs7UUFDckJJLElBQUk7WUFBRUosVUFBVTtRQUFLO1FBQ3JCSyxLQUFLO1lBQUVMLFVBQVU7UUFBSztRQUN0Qk0sTUFBTTtZQUFFQyxVQUFVLE1BQU07UUFBRTtRQUMxQkMsTUFBTTtZQUFFRCxVQUFVLE1BQU07UUFBRTtRQUMxQkUsTUFBTTtZQUFFRixVQUFVLE9BQU87UUFBRTtRQUMzQkcsTUFBTTtZQUFFSCxVQUFVLE9BQU87UUFBRTtRQUMzQkksT0FBTztZQUFFQyxXQUFXO1FBQUk7UUFDeEJDLE1BQU07WUFBRUMsV0FBVztRQUFJO1FBQ3ZCQyxXQUFXO1lBQUVDLE9BQU87UUFBTztRQUMzQkMsZUFBZTtZQUFFQyxTQUFTO1FBQVM7SUFDckM7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4uLy4uL3BhY2thZ2VzL3VpL3NyYy90YW1hZ3VpLmNvbmZpZy50cz83OGEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRhbWFndWksIGNyZWF0ZUZvbnQsIGNyZWF0ZVRva2VucyB9IGZyb20gJ3RhbWFndWknO1xuaW1wb3J0IHsgc2hvcnRoYW5kcyB9IGZyb20gJ0B0YW1hZ3VpL3Nob3J0aGFuZHMnO1xuaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAdGFtYWd1aS9yZWFjdC1uYXRpdmUtbWVkaWEtZHJpdmVyJztcbmltcG9ydCB7IHRoZW1lcyB9IGZyb20gJy4vbXl0aGVtZSc7XG5pbXBvcnQgeyB0b2tlbnMgfSBmcm9tICcuL3RoZW1lcy90b2tlbnMnO1xuXG5pbXBvcnQgeyBhbmltYXRpb25zIH0gZnJvbSAnLi9hbmltYXRpb25zJ1xuXG5jb25zdCBoZWFkaW5nVm9zcXVlRm9udCA9IGNyZWF0ZUZvbnQoe1xuICBmYW1pbHk6ICdWb3NxdWVTdHlsZUgnLFxuICBzaXplOiB7XG4gICAgNjogMTMsXG4gIH0sXG4gIGxpbmVIZWlnaHQ6IHtcbiAgICA2OiAyMCxcbiAgfSxcbiAgd2VpZ2h0OiB7XG4gICAgNjogJzcwMCcsXG4gIH0sXG4gIGxldHRlclNwYWNpbmc6IHtcbiAgICA2OiAxLFxuICB9LFxuICBmYWNlOiB7XG4gICAgNzAwOiB7IG5vcm1hbDogJ01vbnRzZXJyYXQtQm9sZCcgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBib2R5Vm9zcXVlRm9udCA9IGNyZWF0ZUZvbnQoe1xuICBmYW1pbHk6ICdWb3NxdWVTdHlsZUInLFxuICBzaXplOiB7XG4gICAgMTogMTYsXG4gICAgMjogMTQsXG4gICAgMzogMTIsXG4gICAgNDogMTAsXG4gICAgNTogOCxcbiAgICA2OiA2LFxuICAgIHRydWU6IDE2LFxuICB9LFxuICBsaW5lSGVpZ2h0OiB7XG4gICAgMTogMTgsXG4gICAgMjogMTYsXG4gICAgMzogMTQsXG4gICAgNDogMTIsXG4gICAgNTogMTAsXG4gICAgNjogOCxcbiAgfSxcbiAgd2VpZ2h0OiB7XG4gICAgMTogJzQwMCcsXG4gICAgMjogJzQwMCcsXG4gICAgMzogJzQwMCcsXG4gICAgNDogJzQwMCcsXG4gICAgNTogJzQwMCcsXG4gICAgNjogJzQwMCcsXG4gIH0sXG4gIGxldHRlclNwYWNpbmc6IHtcbiAgICAxOiAtMC41LFxuICAgIDI6IC0wLjUsXG4gICAgMzogLTAuNSxcbiAgICA0OiAtMC41LFxuICAgIDU6IC0wLjUsXG4gICAgNjogLTAuNSxcbiAgfSxcbiAgZmFjZToge1xuICAgIDQwMDogeyBub3JtYWw6ICdOb3RvU2Fucy1NZWRpdW0nIH0sXG4gIH0sXG59KTtcblxuY29uc3QgYm9keUJvbGRWb3NxdWVGb250ID0gY3JlYXRlRm9udCh7XG4gIGZhbWlseTogJ1Zvc3F1ZVN0eWxlQkJvbGQnLFxuICBzaXplOiB7XG4gICAgMTogMTYsXG4gICAgMjogMTQsXG4gICAgMzogMTIsXG4gICAgNDogMTAsXG4gICAgNTogOCxcbiAgICA2OiA2LFxuICAgIHRydWU6IDE2LFxuICB9LFxuICBsaW5lSGVpZ2h0OiB7XG4gICAgMTogMTgsXG4gICAgMjogMTYsXG4gICAgMzogMTQsXG4gICAgNDogMTIsXG4gICAgNTogMTAsXG4gICAgNjogOCxcbiAgfSxcbiAgd2VpZ2h0OiB7XG4gICAgMTogJzQwMCcsXG4gICAgMjogJzQwMCcsXG4gICAgMzogJzQwMCcsXG4gICAgNDogJzQwMCcsXG4gICAgNTogJzQwMCcsXG4gICAgNjogJzQwMCcsXG4gIH0sXG4gIGxldHRlclNwYWNpbmc6IHtcbiAgICAxOiAtMC41LFxuICAgIDI6IC0wLjUsXG4gICAgMzogLTAuNSxcbiAgICA0OiAtMC41LFxuICAgIDU6IC0wLjUsXG4gICAgNjogLTAuNSxcbiAgfSxcbiAgZmFjZToge1xuICAgIDQwMDogeyBub3JtYWw6ICdOb3RvU2Fucy1Cb2xkJyB9LFxuICB9LFxufSk7XG5cbmNvbnN0IGhhY2tWb3NxdWVGb250ID0gY3JlYXRlRm9udCh7XG4gIGZhbWlseTogJ1Zvc3F1ZVN0eWxlSGFjaycsXG4gIHNpemU6IHtcbiAgICAxOiAxNixcbiAgICAyOiAxNCxcbiAgICAzOiAxMixcbiAgICA0OiAxMCxcbiAgICA1OiA4LFxuICAgIDY6IDYsXG4gICAgdHJ1ZTogMTYsXG4gIH0sXG4gIGxpbmVIZWlnaHQ6IHtcbiAgICAxOiAxOCxcbiAgICAyOiAxNixcbiAgICAzOiAxNCxcbiAgICA0OiAxMixcbiAgICA1OiAxMCxcbiAgICA2OiA4LFxuICB9LFxuICB3ZWlnaHQ6IHtcbiAgICAxOiAnNDAwJyxcbiAgICAyOiAnNDAwJyxcbiAgICAzOiAnNDAwJyxcbiAgICA0OiAnNDAwJyxcbiAgICA1OiAnNDAwJyxcbiAgICA2OiAnNDAwJyxcbiAgfSxcbiAgbGV0dGVyU3BhY2luZzoge1xuICAgIDE6IC0wLjUsXG4gICAgMjogLTAuNSxcbiAgICAzOiAtMC41LFxuICAgIDQ6IC0wLjUsXG4gICAgNTogLTAuNSxcbiAgICA2OiAtMC41LFxuICB9LFxuICBmYWNlOiB7XG4gICAgNDAwOiB7IG5vcm1hbDogJ01vbnRzZXJyYXQtTWVkaXVtSXRhbGljJyB9LFxuICB9LFxufSk7XG5cblxuXG5leHBvcnQgY29uc3QgY29uZmlnID0gY3JlYXRlVGFtYWd1aSh7XG4gIGFuaW1hdGlvbnMsXG4gIHNob3VsZEFkZFByZWZlcnNDb2xvclRoZW1lczogdHJ1ZSxcbiAgdGhlbWVDbGFzc05hbWVPblJvb3Q6IHRydWUsXG4gIHNob3J0aGFuZHMsXG4gIHRva2VucyxcbiAgZm9udHM6IHtcbiAgICBoZWFkaW5nOiBoZWFkaW5nVm9zcXVlRm9udCxcbiAgICBib2R5OiBib2R5Vm9zcXVlRm9udCxcbiAgICBoYWNrOiBoYWNrVm9zcXVlRm9udCxcbiAgICBib2R5Qm9sZDogYm9keUJvbGRWb3NxdWVGb250LFxuICB9LFxuICB0aGVtZXMsXG4gIG1lZGlhOiBjcmVhdGVNZWRpYSh7XG4gICAgeHM6IHsgbWF4V2lkdGg6IDY2MCB9LFxuICAgIHNtOiB7IG1heFdpZHRoOiA4MDAgfSxcbiAgICBtZDogeyBtYXhXaWR0aDogMTAyMCB9LFxuICAgIGxnOiB7IG1heFdpZHRoOiAxMjgwIH0sXG4gICAgeGw6IHsgbWF4V2lkdGg6IDE0MjAgfSxcbiAgICB4eGw6IHsgbWF4V2lkdGg6IDE2MDAgfSxcbiAgICBndFhzOiB7IG1pbldpZHRoOiA2NjAgKyAxIH0sXG4gICAgZ3RTbTogeyBtaW5XaWR0aDogODAwICsgMSB9LFxuICAgIGd0TWQ6IHsgbWluV2lkdGg6IDEwMjAgKyAxIH0sXG4gICAgZ3RMZzogeyBtaW5XaWR0aDogMTI4MCArIDEgfSxcbiAgICBzaG9ydDogeyBtYXhIZWlnaHQ6IDgyMCB9LFxuICAgIHRhbGw6IHsgbWluSGVpZ2h0OiA4MjAgfSxcbiAgICBob3Zlck5vbmU6IHsgaG92ZXI6ICdub25lJyB9LFxuICAgIHBvaW50ZXJDb2Fyc2U6IHsgcG9pbnRlcjogJ2NvYXJzZScgfSxcbiAgfSksXG59KSJdLCJuYW1lcyI6WyJjcmVhdGVUYW1hZ3VpIiwiY3JlYXRlRm9udCIsInNob3J0aGFuZHMiLCJjcmVhdGVNZWRpYSIsInRoZW1lcyIsInRva2VucyIsImFuaW1hdGlvbnMiLCJoZWFkaW5nVm9zcXVlRm9udCIsImZhbWlseSIsInNpemUiLCJsaW5lSGVpZ2h0Iiwid2VpZ2h0IiwibGV0dGVyU3BhY2luZyIsImZhY2UiLCJub3JtYWwiLCJib2R5Vm9zcXVlRm9udCIsInRydWUiLCJib2R5Qm9sZFZvc3F1ZUZvbnQiLCJoYWNrVm9zcXVlRm9udCIsImNvbmZpZyIsInNob3VsZEFkZFByZWZlcnNDb2xvclRoZW1lcyIsInRoZW1lQ2xhc3NOYW1lT25Sb290IiwiZm9udHMiLCJoZWFkaW5nIiwiYm9keSIsImhhY2siLCJib2R5Qm9sZCIsIm1lZGlhIiwieHMiLCJtYXhXaWR0aCIsInNtIiwibWQiLCJsZyIsInhsIiwieHhsIiwiZ3RYcyIsIm1pbldpZHRoIiwiZ3RTbSIsImd0TWQiLCJndExnIiwic2hvcnQiLCJtYXhIZWlnaHQiLCJ0YWxsIiwibWluSGVpZ2h0IiwiaG92ZXJOb25lIiwiaG92ZXIiLCJwb2ludGVyQ29hcnNlIiwicG9pbnRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../packages/ui/src/tamagui.config.ts\n");

/***/ }),

/***/ "../../packages/ui/src/themes/tokens.tsx":
/*!***********************************************!*\
  !*** ../../packages/ui/src/themes/tokens.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   color: () => (/* binding */ color),\n/* harmony export */   colorTokens: () => (/* binding */ colorTokens),\n/* harmony export */   darkColors: () => (/* binding */ darkColors),\n/* harmony export */   lightColors: () => (/* binding */ lightColors),\n/* harmony export */   radius: () => (/* binding */ radius),\n/* harmony export */   size: () => (/* binding */ size),\n/* harmony export */   space: () => (/* binding */ space),\n/* harmony export */   tokens: () => (/* binding */ tokens),\n/* harmony export */   zIndex: () => (/* binding */ zIndex)\n/* harmony export */ });\n/* harmony import */ var _tamagui_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tamagui/colors */ \"../../node_modules/@tamagui/colors/dist/esm/index.js\");\n/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tamagui/core */ \"../../node_modules/@tamagui/core/dist/cjs/index.js\");\n/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tamagui_core__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// should roughly map to button/input etc height at each level\n// fonts should match that height/lineHeight at each stop\n// so these are really non-linear on purpose\n// why?\n//   - at sizes <1, used for fine grained things (borders, smallest paddingY)\n//     - so smallest padY should be roughly 1-4px so it can join with lineHeight\n//   - at sizes >=1, have to consider \"pressability\" (jumps up)\n//   - after that it should go upwards somewhat naturally\n//   - H1 / headings top out at 10 naturally, so after 10 we can go upwards faster\n//  but also one more wrinkle...\n//  space is used in conjunction with size\n//  i'm setting space to generally just a fixed fraction of size (~1/3-2/3 still fine tuning)\nconst size = {\n    $0: 0,\n    \"$0.25\": 2,\n    \"$0.5\": 4,\n    \"$0.75\": 8,\n    $1: 20,\n    \"$1.5\": 24,\n    $2: 28,\n    \"$2.5\": 32,\n    $3: 36,\n    \"$3.5\": 40,\n    $4: 44,\n    $true: 44,\n    \"$4.5\": 48,\n    $5: 52,\n    $6: 64,\n    $7: 74,\n    $8: 84,\n    $9: 94,\n    $10: 104,\n    $11: 124,\n    $12: 144,\n    $13: 164,\n    $14: 184,\n    $15: 204,\n    $16: 224,\n    $17: 224,\n    $18: 244,\n    $19: 264,\n    $20: 284\n};\nconst spaces = Object.entries(size).map(([k, v])=>{\n    return [\n        k,\n        sizeToSpace(v)\n    ];\n});\n// a bit odd but keeping backward compat for values >8 while fixing below\nfunction sizeToSpace(v) {\n    if (v === 0) return 0;\n    if (v === 2) return 0.5;\n    if (v === 4) return 1;\n    if (v === 8) return 1.5;\n    if (v <= 16) return Math.round(v * 0.333);\n    return Math.floor(v * 0.7 - 12);\n}\nconst spacesNegative = spaces.slice(1).map(([k, v])=>[\n        `-${k.slice(1)}`,\n        -v\n    ]);\nconst space = {\n    ...Object.fromEntries(spaces),\n    ...Object.fromEntries(spacesNegative)\n};\nconst zIndex = {\n    0: 0,\n    1: 100,\n    2: 200,\n    3: 300,\n    4: 400,\n    5: 500\n};\nconst colorTokens = {\n    light: {\n        blue: _tamagui_colors__WEBPACK_IMPORTED_MODULE_0__.blue,\n        gray: _tamagui_colors__WEBPACK_IMPORTED_MODULE_0__.gray,\n        green: _tamagui_colors__WEBPACK_IMPORTED_MODULE_0__.green,\n        orange: _tamagui_colors__WEBPACK_IMPORTED_MODULE_0__.orange,\n        pink: _tamagui_colors__WEBPACK_IMPORTED_MODULE_0__.pink,\n        purple: _tamagui_colors__WEBPACK_IMPORTED_MODULE_0__.purple,\n        red: _tamagui_colors__WEBPACK_IMPORTED_MODULE_0__.red,\n        yellow: _tamagui_colors__WEBPACK_IMPORTED_MODULE_0__.yellow\n    },\n    dark: {\n        blue: _tamagui_colors__WEBPACK_IMPORTED_MODULE_0__.blueDark,\n        gray: _tamagui_colors__WEBPACK_IMPORTED_MODULE_0__.grayDark,\n        green: _tamagui_colors__WEBPACK_IMPORTED_MODULE_0__.greenDark,\n        orange: _tamagui_colors__WEBPACK_IMPORTED_MODULE_0__.orangeDark,\n        pink: _tamagui_colors__WEBPACK_IMPORTED_MODULE_0__.pinkDark,\n        purple: _tamagui_colors__WEBPACK_IMPORTED_MODULE_0__.purpleDark,\n        red: _tamagui_colors__WEBPACK_IMPORTED_MODULE_0__.redDark,\n        yellow: _tamagui_colors__WEBPACK_IMPORTED_MODULE_0__.yellowDark\n    }\n};\nconst darkColors = {\n    ...colorTokens.dark.blue,\n    ...colorTokens.dark.gray,\n    ...colorTokens.dark.green,\n    ...colorTokens.dark.orange,\n    ...colorTokens.dark.pink,\n    ...colorTokens.dark.purple,\n    ...colorTokens.dark.red,\n    ...colorTokens.dark.yellow\n};\nconst lightColors = {\n    ...colorTokens.light.blue,\n    ...colorTokens.light.gray,\n    ...colorTokens.light.green,\n    ...colorTokens.light.orange,\n    ...colorTokens.light.pink,\n    ...colorTokens.light.purple,\n    ...colorTokens.light.red,\n    ...colorTokens.light.yellow\n};\nconst color = {\n    ...postfixObjKeys(lightColors, \"Light\"),\n    ...postfixObjKeys(darkColors, \"Dark\")\n};\nfunction postfixObjKeys(obj, postfix) {\n    return Object.fromEntries(Object.entries(obj).map(([k, v])=>[\n            `${k}${postfix}`,\n            v\n        ]));\n}\nconst radius = {\n    0: 0,\n    1: 3,\n    2: 5,\n    3: 7,\n    4: 9,\n    true: 9,\n    5: 10,\n    6: 16,\n    7: 19,\n    8: 22,\n    9: 26,\n    10: 34,\n    11: 42,\n    12: 50\n};\nconst tokens = (0,_tamagui_core__WEBPACK_IMPORTED_MODULE_1__.createTokens)({\n    color,\n    radius,\n    zIndex,\n    space,\n    size\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvdWkvc3JjL3RoZW1lcy90b2tlbnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWlCMEI7QUFDOEM7QUFFdEUsOERBQThEO0FBQzlELHlEQUF5RDtBQUN6RCw0Q0FBNEM7QUFDNUMsT0FBTztBQUNQLDZFQUE2RTtBQUM3RSxnRkFBZ0Y7QUFDaEYsK0RBQStEO0FBQy9ELHlEQUF5RDtBQUN6RCxrRkFBa0Y7QUFDbEYsZ0NBQWdDO0FBQ2hDLDBDQUEwQztBQUMxQyw2RkFBNkY7QUFDdEYsTUFBTWlCLE9BQU87SUFDbEJDLElBQUk7SUFDSixTQUFTO0lBQ1QsUUFBUTtJQUNSLFNBQVM7SUFDVEMsSUFBSTtJQUNKLFFBQVE7SUFDUkMsSUFBSTtJQUNKLFFBQVE7SUFDUkMsSUFBSTtJQUNKLFFBQVE7SUFDUkMsSUFBSTtJQUNKQyxPQUFPO0lBQ1AsUUFBUTtJQUNSQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsS0FBSztJQUNMQyxLQUFLO0lBQ0xDLEtBQUs7SUFDTEMsS0FBSztJQUNMQyxLQUFLO0lBQ0xDLEtBQUs7SUFDTEMsS0FBSztJQUNMQyxLQUFLO0lBQ0xDLEtBQUs7SUFDTEMsS0FBSztJQUNMQyxLQUFLO0FBQ1AsRUFBQztBQVFELE1BQU1DLFNBQVNDLE9BQU9DLE9BQU8sQ0FBQ3pCLE1BQU0wQixHQUFHLENBQUMsQ0FBQyxDQUFDQyxHQUFHQyxFQUFFO0lBQzdDLE9BQU87UUFBQ0Q7UUFBR0UsWUFBWUQ7S0FBRztBQUM1QjtBQUVBLHlFQUF5RTtBQUN6RSxTQUFTQyxZQUFZRCxDQUFTO0lBQzVCLElBQUlBLE1BQU0sR0FBRyxPQUFPO0lBQ3BCLElBQUlBLE1BQU0sR0FBRyxPQUFPO0lBQ3BCLElBQUlBLE1BQU0sR0FBRyxPQUFPO0lBQ3BCLElBQUlBLE1BQU0sR0FBRyxPQUFPO0lBQ3BCLElBQUlBLEtBQUssSUFBSSxPQUFPRSxLQUFLQyxLQUFLLENBQUNILElBQUk7SUFDbkMsT0FBT0UsS0FBS0UsS0FBSyxDQUFDSixJQUFJLE1BQU07QUFDOUI7QUFFQSxNQUFNSyxpQkFBaUJWLE9BQU9XLEtBQUssQ0FBQyxHQUFHUixHQUFHLENBQUMsQ0FBQyxDQUFDQyxHQUFHQyxFQUFFLEdBQUs7UUFBQyxDQUFDLENBQUMsRUFBRUQsRUFBRU8sS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUFFLENBQUNOO0tBQUU7QUFNdEUsTUFBTU8sUUFFVDtJQUNGLEdBQUdYLE9BQU9ZLFdBQVcsQ0FBQ2IsT0FBTztJQUM3QixHQUFHQyxPQUFPWSxXQUFXLENBQUNILGVBQWU7QUFDdkMsRUFBUTtBQUVELE1BQU1JLFNBQVM7SUFDcEIsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0FBQ0wsRUFBQztBQUVNLE1BQU1DLGNBQWM7SUFDekJDLE9BQU87UUFDTHhELE1BQU1BLGlEQUFJQTtRQUNWRSxNQUFNQSxpREFBSUE7UUFDVkUsT0FBT0Esa0RBQUtBO1FBQ1pFLFFBQVFBLG1EQUFNQTtRQUNkRSxNQUFNQSxpREFBSUE7UUFDVkUsUUFBUUEsbURBQU1BO1FBQ2RFLEtBQUtBLGdEQUFHQTtRQUNSRSxRQUFRQSxtREFBTUE7SUFDaEI7SUFDQTJDLE1BQU07UUFDSnpELE1BQU1DLHFEQUFRQTtRQUNkQyxNQUFNQyxxREFBUUE7UUFDZEMsT0FBT0Msc0RBQVNBO1FBQ2hCQyxRQUFRQyx1REFBVUE7UUFDbEJDLE1BQU1DLHFEQUFRQTtRQUNkQyxRQUFRQyx1REFBVUE7UUFDbEJDLEtBQUtDLG9EQUFPQTtRQUNaQyxRQUFRQyx1REFBVUE7SUFDcEI7QUFDRixFQUFDO0FBRU0sTUFBTTJDLGFBQWE7SUFDeEIsR0FBR0gsWUFBWUUsSUFBSSxDQUFDekQsSUFBSTtJQUN4QixHQUFHdUQsWUFBWUUsSUFBSSxDQUFDdkQsSUFBSTtJQUN4QixHQUFHcUQsWUFBWUUsSUFBSSxDQUFDckQsS0FBSztJQUN6QixHQUFHbUQsWUFBWUUsSUFBSSxDQUFDbkQsTUFBTTtJQUMxQixHQUFHaUQsWUFBWUUsSUFBSSxDQUFDakQsSUFBSTtJQUN4QixHQUFHK0MsWUFBWUUsSUFBSSxDQUFDL0MsTUFBTTtJQUMxQixHQUFHNkMsWUFBWUUsSUFBSSxDQUFDN0MsR0FBRztJQUN2QixHQUFHMkMsWUFBWUUsSUFBSSxDQUFDM0MsTUFBTTtBQUM1QixFQUFDO0FBRU0sTUFBTTZDLGNBQWM7SUFDekIsR0FBR0osWUFBWUMsS0FBSyxDQUFDeEQsSUFBSTtJQUN6QixHQUFHdUQsWUFBWUMsS0FBSyxDQUFDdEQsSUFBSTtJQUN6QixHQUFHcUQsWUFBWUMsS0FBSyxDQUFDcEQsS0FBSztJQUMxQixHQUFHbUQsWUFBWUMsS0FBSyxDQUFDbEQsTUFBTTtJQUMzQixHQUFHaUQsWUFBWUMsS0FBSyxDQUFDaEQsSUFBSTtJQUN6QixHQUFHK0MsWUFBWUMsS0FBSyxDQUFDOUMsTUFBTTtJQUMzQixHQUFHNkMsWUFBWUMsS0FBSyxDQUFDNUMsR0FBRztJQUN4QixHQUFHMkMsWUFBWUMsS0FBSyxDQUFDMUMsTUFBTTtBQUM3QixFQUFDO0FBRU0sTUFBTThDLFFBQVE7SUFDbkIsR0FBR0MsZUFBZUYsYUFBYSxRQUFRO0lBQ3ZDLEdBQUdFLGVBQWVILFlBQVksT0FBTztBQUN2QyxFQUFDO0FBRUQsU0FBU0csZUFJUEMsR0FBTSxFQUNOQyxPQUFVO0lBSVYsT0FBT3RCLE9BQU9ZLFdBQVcsQ0FDdkJaLE9BQU9DLE9BQU8sQ0FBQ29CLEtBQUtuQixHQUFHLENBQUMsQ0FBQyxDQUFDQyxHQUFHQyxFQUFFLEdBQUs7WUFBQyxDQUFDLEVBQUVELEVBQUUsRUFBRW1CLFFBQVEsQ0FBQztZQUFFbEI7U0FBRTtBQUU3RDtBQUVPLE1BQU1tQixTQUFTO0lBQ3BCLEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0hDLE1BQU07SUFDTixHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtBQUNOLEVBQUM7QUFFTSxNQUFNQyxTQUFTbEQsMkRBQVlBLENBQUM7SUFDakM0QztJQUNBSTtJQUNBVjtJQUNBRjtJQUNBbkM7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4uLy4uL3BhY2thZ2VzL3VpL3NyYy90aGVtZXMvdG9rZW5zLnRzeD85NWNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgYmx1ZSxcbiAgICBibHVlRGFyayxcbiAgICBncmF5LFxuICAgIGdyYXlEYXJrLFxuICAgIGdyZWVuLFxuICAgIGdyZWVuRGFyayxcbiAgICBvcmFuZ2UsXG4gICAgb3JhbmdlRGFyayxcbiAgICBwaW5rLFxuICAgIHBpbmtEYXJrLFxuICAgIHB1cnBsZSxcbiAgICBwdXJwbGVEYXJrLFxuICAgIHJlZCxcbiAgICByZWREYXJrLFxuICAgIHllbGxvdyxcbiAgICB5ZWxsb3dEYXJrLFxuICB9IGZyb20gJ0B0YW1hZ3VpL2NvbG9ycydcbiAgaW1wb3J0IHsgVmFyaWFibGUsIGNyZWF0ZVRva2VucywgY3JlYXRlVmFyaWFibGUgfSBmcm9tICdAdGFtYWd1aS9jb3JlJ1xuICBcbiAgLy8gc2hvdWxkIHJvdWdobHkgbWFwIHRvIGJ1dHRvbi9pbnB1dCBldGMgaGVpZ2h0IGF0IGVhY2ggbGV2ZWxcbiAgLy8gZm9udHMgc2hvdWxkIG1hdGNoIHRoYXQgaGVpZ2h0L2xpbmVIZWlnaHQgYXQgZWFjaCBzdG9wXG4gIC8vIHNvIHRoZXNlIGFyZSByZWFsbHkgbm9uLWxpbmVhciBvbiBwdXJwb3NlXG4gIC8vIHdoeT9cbiAgLy8gICAtIGF0IHNpemVzIDwxLCB1c2VkIGZvciBmaW5lIGdyYWluZWQgdGhpbmdzIChib3JkZXJzLCBzbWFsbGVzdCBwYWRkaW5nWSlcbiAgLy8gICAgIC0gc28gc21hbGxlc3QgcGFkWSBzaG91bGQgYmUgcm91Z2hseSAxLTRweCBzbyBpdCBjYW4gam9pbiB3aXRoIGxpbmVIZWlnaHRcbiAgLy8gICAtIGF0IHNpemVzID49MSwgaGF2ZSB0byBjb25zaWRlciBcInByZXNzYWJpbGl0eVwiIChqdW1wcyB1cClcbiAgLy8gICAtIGFmdGVyIHRoYXQgaXQgc2hvdWxkIGdvIHVwd2FyZHMgc29tZXdoYXQgbmF0dXJhbGx5XG4gIC8vICAgLSBIMSAvIGhlYWRpbmdzIHRvcCBvdXQgYXQgMTAgbmF0dXJhbGx5LCBzbyBhZnRlciAxMCB3ZSBjYW4gZ28gdXB3YXJkcyBmYXN0ZXJcbiAgLy8gIGJ1dCBhbHNvIG9uZSBtb3JlIHdyaW5rbGUuLi5cbiAgLy8gIHNwYWNlIGlzIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBzaXplXG4gIC8vICBpJ20gc2V0dGluZyBzcGFjZSB0byBnZW5lcmFsbHkganVzdCBhIGZpeGVkIGZyYWN0aW9uIG9mIHNpemUgKH4xLzMtMi8zIHN0aWxsIGZpbmUgdHVuaW5nKVxuICBleHBvcnQgY29uc3Qgc2l6ZSA9IHtcbiAgICAkMDogMCxcbiAgICAnJDAuMjUnOiAyLFxuICAgICckMC41JzogNCxcbiAgICAnJDAuNzUnOiA4LFxuICAgICQxOiAyMCxcbiAgICAnJDEuNSc6IDI0LFxuICAgICQyOiAyOCxcbiAgICAnJDIuNSc6IDMyLFxuICAgICQzOiAzNixcbiAgICAnJDMuNSc6IDQwLFxuICAgICQ0OiA0NCxcbiAgICAkdHJ1ZTogNDQsXG4gICAgJyQ0LjUnOiA0OCxcbiAgICAkNTogNTIsXG4gICAgJDY6IDY0LFxuICAgICQ3OiA3NCxcbiAgICAkODogODQsXG4gICAgJDk6IDk0LFxuICAgICQxMDogMTA0LFxuICAgICQxMTogMTI0LFxuICAgICQxMjogMTQ0LFxuICAgICQxMzogMTY0LFxuICAgICQxNDogMTg0LFxuICAgICQxNTogMjA0LFxuICAgICQxNjogMjI0LFxuICAgICQxNzogMjI0LFxuICAgICQxODogMjQ0LFxuICAgICQxOTogMjY0LFxuICAgICQyMDogMjg0LFxuICB9XG4gIFxuICB0eXBlIFNpemVLZXlzSW4gPSBrZXlvZiB0eXBlb2Ygc2l6ZVxuICB0eXBlIFNpemVzID0ge1xuICAgIFtLZXkgaW4gU2l6ZUtleXNJbiBleHRlbmRzIGAkJHtpbmZlciBLZXl9YCA/IEtleSA6IFNpemVLZXlzSW5dOiBudW1iZXJcbiAgfVxuICB0eXBlIFNpemVLZXlzID0gYCR7a2V5b2YgU2l6ZXMgZXh0ZW5kcyBgJHtpbmZlciBLfWAgPyBLIDogbmV2ZXJ9YFxuICBcbiAgY29uc3Qgc3BhY2VzID0gT2JqZWN0LmVudHJpZXMoc2l6ZSkubWFwKChbaywgdl0pID0+IHtcbiAgICByZXR1cm4gW2ssIHNpemVUb1NwYWNlKHYpXSBhcyBjb25zdFxuICB9KVxuICBcbiAgLy8gYSBiaXQgb2RkIGJ1dCBrZWVwaW5nIGJhY2t3YXJkIGNvbXBhdCBmb3IgdmFsdWVzID44IHdoaWxlIGZpeGluZyBiZWxvd1xuICBmdW5jdGlvbiBzaXplVG9TcGFjZSh2OiBudW1iZXIpIHtcbiAgICBpZiAodiA9PT0gMCkgcmV0dXJuIDBcbiAgICBpZiAodiA9PT0gMikgcmV0dXJuIDAuNVxuICAgIGlmICh2ID09PSA0KSByZXR1cm4gMVxuICAgIGlmICh2ID09PSA4KSByZXR1cm4gMS41XG4gICAgaWYgKHYgPD0gMTYpIHJldHVybiBNYXRoLnJvdW5kKHYgKiAwLjMzMylcbiAgICByZXR1cm4gTWF0aC5mbG9vcih2ICogMC43IC0gMTIpXG4gIH1cbiAgXG4gIGNvbnN0IHNwYWNlc05lZ2F0aXZlID0gc3BhY2VzLnNsaWNlKDEpLm1hcCgoW2ssIHZdKSA9PiBbYC0ke2suc2xpY2UoMSl9YCwgLXZdKVxuICBcbiAgdHlwZSBTaXplS2V5c1dpdGhOZWdhdGl2ZXMgPVxuICAgIHwgRXhjbHVkZTxgLSR7U2l6ZUtleXMgZXh0ZW5kcyBgJCR7aW5mZXIgS2V5fWAgPyBLZXkgOiBTaXplS2V5c31gLCAnLTAnPlxuICAgIHwgU2l6ZUtleXNcbiAgXG4gIGV4cG9ydCBjb25zdCBzcGFjZToge1xuICAgIFtLZXkgaW4gU2l6ZUtleXNXaXRoTmVnYXRpdmVzXTogS2V5IGV4dGVuZHMga2V5b2YgU2l6ZXMgPyBTaXplc1tLZXldIDogbnVtYmVyXG4gIH0gPSB7XG4gICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKHNwYWNlcyksXG4gICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKHNwYWNlc05lZ2F0aXZlKSxcbiAgfSBhcyBhbnlcbiAgXG4gIGV4cG9ydCBjb25zdCB6SW5kZXggPSB7XG4gICAgMDogMCxcbiAgICAxOiAxMDAsXG4gICAgMjogMjAwLFxuICAgIDM6IDMwMCxcbiAgICA0OiA0MDAsXG4gICAgNTogNTAwLFxuICB9XG4gIFxuICBleHBvcnQgY29uc3QgY29sb3JUb2tlbnMgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgIGJsdWU6IGJsdWUsXG4gICAgICBncmF5OiBncmF5LFxuICAgICAgZ3JlZW46IGdyZWVuLFxuICAgICAgb3JhbmdlOiBvcmFuZ2UsXG4gICAgICBwaW5rOiBwaW5rLFxuICAgICAgcHVycGxlOiBwdXJwbGUsXG4gICAgICByZWQ6IHJlZCxcbiAgICAgIHllbGxvdzogeWVsbG93LFxuICAgIH0sXG4gICAgZGFyazoge1xuICAgICAgYmx1ZTogYmx1ZURhcmssXG4gICAgICBncmF5OiBncmF5RGFyayxcbiAgICAgIGdyZWVuOiBncmVlbkRhcmssXG4gICAgICBvcmFuZ2U6IG9yYW5nZURhcmssXG4gICAgICBwaW5rOiBwaW5rRGFyayxcbiAgICAgIHB1cnBsZTogcHVycGxlRGFyayxcbiAgICAgIHJlZDogcmVkRGFyayxcbiAgICAgIHllbGxvdzogeWVsbG93RGFyayxcbiAgICB9LFxuICB9XG4gIFxuICBleHBvcnQgY29uc3QgZGFya0NvbG9ycyA9IHtcbiAgICAuLi5jb2xvclRva2Vucy5kYXJrLmJsdWUsXG4gICAgLi4uY29sb3JUb2tlbnMuZGFyay5ncmF5LFxuICAgIC4uLmNvbG9yVG9rZW5zLmRhcmsuZ3JlZW4sXG4gICAgLi4uY29sb3JUb2tlbnMuZGFyay5vcmFuZ2UsXG4gICAgLi4uY29sb3JUb2tlbnMuZGFyay5waW5rLFxuICAgIC4uLmNvbG9yVG9rZW5zLmRhcmsucHVycGxlLFxuICAgIC4uLmNvbG9yVG9rZW5zLmRhcmsucmVkLFxuICAgIC4uLmNvbG9yVG9rZW5zLmRhcmsueWVsbG93LFxuICB9XG4gIFxuICBleHBvcnQgY29uc3QgbGlnaHRDb2xvcnMgPSB7XG4gICAgLi4uY29sb3JUb2tlbnMubGlnaHQuYmx1ZSxcbiAgICAuLi5jb2xvclRva2Vucy5saWdodC5ncmF5LFxuICAgIC4uLmNvbG9yVG9rZW5zLmxpZ2h0LmdyZWVuLFxuICAgIC4uLmNvbG9yVG9rZW5zLmxpZ2h0Lm9yYW5nZSxcbiAgICAuLi5jb2xvclRva2Vucy5saWdodC5waW5rLFxuICAgIC4uLmNvbG9yVG9rZW5zLmxpZ2h0LnB1cnBsZSxcbiAgICAuLi5jb2xvclRva2Vucy5saWdodC5yZWQsXG4gICAgLi4uY29sb3JUb2tlbnMubGlnaHQueWVsbG93LFxuICB9XG4gIFxuICBleHBvcnQgY29uc3QgY29sb3IgPSB7XG4gICAgLi4ucG9zdGZpeE9iaktleXMobGlnaHRDb2xvcnMsICdMaWdodCcpLFxuICAgIC4uLnBvc3RmaXhPYmpLZXlzKGRhcmtDb2xvcnMsICdEYXJrJyksXG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHBvc3RmaXhPYmpLZXlzPFxuICAgIEEgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IFZhcmlhYmxlPHN0cmluZz4gfCBzdHJpbmcgfSxcbiAgICBCIGV4dGVuZHMgc3RyaW5nXG4gID4oXG4gICAgb2JqOiBBLFxuICAgIHBvc3RmaXg6IEJcbiAgKToge1xuICAgIFtLZXkgaW4gYCR7a2V5b2YgQSBleHRlbmRzIHN0cmluZyA/IGtleW9mIEEgOiBuZXZlcn0ke0J9YF06IFZhcmlhYmxlPHN0cmluZz4gfCBzdHJpbmdcbiAgfSB7XG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgIE9iamVjdC5lbnRyaWVzKG9iaikubWFwKChbaywgdl0pID0+IFtgJHtrfSR7cG9zdGZpeH1gLCB2XSlcbiAgICApIGFzIGFueVxuICB9XG4gIFxuICBleHBvcnQgY29uc3QgcmFkaXVzID0ge1xuICAgIDA6IDAsXG4gICAgMTogMyxcbiAgICAyOiA1LFxuICAgIDM6IDcsXG4gICAgNDogOSxcbiAgICB0cnVlOiA5LFxuICAgIDU6IDEwLFxuICAgIDY6IDE2LFxuICAgIDc6IDE5LFxuICAgIDg6IDIyLFxuICAgIDk6IDI2LFxuICAgIDEwOiAzNCxcbiAgICAxMTogNDIsXG4gICAgMTI6IDUwLFxuICB9XG4gIFxuICBleHBvcnQgY29uc3QgdG9rZW5zID0gY3JlYXRlVG9rZW5zKHtcbiAgICBjb2xvcixcbiAgICByYWRpdXMsXG4gICAgekluZGV4LFxuICAgIHNwYWNlLFxuICAgIHNpemUsXG4gIH0pXG4gICJdLCJuYW1lcyI6WyJibHVlIiwiYmx1ZURhcmsiLCJncmF5IiwiZ3JheURhcmsiLCJncmVlbiIsImdyZWVuRGFyayIsIm9yYW5nZSIsIm9yYW5nZURhcmsiLCJwaW5rIiwicGlua0RhcmsiLCJwdXJwbGUiLCJwdXJwbGVEYXJrIiwicmVkIiwicmVkRGFyayIsInllbGxvdyIsInllbGxvd0RhcmsiLCJjcmVhdGVUb2tlbnMiLCJzaXplIiwiJDAiLCIkMSIsIiQyIiwiJDMiLCIkNCIsIiR0cnVlIiwiJDUiLCIkNiIsIiQ3IiwiJDgiLCIkOSIsIiQxMCIsIiQxMSIsIiQxMiIsIiQxMyIsIiQxNCIsIiQxNSIsIiQxNiIsIiQxNyIsIiQxOCIsIiQxOSIsIiQyMCIsInNwYWNlcyIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrIiwidiIsInNpemVUb1NwYWNlIiwiTWF0aCIsInJvdW5kIiwiZmxvb3IiLCJzcGFjZXNOZWdhdGl2ZSIsInNsaWNlIiwic3BhY2UiLCJmcm9tRW50cmllcyIsInpJbmRleCIsImNvbG9yVG9rZW5zIiwibGlnaHQiLCJkYXJrIiwiZGFya0NvbG9ycyIsImxpZ2h0Q29sb3JzIiwiY29sb3IiLCJwb3N0Zml4T2JqS2V5cyIsIm9iaiIsInBvc3RmaXgiLCJyYWRpdXMiLCJ0cnVlIiwidG9rZW5zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../packages/ui/src/themes/tokens.tsx\n");

/***/ }),

/***/ "./tamagui.config.ts":
/*!***************************!*\
  !*** ./tamagui.config.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var app_tamagui_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/tamagui.config */ \"../../packages/app/tamagui.config.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([app_tamagui_config__WEBPACK_IMPORTED_MODULE_0__]);\napp_tamagui_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app_tamagui_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90YW1hZ3VpLmNvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUV2QyxpRUFBZUEsMERBQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi90YW1hZ3VpLmNvbmZpZy50cz9jMGVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnYXBwL3RhbWFndWkuY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWdcbiJdLCJuYW1lcyI6WyJjb25maWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./tamagui.config.ts\n");

/***/ }),

/***/ "@react-native/normalize-color":
/*!************************************************!*\
  !*** external "@react-native/normalize-color" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@react-native/normalize-color");

/***/ }),

/***/ "aria-hidden":
/*!******************************!*\
  !*** external "aria-hidden" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("aria-hidden");

/***/ }),

/***/ "create-react-class":
/*!*************************************!*\
  !*** external "create-react-class" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("create-react-class");

/***/ }),

/***/ "fbjs/lib/invariant":
/*!*************************************!*\
  !*** external "fbjs/lib/invariant" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("fbjs/lib/invariant");

/***/ }),

/***/ "fbjs/lib/warning":
/*!***********************************!*\
  !*** external "fbjs/lib/warning" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("fbjs/lib/warning");

/***/ }),

/***/ "inline-style-prefixer/lib/createPrefixer":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/createPrefixer" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/createPrefixer");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/backgroundClip":
/*!*******************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/backgroundClip" ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/backgroundClip");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/crossFade":
/*!**************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/crossFade" ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/crossFade");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/cursor":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/cursor" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/cursor");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/filter":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/filter" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/filter");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/imageSet":
/*!*************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/imageSet" ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/imageSet");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/logical":
/*!************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/logical" ***!
  \************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/logical");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/position":
/*!*************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/position" ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/position");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/sizing":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/sizing" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/sizing");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/transition":
/*!***************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/transition" ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/transition");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "normalize-css-color":
/*!**************************************!*\
  !*** external "normalize-css-color" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("normalize-css-color");

/***/ }),

/***/ "postcss-value-parser":
/*!***************************************!*\
  !*** external "postcss-value-parser" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("postcss-value-parser");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react-remove-scroll":
/*!**************************************!*\
  !*** external "react-remove-scroll" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-remove-scroll");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "reforest":
/*!***************************!*\
  !*** external "reforest" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("reforest");

/***/ }),

/***/ "styleq":
/*!*************************!*\
  !*** external "styleq" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("styleq");

/***/ }),

/***/ "styleq/transform-localize-style":
/*!**************************************************!*\
  !*** external "styleq/transform-localize-style" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("styleq/transform-localize-style");

/***/ }),

/***/ "@floating-ui/react":
/*!*************************************!*\
  !*** external "@floating-ui/react" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("@floating-ui/react");;

/***/ }),

/***/ "@floating-ui/react-dom":
/*!*****************************************!*\
  !*** external "@floating-ui/react-dom" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("@floating-ui/react-dom");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@tamagui","vendor-chunks/react-native-web","vendor-chunks/next","vendor-chunks/tamagui","vendor-chunks/@babel","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.tsx")));
module.exports = __webpack_exports__;

})();