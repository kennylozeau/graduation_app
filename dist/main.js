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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ceremony.js":
/*!*************************!*\
  !*** ./src/ceremony.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Ceremony {\n    constructor(ctx, graduates, currentStudent = 0) {\n        this.ctx = ctx;\n        this.graduates = graduates;\n        this.currentStudent = currentStudent;\n        this.potatSpriteSheet = new Image();\n        this.stage = new Image();\n        this.audienceChairs = new Image();\n        this.diploma = new Image();\n        this.aalogo = new Image();\n\n        this.potatSpriteSheet.src = \"./dist/assets/megaman_sprite_sheet.png\";\n        this.stage.src = './dist/assets/pixel_art_stage.png';\n        this.audienceChairs.src = \"./dist/assets/theatre_chairs.png\";\n        this.diploma.src = \"./dist/assets/diploma.png\";\n        this.aalogo.src = \"./dist/assets/logo.png\";\n    }\n\n    constructStage() {\n        let waitingSprite = [0, 0];\n        let spriteSize = [50, 50]\n\n        this.interval = setInterval(() => {\n            this.ctx.drawImage(this.stage, 20, 50, 850, 300);\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 70)\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 130)\n            this.ctx.drawImage(this.potatSpriteSheet,\n                waitingSprite[0], waitingSprite[1],\n                spriteSize[0], spriteSize[1],\n                80, 245,\n                // spriteSize[0], spriteSize[1])\n                80, 80)\n                // clearInterval(this.interval)\n        },100)\n    }\n\n    nextStudentMoves(button) {\n        button.disabled = true\n        this.graduates[this.currentStudent].moveAcrossScreen(this, button)\n        this.currentStudent += 1\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ceremony);\n\n//# sourceURL=webpack:///./src/ceremony.js?");

/***/ }),

/***/ "./src/graduate.js":
/*!*************************!*\
  !*** ./src/graduate.js ***!
  \*************************/
