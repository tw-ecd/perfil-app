webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<app-photo-taker></app-photo-taker>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__photo_taker_photo_taker_component__ = __webpack_require__("./src/app/photo-taker/photo-taker.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__photo_taker_photo_taker_component__["a" /* PhotoTakerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/photo-taker/photo-taker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tablet\">\n  <div class=\"content\">\n    <div class=\"intro-text\">Clique na foto para ver sua aura</div>\n    <div id=\"p5-canvas\" class=\"photo-preview-container\"></div>\n\n    <div class=\"button-container invisible\">\n      <div class=\"button button-retake\">\n        <i class=\"fas fa-sync-alt\"></i>\n      </div>\n\n      <div class=\"button button-share\">\n        <i class=\"fas fa-share\"></i>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/photo-taker/photo-taker.component.scss":
/***/ (function(module, exports) {

module.exports = ".tablet {\n  height: 100vh;\n  max-height: 133vw;\n  max-width: 75vh;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0;\n  margin: 0 auto;\n  border: 2px #000 solid; }\n\n.content {\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 16px; }\n\n.intro-text {\n  text-align: left;\n  padding: 24px 4px;\n  font-size: 18px;\n  font: normal 24px 'Raleway', 'Arial';\n  color: #888;\n  background-color: white; }\n\n.photo-preview-container {\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  text-align: center;\n  padding: 0; }\n\n.button-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.button {\n  width: 45%;\n  margin: 2.5%;\n  padding: 4px 0;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  border-radius: 5px;\n  cursor: pointer;\n  -webkit-transition: background-color 0.1s linear;\n  transition: background-color 0.1s linear; }\n\n.button:hover {\n  background-color: #666; }\n\n.invisible {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/photo-taker/photo-taker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoTakerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoTakerComponent = /** @class */ (function () {
    function PhotoTakerComponent() {
    }
    PhotoTakerComponent.prototype.ngOnInit = function () {
        var photo = new p5(this.sketch);
    };
    PhotoTakerComponent.prototype.sketch = function (p) {
        var canvasDiv = document.getElementById('p5-canvas');
        var canvasDivWidth = canvasDiv.offsetWidth;
        var buttonsDiv = document.getElementsByClassName('button-container')[0];
        var retakeButtonDiv = document.getElementsByClassName('button-retake')[0];
        var shareButtonDiv = document.getElementsByClassName('button-share')[0];
        var capture, bCapture, captureImage;
        var cornerAura, brightnessMask, resultAura;
        var x = 100;
        var y = 100;
        p.preload = function () {
            canvasDiv.onclick = takePicture;
            cornerAura = p.loadImage("assets/aura-corner.png");
        };
        p.setup = function () {
            var cnv = p.createCanvas(400, 600);
            cnv.parent('p5-canvas');
            capture = p.createCapture(p.VIDEO);
            capture.size(960, 720);
            capture.hide();
            bCapture = true;
            captureImage = p.createImage(capture.width, capture.height);
            brightnessMask = p.createGraphics(p.width, p.height);
            brightnessMask.pixelDensity(1);
            resultAura = p.createGraphics(p.width, p.height);
            resultAura.pixelDensity(1);
            p.imageMode(p.CENTER);
        };
        p.draw = function () {
            p.background(0);
            if (bCapture) {
                captureImage.copy(capture, 0, 0, capture.width, capture.height, 0, 0, captureImage.width, captureImage.height);
                adjustBrightnessContrast(captureImage, 255);
                p.image(captureImage, p.width / 2, p.height / 2);
            }
            else {
                p.image(resultAura, p.width / 2, p.height / 2, p.width, p.height);
            }
            ;
        };
        function drawAuras(bground) {
            resultAura.imageMode(p.CENTER);
            resultAura.push();
            resultAura.translate(resultAura.width / 2, resultAura.height / 2);
            resultAura.noTint();
            resultAura.image(bground, 0, 0);
            for (var i = 0; i < 8; i++) {
                if (p.random(1.0) > 0.4) {
                    resultAura.push();
                    resultAura.rotate(p.TWO_PI * i / 8.0 + p.random(1.0) * p.PI / 8.0);
                    if (p.random(1) < 0.333) {
                        resultAura.tint(0, 0, 150, 200);
                    }
                    else if (p.random(1) < 0.66) {
                        resultAura.tint(0, 150, 0, 200);
                    }
                    else {
                        resultAura.tint(150, 0, 0, 200);
                    }
                    resultAura.translate(-resultAura.width / p.random(2, 8), -resultAura.height / p.random(2, 8));
                    resultAura.image(cornerAura, 0, 0, resultAura.width, resultAura.height);
                    resultAura.tint(255, 200);
                    resultAura.image(cornerAura, -resultAura.width / 10, -resultAura.height / 10, resultAura.width, resultAura.height);
                    resultAura.pop();
                }
            }
            resultAura.pop();
        }
        function takePicture() {
            bCapture = false;
            canvasDiv.onclick = function () { };
            drawAuras(captureImage);
            // buttonsDiv.style.display = "flex";
            // retakeButtonDiv.onclick = function() {
            //   bCapture = true;
            //   buttonsDiv.style.display = "none";
            //   canvasDiv.onclick = takePicture;
            // }
            // shareButtonDiv.onclick = function() {
            //   p.resizeCanvas(canvasDivWidth/3, canvasDivWidth/3);
            //   buttonsDiv.style.display = "none";
            // }
        }
        function adjustBrightnessContrast(pimg, value) {
            var original = p.createImage(pimg.width, pimg.height);
            original.copy(pimg, 0, 0, pimg.width, pimg.height, 0, 0, original.width, original.height);
            brightnessMask.background(value);
            pimg.blend(brightnessMask, 0, 0, brightnessMask.width, brightnessMask.height, 0, 0, pimg.width, pimg.height, p.DARKEST);
            pimg.blend(original, 0, 0, original.width, original.height, 0, 0, pimg.width, pimg.height, p.NORMAL);
        }
    };
    PhotoTakerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-photo-taker',
            template: __webpack_require__("./src/app/photo-taker/photo-taker.component.html"),
            styles: [__webpack_require__("./src/app/photo-taker/photo-taker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotoTakerComponent);
    return PhotoTakerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map