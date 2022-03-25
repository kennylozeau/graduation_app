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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _students_2021_11_29__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students/2021-11-29 */ \"./src/students/2021-11-29.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"canvas\")\n    let nextStudentButton = document.getElementById(\"next-student\")\n    let ctx = canvas.getContext(\"2d\")\n    let ol1 = document.getElementById(\"ol1\")\n    let ol2 = document.getElementById(\"ol2\")\n    let punch = document.getElementById(\"punch\");\n    let submitButton = document.querySelector(\"#current-student-button\")\n\n    let graduates = [] \n    _students_2021_11_29__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student) => {\n        let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx,student.name,student.imageUrl)\n        graduates.push(graduate)\n    })\n\n    let mid = Math.floor(graduates.length/2)\n    ol2.start = mid + 1\n\n    for (let i = 0; i < mid;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol1.appendChild(listItem)\n    }\n\n    for (let i = mid; i < graduates.length;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol2.appendChild(listItem)\n    }\n\n    let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates)\n    ceremony.sound = punch; // give sound to ceremony instance\n    ceremony.sound.volume = 0.4;\n\n    submitButton.addEventListener(\"click\", () => {\n        let input = document.querySelector(\"input\");\n        ceremony.currentStudent = parseInt(input.value) - 1\n    })\n\n    ceremony.constructStage()\n\n\n    nextStudentButton.addEventListener(\"click\", (e) => {\n        ceremony.nextStudentMoves(e.target)\n    })\n\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/students/2021-11-29.js":
/*!************************************!*\
  !*** ./src/students/2021-11-29.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [\n    {\n        \"id\": 7203,\n        \"name\": \"Aagam Vakil\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/f7e2daa115110fd03a5bd366fa2a1ce9?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7217,\n        \"name\": \"Alex Clark\",\n        \"imageUrl\": \"https://media-exp1.licdn.com/dms/image/C5603AQGNJ2nyCvkHzQ/profile-displayphoto-shrink_800_800/0/1517243806919?e=1653523200&v=beta&t=rLB3pweiUGV5W8VkBgesKtOL4-VdbnKpW0Bi69SfUB4\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7207,\n        \"name\": \"Bill Camarco\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/a075e128b3561725577fcf48f585fd05?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7219,\n        \"name\": \"Ding Tian (Dean) Ding\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/186a1f477eef8d358aaf12fe0061c39c?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7204,\n        \"name\": \"Emily Lichtenberg\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/9d1feecacf4d882d67c38bc6c51ee88e?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7202,\n        \"name\": \"Ethan Gumin\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/524df88586cfd9ceb4ae548c37ba1519?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7214,\n        \"name\": \"Ethan Lam\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/3ff2391214ea3985fd13b3637ab26f9d?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7146,\n        \"name\": \"Ian Farr\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/76d9d9ca4e8a2d0ffb6138d1f0f257dd?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7215,\n        \"name\": \"Jonathan Kim\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/4321533f1b7383ea059e9a8d06bcafa3?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7057,\n        \"name\": \"Ka (Ka-Yi) Leung\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/de5ffacdf7b5198a22c37e5dabc591c0?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7221,\n        \"name\": \"Kirby Neaton\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/f2b78ee340a126b2d3899bb85ee9ef41?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7216,\n        \"name\": \"Qien Gao\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/ca0a3457718773ee4e61bb87222f9ad2?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7205,\n        \"name\": \"Sean Mackey\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/2cd069e3f6cbd9e1c747685d1befb347?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7223,\n        \"name\": \"Shawn Fries\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/7f8f13841bdb6871a0cc4bc577def4fa?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7211,\n        \"name\": \"Steven Wu\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/49d77a2fc42dc4357f2e2ed5d0d52f7e?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7049,\n        \"name\": \"Yaakov Zaetz\",\n        \"imageUrl\": \"https://media-exp1.licdn.com/dms/image/C4E03AQGmJ3l_wvQDMg/profile-displayphoto-shrink_800_800/0/1517594813971?e=1653523200&v=beta&t=W-kzMByPy2UV9Ir-l3FpX8yUvy3i7YrLjkHAOLOVM54\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7222,\n        \"name\": \"Yao Z. (Yao) Xu\",\n        \"imageUrl\": \"https://student-images-klo.s3.amazonaws.com/yao_img.jpg\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7208,\n        \"name\": \"Yong Woo (Bill) Kim\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/f1f80e15c64885ebe873488022fca3fe?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 7210,\n        \"name\": \"Yuchen (Katie) Hang\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/fe997d45eb2558fba5257dd49aa06c35?secure=true&size=300\",\n        \"occup\": \"student\"\n    }\n]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (students);\n\n//# sourceURL=webpack:///./src/students/2021-11-29.js?");

/***/ })

/******/ });