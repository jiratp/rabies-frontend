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

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <header class=\"header\">\n        <app-header></app-header>\n    </header>\n    <div id=\"content-wrapper\" class=\"gray-bg\">\n        <app-pages></app-pages>\n    </div>\n    <footer class=\"page-footer\">\n        <app-footer></app-footer>\n    </footer>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n* {\n  /* personal preference */\n  margin: 0;\n  padding: 0; }\nhtml, body {\n  font-family: \"pridiregular\", \"sans-serif\";\n  background: #FFFFFF;\n  font-size: 16px;\n  font-weight: 400;\n  color: #4d545a;\n  overflow-x: hidden;\n  line-height: 1.42857143;\n  height: 100%;\n  width: 100%; }\n#wrapper {\n  background: #ECEDEF;\n  height: auto !important;\n  /* real browsers */\n  height: 100%;\n  /* IE6: treaded as min-height*/\n  min-height: 100%;\n  /* real browsers */ }\n#wrapper .header {\n    min-height: 87px;\n    position: relative;\n    background: #39B062;\n    height: 11vh; }\n#wrapper #content-wrapper {\n    position: relative; }\n#wrapper .page-footer {\n    clear: both;\n    position: relative;\n    bottom: 0px;\n    background-color: #39b062;\n    height: 9vh;\n    min-height: 70px; }\n.clear-fix {\n  clear: both; }\n.item-center {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  justify-items: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  #wrapper {\n    background: #ECEDEF;\n    min-height: 100%; }\n    #wrapper .header {\n      background: #39B062;\n      min-height: 67px; }\n    #wrapper .page-footer {\n      height: auto;\n      min-height: auto; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  #wrapper {\n    background: #ECEDEF;\n    min-height: 100%; }\n    #wrapper .header {\n      background: #39B062;\n      min-height: 67px; }\n    #wrapper .page-footer {\n      height: auto;\n      min-height: auto; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  #wrapper {\n    background: #ECEDEF;\n    min-height: 100%; }\n    #wrapper .header {\n      background: #39B062;\n      min-height: 67px; }\n    #wrapper .page-footer {\n      height: auto;\n      min-height: auto; } }\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 834px) and (max-width: 1112px) {\n  #wrapper {\n    background: #ECEDEF;\n    min-height: 100%; }\n    #wrapper .header {\n      background: #39B062;\n      min-height: 67px; }\n    #wrapper .page-footer {\n      height: auto;\n      min-height: auto; } }\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 1024px) and (max-width: 1366px) {\n  #wrapper {\n    background: #ECEDEF;\n    min-height: 100%; }\n    #wrapper .header {\n      background: #39B062;\n      min-height: 67px; }\n    #wrapper .page-footer {\n      height: auto;\n      min-height: auto; } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_config_service__ = __webpack_require__("./src/app/core/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_platform__ = __webpack_require__("./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AppComponent = /** @class */ (function () {
    function AppComponent(themeConfig, platform, document) {
        var _this = this;
        this.themeConfig = themeConfig;
        this.platform = platform;
        this.document = document;
        this.title = 'app';
        this.onSettingsChanged =
            this.themeConfig.onSettingsChanged
                .subscribe(function (newSettings) {
                _this.themeConfigs = newSettings;
                _this.layoutMode = _this.themeConfigs.layout.mode;
            });
        if (this.platform.ANDROID || this.platform.IOS) {
            this.document.body.className += ' is-mobile';
        }
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.onSettingsChanged.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('attr.fuse-layout-mode'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "layoutMode", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_cdk_platform__["a" /* Platform */], Object])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_sidebar__ = __webpack_require__("./node_modules/primeng/sidebar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pages_module__ = __webpack_require__("./src/app/pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_config_service__ = __webpack_require__("./src/app/core/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_cdk_platform__ = __webpack_require__("./node_modules/@angular/cdk/esm5/platform.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { ToolbarComponent } from './components/toolbar/toolbar.component';



/*
import {
  NgbModule,
  NgbTypeaheadModule,
  NgbDropdownModule,
  NgbAlertModule,
  NgbDatepickerModule,
  NgbTabsetModule,
  NgbTooltipModule,
  NgbProgressbarModule
} from '@ng-bootstrap/ng-bootstrap';
*/


var appRoutes = [
    {
        path: '**',
        redirectTo: 'home'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pages_module__["a" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_primeng_sidebar__["SidebarModule"],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["c" /* ModalModule */].forRoot(),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__core_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_12__angular_cdk_platform__["a" /* Platform */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

/*
    NgbModule.forRoot(),
    NgbTypeaheadModule,
    NgbDropdownModule,
    NgbAlertModule,
    NgbDatepickerModule,
    NgbTabsetModule,
    NgbTooltipModule,
    NgbProgressbarModule,
*/


/***/ }),

/***/ "./src/app/components/dialog-alert/dialog.alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\" [ngClass]=\"responseStatus === 'success' ? 'responseSuccess' : (responseStatus === 'error' ? 'responseError' : '')\"> <!-- responseError || responseSuccess -->\n  <div class=\"dialog-header-body\">\n    <h4 class=\"modal-title\">ข้อความจากระบบ</h4>\n  </div> \n</div>\n<div class=\"modal-body\">\n  <div class=\"dialog-content-body\">\n    <span> ไม่สามารถเข้าสู่ระบบได้ เนื่องจากข้อมูลผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง </span>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <div class=\"dialog-footer-body\">\n    <button type=\"button\" class=\"btn btn-light\" [ngClass]=\"responseStatus === 'success' ? 'btn-response-success' : (responseStatus === 'error' ? 'btn-response-error' : '')\" (click)=\"endProcessClose()\">ตกลง</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/dialog-alert/dialog.alert.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.modal-header.responseError {\n  background: #cd4f4a; }\n.modal-header.responseError .dialog-header-body {\n    width: 100%; }\n.modal-header.responseError .dialog-header-body .modal-title {\n      color: #ffffff; }\n.modal-header.responseError .dialog-header-body button.close {\n      color: #ffffff; }\n.modal-header.responseSuccess {\n  background: #8cc28b; }\n.modal-header.responseSuccess .dialog-header-body {\n    width: 100%; }\n.modal-header.responseSuccess .dialog-header-body .modal-title {\n      color: #FFFFFF; }\n.modal-header.responseSuccess .dialog-header-body button.close {\n      color: #FFFFFF; }\n.modal-header .dialog-header-body {\n  width: 100%; }\n.modal-header .dialog-header-body .modal-title {\n    display: inline-block;\n    font-family: \"promptmedium\", \"sans-serif\";\n    font-size: 20px; }\n.modal-header .dialog-header-body button.close {\n    display: inline-block;\n    padding-top: 20px;\n    padding-right: 20px; }\n.modal-body .dialog-content-body {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n.modal-body .dialog-content-body span {\n    font-family: \"pridiregular\", \"sans-serif\";\n    font-size: 16px; }\n.modal-footer .dialog-footer-body button {\n  padding-left: 30px;\n  padding-right: 30px;\n  font-family: \"promptmedium\", \"sans-serif\";\n  font-size: 18px; }\n.modal-footer .dialog-footer-body button.btn-response-error {\n    background: #cd4f4a;\n    color: #ffffff; }\n.modal-footer .dialog-footer-body button.btn-response-success {\n    background: #8cc28b;\n    color: #FFFFFF; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/components/dialog-alert/dialog.alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogAlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogAlertComponent = /** @class */ (function () {
    function DialogAlertComponent(modalRef) {
        this.modalRef = modalRef;
    }
    DialogAlertComponent.prototype.ngOnInit = function () {
        this.responseStatus = 'success'; // success || error
    };
    DialogAlertComponent.prototype.endProcessClose = function () {
        this.modalRef.hide();
    };
    DialogAlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-alert',
            template: __webpack_require__("./src/app/components/dialog-alert/dialog.alert.component.html"),
            styles: [__webpack_require__("./src/app/components/dialog-alert/dialog.alert.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalRef */]])
    ], DialogAlertComponent);
    return DialogAlertComponent;
}());



/***/ }),

/***/ "./src/app/components/esri-map/esri-map.component.css":
/***/ (function(module, exports) {

module.exports = "\n@import 'https://js.arcgis.com/4.6/esri/css/main.css';\n/* import the required JSAPI css */\n.esri-view {\n  height: 500px;\n}"

/***/ }),

/***/ "./src/app/components/esri-map/esri-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div #mapViewNode></div>"

/***/ }),

