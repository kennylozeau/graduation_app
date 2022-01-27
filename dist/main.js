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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _students_2022_01_28__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students/2022-01-28 */ \"./src/students/2022-01-28.js\");\n/* harmony import */ var _students_2022_01_28__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_students_2022_01_28__WEBPACK_IMPORTED_MODULE_2__);\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"canvas\")\n    let nextStudentButton = document.getElementById(\"next-student\")\n    let ctx = canvas.getContext(\"2d\")\n    let ol1 = document.getElementById(\"ol1\")\n    let ol2 = document.getElementById(\"ol2\")\n    let punch = document.getElementById(\"punch\");\n    let submitButton = document.querySelector(\"#current-student-button\")\n\n    let graduates = [] \n    _students_2022_01_28__WEBPACK_IMPORTED_MODULE_2___default.a.forEach((student) => {\n        let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx,student.name,student.imageUrl)\n        graduates.push(graduate)\n    })\n\n    let mid = Math.floor(graduates.length/2)\n    ol2.start = mid + 1\n\n    for (let i = 0; i < mid;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol1.appendChild(listItem)\n    }\n\n    for (let i = mid; i < graduates.length;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol2.appendChild(listItem)\n    }\n\n    let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates)\n    ceremony.sound = punch; // give sound to ceremony instance\n    ceremony.sound.volume = 0.4;\n\n    submitButton.addEventListener(\"click\", () => {\n        let input = document.querySelector(\"input\");\n        ceremony.currentStudent = parseInt(input.value) - 1\n    })\n\n    ceremony.constructStage()\n\n\n    nextStudentButton.addEventListener(\"click\", (e) => {\n        ceremony.nextStudentMoves(e.target)\n    })\n\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/students/2022-01-28.js":
/*!************************************!*\
  !*** ./src/students/2022-01-28.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const students = [\n    {\n        \"id\": 7037,\n        \"name\": \"Alex Wong\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/494be54d9aeb40d5c9792be0f3e6cb73?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6787,\n        \"name\": \"Alexander (Alex) Dziuba\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/82345021f4558ed3203150cf81219ee2?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7052,\n        \"name\": \"Andrew Vitovitch\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/0ea257da26e7749b9a59c4c612af8a27?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6810,\n        \"name\": \"Andy Yu\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/fc63eddefc21a3bd24766cb5d9395110?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7038,\n        \"name\": \"Anna Trott-Herdrich\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/0acda60a99d312a80a1430bfab6b064d?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7058,\n        \"name\": \"Anthony Carroll\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/9489d83e619199d18d29e703d79ee8e1?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7046,\n        \"name\": \"Anuj Gupta\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/0b7b81f05bf5067158586c506e92d5c2?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7034,\n        \"name\": \"Brian Lin\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/039a78306fd5d0efcc6cce36056d901c?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7059,\n        \"name\": \"Caleb Jones\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/14a18d29a97fc76758225aa2925f97c9?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7048,\n        \"name\": \"Chaya Cohen\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/51061a1fa3f9bd5f8425be6d1dc40a32?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7054,\n        \"name\": \"Christian Lee\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/8b08f0a0bde99fe82f7d5a37ccfc8625?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6773,\n        \"name\": \"Jason Chu\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/7f385f89f51367f4fe7967002c0bb5de?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7042,\n        \"name\": \"Joseph (Joe) Manso\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/daf845387ecb0bfe1e0a2dfbd5b1ee6a?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6789,\n        \"name\": \"Joshua (Josh) Laikowski\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/11598a1d430471c67b5a1787ce19feab?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7051,\n        \"name\": \"Julio Tavarez\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/5da9b0ecfbddd4673dfe40b1eee208d5?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6771,\n        \"name\": \"Kyle Ginzburg\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/acd180bed836ed5fca0dd5ce2d387193?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7035,\n        \"name\": \"Mackinjosh (Mack) Zumarraga\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/8a8aaf4137f468fe2393b80ec57aee4e?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7050,\n        \"name\": \"Man Yee (Emily) Ng\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/79ed4973c7296773e434d71db0adfbf6?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7029,\n        \"name\": \"Marco Countryman\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/55d20d3af99c336f8d936fd35c569b42?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7036,\n        \"name\": \"Nicholas (Nick) Barrameda\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/4da736a6f447776c2031b9c35ea7ef21?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7040,\n        \"name\": \"Samuel (Sam) Gelernter\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/373e4c283aa2955bf2f73ff73b69967c?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7041,\n        \"name\": \"Sonja Ng\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/98709cf3d463156c008e47cf9f9fa9fe?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7056,\n        \"name\": \"Stella Choi\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/a815e1ba31312898529cd1e235a7ae94?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7028,\n        \"name\": \"Stephanie Soni\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/ef4b576e38d64d17e6966fb8816108d5?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7045,\n        \"name\": \"Steven Sookhai\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/1de5f3146d976a2f10faba8974156685?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7030,\n        \"name\": \"Susan Zea\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/75bf65f619e99c184c193825fcdfcf19?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7031,\n        \"name\": \"Tashi Sangpo\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/65814ecd55e90c1e5af99186ff533f64?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7043,\n        \"name\": \"Virginia Knight\",\n        \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/007/043/medium/Screen_Shot_2021-10-20_at_1.33.04_PM.png?1634751197\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7047,\n        \"name\": \"Yisrael Peikes\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/0cdeb5db1786c2b08f724bd4be93364b?secure=true&size=300\",\n        \"occup\": \"student\"\n    }\n]\n\n//# sourceURL=webpack:///./src/students/2022-01-28.js?");

/***/ })

/******/ });