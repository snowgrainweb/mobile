(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"container-fluide w-100\">\n  </div>\n  <header class=\"h-100\">\n    <mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark unique-color-dark scrolling-navbar intro-fixed-nav\"\n      [containerInside]=\"false\">\n      <logo>\n        <a class=\"logo navbar-brand\" href=\"#\">\n          <strong>{{data.menu.title}}</strong>\n        </a>\n      </logo>\n      <!--<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">-->\n      <links>\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item waves-light\" *ngFor=\"let link of data.menu.links\" mdbWavesEffect>\n            <a class=\"nav-link\" href=\"{{link.href}}\">{{link.label}}</a>\n          </li>\n          <li class=\"nav-item waves-light d-block d-lg-none\" mdbWavesEffect>\n            <a class=\"nav-link\" href=\"/login\">Login</a>\n          </li>\n        </ul>\n        <form class=\"form-inline ml-auto d-none d-lg-block\" *ngIf=\"data.menu.search.isVisible\">\n          <div class=\"md-form mt-0\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n          </div>\n        </form>\n        <button class=\"btn btn-outline-white btn-md my-0 ml-sm-2 float-right d-none d-lg-block\" *ngIf=\"data.menu.login.isVisible\"> Login</button>\n      </links>\n      <!--</div>-->\n    </mdb-navbar>\n    <div class=\"container-fluide pt-5\">\n      <!--Carousel Wrapper-->\n      <mdb-carousel [isControls]=\"true\" class=\"carousel slide carousel-fade\" [animation]=\"'fade'\">\n        <!--First slide-->\n        <ng-container *ngFor=\"let slide of data.slider.items\">\n          <mdb-slide>\n            <div class=\"view w-100\">\n              <img class=\"d-block w-100\" [src]=\"slide.url\" alt=\"First slide\">\n              <div class=\"mask rgba-black-light waves-light\" mdbWavesEffect></div>\n            </div>\n            <div class=\"carousel-caption\">\n              <h3 class=\"h3-responsive\">{{slide.title}}</h3>\n              <p>{{slide.subTitle}}</p>\n            </div>\n          </mdb-slide>\n        </ng-container>\n        <!--/Third slide-->\n      </mdb-carousel>\n      <!--/.Carousel Wrapper-->\n    </div>\n  </header>\n  <div class=\"container\">\n    <!-- Projects section v.1 -->\n    <section class=\"text-center my-5\">\n\n      <!-- Section heading -->\n      <h2 class=\"h1-responsive font-weight-bold my-5\">Articles</h2>\n      <!-- Section description -->\n      <!-- Grid row -->\n      <div class=\"row text-center\">\n\n        <!-- Grid column -->\n        <div *ngFor=\"let project of data.projects\" class=\"col-lg-4 col-md-12 mb-lg-0 mb-4\">\n          <!--Featured image-->\n          <div class=\"view overlay rounded z-depth-1\">\n            <img [src]=\"project.image\" class=\"img-fluid\" alt=\"Sample project image\">\n            <a>\n              <div class=\"mask rgba-white-slight\"></div>\n            </a>\n          </div>\n          <!--Excerpt-->\n          <div class=\"card-body pb-0\">\n            <h4 class=\"font-weight-bold my-3\">{{project.title}}</h4>\n            <p class=\"grey-text\">{{project.content}}\n            </p>\n            <a class=\"btn btn-indigo btn-sm\">\n              <i class=\"fa fa-clone left\"></i> Read more..</a>\n          </div>\n        </div>\n        <!-- Grid column -->\n      </div>\n      <!-- Grid row -->\n\n    </section>\n\n    <!-- Projects section v.2 -->\n    <section class=\"text-center my-5\">\n\n      <!-- Section heading -->\n      <h2 class=\"h1-responsive font-weight-bold my-5\">Deals of the day</h2>\n      <!-- Section description -->\n      <!-- Grid row -->\n      <div class=\"row d-flex justify-content-center\">\n\n        <!-- Grid column -->\n        <div *ngFor=\"let deal of data.deals\" class=\"col-md-6 col-xl-5 mb-4\">\n          <!--Featured image-->\n          <div class=\"view overlay rounded z-depth-2\">\n            <img [src]=\"deal.image\" class=\"img-fluid\" alt=\"Sample project image\">\n            <a>\n              <div class=\"mask rgba-white-slight\"></div>\n            </a>\n          </div>\n          <!--Excerpt-->\n          <div class=\"card-body\">\n            <h4 class=\"font-weight-bold mb-3\">{{deal.title}}</h4>\n            <p>{{deal.content}}</p>\n            <a class=\"btn btn-success btn-rounded btn-md\"> View more</a>\n          </div>\n        </div>\n\n      </div>\n      <!-- Grid row -->\n\n    </section>\n    <!-- Projects section v.2 -->\n\n  </div>\n  <!-- Projects section v.1 -->\n  <div class=\"container-fluide unique-color-dark pt-1\">\n    <div class=\"container text-center text-md-left mt-5\">\n      <div class=\"row mt-3\">\n        <!--First column-->\n        <div class=\"col-md-3 col-lg-4 col-xl-3 mb-4\" *ngFor=\"let footer of data.footers\">\n          <h6 class=\"text-uppercase font-weight-bold white-text\">\n            <strong>{{footer.title}}</strong>\n          </h6>\n          <hr class=\"info-color mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\n          <p *ngFor=\"let item of footer.items\" class=\"white-text\">\n            <a href=\"/faq/\">{{item}}</a>\n          </p>\n        </div>\n        <!--/.First column-->\n        <!--/.Third column-->\n        <!--Fourth column-->\n        <div class=\"col-md-4 col-lg-3 col-xl-3\">\n          <h6 class=\"text-uppercase font-weight-bold white-text\">\n            <strong>Company</strong>\n          </h6>\n          <hr class=\"info-color mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\n          <p class=\"white-text\">\n            <a href=\"/our-team/\">\n              <i class=\"fa fa-envelope mr-3\"></i> contact@mdbootstrap.com\n            </a>\n          </p>\n          <!-- <p>\n                <i class=\"fa fa-building mr-3\"></i> Our story</p> -->\n          <p class=\"white-text\">\n            <a href=\"/our-team/\">\n              <i class=\"fa fa-facebook mr-3\"></i> Facebook</a>\n          </p>\n          <p class=\"white-text\">\n            <a href=\"/contact/\">\n              <i class=\"fa fa-twitter mr-3\"></i> Twitter</a>\n          </p>\n          <p class=\"white-text\">\n            <a href=\"/mdbootstrap-press-pack/\">\n              <i class=\"fa fa-instagram mr-3\"></i> Instagram</a>\n          </p>\n        </div>\n        <!--/.Fourth column-->\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  background-size: cover; }\n\n.navbar {\n  margin-bottom: 60px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.title = 'app';
        this.data = {};
        this.http.getData().subscribe(function (data) {
            _this.data = data;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        document.addEventListener('deviceready', function () {
            alert(device.platform);
        }, false);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_1__["HttpServiceService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot()
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-service.service.ts ***!
  \*****************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpServiceService = /** @class */ (function () {
    function HttpServiceService(http) {
        this.http = http;
    }
    HttpServiceService.prototype.getData = function () {
        return this.http.get('https://us-central1-test-project-7d5f1.cloudfunctions.net/date');
    };
    HttpServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpServiceService);
    return HttpServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WS\WebAngular\content-site\mobile\snowgrain\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map