/***/ "./src/app/components/esri-map/esri-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsriMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_esri_loader__ = __webpack_require__("./node_modules/esri-loader/dist/umd/esri-loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_esri_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_esri_loader__);
/*
  Copyright 2018 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var EsriMapComponent = /** @class */ (function () {
    function EsriMapComponent() {
        this.mapLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @private _zoom sets map zoom
         * @private _center sets map center
         * @private _basemap sets type of map
         */
        // tslint:disable-next-line:no-inferrable-types
        this._zoom = 10;
        this._center = [0.1278, 51.5074];
        // tslint:disable-next-line:no-inferrable-types
        this._basemap = 'streets';
    }
    Object.defineProperty(EsriMapComponent.prototype, "zoom", {
        get: function () {
            return this._zoom;
        },
        set: function (zoom) {
            this._zoom = zoom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EsriMapComponent.prototype, "center", {
        get: function () {
            return this._center;
        },
        set: function (center) {
            this._center = center;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EsriMapComponent.prototype, "basemap", {
        get: function () {
            return this._basemap;
        },
        set: function (basemap) {
            this._basemap = basemap;
        },
        enumerable: true,
        configurable: true
    });
    EsriMapComponent.prototype.initializeMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, EsriMap, EsriMapView, mapProperties, map, mapViewProperties, mapView, error_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1_esri_loader__["loadModules"])([
                                'esri/Map',
                                'esri/views/MapView'
                            ])];
                    case 1:
                        _a = _b.sent(), EsriMap = _a[0], EsriMapView = _a[1];
                        mapProperties = {
                            basemap: this._basemap
                        };
                        map = new EsriMap(mapProperties);
                        mapViewProperties = {
                            container: this.mapViewEl.nativeElement,
                            center: this._center,
                            zoom: this._zoom,
                            map: map
                        };
                        mapView = new EsriMapView(mapViewProperties);
                        // All resources in the MapView and the map have loaded.
                        // Now execute additional processes
                        mapView.when(function () {
                            _this.mapLoaded.emit(true);
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log('We have an error: ' + error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EsriMapComponent.prototype.ngOnInit = function () {
        this.initializeMap();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], EsriMapComponent.prototype, "mapLoaded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mapViewNode'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EsriMapComponent.prototype, "mapViewEl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], EsriMapComponent.prototype, "zoom", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], EsriMapComponent.prototype, "center", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], EsriMapComponent.prototype, "basemap", null);
    EsriMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-esri-map',
            template: __webpack_require__("./src/app/components/esri-map/esri-map.component.html"),
            styles: [__webpack_require__("./src/app/components/esri-map/esri-map.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EsriMapComponent);
    return EsriMapComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid footer-copyright\">\n  <div class=\"row\">\n    <div class=\"col-lg-7 col-md-7 col-sm-12 py-3 footer-copyright-info\">© 2018 Copyright (c)\n      Department of Livestock Development. All right reserved กรมปศุสัตว์\n    </div>\n    <div class=\"col-lg-5 col-md-5 col-sm-12 py-3 footer-contact\">\n      <span class=\"margin-r-15\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> Tel. 02 653 4412</span>\n      <span> <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> Email: dwarroom@did.go.th</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-12 col-lg-12 footer-copyright-info-sm\">© 2018 Copyright (c)\n      Department of Livestock Development. All right reserved กรมปศุสัตว์\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-right: 50px !important;\n  padding-left: 50px !important;\n  margin-right: auto;\n  margin-left: auto;\n  min-height: 70px; }\n.container-fluid.footer-copyright {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    color: #FFFFFF;\n    font-family: \"promptmedium\", \"sans-serif\";\n    font-size: 16px; }\n.container-fluid.footer-copyright .footer-copyright-info {\n      display: block;\n      font-size: 12px; }\n.container-fluid.footer-copyright .footer-contact {\n      text-align: right;\n      font-size: 12px; }\n.container-fluid.footer-copyright .footer-copyright-info-sm {\n      display: none; }\n.margin-r-15 {\n  margin-right: 15px; }\nfooter {\n  z-index: 100;\n  left: 0;\n  bottom: 0;\n  width: 100%; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    min-height: auto;\n    padding-left: 0px !important;\n    padding-right: 0px !important; }\n    .container-fluid .row {\n      margin-left: 0px !important;\n      margin-right: 0px !important; }\n    .container-fluid.footer-copyright {\n      padding-top: 15px; }\n      .container-fluid.footer-copyright .footer-copyright-info {\n        display: none; }\n      .container-fluid.footer-copyright .footer-contact {\n        text-align: center;\n        font-size: 12px; }\n      .container-fluid.footer-copyright .footer-copyright-info-sm {\n        display: block;\n        text-align: center;\n        font-size: 12px;\n        padding-left: 25px;\n        padding-right: 25px;\n        padding-bottom: 20px; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light padding-0 header-theme-bg\" role=\"navigation\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"./assets/images/logo.png\" alt=\"\" class=\"logo d-inline-block align-top\" alt=\"\">\n        <div class=\"brand-name d-inline-block align-top\">\n            <span>ฐานข้อมูลเพื่อการขึ้นทะเบียนสุนัข-แมว</span>\n            <p>Pet Register</p>\n        </div>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar(display)\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse menu-lg-panel\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\" [ngClass]=\"currentPage == 'home' ? 'active' : ''\" (click)=\"navigation('home')\">\n                <img class=\"icon\" src=\"./assets/images/icon-menu-1.png\" alt=\"\">\n                <p>หน้าหลัก</p>\n            </li>\n            <li class=\"nav-item\" [ngClass]=\"currentPage == 'information' ? 'active' : ''\" (click)=\"navigation('information')\">\n                <img class=\"icon\" src=\"./assets/images/icon-menu-2.png\" alt=\"\">\n                <p>ลงทะเบียน</p>\n            </li>\n            <li class=\"nav-item dropdown\" [ngClass]=\"\n            currentPage == 'survey/dashboard' \n            || currentPage == 'survey/animal-has-owner' \n            || currentPage == 'survey/animal-no-owner' \n            || currentPage == 'survey/animal-has-owner/owner-information' \n            || currentPage == 'survey/animal-no-owner/noowner-information-list' \n            || currentPage == 'survey/animal-has-owner/owner-information-list'\n            || currentPage == 'survey/animal-no-owner/noowner-information'  ? 'active' : ''\"> \n\n                <a aria-expanded=\"false\" role=\"button\" data-x-sig=\"PETREG-SURVEY\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    <img class=\"icon\" src=\"./assets/images/icon-menu-3.png\" alt=\"\">\n                    <p>แบบสำรวจ</p>\n                </a>\n\n                <ul role=\"menu\" class=\"dropdown-menu\">\n                    <li><a data-x-sig=\"SV-PET-01\" (click)=\"navigation('survey/dashboard')\">สรุปข้อมูลแบบสำรวจ</a></li>\n                    <li><a data-x-sig=\"SV-PET-02\" (click)=\"navigation('survey/animal-has-owner')\">สัตว์มีเจ้าของ</a></li>\n                    <li><a data-x-sig=\"SV-PET-03\" (click)=\"navigation('survey/animal-no-owner')\">สัตว์ไม่มีเจ้าของ</a></li>\n                </ul>\n            </li>\n\n\n            <li class=\"nav-item\" (click)=\"navigation('suspicious')\">\n                <img class=\"icon\" src=\"./assets/images/icon-menu-4.png\" alt=\"\">\n                <p>แจ้งพบสัตว์</p>\n            </li>\n            <li class=\"nav-item dropdown\" [ngClass]=\"currentPage == 'simple/dashboard' || currentPage == 'laboratory/dashboard' || currentPage == 'simple/animal-simple-list'  ? 'active' : '' || currentPage == 'laboratory/laboratory-simple-list'  ? 'active' : ''\">\n\n\n                <a aria-expanded=\"false\" role=\"button\" data-x-sig=\"PETREG-SIMPLE\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    <img class=\"icon\" src=\"./assets/images/icon-menu-5.png\" alt=\"\">\n                    <p>ส่งตัวอย่าง</p>\n                </a>\n\n                <ul role=\"menu\" class=\"dropdown-menu\">\n                    <li><a data-x-sig=\"SP-PET-01\" (click)=\"navigation('simple/dashboard')\">สรุปข้อมูลการส่งตัวอย่าง</a></li>\n                    <li><a data-x-sig=\"SP-PET-02\" (click)=\"navigation('simple/animal-simple-list')\">รายการส่งตัวอย่าง</a></li>\n                    <li><a data-x-sig=\"SP-PET-03\" (click)=\"navigation('laboratory/dashboard')\">สรุปข้อมูลการวินิจฉัยตัวอย่าง (ห้องวิจัย)</a></li>\n                    <li><a data-x-sig=\"SP-PET-04\" (click)=\"navigation('laboratory/laboratory-simple-list')\">รายการส่งตัวอย่าง (ห้องวิจัย)</a></li>\n                </ul>\n\n            </li>                \n            <li class=\"nav-item dropdown\">\n\n                <a aria-expanded=\"false\" role=\"button\" data-x-sig=\"PETREG-REPORT\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    <img class=\"icon\" src=\"./assets/images/icon-menu-6.png\" alt=\"\">\n                    <p>รายงาน</p>\n                </a>\n                \n                <ul role=\"menu\" class=\"dropdown-menu\">\n                    <li><a data-x-sig=\"RP-PET-01\" (click)=\"navigation('report/dashboard')\">Dashboard</a></li>\n                    <li><a data-x-sig=\"RP-PET-02\" (click)=\"navigation('report/animal-has-owner')\">สรุปข้อมูลสัตว์มีเจ้าของ</a></li>\n                    <li><a data-x-sig=\"RP-PET-03\" (click)=\"navigation('report/animal-no-owner')\">สรุปข้อมูลสัตว์ไม่มีเจ้าของ</a></li>\n                </ul>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a aria-expanded=\"false\" role=\"button\" data-x-sig=\"PETREG-SETTING\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    <i class=\"fa fa-cogs\"> </i>\n                    <p>ตั้งค่าระบบ </p>\n                </a>\n                \n                <ul role=\"menu\" class=\"dropdown-menu\">\n                    <li><a data-x-sig=\"ST-PET-01\" href=\"#\">จัดการข้อมูลผู้ใช้งาน</a></li>\n                    <li><a data-x-sig=\"ST-PET-02\" href=\"#\">จัดการข้อมูลข่าวสาร</a></li>\n                    <li><a data-x-sig=\"ST-PET-03\" href=\"#\">จัดการข้อมูลระบบ</a></li>\n                </ul>\n            </li>\n            <li class=\"nav-item bg-white-menu user-access\" [ngClass]=\"currentPage == 'login' ? 'active' : ''\" (click)=\"navigation('login')\">\n                <img class=\"icon\" src=\"./assets/images/icon-menu-7-gr.png\" alt=\"\">\n                <p>เข้าสู่ระบบ</p>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n\n<p-sidebar [(visible)]=\"display\" position=\"right\">\n\n</p-sidebar>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.navbar.header-theme-bg {\n  height: 11vh;\n  padding-top: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important; }\n.navbar.header-theme-bg .navbar-brand {\n    float: left;\n    height: 11vh;\n    padding-top: 0px !important;\n    padding-bottom: 0px !important; }\n.navbar.header-theme-bg .navbar-brand .logo {\n      margin-top: 12px;\n      width: 65px;\n      margin-right: 10px; }\n.navbar.header-theme-bg .navbar-brand .brand-name {\n      margin-top: 14px; }\n.navbar.header-theme-bg .navbar-brand .brand-name span {\n        font-family: \"promptmedium\", \"sans-serif\";\n        color: #FFFFFF;\n        font-size: 18px; }\n.navbar.header-theme-bg .navbar-brand .brand-name p {\n        font-family: \"promptmedium\", \"sans-serif\";\n        margin-bottom: 0px !important;\n        color: #FFFFFF;\n        font-size: 18px; }\n.navbar.header-theme-bg .collapse {\n    height: 100%;\n    width: 100%;\n    float: left; }\n.navbar.header-theme-bg .collapse.navbar-collapse {\n      display: block !important; }\n.navbar.header-theme-bg .collapse .navbar-nav {\n      height: 100%;\n      text-align: right;\n      margin: 0px !important;\n      padding: 0px !important; }\n.navbar.header-theme-bg .collapse .navbar-nav.navbar-nav {\n        display: inherit !important; }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item {\n        cursor: pointer;\n        text-align: center;\n        padding-top: 20px;\n        padding-left: 15px;\n        padding-right: 15px;\n        height: 100%;\n        display: inline-table;\n        min-width: 100px; }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item.active {\n          background: rgba(0, 0, 0, 0.2); }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item:hover {\n          background: rgba(0, 0, 0, 0.2); }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item .dropdown-toggle i {\n          color: #FFFFFF;\n          font-size: 20px;\n          margin-bottom: 6px; }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item .dropdown-toggle:hover {\n          text-decoration: none; }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item .dropdown-toggle:link {\n          text-decoration: none; }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item .dropdown-toggle:visited {\n          text-decoration: none; }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item .dropdown-toggle:active {\n          text-decoration: none; }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item .dropdown-toggle::after {\n          content: none; }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item .dropdown-menu {\n          border: 1px solid #e7eaec;\n          margin-top: -10px !important;\n          -webkit-box-shadow: 1px 2px 2px 0.5px rgba(0, 0, 0, 0.1) !important;\n                  box-shadow: 1px 2px 2px 0.5px rgba(0, 0, 0, 0.1) !important;\n          border-radius: 3px !important;\n          float: left;\n          font-size: 12px;\n          left: 0;\n          list-style: none outside none;\n          padding: 0;\n          position: absolute;\n          text-shadow: none;\n          top: 100%;\n          z-index: 1000;\n          min-width: 160px;\n          text-align: left;\n          background-color: #fff;\n          background-clip: padding-box; }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item .dropdown-menu::before {\n            display: block;\n            position: absolute;\n            left: 50px;\n            content: \"\";\n            border-style: none double solid;\n            width: 0;\n            height: 0;\n            top: -11px;\n            border-left: 10px solid transparent;\n            border-right: 10px solid transparent;\n            border-bottom: 11px solid #FFFFFF; }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item .dropdown-menu li {\n            padding-top: 5px !important;\n            padding-bottom: 5px !important;\n            padding-right: 30px; }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item .dropdown-menu li:nth-child(1) {\n              padding-top: 15px !important;\n              border-top-left-radius: 3px;\n              border-top-right-radius: 3px; }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item .dropdown-menu li:last-child:not(:only-child) {\n              padding-bottom: 10px !important; }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item .dropdown-menu li a {\n              clear: both;\n              white-space: nowrap;\n              text-align: left;\n              font-weight: normal;\n              border-radius: 3px;\n              color: inherit;\n              line-height: 25px;\n              padding: 3px 20px !important;\n              font-family: \"promptmedium\", \"sans-serif\";\n              color: #676a6c;\n              font-size: 14px; }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item .dropdown-menu li a:hover {\n                text-decoration: none;\n                color: #39B062; }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item .icon {\n          width: 24px;\n          padding-bottom: 5px; }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item p {\n          font-family: \"promptmedium\", \"sans-serif\";\n          color: #FFFFFF;\n          font-size: 16px;\n          padding-left: 10px;\n          padding-right: 10px; }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item.user-access {\n          width: 155px;\n          background: #FFFFFF; }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item.user-access .icon {\n            color: #39B062; }\n.navbar.header-theme-bg .collapse .navbar-nav .nav-item.user-access p {\n            color: #39B062; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .navbar.header-theme-bg {\n    height: 67px; }\n    .navbar.header-theme-bg .navbar-brand {\n      height: 67px; }\n      .navbar.header-theme-bg .navbar-brand .logo {\n        margin-top: 15px;\n        width: 35px; }\n      .navbar.header-theme-bg .navbar-brand .brand-name {\n        margin-top: 6px; }\n        .navbar.header-theme-bg .navbar-brand .brand-name span {\n          font-size: 14px; }\n        .navbar.header-theme-bg .navbar-brand .brand-name p {\n          font-size: 12px; }\n    .navbar.header-theme-bg .navbar-toggler {\n      padding: 5px 5px;\n      margin-right: 15px;\n      position: relative;\n      background: #FFFFFF; }\n      .navbar.header-theme-bg .navbar-toggler .navbar-toggler-icon {\n        width: 1em;\n        height: 1em; }\n    .navbar.header-theme-bg .collapse.navbar-collapse {\n      display: none !important; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .navbar.header-theme-bg {\n    height: 67px; }\n    .navbar.header-theme-bg .navbar-brand {\n      height: 67px; }\n      .navbar.header-theme-bg .navbar-brand .logo {\n        margin-top: 15px;\n        width: 35px; }\n      .navbar.header-theme-bg .navbar-brand .brand-name {\n        margin-top: 6px; }\n        .navbar.header-theme-bg .navbar-brand .brand-name span {\n          font-size: 14px; }\n        .navbar.header-theme-bg .navbar-brand .brand-name p {\n          font-size: 12px; }\n    .navbar.header-theme-bg .navbar-toggler {\n      padding: 5px 5px;\n      margin-right: 15px;\n      position: relative;\n      background: #FFFFFF; }\n      .navbar.header-theme-bg .navbar-toggler .navbar-toggler-icon {\n        width: 1em;\n        height: 1em; }\n    .navbar.header-theme-bg .collapse.navbar-collapse {\n      display: none !important; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  .navbar.header-theme-bg {\n    height: 67px; }\n    .navbar.header-theme-bg .navbar-brand {\n      height: 67px; }\n      .navbar.header-theme-bg .navbar-brand .logo {\n        margin-top: 15px;\n        width: 35px; }\n      .navbar.header-theme-bg .navbar-brand .brand-name {\n        margin-top: 6px; }\n        .navbar.header-theme-bg .navbar-brand .brand-name span {\n          font-size: 14px; }\n        .navbar.header-theme-bg .navbar-brand .brand-name p {\n          font-size: 12px; }\n    .navbar.header-theme-bg .navbar-toggler {\n      padding: 5px 5px;\n      margin-right: 15px;\n      position: relative;\n      background: #FFFFFF; }\n      .navbar.header-theme-bg .navbar-toggler .navbar-toggler-icon {\n        width: 1em;\n        height: 1em; }\n    .navbar.header-theme-bg .collapse.navbar-collapse {\n      display: none !important; } }\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 834px) and (max-width: 1112px) {\n  .navbar.header-theme-bg {\n    height: 67px; }\n    .navbar.header-theme-bg .navbar-brand {\n      height: 67px; }\n      .navbar.header-theme-bg .navbar-brand .logo {\n        margin-top: 15px;\n        width: 35px; }\n      .navbar.header-theme-bg .navbar-brand .brand-name {\n        margin-top: 6px; }\n        .navbar.header-theme-bg .navbar-brand .brand-name span {\n          font-size: 14px; }\n        .navbar.header-theme-bg .navbar-brand .brand-name p {\n          font-size: 12px; }\n    .navbar.header-theme-bg .navbar-toggler {\n      padding: 5px 5px;\n      margin-right: 15px;\n      position: relative;\n      background: #FFFFFF; }\n      .navbar.header-theme-bg .navbar-toggler .navbar-toggler-icon {\n        width: 1em;\n        height: 1em; }\n    .navbar.header-theme-bg .collapse.navbar-collapse {\n      display: none !important; } }\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        var _this = this;
        this.router = router;
        this.display = false;
        router.events.subscribe(function (value) {
            if (value.url) {
                var url = value.url.replace('/', '');
                switch (url) {
                    case 'home':
                        _this.currentPage = 'home';
                        break;
                    case 'information':
                        _this.currentPage = 'information';
                        break;
                    case 'survey/dashboard':
                        _this.currentPage = 'survey/dashboard';
                        break;
                    case 'survey/animal-has-owner':
                        _this.currentPage = 'survey/animal-has-owner';
                        break;
                    case 'survey/animal-no-owner':
                        _this.currentPage = 'survey/animal-no-owner';
                        break;
                    case 'simple/dashboard':
                        _this.currentPage = 'simple/dashboard';
                        break;
                    case 'simple/animal-simple-list':
                        _this.currentPage = 'simple/animal-simple-list';
                        break;
                    case 'laboratory/dashboard':
                        _this.currentPage = 'laboratory/dashboard';
                        break;
                    case 'laboratory/laboratory-simple-list':
                        _this.currentPage = 'laboratory/laboratory-simple-list';
                        break;
                    case 'survey/animal-has-owner/owner-information':
                        _this.currentPage = 'survey/animal-has-owner/owner-information';
                        break;
                    case 'survey/animal-has-owner/owner-information-list':
                        _this.currentPage = 'survey/animal-has-owner/owner-information-list';
                        break;
                    case 'survey/animal-no-owner/noowner-information-list':
                        _this.currentPage = 'survey/animal-no-owner/noowner-information-list';
                        break;
                    case 'survey/animal-no-owner/noowner-information':
                        _this.currentPage = 'survey/animal-no-owner/noowner-information';
                        break;
                    default:
                        _this.currentPage = 'home';
                }
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.navigation = function (page) {
        this.currentPage = page;
        this.router.navigate([page]);
    };
    HeaderComponent.prototype.toggleSidebar = function (display) {
        this.display = !display;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_platform__ = __webpack_require__("./node_modules/@angular/cdk/esm5/platform.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigService = /** @class */ (function () {
    /**
     * @param router
     * @param platform
     */
    function ConfigService(router, platform) {
        var _this = this;
        this.router = router;
        this.platform = platform;
        // Set the default settings
        this.defaultSettings = {
            layout: {
                navigation: 'none',
                navigationFolded: false,
                toolbar: 'below',
                footer: 'none',
                mode: 'fullwidth' // 'boxed', 'fullwidth'
            },
            customScrollbars: true,
            routerAnimation: 'fadeIn',
            dialogAlertSetting: {
                animated: true,
                backdrop: true,
                ignoreBackdropClick: true,
                class: 'modal-dialog-centered',
            },
            dialogFormSetting: {
                animated: true,
                backdrop: true,
                ignoreBackdropClick: false,
                class: 'modal-lg modal-dialog-centered',
            },
            lacaleTH: {
                firstDayOfWeek: 0,
                dayNames: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'],
                dayNamesShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
                dayNamesMin: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
                // tslint:disable-next-line:max-line-length
                monthNames: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
                monthNamesShort: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
                today: 'วันนี้',
                clear: 'ยกเลิก'
            },
            dateTimeFormat: 'dd/mm/yy'
        };
        /**
         * Disable Custom Scrollbars if Browser is Mobile
         */
        if (this.platform.ANDROID || this.platform.IOS) {
            this.defaultSettings.customScrollbars = false;
        }
        // Set the settings from the default settings
        this.settings = Object.assign({}, this.defaultSettings);
        // Reload the default settings on every navigation start
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* NavigationStart */]) {
                _this.setSettings({ layout: _this.defaultSettings.layout });
            }
        });
        // Create the behavior subject
        this.onSettingsChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.settings);
    }
    /**
     * Sets settings
     * @param settings
     */
    ConfigService.prototype.setSettings = function (settings) {
        // Set the settings from the given object
        this.settings = Object.assign({}, this.settings, settings);
        // Trigger the event
        this.onSettingsChanged.next(this.settings);
    };
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_cdk_platform__["a" /* Platform */]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/pages/animal-information/animal.information.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <div class=\"dialog-form-header-body\">\n        <h4 class=\"modal-title\">{{titleModal}}</h4>\n    </div> \n    <button type=\"button\" class=\"close dialog-form-close pull-right\" aria-label=\"Close\" (click)=\"modalClose()\">\n        <span aria-hidden=\"true\">&times;</span> \n    </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"dialog-form-content-body\">\n        <form class=\"form-animal-information mt-3\" name=\"animalInformationForm\" [formGroup]=\"animalInformationForm\">\n            <div class=\"card-body form-animal-information-card-body\">\n                <div class=\"row\">\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\">  \n                        <div class=\"form-group-panel clear-fix\">\n                            <div class=\"row\">\n                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-group-body\"> \n                                    <div class=\"row\">\n                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-group-body-panel form-text-panel\">  \n                                            <div class=\"row\">\n                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 form-text-panel\">  \n                                                    <div class=\"form-group clear-fix\">\n                                                        <label for=\"identityName\" class=\"form-label\">ชื่อ</label>\n                                                        <input type=\"text\" class=\"form-control\" id=\"identityName\" >\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 form-text-panel\">  \n                                                    <div class=\"form-group clear-fix\">\n                                                        <label for=\"identityAttr\" class=\"form-label\">ลักษณะสัตว์</label>\n                                                        <input type=\"text\" class=\"form-control\" id=\"identityAttr\">\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 form-text-panel\">  \n                                                    <div class=\"form-group clear-fix\">\n                                                        <label for=\"animalCategory\" class=\"form-label\">ประเภทสัตว์</label>\n                                                        <p-dropdown placeholder=\"เลือกประเภทสัตว์\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"animalCategory\"></p-dropdown>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 form-text-panel\">  \n                                                    <div class=\"form-group clear-fix\">\n                                                        <label for=\"species\" class=\"form-label\">สายพันธ์ุ</label>\n                                                        <p-dropdown placeholder=\"เลือกสายพันธ์ุ\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"species\"></p-dropdown>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 form-text-panel\">  \n                                                    <div class=\"form-group clear-fix\">\n                                                        <label for=\"color\" class=\"form-label\">สี</label>\n                                                        <p-dropdown placeholder=\"เลือกสี\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"color\"></p-dropdown>\n                                                    \n                                                    </div>\n                                                </div>\n                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 form-text-panel\">  \n                                                    <div class=\"form-group clear-fix\">\n                                                        <label for=\"gender\" class=\"form-label\">เพศ</label>\n                                                        <p-dropdown placeholder=\"เลือกเพศ\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"gender\"></p-dropdown>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 form-text-panel\">  \n                                                    <div class=\"form-group clear-fix\">\n                                                        <label for=\"placeID\" class=\"form-label\">สถานที่เลี้ยง</label>\n                                                        <p-dropdown placeholder=\"เลือกสถานที่เลี้ยง\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [options]=\"masterPlaceIDShow\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"placeID\"></p-dropdown>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 form-text-panel\">  \n                                                    <div class=\"form-group clear-fix\">\n                                                        <label for=\"supportId\" class=\"form-label\">ลักษณะการเลี้ยง</label>\n                                                        <p-dropdown placeholder=\"เลือกลักษณะการเลี้ยง\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [options]=\"masterSupportIDShow\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"supportId\"></p-dropdown>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 form-text-panel\">  \n                                                    <div class=\"form-group clear-fix\">\n                                                        <label for=\"vaccinationHistoryFlg\" class=\"form-label\">ประวัติการฉีดวัคซีน</label>\n                                                        <p-dropdown placeholder=\"เลือกประวัติการฉีดวัคซีน\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"vaccinationHistoryFlg\"></p-dropdown>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 form-text-panel\">  \n                                                    <div class=\"form-group clear-fix\">\n                                                        <label for=\"vaccinationLastDate\" class=\"form-label\">วัคซีนครั้งล่าสุดประมาณ</label>\n                                                        <p-calendar [locale]=\"lacaleTH\" placeholder=\"วัคซีนครั้งล่าสุดประมาณ\" inputStyleClass=\"form-calendar-text\" panelStyleClass=\"form-calendar-group\" styleClass=\"form-calendar-panel form-control\" inputId=\"vaccinationLastDate\" showIcon=\"true\" [dateFormat]=\"dateTimeFormat\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"2000:2040\"></p-calendar>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 form-text-panel\">  \n                                                    <div class=\"form-group clear-fix\">\n                                                        <label for=\"yearAge\" class=\"form-label\">อายุ (ปี)</label>\n                                                        <input type=\"text\" class=\"form-control\" id=\"yearAge\" >\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 form-text-panel\">  \n                                                    <div class=\"form-group clear-fix\">\n                                                        <label for=\"monthAge\" class=\"form-label\">อายุ (เดือน)</label>\n                                                        <input type=\"text\" class=\"form-control\" id=\"monthAge\" >\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <div class=\"dialog-form-footer-body\">\n        <div class=\"card-body form-animal-information-card-body\">\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\">  \n                    <div class=\"form-group-panel clear-fix\">\n                        <div class=\"row\">\n                            <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-button\">  \n                                <button type=\"submit\" class=\"btn btn-block btn-light btn-save\">บันทึก</button>\n                            </div>\n                            <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-button\">  \n                                <button type=\"submit\" class=\"btn btn-block btn-light btn-cancel\">ยกเลิก</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/animal-information/animal.information.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.modal-header .dialog-form-header-body {\n  width: 100%; }\n.modal-header .dialog-form-header-body .modal-title {\n    display: inline-block;\n    font-family: \"promptmedium\", \"sans-serif\";\n    font-size: 20px; }\n.modal-header button.close {\n  padding-top: 18px !important;\n  padding-right: 20px; }\n.modal-body .dialog-form-content-body {\n  padding-left: 15px;\n  padding-right: 15px; }\n.modal-body .dialog-form-content-body .card-body {\n    background-color: #FFFFFF;\n    border: 1px solid rgba(0, 0, 0, 0.125);\n    -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n    border-radius: 4px;\n    margin-bottom: 0px; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body {\n      border: none;\n      -webkit-box-shadow: none;\n      box-shadow: none;\n      border-radius: 4px;\n      margin-bottom: 0px;\n      padding-top: 0px;\n      padding-left: 0px; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel {\n        padding-left: 10px;\n        padding-right: 10px; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-dropdown-panel {\n          min-width: 200px;\n          padding-left: 10px;\n          border-radius: 4px;\n          border: 1px solid #ced4da; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-dropdown-panel .form-dropdown-filter {\n            -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05); }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-dropdown-panel.form-control {\n            width: 100% !important;\n            padding: 0px;\n            padding-left: 4px;\n            padding-top: 3px; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-dropdown-panel .ui-dropdown-label {\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 16px;\n            color: #4d4d4d; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-dropdown-panel .ui-dropdown-items-wrapper .ui-dropdown-items .ui-dropdown-item {\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 18px; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-calendar-panel {\n          min-width: 200px;\n          border: none; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-calendar-panel .form-calendar-text {\n            padding-left: 10px;\n            border-radius: 4px;\n            border: 1px solid #ced4da;\n            width: 100% !important;\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 16px;\n            color: #4d4d4d;\n            line-height: 30px; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-calendar-panel .ui-calendar-button {\n            margin-left: -2.357em; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-calendar-panel.form-control {\n            width: 100% !important;\n            padding: 0px;\n            padding-left: 0px;\n            padding-top: 0px; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-calendar-panel .form-calendar-group .ui-datepicker-group .ui-datepicker-header {\n            font-family: \"promptregular\", \"sans-serif\";\n            color: #4d4d4d; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-calendar-panel .form-calendar-group .ui-datepicker-group .ui-datepicker-calendar-container .ui-datepicker-calendar {\n            color: #4d4d4d; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-calendar-panel .form-calendar-group .ui-datepicker-group .ui-datepicker-calendar-container .ui-datepicker-calendar thead {\n              font-family: \"promptmedium\", \"sans-serif\"; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-calendar-panel .form-calendar-group .ui-datepicker-group .ui-datepicker-calendar-container .ui-datepicker-calendar tbody {\n              font-family: \"promptregular\", \"sans-serif\"; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-group-button {\n          margin-bottom: 10px;\n          padding-left: 34px;\n          padding-right: 34px;\n          padding-top: 50px; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-group-button button {\n            min-width: 200px !important;\n            padding-top: 10px;\n            padding-bottom: 10px;\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 18px;\n            -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            border-radius: 4px; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-group-button button.btn-block {\n              width: 0px; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-group-button button.btn-light {\n              border-color: #EEEEEE !important; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-group-button button.btn-light.btn-save {\n                background: #39b063;\n                color: #FFFFFF;\n                float: right; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-group-button button.btn-light.btn-cancel {\n                background: #EEEEEE;\n                color: #222222; }\n.modal-body .dialog-form-content-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-text-panel .form-group-button button.btn-light:hover:not(.btn-save) {\n                background: rgba(57, 176, 99, 0.5);\n                color: #FFFFFF; }\n.modal-footer .dialog-form-footer-body {\n  padding-left: 15px;\n  padding-right: 15px;\n  margin: 0px auto; }\n.modal-footer .dialog-form-footer-body .card-body {\n    margin-bottom: 0px; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body {\n      border: none;\n      -webkit-box-shadow: none;\n      box-shadow: none;\n      border-radius: 4px;\n      margin-bottom: 0px;\n      padding-top: 15px;\n      padding-left: 0px;\n      padding-right: 0px; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-group-button button {\n        min-width: 200px !important;\n        padding-top: 10px;\n        padding-bottom: 10px;\n        font-family: \"promptregular\", \"sans-serif\";\n        font-size: 18px;\n        -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n        box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n        border-radius: 4px; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-block {\n          width: 0px; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light {\n          border-color: #EEEEEE !important; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light.btn-save {\n            background: #39b063 !important;\n            color: #FFFFFF;\n            float: right; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light.btn-cancel {\n            background: #EEEEEE;\n            color: #222222; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light:hover:not(.btn-save) {\n            background: rgba(57, 176, 99, 0.5);\n            color: #FFFFFF; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/animal-information/animal.information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalInfomationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_config_service__ = __webpack_require__("./src/app/core/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnimalInfomationComponent = /** @class */ (function () {
    function AnimalInfomationComponent(modalRef, ModalService, themeConfig) {
        this.modalRef = modalRef;
        this.ModalService = ModalService;
        this.themeConfig = themeConfig;
        this.action = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AnimalInfomationComponent.prototype.ngOnInit = function () {
        this.setupCalendar();
        this.setupModalHeader();
        this.setupFormGroup();
        this.action.emit(true);
    };
    AnimalInfomationComponent.prototype.setupCalendar = function () {
        this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
        this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
    };
    AnimalInfomationComponent.prototype.setupFormGroup = function () {
        this.animalInformationForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({});
    };
    AnimalInfomationComponent.prototype.setupModalHeader = function () {
        switch (this.actionForm) {
            case 'add':
                this.titleModal = 'เพิ่มข้อมูลสัตว์';
                break;
            default:
                this.titleModal = 'จัดการข้อมูลสัตว์';
        }
    };
    AnimalInfomationComponent.prototype.modalClose = function () {
        this.modalRef.hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AnimalInfomationComponent.prototype, "actionForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AnimalInfomationComponent.prototype, "action", void 0);
    AnimalInfomationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-animal-information',
            template: __webpack_require__("./src/app/pages/animal-information/animal.information.component.html"),
            styles: [__webpack_require__("./src/app/pages/animal-information/animal.information.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_3__core_config_service__["a" /* ConfigService */]])
    ], AnimalInfomationComponent);
    return AnimalInfomationComponent;
}());



/***/ }),

/***/ "./src/app/pages/animal-simple-dashboard/simple.dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <nav class=\"nav-breadcrumb\" aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">ส่งตัวอย่าง</li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">สรุปข้อมูลการส่งตัวอย่าง</li>\n        </ol>\n    </nav>     \n\n    <div class=\"container-body\">\n        <div class=\"row\">\n            \n        </div>  \n    </div>              \n</div>"

/***/ }),

/***/ "./src/app/pages/animal-simple-dashboard/simple.dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-top: 10px;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid .container-body .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/animal-simple-dashboard/simple.dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleDashboardComponent; });
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

var SimpleDashboardComponent = /** @class */ (function () {
    function SimpleDashboardComponent() {
    }
    SimpleDashboardComponent.prototype.ngOnInit = function () {
    };
    SimpleDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-simple-dashboard',
            template: __webpack_require__("./src/app/pages/animal-simple-dashboard/simple.dashboard.component.html"),
            styles: [__webpack_require__("./src/app/pages/animal-simple-dashboard/simple.dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleDashboardComponent);
    return SimpleDashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/animal-simple-list/simple.animallist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <nav class=\"nav-breadcrumb\" aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">ส่งตัวอย่าง</li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">รายการส่งตัวอย่าง</li>\n        </ol>\n    </nav>     \n\n    <div class=\"container-body\">\n        <div class=\"row\">\n            \n        </div>  \n    </div>              \n</div>"

/***/ }),

/***/ "./src/app/pages/animal-simple-list/simple.animallist.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-top: 10px;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid .container-body .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/animal-simple-list/simple.animallist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleAnimalListComponent; });
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

var SimpleAnimalListComponent = /** @class */ (function () {
    function SimpleAnimalListComponent() {
    }
    SimpleAnimalListComponent.prototype.ngOnInit = function () {
    };
    SimpleAnimalListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-simple-animallist',
            template: __webpack_require__("./src/app/pages/animal-simple-list/simple.animallist.component.html"),
            styles: [__webpack_require__("./src/app/pages/animal-simple-list/simple.animallist.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleAnimalListComponent);
    return SimpleAnimalListComponent;
}());



/***/ }),

/***/ "./src/app/pages/change-password/change.password.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/change-password/change.password.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-top: 10px;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid .container-body .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/change-password/change.password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
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

var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent() {
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__("./src/app/pages/change-password/change.password.component.html"),
            styles: [__webpack_require__("./src/app/pages/change-password/change.password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/forget-password/forget.password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid item-center\">\n    <form class=\"form-forget-password mt-3\" name=\"forgetPasswordForm\"><!--  [formGroup]=\"forgetPasswordForm\" -->\n        <div class=\"container-body text-center\">\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-center mb-3 forget-password-card\">    \n                    <div class=\"row\">\n                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\">  \n                            <div class=\"form-header clear-fix\">\n                                <h3>\n                                    ค้นหาบัญชีผู้ใช้ของคุณ\n                                </h3>\n                                <hr class=\"form-header-line\" />\n                            </div>\n                            <div class=\"form-group clear-fix\">\n                                <label for=\"email\" class=\"form-label\">อีเมลล์</label>\n                                <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"อีเมลล์\">\n                            </div>\n                            <div class=\"form-group clear-fix\">\n                                <label for=\"mobileNumber\" class=\"form-label\">เบอร์โทรศัพท์</label>\n                                <input type=\"text\" class=\"form-control\" id=\"mobileNumber\" placeholder=\"เบอร์โทรศัพท์\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 button-panel\"> \n                            <button type=\"submit\" class=\"btn btn-block btn-light btn-forget-password\" (click)=\"RenewPassword()\">ค้นหา</button>\n                        </div>\n                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 button-panel\"> \n                            <button type=\"submit\" class=\"btn btn-block btn-light btn-cancel\">ยกเลิก</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>   \n    </form>           \n</div>"

/***/ }),

/***/ "./src/app/pages/forget-password/forget.password.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.clear-fix {\n  clear: both; }\n.item-center {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  justify-items: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.container-fluid {\n  width: 100%;\n  min-height: calc(100vh - 20vh);\n  padding-top: 30px;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid .form-forget-password {\n    width: 100%;\n    max-width: 745px;\n    padding: 50px;\n    padding-left: 25px;\n    padding-right: 25px;\n    padding-bottom: 20px;\n    margin: 0 auto;\n    background: #FFFFFF; }\n.container-fluid .form-forget-password .container-body .row {\n      margin-left: 0px;\n      margin-right: 0px; }\n.container-fluid .form-forget-password .container-body .row .forget-password-card {\n        padding-bottom: 20px !important; }\n.container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel {\n          padding-bottom: 30px !important; }\n.container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-header h3 {\n            text-align: left;\n            font-family: \"promptbold\", \"sans-serif\";\n            font-size: 32px;\n            color: #4d4d4d; }\n.container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-header h3 .logo-images {\n              width: 30px;\n              height: 30px;\n              margin-right: 10px; }\n.container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-header .form-header-line {\n            border-bottom: 2px solid #EEEEEE;\n            margin-bottom: 40px; }\n.container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-group {\n            width: 100%;\n            padding-left: 15px;\n            padding-right: 15px; }\n.container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-group .form-label {\n              width: 34%;\n              float: left;\n              text-align: left;\n              font-family: \"promptmedium\", \"sans-serif\";\n              font-size: 18px;\n              line-height: 42px; }\n.container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-group .form-label::after {\n                content: \" :\"; }\n.container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-group.form-control {\n              border: none;\n              padding-left: 0px;\n              margin-bottom: 10px; }\n.container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-group .form-control {\n              width: 66%;\n              float: left;\n              text-align: left;\n              margin-bottom: 15px;\n              height: calc(2.25rem + 10px);\n              font-family: \"promptregular\", \"sans-serif\";\n              font-size: 16px; }\n.container-fluid .form-forget-password .container-body .row .forget-password-card .button-panel {\n          padding-left: 28px;\n          padding-right: 28px; }\n.container-fluid .form-forget-password .container-body .row .forget-password-card .button-panel button {\n            padding-top: 10px;\n            padding-bottom: 10px;\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 18px;\n            -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            border-radius: 4px; }\n.container-fluid .form-forget-password .container-body .row .forget-password-card .button-panel button.btn-light {\n              border-color: #EEEEEE !important; }\n.container-fluid .form-forget-password .container-body .row .forget-password-card .button-panel button.btn-light.btn-forget-password {\n                background: #39b063;\n                color: #FFFFFF; }\n.container-fluid .form-forget-password .container-body .row .forget-password-card .button-panel button.btn-light.btn-cancel {\n                background: #EEEEEE;\n                color: #222222; }\n.container-fluid .form-forget-password .container-body .row .forget-password-card .button-panel button.btn-light:hover:not(.btn-forget-password) {\n                background: rgba(57, 176, 99, 0.5);\n                color: #FFFFFF; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n    .container-fluid .form-forget-password {\n      padding-right: 0px;\n      padding-left: 0px;\n      padding-bottom: 20px; }\n      .container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel {\n        padding-left: 20px;\n        padding-right: 20px; }\n        .container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-header h3 {\n          text-align: left;\n          font-family: \"promptbold\", \"sans-serif\";\n          font-size: 28px;\n          color: #4d4d4d; }\n          .container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-header h3 .logo-images {\n            width: 30px;\n            height: 30px;\n            margin-right: 10px; }\n        .container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-header .form-header-line {\n          border-bottom: 2px solid #EEEEEE;\n          margin-bottom: 30px; }\n        .container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-group {\n          width: 100%;\n          display: inline-block;\n          padding-top: 0px; }\n          .container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-group:nth-child(0) {\n            margin-bottom: 20px; }\n          .container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-group .form-label {\n            width: 100%;\n            float: none;\n            text-align: left; }\n            .container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-group .form-label::after {\n              content: \"\"; }\n          .container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-group.form-control {\n            border: none;\n            padding-left: 0px; }\n          .container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-group .form-control {\n            width: 100%;\n            float: none;\n            text-align: left;\n            margin-bottom: 0px; }\n            .container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-group .form-control .form-control-radio {\n              display: inline-block;\n              cursor: pointer;\n              text-align: left; }\n              .container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-group .form-control .form-control-radio .ui-radiobutton-box.ui-state-active {\n                border-color: #39B062 !important;\n                background-color: #39B062 !important; }\n            .container-fluid .form-forget-password .container-body .row .forget-password-card .text-box-panel .form-group .form-control .form-control-radio-label {\n              cursor: pointer;\n              margin-right: 20px;\n              font-size: 16px;\n              width: 70% !important;\n              padding-bottom: 10px;\n              padding-top: 10px; }\n      .container-fluid .form-forget-password .container-body .row .forget-password-card .button-panel {\n        margin-bottom: 10px; }\n        .container-fluid .form-forget-password .container-body .row .forget-password-card .button-panel button {\n          padding-top: 10px;\n          padding-bottom: 10px;\n          font-family: \"promptregular\", \"sans-serif\";\n          font-size: 18px;\n          -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          border-radius: 4px; }\n          .container-fluid .form-forget-password .container-body .row .forget-password-card .button-panel button.btn-light {\n            border-color: #EEEEEE !important; }\n            .container-fluid .form-forget-password .container-body .row .forget-password-card .button-panel button.btn-light.btn-forget-password {\n              background: #39b063;\n              color: #FFFFFF; }\n            .container-fluid .form-forget-password .container-body .row .forget-password-card .button-panel button.btn-light.btn-cancel {\n              background: #EEEEEE;\n              color: #222222; }\n            .container-fluid .form-forget-password .container-body .row .forget-password-card .button-panel button.btn-light:hover:not(.btn-forget-password) {\n              background: rgba(57, 176, 99, 0.5);\n              color: #FFFFFF; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/forget-password/forget.password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(router) {
        this.router = router;
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetPasswordComponent.prototype.RenewPassword = function () {
        this.router.navigate(['renew-password']);
    };
    ForgetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__("./src/app/pages/forget-password/forget.password.component.html"),
            styles: [__webpack_require__("./src/app/pages/forget-password/forget.password.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid no-breadcrumb mt-3\">\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 card mb-3 filter-card\">\n      <div class=\"card-body filter-card-body\">\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 map-filter-panel\">\n            <img src=\"./assets/images/ex-img-1000x452.jpg\" alt=\"\">\n          </div>\n          <div class=\"col-lg-3 content-filter-panel\">\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <h3>ตัวเลือกแสดงข้อมูล</h3>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"content-filter-container\">\n                  \n                  <button class=\"btn btn-outline-success active col-lg-6 col-md-6 col-sm-12 col-xs-12\">สุนัข</button>\n                  <button class=\"btn btn-outline-success col-lg-6 col-md-6 col-sm-12 col-xs-12\">แมว</button>\n                  <button class=\"btn btn-outline-success col-lg-6 col-md-6 col-sm-12 col-xs-12\">มีเจ้าของ</button>\n                  <button class=\"btn btn-outline-success col-lg-6 col-md-6 col-sm-12 col-xs-12\">ไม่มีเจ้าของ</button>\n                 \n                </div>\n              </div>\n              <div class=\"col-12\">\n                <h3 class=\"filter-rule-header\">ความหนาแน่นของจำนวนสัตว์ (ตัว)</h3>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"row\">\n                  <div class=\"col-2\">\n                    <button class=\"btn btn-success filter-rule-color\"></button>\n                  </div>\n                  <div class=\"col-10\">\n                    <span class=\"filter-rule-text\">0 - 5,000 </span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"row\">\n                  <div class=\"col-2\">\n                    <button class=\"btn btn-info filter-rule-color\"></button>\n                  </div>\n                  <div class=\"col-10\">\n                    <span class=\"filter-rule-text\">5,001 - 10,000 </span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"row\">\n                  <div class=\"col-2\">\n                    <button class=\"btn btn-warning filter-rule-color\"></button>\n                  </div>\n                  <div class=\"col-10\">\n                    <span class=\"filter-rule-text\">10,001 - 20,000 </span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"row\">\n                  <div class=\"col-2\">\n                    <button class=\"btn btn-custom filter-rule-color\"></button>\n                  </div>\n                  <div class=\"col-10\">\n                    <span class=\"filter-rule-text\">20,001 - 30,000 </span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"row\">\n                  <div class=\"col-2\">\n                    <button class=\"btn btn-danger filter-rule-color\"></button>\n                  </div>\n                  <div class=\"col-10\">\n                    <span class=\"filter-rule-text\">มากกว่า 50,000  </span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <h4 class=\"filter-last-updated\">ข้อมูลอัพเดท 1 สิงหาคม 2561</h4>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 card text-center mb-3 mh-card summary-card\">\n      <div class=\"card-body bg-success summary-card-body\">\n        <div class=\"row\">\n          <div class=\"col-12 color-white\">\n            <h3>สรุปจำนวนสัตว์</h3>\n            <span class=\"mt-0\">4,339,210 ตัว</span>\n            <hr/>\n\n            <div class=\"row\">\n              <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 summary-card-title\">\n                <h3>มีเจ้าของ (ตัว)</h3>\n              </div>\n              <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 summary-card-data\">\n                <span class=\"persen\">(99.80%)</span><span class=\"summary\">4,208,276</span>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 summary-card-title\">\n                <h3>ไม่มีเจ้าของ (ตัว)</h3>\n              </div>\n              <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 summary-card-data\">\n                <span class=\"persen\">(0.20%)</span><span class=\"summary\">8,477</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 card mb-3 summary-animal-card\">\n      <div class=\"card-body item-center summary-animal-card-body\">\n        <div class=\"row\">\n          <div class=\"col-5 text-center animal-info\">\n            <img src=\"./assets/images/icon-dog.png\" alt=\"\">\n            <h5 class=\"animal-name\">สุนัข</h5>\n          </div>\n          <div class=\"col-7\">\n            <div class=\"row\">\n              <div class=\"col-12 animal-summary-header\">\n                <h3> มีเจ้าของ (ตัว) </h3>\n              </div>\n              <div class=\"col-12 animal-summary-data\">\n                <span>39,210</span>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 animal-summary-header\">\n                <h3> ไม่มีเจ้าของ (ตัว) </h3>\n              </div>\n              <div class=\"col-12 animal-summary-data\">\n                <span>1,339,210</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 card mb-3 summary-animal-card\">\n      <div class=\"card-body item-center summary-animal-card-body\">\n        <div class=\"row\">\n          <div class=\"col-5 text-center animal-info\">\n            <img src=\"./assets/images/icon-cat.png\" alt=\"\">\n            <h5 class=\"animal-name\">แมว</h5>\n          </div>\n          <div class=\"col-7\">\n            <div class=\"row\">\n              <div class=\"col-12 animal-summary-header\">\n                <h3> มีเจ้าของ (ตัว) </h3>\n              </div>\n              <div class=\"col-12 animal-summary-data\">\n                <span>39,210</span>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 animal-summary-header\">\n                <h3> ไม่มีเจ้าของ (ตัว) </h3>\n              </div>\n              <div class=\"col-12 animal-summary-data\">\n                <span>1,339,210</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card padding0\">\n        <div class=\"card-body tab-card-body padding0\">\n          <div class=\"tab-body\">\n            <ul class=\"nav text-center\" role=\"tablist\">\n              <li class=\"nav-item tab-item\" [ngClass]=\"tab === 'news' ? 'tab-active' : ''\">\n                <span class=\"nav-link active\" href=\"#news\" role=\"tab\" data-toggle=\"tab\" (click)=\"tabSelected('news')\">ข่าวประชาสัมพันธ์</span>\n              </li>\n              <li class=\"nav-item tab-item\" [ngClass]=\"tab === 'file' ? 'tab-active' : ''\">\n                <span class=\"nav-link\" href=\"#file\" role=\"tab\" data-toggle=\"tab\" (click)=\"tabSelected('file')\">ดาวน์โหลดเอกสาร</span>\n              </li>\n              <li class=\"nav-item tab-item\" [ngClass]=\"tab === 'video' ? 'tab-active' : ''\">\n                <span class=\"nav-link\" href=\"#video\" role=\"tab\" data-toggle=\"tab\" (click)=\"tabSelected('video')\">วีดีโอ</span>\n              </li>\n            </ul>\n          </div>\n\n\n          <div class=\"tab-content\">\n              <div role=\"tabpanel\" class=\"tab-pane active\" id=\"news\">\n                <div class=\"content-container\">\n                  <div class=\"card col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n                    <img class=\"card-img-top\" src=\"./assets/images/ex-img-426x240.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body-custom\">\n                      <div class=\"card-title\">ชื้อมนุษย์ เชื้อสุนัข</div>\n                      <p class=\"card-text\">คนไทยรู้เรื่องโรคพิษสุนัขบ้า ถ้าสุนัขกัดข่วนเป็นแผล ต้องรีบไป\n                        หาหมอฉีดยา แต่รู้ไม่หมดว่า เชื้อนี้ “ตายสถานเดียว” และเชื้อ\n                        โรคพิษสุนัขบ้า...ความรู้จึงไปไม่ถึงไหนโรคนี้มีในตัวแมว..</p>\n                      <div>\n                      <img src=\"./assets/images/time.jpg\" alt=\"\"> 13 มี.ค. 2561\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"card col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n                    <img class=\"card-img-top\" src=\"./assets/images/ex-img-426x240.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body-custom\">\n                      <div class=\"card-title\">ชื้อมนุษย์ เชื้อสุนัข</div>\n                      <p class=\"card-text\">คนไทยรู้เรื่องโรคพิษสุนัขบ้า ถ้าสุนัขกัดข่วนเป็นแผล ต้องรีบไป\n                        หาหมอฉีดยา แต่รู้ไม่หมดว่า เชื้อนี้ “ตายสถานเดียว” และเชื้อ\n                        โรคพิษสุนัขบ้า...ความรู้จึงไปไม่ถึงไหนโรคนี้มีในตัวแมว..</p>\n                      <div>\n                      <img src=\"./assets/images/time.jpg\" alt=\"\"> 13 มี.ค. 2561\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"card col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n                    <img class=\"card-img-top\" src=\"./assets/images/ex-img-426x240.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body-custom\">\n                      <div class=\"card-title\">ชื้อมนุษย์ เชื้อสุนัข</div>\n                      <p class=\"card-text\">คนไทยรู้เรื่องโรคพิษสุนัขบ้า ถ้าสุนัขกัดข่วนเป็นแผล ต้องรีบไป\n                        หาหมอฉีดยา แต่รู้ไม่หมดว่า เชื้อนี้ “ตายสถานเดียว” และเชื้อ\n                        โรคพิษสุนัขบ้า...ความรู้จึงไปไม่ถึงไหนโรคนี้มีในตัวแมว..</p>\n                      <div>\n                      <img src=\"./assets/images/time.jpg\" alt=\"\"> 13 มี.ค. 2561\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"card col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n                    <img class=\"card-img-top\" src=\"./assets/images/ex-img-426x240.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body-custom\">\n                      <div class=\"card-title\">ชื้อมนุษย์ เชื้อสุนัข</div>\n                      <p class=\"card-text\">คนไทยรู้เรื่องโรคพิษสุนัขบ้า ถ้าสุนัขกัดข่วนเป็นแผล ต้องรีบไป\n                        หาหมอฉีดยา แต่รู้ไม่หมดว่า เชื้อนี้ “ตายสถานเดียว” และเชื้อ\n                        โรคพิษสุนัขบ้า...ความรู้จึงไปไม่ถึงไหนโรคนี้มีในตัวแมว..</p>\n                      <div>\n                      <img src=\"./assets/images/time.jpg\" alt=\"\"> 13 มี.ค. 2561\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"card col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n                    <img class=\"card-img-top\" src=\"./assets/images/ex-img-426x240.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body-custom\">\n                      <div class=\"card-title\">ชื้อมนุษย์ เชื้อสุนัข</div>\n                      <p class=\"card-text\">คนไทยรู้เรื่องโรคพิษสุนัขบ้า ถ้าสุนัขกัดข่วนเป็นแผล ต้องรีบไป\n                        หาหมอฉีดยา แต่รู้ไม่หมดว่า เชื้อนี้ “ตายสถานเดียว” และเชื้อ\n                        โรคพิษสุนัขบ้า...ความรู้จึงไปไม่ถึงไหนโรคนี้มีในตัวแมว..</p>\n                      <div>\n                      <img src=\"./assets/images/time.jpg\" alt=\"\"> 13 มี.ค. 2561\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"card col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n                    <img class=\"card-img-top\" src=\"./assets/images/ex-img-426x240.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body-custom\">\n                      <div class=\"card-title\">ชื้อมนุษย์ เชื้อสุนัข</div>\n                      <p class=\"card-text\">คนไทยรู้เรื่องโรคพิษสุนัขบ้า ถ้าสุนัขกัดข่วนเป็นแผล ต้องรีบไป\n                        หาหมอฉีดยา แต่รู้ไม่หมดว่า เชื้อนี้ “ตายสถานเดียว” และเชื้อ\n                        โรคพิษสุนัขบ้า...ความรู้จึงไปไม่ถึงไหนโรคนี้มีในตัวแมว..</p>\n                      <div>\n                      <img src=\"./assets/images/time.jpg\" alt=\"\"> 13 มี.ค. 2561\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                \n                <div class=\"content-paginate\">\n                  <ul class=\"pagination\">\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\"><img src=\"./assets/images/back-arrow.png\" width=\"20px\"\n                          alt=\"\"></a></li>\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\"><img src=\"./assets/images/right-arrow.png\" width=\"20px\"\n                          alt=\"\"></a></li>\n                  </ul>\n                </div>\n\n\n              </div>\n              <div role=\"tabpanel\" class=\"tab-pane\" id=\"file\">\n              \n                <div class=\"content-container\">\n                  <div class=\"card col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n                    <img class=\"card-img-top\" src=\"./assets/images/ex-img-426x240.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body-custom\">\n                      <div class=\"card-title\">ชื้อมนุษย์ เชื้อสุนัข</div>\n                      <p class=\"card-text\">คนไทยรู้เรื่องโรคพิษสุนัขบ้า ถ้าสุนัขกัดข่วนเป็นแผล ต้องรีบไป\n                        หาหมอฉีดยา แต่รู้ไม่หมดว่า เชื้อนี้ “ตายสถานเดียว” และเชื้อ\n                        โรคพิษสุนัขบ้า...ความรู้จึงไปไม่ถึงไหนโรคนี้มีในตัวแมว..</p>\n                      <div>\n                      <img src=\"./assets/images/time.jpg\" alt=\"\"> 13 มี.ค. 2561\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"card col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n                    <img class=\"card-img-top\" src=\"./assets/images/ex-img-426x240.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body-custom\">\n                      <div class=\"card-title\">ชื้อมนุษย์ เชื้อสุนัข</div>\n                      <p class=\"card-text\">คนไทยรู้เรื่องโรคพิษสุนัขบ้า ถ้าสุนัขกัดข่วนเป็นแผล ต้องรีบไป\n                        หาหมอฉีดยา แต่รู้ไม่หมดว่า เชื้อนี้ “ตายสถานเดียว” และเชื้อ\n                        โรคพิษสุนัขบ้า...ความรู้จึงไปไม่ถึงไหนโรคนี้มีในตัวแมว..</p>\n                      <div>\n                      <img src=\"./assets/images/time.jpg\" alt=\"\"> 13 มี.ค. 2561\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"card col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n                    <img class=\"card-img-top\" src=\"./assets/images/ex-img-426x240.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body-custom\">\n                      <div class=\"card-title\">ชื้อมนุษย์ เชื้อสุนัข</div>\n                      <p class=\"card-text\">คนไทยรู้เรื่องโรคพิษสุนัขบ้า ถ้าสุนัขกัดข่วนเป็นแผล ต้องรีบไป\n                        หาหมอฉีดยา แต่รู้ไม่หมดว่า เชื้อนี้ “ตายสถานเดียว” และเชื้อ\n                        โรคพิษสุนัขบ้า...ความรู้จึงไปไม่ถึงไหนโรคนี้มีในตัวแมว..</p>\n                      <div>\n                      <img src=\"./assets/images/time.jpg\" alt=\"\"> 13 มี.ค. 2561\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"card col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n                    <img class=\"card-img-top\" src=\"./assets/images/ex-img-426x240.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body-custom\">\n                      <div class=\"card-title\">ชื้อมนุษย์ เชื้อสุนัข</div>\n                      <p class=\"card-text\">คนไทยรู้เรื่องโรคพิษสุนัขบ้า ถ้าสุนัขกัดข่วนเป็นแผล ต้องรีบไป\n                        หาหมอฉีดยา แต่รู้ไม่หมดว่า เชื้อนี้ “ตายสถานเดียว” และเชื้อ\n                        โรคพิษสุนัขบ้า...ความรู้จึงไปไม่ถึงไหนโรคนี้มีในตัวแมว..</p>\n                      <div>\n                      <img src=\"./assets/images/time.jpg\" alt=\"\"> 13 มี.ค. 2561\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"card col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n                    <img class=\"card-img-top\" src=\"./assets/images/ex-img-426x240.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body-custom\">\n                      <div class=\"card-title\">ชื้อมนุษย์ เชื้อสุนัข</div>\n                      <p class=\"card-text\">คนไทยรู้เรื่องโรคพิษสุนัขบ้า ถ้าสุนัขกัดข่วนเป็นแผล ต้องรีบไป\n                        หาหมอฉีดยา แต่รู้ไม่หมดว่า เชื้อนี้ “ตายสถานเดียว” และเชื้อ\n                        โรคพิษสุนัขบ้า...ความรู้จึงไปไม่ถึงไหนโรคนี้มีในตัวแมว..</p>\n                      <div>\n                      <img src=\"./assets/images/time.jpg\" alt=\"\"> 13 มี.ค. 2561\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"card col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n                    <img class=\"card-img-top\" src=\"./assets/images/ex-img-426x240.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body-custom\">\n                      <div class=\"card-title\">ชื้อมนุษย์ เชื้อสุนัข</div>\n                      <p class=\"card-text\">คนไทยรู้เรื่องโรคพิษสุนัขบ้า ถ้าสุนัขกัดข่วนเป็นแผล ต้องรีบไป\n                        หาหมอฉีดยา แต่รู้ไม่หมดว่า เชื้อนี้ “ตายสถานเดียว” และเชื้อ\n                        โรคพิษสุนัขบ้า...ความรู้จึงไปไม่ถึงไหนโรคนี้มีในตัวแมว..</p>\n                      <div>\n                      <img src=\"./assets/images/time.jpg\" alt=\"\"> 13 มี.ค. 2561\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n              <div role=\"tabpanel\" class=\"tab-pane\" id=\"video\">\n\n                <div class=\"content-container\">\n                  <div class=\"card col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n                    <img class=\"card-img-top\" src=\"./assets/images/ex-img-426x240.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body-custom\">\n                      <div class=\"card-title\">ชื้อมนุษย์ เชื้อสุนัข</div>\n                      <p class=\"card-text\">คนไทยรู้เรื่องโรคพิษสุนัขบ้า ถ้าสุนัขกัดข่วนเป็นแผล ต้องรีบไป\n                        หาหมอฉีดยา แต่รู้ไม่หมดว่า เชื้อนี้ “ตายสถานเดียว” และเชื้อ\n                        โรคพิษสุนัขบ้า...ความรู้จึงไปไม่ถึงไหนโรคนี้มีในตัวแมว..</p>\n                      <div>\n                      <img src=\"./assets/images/time.jpg\" alt=\"\"> 13 มี.ค. 2561\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"card col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n                    <img class=\"card-img-top\" src=\"./assets/images/ex-img-426x240.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body-custom\">\n                      <div class=\"card-title\">ชื้อมนุษย์ เชื้อสุนัข</div>\n                      <p class=\"card-text\">คนไทยรู้เรื่องโรคพิษสุนัขบ้า ถ้าสุนัขกัดข่วนเป็นแผล ต้องรีบไป\n                        หาหมอฉีดยา แต่รู้ไม่หมดว่า เชื้อนี้ “ตายสถานเดียว” และเชื้อ\n                        โรคพิษสุนัขบ้า...ความรู้จึงไปไม่ถึงไหนโรคนี้มีในตัวแมว..</p>\n                      <div>\n                      <img src=\"./assets/images/time.jpg\" alt=\"\"> 13 มี.ค. 2561\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"card col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n                    <img class=\"card-img-top\" src=\"./assets/images/ex-img-426x240.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body-custom\">\n                      <div class=\"card-title\">ชื้อมนุษย์ เชื้อสุนัข</div>\n                      <p class=\"card-text\">คนไทยรู้เรื่องโรคพิษสุนัขบ้า ถ้าสุนัขกัดข่วนเป็นแผล ต้องรีบไป\n                        หาหมอฉีดยา แต่รู้ไม่หมดว่า เชื้อนี้ “ตายสถานเดียว” และเชื้อ\n                        โรคพิษสุนัขบ้า...ความรู้จึงไปไม่ถึงไหนโรคนี้มีในตัวแมว..</p>\n                      <div>\n                      <img src=\"./assets/images/time.jpg\" alt=\"\"> 13 มี.ค. 2561\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"card col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n                    <img class=\"card-img-top\" src=\"./assets/images/ex-img-426x240.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body-custom\">\n                      <div class=\"card-title\">ชื้อมนุษย์ เชื้อสุนัข</div>\n                      <p class=\"card-text\">คนไทยรู้เรื่องโรคพิษสุนัขบ้า ถ้าสุนัขกัดข่วนเป็นแผล ต้องรีบไป\n                        หาหมอฉีดยา แต่รู้ไม่หมดว่า เชื้อนี้ “ตายสถานเดียว” และเชื้อ\n                        โรคพิษสุนัขบ้า...ความรู้จึงไปไม่ถึงไหนโรคนี้มีในตัวแมว..</p>\n                      <div>\n                      <img src=\"./assets/images/time.jpg\" alt=\"\"> 13 มี.ค. 2561\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"card col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n                    <img class=\"card-img-top\" src=\"./assets/images/ex-img-426x240.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body-custom\">\n                      <div class=\"card-title\">ชื้อมนุษย์ เชื้อสุนัข</div>\n                      <p class=\"card-text\">คนไทยรู้เรื่องโรคพิษสุนัขบ้า ถ้าสุนัขกัดข่วนเป็นแผล ต้องรีบไป\n                        หาหมอฉีดยา แต่รู้ไม่หมดว่า เชื้อนี้ “ตายสถานเดียว” และเชื้อ\n                        โรคพิษสุนัขบ้า...ความรู้จึงไปไม่ถึงไหนโรคนี้มีในตัวแมว..</p>\n                      <div>\n                      <img src=\"./assets/images/time.jpg\" alt=\"\"> 13 มี.ค. 2561\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"card col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n                    <img class=\"card-img-top\" src=\"./assets/images/ex-img-426x240.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body-custom\">\n                      <div class=\"card-title\">ชื้อมนุษย์ เชื้อสุนัข</div>\n                      <p class=\"card-text\">คนไทยรู้เรื่องโรคพิษสุนัขบ้า ถ้าสุนัขกัดข่วนเป็นแผล ต้องรีบไป\n                        หาหมอฉีดยา แต่รู้ไม่หมดว่า เชื้อนี้ “ตายสถานเดียว” และเชื้อ\n                        โรคพิษสุนัขบ้า...ความรู้จึงไปไม่ถึงไหนโรคนี้มีในตัวแมว..</p>\n                      <div>\n                      <img src=\"./assets/images/time.jpg\" alt=\"\"> 13 มี.ค. 2561\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n          </div>\n\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid.no-breadcrumb {\n    padding-top: 30px; }\n.item-center {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  justify-items: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.card {\n  background-color: unset !important;\n  border: unset !important;\n  border-radius: unset !important; }\n.card-body {\n  background-color: #FFFFFF;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  margin-bottom: 20px; }\n.card-body.summary-animal-card-body .animal-info .animal-name {\n    margin-top: 15px;\n    font-size: 19px;\n    font-family: \"promptregular\", \"sans-serif\"; }\n.card-body.summary-animal-card-body .animal-summary-header h3 {\n    font-size: 19px;\n    font-family: \"promptregular\", \"sans-serif\"; }\n.card-body.summary-animal-card-body .animal-summary-data {\n    padding-bottom: 15px; }\n.card-body.summary-animal-card-body .animal-summary-data span {\n      font-size: 24px;\n      font-family: \"promptbold\", \"sans-serif\";\n      color: #39B062; }\n.card-body.summary-card-body h3 {\n    font-size: 19px;\n    font-family: \"promptregular\", \"sans-serif\"; }\n.card-body.summary-card-body span {\n    font-size: 32px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.card-body.summary-card-body hr {\n    border-bottom: 1px solid #FFFFFF; }\n.card-body.summary-card-body .summary-card-title {\n    text-align: left; }\n.card-body.summary-card-body .summary-card-data {\n    text-align: right; }\n.card-body.summary-card-body .summary-card-data .summary {\n      font-size: 19px;\n      font-family: \"promptregular\", \"sans-serif\"; }\n.card-body.summary-card-body .summary-card-data .persen {\n      font-size: 12px;\n      margin-right: 5px;\n      font-family: \"promptregular\", \"sans-serif\"; }\n.card-body.filter-card-body {\n    padding: 0px; }\n.card-body.filter-card-body .map-filter-panel img {\n      height: 100%;\n      width: 100%; }\n.card-body.filter-card-body .content-filter-panel {\n      padding-top: 20px;\n      padding-bottom: 30px; }\n.card-body.filter-card-body .content-filter-panel h3 {\n        font-family: \"promptmedium\", \"sans-serif\";\n        font-size: 18px;\n        margin-bottom: 15px; }\n.card-body.filter-card-body .content-filter-panel .content-filter-container {\n        display: inline; }\n.card-body.filter-card-body .content-filter-panel .content-filter-container button {\n          float: left;\n          width: 125px;\n          margin-right: 10px;\n          margin-bottom: 10px;\n          font-family: \"promptregular\", \"sans-serif\";\n          font-size: 16px; }\n.card-body.filter-card-body .content-filter-panel .content-filter-container button.active {\n            background: #39B062;\n            color: #FFFFFF; }\n.card-body.filter-card-body .content-filter-panel .filter-rule-header {\n        margin-top: 20px;\n        margin-bottom: 20px; }\n.card-body.filter-card-body .content-filter-panel .filter-rule-color {\n        width: 26px !important;\n        height: 26px !important;\n        margin-bottom: 15px; }\n.card-body.filter-card-body .content-filter-panel .filter-rule-text {\n        font-family: \"promptregular\", \"sans-serif\";\n        font-size: 16px; }\n.card-body.filter-card-body .content-filter-panel .filter-last-updated {\n        margin-top: 20px;\n        font-family: \"promptmedium\", \"sans-serif\";\n        font-size: 14px; }\n.card-body.tab-card-body {\n    margin-bottom: 0px;\n    border: none;\n    border-radius: 0px;\n    border-bottom: none; }\n.card-body.tab-card-body .tab-body {\n      padding-left: 15px;\n      padding-right: 15px; }\n.card-body.tab-card-body .tab-body .nav {\n        border-bottom: 1px solid #DDDDDD; }\n.card-body.tab-card-body .tab-body .nav .nav-item {\n          padding-left: 20px;\n          padding-right: 20px;\n          padding-top: 13px;\n          padding-bottom: 8px; }\n.card-body.tab-card-body .tab-body .nav .nav-item .nav-link {\n            font-family: \"promptmedium\", \"sans-serif\";\n            font-size: 19px; }\n.card-body.tab-card-body .tab-body .nav .nav-item .nav-link.active {\n              color: #39B062; }\n.card-body.tab-card-body .tab-content {\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-top: 40px; }\n.card-body.tab-card-body .tab-content .tab-pane .content-container {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap; }\n.card-body.tab-card-body .tab-content .tab-pane .content-container .card {\n          margin-bottom: 40px;\n          cursor: pointer; }\n.card-body.tab-card-body .tab-content .tab-pane .content-container .card .card-img-top {\n            -webkit-border-top-left-radius: 10px;\n            -webkit-border-top-right-radius: 10px;\n            -moz-border-radius-topleft: 10px;\n            -moz-border-radius-topright: 10px;\n            border-top-left-radius: 10px;\n            border-top-right-radius: 10px; }\n.card-body.tab-card-body .tab-content .tab-pane .content-container .card .card-body-custom {\n            padding-top: 23px;\n            font-family: \"pridiregular\", \"sans-serif\";\n            font-size: 14px; }\n.card-body.tab-card-body .tab-content .tab-pane .content-container .card .card-body-custom .card-title {\n              font-family: \"promptmedium\", \"sans-serif\";\n              font-size: 22px; }\n.card-body.tab-card-body .tab-content .tab-pane .content-container .card .card-body-custom .card-text {\n              font-family: \"pridiregular\", \"sans-serif\";\n              font-size: 16px; }\n.card-body.tab-card-body .tab-content .tab-pane .content-container .card:hover .card-body-custom .card-title {\n            color: #39B062; }\n.mh-card {\n  min-height: 162px; }\n.color-white {\n  color: white; }\n.padding0-50 {\n  padding: 0 50px; }\n.bg-success {\n  background: #39B062 !important; }\n.color-green {\n  color: #39B062; }\n.padding0 {\n  padding: 0; }\n.padding16 {\n  padding: 16px; }\n.tab-active {\n  border-bottom: 5px solid #39B062; }\n.padding-l-20 {\n  padding-left: 20px; }\n.border-sm {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125); }\n.tab-sm-active {\n  border-bottom: 5px solid #39B062; }\n.padding-r-0 {\n  padding-right: 0; }\n.btn-custom {\n  background: #F88957; }\n.btn-success {\n  background: #63CDAA !important;\n  border-color: #63CDAA !important; }\n.btn-info {\n  background: #92C8E9 !important;\n  border-color: #92C8E9 !important; }\n.btn-warning {\n  background: #EDC936 !important;\n  border-color: #EDC936 !important; }\n.btn-danger {\n  background: #F05241 !important;\n  border-color: #F05241 !important; }\n.wh100 {\n  width: 100%;\n  height: 100%; }\n.m-r-0 {\n  margin-right: 0; }\n.padding-16 {\n  padding: 16px; }\n.padding-l-24 {\n  padding-left: 24px; }\n.border-left {\n  border-left: 1px solid; }\n.card-text {\n  font-size: 15px; }\nli {\n  cursor: pointer; }\n.card-body-custom {\n  background-color: #fff !important;\n  border-top: 1px solid rgba(0, 0, 0, 0.125) !important; }\n.page-link {\n  color: #000000 !important;\n  background-color: #fff !important;\n  border: unset !important; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card-body {\n    margin-bottom: 10px; }\n    .card-body.filter-card-body {\n      padding: 0px; }\n      .card-body.filter-card-body .map-filter-panel {\n        min-height: 350px; }\n        .card-body.filter-card-body .map-filter-panel img {\n          height: 100%;\n          width: 100%; }\n      .card-body.filter-card-body .content-filter-panel {\n        padding-top: 20px;\n        padding-bottom: 30px;\n        padding-left: 40px;\n        padding-right: 40px; }\n        .card-body.filter-card-body .content-filter-panel .content-filter-container {\n          display: inline; }\n          .card-body.filter-card-body .content-filter-panel .content-filter-container button {\n            width: 100%;\n            padding-top: 10px;\n            padding-bottom: 10px; }\n    .card-body.summary-card-body h3 {\n      font-size: 16px;\n      font-family: \"promptregular\", \"sans-serif\"; }\n    .card-body.summary-card-body span {\n      font-size: 26px;\n      font-family: \"promptmedium\", \"sans-serif\"; }\n    .card-body.summary-card-body hr {\n      border-bottom: 1px solid #FFFFFF; }\n    .card-body.summary-card-body .summary-card-title {\n      text-align: left; }\n    .card-body.summary-card-body .summary-card-data {\n      text-align: right; }\n      .card-body.summary-card-body .summary-card-data .summary {\n        font-size: 16px;\n        font-family: \"promptregular\", \"sans-serif\"; }\n    .card-body.summary-animal-card-body .animal-info img {\n      width: 95px;\n      margin-top: 10px; }\n    .card-body.summary-animal-card-body .animal-info .animal-name {\n      margin-top: 15px;\n      font-size: 16px; }\n    .card-body.summary-animal-card-body .animal-summary-header h3 {\n      font-size: 16px; }\n    .card-body.summary-animal-card-body .animal-summary-data span {\n      font-size: 26px; }\n    .card-body.tab-card-body .tab-body .nav .nav-item {\n      text-align: left;\n      width: 100%; }\n      .card-body.tab-card-body .tab-body .nav .nav-item:not(.tab-active) {\n        border-bottom: 1px solid #DDDDDD; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card-body {\n    margin-bottom: 10px; }\n    .card-body.filter-card-body {\n      padding: 0px; }\n      .card-body.filter-card-body .map-filter-panel {\n        min-height: 350px; }\n        .card-body.filter-card-body .map-filter-panel img {\n          height: 100%;\n          width: 100%; }\n      .card-body.filter-card-body .content-filter-panel {\n        padding-top: 20px;\n        padding-bottom: 30px;\n        padding-left: 40px;\n        padding-right: 40px; }\n        .card-body.filter-card-body .content-filter-panel .content-filter-container {\n          display: inline; }\n          .card-body.filter-card-body .content-filter-panel .content-filter-container button {\n            width: 100%;\n            padding-top: 10px;\n            padding-bottom: 10px; }\n    .card-body.summary-card-body h3 {\n      font-size: 16px;\n      font-family: \"promptregular\", \"sans-serif\"; }\n    .card-body.summary-card-body span {\n      font-size: 26px;\n      font-family: \"promptmedium\", \"sans-serif\"; }\n    .card-body.summary-card-body hr {\n      border-bottom: 1px solid #FFFFFF; }\n    .card-body.summary-card-body .summary-card-title {\n      text-align: left; }\n    .card-body.summary-card-body .summary-card-data {\n      text-align: right; }\n      .card-body.summary-card-body .summary-card-data .summary {\n        font-size: 16px;\n        font-family: \"promptregular\", \"sans-serif\"; }\n    .card-body.summary-animal-card-body .animal-info img {\n      width: 95px;\n      margin-top: 10px; }\n    .card-body.summary-animal-card-body .animal-info .animal-name {\n      margin-top: 15px;\n      font-size: 16px; }\n    .card-body.summary-animal-card-body .animal-summary-header h3 {\n      font-size: 16px; }\n    .card-body.summary-animal-card-body .animal-summary-data span {\n      font-size: 26px; }\n    .card-body.tab-card-body .tab-body .nav .nav-item {\n      text-align: left;\n      width: 100%; }\n      .card-body.tab-card-body .tab-body .nav .nav-item:not(.tab-active) {\n        border-bottom: 1px solid #DDDDDD; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 30px;\n    padding-right: 30px !important;\n    padding-left: 30px !important;\n    padding-bottom: 50px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card-body {\n    margin-bottom: 30px; }\n    .card-body.filter-card-body {\n      padding: 0px; }\n      .card-body.filter-card-body .map-filter-panel {\n        min-height: 350px; }\n        .card-body.filter-card-body .map-filter-panel img {\n          height: 100%;\n          width: 100%; }\n      .card-body.filter-card-body .content-filter-panel {\n        padding-top: 20px;\n        padding-bottom: 30px;\n        padding-left: 40px;\n        padding-right: 40px; }\n        .card-body.filter-card-body .content-filter-panel .content-filter-container {\n          display: inline; }\n          .card-body.filter-card-body .content-filter-panel .content-filter-container button {\n            width: 100%;\n            padding-top: 10px;\n            padding-bottom: 10px; }\n    .card-body.summary-card-body h3 {\n      font-size: 16px;\n      font-family: \"promptregular\", \"sans-serif\"; }\n    .card-body.summary-card-body span {\n      font-size: 26px;\n      font-family: \"promptmedium\", \"sans-serif\"; }\n    .card-body.summary-card-body hr {\n      border-bottom: 1px solid #FFFFFF; }\n    .card-body.summary-card-body .summary-card-title {\n      text-align: left; }\n    .card-body.summary-card-body .summary-card-data {\n      text-align: right; }\n      .card-body.summary-card-body .summary-card-data .summary {\n        font-size: 16px;\n        font-family: \"promptregular\", \"sans-serif\"; }\n    .card-body.summary-animal-card-body .animal-info img {\n      width: 95px;\n      margin-top: 10px; }\n    .card-body.summary-animal-card-body .animal-info .animal-name {\n      margin-top: 15px;\n      font-size: 16px; }\n    .card-body.summary-animal-card-body .animal-summary-header h3 {\n      font-size: 16px; }\n    .card-body.summary-animal-card-body .animal-summary-data span {\n      font-size: 26px; }\n    .card-body.tab-card-body .tab-body .nav .nav-item {\n      text-align: left;\n      width: 100%; }\n      .card-body.tab-card-body .tab-body .nav .nav-item:not(.tab-active) {\n        border-bottom: 1px solid #DDDDDD; } }\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 834px) and (max-width: 1112px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 30px;\n    padding-right: 30px !important;\n    padding-left: 30px !important;\n    padding-bottom: 50px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card-body {\n    margin-bottom: 30px; }\n    .card-body.filter-card-body {\n      padding: 0px; }\n      .card-body.filter-card-body .map-filter-panel {\n        min-height: 350px; }\n        .card-body.filter-card-body .map-filter-panel img {\n          height: 100%;\n          width: 100%; }\n      .card-body.filter-card-body .content-filter-panel {\n        padding-top: 20px;\n        padding-bottom: 30px;\n        padding-left: 40px;\n        padding-right: 40px; }\n        .card-body.filter-card-body .content-filter-panel .content-filter-container {\n          display: inline; }\n          .card-body.filter-card-body .content-filter-panel .content-filter-container button {\n            width: 100%;\n            padding-top: 10px;\n            padding-bottom: 10px; }\n    .card-body.summary-card-body h3 {\n      font-size: 16px;\n      font-family: \"promptregular\", \"sans-serif\"; }\n    .card-body.summary-card-body span {\n      font-size: 26px;\n      font-family: \"promptmedium\", \"sans-serif\"; }\n    .card-body.summary-card-body hr {\n      border-bottom: 1px solid #FFFFFF; }\n    .card-body.summary-card-body .summary-card-title {\n      text-align: left; }\n    .card-body.summary-card-body .summary-card-data {\n      text-align: right; }\n      .card-body.summary-card-body .summary-card-data .summary {\n        font-size: 16px;\n        font-family: \"promptregular\", \"sans-serif\"; }\n    .card-body.summary-animal-card-body .animal-info img {\n      width: 95px;\n      margin-top: 10px; }\n    .card-body.summary-animal-card-body .animal-info .animal-name {\n      margin-top: 15px;\n      font-size: 16px; }\n    .card-body.summary-animal-card-body .animal-summary-header h3 {\n      font-size: 16px; }\n    .card-body.summary-animal-card-body .animal-summary-data span {\n      font-size: 26px; }\n    .card-body.tab-card-body .tab-body .nav .nav-item {\n      text-align: left;\n      width: 100%; }\n      .card-body.tab-card-body .tab-body .nav .nav-item:not(.tab-active) {\n        border-bottom: 1px solid #DDDDDD; } }\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 1024px) and (max-width: 1366px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 30px;\n    padding-right: 30px !important;\n    padding-left: 30px !important;\n    padding-bottom: 50px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card-body {\n    margin-bottom: 30px; }\n    .card-body.filter-card-body {\n      padding: 0px; }\n      .card-body.filter-card-body .map-filter-panel {\n        min-height: 350px; }\n        .card-body.filter-card-body .map-filter-panel img {\n          height: 100%;\n          width: 100%; }\n      .card-body.filter-card-body .content-filter-panel {\n        padding-top: 20px;\n        padding-bottom: 30px;\n        padding-left: 40px;\n        padding-right: 40px; }\n        .card-body.filter-card-body .content-filter-panel .content-filter-container {\n          display: inline; }\n          .card-body.filter-card-body .content-filter-panel .content-filter-container button {\n            width: 100%;\n            padding-top: 10px;\n            padding-bottom: 10px; }\n    .card-body.summary-card-body h3 {\n      font-size: 16px;\n      font-family: \"promptregular\", \"sans-serif\"; }\n    .card-body.summary-card-body span {\n      font-size: 26px;\n      font-family: \"promptmedium\", \"sans-serif\"; }\n    .card-body.summary-card-body hr {\n      border-bottom: 1px solid #FFFFFF; }\n    .card-body.summary-card-body .summary-card-title {\n      text-align: left; }\n    .card-body.summary-card-body .summary-card-data {\n      text-align: right; }\n      .card-body.summary-card-body .summary-card-data .summary {\n        font-size: 16px;\n        font-family: \"promptregular\", \"sans-serif\"; }\n    .card-body.summary-animal-card-body .animal-info img {\n      width: 95px;\n      margin-top: 10px; }\n    .card-body.summary-animal-card-body .animal-info .animal-name {\n      margin-top: 15px;\n      font-size: 16px; }\n    .card-body.summary-animal-card-body .animal-summary-header h3 {\n      font-size: 16px; }\n    .card-body.summary-animal-card-body .animal-summary-data span {\n      font-size: 26px; }\n    .card-body.tab-card-body .tab-body .nav .nav-item {\n      text-align: left;\n      width: 100%; }\n      .card-body.tab-card-body .tab-body .nav .nav-item:not(.tab-active) {\n        border-bottom: 1px solid #DDDDDD; } }\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.dogChecked = true;
        this.tab = 'news';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.tabSelected = function (tab) {
        this.tab = tab;
    };
    HomeComponent.prototype.newsDetail = function () {
        this.router.navigate(['news-detail']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/information/information.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid breadcrumb\">\n    <nav class=\"nav-breadcrumb\" aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">ลงทะเบียน</li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">เพิ่มข้อมูลเจ้าของสัตว์</li>\n        </ol>\n    </nav>     \n\n    <div class=\"container-body\">\n        <div class=\"row\">\n            <!-- Summary Animal -->\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 card text-center mb-3 mh-card summary-card\">\n                <div class=\"card-body item-center bg-success summary-card-body\">\n                    <div class=\"row summary-card-body-row\">\n                        <div class=\"col-12 color-white summary-body\">\n                            <h3>สรุปจำนวนสัตว์ที่ลงทะเบียน</h3>\n                                <span class=\"mt-0\">4,339,210 ตัว</span>\n                            <hr/>\n\n                            <div class=\"row\">\n                                <div class=\"col-7 col-sm-7 col-md-7 col-lg-7 summary-card-title\">\n                                    <h3>ลงทะเบียนทั้งหมด (ตัว)</h3>\n                                </div>\n                                <div class=\"col-5 col-sm-5 col-md-5 col-lg-5 summary-card-data\">\n                                    <span class=\"summary\">4,208,276</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- Animal 1 -->\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 card mb-3 summary-animal-card\">\n                <div class=\"card-body item-center summary-animal-card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-5 text-center animal-info\">\n                            <img src=\"./assets/images/icon-dog.png\" alt=\"\">\n                            <h5 class=\"animal-name\">สุนัข</h5>\n                        </div>\n                        <div class=\"col-7 item-center animal-summary\">\n                            <div class=\"row\">\n                                <div class=\"col-12 animal-summary-header\">\n                                    <h3> ลงทะเบียน (ตัว) </h3>\n                                </div>\n                                <div class=\"col-12 animal-summary-data\">\n                                    <span>39,210</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- Animal 2 -->\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 card mb-3 summary-animal-card\">\n                <div class=\"card-body item-center summary-animal-card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-5 text-center animal-info\">\n                            <img src=\"./assets/images/icon-cat.png\" alt=\"\">\n                            <h5 class=\"animal-name\">แมว</h5>\n                        </div>\n                        <div class=\"col-7 item-center animal-summary\">\n                            <div class=\"row\">\n                                <div class=\"col-12 animal-summary-header\">\n                                    <h3> ลงทะเบียน (ตัว) </h3>\n                                </div>\n                                <div class=\"col-12 animal-summary-data\">\n                                    <span>39,210</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>  \n        <div class=\"row\">\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 card mb-3 information-card\">\n                <div class=\"card-body tab-information-card-body\">\n                    <div class=\"tab-body\">\n                        <ul class=\"nav text-center\" role=\"tablist\">\n                            <li class=\"nav-item tab-item\" [ngClass]=\"tab === 'animal-owner-info' ? 'tab-active' : ''\">\n                                <span class=\"nav-link active\" href=\"#animal-owner-info\" role=\"tab\" data-toggle=\"tab\" (click)=\"tabSelected('animal-owner-info')\">ข้อมูลเจ้าของสัตว์</span>\n                            </li>\n                            <li class=\"nav-item tab-item\" [ngClass]=\"tab === 'animal-list' ? 'tab-active' : ''\">\n                                <span class=\"nav-link\" href=\"#animal-list\" role=\"tab\" data-toggle=\"tab\" (click)=\"tabSelected('animal-list')\">รายการสัตว์เลี้ยง</span>\n                            </li>\n                        </ul>\n                    </div>\n\n                    <div class=\"tab-content\">\n                        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"animal-owner-info\">\n                            <div class=\"content-container\">\n                                <form class=\"form-information mt-3\" name=\"informationForm\" [formGroup]=\"informationForm\">\n                                    <div class=\"card-body form-information-card-body\">\n                                        <div class=\"row\">\n                                            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\">  \n                                                <!-- ประวัติเจ้าของ -->\n                                                <div class=\"form-group-panel clear-fix\">\n\n                                                    <div class=\"row\">\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 form-group-title\">  \n                                                            <h3> ประวัติเจ้าของ </h3>\n                                                        </div>\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 form-group-body\"> \n                                                            <div class=\"row\">\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\"> \n                                                                            <div class=\"form-group clear-fix\" *ngIf=\"informationForm.controls['customerType'].value == 'general-customer'\">\n                                                                                <label for=\"generalCustomerName\" class=\"form-label\">ชื่อ-นามสกุล</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"generalCustomerName\" placeholder=\"ชื่อ-นามสกุล\">\n                                                                            </div>\n\n                                                                            <div class=\"form-group clear-fix\" *ngIf=\"informationForm.controls['customerType'].value == 'corporation-customer'\">\n                                                                                <label for=\"corporationCustomerName\" class=\"form-label\">ชื่อสถานประกอบการ</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"corporationCustomerName\" placeholder=\"ชื่อสถานประกอบการ\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\"> \n                                                                            <div class=\"form-group clear-fix\" *ngIf=\"informationForm.controls['customerType'].value == 'general-customer'\">\n                                                                                <label for=\"generalCustomerIDCard\" class=\"form-label\">หมายเลขบัตรประชาชน</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"generalCustomerIDCard\" placeholder=\"หมายเลขบัตรประชาชน\">\n                                                                            </div>\n\n                                                                            <div class=\"form-group clear-fix\" *ngIf=\"informationForm.controls['customerType'].value == 'corporation-customer'\">\n                                                                                <label for=\"corporationCustomerTaxID\" class=\"form-label\">หมายเลขผู้เสียภาษี</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"corporationCustomerTaxID\" placeholder=\"หมายเลขผู้เสียภาษี\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <!-- สถานที่เลี้ยงปัจจุบัน -->\n                                                <div class=\"form-group-panel clear-fix\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 form-group-title\">  \n                                                            <h3> สถานที่เลี้ยงปัจจุบัน </h3>\n                                                        </div>\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 form-group-body\"> \n                                                            <div class=\"row\">\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"addressNo\" class=\"form-label\">บ้านเลขที่</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"addressNo\" placeholder=\"บ้านเลขที่\">\n                                                                            </div>\n                                                                        </div>\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"mooName\" class=\"form-label\">หมู่ที่</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"mooName\" placeholder=\"หมู่ที่\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"streetName\" class=\"form-label\">ถนน</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"streetName\" placeholder=\"ถนน\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"districtName\" class=\"form-label\">อำเภอ</label>\n                                                                                <p-dropdown placeholder=\"เลือกอำเภอ\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [options]=\"masterDistrictShow\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"districtName\"></p-dropdown>\n                                                                        \n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"zipCode\" class=\"form-label\">รหัสไปรษณีย์</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"zipCode\" placeholder=\"รหัสไปรษณีย์\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"placeID\" class=\"form-label\">สถานที่เลี้ยง</label>\n                                                                                <p-dropdown placeholder=\"เลือกสถานที่เลี้ยง\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [options]=\"masterPlaceIDShow\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"placeID\"></p-dropdown>\n                                                                        \n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\"> \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"soiName\" class=\"form-label\">ซอย</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"soiName\" placeholder=\"ซอย\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"provinceName\" class=\"form-label\">จังหวัด</label>\n                                                                                <p-dropdown placeholder=\"เลือกจังหวัด\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [options]=\"masterProvinceShow\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"provinceName\"></p-dropdown>\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"subDistrictName\" class=\"form-label\">ตำบล</label>\n                                                                                <p-dropdown placeholder=\"เลือกตำบล\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [options]=\"masterSubDistrictShow\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"subDistrictName\"></p-dropdown>\n                                                                        \n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"phoneNumber\" class=\"form-label\">เบอร์โทรศัพท์</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"phoneNumber\" placeholder=\"เบอร์โทรศัพท์\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"supportId\" class=\"form-label\">ลักษณะการเลี้ยง</label>\n                                                                                <p-dropdown placeholder=\"เลือกลักษณะการเลี้ยง\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [options]=\"masterSupportIDShow\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"supportId\"></p-dropdown>\n                                            \n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <!-- สถานที่เลี้ยงปัจจุบัน -->\n                                                <div class=\"form-group-panel clear-fix\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 form-group-title\">  \n                                                            <h3> พิกัดสถานที่เลี้ยงปัจจุบัน </h3>\n                                                        </div>\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 form-group-body\"> \n                                                            <div class=\"row\">\n                                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-group-body-panel form-text-panel\"> \n\n                                                                    </div>\n                                                            </div>\n                                                            <div class=\"row\">\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\"> \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"longitude\" class=\"form-label\">ลองจิจูด</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"longitude\" placeholder=\"ลองจิจูด\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\"> \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"latitude\" class=\"form-label\">ละติจูด</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"latitude\" placeholder=\"ละติจูด\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"form-group-panel clear-fix\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-button\">  \n                                                            <button type=\"submit\" class=\"btn btn-block btn-light btn-save\">บันทึก</button>\n                                                        </div>\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-button\">  \n                                                            <button type=\"submit\" class=\"btn btn-block btn-light btn-cancel\">ยกเลิก</button>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                        <div role=\"tabpanel\" class=\"tab-pane\" id=\"animal-list\">\n                            <div class=\"content-container\">\n                                <div class=\"card-body form-information-card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\"> \n                                            <!--\n\n                                            <div class=\"form-header clear-fix\">\n                                                <h3>\n                                                    รายการสัตว์เลี้ยง\n                                                </h3>\n                                                <hr class=\"form-header-line\" />\n                                            </div>\n\n                                            -->\n                                            \n                                            <!-- Search Bar -->\n                                            <div class=\"form-group-panel clear-fix\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 searchbar\">\n                                                        <button type=\"submit\" class=\"btn btn-block btn-light btn-insert-animal-info\" (click)=\"formAnimalInformation('add')\">\n                                                           <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> เพิ่มข้อมูลสัตว์\n                                                        </button> \n                                                    </div>\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 searchbar text-box-panel\"> \n                                                        <div class=\"form-group clear-fix\">\n                                                            <label for=\"filterAnimal\" class=\"form-label sr-only\">เลือกประเภทของสัตว์</label>\n                                                            <p-dropdown placeholder=\"เลือกประเภทสัตว์\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [options]=\"masterAnimalRegisterShow\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-dropdown-filter\" selectId=\"filterAnimal\"></p-dropdown>\n                                                        </div> \n                                                    </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 data-table-group\">  \n                                                        <p-table [value]=\"animalInformations\"  [lazy]=\"true\" (onLazyLoad)=\"LoadContentLazy($event)\" [paginator]=\"true\" [rows]=\"15\" [totalRecords]=\"totalRecords\" [loading]=\"loading\" [responsive]=\"true\">\n                                                            <ng-template pTemplate=\"caption\">\n                                                                รายการสัตว์เลี้ยงที่ลงทะเบียน\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"header\">\n                                                                <tr>\n                                                                    <th rowspan=\"2\">ชื่อ/ลักษณะสัตว์</th>\n                                                                    <th rowspan=\"2\">เพศ</th>\n                                                                    <th rowspan=\"2\">ประวัติการฉีดวัคซีน</th>\n                                                                    <th rowspan=\"2\">วัคซีนครั้งล่าสุดประมาณ</th>\n                                                                    <th rowspan=\"2\">การทำหมัน</th>\n                                                                    <th colspan=\"2\">อายุ</th>\n                                                                    <th rowspan=\"2\">จัดการ</th>\n                                                                </tr>\n                                                                <tr>\n                                                                    <th>ปี</th>\n                                                                    <th>เดือน</th>\n                                                                </tr>\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"body\" let-rowData>\n                                                                <tr>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">ชื่อ/ลักษณะสัตว์</span>\n                                                                        {{rowData.identity}}\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">เพศ</span>\n                                                                        {{rowData.gender}}\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">ประวัติการฉีดวัคซีน</span>\n                                                                        {{rowData.vaccinationHistoryFlg}}\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">วัคซีนครั้งล่าสุดประมาณ</span>\n                                                                        {{rowData.vaccinationLastDate}}\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">การทำหมัน</span>\n                                                                        {{rowData.sterilizationFlg}}\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">อายุ (ปี)</span>\n                                                                        {{rowData.yearAge}}\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">อายุ (เดือน)</span>\n                                                                        {{rowData.monthAge}}\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">จัดการ</span>\n                                                                        {{rowData.animalInfoID}}\n                                                                    </td>\n                                                                </tr>\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"emptymessage\">\n                                                                <tr>\n                                                                    <td colspan=\"8\" class=\"emptymessage\">\n                                                                        ไม่มีรายการ\n                                                                    </td>\n                                                                </tr>\n                                                            </ng-template>\n                                                        </p-table>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div> \n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>              \n</div>"

/***/ }),

/***/ "./src/app/pages/information/information.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid.breadcrumb {\n    padding-top: 10px; }\n.container-fluid .container-body .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n.mh-card {\n  min-height: 162px; }\n.color-white {\n  color: white; }\n.bg-success {\n  background: #39B062 !important; }\n.item-center {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  justify-items: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.card {\n  background-color: unset !important;\n  border: unset !important;\n  border-radius: unset !important;\n  /******* SUMMARY *******/\n  /******* TAB *******/ }\n.card.summary-card {\n    padding-left: 0px;\n    width: 100%; }\n.card.information-card {\n    padding-left: 0px;\n    width: 100%; }\n.card.tab-information-card {\n    padding-left: 0px;\n    width: 100%; }\n.card-body {\n  background-color: #FFFFFF;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  margin-bottom: 20px;\n  /******* SUMMARY *******/\n  /******* FORM *******/ }\n.card-body.summary-animal-card-body .animal-info .animal-name {\n    margin-top: 15px;\n    font-size: 19px;\n    font-family: \"promptregular\", \"sans-serif\"; }\n.card-body.summary-animal-card-body .animal-summary-header h3 {\n    font-size: 19px;\n    font-family: \"promptregular\", \"sans-serif\"; }\n.card-body.summary-animal-card-body .animal-summary-data {\n    padding-bottom: 15px; }\n.card-body.summary-animal-card-body .animal-summary-data span {\n      font-size: 24px;\n      font-family: \"promptbold\", \"sans-serif\";\n      color: #39B062; }\n.card-body.summary-card-body .summary-card-body-row {\n    width: 100%; }\n.card-body.summary-card-body .summary-body {\n    padding-right: 0px;\n    padding-left: 0px; }\n.card-body.summary-card-body h3 {\n    font-size: 19px;\n    font-family: \"promptregular\", \"sans-serif\"; }\n.card-body.summary-card-body span {\n    font-size: 32px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.card-body.summary-card-body hr {\n    border-bottom: 1px solid #FFFFFF; }\n.card-body.summary-card-body .summary-card-title {\n    text-align: left;\n    padding-left: 0px;\n    padding-right: 0px; }\n.card-body.summary-card-body .summary-card-data {\n    text-align: right;\n    padding-left: 0px;\n    padding-right: 0px; }\n.card-body.summary-card-body .summary-card-data .summary {\n      font-size: 19px;\n      font-family: \"promptregular\", \"sans-serif\"; }\n.card-body.summary-card-body .summary-card-data .persen {\n      font-size: 12px;\n      margin-right: 5px;\n      font-family: \"promptregular\", \"sans-serif\"; }\n.card-body.tab-information-card-body {\n    margin-bottom: 0px;\n    border: none;\n    border-radius: 0px;\n    border-bottom: none; }\n.card-body.tab-information-card-body .tab-body {\n      padding-left: 15px;\n      padding-right: 15px; }\n.card-body.tab-information-card-body .tab-body .nav {\n        border-bottom: 1px solid #DDDDDD; }\n.card-body.tab-information-card-body .tab-body .nav .nav-item {\n          padding-left: 20px;\n          padding-right: 20px;\n          padding-top: 13px;\n          padding-bottom: 8px;\n          cursor: pointer; }\n.card-body.tab-information-card-body .tab-body .nav .nav-item .nav-link {\n            font-family: \"promptmedium\", \"sans-serif\";\n            font-size: 19px; }\n.card-body.tab-information-card-body .tab-body .nav .nav-item .nav-link.active {\n              color: #39B062; }\n.card-body.tab-information-card-body .tab-content {\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-top: 40px; }\n.card-body.form-information-card-body {\n    background-color: #FFFFFF;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 0px;\n    margin-bottom: 0px;\n    padding: 0px; }\n.card-body.form-information-card-body .text-box-panel {\n      padding-bottom: 30px !important; }\n.card-body.form-information-card-body .text-box-panel .form-header h3 {\n        text-align: left;\n        font-family: \"promptbold\", \"sans-serif\";\n        font-size: 26px;\n        color: rgba(0, 0, 0, 0.4); }\n.card-body.form-information-card-body .text-box-panel .form-header-line {\n        border-bottom: 2px solid #EEEEEE;\n        margin-bottom: 30px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel {\n        padding-left: 10px;\n        padding-right: 10px;\n        margin-bottom: 25px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel {\n          text-align: left;\n          padding-bottom: 0px !important; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel .form-group {\n            width: auto;\n            float: right;\n            padding-top: 4px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel .form-group .form-control {\n              width: 35%; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .searchbar button i {\n          margin-right: 5px !important; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .searchbar .btn-block {\n          width: auto; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .searchbar .btn-light {\n          border-color: #EEEEEE !important; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .searchbar .btn-insert-animal-info {\n          padding-left: 40px;\n          padding-right: 40px;\n          padding-top: 10px;\n          padding-bottom: 10px;\n          font-family: \"promptregular\", \"sans-serif\";\n          font-size: 18px;\n          -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          border-radius: 4px;\n          background: #39b063;\n          color: #FFFFFF;\n          float: left; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel {\n          min-width: 200px;\n          padding-left: 10px;\n          border-radius: 4px;\n          border: 1px solid #ced4da; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel .form-dropdown-filter {\n            -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05); }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel.form-control {\n            width: 100% !important;\n            padding: 0px;\n            padding-left: 4px;\n            padding-top: 3px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel .ui-dropdown-label {\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 16px;\n            color: #4d4d4d; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel .ui-dropdown-items-wrapper .ui-dropdown-items .ui-dropdown-item {\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 18px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-button {\n          margin-bottom: 10px;\n          padding-left: 34px;\n          padding-right: 34px;\n          padding-top: 50px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-button button {\n            min-width: 200px !important;\n            padding-top: 10px;\n            padding-bottom: 10px;\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 18px;\n            -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            border-radius: 4px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-block {\n              width: 0px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light {\n              border-color: #EEEEEE !important; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light.btn-save {\n                background: #39b063;\n                color: #FFFFFF;\n                float: right; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light.btn-cancel {\n                background: #EEEEEE;\n                color: #222222; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light:hover:not(.btn-save) {\n                background: rgba(57, 176, 99, 0.5);\n                color: #FFFFFF; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-button button i {\n              margin-right: 5px !important; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-caption {\n          padding-top: 15px;\n          padding-bottom: 15px;\n          background: rgba(57, 176, 98, 0.7);\n          font-size: 18px;\n          font-family: \"promptmedium\", \"sans-serif\";\n          color: #f1f0f0; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-thead th {\n          text-align: center;\n          background: rgba(57, 176, 98, 0.7);\n          font-size: 14px;\n          font-family: \"promptmedium\", \"sans-serif\";\n          color: #f1f0f0; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td {\n          padding-top: 10px;\n          padding-bottom: 10px;\n          text-align: left;\n          font-size: 14px;\n          font-family: \"pridiregular\", \"sans-serif\";\n          color: #333333; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td.emptymessage {\n            padding-top: 20px;\n            padding-bottom: 20px;\n            text-align: center;\n            font-size: 14px;\n            font-family: \"pridiregular\", \"sans-serif\";\n            color: #333333; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-paginator-bottom.ui-paginator {\n          text-align: right; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-paginator-bottom.ui-paginator .ui-paginator-element {\n            font-size: 14px;\n            font-family: \"pridiregular\", \"sans-serif\";\n            color: #333333; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-title {\n          border-right: 3px solid #EEEEEE;\n          padding-top: 15px;\n          padding-bottom: 20px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-title h3 {\n            font-family: \"promptmedium\", \"sans-serif\";\n            font-size: 18px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-body .form-group-body-panel {\n          padding-left: 0px;\n          padding-right: 0px; }\n.form-group {\n  width: 100%;\n  display: inline-block;\n  padding-top: 0px; }\n.form-group:nth-child(0) {\n    margin-bottom: 20px; }\n.form-group .form-label {\n    width: 100%;\n    float: none;\n    text-align: left;\n    font-family: \"promptregular\", \"sans-serif\";\n    font-size: 16px;\n    color: #4d4d4d; }\n.form-group .form-label::after {\n      content: \"\"; }\n.form-group .form-label.form-label-header {\n      font-family: \"promptmedium\", \"sans-serif\";\n      font-size: 18px; }\n.form-group.form-control {\n    border: none;\n    padding-left: 0px; }\n.form-group .form-control {\n    width: 100%;\n    float: none;\n    text-align: left;\n    margin-bottom: 0px;\n    height: calc(2.25rem + 10px);\n    font-family: \"promptregular\", \"sans-serif\";\n    font-size: 16px;\n    color: #4d4d4d; }\n.tab-active {\n  border-bottom: 5px solid #39B062; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card.summary-card {\n    padding-left: 0px;\n    padding-right: 0px;\n    width: 100%; }\n  .card.summary-animal-card {\n    padding-left: 0px;\n    padding-right: 0px;\n    width: 100%; }\n  .card-body {\n    margin-bottom: 10px; }\n    .card-body.summary-animal-card-body .animal-info img {\n      width: 95px;\n      margin-top: 10px; }\n    .card-body.summary-animal-card-body .animal-info .animal-name {\n      margin-top: 15px;\n      font-size: 16px; }\n    .card-body.summary-animal-card-body .animal-summary {\n      padding-right: 0px; }\n    .card-body.summary-animal-card-body .animal-summary-header h3 {\n      font-size: 16px; }\n    .card-body.summary-animal-card-body .animal-summary-data span {\n      font-size: 26px; }\n    .card-body.summary-card-body h3 {\n      font-size: 16px;\n      font-family: \"promptregular\", \"sans-serif\"; }\n    .card-body.summary-card-body span {\n      font-size: 22px;\n      font-family: \"promptmedium\", \"sans-serif\"; }\n    .card-body.summary-card-body hr {\n      border-bottom: 1px solid #FFFFFF; }\n    .card-body.summary-card-body .summary-card-title {\n      text-align: left; }\n    .card-body.summary-card-body .summary-card-data {\n      text-align: right; }\n      .card-body.summary-card-body .summary-card-data .summary {\n        font-size: 16px;\n        font-family: \"promptregular\", \"sans-serif\"; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card.summary-card {\n    padding-left: 0px;\n    padding-right: 0px;\n    width: 100%; }\n  .card.summary-animal-card {\n    padding-left: 0px;\n    padding-right: 0px;\n    width: 100%; }\n  .card-body {\n    margin-bottom: 10px; }\n    .card-body.summary-animal-card-body .animal-info img {\n      width: 95px;\n      margin-top: 10px; }\n    .card-body.summary-animal-card-body .animal-info .animal-name {\n      margin-top: 15px;\n      font-size: 16px; }\n    .card-body.summary-animal-card-body .animal-summary {\n      padding-right: 0px; }\n    .card-body.summary-animal-card-body .animal-summary-header h3 {\n      font-size: 16px; }\n    .card-body.summary-animal-card-body .animal-summary-data span {\n      font-size: 26px; }\n    .card-body.summary-card-body h3 {\n      font-size: 16px;\n      font-family: \"promptregular\", \"sans-serif\"; }\n    .card-body.summary-card-body span {\n      font-size: 22px;\n      font-family: \"promptmedium\", \"sans-serif\"; }\n    .card-body.summary-card-body hr {\n      border-bottom: 1px solid #FFFFFF; }\n    .card-body.summary-card-body .summary-card-title {\n      text-align: left; }\n    .card-body.summary-card-body .summary-card-data {\n      text-align: right; }\n      .card-body.summary-card-body .summary-card-data .summary {\n        font-size: 16px;\n        font-family: \"promptregular\", \"sans-serif\"; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/information/information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_config_service__ = __webpack_require__("./src/app/core/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animal_information_animal_information_component__ = __webpack_require__("./src/app/pages/animal-information/animal.information.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InformationComponent = /** @class */ (function () {
    function InformationComponent(router, ModalService, themeConfig) {
        this.router = router;
        this.ModalService = ModalService;
        this.themeConfig = themeConfig;
    }
    InformationComponent.prototype.ngOnInit = function () {
        this.informationForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            customerType: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('corporation-customer'),
        });
        this.configMasterData();
        /****** Layout ******/
        this.tab = 'animal-owner-info';
        /****** dataTable ******/
        this.totalRecords = 0;
        this.loading = true;
    };
    InformationComponent.prototype.configMasterData = function () {
        this.animalRegisterShow = [
            { label: 'Select City', value: null },
            { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
            { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
            { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
            { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
            { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
        ];
        this.masterAnimalRegisterShow = this.animalRegisterShow;
        this.masterProvinceShow = this.animalRegisterShow;
        this.masterDistrictShow = this.animalRegisterShow;
        this.masterSubDistrictShow = this.animalRegisterShow;
        this.masterPlaceIDShow = this.animalRegisterShow;
        this.masterSupportIDShow = this.animalRegisterShow;
    };
    InformationComponent.prototype.LoadContentLazy = function (event) {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
        }, 1000);
    };
    InformationComponent.prototype.tabSelected = function (tab) {
        this.tab = tab;
    };
    InformationComponent.prototype.formAnimalInformation = function (actionForm) {
        var initialState = { actionForm: 'add' };
        var dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
        this.modalRef = this.ModalService.show(__WEBPACK_IMPORTED_MODULE_5__animal_information_animal_information_component__["a" /* AnimalInfomationComponent */], Object.assign({}, dialogFormSetting, { initialState: initialState }));
    };
    InformationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-information',
            template: __webpack_require__("./src/app/pages/information/information.component.html"),
            styles: [__webpack_require__("./src/app/pages/information/information.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_2__core_config_service__["a" /* ConfigService */]])
    ], InformationComponent);
    return InformationComponent;
}());



/***/ }),

/***/ "./src/app/pages/laboratory-dashboard/laboratory.dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <nav class=\"nav-breadcrumb\" aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">ส่งตัวอย่าง</li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">สรุปข้อมูลการวินิจฉัยตัวอย่าง (ห้องวิจัย)</li>\n        </ol>\n    </nav>     \n\n    <div class=\"container-body\">\n        <div class=\"row\">\n            \n        </div>  \n    </div>              \n</div>"

/***/ }),

/***/ "./src/app/pages/laboratory-dashboard/laboratory.dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-top: 10px;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid .container-body .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/laboratory-dashboard/laboratory.dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaboratoryDashboardComponent; });
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

var LaboratoryDashboardComponent = /** @class */ (function () {
    function LaboratoryDashboardComponent() {
    }
    LaboratoryDashboardComponent.prototype.ngOnInit = function () {
    };
    LaboratoryDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-laboratory-dashboard',
            template: __webpack_require__("./src/app/pages/laboratory-dashboard/laboratory.dashboard.component.html"),
            styles: [__webpack_require__("./src/app/pages/laboratory-dashboard/laboratory.dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LaboratoryDashboardComponent);
    return LaboratoryDashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/laboratory-simple-list/laboratory.simplelist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <nav class=\"nav-breadcrumb\" aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">ส่งตัวอย่าง</li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">รายการส่งตัวอย่าง (ห้องวิจัย)</li>\n        </ol>\n    </nav>     \n\n    <div class=\"container-body\">\n        <div class=\"row\">\n            \n        </div>  \n    </div>              \n</div>"

/***/ }),

/***/ "./src/app/pages/laboratory-simple-list/laboratory.simplelist.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-top: 10px;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid .container-body .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/laboratory-simple-list/laboratory.simplelist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaboratorySimplelistComponent; });
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

var LaboratorySimplelistComponent = /** @class */ (function () {
    function LaboratorySimplelistComponent() {
    }
    LaboratorySimplelistComponent.prototype.ngOnInit = function () {
    };
    LaboratorySimplelistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-laboratory-simplelist',
            template: __webpack_require__("./src/app/pages/laboratory-simple-list/laboratory.simplelist.component.html"),
            styles: [__webpack_require__("./src/app/pages/laboratory-simple-list/laboratory.simplelist.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LaboratorySimplelistComponent);
    return LaboratorySimplelistComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid item-center\">\n    <form class=\"form-signin mt-3\" name=\"signinForm\" [formGroup]=\"signinForm\">\n        <div class=\"container-body text-center\">\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-center mb-3 login-card\">    \n                    <div class=\"row\">\n                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\">  \n                            <img class=\"logo-images\" src=\"./assets/images/logo-g.png\" alt=\"\">\n                            <div class=\"form-group\">\n                                <label for=\"inputUsername\" class=\"form-label sr-only\">ชื่อผู้ใช้งาน / อีเมลล์</label>\n                                <input type=\"text\" class=\"form-control\" id=\"inputUsername\" placeholder=\"ชื่อผู้ใช้งาน / อีเมลล์\" required=\"\" autofocus=\"\" formControlName=\"username\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"inputPassword\" class=\"form-label sr-only\">รหัสผ่าน</label>\n                                <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"รหัสผ่าน\" required=\"\" autofocus=\"\" formControlName=\"password\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-5 col-sm-5 col-md-5 col-lg-4 set-cookie-panel\">  \n                            <div class=\"form-group\">\n                                <p-checkbox [formControl]=\"signinForm.controls['cookieChecked']\" binary=\"true\" label=\"จดจำฉัน\"></p-checkbox>\n                            </div>\n                        </div>\n                        <div class=\"col-7 col-sm-7 col-md-7 col-lg-8 btn-login-panel\">  \n                            <button class=\"btn btn-theme btn-block\" type=\"button\" (click)=\"login()\">เข้าสู่ระบบ</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-center mb-3 bottom-panel\"> \n                    <div class=\"row\">\n                        <hr class=\"hr-panel\" />\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 forget-password-panel\">  \n                            <a class=\"forget-password-link\" (click)=\"forgetPassword()\">\n                                <span>ลืมพาสเวิร์ด?</span>\n                            </a>\n                        </div>\n                        <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 register-panel\">  \n                            <a class=\"register-link\" (click)=\"register()\">\n                                <span>สมัครสมาชิก</span>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>   \n    </form>           \n</div>\n \n                    \n\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.clear-fix {\n  clear: both; }\n.item-center {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  justify-items: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.container-fluid {\n  width: 100%;\n  min-height: calc(100vh - 20vh);\n  padding-top: 30px;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid .form-signin {\n    width: 100%;\n    max-width: 470px;\n    padding: 60px;\n    padding-left: 45px;\n    padding-right: 45px;\n    padding-bottom: 20px;\n    margin: 0 auto;\n    background: #FFFFFF; }\n.container-fluid .form-signin .container-body .row {\n      margin-left: 0px;\n      margin-right: 0px; }\n.container-fluid .form-signin .container-body .row .login-card .text-box-panel .logo-images {\n        width: 50px;\n        height: 50px;\n        margin-bottom: 30px; }\n.container-fluid .form-signin .container-body .row .login-card .text-box-panel .form-group {\n        width: 100%; }\n.container-fluid .form-signin .container-body .row .login-card .text-box-panel .form-group .form-control {\n          height: calc(2.25rem + 10px);\n          font-family: \"promptregular\", \"sans-serif\";\n          font-size: 18px; }\n.container-fluid .form-signin .container-body .row .login-card .set-cookie-panel {\n        padding-right: 0px !important;\n        text-align: left;\n        font-family: \"promptregular\", \"sans-serif\";\n        font-size: 12px; }\n.container-fluid .form-signin .container-body .row .login-card .set-cookie-panel .form-group {\n          width: 100%;\n          padding-top: 22px; }\n.container-fluid .form-signin .container-body .row .login-card .set-cookie-panel .form-group .form-label {\n            display: table-cell;\n            text-align: left; }\n.container-fluid .form-signin .container-body .row .login-card .btn-login-panel {\n        padding-top: 12px;\n        padding-left: 0px !important; }\n.container-fluid .form-signin .container-body .row .login-card .btn-login-panel .btn-theme {\n          background: #39B062;\n          color: white;\n          font-family: \"promptregular\", \"sans-serif\";\n          font-size: 18px; }\n.container-fluid .form-signin .container-body .row .bottom-panel {\n        padding-left: 0px;\n        padding-right: 0px; }\n.container-fluid .form-signin .container-body .row .bottom-panel .hr-panel {\n          width: 100%;\n          margin-top: 10px; }\n.container-fluid .form-signin .container-body .row .bottom-panel .forget-password-panel {\n          text-align: left;\n          padding-left: 0px; }\n.container-fluid .form-signin .container-body .row .bottom-panel .forget-password-panel a {\n            font-family: \"promptmedium\", \"sans-serif\";\n            font-size: 14px;\n            cursor: pointer; }\n.container-fluid .form-signin .container-body .row .bottom-panel .register-panel {\n          text-align: right;\n          padding-right: 0px; }\n.container-fluid .form-signin .container-body .row .bottom-panel .register-panel a {\n            font-family: \"promptmedium\", \"sans-serif\";\n            font-size: 14px;\n            cursor: pointer; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    min-height: auto;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n    .container-fluid .form-signin .container-body .row .login-card {\n      padding-right: 0px !important;\n      padding-left: 0px !important; }\n      .container-fluid .form-signin .container-body .row .login-card .text-box-panel {\n        padding-right: 0px !important;\n        padding-left: 0px !important; }\n      .container-fluid .form-signin .container-body .row .login-card .set-cookie-panel {\n        padding-right: 0px !important;\n        padding-left: 0px !important;\n        font-family: \"promptregular\", \"sans-serif\";\n        font-size: 12px; }\n        .container-fluid .form-signin .container-body .row .login-card .set-cookie-panel .form-group {\n          width: 100%;\n          padding-top: 22px; }\n          .container-fluid .form-signin .container-body .row .login-card .set-cookie-panel .form-group .form-label {\n            display: table-cell;\n            text-align: left; }\n      .container-fluid .form-signin .container-body .row .login-card .btn-login-panel {\n        padding-top: 12px;\n        padding-right: 0px !important;\n        padding-left: 0px !important; }\n    .container-fluid .form-signin .container-body .row .bottom-panel {\n      padding-left: 0px;\n      padding-right: 0px; }\n      .container-fluid .form-signin .container-body .row .bottom-panel .hr-panel {\n        width: 100%;\n        margin-top: 10px; }\n      .container-fluid .form-signin .container-body .row .bottom-panel .forget-password-panel {\n        text-align: left;\n        padding-left: 0px; }\n        .container-fluid .form-signin .container-body .row .bottom-panel .forget-password-panel a {\n          font-family: \"promptmedium\", \"sans-serif\";\n          font-size: 14px;\n          cursor: pointer; }\n      .container-fluid .form-signin .container-body .row .bottom-panel .register-panel {\n        text-align: right;\n        padding-right: 0px; }\n        .container-fluid .form-signin .container-body .row .bottom-panel .register-panel a {\n          font-family: \"promptmedium\", \"sans-serif\";\n          font-size: 14px;\n          cursor: pointer; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dialog_alert_dialog_alert_component__ = __webpack_require__("./src/app/components/dialog-alert/dialog.alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_config_service__ = __webpack_require__("./src/app/core/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, ModalService, themeConfig) {
        this.router = router;
        this.ModalService = ModalService;
        this.themeConfig = themeConfig;
        this.themeConfig.setSettings({
            layout: {
                toolbar: 'none',
            }
        });
        this.signinForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            cookieChecked: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false),
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.modalRef = this.ModalService.show(__WEBPACK_IMPORTED_MODULE_4__components_dialog_alert_dialog_alert_component__["a" /* DialogAlertComponent */], this.themeConfig.defaultSettings.dialogAlertSetting);
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['register']);
    };
    LoginComponent.prototype.forgetPassword = function () {
        this.router.navigate(['forget-password']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("./src/app/pages/login/login.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_5__core_config_service__["a" /* ConfigService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/news-detail/news.detail.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/news-detail/news.detail.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-top: 10px;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid .container-body .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/news-detail/news.detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailComponent; });
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

var NewsDetailComponent = /** @class */ (function () {
    function NewsDetailComponent() {
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
    };
    NewsDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-news-detail',
            template: __webpack_require__("./src/app/pages/news-detail/news.detail.component.html"),
            styles: [__webpack_require__("./src/app/pages/news-detail/news.detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsDetailComponent);
    return NewsDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/news-list/news.list.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/news-list/news.list.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-top: 10px;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid .container-body .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/news-list/news.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListComponent; });
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

var NewsListComponent = /** @class */ (function () {
    function NewsListComponent() {
    }
    NewsListComponent.prototype.ngOnInit = function () {
    };
    NewsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-news-list',
            template: __webpack_require__("./src/app/pages/news-list/news.list.component.html"),
            styles: [__webpack_require__("./src/app/pages/news-list/news.list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsListComponent);
    return NewsListComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
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

var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    PagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__("./src/app/pages/pages.component.html"),
            styles: [__webpack_require__("./src/app/pages/pages.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_togglebutton__ = __webpack_require__("./node_modules/primeng/togglebutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_togglebutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_togglebutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_checkbox__ = __webpack_require__("./node_modules/primeng/checkbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_radiobutton__ = __webpack_require__("./node_modules/primeng/radiobutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_radiobutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_radiobutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__ = __webpack_require__("./node_modules/primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_calendar__ = __webpack_require__("./node_modules/primeng/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_esri_map_esri_map_component__ = __webpack_require__("./src/app/components/esri-map/esri-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_component__ = __webpack_require__("./src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__information_information_component__ = __webpack_require__("./src/app/pages/information/information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__animal_information_animal_information_component__ = __webpack_require__("./src/app/pages/animal-information/animal.information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__register_register_component__ = __webpack_require__("./src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__ = __webpack_require__("./src/app/pages/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_login_login_service__ = __webpack_require__("./src/app/providers/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__news_list_news_list_component__ = __webpack_require__("./src/app/pages/news-list/news.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__news_detail_news_detail_component__ = __webpack_require__("./src/app/pages/news-detail/news.detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__forget_password_forget_password_component__ = __webpack_require__("./src/app/pages/forget-password/forget.password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__renew_password_renew_password_component__ = __webpack_require__("./src/app/pages/renew-password/renew.password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__change_password_change_password_component__ = __webpack_require__("./src/app/pages/change-password/change.password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__suspicious_suspicious_component__ = __webpack_require__("./src/app/pages/suspicious/suspicious.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__survey_dashboard_survey_dashboard_component__ = __webpack_require__("./src/app/pages/survey-dashboard/survey.dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__survey_has_owner_survey_hasowner_component__ = __webpack_require__("./src/app/pages/survey-has-owner/survey.hasowner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__survey_has_owner_owner_information_list_owner_information_list_component__ = __webpack_require__("./src/app/pages/survey-has-owner/owner-information-list/owner.information.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__survey_has_owner_owner_information_owner_information_component__ = __webpack_require__("./src/app/pages/survey-has-owner/owner-information/owner.information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__survey_no_owner_survey_noowner_component__ = __webpack_require__("./src/app/pages/survey-no-owner/survey.noowner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__survey_no_owner_no_owner_information_list_noowner_information_list_component__ = __webpack_require__("./src/app/pages/survey-no-owner/no-owner-information-list/noowner.information.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__survey_no_owner_no_owner_information_noowner_information_component__ = __webpack_require__("./src/app/pages/survey-no-owner/no-owner-information/noowner.information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__survey_no_owner_survey_animal_information_survey_animal_information_component__ = __webpack_require__("./src/app/pages/survey-no-owner/survey-animal-information/survey.animal.information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__survey_no_owner_survey_animal_suspicious_survey_animal_suspicious_component__ = __webpack_require__("./src/app/pages/survey-no-owner/survey-animal-suspicious/survey.animal.suspicious.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__report_dashboard_report_dashboard_component__ = __webpack_require__("./src/app/pages/report-dashboard/report.dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__report_has_owner_report_hasowner_component__ = __webpack_require__("./src/app/pages/report-has-owner/report.hasowner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__report_no_owner_report_noowner_component__ = __webpack_require__("./src/app/pages/report-no-owner/report.noowner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__animal_simple_dashboard_simple_dashboard_component__ = __webpack_require__("./src/app/pages/animal-simple-dashboard/simple.dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__animal_simple_list_simple_animallist_component__ = __webpack_require__("./src/app/pages/animal-simple-list/simple.animallist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__laboratory_dashboard_laboratory_dashboard_component__ = __webpack_require__("./src/app/pages/laboratory-dashboard/laboratory.dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__laboratory_simple_list_laboratory_simplelist_component__ = __webpack_require__("./src/app/pages/laboratory-simple-list/laboratory.simplelist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_dialog_alert_dialog_alert_component__ = __webpack_require__("./src/app/components/dialog-alert/dialog.alert.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { ViewInformationComponent } from './information/modals/view-information/view-information.component';
// import { AddEditInformationComponent } from './information/modals/add-edit-information/add-edit-information.component';










// import { ChangeMapComponent } from './profile/modals/change-map/change-map.component';

/******** Survey ****** */









/******** End Survey ****** */








var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_11__pages_component__["a" /* PagesComponent */],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */]
            },
            {
                path: 'information',
                component: __WEBPACK_IMPORTED_MODULE_12__information_information_component__["a" /* InformationComponent */]
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */]
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_15__register_register_component__["a" /* RegisterComponent */]
            },
            {
                path: 'forget-password',
                component: __WEBPACK_IMPORTED_MODULE_21__forget_password_forget_password_component__["a" /* ForgetPasswordComponent */]
            },
            {
                path: 'renew-password',
                component: __WEBPACK_IMPORTED_MODULE_22__renew_password_renew_password_component__["a" /* RenewPasswordComponent */]
            },
            {
                path: 'profile',
                component: __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["a" /* ProfileComponent */]
            },
            {
                path: 'profile/change-password',
                component: __WEBPACK_IMPORTED_MODULE_23__change_password_change_password_component__["a" /* ChangePasswordComponent */]
            },
            {
                path: 'news',
                component: __WEBPACK_IMPORTED_MODULE_19__news_list_news_list_component__["a" /* NewsListComponent */]
            },
            {
                path: 'news-detail',
                component: __WEBPACK_IMPORTED_MODULE_20__news_detail_news_detail_component__["a" /* NewsDetailComponent */]
            },
            {
                path: 'suspicious',
                component: __WEBPACK_IMPORTED_MODULE_24__suspicious_suspicious_component__["a" /* SuspiciousComponent */]
            },
            {
                path: 'survey/dashboard',
                component: __WEBPACK_IMPORTED_MODULE_25__survey_dashboard_survey_dashboard_component__["a" /* SurveyDashboardComponent */]
            },
            {
                path: 'survey/animal-has-owner',
                component: __WEBPACK_IMPORTED_MODULE_26__survey_has_owner_survey_hasowner_component__["a" /* SurveyHasOwnerComponent */]
            },
            {
                path: 'survey/animal-has-owner/owner-information-list',
                component: __WEBPACK_IMPORTED_MODULE_27__survey_has_owner_owner_information_list_owner_information_list_component__["a" /* OwnerInformationListComponent */]
            },
            {
                path: 'survey/animal-has-owner/owner-information',
                component: __WEBPACK_IMPORTED_MODULE_28__survey_has_owner_owner_information_owner_information_component__["a" /* OwnerInformationComponent */]
            },
            {
                path: 'survey/animal-no-owner',
                component: __WEBPACK_IMPORTED_MODULE_29__survey_no_owner_survey_noowner_component__["a" /* SurveyNoOwnerComponent */]
            },
            {
                path: 'survey/animal-no-owner/noowner-information-list',
                component: __WEBPACK_IMPORTED_MODULE_30__survey_no_owner_no_owner_information_list_noowner_information_list_component__["a" /* NoOwnerInformationListComponent */]
            },
            {
                path: 'survey/animal-no-owner/noowner-information',
                component: __WEBPACK_IMPORTED_MODULE_31__survey_no_owner_no_owner_information_noowner_information_component__["a" /* NoOwnerInformationComponent */]
            },
            {
                path: 'report/dashboard',
                component: __WEBPACK_IMPORTED_MODULE_34__report_dashboard_report_dashboard_component__["a" /* ReportDashboardComponent */]
            },
            {
                path: 'report/animal-has-owner',
                component: __WEBPACK_IMPORTED_MODULE_35__report_has_owner_report_hasowner_component__["a" /* ReportHasOwnerComponent */]
            },
            {
                path: 'report/animal-no-owner',
                component: __WEBPACK_IMPORTED_MODULE_36__report_no_owner_report_noowner_component__["a" /* ReportNoOwnerComponent */]
            },
            {
                path: 'simple/dashboard',
                component: __WEBPACK_IMPORTED_MODULE_37__animal_simple_dashboard_simple_dashboard_component__["a" /* SimpleDashboardComponent */]
            },
            {
                path: 'simple/animal-simple-list',
                component: __WEBPACK_IMPORTED_MODULE_38__animal_simple_list_simple_animallist_component__["a" /* SimpleAnimalListComponent */]
            },
            {
                path: 'laboratory/dashboard',
                component: __WEBPACK_IMPORTED_MODULE_39__laboratory_dashboard_laboratory_dashboard_component__["a" /* LaboratoryDashboardComponent */]
            },
            {
                path: 'laboratory/laboratory-simple-list',
                component: __WEBPACK_IMPORTED_MODULE_40__laboratory_simple_list_laboratory_simplelist_component__["a" /* LaboratorySimplelistComponent */]
            }
        ]
    }
];
var PagesModule = /** @class */ (function () {
    /*
            ChangeMapComponent
    
            ViewInformationComponent,
            AddEditInformationComponent,
        ]
    */
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__pages_component__["a" /* PagesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_24__suspicious_suspicious_component__["a" /* SuspiciousComponent */],
                __WEBPACK_IMPORTED_MODULE_25__survey_dashboard_survey_dashboard_component__["a" /* SurveyDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_26__survey_has_owner_survey_hasowner_component__["a" /* SurveyHasOwnerComponent */],
                __WEBPACK_IMPORTED_MODULE_28__survey_has_owner_owner_information_owner_information_component__["a" /* OwnerInformationComponent */],
                __WEBPACK_IMPORTED_MODULE_27__survey_has_owner_owner_information_list_owner_information_list_component__["a" /* OwnerInformationListComponent */],
                __WEBPACK_IMPORTED_MODULE_29__survey_no_owner_survey_noowner_component__["a" /* SurveyNoOwnerComponent */],
                __WEBPACK_IMPORTED_MODULE_30__survey_no_owner_no_owner_information_list_noowner_information_list_component__["a" /* NoOwnerInformationListComponent */],
                __WEBPACK_IMPORTED_MODULE_31__survey_no_owner_no_owner_information_noowner_information_component__["a" /* NoOwnerInformationComponent */],
                __WEBPACK_IMPORTED_MODULE_34__report_dashboard_report_dashboard_component__["a" /* ReportDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_35__report_has_owner_report_hasowner_component__["a" /* ReportHasOwnerComponent */],
                __WEBPACK_IMPORTED_MODULE_36__report_no_owner_report_noowner_component__["a" /* ReportNoOwnerComponent */],
                __WEBPACK_IMPORTED_MODULE_37__animal_simple_dashboard_simple_dashboard_component__["a" /* SimpleDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_38__animal_simple_list_simple_animallist_component__["a" /* SimpleAnimalListComponent */],
                __WEBPACK_IMPORTED_MODULE_39__laboratory_dashboard_laboratory_dashboard_component__["a" /* LaboratoryDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_40__laboratory_simple_list_laboratory_simplelist_component__["a" /* LaboratorySimplelistComponent */],
                __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__news_list_news_list_component__["a" /* NewsListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__news_detail_news_detail_component__["a" /* NewsDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_23__change_password_change_password_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_21__forget_password_forget_password_component__["a" /* ForgetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_22__renew_password_renew_password_component__["a" /* RenewPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_dialog_alert_dialog_alert_component__["a" /* DialogAlertComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_esri_map_esri_map_component__["a" /* EsriMapComponent */],
                __WEBPACK_IMPORTED_MODULE_12__information_information_component__["a" /* InformationComponent */],
                __WEBPACK_IMPORTED_MODULE_13__animal_information_animal_information_component__["a" /* AnimalInfomationComponent */],
                __WEBPACK_IMPORTED_MODULE_32__survey_no_owner_survey_animal_information_survey_animal_information_component__["a" /* SurveyAnimalInformationComponent */],
                __WEBPACK_IMPORTED_MODULE_33__survey_no_owner_survey_animal_suspicious_survey_animal_suspicious_component__["a" /* SurveyAnimalSuspiciousComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_primeng_togglebutton__["ToggleButtonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_checkbox__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_radiobutton__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_18__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_18__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__providers_login_login_service__["a" /* LoginService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_11__pages_component__["a" /* PagesComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_41__components_dialog_alert_dialog_alert_component__["a" /* DialogAlertComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_esri_map_esri_map_component__["a" /* EsriMapComponent */],
                __WEBPACK_IMPORTED_MODULE_13__animal_information_animal_information_component__["a" /* AnimalInfomationComponent */],
                __WEBPACK_IMPORTED_MODULE_32__survey_no_owner_survey_animal_information_survey_animal_information_component__["a" /* SurveyAnimalInformationComponent */],
                __WEBPACK_IMPORTED_MODULE_33__survey_no_owner_survey_animal_suspicious_survey_animal_suspicious_component__["a" /* SurveyAnimalSuspiciousComponent */],
            ]
        })
        /*
                ChangeMapComponent
        
                ViewInformationComponent,
                AddEditInformationComponent,
            ]
        */
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-top: 10px;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid .container-body .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/pages/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/pages/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <form class=\"form-register mt-3\" name=\"registerForm\" [formGroup]=\"registerForm\">\n        <div class=\"container-body text-center\">\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-center mb-3 register-card\">    \n                    <div class=\"row\">\n                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\">  \n                            <div class=\"form-header clear-fix\">\n                                <h3>\n                                    สมัครสมาชิก\n                                </h3>\n                                <hr class=\"form-header-line\" />\n                            </div>\n                            <div class=\"form-group clear-fix\">\n                                <label for=\"customerType\" class=\"form-label\">ประเภทผู้ใช้งาน</label>\n                                <div class=\"form-control form-group\">\n                                    <p-radioButton name=\"customerType\" styleClass=\"form-control-radio\" labelStyleClass=\"form-control-radio-label\" value=\"general-customer\" label=\"บุคคลทั่วไป\" [formControl]=\"registerForm.controls['customerType']\"></p-radioButton>\n                                    <p-radioButton name=\"customerType\" styleClass=\"form-control-radio\" labelStyleClass=\"form-control-radio-label\" value=\"corporation-customer\" label=\"สถานประกอบการ\" [formControl]=\"registerForm.controls['customerType']\"></p-radioButton>\n                                </div>\n                            </div>\n                            <div class=\"form-group clear-fix\" *ngIf=\"registerForm.controls['customerType'].value == 'general-customer'\">\n                                <label for=\"customerName\" class=\"form-label\">ชื่อ-นามสกุล</label>\n                                <input type=\"text\" class=\"form-control\" id=\"customerName\" placeholder=\"ชื่อ-นามสกุล\">\n                            </div>\n                            <div class=\"form-group clear-fix\" *ngIf=\"registerForm.controls['customerType'].value == 'corporation-customer'\">\n                                <label for=\"corporationName\" class=\"form-label\">ชื่อสถานประกอบการ</label>\n                                <input type=\"text\" class=\"form-control\" id=\"corporationName\" placeholder=\"ชื่อสถานประกอบการ\">\n                            </div>\n                            <div class=\"form-group clear-fix\">\n                                <label for=\"email\" class=\"form-label\">อีเมลล์</label>\n                                <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"อีเมลล์\">\n                            </div>\n                            <div class=\"form-group clear-fix\">\n                                <label for=\"mobileNumber\" class=\"form-label\">เบอร์โทรศัพท์</label>\n                                <input type=\"text\" class=\"form-control\" id=\"mobileNumber\" placeholder=\"เบอร์โทรศัพท์\">\n                            </div>\n                            <div class=\"form-group clear-fix\">\n                                <label for=\"username\" class=\"form-label\">ชื่อผู้ใช้งาน</label>\n                                <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"ชื่อผู้ใช้งาน\">\n                            </div>\n                            <div class=\"form-group clear-fix\">\n                                <label for=\"password\" class=\"form-label\">รหัสผ่าน</label>\n                                <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"รหัสผ่าน\">\n                            </div>\n                            <div class=\"form-group clear-fix\">\n                                <label for=\"confirm-password\" class=\"form-label\">ยืนยันรหัสผ่าน</label>\n                                <input type=\"password\" class=\"form-control\" id=\"confirm-password\" placeholder=\"ยืนยันรหัสผ่าน\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 button-panel\"> \n                            <button type=\"submit\" class=\"btn btn-block btn-light btn-register\">สมัคร</button>\n                        </div>\n                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 button-panel\"> \n                            <button type=\"submit\" class=\"btn btn-block btn-light btn-cancel\">ยกเลิก</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>   \n    </form>           \n</div>"

/***/ }),

/***/ "./src/app/pages/register/register.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.clear-fix {\n  clear: both; }\n.item-center {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  justify-items: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.container-fluid {\n  width: 100%;\n  min-height: calc(100vh - 20vh);\n  padding-top: 30px;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid .form-register {\n    width: 100%;\n    max-width: 745px;\n    padding: 50px;\n    padding-left: 25px;\n    padding-right: 25px;\n    padding-bottom: 20px;\n    margin: 0 auto;\n    background: #FFFFFF; }\n.container-fluid .form-register .container-body .row {\n      margin-left: 0px;\n      margin-right: 0px; }\n.container-fluid .form-register .container-body .row .register-card {\n        padding-bottom: 20px !important; }\n.container-fluid .form-register .container-body .row .register-card .text-box-panel {\n          padding-bottom: 30px !important; }\n.container-fluid .form-register .container-body .row .register-card .text-box-panel .form-header h3 {\n            text-align: left;\n            font-family: \"promptbold\", \"sans-serif\";\n            font-size: 32px;\n            color: #4d4d4d; }\n.container-fluid .form-register .container-body .row .register-card .text-box-panel .form-header h3 .logo-images {\n              width: 30px;\n              height: 30px;\n              margin-right: 10px; }\n.container-fluid .form-register .container-body .row .register-card .text-box-panel .form-header .form-header-line {\n            border-bottom: 2px solid #EEEEEE;\n            margin-bottom: 30px; }\n.container-fluid .form-register .container-body .row .register-card .text-box-panel .form-group {\n            width: 100%;\n            padding-left: 15px;\n            padding-right: 15px; }\n.container-fluid .form-register .container-body .row .register-card .text-box-panel .form-group .form-label {\n              width: 34%;\n              float: left;\n              text-align: left;\n              font-family: \"promptmedium\", \"sans-serif\";\n              font-size: 18px;\n              line-height: 42px; }\n.container-fluid .form-register .container-body .row .register-card .text-box-panel .form-group .form-label::after {\n                content: \" :\"; }\n.container-fluid .form-register .container-body .row .register-card .text-box-panel .form-group.form-control {\n              border: none;\n              padding-left: 0px;\n              margin-bottom: 10px; }\n.container-fluid .form-register .container-body .row .register-card .text-box-panel .form-group .form-control {\n              width: 66%;\n              float: left;\n              text-align: left;\n              margin-bottom: 15px;\n              height: calc(2.25rem + 10px);\n              font-family: \"promptregular\", \"sans-serif\";\n              font-size: 16px; }\n.container-fluid .form-register .container-body .row .register-card .text-box-panel .form-group .form-control .form-control-radio {\n                cursor: pointer;\n                text-align: left; }\n.container-fluid .form-register .container-body .row .register-card .text-box-panel .form-group .form-control .form-control-radio .ui-radiobutton-box.ui-state-active {\n                  border-color: #39B062 !important;\n                  background-color: #39B062 !important; }\n.container-fluid .form-register .container-body .row .register-card .text-box-panel .form-group .form-control .form-control-radio-label {\n                cursor: pointer;\n                margin-right: 20px; }\n.container-fluid .form-register .container-body .row .register-card .button-panel {\n          padding-left: 28px;\n          padding-right: 28px; }\n.container-fluid .form-register .container-body .row .register-card .button-panel button {\n            padding-top: 10px;\n            padding-bottom: 10px;\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 18px;\n            -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            border-radius: 4px; }\n.container-fluid .form-register .container-body .row .register-card .button-panel button.btn-light {\n              border-color: #EEEEEE !important; }\n.container-fluid .form-register .container-body .row .register-card .button-panel button.btn-light.btn-register {\n                background: #39b063;\n                color: #FFFFFF; }\n.container-fluid .form-register .container-body .row .register-card .button-panel button.btn-light.btn-cancel {\n                background: #EEEEEE;\n                color: #222222; }\n.container-fluid .form-register .container-body .row .register-card .button-panel button.btn-light:hover:not(.btn-register) {\n                background: rgba(57, 176, 99, 0.5);\n                color: #FFFFFF; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n    .container-fluid .form-register {\n      padding-right: 0px;\n      padding-left: 0px;\n      padding-bottom: 20px; }\n      .container-fluid .form-register .container-body .row .register-card .text-box-panel {\n        padding-left: 20px;\n        padding-right: 20px; }\n        .container-fluid .form-register .container-body .row .register-card .text-box-panel .form-header h3 {\n          text-align: left;\n          font-family: \"promptbold\", \"sans-serif\";\n          font-size: 28px;\n          color: #4d4d4d; }\n          .container-fluid .form-register .container-body .row .register-card .text-box-panel .form-header h3 .logo-images {\n            width: 30px;\n            height: 30px;\n            margin-right: 10px; }\n        .container-fluid .form-register .container-body .row .register-card .text-box-panel .form-header .form-header-line {\n          border-bottom: 2px solid #EEEEEE;\n          margin-bottom: 30px; }\n        .container-fluid .form-register .container-body .row .register-card .text-box-panel .form-group {\n          width: 100%;\n          display: inline-block;\n          padding-top: 0px; }\n          .container-fluid .form-register .container-body .row .register-card .text-box-panel .form-group:nth-child(0) {\n            margin-bottom: 20px; }\n          .container-fluid .form-register .container-body .row .register-card .text-box-panel .form-group .form-label {\n            width: 100%;\n            float: none;\n            text-align: left; }\n            .container-fluid .form-register .container-body .row .register-card .text-box-panel .form-group .form-label::after {\n              content: \"\"; }\n          .container-fluid .form-register .container-body .row .register-card .text-box-panel .form-group.form-control {\n            border: none;\n            padding-left: 0px; }\n          .container-fluid .form-register .container-body .row .register-card .text-box-panel .form-group .form-control {\n            width: 100%;\n            float: none;\n            text-align: left;\n            margin-bottom: 0px; }\n            .container-fluid .form-register .container-body .row .register-card .text-box-panel .form-group .form-control .form-control-radio {\n              display: inline-block;\n              cursor: pointer;\n              text-align: left; }\n              .container-fluid .form-register .container-body .row .register-card .text-box-panel .form-group .form-control .form-control-radio .ui-radiobutton-box.ui-state-active {\n                border-color: #39B062 !important;\n                background-color: #39B062 !important; }\n            .container-fluid .form-register .container-body .row .register-card .text-box-panel .form-group .form-control .form-control-radio-label {\n              cursor: pointer;\n              margin-right: 20px;\n              font-size: 16px;\n              width: 70% !important;\n              padding-bottom: 10px;\n              padding-top: 10px; }\n      .container-fluid .form-register .container-body .row .register-card .button-panel {\n        margin-bottom: 10px;\n        padding-left: 34px;\n        padding-right: 34px; }\n        .container-fluid .form-register .container-body .row .register-card .button-panel button {\n          padding-top: 10px;\n          padding-bottom: 10px;\n          font-family: \"promptregular\", \"sans-serif\";\n          font-size: 18px;\n          -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          border-radius: 4px; }\n          .container-fluid .form-register .container-body .row .register-card .button-panel button.btn-light {\n            border-color: #EEEEEE !important; }\n            .container-fluid .form-register .container-body .row .register-card .button-panel button.btn-light.btn-register {\n              background: #39b063;\n              color: #FFFFFF; }\n            .container-fluid .form-register .container-body .row .register-card .button-panel button.btn-light.btn-cancel {\n              background: #EEEEEE;\n              color: #222222; }\n            .container-fluid .form-register .container-body .row .register-card .button-panel button.btn-light:hover:not(.btn-register) {\n              background: rgba(57, 176, 99, 0.5);\n              color: #FFFFFF; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_config_service__ = __webpack_require__("./src/app/core/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, themeConfig) {
        this.router = router;
        this.themeConfig = themeConfig;
        this.themeConfig.setSettings({
            layout: {
                toolbar: 'none',
            }
        });
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            customerType: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('general-customer', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.home = function () {
        this.router.navigate(['home']);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__("./src/app/pages/register/register.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__core_config_service__["a" /* ConfigService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/renew-password/renew.password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid item-center\">\n    <form class=\"form-renew-password mt-3\" name=\"renewPasswordForm\"><!--  [formGroup]=\"forgetPasswordForm\" -->\n        <div class=\"container-body text-center\">\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-center mb-3 forget-password-card\">    \n                    <div class=\"row\">\n                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\">  \n                            <div class=\"form-header clear-fix\">\n                                <h3>\n                                    ตั้งค่ารหัสผ่านใหม่\n                                </h3>\n                                <hr class=\"form-header-line\" />\n                            </div>\n                           <div class=\"form-group clear-fix\">\n                                <label for=\"password\" class=\"form-label\">รหัสผ่าน</label>\n                                <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"รหัสผ่าน\">\n                            </div>\n                            <div class=\"form-group clear-fix\">\n                                <label for=\"confirm-password\" class=\"form-label\">ยืนยันรหัสผ่าน</label>\n                                <input type=\"password\" class=\"form-control\" id=\"confirm-password\" placeholder=\"ยืนยันรหัสผ่าน\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 button-panel\"> \n                            <button type=\"submit\" class=\"btn btn-block btn-light btn-renew-password\">ตกลง</button>\n                        </div>\n                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 button-panel\"> \n                            <button type=\"submit\" class=\"btn btn-block btn-light btn-cancel\">ยกเลิก</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>   \n    </form>           \n</div>"

/***/ }),

/***/ "./src/app/pages/renew-password/renew.password.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.clear-fix {\n  clear: both; }\n.item-center {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  justify-items: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.container-fluid {\n  width: 100%;\n  min-height: calc(100vh - 20vh);\n  padding-top: 30px;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid .form-renew-password {\n    width: 100%;\n    max-width: 745px;\n    padding: 50px;\n    padding-left: 25px;\n    padding-right: 25px;\n    padding-bottom: 20px;\n    margin: 0 auto;\n    background: #FFFFFF; }\n.container-fluid .form-renew-password .container-body .row {\n      margin-left: 0px;\n      margin-right: 0px; }\n.container-fluid .form-renew-password .container-body .row .forget-password-card {\n        padding-bottom: 20px !important; }\n.container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel {\n          padding-bottom: 30px !important; }\n.container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-header h3 {\n            text-align: left;\n            font-family: \"promptbold\", \"sans-serif\";\n            font-size: 32px;\n            color: #4d4d4d; }\n.container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-header h3 .logo-images {\n              width: 30px;\n              height: 30px;\n              margin-right: 10px; }\n.container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-header .form-header-line {\n            border-bottom: 2px solid #EEEEEE;\n            margin-bottom: 40px; }\n.container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-group {\n            width: 100%;\n            padding-left: 15px;\n            padding-right: 15px; }\n.container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-group .form-label {\n              width: 34%;\n              float: left;\n              text-align: left;\n              font-family: \"promptmedium\", \"sans-serif\";\n              font-size: 18px;\n              line-height: 42px; }\n.container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-group .form-label::after {\n                content: \" :\"; }\n.container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-group.form-control {\n              border: none;\n              padding-left: 0px;\n              margin-bottom: 10px; }\n.container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-group .form-control {\n              width: 66%;\n              float: left;\n              text-align: left;\n              margin-bottom: 15px;\n              height: calc(2.25rem + 10px);\n              font-family: \"promptregular\", \"sans-serif\";\n              font-size: 16px; }\n.container-fluid .form-renew-password .container-body .row .forget-password-card .button-panel {\n          padding-left: 28px;\n          padding-right: 28px; }\n.container-fluid .form-renew-password .container-body .row .forget-password-card .button-panel button {\n            padding-top: 10px;\n            padding-bottom: 10px;\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 18px;\n            -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            border-radius: 4px; }\n.container-fluid .form-renew-password .container-body .row .forget-password-card .button-panel button.btn-light {\n              border-color: #EEEEEE !important; }\n.container-fluid .form-renew-password .container-body .row .forget-password-card .button-panel button.btn-light.btn-renew-password {\n                background: #39b063;\n                color: #FFFFFF; }\n.container-fluid .form-renew-password .container-body .row .forget-password-card .button-panel button.btn-light.btn-cancel {\n                background: #EEEEEE;\n                color: #222222; }\n.container-fluid .form-renew-password .container-body .row .forget-password-card .button-panel button.btn-light:hover:not(.btn-renew-password) {\n                background: rgba(57, 176, 99, 0.5);\n                color: #FFFFFF; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n    .container-fluid .form-renew-password {\n      padding-right: 0px;\n      padding-left: 0px;\n      padding-bottom: 20px; }\n      .container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel {\n        padding-left: 20px;\n        padding-right: 20px; }\n        .container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-header h3 {\n          text-align: left;\n          font-family: \"promptbold\", \"sans-serif\";\n          font-size: 28px;\n          color: #4d4d4d; }\n          .container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-header h3 .logo-images {\n            width: 30px;\n            height: 30px;\n            margin-right: 10px; }\n        .container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-header .form-header-line {\n          border-bottom: 2px solid #EEEEEE;\n          margin-bottom: 30px; }\n        .container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-group {\n          width: 100%;\n          display: inline-block;\n          padding-top: 0px; }\n          .container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-group:nth-child(0) {\n            margin-bottom: 20px; }\n          .container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-group .form-label {\n            width: 100%;\n            float: none;\n            text-align: left; }\n            .container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-group .form-label::after {\n              content: \"\"; }\n          .container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-group.form-control {\n            border: none;\n            padding-left: 0px; }\n          .container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-group .form-control {\n            width: 100%;\n            float: none;\n            text-align: left;\n            margin-bottom: 0px; }\n            .container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-group .form-control .form-control-radio {\n              display: inline-block;\n              cursor: pointer;\n              text-align: left; }\n              .container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-group .form-control .form-control-radio .ui-radiobutton-box.ui-state-active {\n                border-color: #39B062 !important;\n                background-color: #39B062 !important; }\n            .container-fluid .form-renew-password .container-body .row .forget-password-card .text-box-panel .form-group .form-control .form-control-radio-label {\n              cursor: pointer;\n              margin-right: 20px;\n              font-size: 16px;\n              width: 70% !important;\n              padding-bottom: 10px;\n              padding-top: 10px; }\n      .container-fluid .form-renew-password .container-body .row .forget-password-card .button-panel {\n        margin-bottom: 10px; }\n        .container-fluid .form-renew-password .container-body .row .forget-password-card .button-panel button {\n          padding-top: 10px;\n          padding-bottom: 10px;\n          font-family: \"promptregular\", \"sans-serif\";\n          font-size: 18px;\n          -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          border-radius: 4px; }\n          .container-fluid .form-renew-password .container-body .row .forget-password-card .button-panel button.btn-light {\n            border-color: #EEEEEE !important; }\n            .container-fluid .form-renew-password .container-body .row .forget-password-card .button-panel button.btn-light.btn-renew-password {\n              background: #39b063;\n              color: #FFFFFF; }\n            .container-fluid .form-renew-password .container-body .row .forget-password-card .button-panel button.btn-light.btn-cancel {\n              background: #EEEEEE;\n              color: #222222; }\n            .container-fluid .form-renew-password .container-body .row .forget-password-card .button-panel button.btn-light:hover:not(.btn-renew-password) {\n              background: rgba(57, 176, 99, 0.5);\n              color: #FFFFFF; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/renew-password/renew.password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenewPasswordComponent; });
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

var RenewPasswordComponent = /** @class */ (function () {
    function RenewPasswordComponent() {
    }
    RenewPasswordComponent.prototype.ngOnInit = function () {
    };
    RenewPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-renew-password',
            template: __webpack_require__("./src/app/pages/renew-password/renew.password.component.html"),
            styles: [__webpack_require__("./src/app/pages/renew-password/renew.password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RenewPasswordComponent);
    return RenewPasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/report-dashboard/report.dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <nav class=\"nav-breadcrumb\" aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">รายงาน</li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">Dashboard</li>\n        </ol>\n    </nav>     \n\n    <div class=\"container-body\">\n        <div class=\"row\">\n            \n        </div>  \n    </div>              \n</div>"

/***/ }),

/***/ "./src/app/pages/report-dashboard/report.dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-top: 10px;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid .container-body .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/report-dashboard/report.dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDashboardComponent; });
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

var ReportDashboardComponent = /** @class */ (function () {
    function ReportDashboardComponent() {
    }
    ReportDashboardComponent.prototype.ngOnInit = function () {
    };
    ReportDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report-dashboard',
            template: __webpack_require__("./src/app/pages/report-dashboard/report.dashboard.component.html"),
            styles: [__webpack_require__("./src/app/pages/report-dashboard/report.dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportDashboardComponent);
    return ReportDashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/report-has-owner/report.hasowner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <nav class=\"nav-breadcrumb\" aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">รายงาน</li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">สรุปข้อมูลสัตว์มีเจ้าของ</li>\n        </ol>\n    </nav>     \n\n    <div class=\"container-body\">\n        <div class=\"row\">\n            \n        </div>  \n    </div>              \n</div>"

/***/ }),

/***/ "./src/app/pages/report-has-owner/report.hasowner.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-top: 10px;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid .container-body .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/report-has-owner/report.hasowner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportHasOwnerComponent; });
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

var ReportHasOwnerComponent = /** @class */ (function () {
    function ReportHasOwnerComponent() {
    }
    ReportHasOwnerComponent.prototype.ngOnInit = function () {
    };
    ReportHasOwnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report-hasowner',
            template: __webpack_require__("./src/app/pages/report-has-owner/report.hasowner.component.html"),
            styles: [__webpack_require__("./src/app/pages/report-has-owner/report.hasowner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportHasOwnerComponent);
    return ReportHasOwnerComponent;
}());



/***/ }),

/***/ "./src/app/pages/report-no-owner/report.noowner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <nav class=\"nav-breadcrumb\" aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">รายงาน</li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">สรุปข้อมูลสัตว์ไม่มีเจ้าของ</li>\n        </ol>\n    </nav>     \n\n    <div class=\"container-body\">\n        <div class=\"row\">\n            \n        </div>  \n    </div>              \n</div>"

/***/ }),

/***/ "./src/app/pages/report-no-owner/report.noowner.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-top: 10px;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid .container-body .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/report-no-owner/report.noowner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportNoOwnerComponent; });
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

var ReportNoOwnerComponent = /** @class */ (function () {
    function ReportNoOwnerComponent() {
    }
    ReportNoOwnerComponent.prototype.ngOnInit = function () {
    };
    ReportNoOwnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report-noowner',
            template: __webpack_require__("./src/app/pages/report-no-owner/report.noowner.component.html"),
            styles: [__webpack_require__("./src/app/pages/report-no-owner/report.noowner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportNoOwnerComponent);
    return ReportNoOwnerComponent;
}());



/***/ }),

/***/ "./src/app/pages/survey-dashboard/survey.dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <nav class=\"nav-breadcrumb\" aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">ข้อมูลสัตว์</li>\n            <li class=\"breadcrumb-item\">แบบสำรวจข้อมูลสัตว์</li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">สรุปข้อมูลแบบสำรวจ</li>\n        </ol>\n    </nav>     \n\n    <div class=\"container-body\">\n        <div class=\"row\">\n            <!-- Summary Animal -->\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 card text-center mb-3 mh-card summary-card\">\n                <div class=\"card-body item-center bg-success summary-card-body\">\n                    <div class=\"row summary-card-body-row\">\n                        <div class=\"col-12 color-white summary-body\">\n                            <h3>สรุปจำนวนสัตว์ที่สำรวจ</h3>\n                                <span class=\"mt-0\">4,339,210 ตัว</span>\n                            <hr/>\n\n                            <div class=\"row\">\n                                <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 summary-card-title\">\n                                    <h3>มีเจ้าของ (ตัว)</h3>\n                                </div>\n                                <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 summary-card-data\">\n                                    <span class=\"persen\">(99.80%)</span><span class=\"summary\">4,208,276</span>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 summary-card-title\">\n                                    <h3>ไม่มีเจ้าของ (ตัว)</h3>\n                                </div>\n                                <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 summary-card-data\">\n                                    <span class=\"persen\">(0.20%)</span><span class=\"summary\">8,477</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- Animal 1 -->\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 card mb-3 summary-animal-card\">\n                <div class=\"card-body item-center summary-animal-card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-5 text-center animal-info\">\n                            <img src=\"./assets/images/icon-dog.png\" alt=\"\">\n                            <h5 class=\"animal-name\">สุนัข</h5>\n                        </div>\n                        <div class=\"col-7 animal-summary\">\n                            <div class=\"row\">\n                                <div class=\"col-12 animal-summary-header\">\n                                    <h3> มีเจ้าของ (ตัว) </h3>\n                                </div>\n                                <div class=\"col-12 animal-summary-data\">\n                                    <span>39,210</span>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-12 animal-summary-header\">\n                                    <h3> ไม่มีเจ้าของ (ตัว) </h3>\n                                </div>\n                                <div class=\"col-12 animal-summary-data\">\n                                    <span>1,339,210</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- Animal 2 -->\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 card mb-3 summary-animal-card\">\n                <div class=\"card-body item-center summary-animal-card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-5 text-center animal-info\">\n                            <img src=\"./assets/images/icon-cat.png\" alt=\"\">\n                            <h5 class=\"animal-name\">แมว</h5>\n                        </div>\n                        <div class=\"col-7 animal-summary\">\n                            <div class=\"row\">\n                                <div class=\"col-12 animal-summary-header\">\n                                    <h3> มีเจ้าของ (ตัว) </h3>\n                                </div>\n                                <div class=\"col-12 animal-summary-data\">\n                                    <span>39,210</span>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-12 animal-summary-header\">\n                                    <h3> ไม่มีเจ้าของ (ตัว) </h3>\n                                </div>\n                                <div class=\"col-12 animal-summary-data\">\n                                    <span>1,339,210</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>  \n    </div>              \n</div>"

/***/ }),

/***/ "./src/app/pages/survey-dashboard/survey.dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-top: 10px;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid .container-body .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n.mh-card {\n  min-height: 162px; }\n.color-white {\n  color: white; }\n.bg-success {\n  background: #39B062 !important; }\n.item-center {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  justify-items: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.card {\n  background-color: unset !important;\n  border: unset !important;\n  border-radius: unset !important; }\n.card.summary-card {\n    padding-left: 0px;\n    width: 100%; }\n.card-body {\n  background-color: #FFFFFF;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  margin-bottom: 20px; }\n.card-body.summary-animal-card-body .animal-info .animal-name {\n    margin-top: 15px;\n    font-size: 19px;\n    font-family: \"promptregular\", \"sans-serif\"; }\n.card-body.summary-animal-card-body .animal-summary-header h3 {\n    font-size: 19px;\n    font-family: \"promptregular\", \"sans-serif\"; }\n.card-body.summary-animal-card-body .animal-summary-data {\n    padding-bottom: 15px; }\n.card-body.summary-animal-card-body .animal-summary-data span {\n      font-size: 24px;\n      font-family: \"promptbold\", \"sans-serif\";\n      color: #39B062; }\n.card-body.summary-card-body .summary-card-body-row {\n    width: 100%; }\n.card-body.summary-card-body .summary-body {\n    padding-right: 0px;\n    padding-left: 0px; }\n.card-body.summary-card-body h3 {\n    font-size: 19px;\n    font-family: \"promptregular\", \"sans-serif\"; }\n.card-body.summary-card-body span {\n    font-size: 32px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.card-body.summary-card-body hr {\n    border-bottom: 1px solid #FFFFFF; }\n.card-body.summary-card-body .summary-card-title {\n    text-align: left;\n    padding-left: 0px;\n    padding-right: 0px; }\n.card-body.summary-card-body .summary-card-data {\n    text-align: right;\n    padding-left: 0px;\n    padding-right: 0px; }\n.card-body.summary-card-body .summary-card-data .summary {\n      font-size: 19px;\n      font-family: \"promptregular\", \"sans-serif\"; }\n.card-body.summary-card-body .summary-card-data .persen {\n      font-size: 12px;\n      margin-right: 5px;\n      font-family: \"promptregular\", \"sans-serif\"; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card.summary-card {\n    padding-left: 0px;\n    padding-right: 0px;\n    width: 100%; }\n  .card.summary-animal-card {\n    padding-left: 0px;\n    padding-right: 0px;\n    width: 100%; }\n  .card-body {\n    margin-bottom: 10px; }\n    .card-body.summary-animal-card-body .animal-info img {\n      width: 95px;\n      margin-top: 10px; }\n    .card-body.summary-animal-card-body .animal-info .animal-name {\n      margin-top: 15px;\n      font-size: 16px; }\n    .card-body.summary-animal-card-body .animal-summary {\n      padding-right: 0px; }\n    .card-body.summary-animal-card-body .animal-summary-header h3 {\n      font-size: 16px; }\n    .card-body.summary-animal-card-body .animal-summary-data span {\n      font-size: 26px; }\n    .card-body.summary-card-body h3 {\n      font-size: 16px;\n      font-family: \"promptregular\", \"sans-serif\"; }\n    .card-body.summary-card-body span {\n      font-size: 22px;\n      font-family: \"promptmedium\", \"sans-serif\"; }\n    .card-body.summary-card-body hr {\n      border-bottom: 1px solid #FFFFFF; }\n    .card-body.summary-card-body .summary-card-title {\n      text-align: left; }\n    .card-body.summary-card-body .summary-card-data {\n      text-align: right; }\n      .card-body.summary-card-body .summary-card-data .summary {\n        font-size: 16px;\n        font-family: \"promptregular\", \"sans-serif\"; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card.summary-card {\n    padding-left: 0px;\n    padding-right: 0px;\n    width: 100%; }\n  .card.summary-animal-card {\n    padding-left: 0px;\n    padding-right: 0px;\n    width: 100%; }\n  .card-body {\n    margin-bottom: 10px; }\n    .card-body.summary-animal-card-body .animal-info img {\n      width: 95px;\n      margin-top: 10px; }\n    .card-body.summary-animal-card-body .animal-info .animal-name {\n      margin-top: 15px;\n      font-size: 16px; }\n    .card-body.summary-animal-card-body .animal-summary {\n      padding-right: 0px; }\n    .card-body.summary-animal-card-body .animal-summary-header h3 {\n      font-size: 16px; }\n    .card-body.summary-animal-card-body .animal-summary-data span {\n      font-size: 26px; }\n    .card-body.summary-card-body h3 {\n      font-size: 16px;\n      font-family: \"promptregular\", \"sans-serif\"; }\n    .card-body.summary-card-body span {\n      font-size: 22px;\n      font-family: \"promptmedium\", \"sans-serif\"; }\n    .card-body.summary-card-body hr {\n      border-bottom: 1px solid #FFFFFF; }\n    .card-body.summary-card-body .summary-card-title {\n      text-align: left; }\n    .card-body.summary-card-body .summary-card-data {\n      text-align: right; }\n      .card-body.summary-card-body .summary-card-data .summary {\n        font-size: 16px;\n        font-family: \"promptregular\", \"sans-serif\"; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/survey-dashboard/survey.dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyDashboardComponent; });
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

var SurveyDashboardComponent = /** @class */ (function () {
    function SurveyDashboardComponent() {
    }
    SurveyDashboardComponent.prototype.ngOnInit = function () {
    };
    SurveyDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-survey-dashboard',
            template: __webpack_require__("./src/app/pages/survey-dashboard/survey.dashboard.component.html"),
            styles: [__webpack_require__("./src/app/pages/survey-dashboard/survey.dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SurveyDashboardComponent);
    return SurveyDashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/survey-has-owner/owner-information-list/owner.information.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid breadcrumb\">\n    <nav class=\"nav-breadcrumb\" aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">แบบสำรวจข้อมูลสัตว์</li>\n            <li class=\"breadcrumb-item\">รายการขึ้นทะเบียนสัตว์ (มีเจ้าของ)</li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">ข้อมูลเจ้าของสัตว์</li>\n        </ol>\n    </nav>     \n\n    <div class=\"container-body\">\n        <div class=\"row\">\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 card mb-3 tab-survey-card\">\n                <div class=\"card-body tab-survey-card-body\">\n                    <div class=\"tab-body\">\n                        <ul class=\"nav text-center\" role=\"tablist\">\n                            <li class=\"nav-item tab-item tab-header\" [ngClass]=\"tab === 'owner-information-group' ? 'tab-active' : ''\">\n                                <span class=\"nav-link active\" href=\"#owner-information-group\" role=\"tab\" data-toggle=\"tab\" (click)=\"tabSelected('owner-information-group')\">ข้อมูลเจ้าของสัตว์</span>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"tab-content\">\n                        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"owner-information-group\">\n                            <div class=\"content-container\">\n                                <div class=\"card-body form-survey-card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\"> \n                                            <div class=\"form-group-panel clear-fix\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 searchbar\">\n                                                        <button type=\"submit\" class=\"btn btn-block btn-light btn-insert-animal-info\" (click)=\"ManageOwnerInformation()\">\n                                                           <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> เพิ่มข้อมูลสัตว์\n                                                        </button>\n                                                    </div>\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 searchbar text-box-panel\"> \n                                                        <div class=\"form-group clear-fix\">\n                                                            <label for=\"filterAnimal\" class=\"form-label sr-only\">เลือกประเภทของสัตว์</label>\n                                                            <p-dropdown placeholder=\"เลือกประเภทสัตว์\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-dropdown-filter\" selectId=\"filterAnimal\"></p-dropdown>\n                                                        </div>  \n                                                    </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 data-table-group\">  \n                                                        <p-table [value]=\"ownerInfomationGroup\"  [lazy]=\"true\" (onLazyLoad)=\"LoadContentLazy($event)\" [paginator]=\"true\" [rows]=\"15\" [totalRecords]=\"totalRecords\" [loading]=\"loading\" [responsive]=\"true\">\n                                                            <ng-template pTemplate=\"caption\">\n                                                                ข้อมูลเจ้าของสัตว์\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"header\">\n                                                                <tr>\n                                                                    <th>ลำดับ</th>\n                                                                    <th>ชื่อ-สกุล</th>\n                                                                    <th>สถานที่เลี้ยง</th>\n                                                                    <th>จำนวนสัตว์</th>\n                                                                    <th>จัดการ</th>\n                                                                </tr>\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"body\" let-rowData>\n                                                                <tr>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">ลำดับ</span>\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">ชื่อ-สกุล</span>\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">สถานที่เลี้ยง</span>\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">จำนวนสัตว์</span>\n                                                                    </td>\n                                                                    <td>\n                                                                       \n                                                                    </td>\n                                                                </tr>\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"emptymessage\">\n                                                                <tr>\n                                                                    <td colspan=\"5\" class=\"emptymessage\">\n                                                                        ไม่มีรายการ\n                                                                    </td>\n                                                                </tr>\n                                                            </ng-template>\n                                                        </p-table>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>  \n    </div>              \n</div>"

/***/ }),

/***/ "./src/app/pages/survey-has-owner/owner-information-list/owner.information.list.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid.breadcrumb {\n    padding-top: 10px; }\n.container-fluid .container-body .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n.mh-card {\n  min-height: 162px; }\n.color-white {\n  color: white; }\n.bg-success {\n  background: #39B062 !important; }\n.tab-active {\n  border-bottom: 5px solid #39B062; }\n.card {\n  background-color: unset !important;\n  border: unset !important;\n  border-radius: unset !important; }\n.card.tab-survey-card {\n    padding-left: 0px;\n    width: 100%; }\n.card-body {\n  background-color: #FFFFFF;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  margin-bottom: 20px; }\n.card-body.form-survey-card-body {\n    background-color: #FFFFFF;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 0px;\n    margin-bottom: 0px;\n    padding: 0px; }\n.card-body.form-survey-card-body .text-box-panel {\n      padding-bottom: 30px !important; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel {\n        padding-left: 0px !important;\n        padding-right: 0px !important;\n        margin-bottom: 25px; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .searchbar {\n          padding-left: 0px;\n          padding-right: 0px; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel {\n            text-align: left;\n            padding-bottom: 0px !important; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel .form-group {\n              width: auto;\n              float: right;\n              padding-top: 4px; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel .form-group .form-control {\n                width: 35%; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .searchbar button i {\n            margin-right: 5px !important; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .searchbar .btn-block {\n            width: auto; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .searchbar .btn-light {\n            border-color: #EEEEEE !important; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .searchbar .btn-insert-animal-info {\n            padding-left: 40px;\n            padding-right: 40px;\n            padding-top: 10px;\n            padding-bottom: 10px;\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 18px;\n            -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            border-radius: 4px;\n            background: #39b063;\n            color: #FFFFFF;\n            float: left; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .form-dropdown-panel {\n          min-width: 200px;\n          padding-left: 10px;\n          border-radius: 4px;\n          border: 1px solid #ced4da; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .form-dropdown-panel .form-dropdown-filter {\n            -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05); }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .form-dropdown-panel.form-control {\n            width: 100% !important;\n            padding: 0px;\n            padding-left: 4px;\n            padding-top: 3px; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .form-dropdown-panel .ui-dropdown-label {\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 16px;\n            color: #4d4d4d; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .form-dropdown-panel .ui-dropdown-items-wrapper .ui-dropdown-items .ui-dropdown-item {\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 18px; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group {\n          padding-left: 0px !important;\n          padding-right: 0px !important; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-caption {\n            padding-top: 15px;\n            padding-bottom: 15px;\n            background: rgba(57, 176, 98, 0.7);\n            font-size: 18px;\n            font-family: \"promptmedium\", \"sans-serif\";\n            color: #f1f0f0; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-thead th {\n            text-align: center;\n            background: rgba(57, 176, 98, 0.7);\n            font-size: 14px;\n            font-family: \"promptmedium\", \"sans-serif\";\n            color: #f1f0f0; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td {\n            padding-top: 10px;\n            padding-bottom: 10px;\n            text-align: left;\n            font-size: 14px;\n            font-family: \"pridiregular\", \"sans-serif\";\n            color: #333333; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td.emptymessage {\n              padding-top: 20px;\n              padding-bottom: 20px;\n              text-align: center;\n              font-size: 14px;\n              font-family: \"pridiregular\", \"sans-serif\";\n              color: #333333; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-paginator-bottom.ui-paginator {\n            text-align: right; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-paginator-bottom.ui-paginator .ui-paginator-element {\n              font-size: 14px;\n              font-family: \"pridiregular\", \"sans-serif\";\n              color: #333333; }\n.card-body.tab-survey-card-body {\n    margin-bottom: 0px;\n    border: none;\n    border-radius: 0px;\n    border-bottom: none; }\n.card-body.tab-survey-card-body .tab-body {\n      padding-left: 15px;\n      padding-right: 15px; }\n.card-body.tab-survey-card-body .tab-body .nav {\n        border-bottom: 1px solid #DDDDDD; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item {\n          cursor: pointer; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item.tab-header {\n            padding-left: 0px;\n            padding-right: 0px;\n            padding-top: 13px;\n            padding-bottom: 8px; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item .nav-link {\n            font-family: \"promptmedium\", \"sans-serif\";\n            font-size: 19px;\n            padding-left: 0px; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item .nav-link.active {\n              color: #39B062; }\n.card-body.tab-survey-card-body .tab-content {\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-top: 40px; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card-body {\n    margin-bottom: 10px; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card-body {\n    margin-bottom: 10px; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/survey-has-owner/owner-information-list/owner.information.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerInformationListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OwnerInformationListComponent = /** @class */ (function () {
    function OwnerInformationListComponent(router) {
        this.router = router;
    }
    OwnerInformationListComponent.prototype.ngOnInit = function () {
        this.tab = 'owner-information-group';
        /****** dataTable ******/
        this.totalRecords = 0;
        this.loading = true;
    };
    OwnerInformationListComponent.prototype.tabSelected = function (tab) {
        this.tab = tab;
    };
    OwnerInformationListComponent.prototype.ManageOwnerInformation = function () {
        this.router.navigate(['survey/animal-has-owner/owner-information']);
    };
    OwnerInformationListComponent.prototype.LoadContentLazy = function (event) {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
        }, 1000);
    };
    OwnerInformationListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-owner-information-list',
            template: __webpack_require__("./src/app/pages/survey-has-owner/owner-information-list/owner.information.list.component.html"),
            styles: [__webpack_require__("./src/app/pages/survey-has-owner/owner-information-list/owner.information.list.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], OwnerInformationListComponent);
    return OwnerInformationListComponent;
}());



/***/ }),

/***/ "./src/app/pages/survey-has-owner/owner-information/owner.information.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid breadcrumb\">\n    <nav class=\"nav-breadcrumb\" aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">แบบสำรวจข้อมูลสัตว์</li>\n            <li class=\"breadcrumb-item\">รายการขึ้นทะเบียนสัตว์ (มีเจ้าของ)</li>\n            <li class=\"breadcrumb-item\">ข้อมูลเจ้าของสัตว์</li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">เพิ่มข้อมูลเจ้าของสัตว์</li>\n        </ol>\n    </nav>     \n\n    <div class=\"container-body\">\n        <div class=\"row\">\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 card mb-3 tab-survey-card\">\n                <div class=\"card-body tab-survey-card-body\">\n                    <div class=\"tab-body\">\n                        <ul class=\"nav text-center\" role=\"tablist\">\n                            <li class=\"nav-item tab-item tab-no-header\" [ngClass]=\"tab === 'surveyer-info' ? 'tab-active' : ''\">\n                                <span class=\"nav-link active\" href=\"#surveyer-info\" role=\"tab\" data-toggle=\"tab\" (click)=\"tabSelected('surveyer-info')\">ข้อมูลผู้สำรวจ</span>\n                            </li>\n                            <li class=\"nav-item tab-item tab-no-header\" [ngClass]=\"tab === 'animal-owner-info' ? 'tab-active' : ''\">\n                                <span class=\"nav-link\" href=\"#animal-owner-info\" role=\"tab\" data-toggle=\"tab\" (click)=\"tabSelected('animal-owner-info')\">ข้อมูลเจ้าของสัตว์</span>\n                            </li>\n                            <li class=\"nav-item tab-item tab-no-header\" [ngClass]=\"tab === 'animal-list' ? 'tab-active' : ''\">\n                                <span class=\"nav-link\" href=\"#animal-list\" role=\"tab\" data-toggle=\"tab\" (click)=\"tabSelected('animal-list')\">รายการสัตว์เลี้ยง</span>\n                            </li>\n                            <li class=\"nav-item tab-item tab-no-header\" [ngClass]=\"tab === 'suspicious-list' ? 'tab-active' : ''\">\n                                <span class=\"nav-link\" href=\"#suspicious-list\" role=\"tab\" data-toggle=\"tab\" (click)=\"tabSelected('suspicious-list')\">ข้อมูลสัตว์ต้องสงสัย</span>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"tab-content\">\n                        <!-- ข้อมูลผู้สำรวจ -->\n                        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"surveyer-info\">\n                            <div class=\"content-container\">\n                                <form class=\"form-information mt-3\" name=\"surveyerForm\" [formGroup]=\"surveyerForm\">\n                                    <div class=\"card-body form-information-card-body\">\n                                        <div class=\"row\">\n                                            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\">  \n                                                \n                                                <div class=\"form-group-panel clear-fix\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 form-group-title\">  \n                                                            <h3> ข้อมูลผู้สำรวจ </h3>\n                                                        </div>\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 form-group-body\"> \n                                                            <div class=\"row\">\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\"> \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"SurveyerName\" class=\"form-label\">ชื่อ-นามสกุล</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"SurveyerName\" placeholder=\"ชื่อ-นามสกุล\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\"> \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"SurveyerIDCard\" class=\"form-label\">หมายเลขบัตรประชาชน</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"SurveyerIDCard\" placeholder=\"หมายเลขบัตรประชาชน\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"row\">\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\"> \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"surveyญชPhoneNumber\" class=\"form-label\">เบอร์โทรศัพท์</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"surveyญชPhoneNumber\" placeholder=\"เบอร์โทรศัพท์\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\"> \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"surveyDate\" class=\"form-label\">วัน/เดือน/ปี ที่สำรวจ</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"surveyDate\" placeholder=\"วัน/เดือน/ปี ที่สำรวจ\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group-panel clear-fix\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 form-group-title\">  \n                                                            <h3> สถานที่สำรวจ </h3>\n                                                        </div>\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 form-group-body\"> \n                                                            <div class=\"row\">\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"provinceName\" class=\"form-label\">จังหวัด</label>\n                                                                                <p-dropdown placeholder=\"เลือกจังหวัด\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [options]=\"masterProvinceShow\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"provinceName\"></p-dropdown>\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n\n                                                                    \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"subDistrictName\" class=\"form-label\">ตำบล</label>\n                                                                                <p-dropdown placeholder=\"เลือกตำบล\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [options]=\"masterSubDistrictShow\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"subDistrictName\"></p-dropdown>\n                                                                        \n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n\n\n                                                                </div>\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"districtName\" class=\"form-label\">อำเภอ</label>\n                                                                                <p-dropdown placeholder=\"เลือกอำเภอ\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [options]=\"masterDistrictShow\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"districtName\"></p-dropdown>\n                                                                        \n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"zipCode\" class=\"form-label\">รหัสไปรษณีย์</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"zipCode\" placeholder=\"รหัสไปรษณีย์\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                \n\n                                                <div class=\"form-group-panel clear-fix\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-button\">  \n                                                            <button type=\"submit\" class=\"btn btn-block btn-light btn-save\">บันทึก</button>\n                                                        </div>\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-button\">  \n                                                            <button type=\"submit\" class=\"btn btn-block btn-light btn-cancel\">ยกเลิก</button>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                        <!-- ข้อมูลเจ้่าของ -->\n                        <div role=\"tabpanel\" class=\"tab-pane\" id=\"animal-owner-info\">\n                            <div class=\"content-container\">\n                                <form class=\"form-information mt-3\" name=\"informationForm\" [formGroup]=\"informationForm\">\n                                    <div class=\"card-body form-information-card-body\">\n                                        <div class=\"row\">\n                                            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\">  \n                                                <!-- ประวัติเจ้าของ -->\n                                                <div class=\"form-group-panel clear-fix\">\n\n                                                    <div class=\"row\">\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 form-group-title\">  \n                                                            <h3> ประวัติเจ้าของ </h3>\n                                                        </div>\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 form-group-body\"> \n                                                            <div class=\"row\">\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\"> \n                                                                            <div class=\"form-group clear-fix\" *ngIf=\"informationForm.controls['customerType'].value == 'general-customer'\">\n                                                                                <label for=\"generalCustomerName\" class=\"form-label\">ชื่อ-นามสกุล</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"generalCustomerName\" placeholder=\"ชื่อ-นามสกุล\">\n                                                                            </div>\n\n                                                                            <div class=\"form-group clear-fix\" *ngIf=\"informationForm.controls['customerType'].value == 'corporation-customer'\">\n                                                                                <label for=\"corporationCustomerName\" class=\"form-label\">ชื่อสถานประกอบการ</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"corporationCustomerName\" placeholder=\"ชื่อสถานประกอบการ\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\"> \n                                                                            <div class=\"form-group clear-fix\" *ngIf=\"informationForm.controls['customerType'].value == 'general-customer'\">\n                                                                                <label for=\"generalCustomerIDCard\" class=\"form-label\">หมายเลขบัตรประชาชน</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"generalCustomerIDCard\" placeholder=\"หมายเลขบัตรประชาชน\">\n                                                                            </div>\n\n                                                                            <div class=\"form-group clear-fix\" *ngIf=\"informationForm.controls['customerType'].value == 'corporation-customer'\">\n                                                                                <label for=\"corporationCustomerTaxID\" class=\"form-label\">หมายเลขผู้เสียภาษี</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"corporationCustomerTaxID\" placeholder=\"หมายเลขผู้เสียภาษี\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <!-- สถานที่เลี้ยงปัจจุบัน -->\n                                                <div class=\"form-group-panel clear-fix\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 form-group-title\">  \n                                                            <h3> สถานที่เลี้ยงปัจจุบัน </h3>\n                                                        </div>\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 form-group-body\"> \n                                                            <div class=\"row\">\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-8 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"addressNo\" class=\"form-label\">บ้านเลขที่</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"addressNo\" placeholder=\"บ้านเลขที่\">\n                                                                            </div>\n                                                                        </div>\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"mooName\" class=\"form-label\">หมู่ที่</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"mooName\" placeholder=\"หมู่ที่\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"streetName\" class=\"form-label\">ถนน</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"streetName\" placeholder=\"ถนน\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"districtName\" class=\"form-label\">อำเภอ</label>\n                                                                                <p-dropdown placeholder=\"เลือกอำเภอ\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [options]=\"masterDistrictShow\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"districtName\"></p-dropdown>\n                                                                        \n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"zipCode\" class=\"form-label\">รหัสไปรษณีย์</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"zipCode\" placeholder=\"รหัสไปรษณีย์\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"placeID\" class=\"form-label\">สถานที่เลี้ยง</label>\n                                                                                <p-dropdown placeholder=\"เลือกสถานที่เลี้ยง\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [options]=\"masterPlaceIDShow\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"placeID\"></p-dropdown>\n                                                                        \n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\"> \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"soiName\" class=\"form-label\">ซอย</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"soiName\" placeholder=\"ซอย\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"provinceName\" class=\"form-label\">จังหวัด</label>\n                                                                                <p-dropdown placeholder=\"เลือกจังหวัด\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [options]=\"masterProvinceShow\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"provinceName\"></p-dropdown>\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"subDistrictName\" class=\"form-label\">ตำบล</label>\n                                                                                <p-dropdown placeholder=\"เลือกตำบล\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [options]=\"masterSubDistrictShow\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"subDistrictName\"></p-dropdown>\n                                                                        \n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"phoneNumber\" class=\"form-label\">เบอร์โทรศัพท์</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"phoneNumber\" placeholder=\"เบอร์โทรศัพท์\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\">  \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"supportId\" class=\"form-label\">ลักษณะการเลี้ยง</label>\n                                                                                <p-dropdown placeholder=\"เลือกลักษณะการเลี้ยง\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [options]=\"masterSupportIDShow\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-control\" selectId=\"supportId\"></p-dropdown>\n                                            \n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <!-- สถานที่เลี้ยงปัจจุบัน -->\n                                                <div class=\"form-group-panel clear-fix\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 form-group-title\">  \n                                                            <h3> พิกัดสถานที่เลี้ยงปัจจุบัน </h3>\n                                                        </div>\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 form-group-body\"> \n                                                            <div class=\"row\">\n                                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-group-body-panel form-text-panel\"> \n\n                                                                    </div>\n                                                            </div>\n                                                            <div class=\"row\">\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\"> \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"longitude\" class=\"form-label\">ลองจิจูด</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"longitude\" placeholder=\"ลองจิจูด\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\"> \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"latitude\" class=\"form-label\">ละติจูด</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"latitude\" placeholder=\"ละติจูด\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"form-group-panel clear-fix\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-button\">  \n                                                            <button type=\"submit\" class=\"btn btn-block btn-light btn-save\">บันทึก</button>\n                                                        </div>\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-button\">  \n                                                            <button type=\"submit\" class=\"btn btn-block btn-light btn-cancel\">ยกเลิก</button>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                        <!-- รายการสัตว์ที่ลงทะเบียน -->\n                        <div role=\"tabpanel\" class=\"tab-pane\" id=\"animal-list\">\n                            <div class=\"content-container\">\n                                <div class=\"card-body form-information-card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\"> \n                                            <div class=\"form-group-panel clear-fix\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 searchbar\">\n                                                        <button type=\"submit\" class=\"btn btn-block btn-light btn-insert-animal-info\" (click)=\"formAnimalInformation('add')\">\n                                                           <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> เพิ่มข้อมูลสัตว์\n                                                        </button> \n                                                    </div>\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 searchbar text-box-panel\"> \n                                                        <div class=\"form-group clear-fix\">\n                                                            <label for=\"filterAnimal\" class=\"form-label sr-only\">เลือกประเภทของสัตว์</label>\n                                                            <p-dropdown placeholder=\"เลือกประเภทสัตว์\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\"  [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-dropdown-filter\" selectId=\"filterAnimal\"></p-dropdown>\n                                                        </div> \n                                                    </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 data-table-group\">  \n                                                        <p-table [value]=\"animalInformations\"  [lazy]=\"true\" (onLazyLoad)=\"LoadContentLazy($event)\" [paginator]=\"true\" [rows]=\"15\" [totalRecords]=\"totalRecords\" [loading]=\"loading\" [responsive]=\"true\">\n                                                            <ng-template pTemplate=\"caption\">\n                                                                รายการสัตว์ที่ลงทะเบียน\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"header\">\n                                                                <tr>\n                                                                    <th rowspan=\"2\">ชื่อ/ลักษณะสัตว์</th>\n                                                                    <th rowspan=\"2\">เพศ</th>\n                                                                    <th rowspan=\"2\">ประวัติการฉีดวัคซีน</th>\n                                                                    <th rowspan=\"2\">วัคซีนครั้งล่าสุดประมาณ</th>\n                                                                    <th rowspan=\"2\">การทำหมัน</th>\n                                                                    <th colspan=\"2\">อายุ</th>\n                                                                    <th rowspan=\"2\">จัดการ</th>\n                                                                </tr>\n                                                                <tr>\n                                                                    <th>ปี</th>\n                                                                    <th>เดือน</th>\n                                                                </tr>\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"body\" let-rowData>\n                                                                <tr>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">ชื่อ/ลักษณะสัตว์</span>\n                                                                        {{rowData.identity}}\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">เพศ</span>\n                                                                        {{rowData.gender}}\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">ประวัติการฉีดวัคซีน</span>\n                                                                        {{rowData.vaccinationHistoryFlg}}\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">วัคซีนครั้งล่าสุดประมาณ</span>\n                                                                        {{rowData.vaccinationLastDate}}\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">การทำหมัน</span>\n                                                                        {{rowData.sterilizationFlg}}\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">อายุ (ปี)</span>\n                                                                        {{rowData.yearAge}}\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">อายุ (เดือน)</span>\n                                                                        {{rowData.monthAge}}\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">จัดการ</span>\n                                                                        {{rowData.animalInfoID}}\n                                                                    </td>\n                                                                </tr>\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"emptymessage\">\n                                                                <tr>\n                                                                    <td colspan=\"8\" class=\"emptymessage\">\n                                                                        ไม่มีรายการ\n                                                                    </td>\n                                                                </tr>\n                                                            </ng-template>\n                                                        </p-table>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div> \n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                         <!------- SUSPICIOUS ------->\n                        <div role=\"tabpanel\" class=\"tab-pane\" id=\"suspicious-list\">\n                            <div class=\"content-container\">\n                                <div class=\"card-body survey-card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\"> \n                                            <div class=\"form-group-panel clear-fix\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 searchbar\">\n                                                        <button type=\"submit\" class=\"btn btn-block btn-light btn-insert-animal-info\" (click)=\"ManageSurveyAnimalSuspicious()\">\n                                                           <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> เพิ่มข้อมูลสัตว์ต้องสงสัย\n                                                        </button>\n                                                    </div>\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 searchbar text-box-panel\"> \n                                                        <div class=\"form-group clear-fix\">\n                                                            <label for=\"filterAnimal\" class=\"form-label sr-only\">เลือกประเภทของสัตว์</label>\n                                                            <p-dropdown placeholder=\"เลือกประเภทสัตว์\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-dropdown-filter\" selectId=\"filterAnimal\"></p-dropdown>\n                                                        </div>  \n                                                    </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 data-table-group\">  \n                                                        <p-table [lazy]=\"true\" (onLazyLoad)=\"LoadContentLazy($event)\" [paginator]=\"true\" [rows]=\"15\" [totalRecords]=\"totalRecords\" [loading]=\"loading\" [responsive]=\"true\">\n                                                            <ng-template pTemplate=\"caption\">\n                                                                ข้อมูลสัตว์ต้องสงสัย\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"header\">\n                                                                <tr>\n                                                                    <th>ลำดับ</th>\n                                                                    <th>วันที่สำรวจ</th>\n                                                                    <th>สถานที่สำรวจ</th>\n                                                                    <th>ชื่อ/การติดต่อ ผู้แจ้ง</th>\n                                                                    <th>ประเภท/ลักษณะ สัตว์</th>\n                                                                    <th>ลักษณะอาการ</th>\n                                                                    <th>จัดการ</th>\n                                                                </tr>\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"body\" let-rowData>\n                                                                <tr>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">ลำดับ</span>\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">วันที่สำรวจ</span>\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">สถานที่สำรวจ</span>\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">ชื่อ/การติดต่อ ผู้แจ้ง</span>\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">ประเภท/ลักษณะ สัตว์</span>\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">ลักษณะอาการ</span>\n                                                                    </td>\n                                                                    <td>\n                                                                       \n                                                                    </td>\n                                                                </tr>\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"emptymessage\">\n                                                                <tr>\n                                                                    <td colspan=\"7\" class=\"emptymessage\">\n                                                                        ไม่มีรายการ\n                                                                    </td>\n                                                                </tr>\n                                                            </ng-template>\n                                                        </p-table>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>  \n    </div>              \n</div>"

/***/ }),

/***/ "./src/app/pages/survey-has-owner/owner-information/owner.information.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid.breadcrumb {\n    padding-top: 10px; }\n.container-fluid .container-body {\n    width: 100%; }\n.container-fluid .container-body .row {\n      margin-left: 0px;\n      margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n.mh-card {\n  min-height: 162px; }\n.color-white {\n  color: white; }\n.bg-success {\n  background: #39B062 !important; }\n.tab-active {\n  border-bottom: 5px solid #39B062; }\n.card {\n  background-color: unset !important;\n  border: unset !important;\n  border-radius: unset !important; }\n.card.tab-survey-card {\n    padding-left: 0px;\n    width: 100%; }\n.card-body {\n  background-color: #FFFFFF;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  margin-bottom: 20px;\n  /******* FORM *******/ }\n.card-body.form-information-card-body {\n    background-color: #FFFFFF;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 0px;\n    margin-bottom: 0px;\n    padding: 0px; }\n.card-body.form-information-card-body .text-box-panel {\n      padding-bottom: 30px !important; }\n.card-body.form-information-card-body .text-box-panel .form-header h3 {\n        text-align: left;\n        font-family: \"promptbold\", \"sans-serif\";\n        font-size: 26px;\n        color: rgba(0, 0, 0, 0.4); }\n.card-body.form-information-card-body .text-box-panel .form-header-line {\n        border-bottom: 2px solid #EEEEEE;\n        margin-bottom: 30px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel {\n        padding-left: 10px;\n        padding-right: 10px;\n        margin-bottom: 25px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel {\n          text-align: left;\n          padding-bottom: 0px !important; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel .form-group {\n            width: auto;\n            float: right;\n            padding-top: 4px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel .form-group .form-control {\n              width: 35%; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .searchbar button i {\n          margin-right: 5px !important; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .searchbar .btn-block {\n          width: auto; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .searchbar .btn-light {\n          border-color: #EEEEEE !important; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .searchbar .btn-insert-animal-info {\n          padding-left: 40px;\n          padding-right: 40px;\n          padding-top: 10px;\n          padding-bottom: 10px;\n          font-family: \"promptregular\", \"sans-serif\";\n          font-size: 18px;\n          -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          border-radius: 4px;\n          background: #39b063;\n          color: #FFFFFF;\n          float: left; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel {\n          min-width: 200px;\n          padding-left: 10px;\n          border-radius: 4px;\n          border: 1px solid #ced4da; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel .form-dropdown-filter {\n            -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05); }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel.form-control {\n            width: 100% !important;\n            padding: 0px;\n            padding-left: 4px;\n            padding-top: 3px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel .ui-dropdown-label {\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 16px;\n            color: #4d4d4d; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel .ui-dropdown-items-wrapper .ui-dropdown-items .ui-dropdown-item {\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 18px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-button {\n          margin-bottom: 10px;\n          padding-left: 34px;\n          padding-right: 34px;\n          padding-top: 50px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-button button {\n            min-width: 200px !important;\n            padding-top: 10px;\n            padding-bottom: 10px;\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 18px;\n            -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            border-radius: 4px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-block {\n              width: 0px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light {\n              border-color: #EEEEEE !important; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light.btn-save {\n                background: #39b063;\n                color: #FFFFFF;\n                float: right; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light.btn-cancel {\n                background: #EEEEEE;\n                color: #222222; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light:hover:not(.btn-save) {\n                background: rgba(57, 176, 99, 0.5);\n                color: #FFFFFF; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-button button i {\n              margin-right: 5px !important; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-caption {\n          padding-top: 15px;\n          padding-bottom: 15px;\n          background: rgba(57, 176, 98, 0.7);\n          font-size: 18px;\n          font-family: \"promptmedium\", \"sans-serif\";\n          color: #f1f0f0; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-thead th {\n          text-align: center;\n          background: rgba(57, 176, 98, 0.7);\n          font-size: 14px;\n          font-family: \"promptmedium\", \"sans-serif\";\n          color: #f1f0f0; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td {\n          padding-top: 10px;\n          padding-bottom: 10px;\n          text-align: left;\n          font-size: 14px;\n          font-family: \"pridiregular\", \"sans-serif\";\n          color: #333333; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td.emptymessage {\n            padding-top: 20px;\n            padding-bottom: 20px;\n            text-align: center;\n            font-size: 14px;\n            font-family: \"pridiregular\", \"sans-serif\";\n            color: #333333; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-paginator-bottom.ui-paginator {\n          text-align: right; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-paginator-bottom.ui-paginator .ui-paginator-element {\n            font-size: 14px;\n            font-family: \"pridiregular\", \"sans-serif\";\n            color: #333333; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-title {\n          border-right: 3px solid #EEEEEE;\n          padding-top: 15px;\n          padding-bottom: 20px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-title h3 {\n            font-family: \"promptmedium\", \"sans-serif\";\n            font-size: 18px; }\n.card-body.form-information-card-body .text-box-panel .form-group-panel .form-group-body .form-group-body-panel {\n          padding-left: 0px;\n          padding-right: 0px; }\n.card-body.tab-survey-card-body {\n    margin-bottom: 0px;\n    border: none;\n    border-radius: 0px;\n    border-bottom: none; }\n.card-body.tab-survey-card-body .tab-body {\n      padding-left: 15px;\n      padding-right: 15px; }\n.card-body.tab-survey-card-body .tab-body .nav {\n        border-bottom: 1px solid #DDDDDD; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item {\n          cursor: pointer; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item.tab-no-header {\n            padding-left: 20px;\n            padding-right: 20px;\n            padding-top: 13px;\n            padding-bottom: 8px; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item .nav-link {\n            font-family: \"promptmedium\", \"sans-serif\";\n            font-size: 19px;\n            padding-left: 0px; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item .nav-link.active {\n              color: #39B062; }\n.card-body.tab-survey-card-body .tab-content {\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-top: 40px; }\n.form-group {\n  width: 100%;\n  display: inline-block;\n  padding-top: 0px; }\n.form-group:nth-child(0) {\n    margin-bottom: 20px; }\n.form-group .form-label {\n    width: 100%;\n    float: none;\n    text-align: left;\n    font-family: \"promptregular\", \"sans-serif\";\n    font-size: 16px;\n    color: #4d4d4d; }\n.form-group .form-label::after {\n      content: \"\"; }\n.form-group .form-label.form-label-header {\n      font-family: \"promptmedium\", \"sans-serif\";\n      font-size: 18px; }\n.form-group.form-control {\n    border: none;\n    padding-left: 0px; }\n.form-group .form-control {\n    width: 100%;\n    float: none;\n    text-align: left;\n    margin-bottom: 0px;\n    height: calc(2.25rem + 10px);\n    font-family: \"promptregular\", \"sans-serif\";\n    font-size: 16px;\n    color: #4d4d4d; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card-body {\n    margin-bottom: 10px; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card-body {\n    margin-bottom: 10px; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/survey-has-owner/owner-information/owner.information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerInformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_config_service__ = __webpack_require__("./src/app/core/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animal_information_animal_information_component__ = __webpack_require__("./src/app/pages/animal-information/animal.information.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OwnerInformationComponent = /** @class */ (function () {
    function OwnerInformationComponent(router, ModalService, themeConfig) {
        this.router = router;
        this.ModalService = ModalService;
        this.themeConfig = themeConfig;
    }
    OwnerInformationComponent.prototype.ngOnInit = function () {
        this.informationForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            customerType: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('corporation-customer'),
        });
        this.surveyerForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            customerType: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('corporation-customer'),
        });
        this.configMasterData();
        /****** Layout ******/
        this.tab = 'surveyer-info';
        /****** dataTable ******/
        this.totalRecords = 0;
        this.loading = true;
    };
    OwnerInformationComponent.prototype.configMasterData = function () {
        this.animalRegisterShow = [
            { label: 'Select City', value: null },
            { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
            { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
            { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
            { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
            { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
        ];
        this.masterAnimalRegisterShow = this.animalRegisterShow;
        this.masterProvinceShow = this.animalRegisterShow;
        this.masterDistrictShow = this.animalRegisterShow;
        this.masterSubDistrictShow = this.animalRegisterShow;
        this.masterPlaceIDShow = this.animalRegisterShow;
        this.masterSupportIDShow = this.animalRegisterShow;
    };
    OwnerInformationComponent.prototype.LoadContentLazy = function (event) {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
        }, 1000);
    };
    OwnerInformationComponent.prototype.tabSelected = function (tab) {
        this.tab = tab;
    };
    OwnerInformationComponent.prototype.formAnimalInformation = function (actionForm) {
        var initialState = { actionForm: 'add' };
        var dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
        this.modalRef = this.ModalService.show(__WEBPACK_IMPORTED_MODULE_5__animal_information_animal_information_component__["a" /* AnimalInfomationComponent */], Object.assign({}, dialogFormSetting, { initialState: initialState }));
    };
    OwnerInformationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-owner-information',
            template: __webpack_require__("./src/app/pages/survey-has-owner/owner-information/owner.information.component.html"),
            styles: [__webpack_require__("./src/app/pages/survey-has-owner/owner-information/owner.information.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_2__core_config_service__["a" /* ConfigService */]])
    ], OwnerInformationComponent);
    return OwnerInformationComponent;
}());



/***/ }),

/***/ "./src/app/pages/survey-has-owner/survey.hasowner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid breadcrumb\">\n    <nav class=\"nav-breadcrumb\" aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">แบบสำรวจข้อมูลสัตว์</li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">รายการขึ้นทะเบียนสัตว์ (มีเจ้าของ)</li>\n        </ol>\n    </nav>     \n\n    <div class=\"container-body\">\n        <div class=\"row\">\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 card mb-3 tab-survey-card\">\n                <div class=\"card-body tab-survey-card-body\">\n                    <div class=\"tab-body\">\n                        <ul class=\"nav text-center\" role=\"tablist\">\n                            <li class=\"nav-item tab-item tab-header\" [ngClass]=\"tab === 'report-animal-owner-group' ? 'tab-active' : ''\">\n                                <span class=\"nav-link active\" href=\"#report-animal-owner-group\" role=\"tab\" data-toggle=\"tab\" (click)=\"tabSelected('report-animal-owner-group')\">รายการขึ้นทะเบียนสัตว์ (มีเจ้าของ)</span>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"tab-content\">\n                        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"report-animal-owner-group\">\n                            <div class=\"content-container\">\n                                <div class=\"card-body form-survey-card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\"> \n                                            <div class=\"form-group-panel clear-fix\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 data-table-group\">  \n                                                        <p-table [value]=\"roundAnimalOwnerGroup\"  [lazy]=\"true\" (onLazyLoad)=\"LoadContentLazy($event)\" [paginator]=\"true\" [rows]=\"15\" [totalRecords]=\"totalRecords\" [loading]=\"loading\" [responsive]=\"true\">\n                                                            <ng-template pTemplate=\"caption\">\n                                                                รายการขึ้นทะเบียนสัตว์ (มีเจ้าของ)\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"header\">\n                                                                <tr>\n                                                                    <th>รายการขึ้นทะเบียนสัตว์</th>\n                                                                    <th>วันที่เริ่มต้น - สิ้นสุดของรายการ</th>\n                                                                    <th>สถานะ</th>\n                                                                    <th>จัดการ</th>\n                                                                </tr>\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"body\" let-rowData>\n                                                                <tr>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">รายการขึ้นทะเบียนสัตว์</span>\n                                                                        {{rowData.roundName}}\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">วันที่เริ่มต้น - สิ้นสุดของรายการ</span>\n                                                                        {{rowData.roundStartDate}} - {{rowData.roundEndDate}}\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">สถานะ</span>\n                                                                        {{rowData.roundStatus}} อยู่ในระยะเวลา\n                                                                    </td>\n                                                                    <td class=\"col-btn-group\">\n\n                                                                        <a class=\"btn-content btn-icon\" (click)=\"ManageOwnerList()\"> \n                                                                            <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\n                                                                        </a>\n                                                                    </td>\n                                                                </tr>\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"emptymessage\">\n                                                                <tr>\n                                                                    <td colspan=\"4\" class=\"emptymessage\">\n                                                                        ไม่มีรายการ\n                                                                    </td>\n                                                                </tr>\n                                                            </ng-template>\n                                                        </p-table>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>  \n    </div>              \n</div>"

/***/ }),

/***/ "./src/app/pages/survey-has-owner/survey.hasowner.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid.breadcrumb {\n    padding-top: 10px; }\n.container-fluid .container-body .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n.mh-card {\n  min-height: 162px; }\n.color-white {\n  color: white; }\n.bg-success {\n  background: #39B062 !important; }\n.tab-active {\n  border-bottom: 5px solid #39B062; }\n.card {\n  background-color: unset !important;\n  border: unset !important;\n  border-radius: unset !important; }\n.card.tab-survey-card {\n    padding-left: 0px;\n    width: 100%; }\n.card-body {\n  background-color: #FFFFFF;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  margin-bottom: 20px; }\n.card-body.form-survey-card-body {\n    background-color: #FFFFFF;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 0px;\n    margin-bottom: 0px;\n    padding: 0px; }\n.card-body.form-survey-card-body .text-box-panel {\n      padding-bottom: 30px !important; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel {\n        padding-left: 0px !important;\n        padding-right: 0px !important;\n        margin-bottom: 25px; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group {\n          padding-left: 0px !important;\n          padding-right: 0px !important; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-caption {\n            padding-top: 15px;\n            padding-bottom: 15px;\n            background: rgba(57, 176, 98, 0.7);\n            font-size: 18px;\n            font-family: \"promptmedium\", \"sans-serif\";\n            color: #f1f0f0; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-thead th {\n            text-align: center;\n            background: rgba(57, 176, 98, 0.7);\n            font-size: 14px;\n            font-family: \"promptmedium\", \"sans-serif\";\n            color: #f1f0f0; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td {\n            padding-top: 10px;\n            padding-bottom: 10px;\n            text-align: left;\n            font-size: 14px;\n            font-family: \"pridiregular\", \"sans-serif\";\n            color: #333333; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td.emptymessage {\n              padding-top: 20px;\n              padding-bottom: 20px;\n              text-align: center;\n              font-size: 14px;\n              font-family: \"pridiregular\", \"sans-serif\";\n              color: #333333; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td.col-btn-group {\n              text-align: center; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td.col-btn-group .btn-content {\n                cursor: pointer;\n                display: inline-block; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td.col-btn-group .btn-icon {\n                font-size: 22px; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-paginator-bottom.ui-paginator {\n            text-align: right; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-paginator-bottom.ui-paginator .ui-paginator-element {\n              font-size: 14px;\n              font-family: \"pridiregular\", \"sans-serif\";\n              color: #333333; }\n.card-body.tab-survey-card-body {\n    margin-bottom: 0px;\n    border: none;\n    border-radius: 0px;\n    border-bottom: none; }\n.card-body.tab-survey-card-body .tab-body {\n      padding-left: 15px;\n      padding-right: 15px; }\n.card-body.tab-survey-card-body .tab-body .nav {\n        border-bottom: 1px solid #DDDDDD; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item {\n          cursor: pointer; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item.tab-header {\n            padding-left: 0px;\n            padding-right: 0px;\n            padding-top: 13px;\n            padding-bottom: 8px; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item .nav-link {\n            font-family: \"promptmedium\", \"sans-serif\";\n            font-size: 19px;\n            padding-left: 0px; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item .nav-link.active {\n              color: #39B062; }\n.card-body.tab-survey-card-body .tab-content {\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-top: 40px; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card-body {\n    margin-bottom: 10px; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card-body {\n    margin-bottom: 10px; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/survey-has-owner/survey.hasowner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyHasOwnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SurveyHasOwnerComponent = /** @class */ (function () {
    function SurveyHasOwnerComponent(router) {
        this.router = router;
    }
    SurveyHasOwnerComponent.prototype.ngOnInit = function () {
        this.tab = 'report-animal-owner-group';
        /****** dataTable ******/
        this.totalRecords = 0;
        this.loading = true;
        this.roundAnimalOwnerGroup = [
            {
                roundID: '1',
                roundName: 'รายการขึ้นทะเบียนสัตว์ ปี 2018 ครั้งที่ 2 ',
                roundStartDate: '01/07/2561',
                roundEndDate: '31/12/2561',
                roundStatus: true,
            }
        ];
    };
    SurveyHasOwnerComponent.prototype.tabSelected = function (tab) {
        this.tab = tab;
    };
    SurveyHasOwnerComponent.prototype.ManageOwnerList = function () {
        this.router.navigate(['survey/animal-has-owner/owner-information-list']);
    };
    SurveyHasOwnerComponent.prototype.LoadContentLazy = function (event) {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
        }, 1000);
    };
    SurveyHasOwnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-survey-hasowner',
            template: __webpack_require__("./src/app/pages/survey-has-owner/survey.hasowner.component.html"),
            styles: [__webpack_require__("./src/app/pages/survey-has-owner/survey.hasowner.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SurveyHasOwnerComponent);
    return SurveyHasOwnerComponent;
}());



/***/ }),

/***/ "./src/app/pages/survey-no-owner/no-owner-information-list/noowner.information.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid breadcrumb\">\n    <nav class=\"nav-breadcrumb\" aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">แบบสำรวจข้อมูลสัตว์</li>\n            <li class=\"breadcrumb-item\">รายการขึ้นทะเบียนสัตว์ (ไม่มีเจ้าของ)</li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">ข้อมูลสัตว์ไม่มีเจ้าของ</li>\n        </ol>\n    </nav>     \n\n    <div class=\"container-body\">\n        <div class=\"row\">\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 card mb-3 tab-survey-card\">\n                <div class=\"card-body tab-survey-card-body\">\n                    <div class=\"tab-body\">\n                        <ul class=\"nav text-center\" role=\"tablist\">\n                            <li class=\"nav-item tab-item tab-header\" [ngClass]=\"tab === 'noowner-information-group' ? 'tab-active' : ''\">\n                                <span class=\"nav-link active\" href=\"#noowner-information-group\" role=\"tab\" data-toggle=\"tab\" (click)=\"tabSelected('noowner-information-group')\">ข้อมูลสัตว์ไม่มีเจ้าของ</span>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"tab-content\">\n                        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"noowner-information-group\">\n                            <div class=\"content-container\">\n                                <div class=\"card-body form-survey-card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\"> \n                                            <div class=\"form-group-panel clear-fix\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 searchbar\">\n                                                        <button type=\"submit\" class=\"btn btn-block btn-light btn-insert-animal-info\" (click)=\"ManageNoOwnerInformation()\">\n                                                           <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> เพิ่มข้อมูลการสำรวจ\n                                                        </button>\n                                                    </div>\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 searchbar text-box-panel\"> \n                                                        <div class=\"form-group clear-fix\">\n                                                            <label for=\"filterAnimal\" class=\"form-label sr-only\">เลือกประเภทของสัตว์</label>\n                                                            <p-dropdown placeholder=\"เลือกประเภทสัตว์\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-dropdown-filter\" selectId=\"filterAnimal\"></p-dropdown>\n                                                        </div>  \n                                                    </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 data-table-group\">  \n                                                        <p-table [value]=\"noOwnerInfomationGroup\"  [lazy]=\"true\" (onLazyLoad)=\"LoadContentLazy($event)\" [paginator]=\"true\" [rows]=\"15\" [totalRecords]=\"totalRecords\" [loading]=\"loading\" [responsive]=\"true\">\n                                                            <ng-template pTemplate=\"caption\">\n                                                                ข้อมูลสัตว์ไม่มีเจ้าของ\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"header\">\n                                                                <tr>\n                                                                    <th>ลำดับ</th>\n                                                                    <th>ชื่อ-สกุล</th>\n                                                                    <th>สถานที่เลี้ยง</th>\n                                                                    <th>จำนวนสัตว์</th>\n                                                                    <th>จัดการ</th>\n                                                                </tr>\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"body\" let-rowData>\n                                                                <tr>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">ลำดับ</span>\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">ชื่อ-สกุล</span>\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">สถานที่เลี้ยง</span>\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">จำนวนสัตว์</span>\n                                                                    </td>\n                                                                    <td>\n                                                                       \n                                                                    </td>\n                                                                </tr>\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"emptymessage\">\n                                                                <tr>\n                                                                    <td colspan=\"5\" class=\"emptymessage\">\n                                                                        ไม่มีรายการ\n                                                                    </td>\n                                                                </tr>\n                                                            </ng-template>\n                                                        </p-table>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>  \n    </div>              \n</div>"

/***/ }),

/***/ "./src/app/pages/survey-no-owner/no-owner-information-list/noowner.information.list.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid.breadcrumb {\n    padding-top: 10px; }\n.container-fluid .container-body .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n.mh-card {\n  min-height: 162px; }\n.color-white {\n  color: white; }\n.bg-success {\n  background: #39B062 !important; }\n.tab-active {\n  border-bottom: 5px solid #39B062; }\n.card {\n  background-color: unset !important;\n  border: unset !important;\n  border-radius: unset !important; }\n.card.tab-survey-card {\n    padding-left: 0px;\n    width: 100%; }\n.card-body {\n  background-color: #FFFFFF;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  margin-bottom: 20px; }\n.card-body.form-survey-card-body {\n    background-color: #FFFFFF;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 0px;\n    margin-bottom: 0px;\n    padding: 0px; }\n.card-body.form-survey-card-body .text-box-panel {\n      padding-bottom: 30px !important; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel {\n        padding-left: 0px !important;\n        padding-right: 0px !important;\n        margin-bottom: 25px; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .searchbar {\n          padding-left: 0px;\n          padding-right: 0px; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel {\n            text-align: left;\n            padding-bottom: 0px !important; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel .form-group {\n              width: auto;\n              float: right;\n              padding-top: 4px; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel .form-group .form-control {\n                width: 35%; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .searchbar button i {\n            margin-right: 5px !important; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .searchbar .btn-block {\n            width: auto; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .searchbar .btn-light {\n            border-color: #EEEEEE !important; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .searchbar .btn-insert-animal-info {\n            padding-left: 40px;\n            padding-right: 40px;\n            padding-top: 10px;\n            padding-bottom: 10px;\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 18px;\n            -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            border-radius: 4px;\n            background: #39b063;\n            color: #FFFFFF;\n            float: left; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .form-dropdown-panel {\n          min-width: 200px;\n          padding-left: 10px;\n          border-radius: 4px;\n          border: 1px solid #ced4da; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .form-dropdown-panel .form-dropdown-filter {\n            -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05); }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .form-dropdown-panel.form-control {\n            width: 100% !important;\n            padding: 0px;\n            padding-left: 4px;\n            padding-top: 3px; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .form-dropdown-panel .ui-dropdown-label {\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 16px;\n            color: #4d4d4d; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .form-dropdown-panel .ui-dropdown-items-wrapper .ui-dropdown-items .ui-dropdown-item {\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 18px; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group {\n          padding-left: 0px !important;\n          padding-right: 0px !important; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-caption {\n            padding-top: 15px;\n            padding-bottom: 15px;\n            background: rgba(57, 176, 98, 0.7);\n            font-size: 18px;\n            font-family: \"promptmedium\", \"sans-serif\";\n            color: #f1f0f0; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-thead th {\n            text-align: center;\n            background: rgba(57, 176, 98, 0.7);\n            font-size: 14px;\n            font-family: \"promptmedium\", \"sans-serif\";\n            color: #f1f0f0; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td {\n            padding-top: 10px;\n            padding-bottom: 10px;\n            text-align: left;\n            font-size: 14px;\n            font-family: \"pridiregular\", \"sans-serif\";\n            color: #333333; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td.emptymessage {\n              padding-top: 20px;\n              padding-bottom: 20px;\n              text-align: center;\n              font-size: 14px;\n              font-family: \"pridiregular\", \"sans-serif\";\n              color: #333333; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-paginator-bottom.ui-paginator {\n            text-align: right; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-paginator-bottom.ui-paginator .ui-paginator-element {\n              font-size: 14px;\n              font-family: \"pridiregular\", \"sans-serif\";\n              color: #333333; }\n.card-body.tab-survey-card-body {\n    margin-bottom: 0px;\n    border: none;\n    border-radius: 0px;\n    border-bottom: none; }\n.card-body.tab-survey-card-body .tab-body {\n      padding-left: 15px;\n      padding-right: 15px; }\n.card-body.tab-survey-card-body .tab-body .nav {\n        border-bottom: 1px solid #DDDDDD; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item {\n          cursor: pointer; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item.tab-header {\n            padding-left: 0px;\n            padding-right: 0px;\n            padding-top: 13px;\n            padding-bottom: 8px; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item .nav-link {\n            font-family: \"promptmedium\", \"sans-serif\";\n            font-size: 19px;\n            padding-left: 0px; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item .nav-link.active {\n              color: #39B062; }\n.card-body.tab-survey-card-body .tab-content {\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-top: 40px; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card-body {\n    margin-bottom: 10px; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card-body {\n    margin-bottom: 10px; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/survey-no-owner/no-owner-information-list/noowner.information.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoOwnerInformationListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoOwnerInformationListComponent = /** @class */ (function () {
    function NoOwnerInformationListComponent(router) {
        this.router = router;
    }
    NoOwnerInformationListComponent.prototype.ngOnInit = function () {
        this.tab = 'noowner-information-group';
        /****** dataTable ******/
        this.totalRecords = 0;
        this.loading = true;
    };
    NoOwnerInformationListComponent.prototype.tabSelected = function (tab) {
        this.tab = tab;
    };
    NoOwnerInformationListComponent.prototype.ManageNoOwnerInformation = function () {
        this.router.navigate(['survey/animal-no-owner/noowner-information']);
    };
    NoOwnerInformationListComponent.prototype.LoadContentLazy = function (event) {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
        }, 1000);
    };
    NoOwnerInformationListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-noowner-information-list',
            template: __webpack_require__("./src/app/pages/survey-no-owner/no-owner-information-list/noowner.information.list.component.html"),
            styles: [__webpack_require__("./src/app/pages/survey-no-owner/no-owner-information-list/noowner.information.list.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NoOwnerInformationListComponent);
    return NoOwnerInformationListComponent;
}());



/***/ }),

/***/ "./src/app/pages/survey-no-owner/no-owner-information/noowner.information.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid breadcrumb\">\n    <nav class=\"nav-breadcrumb\" aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">แบบสำรวจข้อมูลสัตว์</li>\n            <li class=\"breadcrumb-item\">รายการขึ้นทะเบียนสัตว์ (ไม่มีเจ้าของ)</li>\n            <li class=\"breadcrumb-item\">ข้อมูลสัตว์ไม่มีเจ้าของ</li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">เพิ่มข้อมูลสัตว์</li>\n        </ol>\n    </nav>     \n\n    <div class=\"container-body\">\n        <div class=\"row\">\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 card mb-3 tab-survey-card\">\n                <div class=\"card-body tab-survey-card-body\">\n                    <div class=\"tab-body\">\n                        <ul class=\"nav text-center\" role=\"tablist\">\n                            <li class=\"nav-item tab-item tab-no-header\" [ngClass]=\"tab === 'surveyer-info' ? 'tab-active' : ''\">\n                                <span class=\"nav-link active\" href=\"#surveyer-info\" role=\"tab\" data-toggle=\"tab\" (click)=\"tabSelected('surveyer-info')\">ข้อมูลผู้สำรวจ</span>\n                            </li>\n                            <li class=\"nav-item tab-item tab-no-header\" [ngClass]=\"tab === 'animal-survey-info' ? 'tab-active' : ''\">\n                                <span class=\"nav-link\" href=\"#animal-survey-info\" role=\"tab\" data-toggle=\"tab\" (click)=\"tabSelected('animal-survey-info')\">ข้อมูลการสำรวจ</span>\n                            </li>\n                            <li class=\"nav-item tab-item tab-no-header\" [ngClass]=\"tab === 'suspicious-list' ? 'tab-active' : ''\">\n                                <span class=\"nav-link\" href=\"#suspicious-list\" role=\"tab\" data-toggle=\"tab\" (click)=\"tabSelected('suspicious-list')\">ข้อมูลสัตว์ต้องสงสัย</span>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"tab-content\">\n                        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"surveyer-info\">\n                            <div class=\"content-container\">\n                                <form class=\"form-information mt-3\" name=\"surveyerForm\">\n                                    <div class=\"card-body survey-card-body\">\n                                        <div class=\"row\">\n                                            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\">  \n                                                \n                                                <div class=\"form-group-panel clear-fix\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 form-group-title\">  \n                                                            <h3> ข้อมูลผู้สำรวจ </h3>\n                                                        </div>\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 form-group-body\"> \n\n\n                                                            <div class=\"row\">\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\"> \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"SurveyerName\" class=\"form-label\">ชื่อ-นามสกุล</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"SurveyerName\" placeholder=\"ชื่อ-นามสกุล\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\"> \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"SurveyerIDCard\" class=\"form-label\">หมายเลขบัตรประชาชน</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"SurveyerIDCard\" placeholder=\"หมายเลขบัตรประชาชน\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"row\">\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\"> \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"surveyญชPhoneNumber\" class=\"form-label\">เบอร์โทรศัพท์</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"surveyญชPhoneNumber\" placeholder=\"เบอร์โทรศัพท์\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\"> \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"email\" class=\"form-label\">อีเมลล์</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"อีเมลล์\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"row\">\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    <div class=\"row\">\n                                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 form-text-panel\"> \n                                                                            <div class=\"form-group clear-fix\">\n                                                                                <label for=\"department\" class=\"form-label\">สังกัดหน่วยงาน</label>\n                                                                                <input type=\"text\" class=\"form-control\" id=\"departmant\" placeholder=\"สังกัดหน่วยงาน\">\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-body-panel form-text-panel\">  \n                                                                    \n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                \n                                                <div class=\"form-group-panel clear-fix\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-button\">  \n                                                            <button type=\"submit\" class=\"btn btn-block btn-light btn-save\">บันทึก</button>\n                                                        </div>\n                                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-button\">  \n                                                            <button type=\"submit\" class=\"btn btn-block btn-light btn-cancel\">ยกเลิก</button>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n\n                        <!------- ANIMAL SURVEY INFO ------->\n                        <div role=\"tabpanel\" class=\"tab-pane\" id=\"animal-survey-info\">\n                            <div class=\"content-container\">\n                                <div class=\"card-body survey-card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\"> \n                                            <div class=\"form-group-panel clear-fix\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 searchbar\">\n                                                        <button type=\"submit\" class=\"btn btn-block btn-light btn-insert-animal-info\" (click)=\"ManageSurveyAnimalInformation()\">\n                                                           <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> เพิ่มข้อมูลสัตว์\n                                                        </button>\n                                                    </div>\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 searchbar text-box-panel\"> \n                                                        <div class=\"form-group clear-fix\">\n                                                            <label for=\"filterAnimal\" class=\"form-label sr-only\">เลือกประเภทของสัตว์</label>\n                                                            <p-dropdown placeholder=\"เลือกประเภทสัตว์\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-dropdown-filter\" selectId=\"filterAnimal\"></p-dropdown>\n                                                        </div>  \n                                                    </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 data-table-group\">  \n                                                        <p-table [lazy]=\"true\" (onLazyLoad)=\"LoadContentLazy($event)\" [paginator]=\"true\" [rows]=\"15\" [totalRecords]=\"totalRecords\" [loading]=\"loading\" [responsive]=\"true\">\n                                                            <ng-template pTemplate=\"caption\">\n                                                                ข้อมูลสัตว์\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"header\">\n                                                                <tr>\n                                                                    <th>ลำดับ</th>\n                                                                    <th>วันที่สำรวจ</th>\n                                                                    <th>สถานที่สำรวจ</th>\n                                                                    <th>ประเภท/ลักษณะ สัตว์</th>\n                                                                    <th>จัดการ</th>\n                                                                </tr>\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"body\" let-rowData>\n                                                                <tr>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">ลำดับ</span>\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">วันที่สำรวจ</span>\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">สถานที่สำรวจ</span>\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">ชนิดของสัตว์ / จำนวนสัตว์</span>\n                                                                    </td>\n                                                                    <td>\n                                                                       \n                                                                    </td>\n                                                                </tr>\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"emptymessage\">\n                                                                <tr>\n                                                                    <td colspan=\"5\" class=\"emptymessage\">\n                                                                        ไม่มีรายการ\n                                                                    </td>\n                                                                </tr>\n                                                            </ng-template>\n                                                        </p-table>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!------- SUSPICIOUS ------->\n                        <div role=\"tabpanel\" class=\"tab-pane\" id=\"suspicious-list\">\n                            <div class=\"content-container\">\n                                <div class=\"card-body survey-card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\"> \n                                            <div class=\"form-group-panel clear-fix\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 searchbar\">\n                                                        <button type=\"submit\" class=\"btn btn-block btn-light btn-insert-animal-info\" (click)=\"ManageSurveyAnimalSuspicious()\">\n                                                           <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> เพิ่มข้อมูลสัตว์ต้องสงสัย\n                                                        </button>\n                                                    </div>\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 searchbar text-box-panel\"> \n                                                        <div class=\"form-group clear-fix\">\n                                                            <label for=\"filterAnimal\" class=\"form-label sr-only\">เลือกประเภทของสัตว์</label>\n                                                            <p-dropdown placeholder=\"เลือกประเภทสัตว์\" [autoWidth]=\"true\" emptyFilterMessage=\"ไม่มีข้อมูล\" [filter]=\"true\" filterBy=\"label,value.name\" styleClass=\"form-dropdown-panel form-dropdown-filter\" selectId=\"filterAnimal\"></p-dropdown>\n                                                        </div>  \n                                                    </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 data-table-group\">  \n                                                        <p-table [lazy]=\"true\" (onLazyLoad)=\"LoadContentLazy($event)\" [paginator]=\"true\" [rows]=\"15\" [totalRecords]=\"totalRecords\" [loading]=\"loading\" [responsive]=\"true\">\n                                                            <ng-template pTemplate=\"caption\">\n                                                                ข้อมูลสัตว์ต้องสงสัย\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"header\">\n                                                                <tr>\n                                                                    <th>ลำดับ</th>\n                                                                    <th>วันที่สำรวจ</th>\n                                                                    <th>สถานที่สำรวจ</th>\n                                                                    <th>ชื่อ/การติดต่อ ผู้แจ้ง</th>\n                                                                    <th>ประเภท/ลักษณะ สัตว์</th>\n                                                                    <th>ลักษณะอาการ</th>\n                                                                    <th>จัดการ</th>\n                                                                </tr>\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"body\" let-rowData>\n                                                                <tr>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">ลำดับ</span>\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">วันที่สำรวจ</span>\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">สถานที่สำรวจ</span>\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">ชื่อ/การติดต่อ ผู้แจ้ง</span>\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">ประเภท/ลักษณะ สัตว์</span>\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">ลักษณะอาการ</span>\n                                                                    </td>\n                                                                    <td>\n                                                                       \n                                                                    </td>\n                                                                </tr>\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"emptymessage\">\n                                                                <tr>\n                                                                    <td colspan=\"7\" class=\"emptymessage\">\n                                                                        ไม่มีรายการ\n                                                                    </td>\n                                                                </tr>\n                                                            </ng-template>\n                                                        </p-table>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>  \n    </div>              \n</div>"

/***/ }),

/***/ "./src/app/pages/survey-no-owner/no-owner-information/noowner.information.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid.breadcrumb {\n    padding-top: 10px; }\n.container-fluid .container-body {\n    width: 100%; }\n.container-fluid .container-body .row {\n      margin-left: 0px;\n      margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n.mh-card {\n  min-height: 162px; }\n.color-white {\n  color: white; }\n.bg-success {\n  background: #39B062 !important; }\n.tab-active {\n  border-bottom: 5px solid #39B062; }\n.card {\n  background-color: unset !important;\n  border: unset !important;\n  border-radius: unset !important; }\n.card.tab-survey-card {\n    padding-left: 0px;\n    width: 100%; }\n.card-body {\n  background-color: #FFFFFF;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  margin-bottom: 20px;\n  /******* FORM *******/ }\n.card-body.survey-card-body {\n    background-color: #FFFFFF;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 0px;\n    margin-bottom: 0px;\n    padding: 0px; }\n.card-body.survey-card-body .text-box-panel {\n      padding-bottom: 30px !important; }\n.card-body.survey-card-body .text-box-panel .form-header h3 {\n        text-align: left;\n        font-family: \"promptbold\", \"sans-serif\";\n        font-size: 26px;\n        color: rgba(0, 0, 0, 0.4); }\n.card-body.survey-card-body .text-box-panel .form-header-line {\n        border-bottom: 2px solid #EEEEEE;\n        margin-bottom: 30px; }\n.card-body.survey-card-body .text-box-panel .form-group-panel {\n        padding-left: 10px;\n        padding-right: 10px;\n        margin-bottom: 25px; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel {\n          text-align: left;\n          padding-bottom: 0px !important; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel .form-group {\n            width: auto;\n            float: right;\n            padding-top: 4px; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel .form-group .form-control {\n              width: 35%; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .searchbar button i {\n          margin-right: 5px !important; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .searchbar .btn-block {\n          width: auto; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .searchbar .btn-light {\n          border-color: #EEEEEE !important; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .searchbar .btn-insert-animal-info {\n          padding-left: 40px;\n          padding-right: 40px;\n          padding-top: 10px;\n          padding-bottom: 10px;\n          font-family: \"promptregular\", \"sans-serif\";\n          font-size: 18px;\n          -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          border-radius: 4px;\n          background: #39b063;\n          color: #FFFFFF;\n          float: left; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .form-dropdown-panel {\n          min-width: 200px;\n          padding-left: 10px;\n          border-radius: 4px;\n          border: 1px solid #ced4da; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .form-dropdown-panel .form-dropdown-filter {\n            -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05); }\n.card-body.survey-card-body .text-box-panel .form-group-panel .form-dropdown-panel.form-control {\n            width: 100% !important;\n            padding: 0px;\n            padding-left: 4px;\n            padding-top: 3px; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .form-dropdown-panel .ui-dropdown-label {\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 16px;\n            color: #4d4d4d; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .form-dropdown-panel .ui-dropdown-items-wrapper .ui-dropdown-items .ui-dropdown-item {\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 18px; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .form-group-button {\n          margin-bottom: 10px;\n          padding-left: 34px;\n          padding-right: 34px;\n          padding-top: 50px; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .form-group-button button {\n            min-width: 200px !important;\n            padding-top: 10px;\n            padding-bottom: 10px;\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 18px;\n            -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            border-radius: 4px; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .form-group-button button.btn-block {\n              width: 0px; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light {\n              border-color: #EEEEEE !important; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light.btn-save {\n                background: #39b063;\n                color: #FFFFFF;\n                float: right; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light.btn-cancel {\n                background: #EEEEEE;\n                color: #222222; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light:hover:not(.btn-save) {\n                background: rgba(57, 176, 99, 0.5);\n                color: #FFFFFF; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .form-group-button button i {\n              margin-right: 5px !important; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-caption {\n          padding-top: 15px;\n          padding-bottom: 15px;\n          background: rgba(57, 176, 98, 0.7);\n          font-size: 18px;\n          font-family: \"promptmedium\", \"sans-serif\";\n          color: #f1f0f0; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-thead th {\n          text-align: center;\n          background: rgba(57, 176, 98, 0.7);\n          font-size: 14px;\n          font-family: \"promptmedium\", \"sans-serif\";\n          color: #f1f0f0; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td {\n          padding-top: 10px;\n          padding-bottom: 10px;\n          text-align: left;\n          font-size: 14px;\n          font-family: \"pridiregular\", \"sans-serif\";\n          color: #333333; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td.emptymessage {\n            padding-top: 20px;\n            padding-bottom: 20px;\n            text-align: center;\n            font-size: 14px;\n            font-family: \"pridiregular\", \"sans-serif\";\n            color: #333333; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-paginator-bottom.ui-paginator {\n          text-align: right; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-paginator-bottom.ui-paginator .ui-paginator-element {\n            font-size: 14px;\n            font-family: \"pridiregular\", \"sans-serif\";\n            color: #333333; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .form-group-title {\n          border-right: 3px solid #EEEEEE;\n          padding-top: 15px;\n          padding-bottom: 20px; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .form-group-title h3 {\n            font-family: \"promptmedium\", \"sans-serif\";\n            font-size: 18px; }\n.card-body.survey-card-body .text-box-panel .form-group-panel .form-group-body .form-group-body-panel {\n          padding-left: 0px;\n          padding-right: 0px; }\n.card-body.tab-survey-card-body {\n    margin-bottom: 0px;\n    border: none;\n    border-radius: 0px;\n    border-bottom: none; }\n.card-body.tab-survey-card-body .tab-body {\n      padding-left: 15px;\n      padding-right: 15px; }\n.card-body.tab-survey-card-body .tab-body .nav {\n        border-bottom: 1px solid #DDDDDD; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item {\n          cursor: pointer; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item.tab-no-header {\n            padding-left: 20px;\n            padding-right: 20px;\n            padding-top: 13px;\n            padding-bottom: 8px; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item .nav-link {\n            font-family: \"promptmedium\", \"sans-serif\";\n            font-size: 19px;\n            padding-left: 0px; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item .nav-link.active {\n              color: #39B062; }\n.card-body.tab-survey-card-body .tab-content {\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-top: 40px; }\n.form-group {\n  width: 100%;\n  display: inline-block;\n  padding-top: 0px; }\n.form-group:nth-child(0) {\n    margin-bottom: 20px; }\n.form-group .form-label {\n    width: 100%;\n    float: none;\n    text-align: left;\n    font-family: \"promptregular\", \"sans-serif\";\n    font-size: 16px;\n    color: #4d4d4d; }\n.form-group .form-label::after {\n      content: \"\"; }\n.form-group .form-label.form-label-header {\n      font-family: \"promptmedium\", \"sans-serif\";\n      font-size: 18px; }\n.form-group.form-control {\n    border: none;\n    padding-left: 0px; }\n.form-group .form-control {\n    width: 100%;\n    float: none;\n    text-align: left;\n    margin-bottom: 0px;\n    height: calc(2.25rem + 10px);\n    font-family: \"promptregular\", \"sans-serif\";\n    font-size: 16px;\n    color: #4d4d4d; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card-body {\n    margin-bottom: 10px; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card-body {\n    margin-bottom: 10px; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/survey-no-owner/no-owner-information/noowner.information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoOwnerInformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_config_service__ = __webpack_require__("./src/app/core/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__survey_animal_information_survey_animal_information_component__ = __webpack_require__("./src/app/pages/survey-no-owner/survey-animal-information/survey.animal.information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__survey_animal_suspicious_survey_animal_suspicious_component__ = __webpack_require__("./src/app/pages/survey-no-owner/survey-animal-suspicious/survey.animal.suspicious.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NoOwnerInformationComponent = /** @class */ (function () {
    function NoOwnerInformationComponent(router, ModalService, themeConfig) {
        this.router = router;
        this.ModalService = ModalService;
        this.themeConfig = themeConfig;
    }
    NoOwnerInformationComponent.prototype.ngOnInit = function () {
        this.informationForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            customerType: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('corporation-customer'),
        });
        this.configMasterData();
        /****** Layout ******/
        this.tab = 'surveyer-info';
        /****** dataTable ******/
        this.totalRecords = 0;
        this.loading = true;
    };
    NoOwnerInformationComponent.prototype.configMasterData = function () {
        this.animalRegisterShow = [
            { label: 'Select City', value: null },
            { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
            { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
            { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
            { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
            { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
        ];
        this.masterAnimalRegisterShow = this.animalRegisterShow;
        this.masterProvinceShow = this.animalRegisterShow;
        this.masterDistrictShow = this.animalRegisterShow;
        this.masterSubDistrictShow = this.animalRegisterShow;
        this.masterPlaceIDShow = this.animalRegisterShow;
        this.masterSupportIDShow = this.animalRegisterShow;
    };
    NoOwnerInformationComponent.prototype.LoadContentLazy = function (event) {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
        }, 1000);
    };
    NoOwnerInformationComponent.prototype.tabSelected = function (tab) {
        this.tab = tab;
    };
    NoOwnerInformationComponent.prototype.ManageSurveyAnimalSuspicious = function () {
        var initialState = { actionForm: 'add' };
        var dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
        // dialogFormSetting.class = dialogFormSetting.class + ' custom-width';
        this.modalSASnRef = this.ModalService.show(__WEBPACK_IMPORTED_MODULE_6__survey_animal_suspicious_survey_animal_suspicious_component__["a" /* SurveyAnimalSuspiciousComponent */], Object.assign({}, dialogFormSetting, { initialState: initialState }));
    };
    NoOwnerInformationComponent.prototype.ManageSurveyAnimalInformation = function () {
        var initialState = { actionForm: 'add' };
        var dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
        // dialogFormSetting.class = 'modal-lg modal-dialog-centered custom-width';
        this.modalSAInRef = this.ModalService.show(__WEBPACK_IMPORTED_MODULE_5__survey_animal_information_survey_animal_information_component__["a" /* SurveyAnimalInformationComponent */], Object.assign({}, dialogFormSetting, { initialState: initialState }));
    };
    NoOwnerInformationComponent.prototype.formAnimalInformation = function (actionForm) {
    };
    NoOwnerInformationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-noowner-information',
            template: __webpack_require__("./src/app/pages/survey-no-owner/no-owner-information/noowner.information.component.html"),
            styles: [__webpack_require__("./src/app/pages/survey-no-owner/no-owner-information/noowner.information.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_4__core_config_service__["a" /* ConfigService */]])
    ], NoOwnerInformationComponent);
    return NoOwnerInformationComponent;
}());



/***/ }),

/***/ "./src/app/pages/survey-no-owner/survey-animal-information/survey.animal.information.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <div class=\"dialog-form-header-body\">\n        <h4 class=\"modal-title\">{{titleModal}}</h4>\n    </div> \n    <button type=\"button\" class=\"close dialog-form-close pull-right\" aria-label=\"Close\" (click)=\"modalClose()\">\n        <span aria-hidden=\"true\">&times;</span> \n    </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"dialog-form-content-body\">\n        <form class=\"form-dialog-information mt-3\" name=\"SAIForm\" [formGroup]=\"SAIForm\">\n            <div class=\"card-body form-dialog-information-card-body\">\n                <div class=\"row\">\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\">  \n                        \n                        <div class=\"form-group-panel clear-fix\">\n                            <div class=\"row\">\n                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 form-group-title\">  \n                                    <h3> ข้อมูลผู้สำรวจ </h3>\n                                </div>\n                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 form-group-body\"> \n\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group-panel clear-fix\">\n                            <div class=\"row\">\n                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 form-group-title\">  \n                                    <h3> ข้อมูลการสำรวจ </h3>\n                                </div>\n                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 form-group-body\"> \n\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group-panel clear-fix\">\n                            <div class=\"row\">\n                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 form-group-title\">  \n                                    <h3> ข้อมูลผู้ติดต่อ </h3>\n                                </div>\n                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 form-group-body\"> \n\n                                </div>\n                            </div>\n                        </div>                    \n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <div class=\"dialog-form-footer-body\">\n        <div class=\"card-body form-animal-information-card-body\">\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\">  \n                    <div class=\"form-group-panel clear-fix\">\n                        <div class=\"row\">\n                            <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-button\">  \n                                <button type=\"submit\" class=\"btn btn-block btn-light btn-save\">บันทึก</button>\n                            </div>\n                            <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-button\">  \n                                <button type=\"submit\" class=\"btn btn-block btn-light btn-cancel\">ยกเลิก</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/survey-no-owner/survey-animal-information/survey.animal.information.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.modal-header .dialog-form-header-body {\n  width: 100%; }\n.modal-header .dialog-form-header-body .modal-title {\n    display: inline-block;\n    font-family: \"promptmedium\", \"sans-serif\";\n    font-size: 20px; }\n.modal-header button.close {\n  padding-top: 18px !important;\n  padding-right: 20px; }\n.modal-body .dialog-form-content-body {\n  padding-left: 15px;\n  padding-right: 15px; }\n.modal-body .dialog-form-content-body .card-body {\n    background-color: #FFFFFF;\n    border: 1px solid rgba(0, 0, 0, 0.125);\n    -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n    border-radius: 4px;\n    margin-bottom: 20px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body {\n      background-color: #FFFFFF;\n      border: none;\n      -webkit-box-shadow: none;\n              box-shadow: none;\n      border-radius: 0px;\n      margin-bottom: 0px;\n      padding: 0px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel {\n        padding-bottom: 30px !important; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-header h3 {\n          text-align: left;\n          font-family: \"promptbold\", \"sans-serif\";\n          font-size: 26px;\n          color: rgba(0, 0, 0, 0.4); }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-header-line {\n          border-bottom: 2px solid #EEEEEE;\n          margin-bottom: 30px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel {\n          padding-left: 10px;\n          padding-right: 10px;\n          margin-bottom: 25px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel {\n            text-align: left;\n            padding-bottom: 0px !important; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel .form-group {\n              width: auto;\n              float: right;\n              padding-top: 4px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel .form-group .form-control {\n                width: 35%; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .searchbar button i {\n            margin-right: 5px !important; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .searchbar .btn-block {\n            width: auto; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .searchbar .btn-light {\n            border-color: #EEEEEE !important; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .searchbar .btn-insert-animal-info {\n            padding-left: 40px;\n            padding-right: 40px;\n            padding-top: 10px;\n            padding-bottom: 10px;\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 18px;\n            -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            border-radius: 4px;\n            background: #39b063;\n            color: #FFFFFF;\n            float: left; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel {\n            min-width: 200px;\n            padding-left: 10px;\n            border-radius: 4px;\n            border: 1px solid #ced4da; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel .form-dropdown-filter {\n              -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n              box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05); }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel.form-control {\n              width: 100% !important;\n              padding: 0px;\n              padding-left: 4px;\n              padding-top: 3px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel .ui-dropdown-label {\n              font-family: \"promptregular\", \"sans-serif\";\n              font-size: 16px;\n              color: #4d4d4d; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel .ui-dropdown-items-wrapper .ui-dropdown-items .ui-dropdown-item {\n              font-family: \"promptregular\", \"sans-serif\";\n              font-size: 18px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-button {\n            margin-bottom: 10px;\n            padding-left: 34px;\n            padding-right: 34px;\n            padding-top: 50px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-button button {\n              min-width: 200px !important;\n              padding-top: 10px;\n              padding-bottom: 10px;\n              font-family: \"promptregular\", \"sans-serif\";\n              font-size: 18px;\n              -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n              box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n              border-radius: 4px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-block {\n                width: 0px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light {\n                border-color: #EEEEEE !important; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light.btn-save {\n                  background: #39b063;\n                  color: #FFFFFF;\n                  float: right; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light.btn-cancel {\n                  background: #EEEEEE;\n                  color: #222222; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light:hover:not(.btn-save) {\n                  background: rgba(57, 176, 99, 0.5);\n                  color: #FFFFFF; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-button button i {\n                margin-right: 5px !important; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-caption {\n            padding-top: 15px;\n            padding-bottom: 15px;\n            background: rgba(57, 176, 98, 0.7);\n            font-size: 18px;\n            font-family: \"promptmedium\", \"sans-serif\";\n            color: #f1f0f0; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-thead th {\n            text-align: center;\n            background: rgba(57, 176, 98, 0.7);\n            font-size: 14px;\n            font-family: \"promptmedium\", \"sans-serif\";\n            color: #f1f0f0; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td {\n            padding-top: 10px;\n            padding-bottom: 10px;\n            text-align: left;\n            font-size: 14px;\n            font-family: \"pridiregular\", \"sans-serif\";\n            color: #333333; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td.emptymessage {\n              padding-top: 20px;\n              padding-bottom: 20px;\n              text-align: center;\n              font-size: 14px;\n              font-family: \"pridiregular\", \"sans-serif\";\n              color: #333333; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-paginator-bottom.ui-paginator {\n            text-align: right; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-paginator-bottom.ui-paginator .ui-paginator-element {\n              font-size: 14px;\n              font-family: \"pridiregular\", \"sans-serif\";\n              color: #333333; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-title {\n            border-right: 3px solid #EEEEEE;\n            padding-top: 15px;\n            padding-bottom: 20px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-title h3 {\n              font-family: \"promptmedium\", \"sans-serif\";\n              font-size: 18px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-body .form-group-body-panel {\n            padding-left: 0px;\n            padding-right: 0px; }\n.modal-footer .dialog-form-footer-body {\n  padding-left: 15px;\n  padding-right: 15px;\n  margin: 0px auto; }\n.modal-footer .dialog-form-footer-body .card-body {\n    margin-bottom: 0px; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body {\n      border: none;\n      -webkit-box-shadow: none;\n      box-shadow: none;\n      border-radius: 4px;\n      margin-bottom: 0px;\n      padding-top: 15px;\n      padding-left: 0px;\n      padding-right: 0px; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-group-button button {\n        min-width: 200px !important;\n        padding-top: 10px;\n        padding-bottom: 10px;\n        font-family: \"promptregular\", \"sans-serif\";\n        font-size: 18px;\n        -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n        box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n        border-radius: 4px; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-block {\n          width: 0px; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light {\n          border-color: #EEEEEE !important; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light.btn-save {\n            background: #39b063 !important;\n            color: #FFFFFF;\n            float: right; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light.btn-cancel {\n            background: #EEEEEE;\n            color: #222222; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light:hover:not(.btn-save) {\n            background: rgba(57, 176, 99, 0.5);\n            color: #FFFFFF; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/survey-no-owner/survey-animal-information/survey.animal.information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyAnimalInformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_config_service__ = __webpack_require__("./src/app/core/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SurveyAnimalInformationComponent = /** @class */ (function () {
    function SurveyAnimalInformationComponent(modalRef, ModalService, themeConfig) {
        this.modalRef = modalRef;
        this.ModalService = ModalService;
        this.themeConfig = themeConfig;
        this.action = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SurveyAnimalInformationComponent.prototype.ngOnInit = function () {
        this.setupCalendar();
        this.setupModalHeader();
        this.setupFormGroup();
        this.action.emit(true);
    };
    SurveyAnimalInformationComponent.prototype.setupCalendar = function () {
        this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
        this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
    };
    SurveyAnimalInformationComponent.prototype.setupFormGroup = function () {
        this.SAIForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({});
    };
    SurveyAnimalInformationComponent.prototype.setupModalHeader = function () {
        switch (this.actionForm) {
            case 'add':
                this.titleModal = 'เพิ่มข้อมูลการสำรวจ';
                break;
            default:
                this.titleModal = 'จัดการข้อมูลสัตว์';
        }
    };
    SurveyAnimalInformationComponent.prototype.modalClose = function () {
        this.modalRef.hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SurveyAnimalInformationComponent.prototype, "actionForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SurveyAnimalInformationComponent.prototype, "action", void 0);
    SurveyAnimalInformationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-survey-animal-information.',
            template: __webpack_require__("./src/app/pages/survey-no-owner/survey-animal-information/survey.animal.information.component.html"),
            styles: [__webpack_require__("./src/app/pages/survey-no-owner/survey-animal-information/survey.animal.information.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_3__core_config_service__["a" /* ConfigService */]])
    ], SurveyAnimalInformationComponent);
    return SurveyAnimalInformationComponent;
}());



/***/ }),

/***/ "./src/app/pages/survey-no-owner/survey-animal-suspicious/survey.animal.suspicious.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <div class=\"dialog-form-header-body\">\n        <h4 class=\"modal-title\">{{titleModal}}</h4>\n    </div> \n    <button type=\"button\" class=\"close dialog-form-close pull-right\" aria-label=\"Close\" (click)=\"modalClose()\">\n        <span aria-hidden=\"true\">&times;</span> \n    </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"dialog-form-content-body\">\n        <form class=\"form-dialog-information mt-3\" name=\"SASForm\" [formGroup]=\"SASForm\">\n            <div class=\"card-body form-dialog-information-card-body\">\n                <div class=\"row\">\n                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\">  \n                        \n                        <div class=\"form-group-panel clear-fix\">\n                            <div class=\"row\">\n                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 form-group-title\">  \n                                    <h3> ข้อมูลผู้สำรวจ </h3>\n                                </div>\n                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 form-group-body\"> \n\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group-panel clear-fix\">\n                            <div class=\"row\">\n                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 form-group-title\">  \n                                    <h3> ข้อมูลสัตว์ต้องสงสัย </h3>\n                                </div>\n                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 form-group-body\"> \n\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group-panel clear-fix\">\n                            <div class=\"row\">\n                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-3 form-group-title\">  \n                                    <h3> ข้อมูลผู้ติดต่อ </h3>\n                                </div>\n                                <div class=\"col-12 col-sm-12 col-md-12 col-lg-9 form-group-body\"> \n\n                                </div>\n                            </div>\n                        </div>                    \n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <div class=\"dialog-form-footer-body\">\n        <div class=\"card-body form-animal-information-card-body\">\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\">  \n                    <div class=\"form-group-panel clear-fix\">\n                        <div class=\"row\">\n                            <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-button\">  \n                                <button type=\"submit\" class=\"btn btn-block btn-light btn-save\">บันทึก</button>\n                            </div>\n                            <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 form-group-button\">  \n                                <button type=\"submit\" class=\"btn btn-block btn-light btn-cancel\">ยกเลิก</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/survey-no-owner/survey-animal-suspicious/survey.animal.suspicious.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.modal-header .dialog-form-header-body {\n  width: 100%; }\n.modal-header .dialog-form-header-body .modal-title {\n    display: inline-block;\n    font-family: \"promptmedium\", \"sans-serif\";\n    font-size: 20px; }\n.modal-header button.close {\n  padding-top: 18px !important;\n  padding-right: 20px; }\n.modal-body .dialog-form-content-body {\n  padding-left: 15px;\n  padding-right: 15px; }\n.modal-body .dialog-form-content-body .card-body {\n    background-color: #FFFFFF;\n    border: 1px solid rgba(0, 0, 0, 0.125);\n    -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n    border-radius: 4px;\n    margin-bottom: 0px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body {\n      background-color: #FFFFFF;\n      border: none;\n      -webkit-box-shadow: none;\n              box-shadow: none;\n      border-radius: 0px;\n      margin-bottom: 0px;\n      padding: 0px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel {\n        padding-bottom: 30px !important; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-header h3 {\n          text-align: left;\n          font-family: \"promptbold\", \"sans-serif\";\n          font-size: 26px;\n          color: rgba(0, 0, 0, 0.4); }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-header-line {\n          border-bottom: 2px solid #EEEEEE;\n          margin-bottom: 30px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel {\n          padding-left: 10px;\n          padding-right: 10px;\n          margin-bottom: 25px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel {\n            text-align: left;\n            padding-bottom: 0px !important; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel .form-group {\n              width: auto;\n              float: right;\n              padding-top: 4px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .searchbar.text-box-panel .form-group .form-control {\n                width: 35%; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .searchbar button i {\n            margin-right: 5px !important; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .searchbar .btn-block {\n            width: auto; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .searchbar .btn-light {\n            border-color: #EEEEEE !important; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .searchbar .btn-insert-animal-info {\n            padding-left: 40px;\n            padding-right: 40px;\n            padding-top: 10px;\n            padding-bottom: 10px;\n            font-family: \"promptregular\", \"sans-serif\";\n            font-size: 18px;\n            -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n            border-radius: 4px;\n            background: #39b063;\n            color: #FFFFFF;\n            float: left; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel {\n            min-width: 200px;\n            padding-left: 10px;\n            border-radius: 4px;\n            border: 1px solid #ced4da; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel .form-dropdown-filter {\n              -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n              box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05); }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel.form-control {\n              width: 100% !important;\n              padding: 0px;\n              padding-left: 4px;\n              padding-top: 3px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel .ui-dropdown-label {\n              font-family: \"promptregular\", \"sans-serif\";\n              font-size: 16px;\n              color: #4d4d4d; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-dropdown-panel .ui-dropdown-items-wrapper .ui-dropdown-items .ui-dropdown-item {\n              font-family: \"promptregular\", \"sans-serif\";\n              font-size: 18px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-button {\n            margin-bottom: 10px;\n            padding-left: 34px;\n            padding-right: 34px;\n            padding-top: 50px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-button button {\n              min-width: 200px !important;\n              padding-top: 10px;\n              padding-bottom: 10px;\n              font-family: \"promptregular\", \"sans-serif\";\n              font-size: 18px;\n              -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n              box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n              border-radius: 4px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-block {\n                width: 0px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light {\n                border-color: #EEEEEE !important; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light.btn-save {\n                  background: #39b063;\n                  color: #FFFFFF;\n                  float: right; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light.btn-cancel {\n                  background: #EEEEEE;\n                  color: #222222; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light:hover:not(.btn-save) {\n                  background: rgba(57, 176, 99, 0.5);\n                  color: #FFFFFF; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-button button i {\n                margin-right: 5px !important; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-caption {\n            padding-top: 15px;\n            padding-bottom: 15px;\n            background: rgba(57, 176, 98, 0.7);\n            font-size: 18px;\n            font-family: \"promptmedium\", \"sans-serif\";\n            color: #f1f0f0; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-thead th {\n            text-align: center;\n            background: rgba(57, 176, 98, 0.7);\n            font-size: 14px;\n            font-family: \"promptmedium\", \"sans-serif\";\n            color: #f1f0f0; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td {\n            padding-top: 10px;\n            padding-bottom: 10px;\n            text-align: left;\n            font-size: 14px;\n            font-family: \"pridiregular\", \"sans-serif\";\n            color: #333333; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td.emptymessage {\n              padding-top: 20px;\n              padding-bottom: 20px;\n              text-align: center;\n              font-size: 14px;\n              font-family: \"pridiregular\", \"sans-serif\";\n              color: #333333; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-paginator-bottom.ui-paginator {\n            text-align: right; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-paginator-bottom.ui-paginator .ui-paginator-element {\n              font-size: 14px;\n              font-family: \"pridiregular\", \"sans-serif\";\n              color: #333333; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-title {\n            border-right: 3px solid #EEEEEE;\n            padding-top: 15px;\n            padding-bottom: 20px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-title h3 {\n              font-family: \"promptmedium\", \"sans-serif\";\n              font-size: 18px; }\n.modal-body .dialog-form-content-body .card-body.form-dialog-information-card-body .text-box-panel .form-group-panel .form-group-body .form-group-body-panel {\n            padding-left: 0px;\n            padding-right: 0px; }\n.modal-footer .dialog-form-footer-body {\n  padding-left: 15px;\n  padding-right: 15px;\n  margin: 0px auto; }\n.modal-footer .dialog-form-footer-body .card-body {\n    margin-bottom: 0px; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body {\n      border: none;\n      -webkit-box-shadow: none;\n      box-shadow: none;\n      border-radius: 4px;\n      margin-bottom: 0px;\n      padding-top: 15px;\n      padding-left: 0px;\n      padding-right: 0px; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-group-button button {\n        min-width: 200px !important;\n        padding-top: 10px;\n        padding-bottom: 10px;\n        font-family: \"promptregular\", \"sans-serif\";\n        font-size: 18px;\n        -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n        box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n        border-radius: 4px; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-block {\n          width: 0px; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light {\n          border-color: #EEEEEE !important; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light.btn-save {\n            background: #39b063 !important;\n            color: #FFFFFF;\n            float: right; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light.btn-cancel {\n            background: #EEEEEE;\n            color: #222222; }\n.modal-footer .dialog-form-footer-body .card-body.form-animal-information-card-body .text-box-panel .form-group-panel .form-group-button button.btn-light:hover:not(.btn-save) {\n            background: rgba(57, 176, 99, 0.5);\n            color: #FFFFFF; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/survey-no-owner/survey-animal-suspicious/survey.animal.suspicious.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyAnimalSuspiciousComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_config_service__ = __webpack_require__("./src/app/core/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SurveyAnimalSuspiciousComponent = /** @class */ (function () {
    function SurveyAnimalSuspiciousComponent(modalRef, ModalService, themeConfig) {
        this.modalRef = modalRef;
        this.ModalService = ModalService;
        this.themeConfig = themeConfig;
        this.action = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SurveyAnimalSuspiciousComponent.prototype.ngOnInit = function () {
        this.setupCalendar();
        this.setupModalHeader();
        this.setupFormGroup();
        this.action.emit(true);
    };
    SurveyAnimalSuspiciousComponent.prototype.setupCalendar = function () {
        this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
        this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
    };
    SurveyAnimalSuspiciousComponent.prototype.setupFormGroup = function () {
        this.SASForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({});
    };
    SurveyAnimalSuspiciousComponent.prototype.setupModalHeader = function () {
        switch (this.actionForm) {
            case 'add':
                this.titleModal = 'เพิ่มข้อมูลสัตว์ต้องสงสัย';
                break;
            default:
                this.titleModal = 'จัดการข้อมูลสัตว์';
        }
    };
    SurveyAnimalSuspiciousComponent.prototype.modalClose = function () {
        this.modalRef.hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SurveyAnimalSuspiciousComponent.prototype, "actionForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SurveyAnimalSuspiciousComponent.prototype, "action", void 0);
    SurveyAnimalSuspiciousComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-survey-animal-suspicious',
            template: __webpack_require__("./src/app/pages/survey-no-owner/survey-animal-suspicious/survey.animal.suspicious.component.html"),
            styles: [__webpack_require__("./src/app/pages/survey-no-owner/survey-animal-suspicious/survey.animal.suspicious.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_3__core_config_service__["a" /* ConfigService */]])
    ], SurveyAnimalSuspiciousComponent);
    return SurveyAnimalSuspiciousComponent;
}());



/***/ }),

/***/ "./src/app/pages/survey-no-owner/survey.noowner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid breadcrumb\">\n    <nav class=\"nav-breadcrumb\" aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">แบบสำรวจข้อมูลสัตว์</li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">รายการขึ้นทะเบียนสัตว์ (ไม่มีเจ้าของ)</li>\n        </ol>\n    </nav>     \n\n    <div class=\"container-body\">\n        <div class=\"row\">\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 card mb-3 tab-survey-card\">\n                <div class=\"card-body tab-survey-card-body\">\n                    <div class=\"tab-body\">\n                        <ul class=\"nav text-center\" role=\"tablist\">\n                            <li class=\"nav-item tab-item\" [ngClass]=\"tab === 'report-animal-noowner-group' ? 'tab-active' : ''\">\n                                <span class=\"nav-link active\" href=\"#report-animal-noowner-group\" role=\"tab\" data-toggle=\"tab\" (click)=\"tabSelected('report-animal-noowner-group')\">รายการขึ้นทะเบียนสัตว์ (ไม่มีเจ้าของ)</span>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"tab-content\">\n                        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"report-animal-noowner-group\">\n                            <div class=\"content-container\">\n                                <div class=\"card-body form-survey-card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-box-panel\"> \n                                            <div class=\"form-group-panel clear-fix\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 data-table-group\">  \n                                                        <p-table [value]=\"roundAnimalNoownerGroup\"  [lazy]=\"true\" (onLazyLoad)=\"LoadContentLazy($event)\" [paginator]=\"true\" [rows]=\"15\" [totalRecords]=\"totalRecords\" [loading]=\"loading\" [responsive]=\"true\">\n                                                            <ng-template pTemplate=\"caption\">\n                                                                รายการขึ้นทะเบียนสัตว์ (ไม่มีเจ้าของ)\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"header\">\n                                                                <tr>\n                                                                    <th>รายการขึ้นทะเบียนสัตว์</th>\n                                                                    <th>วันที่เริ่มต้น - สิ้นสุดของรายการ</th>\n                                                                    <th>สถานะ</th>\n                                                                    <th>จัดการ</th>\n                                                                </tr>\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"body\" let-rowData>\n                                                                <tr>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">รายการขึ้นทะเบียนสัตว์</span>\n                                                                        {{rowData.roundName}}\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">วันที่เริ่มต้น - สิ้นสุดของรายการ</span>\n                                                                        {{rowData.roundStartDate}} - {{rowData.roundEndDate}}\n                                                                    </td>\n                                                                    <td>\n                                                                        <span class=\"ui-column-title\">สถานะ</span>\n                                                                        {{rowData.roundStatus}} อยู่ในระยะเวลา\n                                                                    </td>\n                                                                    <td class=\"col-btn-group\">\n\n                                                                        <a class=\"btn-content btn-icon\" (click)=\"ManageNoOwnerList()\"> \n                                                                            <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\n                                                                        </a>\n                                                                    </td>\n                                                                </tr>\n                                                            </ng-template>\n                                                            <ng-template pTemplate=\"emptymessage\">\n                                                                <tr>\n                                                                    <td colspan=\"4\" class=\"emptymessage\">\n                                                                        ไม่มีรายการ\n                                                                    </td>\n                                                                </tr>\n                                                            </ng-template>\n                                                        </p-table>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>  \n    </div>              \n</div>"

/***/ }),

/***/ "./src/app/pages/survey-no-owner/survey.noowner.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid.breadcrumb {\n    padding-top: 10px; }\n.container-fluid .container-body .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n.mh-card {\n  min-height: 162px; }\n.color-white {\n  color: white; }\n.bg-success {\n  background: #39B062 !important; }\n.tab-active {\n  border-bottom: 5px solid #39B062; }\n.card {\n  background-color: unset !important;\n  border: unset !important;\n  border-radius: unset !important; }\n.card.tab-survey-card {\n    padding-left: 0px;\n    width: 100%; }\n.card-body {\n  background-color: #FFFFFF;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  -webkit-box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n          box-shadow: 1px 3px 5px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  margin-bottom: 20px; }\n.card-body.form-survey-card-body {\n    background-color: #FFFFFF;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 0px;\n    margin-bottom: 0px;\n    padding: 0px; }\n.card-body.form-survey-card-body .text-box-panel {\n      padding-bottom: 30px !important; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel {\n        padding-left: 0px !important;\n        padding-right: 0px !important;\n        margin-bottom: 25px; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group {\n          padding-left: 0px !important;\n          padding-right: 0px !important; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-caption {\n            padding-top: 15px;\n            padding-bottom: 15px;\n            background: rgba(57, 176, 98, 0.7);\n            font-size: 18px;\n            font-family: \"promptmedium\", \"sans-serif\";\n            color: #f1f0f0; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-thead th {\n            text-align: center;\n            background: rgba(57, 176, 98, 0.7);\n            font-size: 14px;\n            font-family: \"promptmedium\", \"sans-serif\";\n            color: #f1f0f0; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td {\n            padding-top: 10px;\n            padding-bottom: 10px;\n            text-align: left;\n            font-size: 14px;\n            font-family: \"pridiregular\", \"sans-serif\";\n            color: #333333; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td.emptymessage {\n              padding-top: 20px;\n              padding-bottom: 20px;\n              text-align: center;\n              font-size: 14px;\n              font-family: \"pridiregular\", \"sans-serif\";\n              color: #333333; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td.col-btn-group {\n              text-align: center; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td.col-btn-group .btn-content {\n                cursor: pointer;\n                display: inline-block; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-table-wrapper .ui-table-tbody tr td.col-btn-group .btn-icon {\n                font-size: 22px; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-paginator-bottom.ui-paginator {\n            text-align: right; }\n.card-body.form-survey-card-body .text-box-panel .form-group-panel .data-table-group .ui-table .ui-paginator-bottom.ui-paginator .ui-paginator-element {\n              font-size: 14px;\n              font-family: \"pridiregular\", \"sans-serif\";\n              color: #333333; }\n.card-body.tab-survey-card-body {\n    margin-bottom: 0px;\n    border: none;\n    border-radius: 0px;\n    border-bottom: none; }\n.card-body.tab-survey-card-body .tab-body {\n      padding-left: 15px;\n      padding-right: 15px; }\n.card-body.tab-survey-card-body .tab-body .nav {\n        border-bottom: 1px solid #DDDDDD; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item {\n          padding-left: 0px;\n          padding-right: 0px;\n          padding-top: 13px;\n          padding-bottom: 8px;\n          cursor: pointer; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item .nav-link {\n            font-family: \"promptmedium\", \"sans-serif\";\n            font-size: 19px;\n            padding-left: 0px; }\n.card-body.tab-survey-card-body .tab-body .nav .nav-item .nav-link.active {\n              color: #39B062; }\n.card-body.tab-survey-card-body .tab-content {\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-top: 40px; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card-body {\n    margin-bottom: 10px; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; }\n  .card-body {\n    margin-bottom: 10px; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/survey-no-owner/survey.noowner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyNoOwnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SurveyNoOwnerComponent = /** @class */ (function () {
    function SurveyNoOwnerComponent(router) {
        this.router = router;
    }
    SurveyNoOwnerComponent.prototype.ngOnInit = function () {
        this.tab = 'report-animal-noowner-group';
        /****** dataTable ******/
        this.totalRecords = 0;
        this.loading = true;
        this.roundAnimalNoownerGroup = [
            {
                roundID: '1',
                roundName: 'รายการขึ้นทะเบียนสัตว์ ปี 2018 ครั้งที่ 2 ',
                roundStartDate: '01/07/2561',
                roundEndDate: '31/12/2561',
                roundStatus: true,
            }
        ];
    };
    SurveyNoOwnerComponent.prototype.tabSelected = function (tab) {
        this.tab = tab;
    };
    SurveyNoOwnerComponent.prototype.ManageNoOwnerList = function () {
        this.router.navigate(['survey/animal-no-owner/noowner-information-list']);
    };
    SurveyNoOwnerComponent.prototype.LoadContentLazy = function (event) {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
        }, 1000);
    };
    SurveyNoOwnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-survey-noowner',
            template: __webpack_require__("./src/app/pages/survey-no-owner/survey.noowner.component.html"),
            styles: [__webpack_require__("./src/app/pages/survey-no-owner/survey.noowner.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SurveyNoOwnerComponent);
    return SurveyNoOwnerComponent;
}());



/***/ }),

