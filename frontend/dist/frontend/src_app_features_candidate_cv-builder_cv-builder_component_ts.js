"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_features_candidate_cv-builder_cv-builder_component_ts"],{

/***/ 580
/*!***********************************************************************!*\
  !*** ./src/app/features/candidate/cv-builder/cv-builder.component.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CvBuilderComponent: () => (/* binding */ CvBuilderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);






function CvBuilderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.successMessage, " ");
  }
}
function CvBuilderComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function CvBuilderComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 11);
  }
}
function CvBuilderComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvBuilderComponent_Conditional_49_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.enableEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Modifier le Formulaire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CvBuilderComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.isSaving ? "Enregistrement..." : "Enregistrer les Informations", " ");
  }
}
function CvBuilderComponent_Conditional_61_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "strong", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 55)(7, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvBuilderComponent_Conditional_61_For_1_Template_button_click_7_listener() {
      const $index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.openEditExperienceModal(ctx_r0.cvData.experiences[$index_r4], $index_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Modifier\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvBuilderComponent_Conditional_61_For_1_Template_button_click_10_listener() {
      const $index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.removeEducation($index_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Supprimer\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const exp_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", exp_r5.job_title, " \u2014 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", exp_r5.company, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("display", ctx_r0.isEditable ? "flex" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("display", ctx_r0.isEditable ? "flex" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", exp_r5.duration, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", exp_r5.description, " ");
  }
}
function CvBuilderComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](0, CvBuilderComponent_Conditional_61_For_1_Template, 18, 8, "div", 51, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIndex"]);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r0.cvData.experiences);
  }
}
function CvBuilderComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Aucune exp\u00E9rience professionnelle renseign\u00E9e. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CvBuilderComponent_Conditional_71_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "strong", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 55)(5, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvBuilderComponent_Conditional_71_For_1_Template_button_click_5_listener() {
      const $index_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).$index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.openEditEducationModal(ctx_r0.cvData.educations[$index_r7], $index_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Modifier\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvBuilderComponent_Conditional_71_For_1_Template_button_click_8_listener() {
      const $index_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).$index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.removeExperience($index_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Supprimer\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const edu_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", edu_r8.degree, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("display", ctx_r0.isEditable ? "flex" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("display", ctx_r0.isEditable ? "flex" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", edu_r8.school, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Ann\u00E9e d'obtention : ", edu_r8.year, " ");
  }
}
function CvBuilderComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](0, CvBuilderComponent_Conditional_71_For_1_Template, 16, 7, "div", 63, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIndex"]);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r0.cvData.educations);
  }
}
function CvBuilderComponent_Conditional_79_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", skill_r9.trim(), " ");
  }
}
function CvBuilderComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](0, CvBuilderComponent_Conditional_79_For_1_Template, 2, 1, "span", 69, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r0.getSkillsArray());
  }
}
function CvBuilderComponent_Conditional_87_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const interest_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", interest_r10.trim(), " ");
  }
}
function CvBuilderComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](0, CvBuilderComponent_Conditional_87_For_1_Template, 2, 1, "span", 69, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r0.getInterestsArray());
  }
}
function CvBuilderComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 70)(1, "div", 71)(2, "div", 72)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvBuilderComponent_div_88_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.showExperienceModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 15)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Intitul\u00E9 du poste occup\u00E9 *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CvBuilderComponent_div_88_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.newExperience.job_title, $event) || (ctx_r0.newExperience.job_title = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 15)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Entreprise *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CvBuilderComponent_div_88_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.newExperience.company, $event) || (ctx_r0.newExperience.company = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 15)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Dur\u00E9e *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CvBuilderComponent_div_88_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.newExperience.duration, $event) || (ctx_r0.newExperience.duration = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 15)(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Description *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "textarea", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CvBuilderComponent_div_88_Template_textarea_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.newExperience.description, $event) || (ctx_r0.newExperience.description = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 79)(26, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvBuilderComponent_div_88_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.showExperienceModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvBuilderComponent_div_88_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.saveExperienceModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.isEditingExp ? "bi-pencil-square" : "bi-plus-circle-fill");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.isEditingExp ? "Modifier l'Exp\u00E9rience" : "Ajouter une Exp\u00E9rience", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.newExperience.job_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.newExperience.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.newExperience.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.newExperience.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.isEditingExp ? "Mettre \u00E0 jour" : "Enregistrer", " ");
  }
}
function CvBuilderComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 70)(1, "div", 71)(2, "div", 72)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvBuilderComponent_div_89_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.showEducationModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 15)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Dipl\u00F4me *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CvBuilderComponent_div_89_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.newEducation.degree, $event) || (ctx_r0.newEducation.degree = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 15)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\u00C9cole / Universit\u00E9 *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CvBuilderComponent_div_89_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.newEducation.school, $event) || (ctx_r0.newEducation.school = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 15)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Ann\u00E9e *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CvBuilderComponent_div_89_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.newEducation.year, $event) || (ctx_r0.newEducation.year = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 79)(21, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvBuilderComponent_div_89_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.showEducationModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvBuilderComponent_div_89_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.saveEducationModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.isEditingEdu ? "bi-pencil-square" : "bi-plus-circle-fill");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.isEditingEdu ? "Modifier la Formation" : "Ajouter une Formation", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.newEducation.degree);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.newEducation.school);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.newEducation.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.isEditingEdu ? "Mettre \u00E0 jour" : "Enregistrer", " ");
  }
}
function CvBuilderComponent_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47)(1, "div", 85)(2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Confirmation d'enregistrement");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 88)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Voulez-vous vraiment enregistrer globalement toutes les informations de votre CV ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 89)(10, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvBuilderComponent_Conditional_90_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.showSaveConfirmationModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvBuilderComponent_Conditional_90_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.confirmAndSaveCV());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Confirmer l'enregistrement ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function CvBuilderComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47)(1, "div", 85)(2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Confirmation de suppression");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 88)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\u00CAtes-vous s\u00FBr de vouloir supprimer cet \u00E9l\u00E9ment ? Cette action est irr\u00E9versible.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 89)(10, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvBuilderComponent_Conditional_91_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r0.showDeleteConfirmationModal = false;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.pendingDeleteAction = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvBuilderComponent_Conditional_91_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.confirmDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Supprimer l'\u00E9l\u00E9ment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
class CvBuilderComponent {
  cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  cvData = {
    title: '',
    summary: '',
    skills: '',
    interests: '',
    experiences: [],
    educations: []
  };
  candidateName = '';
  avatarUrl = null;
  candidateContact = {
    email: '',
    phone: '',
    address: ''
  };
  successMessage = '';
  isSaving = false;
  showSaveConfirmationModal = false;
  // 🛠️ Ajoutez ces deux lignes manquantes ici :
  showDeleteConfirmationModal = false;
  pendingDeleteAction = null;
  // 🔒 État du formulaire principal (false = verrouillé/incliquable, true = éditable)
  isEditable = true;
  // 🎛️ États de contrôle pour les popups (Modales)
  showExperienceModal = false;
  showEducationModal = false;
  // ✏️ Indicateurs et index pour le mode édition
  isEditingExp = false;
  editingExpIndex = null;
  isEditingEdu = false;
  editingEduIndex = null;
  // Modèles tampons pour la saisie dans les popups
  newExperience = {
    job_title: '',
    company: '',
    duration: '',
    description: ''
  };
  newEducation = {
    degree: '',
    school: '',
    year: ''
  };
  ngOnInit() {
    this.candidateName = localStorage.getItem('name') || '';
    this.fetchProfileDetails();
    this.fetchCurrentCV();
  }
  fetchProfileDetails() {
    const token = localStorage.getItem('token');
    fetch('http://localhost:3000/api/candidate/profile/details', {
      method: 'GET',
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      }
    }).then(res => res.ok ? res.json() : null).then(data => {
      if (data) {
        if (!this.candidateName) {
          this.candidateName = data.firstname && data.lastname ? `${data.firstname} ${data.lastname}` : 'Candidat';
        }
        this.candidateContact.email = data.email || '';
        this.candidateContact.phone = data.phone || '';
        this.candidateContact.address = data.address || '';
        if (data.avatar_logo) {
          this.avatarUrl = `http://localhost:3000/logos/${data.avatar_logo}`;
        }
        this.cdr.detectChanges();
      }
    }).catch(() => {});
  }
  fetchCurrentCV() {
    const token = localStorage.getItem('token');
    fetch('http://localhost:3000/api/candidate/cv/details', {
      method: 'GET',
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      }
    }).then(res => res.ok ? res.json() : null).then(data => {
      if (data) {
        this.cvData.title = data.title || '';
        this.cvData.summary = data.summary || '';
        this.cvData.skills = data.skills || '';
        this.cvData.interests = data.interests || '';
        this.cvData.experiences = typeof data.experience === 'string' ? JSON.parse(data.experience) : data.experience || [];
        this.cvData.educations = typeof data.education === 'string' ? JSON.parse(data.education) : data.education || [];
        // 🔒 Optionnel : Si le CV contient déjà des données, on peut le verrouiller au chargement initial
        if (this.cvData.title || this.cvData.summary) {
          this.isEditable = false;
        }
        this.cdr.detectChanges();
      }
    }).catch(() => {});
  }
  // 🔓 Active le mode modification
  enableEdit() {
    this.isEditable = true;
    this.cdr.detectChanges();
  }
  // ➕ POPUP EXPÉRIENCE : Mode Ajouter
  openExperienceModal() {
    this.isEditingExp = false;
    this.editingExpIndex = null;
    this.newExperience = {
      job_title: '',
      company: '',
      duration: '',
      description: ''
    }; // Reset
    this.showExperienceModal = true;
    this.cdr.detectChanges();
  }
  // ✏️ POPUP EXPÉRIENCE : Mode Modifier (Nouvelle méthode)
  openEditExperienceModal(exp, index) {
    this.isEditingExp = true;
    this.editingExpIndex = index;
    // On clone l'objet pour éviter la modification en temps réel dans le tableau avant validation
    this.newExperience = {
      ...exp
    };
    this.showExperienceModal = true;
    this.cdr.detectChanges();
  }
  // 💾 POPUP EXPÉRIENCE : Enregistrement (Ajout ou Mise à jour)
  saveExperienceModal() {
    if (!this.newExperience.job_title || !this.newExperience.company) {
      alert("Veuillez renseigner le poste et l'entreprise.");
      return;
    }
    if (this.isEditingExp && this.editingExpIndex !== null) {
      // Mode modification : on remplace l'élément existant à son index
      this.cvData.experiences[this.editingExpIndex] = {
        ...this.newExperience
      };
    } else {
      // Mode ajout : on ajoute l'élément en tête
      this.cvData.experiences.unshift({
        ...this.newExperience
      });
    }
    this.showExperienceModal = false;
    this.cdr.detectChanges();
  }
  removeExperience(index) {
    this.pendingDeleteAction = {
      type: 'experience',
      index: index
    };
    this.showDeleteConfirmationModal = true;
    this.cdr.detectChanges();
  }
  // ➕ POPUP ÉTUDES : Mode Ajouter
  openEducationModal() {
    this.isEditingEdu = false;
    this.editingEduIndex = null;
    this.newEducation = {
      degree: '',
      school: '',
      year: ''
    }; // Reset
    this.showEducationModal = true;
    this.cdr.detectChanges();
  }
  // ✏️ POPUP ÉTUDES : Mode Modifier (Nouvelle méthode)
  openEditEducationModal(edu, index) {
    this.isEditingEdu = true;
    this.editingEduIndex = index;
    // On clone l'objet d'études
    this.newEducation = {
      ...edu
    };
    this.showEducationModal = true;
    this.cdr.detectChanges();
  }
  // 💾 POPUP ÉTUDES : Enregistrement (Ajout ou Mise à jour)
  saveEducationModal() {
    if (!this.newEducation.degree || !this.newEducation.school) {
      alert("Veuillez renseigner le diplôme et l'établissement.");
      return;
    }
    if (this.isEditingEdu && this.editingEduIndex !== null) {
      // Mode modification
      this.cvData.educations[this.editingEduIndex] = {
        ...this.newEducation
      };
    } else {
      // Mode ajout
      this.cvData.educations.unshift({
        ...this.newEducation
      });
    }
    this.showEducationModal = false;
    this.cdr.detectChanges();
  }
  // 2. Déclenché lors du clic sur le bouton Supprimer de la formation
  removeEducation(index) {
    this.pendingDeleteAction = {
      type: 'education',
      index: index
    };
    this.showDeleteConfirmationModal = true;
    this.cdr.detectChanges();
  }
  // 3. Exécuté uniquement si l'utilisateur clique sur "Confirmer" dans la popup de suppression
  confirmDelete() {
    if (this.pendingDeleteAction) {
      const {
        type,
        index
      } = this.pendingDeleteAction;
      if (type === 'experience') {
        this.cvData.experiences.splice(index, 1);
      } else if (type === 'education') {
        this.cvData.educations.splice(index, 1);
      }
    }
    // Réinitialisation et fermeture
    this.showDeleteConfirmationModal = false;
    this.pendingDeleteAction = null;
    this.cdr.detectChanges();
  }
  getSkillsArray() {
    return this.cvData.skills ? this.cvData.skills.split(',').filter(s => s.trim() !== '') : [];
  }
  getInterestsArray() {
    return this.cvData.interests ? this.cvData.interests.split(',').filter(i => i.trim() !== '') : [];
  }
  // 1. Déclenché par le clic sur le bouton de soumission
  onSaveCV(event) {
    event.preventDefault();
    // Ouvre la popup de confirmation personnalisée
    this.showSaveConfirmationModal = true;
    this.cdr.detectChanges();
  }
  // 2. Déclenché uniquement si l'utilisateur clique sur "Confirmer" dans la popup
  confirmAndSaveCV() {
    this.showSaveConfirmationModal = false; // Ferme la popup
    this.isSaving = true;
    const token = localStorage.getItem('token');
    const nameParts = this.candidateName.trim().split(' ');
    const firstname = nameParts[0] || '';
    const lastname = nameParts.slice(1).join(' ') || '';
    const payload = {
      title: this.cvData.title,
      summary: this.cvData.summary,
      skills: this.cvData.skills,
      interests: this.cvData.interests,
      experience: JSON.stringify(this.cvData.experiences),
      education: JSON.stringify(this.cvData.educations),
      firstname: firstname,
      lastname: lastname,
      email: this.candidateContact.email,
      phone: this.candidateContact.phone,
      address: this.candidateContact.address
    };
    fetch('http://localhost:3000/api/candidate/cv/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
      },
      body: JSON.stringify(payload)
    }).then(res => res.ok ? res.json() : null).then(() => {
      this.successMessage = "Toutes les modifications de votre profil ont été enregistrées !";
      this.isSaving = false;
      this.isEditable = false;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.successMessage = '';
        this.cdr.detectChanges();
      }, 3000);
    }).catch(() => {
      this.isSaving = false;
      this.cdr.detectChanges();
    });
  }
  static ɵfac = function CvBuilderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CvBuilderComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CvBuilderComponent,
    selectors: [["app-cv-builder"]],
    decls: 92,
    vars: 33,
    consts: [[1, "app-container-cv-builder"], [1, "cv-container-compact"], [1, "alert-box-compact", "alert-success"], [1, "cv-split-layout"], [1, "cv-panel-card", "scrollable-form-panel"], [1, "compact-form-grid-vertical", 3, "ngSubmit"], [1, "form-section-title-inline"], [1, "bi", "bi-person-bounding-box"], [1, "form-group-compact", 2, "flex-direction", "row", "align-items", "center", "gap", "16px", "margin-bottom", "10px"], [1, "cv-avatar-wrapper-pro", 2, "margin", "0"], ["alt", "Photo Candidat", 3, "src"], [1, "bi", "bi-person-fill", 2, "font-size", "32px", "color", "#94a3b8"], [2, "text-align", "left"], [2, "margin-bottom", "2px", "display", "block"], [2, "font-size", "12px", "color", "#64748b"], [1, "form-group-compact"], ["type", "text", "name", "candidate_name", "placeholder", "Ex: Mohamed Ali", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["type", "text", "name", "cv_title", "placeholder", "Ex: D\u00E9veloppeur Fullstack Angular", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["name", "summary", "rows", "3", "placeholder", "Ex: D\u00E9veloppeur motiv\u00E9 sp\u00E9cialis\u00E9 dans...", "required", "", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-section-title-inline", 2, "margin-top", "15px"], [1, "bi", "bi-geo-alt-fill"], ["type", "email", "name", "candidate_email", "placeholder", "exemple@mail.com", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["type", "text", "name", "candidate_phone", "placeholder", "+216 -- --- ---", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["type", "text", "name", "candidate_address", "placeholder", "Ex: Tunis, Tunisie", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["type", "hidden", "name", "skills", 3, "ngModelChange", "ngModel"], ["type", "hidden", "name", "interests", 3, "ngModelChange", "ngModel"], [1, "form-actions-compact", 2, "margin-top", "15px"], ["type", "button", 1, "btn-modify-cv-compact", 2, "background-color", "#475569", "color", "white", "padding", "10px 16px", "border", "none", "border-radius", "6px", "font-size", "13.5px", "font-weight", "600", "cursor", "pointer", "display", "inline-flex", "align-items", "center", "gap", "8px", "width", "100%", "justify-content", "center"], ["type", "submit", 1, "btn-save-cv-compact", 3, "disabled"], [1, "cv-right-layout-cards", "scrollable-form-panel"], [1, "cv-panel-card-inner-box"], [1, "preview-section-item"], [1, "section-flex-header-pro"], [1, "preview-section-label"], [1, "bi", "bi-briefcase-fill"], ["type", "button", 1, "btn-add-dynamic", 3, "click"], [1, "bi", "bi-plus-circle-fill"], [1, "empty-text-italic"], [1, "preview-section-item", 2, "margin-top", "24px"], [1, "bi", "bi-mortarboard-fill"], [1, "bi", "bi-star-fill"], [2, "margin-top", "8px", "margin-bottom", "12px"], ["type", "text", "name", "skills_input", "placeholder", "Ex: Angular, TypeScript, SQL, Git", 1, "tag-input-field-pro", 3, "ngModelChange", "ngModel", "disabled"], [1, "cv-tags-container"], [1, "bi", "bi-heart-fill"], ["type", "text", "name", "interests_input", "placeholder", "Ex: Voyages, Football, Lecture", 1, "tag-input-field-pro", 3, "ngModelChange", "ngModel", "disabled"], ["class", "cv-modal-overlay", 4, "ngIf"], [1, "custom-modal-overlay"], ["type", "button", 1, "btn-modify-cv-compact", 2, "background-color", "#475569", "color", "white", "padding", "10px 16px", "border", "none", "border-radius", "6px", "font-size", "13.5px", "font-weight", "600", "cursor", "pointer", "display", "inline-flex", "align-items", "center", "gap", "8px", "width", "100%", "justify-content", "center", 3, "click"], [1, "bi", "bi-pencil-square"], [1, "bi", "bi-cloud-arrow-up-fill"], [1, "dynamic-entry-card-pro", 2, "padding", "16px", "background", "#ffffff", "border-left", "4px solid #0ea5e9"], [1, "dynamic-entry-header-pro", 2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-bottom", "6px"], [2, "font-size", "14.5px", "color", "#0f172a"], [2, "color", "#0284c7"], [2, "display", "flex", "gap", "8px"], ["type", "button", 1, "btn-edit-dynamic-pro", 3, "click"], [1, "bi", "bi-pencil-fill"], ["type", "button", 1, "btn-remove-dynamic-pro", 3, "click"], [1, "bi", "bi-trash3-fill"], [2, "font-size", "12.5px", "color", "#64748b", "font-weight", "600", "margin-bottom", "8px"], [1, "bi", "bi-calendar3"], [2, "margin", "0", "color", "#475569", "font-size", "13px", "line-height", "1.5", "white-space", "pre-line"], [1, "dynamic-entry-card-pro", 2, "padding", "14px 16px", "background", "#ffffff", "border-left", "4px solid #10b981"], [1, "dynamic-entry-header-pro", 2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-bottom", "4px"], [2, "font-size", "14px", "color", "#0f172a"], [2, "font-size", "13px", "color", "#475569", "font-weight", "500"], [2, "color", "#94a3b8", "font-weight", "600", "display", "block", "margin-top", "4px"], [1, "bi", "bi-calendar-check"], [1, "skill-tag-preview-pro"], [1, "cv-modal-overlay"], [1, "cv-modal-content"], [1, "modal-header-pro"], [1, "bi", 3, "ngClass"], ["type", "button", 1, "close-x", 3, "click"], ["type", "text", "placeholder", "Ex: D\u00E9veloppeur Angular", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ex: Google", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "2024 - Pr\u00E9sent", 3, "ngModelChange", "ngModel"], ["rows", "4", 3, "ngModelChange", "ngModel"], [1, "modal-actions-pro"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "button", 1, "btn-submit-save", 3, "click"], ["type", "text", "placeholder", "Ex: Licence Informatique", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ex: ISG Tunis", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "2025", 3, "ngModelChange", "ngModel"], [1, "custom-modal-box"], [1, "custom-modal-header"], [1, "bi", "bi-exclamation-triangle-fill", "warning-icon"], [1, "custom-modal-body"], [1, "custom-modal-footer"], ["type", "button", 1, "btn-modal-cancel", 3, "click"], ["type", "button", 1, "btn-modal-confirm", 3, "click"], [1, "bi", "bi-exclamation-octagon-fill", "danger-icon"], ["type", "button", 1, "btn-modal-delete", 3, "click"]],
    template: function CvBuilderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](2, CvBuilderComponent_Conditional_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CvBuilderComponent_Template_form_ngSubmit_5_listener($event) {
          return ctx.onSaveCV($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Upload Photo & Identit\u00E9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](11, CvBuilderComponent_Conditional_11_Template, 1, 1, "img", 10)(12, CvBuilderComponent_Conditional_12_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 12)(14, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Photo de profil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Synchronis\u00E9e avec vos param\u00E8tres de compte. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 15)(19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Nom & Pr\u00E9nom *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CvBuilderComponent_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.candidateName, $event) || (ctx.candidateName = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 15)(23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Titre du poste recherch\u00E9 *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CvBuilderComponent_Template_input_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.cvData.title, $event) || (ctx.cvData.title = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 15)(27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "R\u00E9sum\u00E9 / Accroche professionnelle *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CvBuilderComponent_Template_textarea_ngModelChange_29_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.cvData.summary, $event) || (ctx.cvData.summary = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " Informations Personnelles & Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 15)(35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Adresse Email *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CvBuilderComponent_Template_input_ngModelChange_37_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.candidateContact.email, $event) || (ctx.candidateContact.email = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 15)(39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Num\u00E9ro de T\u00E9l\u00E9phone *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CvBuilderComponent_Template_input_ngModelChange_41_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.candidateContact.phone, $event) || (ctx.candidateContact.phone = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 15)(43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Adresse G\u00E9ographique *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CvBuilderComponent_Template_input_ngModelChange_45_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.candidateContact.address, $event) || (ctx.candidateContact.address = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CvBuilderComponent_Template_input_ngModelChange_46_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.cvData.skills, $event) || (ctx.cvData.skills = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CvBuilderComponent_Template_input_ngModelChange_47_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.cvData.interests, $event) || (ctx.cvData.interests = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](49, CvBuilderComponent_Conditional_49_Template, 3, 0, "button", 27)(50, CvBuilderComponent_Conditional_50_Template, 3, 2, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 29)(52, "div", 30)(53, "div", 31)(54, "div", 32)(55, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, " Exp\u00E9riences Professionnelles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvBuilderComponent_Template_button_click_58_listener() {
          return ctx.openExperienceModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, " Ajouter\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](61, CvBuilderComponent_Conditional_61_Template, 2, 0)(62, CvBuilderComponent_Conditional_62_Template, 2, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 38)(64, "div", 32)(65, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, " Formations & \u00C9tudes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CvBuilderComponent_Template_button_click_68_listener() {
          return ctx.openEducationModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, " Ajouter\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](71, CvBuilderComponent_Conditional_71_Template, 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 38)(73, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, " Comp\u00E9tences Cl\u00E9s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 41)(77, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CvBuilderComponent_Template_input_ngModelChange_77_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.cvData.skills, $event) || (ctx.cvData.skills = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](79, CvBuilderComponent_Conditional_79_Template, 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 38)(81, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](82, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, " Centres d'int\u00E9r\u00EAt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 41)(85, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CvBuilderComponent_Template_input_ngModelChange_85_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.cvData.interests, $event) || (ctx.cvData.interests = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](87, CvBuilderComponent_Conditional_87_Template, 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](88, CvBuilderComponent_div_88_Template, 30, 7, "div", 46)(89, CvBuilderComponent_div_89_Template, 25, 6, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](90, CvBuilderComponent_Conditional_90_Template, 14, 0, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](91, CvBuilderComponent_Conditional_91_Template, 14, 0, "div", 47);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.successMessage ? 2 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.avatarUrl ? 11 : 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.candidateName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.cvData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.cvData.summary);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.candidateContact.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.candidateContact.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.candidateContact.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.cvData.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.cvData.interests);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](!ctx.isEditable ? 49 : 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("display", ctx.isEditable ? "flex" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.cvData.experiences.length > 0 ? 61 : 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("display", ctx.isEditable ? "flex" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.cvData.educations.length > 0 ? 71 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.cvData.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.cvData.skills ? 79 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.cvData.interests);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.cvData.interests ? 87 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showExperienceModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showEducationModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.showSaveConfirmationModal ? 90 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.showDeleteConfirmationModal ? 91 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["\n\n\n\n.app-container-cv-builder[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  background: #f8fafc;\n  padding: 20px;\n  box-sizing: border-box;\n}\n\n.cv-container-compact[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1700px;\n  margin: 0 auto;\n  box-sizing: border-box;\n}\n\n\n\n\n\n.card-header-flex-compact[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.card-header-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0f172a;\n  font-size: 18px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n\n\n\n\n.cv-split-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 600px 1fr;\n  gap: 24px;\n  align-items: start;\n  width: 100%;\n  min-height: calc(100vh - 120px);\n}\n\n\n\n\n\n.cv-panel-card[_ngcontent-%COMP%], \n.cv-panel-card-inner-box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);\n  box-sizing: border-box;\n}\n\n.cv-panel-card[_ngcontent-%COMP%] {\n  height: calc(100vh - 120px);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.cv-right-layout-cards[_ngcontent-%COMP%] {\n  height: calc(100vh - 120px);\n  overflow-y: auto;\n  padding-right: 4px;\n  box-sizing: border-box;\n}\n\n\n\n.cv-right-layout-cards[_ngcontent-%COMP%]::-webkit-scrollbar, \n.scrollable-form-panel[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n\n.cv-right-layout-cards[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.scrollable-form-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 10px;\n}\n\n.cv-right-layout-cards[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.scrollable-form-panel[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.scrollable-form-panel[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n\n\n\n\n.compact-form-grid-vertical[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.form-section-title-inline[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 11px;\n  font-weight: 800;\n  color: #0ea5e9;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  border-bottom: 1px solid #e2e8f0;\n  padding-bottom: 8px;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.form-group-compact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.form-group-compact[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n}\n\n.form-group-compact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group-compact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.tag-input-field-pro[_ngcontent-%COMP%], \n.dynamic-fields-grid-pro[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.dynamic-fields-grid-pro[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 14px;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #1e293b;\n  background: #ffffff;\n  transition: all 0.2s ease;\n  box-sizing: border-box;\n  font-family: inherit;\n}\n\n.form-group-compact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group-compact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.tag-input-field-pro[_ngcontent-%COMP%]:focus, \n.dynamic-fields-grid-pro[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.dynamic-fields-grid-pro[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #0ea5e9;\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.08);\n}\n\n.form-group-compact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 90px;\n}\n\n\n\n\n\ninput[_ngcontent-%COMP%]:disabled, \ntextarea[_ngcontent-%COMP%]:disabled {\n  background: #f8fafc !important;\n  color: #64748b !important;\n  border-color: #e2e8f0 !important;\n  cursor: not-allowed !important;\n  box-shadow: none !important;\n}\n\n\n\n\n\n.form-actions-compact[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 14px;\n  margin-top: 10px;\n  border-top: 1px solid #f1f5f9;\n}\n\n.btn-save-cv-compact[_ngcontent-%COMP%] {\n  background: #0ea5e9;\n  color: #ffffff;\n  border: none;\n  border-radius: 8px;\n  padding: 11px 18px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n\n.btn-save-cv-compact[_ngcontent-%COMP%]:hover {\n  background: #0284c7;\n}\n\n.btn-save-cv-compact[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n\n\n\n\n.cv-avatar-wrapper-pro[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 68px;\n  border-radius: 50%;\n  border: 2px solid #0ea5e9;\n  background: #f8fafc;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n\n.cv-avatar-wrapper-pro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n\n\n\n\n.preview-section-item[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.preview-section-item[_ngcontent-%COMP%]    + .preview-section-item[_ngcontent-%COMP%] {\n  margin-top: 26px;\n}\n\n.section-flex-header-pro[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #f1f5f9;\n  padding-bottom: 8px;\n  margin-bottom: 14px;\n}\n\n.preview-section-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 800;\n  color: #0f172a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n\n.preview-section-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0ea5e9;\n}\n\n\n\n\n\n.btn-add-dynamic[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n  color: #0ea5e9;\n  border: 1px solid #bae6fd;\n  border-radius: 6px;\n  padding: 6px 11px;\n  font-size: 11px;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  transition: 0.2s ease;\n}\n\n.btn-add-dynamic[_ngcontent-%COMP%]:hover {\n  background: #dbeafe;\n}\n\n\n\n\n\n.dynamic-entry-card-pro[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 15px;\n  margin-bottom: 14px;\n  transition: 0.2s ease;\n}\n\n.dynamic-entry-card-pro[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);\n}\n\n.dynamic-entry-header-pro[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}\n\n.dynamic-fields-grid-pro[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.span-all-field-pro[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n\n\n\n\n\n.btn-remove-dynamic-pro[_ngcontent-%COMP%], \n.btn-edit-dynamic-pro[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 6px;\n  padding: 5px 10px;\n  font-size: 11px;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.btn-remove-dynamic-pro[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #ef4444;\n}\n\n.btn-edit-dynamic-pro[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n}\n\n\n\n\n\n.cv-tags-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.skill-tag-preview-pro[_ngcontent-%COMP%], \n.interest-tag-preview-pro[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #1e293b;\n  padding: 6px 10px;\n  border-radius: 999px;\n  font-size: 11.5px;\n  font-weight: 700;\n  border: 1px solid #e2e8f0;\n}\n\n.interest-tag-preview-pro[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n  color: #0369a1;\n  border-color: #bae6fd;\n}\n\n\n\n\n\n.alert-box-compact[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.alert-success[_ngcontent-%COMP%] {\n  background: #e6f4ea;\n  color: #137333;\n  border: 1px solid #ceead6;\n}\n\n.empty-text-italic[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-style: italic;\n  font-size: 12px;\n  display: block;\n}\n\n\n\n\n\n.cv-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.45);\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 20px;\n}\n\n.cv-modal-content[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  background: #ffffff;\n  border-radius: 14px;\n  padding: 22px;\n  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.18);\n  animation: _ngcontent-%COMP%_modalScaleAppear 0.18s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_modalScaleAppear {\n  from {\n    transform: scale(0.96);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n.modal-header-pro[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 18px;\n}\n\n.modal-header-pro[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 800;\n  color: #0f172a;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n\n.close-x[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: #94a3b8;\n  cursor: pointer;\n}\n\n.modal-actions-pro[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 18px;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  color: #334155;\n  padding: 9px 15px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 12px;\n}\n\n.btn-submit-save[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #ffffff;\n  border: none;\n  padding: 9px 15px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 12px;\n}\n\n.btn-submit-save[_ngcontent-%COMP%]:hover {\n  background: #059669;\n}\n\n\n\n\n\n@media (max-width: 1100px) {\n\n  .cv-split-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .cv-panel-card[_ngcontent-%COMP%], \n   .cv-right-layout-cards[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n}\n\n@media (max-width: 768px) {\n\n  .app-container-cv-builder[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n\n  .cv-panel-card[_ngcontent-%COMP%], \n   .cv-panel-card-inner-box[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n\n  .dynamic-fields-grid-pro[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .span-all-field-pro[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n\n  .section-flex-header-pro[_ngcontent-%COMP%], \n   .dynamic-entry-header-pro[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n}\n\n\n.custom-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n\n\n.custom-modal-box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 450px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeInModal 0.2s ease-out;\n}\n\n.custom-modal-header[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border-bottom: 1px solid #e9ecef;\n}\n\n.custom-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: #212529;\n  font-weight: 600;\n}\n\n.warning-icon[_ngcontent-%COMP%] {\n  color: #ffc107;\n  font-size: 1.4rem;\n}\n\n.custom-modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  color: #495057;\n  font-size: 0.95rem;\n  line-height: 1.5;\n}\n\n.custom-modal-footer[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  background: #f8f9fa;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  border-top: 1px solid #e9ecef;\n}\n\n\n.btn-modal-cancel[_ngcontent-%COMP%] {\n  background: #e4e6eb;\n  color: #4b4b4b;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.btn-modal-cancel[_ngcontent-%COMP%]:hover {\n  background: #d8dadf;\n}\n\n.btn-modal-confirm[_ngcontent-%COMP%] {\n  background: #0d6efd;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.btn-modal-confirm[_ngcontent-%COMP%]:hover {\n  background: #0b5ed7;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInModal {\n  from { transform: scale(0.95); opacity: 0; }\n  to { transform: scale(1); opacity: 1; }\n}\n.danger-icon[_ngcontent-%COMP%] {\n  color: #dc3545; \n  font-size: 1.4rem;\n}\n\n.btn-modal-delete[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.btn-modal-delete[_ngcontent-%COMP%]:hover {\n  background: #bb2d3b;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2FuZGlkYXRlL2N2LWJ1aWxkZXIvY3YtYnVpbGRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7K0VBRStFOztBQUUvRTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7OytFQUUrRTs7QUFFL0U7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7OytFQUUrRTs7QUFFL0U7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLCtCQUErQjtBQUNqQzs7QUFFQTs7K0VBRStFOztBQUUvRTs7RUFFRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQSxzQkFBc0I7O0FBRXRCOztFQUVFLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7K0VBRStFOztBQUUvRTtFQUNFLGFB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ZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgw7DCn8KMwpAgQ09OVEFJTkVSIEdMT0JBTFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmFwcC1jb250YWluZXItY3YtYnVpbGRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jdi1jb250YWluZXItY29tcGFjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxNzAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgw7DCn8KnwqkgSEVBREVSXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uY2FyZC1oZWFkZXItZmxleC1jb21wYWN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci1sZWZ0IGgzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICDDsMKfwpPCiiBET1VCTEUgUEFOTkVBVVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmN2LXNwbGl0LWxheW91dCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwMHB4IDFmcjtcclxuICBnYXA6IDI0cHg7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIMOwwp/Ck8KmIENBUlRFU1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmN2LXBhbmVsLWNhcmQsXHJcbi5jdi1wYW5lbC1jYXJkLWlubmVyLWJveCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgxNSwgMjMsIDQyLCAwLjA0KTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY3YtcGFuZWwtY2FyZCB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY3YtcmlnaHQtbGF5b3V0LWNhcmRzIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogU2Nyb2xsYmFyIG1vZGVybmUgKi9cclxuXHJcbi5jdi1yaWdodC1sYXlvdXQtY2FyZHM6Oi13ZWJraXQtc2Nyb2xsYmFyLFxyXG4uc2Nyb2xsYWJsZS1mb3JtLXBhbmVsOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDdweDtcclxufVxyXG5cclxuLmN2LXJpZ2h0LWxheW91dC1jYXJkczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXHJcbi5zY3JvbGxhYmxlLWZvcm0tcGFuZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjY2JkNWUxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jdi1yaWdodC1sYXlvdXQtY2FyZHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLFxyXG4uc2Nyb2xsYWJsZS1mb3JtLXBhbmVsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlLWZvcm0tcGFuZWwge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIMOwwp/Ck8KdIEZPUk1VTEFJUkVTXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uY29tcGFjdC1mb3JtLWdyaWQtdmVydGljYWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi5mb3JtLXNlY3Rpb24tdGl0bGUtaW5saW5lIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjMGVhNWU5O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwLWNvbXBhY3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDVweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAtY29tcGFjdCBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAtY29tcGFjdCBpbnB1dCxcclxuLmZvcm0tZ3JvdXAtY29tcGFjdCB0ZXh0YXJlYSxcclxuLnRhZy1pbnB1dC1maWVsZC1wcm8sXHJcbi5keW5hbWljLWZpZWxkcy1ncmlkLXBybyBpbnB1dCxcclxuLmR5bmFtaWMtZmllbGRzLWdyaWQtcHJvIHRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMXB4IDE0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjMWUyOTNiO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cC1jb21wYWN0IGlucHV0OmZvY3VzLFxyXG4uZm9ybS1ncm91cC1jb21wYWN0IHRleHRhcmVhOmZvY3VzLFxyXG4udGFnLWlucHV0LWZpZWxkLXBybzpmb2N1cyxcclxuLmR5bmFtaWMtZmllbGRzLWdyaWQtcHJvIGlucHV0OmZvY3VzLFxyXG4uZHluYW1pYy1maWVsZHMtZ3JpZC1wcm8gdGV4dGFyZWE6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzBlYTVlOTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDE0LCAxNjUsIDIzMywgMC4wOCk7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwLWNvbXBhY3QgdGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgbWluLWhlaWdodDogOTBweDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgw7DCn8KUwpIgSU5QVVRTIERJU0FCTEVEXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5pbnB1dDpkaXNhYmxlZCxcclxudGV4dGFyZWE6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICNmOGZhZmMgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzY0NzQ4YiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2UyZThmMCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIMOwwp/CjsKbw6/CuMKPIEFDVElPTlNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5mb3JtLWFjdGlvbnMtY29tcGFjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbn1cclxuXHJcbi5idG4tc2F2ZS1jdi1jb21wYWN0IHtcclxuICBiYWNrZ3JvdW5kOiAjMGVhNWU5O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMTFweCAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDdweDtcclxufVxyXG5cclxuLmJ0bi1zYXZlLWN2LWNvbXBhY3Q6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMjg0Yzc7XHJcbn1cclxuXHJcbi5idG4tc2F2ZS1jdi1jb21wYWN0OmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgw7DCn8KRwqQgQVZBVEFSXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uY3YtYXZhdGFyLXdyYXBwZXItcHJvIHtcclxuICB3aWR0aDogNjhweDtcclxuICBoZWlnaHQ6IDY4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwZWE1ZTk7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmN2LWF2YXRhci13cmFwcGVyLXBybyBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgw7DCn8KTwpogUEFOTkVBVSBEUk9JVFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLnByZXZpZXctc2VjdGlvbi1pdGVtIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ucHJldmlldy1zZWN0aW9uLWl0ZW0gKyAucHJldmlldy1zZWN0aW9uLWl0ZW0ge1xyXG4gIG1hcmdpbi10b3A6IDI2cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWZsZXgtaGVhZGVyLXBybyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbn1cclxuXHJcbi5wcmV2aWV3LXNlY3Rpb24tbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxufVxyXG5cclxuLnByZXZpZXctc2VjdGlvbi1sYWJlbCBpIHtcclxuICBjb2xvcjogIzBlYTVlOTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgw6LCnsKVIEJPVVRPTlNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5idG4tYWRkLWR5bmFtaWMge1xyXG4gIGJhY2tncm91bmQ6ICNmMGY5ZmY7XHJcbiAgY29sb3I6ICMwZWE1ZTk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2JhZTZmZDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzogNnB4IDExcHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA0cHg7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uYnRuLWFkZC1keW5hbWljOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZGJlYWZlO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICDDsMKfwpPChCBDQVJURVMgRVhQRVJJRU5DRSAvIEVEVUNBVElPTlxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmR5bmFtaWMtZW50cnktY2FyZC1wcm8ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5keW5hbWljLWVudHJ5LWNhcmQtcHJvOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wNSk7XHJcbn1cclxuXHJcbi5keW5hbWljLWVudHJ5LWhlYWRlci1wcm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uZHluYW1pYy1maWVsZHMtZ3JpZC1wcm8ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLnNwYW4tYWxsLWZpZWxkLXBybyB7XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgw7DCn8KXwpHDr8K4wo8gQlVUVE9OUyBBQ1RJT05TXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uYnRuLXJlbW92ZS1keW5hbWljLXBybyxcclxuLmJ0bi1lZGl0LWR5bmFtaWMtcHJvIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNHB4O1xyXG59XHJcblxyXG4uYnRuLXJlbW92ZS1keW5hbWljLXBybyB7XHJcbiAgYmFja2dyb3VuZDogI2ZlZjJmMjtcclxuICBjb2xvcjogI2VmNDQ0NDtcclxufVxyXG5cclxuLmJ0bi1lZGl0LWR5bmFtaWMtcHJvIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gIGNvbG9yOiAjNDc1NTY5O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIMOwwp/Cj8K3w6/CuMKPIFRBR1NcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5jdi10YWdzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5za2lsbC10YWctcHJldmlldy1wcm8sXHJcbi5pbnRlcmVzdC10YWctcHJldmlldy1wcm8ge1xyXG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7XHJcbiAgY29sb3I6ICMxZTI5M2I7XHJcbiAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG59XHJcblxyXG4uaW50ZXJlc3QtdGFnLXByZXZpZXctcHJvIHtcclxuICBiYWNrZ3JvdW5kOiAjZjBmOWZmO1xyXG4gIGNvbG9yOiAjMDM2OWExO1xyXG4gIGJvcmRlci1jb2xvcjogI2JhZTZmZDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgw6LCmsKgw6/CuMKPIEFMRVJUU1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmFsZXJ0LWJveC1jb21wYWN0IHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmFsZXJ0LXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQ6ICNlNmY0ZWE7XHJcbiAgY29sb3I6ICMxMzczMzM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZWFkNjtcclxufVxyXG5cclxuLmVtcHR5LXRleHQtaXRhbGljIHtcclxuICBjb2xvcjogIzk0YTNiODtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICDDsMKfwqrCnyBNT0RBTFNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5jdi1tb2RhbC1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjMsIDQyLCAwLjQ1KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmN2LW1vZGFsLWNvbnRlbnQge1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDIycHg7XHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjE4KTtcclxuICBhbmltYXRpb246IG1vZGFsU2NhbGVBcHBlYXIgMC4xOHMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW9kYWxTY2FsZUFwcGVhciB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTYpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyLXBybyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyLXBybyBoMyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDdweDtcclxufVxyXG5cclxuLmNsb3NlLXgge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzk0YTNiODtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbC1hY3Rpb25zLXBybyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGdhcDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxOHB4O1xyXG59XHJcblxyXG4uYnRuLWNhbmNlbCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xyXG4gIGNvbG9yOiAjMzM0MTU1O1xyXG4gIHBhZGRpbmc6IDlweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5idG4tc3VibWl0LXNhdmUge1xyXG4gIGJhY2tncm91bmQ6ICMxMGI5ODE7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDlweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5idG4tc3VibWl0LXNhdmU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwNTk2Njk7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIMOwwp/Ck8KxIFJFU1BPTlNJVkVcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuXHJcbiAgLmN2LXNwbGl0LWxheW91dCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5jdi1wYW5lbC1jYXJkLFxyXG4gIC5jdi1yaWdodC1sYXlvdXQtY2FyZHMge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAuYXBwLWNvbnRhaW5lci1jdi1idWlsZGVyIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuY3YtcGFuZWwtY2FyZCxcclxuICAuY3YtcGFuZWwtY2FyZC1pbm5lci1ib3gge1xyXG4gICAgcGFkZGluZzogMThweDtcclxuICB9XHJcblxyXG4gIC5keW5hbWljLWZpZWxkcy1ncmlkLXBybyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5zcGFuLWFsbC1maWVsZC1wcm8ge1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWZsZXgtaGVhZGVyLXBybyxcclxuICAuZHluYW1pYy1lbnRyeS1oZWFkZXItcHJvIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKiBBcnJpw4PCqHJlLXBsYW4gZmxvdXTDg8KpIGV0IGFzc29tYnJpICovXHJcbi5jdXN0b20tbW9kYWwtb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuLyogQm/Dg8KudGUgZGUgbGEgcG9wdXAgKi9cclxuLmN1c3RvbS1tb2RhbC1ib3gge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBhbmltYXRpb246IGZhZGVJbk1vZGFsIDAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5jdXN0b20tbW9kYWwtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xyXG59XHJcblxyXG4uY3VzdG9tLW1vZGFsLWhlYWRlciBoMyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi53YXJuaW5nLWljb24ge1xyXG4gIGNvbG9yOiAjZmZjMTA3O1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG59XHJcblxyXG4uY3VzdG9tLW1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi5jdXN0b20tbW9kYWwtZm9vdGVyIHtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllY2VmO1xyXG59XHJcblxyXG4vKiBCb3V0b25zIGRlIGxhIHBvcHVwICovXHJcbi5idG4tbW9kYWwtY2FuY2VsIHtcclxuICBiYWNrZ3JvdW5kOiAjZTRlNmViO1xyXG4gIGNvbG9yOiAjNGI0YjRiO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5idG4tbW9kYWwtY2FuY2VsOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZDhkYWRmO1xyXG59XHJcblxyXG4uYnRuLW1vZGFsLWNvbmZpcm0ge1xyXG4gIGJhY2tncm91bmQ6ICMwZDZlZmQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5idG4tbW9kYWwtY29uZmlybTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzBiNWVkNztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5Nb2RhbCB7XHJcbiAgZnJvbSB7IHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IG9wYWNpdHk6IDA7IH1cclxuICB0byB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IG9wYWNpdHk6IDE7IH1cclxufVxyXG4uZGFuZ2VyLWljb24ge1xyXG4gIGNvbG9yOiAjZGMzNTQ1OyAvKiBSb3VnZSBwb3VyIGwnYXZlcnRpc3NlbWVudCBkZSBzdXBwcmVzc2lvbiAqL1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG59XHJcblxyXG4uYnRuLW1vZGFsLWRlbGV0ZSB7XHJcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmJ0bi1tb2RhbC1kZWxldGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNiYjJkM2I7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }

}]);
//# sourceMappingURL=src_app_features_candidate_cv-builder_cv-builder_component_ts.js.map