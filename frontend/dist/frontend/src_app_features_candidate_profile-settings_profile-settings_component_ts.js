"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_features_candidate_profile-settings_profile-settings_component_ts"],{

/***/ 9256
/*!***********************************************************************************!*\
  !*** ./src/app/features/candidate/profile-settings/profile-settings.component.ts ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileSettingsComponent: () => (/* binding */ ProfileSettingsComponent)
/* harmony export */ });
/* harmony import */ var D_Tun_Job_Portal_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6124);







function ProfileSettingsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.successMessage);
  }
}
function ProfileSettingsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.passwordSuccessMessage);
  }
}
function ProfileSettingsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.passwordErrorMessage);
  }
}
function ProfileSettingsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.logoPreviewUrl || "assets/images/default-avatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function ProfileSettingsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 12);
  }
}
function ProfileSettingsComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ProfileSettingsComponent_Conditional_25_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.profile.name, $event) || (ctx_r0.profile.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.profile.name);
  }
}
function ProfileSettingsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.profile.name || "Non renseign\u00E9");
  }
}
function ProfileSettingsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ProfileSettingsComponent_Conditional_30_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.profile.phone, $event) || (ctx_r0.profile.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.profile.phone);
  }
}
function ProfileSettingsComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.profile.phone || "Non renseign\u00E9");
  }
}
function ProfileSettingsComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ProfileSettingsComponent_Conditional_35_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.profile.address, $event) || (ctx_r0.profile.address = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.profile.address);
  }
}
function ProfileSettingsComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.profile.address || "Non renseign\u00E9");
  }
}
function ProfileSettingsComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileSettingsComponent_Conditional_38_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.toggleEditMode(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Modifier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProfileSettingsComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileSettingsComponent_Conditional_39_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.toggleEditMode(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProfileSettingsComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ProfileSettingsComponent_Conditional_48_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.passwordData.currentPassword, $event) || (ctx_r0.passwordData.currentPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.passwordData.currentPassword);
  }
}
function ProfileSettingsComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProfileSettingsComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ProfileSettingsComponent_Conditional_53_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.passwordData.newPassword, $event) || (ctx_r0.passwordData.newPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.passwordData.newPassword);
  }
}
function ProfileSettingsComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProfileSettingsComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ProfileSettingsComponent_Conditional_58_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.passwordData.confirmPassword, $event) || (ctx_r0.passwordData.confirmPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.passwordData.confirmPassword);
  }
}
function ProfileSettingsComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProfileSettingsComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileSettingsComponent_Conditional_61_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.togglePasswordEditMode(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Modifier mot de passe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProfileSettingsComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileSettingsComponent_Conditional_62_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.togglePasswordEditMode(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileSettingsComponent_Conditional_62_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.onUpdatePassword($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProfileSettingsComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileSettingsComponent_Conditional_69_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.toggleProEditMode(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Modifier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProfileSettingsComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileSettingsComponent_Conditional_70_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.toggleProEditMode(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProfileSettingsComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.profile.birth_date ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, ctx_r0.profile.birth_date, "dd/MM/yyyy") : "Non renseign\u00E9e", " ");
  }
}
function ProfileSettingsComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ProfileSettingsComponent_Conditional_76_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.profile.birth_date, $event) || (ctx_r0.profile.birth_date = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.profile.birth_date);
  }
}
function ProfileSettingsComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.profile.linkedin || "Non renseign\u00E9", " ");
  }
}
function ProfileSettingsComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ProfileSettingsComponent_Conditional_81_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.profile.linkedin, $event) || (ctx_r0.profile.linkedin = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.profile.linkedin);
  }
}
function ProfileSettingsComponent_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.profile.github || "Non renseign\u00E9", " ");
  }
}
function ProfileSettingsComponent_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ProfileSettingsComponent_Conditional_86_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.profile.github, $event) || (ctx_r0.profile.github = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.profile.github);
  }
}
function ProfileSettingsComponent_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.profile.job_status || "Non renseign\u00E9e");
  }
}
function ProfileSettingsComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ProfileSettingsComponent_Conditional_91_Template_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.profile.job_status, $event) || (ctx_r0.profile.job_status = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Choisir");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "En recherche active");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "En poste");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\u00C9tudiant");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Freelance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.profile.job_status);
  }
}
function ProfileSettingsComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.profile.availability || "Non renseign\u00E9e");
  }
}
function ProfileSettingsComponent_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ProfileSettingsComponent_Conditional_96_Template_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.profile.availability, $event) || (ctx_r0.profile.availability = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Choisir");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Imm\u00E9diate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "1 mois");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "3 mois");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.profile.availability);
  }
}
function ProfileSettingsComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.profile.job_type || "Non renseign\u00E9");
  }
}
function ProfileSettingsComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ProfileSettingsComponent_Conditional_101_Template_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.profile.job_type, $event) || (ctx_r0.profile.job_type = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Choisir");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "CDI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "CDD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Freelance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Stage");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.profile.job_type);
  }
}
class ProfileSettingsComponent {
  cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
  // 📝 Modèle de données enrichi pour le profil candidat
  profile = {
    name: '',
    phone: '',
    email: '',
    address: '',
    avatar_logo: null,
    birth_date: '',
    linkedin: '',
    github: '',
    job_status: '',
    availability: '',
    job_type: '',
    location_pref: ''
  };
  backupProfile = {
    name: '',
    phone: '',
    email: '',
    address: '',
    avatar_logo: null,
    birth_date: '',
    linkedin: '',
    github: '',
    job_status: '',
    availability: '',
    job_type: '',
    location_pref: ''
  };
  logoPreviewUrl = null;
  selectedFile = null;
  successMessage = '';
  // 🎛️ États de contrôle des formulaires indépendants
  isEditMode = false; // Pour "Mon Profil Candidat"
  isProEditMode = false; // 🆕 Pour "Profil Professionnel"
  isPasswordEditMode = false; // Pour "Sécurité du compte"
  passwordData = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };
  passwordSuccessMessage = '';
  passwordErrorMessage = '';
  ngOnInit() {
    this.loadCurrentProfile();
  }
  // 🔄 Bascule d'édition pour les informations personnelles
  toggleEditMode(mode) {
    this.isEditMode = mode;
    if (mode) {
      this.backupProfile = {
        ...this.profile
      };
    } else {
      this.profile = {
        ...this.backupProfile
      };
    }
    this.cdr.detectChanges();
  }
  // 🔄 Bascule d'édition pour le profil professionnel
  toggleProEditMode(mode) {
    this.isProEditMode = mode;
    if (mode) {
      this.backupProfile = {
        ...this.profile
      };
    } else {
      this.profile = {
        ...this.backupProfile
      };
    }
    this.cdr.detectChanges();
  }
  togglePasswordEditMode(mode) {
    this.isPasswordEditMode = mode;
    if (!mode) {
      this.passwordData = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      };
    }
    this.cdr.detectChanges();
  }
  loadCurrentProfile() {
    const targetUrl = 'http://localhost:3000/api/candidate/profile/details';
    const token = localStorage.getItem('token');
    fetch(targetUrl, {
      method: 'GET',
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      }
    }).then(/*#__PURE__*/function () {
      var _ref = (0,D_Tun_Job_Portal_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        if (res.ok) return res.json();
        throw new Error();
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).then(data => {
      if (data) {
        this.profile.name = data.name || localStorage.getItem('name') || '';
        this.profile.phone = data.phone || '';
        this.profile.email = data.email || '';
        this.profile.address = data.address || '';
        // Formate correctement la date pour l'input HTML type="date"
        this.profile.birth_date = data.birth_date ? data.birth_date.split('T')[0] : '';
        this.profile.linkedin = data.linkedin || '';
        this.profile.github = data.github || '';
        this.profile.job_status = data.job_status || '';
        this.profile.availability = data.availability || '';
        this.profile.job_type = data.job_type || '';
        this.profile.location_pref = data.location_pref || '';
        if (data.avatar_logo) {
          const cleanFilename = data.avatar_logo.replace('/logos/', '').replace('uploads/logos/', '');
          this.logoPreviewUrl = `http://localhost:3000/logos/${cleanFilename}`;
        }
        this.cdr.detectChanges();
      }
    }).catch(() => {
      this.profile.name = localStorage.getItem('name') || '';
      this.cdr.detectChanges();
    });
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.logoPreviewUrl = reader.result;
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
      const targetUrl = 'http://localhost:3000/api/candidate/profile/update-avatar';
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('logo', file, file.name);
      fetch(targetUrl, {
        method: 'POST',
        headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        },
        body: formData
      }).then(/*#__PURE__*/function () {
        var _ref2 = (0,D_Tun_Job_Portal_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          if (!res.ok) {
            const errData = yield res.json().catch(() => ({}));
            throw new Error(errData.message || "Échec d'envoi de la photo.");
          }
          return res.json();
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }()).then(data => {
        this.successMessage = "Votre photo de profil a été mise à jour !";
        if (data && data.filename) {
          this.logoPreviewUrl = `http://localhost:3000/logos/${data.filename}`;
        }
        this.cdr.detectChanges();
        setTimeout(() => {
          this.successMessage = '';
          this.cdr.detectChanges();
        }, 3000);
      }).catch(err => {
        console.error("❌ Erreur Upload Frontend :", err);
        alert(err.message);
      });
    }
  }
  onSaveProfile(event) {
    if (event) event.preventDefault();
    const targetUrl = 'http://localhost:3000/api/candidate/profile/update';
    const token = localStorage.getItem('token');
    fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
      },
      body: JSON.stringify({
        name: this.profile.name,
        phone: this.profile.phone,
        address: this.profile.address,
        birth_date: this.profile.birth_date,
        linkedin: this.profile.linkedin,
        github: this.profile.github,
        job_status: this.profile.job_status,
        availability: this.profile.availability,
        job_type: this.profile.job_type,
        location_pref: this.profile.location_pref
      })
    }).then(/*#__PURE__*/function () {
      var _ref3 = (0,D_Tun_Job_Portal_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        if (!res.ok) throw new Error("Impossible de sauvegarder votre profil.");
        return res.json();
      });
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()).then(resData => {
      this.successMessage = resData.message || "Les informations de votre profil ont été mises à jour.";
      this.isEditMode = false;
      this.isProEditMode = false; // Ferme l'état d'édition
      this.cdr.detectChanges();
      setTimeout(() => {
        this.successMessage = '';
        this.cdr.detectChanges();
      }, 3000);
    }).catch(err => alert(err.message));
  }
  onUpdatePassword(event) {
    event.preventDefault();
    this.passwordSuccessMessage = '';
    this.passwordErrorMessage = '';
    if (this.passwordData.newPassword !== this.passwordData.confirmPassword) {
      this.passwordErrorMessage = "La confirmation ne correspond pas au nouveau mot de passe.";
      return;
    }
    if (this.passwordData.newPassword.length < 6) {
      this.passwordErrorMessage = "Le nouveau mot de passe doit contenir au moins 6 caractères.";
      return;
    }
    const targetUrl = 'http://localhost:3000/api/candidate/profile/change-password';
    const token = localStorage.getItem('token');
    fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
      },
      body: JSON.stringify({
        currentPassword: this.passwordData.currentPassword,
        newPassword: this.passwordData.newPassword
      })
    }).then(/*#__PURE__*/function () {
      var _ref4 = (0,D_Tun_Job_Portal_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        const data = yield res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.message || "Erreur lors du changement de mot de passe.");
        return data;
      });
      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()).then(data => {
      this.passwordSuccessMessage = data.message || "Votre mot de passe a été modifié avec succès !";
      this.passwordData = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      };
      this.isPasswordEditMode = false;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.passwordSuccessMessage = '';
        this.cdr.detectChanges();
      }, 4000);
    }).catch(err => {
      this.passwordErrorMessage = err.message;
      this.cdr.detectChanges();
    });
  }
  static ɵfac = function ProfileSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ProfileSettingsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ProfileSettingsComponent,
    selectors: [["app-profile-settings"]],
    decls: 102,
    vars: 20,
    consts: [[1, "profile-container-compact"], [1, "card-header-flex-compact"], [1, "card-header-left"], [1, "bi", "bi-person-fill-gear"], [1, "alert-box-compact", "alert-success"], [1, "alert-box-compact", "alert-danger"], [3, "ngSubmit"], [1, "profile-split-layout"], [1, "profile-panel-card"], [1, "logo-section-compact"], [1, "logo-preview-compact"], [1, "avatar-img", 3, "src"], [1, "bi", "bi-person-circle", 2, "font-size", "26px", "color", "#cbd5e1"], [1, "upload-actions-compact"], ["type", "file", "id", "avatarInput", "accept", "image/*", 2, "display", "none", 3, "change"], ["type", "button", "onclick", "document.getElementById('avatarInput').click()", 1, "btn-secondary-upload-compact", 3, "disabled"], [1, "bi", "bi-camera-fill"], [1, "compact-form-grid"], [1, "form-group-compact"], ["name", "name", "required", "", 3, "ngModel"], [1, "static-text-compact"], ["name", "phone", 3, "ngModel"], ["name", "address", 3, "ngModel"], [1, "form-actions-compact"], ["type", "button", 1, "btn-save-compact"], [1, "panel-inner-title"], [1, "bi", "bi-shield-lock-fill"], ["type", "password", "name", "currentPassword", "required", "", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "ngModel"], ["type", "password", "name", "newPassword", "required", "", "placeholder", "Min. 6 caract\u00E8res", 3, "ngModel"], ["type", "password", "name", "confirmPassword", "required", "", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "ngModel"], ["type", "button", 1, "btn-save-compact", "btn-dark-theme"], [1, "profile-panel-card", "full-width-card-compact"], [1, "card-header-flex-compact", 2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-bottom", "15px"], [1, "panel-inner-title", 2, "margin-bottom", "0"], [1, "bi", "bi-briefcase-fill"], [1, "horizontal-form-grid-compact"], ["type", "date", "name", "birth_date", 3, "ngModel"], ["type", "url", "name", "linkedin", 3, "ngModel"], ["type", "url", "name", "github", 3, "ngModel"], ["name", "job_status", 3, "ngModel"], ["name", "availability", 3, "ngModel"], ["name", "job_type", 3, "ngModel"], ["name", "name", "required", "", 3, "ngModelChange", "ngModel"], ["name", "phone", 3, "ngModelChange", "ngModel"], ["name", "address", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn-save-compact", 3, "click"], [1, "bi", "bi-pencil-square"], ["type", "button", 1, "btn-cancel-compact", 3, "click"], ["type", "submit", 1, "btn-save-compact"], [1, "bi", "bi-shield-check"], ["type", "password", "name", "currentPassword", "required", "", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "newPassword", "required", "", "placeholder", "Min. 6 caract\u00E8res", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "confirmPassword", "required", "", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn-save-compact", "btn-dark-theme", 3, "click"], [1, "bi", "bi-key-fill"], ["type", "button", 1, "btn-cancel-compact", 2, "padding", "5px 10px", "font-size", "12px", "margin-right", "5px", 3, "click"], ["type", "submit", 1, "btn-save-compact", 2, "padding", "5px 12px", "font-size", "12px"], ["type", "date", "name", "birth_date", 3, "ngModelChange", "ngModel"], ["type", "url", "name", "linkedin", 3, "ngModelChange", "ngModel"], ["type", "url", "name", "github", 3, "ngModelChange", "ngModel"], ["name", "job_status", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "En recherche active"], ["value", "En poste"], ["value", "\u00C9tudiant"], ["value", "Freelance"], ["name", "availability", 3, "ngModelChange", "ngModel"], ["value", "Imm\u00E9diate"], ["value", "1 mois"], ["value", "3 mois"], ["name", "job_type", 3, "ngModelChange", "ngModel"], ["value", "CDI"], ["value", "CDD"], ["value", "Stage"]],
    template: function ProfileSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Mon Profil Candidat");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](6, ProfileSettingsComponent_Conditional_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](7, ProfileSettingsComponent_Conditional_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](8, ProfileSettingsComponent_Conditional_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ProfileSettingsComponent_Template_form_ngSubmit_9_listener($event) {
          return ctx.onSaveProfile($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](14, ProfileSettingsComponent_Conditional_14_Template, 1, 1, "img", 11)(15, ProfileSettingsComponent_Conditional_15_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 13)(17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ProfileSettingsComponent_Template_input_change_17_listener($event) {
          return ctx.onFileSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Modifier ma photo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 17)(22, "div", 18)(23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Nom & Pr\u00E9nom *");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](25, ProfileSettingsComponent_Conditional_25_Template, 1, 1, "input", 19)(26, ProfileSettingsComponent_Conditional_26_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 18)(28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "T\u00E9l\u00E9phone *");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](30, ProfileSettingsComponent_Conditional_30_Template, 1, 1, "input", 21)(31, ProfileSettingsComponent_Conditional_31_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 18)(33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Adresse *");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](35, ProfileSettingsComponent_Conditional_35_Template, 1, 1, "input", 22)(36, ProfileSettingsComponent_Conditional_36_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](38, ProfileSettingsComponent_Conditional_38_Template, 3, 0, "button", 24)(39, ProfileSettingsComponent_Conditional_39_Template, 5, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 8)(41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, " S\u00E9curit\u00E9 du compte ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 17)(45, "div", 18)(46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Mot de passe actuel *");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](48, ProfileSettingsComponent_Conditional_48_Template, 1, 1, "input", 27)(49, ProfileSettingsComponent_Conditional_49_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 18)(51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Nouveau mot de passe *");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](53, ProfileSettingsComponent_Conditional_53_Template, 1, 1, "input", 28)(54, ProfileSettingsComponent_Conditional_54_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 18)(56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Confirmation *");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](58, ProfileSettingsComponent_Conditional_58_Template, 1, 1, "input", 29)(59, ProfileSettingsComponent_Conditional_59_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](61, ProfileSettingsComponent_Conditional_61_Template, 3, 0, "button", 30)(62, ProfileSettingsComponent_Conditional_62_Template, 4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 31)(64, "div", 32)(65, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, " Profil professionnel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](69, ProfileSettingsComponent_Conditional_69_Template, 3, 0, "button", 24)(70, ProfileSettingsComponent_Conditional_70_Template, 5, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 35)(72, "div", 18)(73, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Date de naissance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](75, ProfileSettingsComponent_Conditional_75_Template, 3, 4, "div", 20)(76, ProfileSettingsComponent_Conditional_76_Template, 1, 1, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 18)(78, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](80, ProfileSettingsComponent_Conditional_80_Template, 2, 1, "div", 20)(81, ProfileSettingsComponent_Conditional_81_Template, 1, 1, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 18)(83, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](85, ProfileSettingsComponent_Conditional_85_Template, 2, 1, "div", 20)(86, ProfileSettingsComponent_Conditional_86_Template, 1, 1, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 18)(88, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Situation");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](90, ProfileSettingsComponent_Conditional_90_Template, 2, 1, "div", 20)(91, ProfileSettingsComponent_Conditional_91_Template, 11, 1, "select", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 18)(93, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "Disponibilit\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](95, ProfileSettingsComponent_Conditional_95_Template, 2, 1, "div", 20)(96, ProfileSettingsComponent_Conditional_96_Template, 9, 1, "select", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 18)(98, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, "Contrat recherch\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](100, ProfileSettingsComponent_Conditional_100_Template, 2, 1, "div", 20)(101, ProfileSettingsComponent_Conditional_101_Template, 11, 1, "select", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.successMessage ? 6 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.passwordSuccessMessage ? 7 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.passwordErrorMessage ? 8 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.logoPreviewUrl ? 14 : 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.isEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.isEditMode ? 25 : 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.isEditMode ? 30 : 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.isEditMode ? 35 : 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.isEditMode ? 38 : 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.isPasswordEditMode ? 48 : 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.isPasswordEditMode ? 53 : 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.isPasswordEditMode ? 58 : 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.isPasswordEditMode ? 61 : 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.isProEditMode ? 69 : 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.isProEditMode ? 75 : 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.isProEditMode ? 80 : 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.isProEditMode ? 85 : 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.isProEditMode ? 90 : 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.isProEditMode ? 95 : 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.isProEditMode ? 100 : 101);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
    styles: [".profile-container-compact[_ngcontent-%COMP%] { \n  max-width: 100% !important; \n  margin: 0 auto; \n  padding: 0 20px !important; \n  font-family: inherit; \n  box-sizing: border-box; \n}\n\n.card-header-flex-compact[_ngcontent-%COMP%] { \n  display: flex; \n  justify-content: space-between; \n  align-items: center; \n  margin-bottom: 15px; \n}\n\n.card-header-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { \n  margin: 0; \n  color: #0f172a; \n  font-size: 18px; \n  font-weight: 700; \n  display: flex; \n  align-items: center; \n  gap: 8px; \n}\n\n\n.profile-split-layout[_ngcontent-%COMP%] { \n  display: grid; \n  grid-template-columns: 1.2fr 1fr; \n  gap: 24px; \n  align-items: start; \n  width: 100%; \n}\n\n\nform[_ngcontent-%COMP%]    > .profile-split-layout[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.profile-panel-card[_ngcontent-%COMP%] { \n  background: #ffffff; \n  border-radius: 12px; \n  border: 1px solid #e2e8f0; \n  padding: 26px; \n  box-shadow: 0 1px 3px rgba(0,0,0,0.02); \n  box-sizing: border-box; \n}\n\n.panel-inner-title[_ngcontent-%COMP%] { \n  font-size: 14px; \n  font-weight: 700; \n  color: #0f172a; \n  text-align: left; \n  margin-bottom: 18px; \n  display: flex; \n  align-items: center; \n  gap: 8px; \n}\n\n.panel-inner-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \n  color: #0ea5e9; \n}\n\n.logo-section-compact[_ngcontent-%COMP%] { \n  display: flex; \n  align-items: center; \n  gap: 16px; \n  background: #f8fafc; \n  padding: 12px 16px; \n  border-radius: 8px; \n  margin-bottom: 16px; \n  border: 1px solid #f1f5f9; \n}\n\n.logo-preview-compact[_ngcontent-%COMP%] { \n  width: 52px; \n  height: 52px; \n  border-radius: 50%; \n  border: 1px solid #cbd5e1; \n  background: #ffffff; \n  display: flex; \n  justify-content: center; \n  align-items: center; \n  overflow: hidden; \n}\n\n.logo-preview-compact[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { \n  width: 100%; \n  height: 100%; \n  object-fit: cover; \n}\n\n.btn-secondary-upload-compact[_ngcontent-%COMP%] { \n  background: #ffffff; \n  border: 1px solid #cbd5e1; \n  color: #334155; \n  padding: 6px 12px; \n  border-radius: 4px; \n  font-size: 12px; \n  font-weight: 600; \n  cursor: pointer; \n}\n\n.btn-secondary-upload-compact[_ngcontent-%COMP%]:disabled { \n  opacity: 0.5; \n  cursor: not-allowed; \n  background: #f1f5f9; \n}\n\n.compact-form-grid[_ngcontent-%COMP%] { \n  display: grid; \n  grid-template-columns: 1fr; \n  gap: 14px; \n}\n\n.form-group-compact[_ngcontent-%COMP%] { \n  display: flex; \n  flex-direction: column; \n  gap: 6px; \n}\n\n.form-group-compact[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { \n  font-size: 11px; \n  font-weight: 700; \n  color: #64748b; \n  text-align: left; \n  text-transform: uppercase; \n  letter-spacing: 0.3px; \n}\n\n\n.form-group-compact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group-compact[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] { \n  width: 100%; \n  padding: 10px 14px; \n  border: 1px solid #cbd5e1; \n  border-radius: 6px; \n  font-size: 13.5px; \n  box-sizing: border-box; \n  color: #1e293b; \n  background: #ffffff; \n  height: 41px;\n}\n\n.form-group-compact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled, \n.form-group-compact[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled {\n  background: #f8fafc;\n  color: #64748b;\n  cursor: not-allowed;\n}\n\n.static-text-compact[_ngcontent-%COMP%] { \n  background: #f8fafc; \n  padding: 10px 14px; \n  border-radius: 6px; \n  border: 1px solid #e2e8f0; \n  font-size: 13.5px; \n  font-weight: 500; \n  color: #0f172a; \n  text-align: left; \n  min-height: 41px; \n  box-sizing: border-box; \n  display: flex; \n  align-items: center; \n}\n\n.text-muted-dots[_ngcontent-%COMP%] { \n  color: #94a3b8 !important; \n  letter-spacing: 3px; \n  font-weight: bold; \n  background-color: #fafbfc; \n}\n\n.form-actions-compact[_ngcontent-%COMP%] { \n  display: flex; \n  justify-content: flex-end; \n  gap: 10px; \n  margin-top: 20px; \n  padding-top: 15px; \n  border-top: 1px solid #f1f5f9; \n}\n\n.btn-cancel-compact[_ngcontent-%COMP%] { \n  background: #f1f5f9; \n  color: #475569; \n  border: 1px solid #cbd5e1; \n  padding: 8px 16px; \n  font-size: 13px; \n  font-weight: 600; \n  border-radius: 6px; \n  cursor: pointer; \n}\n\n.btn-save-compact[_ngcontent-%COMP%] { \n  background: #0ea5e9; \n  color: white; \n  border: none; \n  padding: 8px 20px; \n  font-size: 13px; \n  font-weight: 600; \n  border-radius: 6px; \n  cursor: pointer; \n  display: inline-flex; \n  align-items: center; \n  gap: 6px; \n}\n\n.btn-save-compact.btn-dark-theme[_ngcontent-%COMP%] { \n  background: #0f172a !important; \n  color: #ffffff !important; \n}\n\n.btn-save-compact.btn-dark-theme[_ngcontent-%COMP%]:hover { \n  background: #1e293b !important; \n}\n\n.alert-box-compact[_ngcontent-%COMP%] { \n  padding: 10px; \n  border-radius: 6px; \n  margin-bottom: 14px; \n  font-size: 13px; \n  text-align: center; \n  font-weight: 600; \n}\n\n.alert-success[_ngcontent-%COMP%] { \n  background-color: #e6f4ea; \n  color: #137333; \n  border: 1px solid #ceead6; \n}\n\n.alert-danger[_ngcontent-%COMP%] { \n  background-color: #fef2f2; \n  color: #991b1b; \n  border: 1px solid #fee2e2; \n}\n\n\n.full-width-card-compact[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n\n.horizontal-form-grid-compact[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-top: 16px;\n  width: 100%;\n}\n\n\n.grid-span-full[_ngcontent-%COMP%] {\n  grid-column: span 3;\n}\n\n.input-with-icon-compact[_ngcontent-%COMP%] { \n  position: relative; \n  display: flex; \n  align-items: center; \n  width: 100%; \n}\n\n.input-with-icon-compact[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \n  position: absolute; \n  left: 14px; \n  color: #64748b; \n  font-size: 14px; \n  z-index: 2;\n}\n\n.input-with-icon-compact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { \n  padding-left: 38px !important; \n}\n\n\n@media (max-width: 1024px) {\n  .horizontal-form-grid-compact[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .grid-span-full[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n}\n\n@media (max-width: 768px) {\n  .profile-split-layout[_ngcontent-%COMP%], \n   .horizontal-form-grid-compact[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .grid-span-full[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2FuZGlkYXRlL3Byb2ZpbGUtc2V0dGluZ3MvcHJvZmlsZS1zZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQSw0REFBNEQ7QUFDNUQ7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBLGdGQUFnRjtBQUNoRjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUEsa0VBQWtFO0FBQ2xFOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBOztFQUVFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUEscUZBQXFGO0FBQ3JGO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUEsd0VBQXdFO0FBQ3hFO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQSxnRkFBZ0Y7QUFDaEY7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBLHNEQUFzRDtBQUN0RDtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFOztJQUVFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1jb250YWluZXItY29tcGFjdCB7IFxyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50OyBcclxuICBtYXJnaW46IDAgYXV0bzsgXHJcbiAgcGFkZGluZzogMCAyMHB4ICFpbXBvcnRhbnQ7IFxyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyBcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyLWZsZXgtY29tcGFjdCB7IFxyXG4gIGRpc3BsYXk6IGZsZXg7IFxyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgXHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci1sZWZ0IGgzIHsgXHJcbiAgbWFyZ2luOiAwOyBcclxuICBjb2xvcjogIzBmMTcyYTsgXHJcbiAgZm9udC1zaXplOiAxOHB4OyBcclxuICBmb250LXdlaWdodDogNzAwOyBcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICBnYXA6IDhweDsgXHJcbn1cclxuXHJcbi8qIEdyaWxsZSBwcmluY2lwYWxlIGVuIGRldXggY29sb25uZXMgcG91ciBsZSBoYXV0IGRlIHBhZ2UgKi9cclxuLnByb2ZpbGUtc3BsaXQtbGF5b3V0IHsgXHJcbiAgZGlzcGxheTogZ3JpZDsgXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjJmciAxZnI7IFxyXG4gIGdhcDogMjRweDsgXHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0OyBcclxuICB3aWR0aDogMTAwJTsgXHJcbn1cclxuXHJcbi8qIEFqb3V0IGQndW5lIG1hcmdlIHNvdXMgbGUgbGF5b3V0IHNwbGl0IHBvdXIgbmUgcGFzIMODwql0b3VmZmVyIGxhIGNhcnRlIGR1IGJhcyAqL1xyXG5mb3JtID4gLnByb2ZpbGUtc3BsaXQtbGF5b3V0IHtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1wYW5lbC1jYXJkIHsgXHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjsgXHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDsgXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDsgXHJcbiAgcGFkZGluZzogMjZweDsgXHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wMik7IFxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG59XHJcblxyXG4ucGFuZWwtaW5uZXItdGl0bGUgeyBcclxuICBmb250LXNpemU6IDE0cHg7IFxyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7IFxyXG4gIGNvbG9yOiAjMGYxNzJhOyBcclxuICB0ZXh0LWFsaWduOiBsZWZ0OyBcclxuICBtYXJnaW4tYm90dG9tOiAxOHB4OyBcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICBnYXA6IDhweDsgXHJcbn1cclxuXHJcbi5wYW5lbC1pbm5lci10aXRsZSBpIHsgXHJcbiAgY29sb3I6ICMwZWE1ZTk7IFxyXG59XHJcblxyXG4ubG9nby1zZWN0aW9uLWNvbXBhY3QgeyBcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICBnYXA6IDE2cHg7IFxyXG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7IFxyXG4gIHBhZGRpbmc6IDEycHggMTZweDsgXHJcbiAgYm9yZGVyLXJhZGl1czogOHB4OyBcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4OyBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5OyBcclxufVxyXG5cclxuLmxvZ28tcHJldmlldy1jb21wYWN0IHsgXHJcbiAgd2lkdGg6IDUycHg7IFxyXG4gIGhlaWdodDogNTJweDsgXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlOyBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxOyBcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyBcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbn1cclxuXHJcbi5sb2dvLXByZXZpZXctY29tcGFjdCBpbWcgeyBcclxuICB3aWR0aDogMTAwJTsgXHJcbiAgaGVpZ2h0OiAxMDAlOyBcclxuICBvYmplY3QtZml0OiBjb3ZlcjsgXHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5LXVwbG9hZC1jb21wYWN0IHsgXHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjsgXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTsgXHJcbiAgY29sb3I6ICMzMzQxNTU7IFxyXG4gIHBhZGRpbmc6IDZweCAxMnB4OyBcclxuICBib3JkZXItcmFkaXVzOiA0cHg7IFxyXG4gIGZvbnQtc2l6ZTogMTJweDsgXHJcbiAgZm9udC13ZWlnaHQ6IDYwMDsgXHJcbiAgY3Vyc29yOiBwb2ludGVyOyBcclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnktdXBsb2FkLWNvbXBhY3Q6ZGlzYWJsZWQgeyBcclxuICBvcGFjaXR5OiAwLjU7IFxyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7IFxyXG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7IFxyXG59XHJcblxyXG4uY29tcGFjdC1mb3JtLWdyaWQgeyBcclxuICBkaXNwbGF5OiBncmlkOyBcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgXHJcbiAgZ2FwOiAxNHB4OyBcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAtY29tcGFjdCB7IFxyXG4gIGRpc3BsYXk6IGZsZXg7IFxyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gIGdhcDogNnB4OyBcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAtY29tcGFjdCBsYWJlbCB7IFxyXG4gIGZvbnQtc2l6ZTogMTFweDsgXHJcbiAgZm9udC13ZWlnaHQ6IDcwMDsgXHJcbiAgY29sb3I6ICM2NDc0OGI7IFxyXG4gIHRleHQtYWxpZ246IGxlZnQ7IFxyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IFxyXG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgXHJcbn1cclxuXHJcbi8qIFByaXNlIGVuIGNoYXJnZSB1bmlmb3JtZSBkZXMgaW5wdXRzIGV0IGRlcyBsaXN0ZXMgZMODwqlyb3VsYW50ZXMgKi9cclxuLmZvcm0tZ3JvdXAtY29tcGFjdCBpbnB1dCwgXHJcbi5mb3JtLWdyb3VwLWNvbXBhY3Qgc2VsZWN0IHsgXHJcbiAgd2lkdGg6IDEwMCU7IFxyXG4gIHBhZGRpbmc6IDEwcHggMTRweDsgXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTsgXHJcbiAgYm9yZGVyLXJhZGl1czogNnB4OyBcclxuICBmb250LXNpemU6IDEzLjVweDsgXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgY29sb3I6ICMxZTI5M2I7IFxyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7IFxyXG4gIGhlaWdodDogNDFweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAtY29tcGFjdCBpbnB1dDpkaXNhYmxlZCxcclxuLmZvcm0tZ3JvdXAtY29tcGFjdCBzZWxlY3Q6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLnN0YXRpYy10ZXh0LWNvbXBhY3QgeyBcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjOyBcclxuICBwYWRkaW5nOiAxMHB4IDE0cHg7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDZweDsgXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDsgXHJcbiAgZm9udC1zaXplOiAxMy41cHg7IFxyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7IFxyXG4gIGNvbG9yOiAjMGYxNzJhOyBcclxuICB0ZXh0LWFsaWduOiBsZWZ0OyBcclxuICBtaW4taGVpZ2h0OiA0MXB4OyBcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxufVxyXG5cclxuLnRleHQtbXV0ZWQtZG90cyB7IFxyXG4gIGNvbG9yOiAjOTRhM2I4ICFpbXBvcnRhbnQ7IFxyXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7IFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYmZjOyBcclxufVxyXG5cclxuLmZvcm0tYWN0aW9ucy1jb21wYWN0IHsgXHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgXHJcbiAgZ2FwOiAxMHB4OyBcclxuICBtYXJnaW4tdG9wOiAyMHB4OyBcclxuICBwYWRkaW5nLXRvcDogMTVweDsgXHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWY1Zjk7IFxyXG59XHJcblxyXG4uYnRuLWNhbmNlbC1jb21wYWN0IHsgXHJcbiAgYmFja2dyb3VuZDogI2YxZjVmOTsgXHJcbiAgY29sb3I6ICM0NzU1Njk7IFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7IFxyXG4gIHBhZGRpbmc6IDhweCAxNnB4OyBcclxuICBmb250LXNpemU6IDEzcHg7IFxyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDZweDsgXHJcbiAgY3Vyc29yOiBwb2ludGVyOyBcclxufVxyXG5cclxuLmJ0bi1zYXZlLWNvbXBhY3QgeyBcclxuICBiYWNrZ3JvdW5kOiAjMGVhNWU5OyBcclxuICBjb2xvcjogd2hpdGU7IFxyXG4gIGJvcmRlcjogbm9uZTsgXHJcbiAgcGFkZGluZzogOHB4IDIwcHg7IFxyXG4gIGZvbnQtc2l6ZTogMTNweDsgXHJcbiAgZm9udC13ZWlnaHQ6IDYwMDsgXHJcbiAgYm9yZGVyLXJhZGl1czogNnB4OyBcclxuICBjdXJzb3I6IHBvaW50ZXI7IFxyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICBnYXA6IDZweDsgXHJcbn1cclxuXHJcbi5idG4tc2F2ZS1jb21wYWN0LmJ0bi1kYXJrLXRoZW1lIHsgXHJcbiAgYmFja2dyb3VuZDogIzBmMTcyYSAhaW1wb3J0YW50OyBcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuLmJ0bi1zYXZlLWNvbXBhY3QuYnRuLWRhcmstdGhlbWU6aG92ZXIgeyBcclxuICBiYWNrZ3JvdW5kOiAjMWUyOTNiICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG4uYWxlcnQtYm94LWNvbXBhY3QgeyBcclxuICBwYWRkaW5nOiAxMHB4OyBcclxuICBib3JkZXItcmFkaXVzOiA2cHg7IFxyXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7IFxyXG4gIGZvbnQtc2l6ZTogMTNweDsgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICBmb250LXdlaWdodDogNjAwOyBcclxufVxyXG5cclxuLmFsZXJ0LXN1Y2Nlc3MgeyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmNGVhOyBcclxuICBjb2xvcjogIzEzNzMzMzsgXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZWFkNjsgXHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIgeyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmMmYyOyBcclxuICBjb2xvcjogIzk5MWIxYjsgXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZlZTJlMjsgXHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09IEdSSUxMRSBQUk9GRVNTSU9OTkVMTEUgKEFqdXN0ZW1lbnRzIHZpc3VlbHMpID09PT09PT09PT09PT09PT09ICovXHJcbi5mdWxsLXdpZHRoLWNhcmQtY29tcGFjdCB7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBBbGlnbmUgcHJvcHJlbWVudCBsZXMgw4PCqWzDg8KpbWVudHMgc3VyIDMgY29sb25uZXMgZGUgdGFpbGxlcyBpZGVudGlxdWVzICovXHJcbi5ob3Jpem9udGFsLWZvcm0tZ3JpZC1jb21wYWN0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIFBlcm1ldCBhdSBjaGFtcCBnw4PCqW9ncmFwaGlxdWUgZCdvY2N1cGVyIHRvdXQgbGUgYmFzIHBvdXIgw4PCqXF1aWxpYnJlciBsYSBsaWduZSAqL1xyXG4uZ3JpZC1zcGFuLWZ1bGwge1xyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XHJcbn1cclxuXHJcbi5pbnB1dC13aXRoLWljb24tY29tcGFjdCB7IFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgd2lkdGg6IDEwMCU7IFxyXG59XHJcblxyXG4uaW5wdXQtd2l0aC1pY29uLWNvbXBhY3QgaSB7IFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgbGVmdDogMTRweDsgXHJcbiAgY29sb3I6ICM2NDc0OGI7IFxyXG4gIGZvbnQtc2l6ZTogMTRweDsgXHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmlucHV0LXdpdGgtaWNvbi1jb21wYWN0IGlucHV0IHsgXHJcbiAgcGFkZGluZy1sZWZ0OiAzOHB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG4vKiBSZXN0ZSBwYXJmYWl0ZW1lbnQgZmx1aWRlIHNpIGxhIGZlbsODwqp0cmUgc2UgcsODwqlkdWl0ICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAuaG9yaXpvbnRhbC1mb3JtLWdyaWQtY29tcGFjdCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIH1cclxuICAuZ3JpZC1zcGFuLWZ1bGwge1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5wcm9maWxlLXNwbGl0LWxheW91dCxcclxuICAuaG9yaXpvbnRhbC1mb3JtLWdyaWQtY29tcGFjdCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbiAgLmdyaWQtc3Bhbi1mdWxsIHtcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDE7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }

}]);
//# sourceMappingURL=src_app_features_candidate_profile-settings_profile-settings_component_ts.js.map