/***/ "./src/app/pages/suspicious/suspicious.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <nav class=\"nav-breadcrumb\" aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">แจ้งพบสัตว์</li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">รายการทั้งหมด</li>\n        </ol>\n    </nav>     \n\n    <div class=\"container-body\">\n        <div class=\"row\">\n            \n        </div>  \n    </div>              \n</div>"

/***/ }),

/***/ "./src/app/pages/suspicious/suspicious.component.scss":
/***/ (function(module, exports) {

module.exports = "/**** App roots ****/\n/**** General ****/\n/**** themes background ****/\n/**** Reset ****/\n/***** Component Header *****/\n/***** Component Header Responsive *****/\n/***** Layout Page *****/\n/***** Layout Page Responsive *****/\n/***** Form Contral *****/\n/***** Form Style *****/\n/***** Form Style Responsive *****/\n/***** Modal Style *****/\n/***** DATATABLE *****/\n.container-fluid {\n  width: 100%;\n  padding-top: 10px;\n  padding-right: 95px !important;\n  padding-left: 95px !important;\n  padding-bottom: 60px;\n  margin-right: auto;\n  margin-left: auto; }\n.container-fluid .container-body .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n.nav-breadcrumb {\n  margin-bottom: 20px; }\n.nav-breadcrumb .breadcrumb {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 14px;\n    font-family: \"promptmedium\", \"sans-serif\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item:not(:first-child)::before {\n      content: \">\"; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active {\n      color: #39B062; }\n.nav-breadcrumb .breadcrumb .breadcrumb-item.active::before {\n        color: #39B062; }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 320px) and (max-width: 667px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPhone 6+, 7+, 8+, iPhone X ----------- */\n/* Portrait and Landscape */\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container-fluid {\n    width: 100%;\n    padding-top: 20px;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    padding-bottom: 40px;\n    margin-right: auto;\n    margin-left: auto; } }\n/* ----------- iPad 1, 2, Mini, Air,  3, 4 and Pro 9.7\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 10.5\" ----------- */\n/* Portrait and Landscape */\n/* ----------- iPad Pro 12.9\" ----------- */\n/* Portrait and Landscape */\n"

/***/ }),

/***/ "./src/app/pages/suspicious/suspicious.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuspiciousComponent; });
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

var SuspiciousComponent = /** @class */ (function () {
    function SuspiciousComponent() {
    }
    SuspiciousComponent.prototype.ngOnInit = function () {
    };
    SuspiciousComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-suspicious',
            template: __webpack_require__("./src/app/pages/suspicious/suspicious.component.html"),
            styles: [__webpack_require__("./src/app/pages/suspicious/suspicious.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SuspiciousComponent);
    return SuspiciousComponent;
}());



/***/ }),

/***/ "./src/app/providers/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService() {
        this.onSignin = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
    }
    LoginService.prototype.sendData = function (user) {
        this.onSignin.next(user);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoginService);
    return LoginService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//  typescript:  2.5.3


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map