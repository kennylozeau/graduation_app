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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _students_2021_11_23__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students/2021-11-23 */ \"./src/students/2021-11-23.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"canvas\")\n    let nextStudentButton = document.getElementById(\"next-student\")\n    let ctx = canvas.getContext(\"2d\")\n    let ol1 = document.getElementById(\"ol1\")\n    let ol2 = document.getElementById(\"ol2\")\n    let punch = document.getElementById(\"punch\");\n    let submitButton = document.querySelector(\"#current-student-button\")\n\n    let graduates = [] \n    _students_2021_11_23__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student) => {\n        let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx,student.name,student.imageUrl)\n        graduates.push(graduate)\n    })\n\n    let mid = Math.floor(graduates.length/2)\n    ol2.start = mid + 1\n\n    for (let i = 0; i < mid;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol1.appendChild(listItem)\n    }\n\n    for (let i = mid; i < graduates.length;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol2.appendChild(listItem)\n    }\n\n    let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates)\n    ceremony.sound = punch; // give sound to ceremony instance\n    ceremony.sound.volume = 0.4;\n\n    submitButton.addEventListener(\"click\", () => {\n        let input = document.querySelector(\"input\");\n        ceremony.currentStudent = parseInt(input.value) - 1\n    })\n\n    ceremony.constructStage()\n\n\n    nextStudentButton.addEventListener(\"click\", (e) => {\n        ceremony.nextStudentMoves(e.target)\n    })\n\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/students/2021-11-23.js":
/*!************************************!*\
  !*** ./src/students/2021-11-23.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [\n    {\n        \"id\": 6816,\n        \"name\": \"Adesh Pawaroo\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/9cf205437926994153a37af87c1288d8?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6794,\n        \"name\": \"Albert Kim\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/4d79881f551aa8f682c81638e7c8fb72?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6785,\n        \"name\": \"Alberto Young\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/41d36af3c603abe471a5234b5e0867bc?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6802,\n        \"name\": \"Daniel Bradley\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/8830451b202077307b6fac3811087606?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6783,\n        \"name\": \"Efren Bahena\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/9a9f7d7bccb02d82efe3eb580384967c?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6775,\n        \"name\": \"Elliot Wilson\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/935b4cdc6e7abebecaf0668104bc5d49?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6779,\n        \"name\": \"Emily Wu\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/b96aac5df21cf8fa8dc3ed4e6e47cad9?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6774,\n        \"name\": \"Farzam Ahmad\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/fa03f7be29540e5c153a6ddc0ab664e9?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6579,\n        \"name\": \"Feifei Yang\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/09e4a5f03ee58181c2ac1613379705e7?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6793,\n        \"name\": \"George Tsimis\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/c9f7167cee2b8460ad080812c1f703a7?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6623,\n        \"name\": \"Hien Nguyen\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/a91347c10a547c70c0b9cf62d28e8361?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6781,\n        \"name\": \"Jonathan Berzon\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/6e07e759378e76e86222ec7e9b71433d?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6784,\n        \"name\": \"Jonathan Ortiz\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/63546c4413287498e9e2dc1eea492cd7?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6806,\n        \"name\": \"Madeline Wilson\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/e35d57bbb1cba3c602b2245ad2d0caad?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6673,\n        \"name\": \"Maisie Bruno-Tyne\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/6d93cdbc69a1fdaf471be7d8cd0590f0?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6778,\n        \"name\": \"Mansoo Kim\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/ff3fe83ad8a0a4c190b8dbf5364ea389?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6776,\n        \"name\": \"Maria Vaghani\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/ae94ee1c44309e29ae661a9b33fed55b?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6814,\n        \"name\": \"Matteo Rossant\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/47c2d6b7578557feeca0c268b9188cf5?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6803,\n        \"name\": \"Matthew (Matt) Swedin\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/18e3e44761968093ceeb8fd6960d6926?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6799,\n        \"name\": \"Michelle (Mickey) Addai\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/4b4af7bfd4aac944772c901f0c2e59a3?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6798,\n        \"name\": \"Mohammed (Emmay) Alam\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/ebcd5f8a9dd1512db70e25082a765b12?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6818,\n        \"name\": \"Neil Pandya\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/c9237d079002b5feb615d6c07fc7b76d?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6782,\n        \"name\": \"Pasan Dharmasena\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/9d3e79e6f11ae987c5af51ba2efe8996?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6626,\n        \"name\": \"Pierre Navarin\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/cd2b0db841fb9465e27aff4f138fef2e?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6804,\n        \"name\": \"Rebecca Foster\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/88addcaf6fd886ad087df436b1476734?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6712,\n        \"name\": \"Snigdha Banda\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/d6128f151060cb920c3c8b71068d34d3?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6801,\n        \"name\": \"Sohee Park\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/683f2e331692322aa9e876a05eab5192?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6770,\n        \"name\": \"Stella Kang\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/1b9cde9b5440aa30a1ebbd4c4e44b504?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6795,\n        \"name\": \"Subin Cho\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/c29d5885f46b0b26eaead8861b20d7b5?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6772,\n        \"name\": \"Suzanne Li\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/6b06e3e645f8b4a66c36b7e077df0a1b?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6585,\n        \"name\": \"Sydney Parsons\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/f9fe38748f7988acd5f0f57214d74458?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6817,\n        \"name\": \"Tyler Koh\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/f902735459364e971085ea94b12fff6f?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6790,\n        \"name\": \"Victor He\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/560d8118515be4ba18805d8c0ee3a6ea?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6555,\n        \"name\": \"Yehuda Goldschein\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/628f7c0eacc42bc967ec2fe9156dda10?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6813,\n        \"name\": \"Zayed Cheema\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/74a29d92307c23ae224b8fc96bcdc99d?secure=true&size=300\",\n        \"occup\": \"student\"\n    },\n    {\n        \"id\": 6805,\n        \"name\": \"Zeki Kural\",\n        \"imageUrl\": \"https://secure.gravatar.com/avatar/0cb68454e72e7f285a035b3a14ee6d80?secure=true&size=300\",\n        \"occup\": \"student\"\n    }\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (students);\n\n//# sourceURL=webpack:///./src/students/2021-11-23.js?");

/***/ })

/******/ });