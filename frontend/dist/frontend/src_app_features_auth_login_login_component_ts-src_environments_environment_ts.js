"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_features_auth_login_login_component_ts-src_environments_environment_ts"],{

/***/ 461
/*!********************************************************!*\
  !*** ./src/app/features/auth/login/login.component.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6124);







function LoginComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \u2705 Votre adresse e-mail a \u00E9t\u00E9 valid\u00E9e avec succ\u00E8s ! Vous pouvez maintenant vous connecter. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" \u26A0\uFE0F ", ctx_r0.errorMessage, " ");
  }
}
class LoginComponent {
  router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute);
  cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService);
  credentials = {
    email: '',
    password: ''
  };
  errorMessage = '';
  isEmailVerified = false;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['verified'] === 'true') {
        this.isEmailVerified = true;
        this.cdr.detectChanges();
      }
    });
  }
  onSubmit(event) {
    event.preventDefault();
    this.errorMessage = '';
    this.isEmailVerified = false;
    const email = this.credentials.email?.trim();
    const password = this.credentials.password;
    if (!email || !password) {
      this.errorMessage = 'Veuillez saisir vos identifiants.';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.errorMessage = 'Adresse e-mail invalide.';
      return;
    }
    this.authService.login({
      email,
      password
    }).subscribe({
      next: res => {
        if (res.is_verified_company !== undefined) {
          localStorage.setItem('is_verified_company', res.is_verified_company.toString());
        } else {
          localStorage.setItem('is_verified_company', '0');
        }
        this.router.navigate([`/${res.role}`]);
      },
      error: err => {
        this.errorMessage = _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService.formatHttpError(err, 'Identifiants ou mot de passe incorrects.');
        this.cdr.detectChanges();
      }
    });
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
  static ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoginComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 28,
    vars: 4,
    consts: [[1, "login-container"], [1, "login-card"], [1, "login-header"], [1, "brand-title"], [1, "brand-subtitle"], ["class", "alert-box alert-success", 4, "ngIf"], ["class", "alert-box alert-error", 4, "ngIf"], [1, "login-form", 3, "ngSubmit"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "placeholder", "exemple@domaine.tn", "required", "", 3, "ngModelChange", "ngModel"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-submit"], [1, "login-footer"], [3, "click"], [1, "alert-box", "alert-success"], [1, "alert-box", "alert-error"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Tun");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Job");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Connectez-vous pour acc\u00E9der \u00E0 votre espace membre");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 2, 0, "div", 5)(11, LoginComponent_div_11_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener($event) {
          return ctx.onSubmit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 8)(14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Adresse e-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.credentials.email, $event) || (ctx.credentials.email = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 8)(18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.credentials.password, $event) || (ctx.credentials.password = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "S'authentifier");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 14)(24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Pas encore de compte ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_26_listener() {
          return ctx.goToRegister();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "S'inscrire");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isEmailVerified);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.credentials.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.credentials.password);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
    styles: [".login-container[_ngcontent-%COMP%] { display: flex; justify-content: center; align-items: center; min-height: 100vh; width: 100vw; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif; margin: 0; position: absolute; top: 0; left: 0; }\n    .login-card[_ngcontent-%COMP%] { background: #ffffff; padding: 40px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05), 0 20px 48px rgba(0, 0, 0, 0.05); width: 100%; max-width: 420px; box-sizing: border-box; }\n    .login-header[_ngcontent-%COMP%] { text-align: center; margin-bottom: 32px; }\n    .brand-title[_ngcontent-%COMP%] { font-size: 28px; font-weight: 800; color: #1e293b; margin: 0 0 8px 0; letter-spacing: -0.5px; }\n    .brand-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: #0284c7; }\n    .brand-subtitle[_ngcontent-%COMP%] { font-size: 14px; color: #64748b; margin: 0; line-height: 1.5; }\n    .login-form[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 20px; }\n    .form-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; }\n    .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size: 13px; font-weight: 600; color: #334155; }\n    .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { width: 100%; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px; color: #1e293b; background-color: #ffffff; box-sizing: border-box; }\n    .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus { border-color: #0284c7; box-shadow: 0 0 0 4px rgba(2, 132, 199, 0.15); outline: none; }\n    .btn-submit[_ngcontent-%COMP%] { width: 100%; padding: 14px; background-color: #0284c7; color: #ffffff; border: none; border-radius: 6px; font-size: 15px; font-weight: 600; cursor: pointer; margin-top: 10px; }\n    .btn-submit[_ngcontent-%COMP%]:hover { background-color: #0369a1; }\n    .login-footer[_ngcontent-%COMP%] { text-align: center; margin-top: 28px; border-top: 1px solid #f1f5f9; padding-top: 20px; }\n    .login-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 14px; color: #64748b; margin: 0; }\n    .login-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { color: #0284c7; text-decoration: none; font-weight: 600; cursor: pointer; }\n    .login-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { text-decoration: underline; }\n\n    \n    .alert-box[_ngcontent-%COMP%] { padding: 14px; border-radius: 6px; margin-bottom: 20px; font-size: 14px; font-weight: 500; text-align: center; animation: _ngcontent-%COMP%_slideDown 0.3s ease-out; }\n    .alert-error[_ngcontent-%COMP%] { background-color: #fce8e6; color: #c5221f; border: 1px solid #fad2cf; }\n    \n    \n    .alert-success[_ngcontent-%COMP%] { background-color: #e6f4ea; color: #137333; border: 1px solid #ceead6; }\n    \n    @keyframes _ngcontent-%COMP%_slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJLG1CQUFtQixhQUFhLEVBQUUsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLDZEQUE2RCxFQUFFLDhFQUE4RSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFO0lBQ2hULGNBQWMsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLDRFQUE0RSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxzQkFBc0IsRUFBRTtJQUM1TSxnQkFBZ0Isa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUU7SUFDekQsZUFBZSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFO0lBQzdHLG9CQUFvQixjQUFjLEVBQUU7SUFDcEMsa0JBQWtCLGVBQWUsRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO0lBQ2hGLGNBQWMsYUFBYSxFQUFFLHNCQUFzQixFQUFFLFNBQVMsRUFBRTtJQUNoRSxjQUFjLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUU7SUFDL0Qsb0JBQW9CLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUU7SUFDdkUsb0JBQW9CLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSx5QkFBeUIsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLHlCQUF5QixFQUFFLHNCQUFzQixFQUFFO0lBQ3hMLDBCQUEwQixxQkFBcUIsRUFBRSw2Q0FBNkMsRUFBRSxhQUFhLEVBQUU7SUFDL0csY0FBYyxXQUFXLEVBQUUsYUFBYSxFQUFFLHlCQUF5QixFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRTtJQUM3TCxvQkFBb0IseUJBQXlCLEVBQUU7SUFDL0MsZ0JBQWdCLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLDZCQUE2QixFQUFFLGlCQUFpQixFQUFFO0lBQ3hHLGtCQUFrQixlQUFlLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRTtJQUM5RCxrQkFBa0IsY0FBYyxFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRTtJQUM1Rix3QkFBd0IsMEJBQTBCLEVBQUU7O0lBRXBELDBDQUEwQztJQUMxQyxhQUFhLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsa0NBQWtDLEVBQUU7SUFDaEssZUFBZSx5QkFBeUIsRUFBRSxjQUFjLEVBQUUseUJBQXlCLEVBQUU7O0lBRXJGLGdFQUFnRTtJQUNoRSxpQkFBaUIseUJBQXlCLEVBQUUsY0FBYyxFQUFFLHlCQUF5QixFQUFFOztJQUV2Rix1QkFBdUIsT0FBTyxVQUFVLEVBQUUsNEJBQTRCLEVBQUUsRUFBRSxLQUFLLFVBQVUsRUFBRSx3QkFBd0IsRUFBRSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmxvZ2luLWNvbnRhaW5lciB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyBtaW4taGVpZ2h0OiAxMDB2aDsgd2lkdGg6IDEwMHZ3OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmN2ZhIDAlLCAjYzNjZmUyIDEwMCUpOyBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgc2Fucy1zZXJpZjsgbWFyZ2luOiAwOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgfVxuICAgIC5sb2dpbi1jYXJkIHsgYmFja2dyb3VuZDogI2ZmZmZmZjsgcGFkZGluZzogNDBweDsgYm9yZGVyLXJhZGl1czogMTJweDsgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAyMHB4IDQ4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTsgd2lkdGg6IDEwMCU7IG1heC13aWR0aDogNDIwcHg7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgICAubG9naW4taGVhZGVyIHsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAzMnB4OyB9XG4gICAgLmJyYW5kLXRpdGxlIHsgZm9udC1zaXplOiAyOHB4OyBmb250LXdlaWdodDogODAwOyBjb2xvcjogIzFlMjkzYjsgbWFyZ2luOiAwIDAgOHB4IDA7IGxldHRlci1zcGFjaW5nOiAtMC41cHg7IH1cbiAgICAuYnJhbmQtdGl0bGUgc3BhbiB7IGNvbG9yOiAjMDI4NGM3OyB9XG4gICAgLmJyYW5kLXN1YnRpdGxlIHsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzY0NzQ4YjsgbWFyZ2luOiAwOyBsaW5lLWhlaWdodDogMS41OyB9XG4gICAgLmxvZ2luLWZvcm0geyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDIwcHg7IH1cbiAgICAuZm9ybS1ncm91cCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogNnB4OyB9XG4gICAgLmZvcm0tZ3JvdXAgbGFiZWwgeyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjMzM0MTU1OyB9XG4gICAgLmZvcm0tZ3JvdXAgaW5wdXQgeyB3aWR0aDogMTAwJTsgcGFkZGluZzogMTJweCAxNHB4OyBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxOyBib3JkZXItcmFkaXVzOiA2cHg7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMxZTI5M2I7IGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgICAuZm9ybS1ncm91cCBpbnB1dDpmb2N1cyB7IGJvcmRlci1jb2xvcjogIzAyODRjNzsgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoMiwgMTMyLCAxOTksIDAuMTUpOyBvdXRsaW5lOiBub25lOyB9XG4gICAgLmJ0bi1zdWJtaXQgeyB3aWR0aDogMTAwJTsgcGFkZGluZzogMTRweDsgYmFja2dyb3VuZC1jb2xvcjogIzAyODRjNzsgY29sb3I6ICNmZmZmZmY7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogNnB4OyBmb250LXNpemU6IDE1cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGN1cnNvcjogcG9pbnRlcjsgbWFyZ2luLXRvcDogMTBweDsgfVxuICAgIC5idG4tc3VibWl0OmhvdmVyIHsgYmFja2dyb3VuZC1jb2xvcjogIzAzNjlhMTsgfVxuICAgIC5sb2dpbi1mb290ZXIgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi10b3A6IDI4cHg7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmNWY5OyBwYWRkaW5nLXRvcDogMjBweDsgfVxuICAgIC5sb2dpbi1mb290ZXIgcCB7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM2NDc0OGI7IG1hcmdpbjogMDsgfVxuICAgIC5sb2dpbi1mb290ZXIgYSB7IGNvbG9yOiAjMDI4NGM3OyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGZvbnQtd2VpZ2h0OiA2MDA7IGN1cnNvcjogcG9pbnRlcjsgfVxuICAgIC5sb2dpbi1mb290ZXIgYTpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG5cbiAgICAvKiDDsMKfwpTCtCBCQU5ERUFVIEFMRVJURSBST1VHRSBQUk9GRVNTSU9OTkVMICovXG4gICAgLmFsZXJ0LWJveCB7IHBhZGRpbmc6IDE0cHg7IGJvcmRlci1yYWRpdXM6IDZweDsgbWFyZ2luLWJvdHRvbTogMjBweDsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNTAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGFuaW1hdGlvbjogc2xpZGVEb3duIDAuM3MgZWFzZS1vdXQ7IH1cbiAgICAuYWxlcnQtZXJyb3IgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNlOGU2OyBjb2xvcjogI2M1MjIxZjsgYm9yZGVyOiAxcHggc29saWQgI2ZhZDJjZjsgfVxuICAgIFxuICAgIC8qIMOwwp/Cn8KiIE5PVVZFQVUgOiBCQU5ERUFVIEFMRVJURSBWRVJUIFBST0ZFU1NJT05ORUwgRCdBQ1RJVkFUSU9OICovXG4gICAgLmFsZXJ0LXN1Y2Nlc3MgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmNGVhOyBjb2xvcjogIzEzNzMzMzsgYm9yZGVyOiAxcHggc29saWQgI2NlZWFkNjsgfVxuICAgIFxuICAgIEBrZXlmcmFtZXMgc2xpZGVEb3duIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7IH0gdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ },

/***/ 5312
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'http://127.0.0.1:3000/api',
  assetsUrl: 'http://127.0.0.1:3000'
};

/***/ }

}]);
//# sourceMappingURL=src_app_features_auth_login_login_component_ts-src_environments_environment_ts.js.map