/*! exports provided: Graduate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Graduate\", function() { return Graduate; });\nclass Graduate {\n    constructor(ctx, name, img_url) {\n        this.ctx = ctx\n        this.name = name\n        this.img_url = new Image()\n        this.img_url.src = img_url\n    }\n\n    drawGraduate(ceremony,i,startingPosition, jumpHeight){\n        let spriteSize = [50, 50]\n        let runningSprites = [[150, 0], [200, 0], [250, 0]];\n        let dashSprites = [[150, 0], [200, 0], [150, 0]];\n        let jumpSprite = [350, 0]\n\n        // this.ctx.clearRect(0, 0, 1000, 1000)\n\n        this.ctx.drawImage(ceremony.stage, 20, 50, 850, 300);\n        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 70)\n        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 130)\n\n        if (startingPosition[0] >= 350 && startingPosition[0] <= 490) {\n            if (startingPosition[0] <= 420) {\n                jumpHeight[0] = jumpHeight[0] + 11;\n            } else {\n                jumpHeight[0] = jumpHeight[0] - 11;\n            }\n\n            this.ctx.drawImage(ceremony.potatSpriteSheet,\n                // runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                jumpSprite[0], jumpSprite[1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1] - jumpHeight,\n                80, 80)\n        } else if (startingPosition[0] > 490) { // after landing from diploma catch\n            this.ctx.drawImage(ceremony.potatSpriteSheet,\n                dashSprites[i % dashSprites.length][0], dashSprites[i % runningSprites.length][1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1],\n                80, 80)\n        } else {\n            this.ctx.drawImage(ceremony.potatSpriteSheet,\n                runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1],\n                80, 80)\n        }\n\n        this.scaleGraduateImg();\n\n        if (startingPosition[0] < 440) {\n            this.ctx.drawImage(ceremony.diploma, 440, 235, 20, 20); //draw diploma\n        } else if (startingPosition[0] === 440) {\n            ceremony.sound.play();\n        } else {\n            this.ctx.drawImage(ceremony.aalogo, 365, 55, 170, 150);\n        }\n    }\n\n    moveAcrossScreen(ceremony,button) {\n        clearInterval(ceremony.interval);\n        let startingPosition = [80, 245]\n        let jumpSprite = [300, 100] //might get to use this later\n        let studentName = document.querySelector(\"#student\")\n        studentName.innerHTML = this.name\n        let i = 0;\n        let jumpHeight = [0];\n\n        let interval = setInterval(() => {\n            startingPosition[0] += 20\n            i++\n\n            this.drawGraduate(ceremony,i, startingPosition, jumpHeight)\n\n            if (startingPosition[0] >= 740) {\n                clearInterval(interval)\n                // this.ctx.clearRect(0, 0, 1000, 1000)\n                ceremony.constructStage()\n                button.disabled = false\n                studentName.innerHTML  = \"\"\n            }\n        }, 100)\n    }\n\n    scaleGraduateImg() {\n        let scale = Math.max(150 / this.img_url.width, 170 / this.img_url.height);\n        console.log(\"scale\", scale)\n        let x = 450 - ((this.img_url.width / 2) * scale);\n        let y = 140 - ((this.img_url.height / 2) * scale);\n        this.ctx.drawImage(this.img_url, x, y, this.img_url.width * scale, this.img_url.height * scale);\n    }\n\n    jumpAndGrabDiploma(ceremony, i, startingPosition) {\n\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/graduate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _students_2020_02_10__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students/2020-02-10 */ \"./src/students/2020-02-10.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"canvas\")\n    let nextStudentButton = document.getElementById(\"next-student\")\n    let ctx = canvas.getContext(\"2d\")\n    let ol1 = document.getElementById(\"ol1\")\n    let ol2 = document.getElementById(\"ol2\")\n    let punch = document.getElementById(\"punch\");\n    let submitButton = document.querySelector(\"#current-student-button\")\n\n    let graduates = [] \n    _students_2020_02_10__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student) => {\n        let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx,student.name,student.imageUrl)\n        graduates.push(graduate)\n    })\n\n    let mid = Math.floor(graduates.length/2)\n    ol2.start = mid + 1\n\n    for (let i = 0; i < mid;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol1.appendChild(listItem)\n    }\n\n    for (let i = mid; i < graduates.length;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol2.appendChild(listItem)\n    }\n\n    let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates)\n    ceremony.sound = punch; // give sound to ceremony instance\n    ceremony.sound.volume = 0.4;\n\n    submitButton.addEventListener(\"click\", () => {\n        let input = document.querySelector(\"input\");\n        ceremony.currentStudent = parseInt(input.value) - 1\n    })\n\n    ceremony.constructStage()\n\n\n    nextStudentButton.addEventListener(\"click\", (e) => {\n        ceremony.nextStudentMoves(e.target)\n    })\n\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/students/2020-02-10.js":
/*!************************************!*\
  !*** ./src/students/2020-02-10.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [\n  {\n    \"id\": 6410,\n    \"name\": \"Ali Ahmed\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/e0426208b6954ea057b158f3593ee307?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6426,\n    \"name\": \"Ariel Davies\",\n    \"imageUrl\": \"https://avatars.githubusercontent.com/u/81823461?v=4\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6403,\n    \"name\": \"Chase Van Haselen\",\n    \"imageUrl\": \"https://media-exp1.licdn.com/dms/image/C4E03AQGunfa64nEGAw/profile-displayphoto-shrink_800_800/0/1628026436249?e=1633564800&v=beta&t=f_0KTLoh7eUyCulp9YoVz3-Bmhoyxq1uxxyMVbmHtKI\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6425,\n    \"name\": \"Miguel Dela Cruz\",\n    \"imageUrl\": \"https://avatars.githubusercontent.com/u/80925443?v=4\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6406,\n    \"name\": \"Donnie Wombough\",\n    \"imageUrl\": \"https://avatars.githubusercontent.com/u/57300466?v=4\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6399,\n    \"name\": \"Eric Tran\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/37f9ca933e4841a898ffdec3f4da2af2?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6423,\n    \"name\": \"Isaac Wei\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/32347cffec5a3a4bc468b90ba84e5a43?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6401,\n    \"name\": \"Jon Chen\",\n    \"imageUrl\": \"https://avatars.githubusercontent.com/u/82133872?v=4\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6395,\n    \"name\": \"Vincent Ahn\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/daf90f51c5f751e5aea808f8c22305e8?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6414,\n    \"name\": \"Justin Ernst\",\n    \"imageUrl\": \"https://avatars.githubusercontent.com/u/42757012?v=4\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6415,\n    \"name\": \"Kin Ka Tse\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/269e67736b7ae7eb7ee792f9ac5a6868?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6424,\n    \"name\": \"Kyle Xu\",\n    \"imageUrl\": \"https://avatars.githubusercontent.com/u/67240903?v=4\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6274,\n    \"name\": \"Leo Cao\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/7f3f67c8e42411b2bc8250e63cc1c97e?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6407,\n    \"name\": \"Paul Kim\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/28ffd1982cf711f95893920ccd1ce20c?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6300,\n    \"name\": \"Priyesh Shah\",\n    \"imageUrl\": \"https://avatars.githubusercontent.com/u/15977970?v=4\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6413,\n    \"name\": \"Raph Talatala\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/0e859bb1163b39043787d810c971a6cd?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6398,\n    \"name\": \"Samuel Sacco\",\n    \"imageUrl\": \"https://avatars.githubusercontent.com/u/76980320?v=4\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6421,\n    \"name\": \"Sammy Huang\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/4667fbd0797a5d01be05c5a3a86c26fe?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6419,\n    \"name\": \"Sohrob Ibrahimi\",\n    \"imageUrl\": \"https://media-exp1.licdn.com/dms/image/C4D03AQGZ2tihAIlTag/profile-displayphoto-shrink_800_800/0/1578451871118?e=1633564800&v=beta&t=7Y3HkOGXNaPAHhGEs9W3ihNJqiHbNrXr1t11RYyUvoI\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6392,\n    \"name\": \"Tai Huynh\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/834d504cf79df270e933cf5bb66f023d?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6400,\n    \"name\": \"Jack Liu\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/4cd72bd6c284f3441fffe4baab4ccf32?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6422,\n    \"name\": \"Ti Wei\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/fadd9b89b3af651066e1f73a6e47c246?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6189,\n    \"name\": \"Tyler Bernstein\",\n    \"imageUrl\": \"https://avatars.githubusercontent.com/u/79271412?v=4\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6412,\n    \"name\": \"Wen Liu\",\n    \"imageUrl\": \"https://avatars.githubusercontent.com/u/45020536?v=4\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6393,\n    \"name\": \"Joseph Yang\",\n    \"imageUrl\": \"https://avatars.githubusercontent.com/u/81983064?v=4\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6409,\n    \"name\": \"Yung Cai\",\n    \"imageUrl\": \"https://avatars.githubusercontent.com/u/82466081?v=4\",\n    \"occup\": \"student\"\n  }\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (students);\n\n//# sourceURL=webpack:///./src/students/2020-02-10.js?");

/***/ })

/******/ });