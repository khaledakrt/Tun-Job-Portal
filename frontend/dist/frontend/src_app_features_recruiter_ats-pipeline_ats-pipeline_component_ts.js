"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_features_recruiter_ats-pipeline_ats-pipeline_component_ts"],{

/***/ 8596
/*!***************************************************************************!*\
  !*** ./src/app/features/recruiter/ats-pipeline/ats-pipeline.component.ts ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AtsPipelineComponent: () => (/* binding */ AtsPipelineComponent)
/* harmony export */ });
/* harmony import */ var D_Tun_Job_Portal_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);





function AtsPipelineComponent_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", title_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", title_r1, " (", ctx_r1.getFilteredCandidatesCount(title_r1), ") ");
  }
}
function AtsPipelineComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AtsPipelineComponent_div_21_Template_div_click_0_listener() {
      const app_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onSelectApplication(app_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const app_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](app_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](app_r4.job_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", app_r4.address || "Tunis");
  }
}
function AtsPipelineComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Aucun nouveau CV");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AtsPipelineComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AtsPipelineComponent_div_28_Template_div_click_0_listener() {
      const app_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onSelectApplication(app_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const app_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](app_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](app_r6.job_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", app_r6.address || "Tunis");
  }
}
function AtsPipelineComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 26)(3, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Aucun entretien planifi\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AtsPipelineComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AtsPipelineComponent_div_35_Template_div_click_0_listener() {
      const app_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onSelectApplication(app_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const app_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](app_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](app_r8.job_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", app_r8.address || "Tunis");
  }
}
function AtsPipelineComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Aucune proposition \u00E9mise");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AtsPipelineComponent_div_37_a_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " LinkedIn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r1.selectedApplication.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function AtsPipelineComponent_div_37_a_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " GitHub ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r1.selectedApplication.github, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function AtsPipelineComponent_div_37_span_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Non renseign\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AtsPipelineComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AtsPipelineComponent_div_37_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onCloseDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AtsPipelineComponent_div_37_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 32)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AtsPipelineComponent_div_37_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onCloseDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 34)(8, "div", 35)(9, "div", 36)(10, "div", 37)(11, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("error", function AtsPipelineComponent_div_37_Template_img_error_11_listener($event) {
      return $event.target.src = "assets/images/default-avatar.png";
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AtsPipelineComponent_div_37_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.openCandidateCV(ctx_r1.selectedApplication.candidate_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 42)(17, "div", 43)(18, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Poste cibl\u00E9 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "strong", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 43)(23, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Adresse e-mail :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 43)(28, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "T\u00E9l\u00E9phone :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 43)(33, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Ville / R\u00E9gion :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 47)(38, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Situation actuelle :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "span", 46)(41, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 43)(44, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Disponibilit\u00E9 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 43)(49, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Contrat souhait\u00E9 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 43)(54, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Date de naissance :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](58, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 49)(60, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "R\u00E9seaux :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, AtsPipelineComponent_div_37_a_63_Template, 3, 1, "a", 51)(64, AtsPipelineComponent_div_37_a_64_Template, 3, 1, "a", 52)(65, AtsPipelineComponent_div_37_span_65_Template, 2, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 54)(67, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, " R\u00E9sum\u00E9 du profil & Comp\u00E9tences cl\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 57)(72, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AtsPipelineComponent_div_37_Template_button_click_72_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.changeCandidateStatus(ctx_r1.selectedApplication.id, "Proposition"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "svg", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, " Accepter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AtsPipelineComponent_div_37_Template_button_click_76_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.changeCandidateStatus(ctx_r1.selectedApplication.id, "Nouveau"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "svg", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "path", 61)(79, "path", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, " En attente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AtsPipelineComponent_div_37_Template_button_click_81_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.changeCandidateStatus(ctx_r1.selectedApplication.id, "Entretien"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "svg", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "path", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, " Entretien ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AtsPipelineComponent_div_37_Template_button_click_85_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.changeCandidateStatus(ctx_r1.selectedApplication.id, "Rejete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "svg", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "path", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, " Rejeter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AtsPipelineComponent_div_37_Template_button_click_89_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onCloseDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, " Fermer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Candidature de ", ctx_r1.selectedApplication.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.selectedApplication.avatar_logo ? "http://localhost:3000/logos/" + ctx_r1.selectedApplication.avatar_logo : "assets/images/default-avatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("opacity", ctx_r1.selectedApplication.cv_summary && ctx_r1.selectedApplication.cv_summary.trim() !== "" ? "1" : "0.5")("cursor", ctx_r1.selectedApplication.cv_summary && ctx_r1.selectedApplication.cv_summary.trim() !== "" ? "pointer" : "not-allowed")("pointer-events", ctx_r1.selectedApplication.cv_summary && ctx_r1.selectedApplication.cv_summary.trim() !== "" ? "auto" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.selectedApplication.cv_summary || ctx_r1.selectedApplication.cv_summary.trim() === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedApplication.cv_summary && ctx_r1.selectedApplication.cv_summary.trim() !== "" ? "Consulter le CV" : "Aucun CV", "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.selectedApplication.job_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.selectedApplication.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.selectedApplication.phone || "Non renseign\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.selectedApplication.address || "Non sp\u00E9cifi\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.selectedApplication.job_status || "Non renseign\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.selectedApplication.availability || "Non renseign\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.selectedApplication.job_type || "Non renseign\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedApplication.birth_date ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](58, 22, ctx_r1.selectedApplication.birth_date, "dd/MM/yyyy") : "Non renseign\u00E9e", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedApplication.linkedin && ctx_r1.selectedApplication.linkedin.trim() !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedApplication.github && ctx_r1.selectedApplication.github.trim() !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (!ctx_r1.selectedApplication.linkedin || ctx_r1.selectedApplication.linkedin.trim() === "") && (!ctx_r1.selectedApplication.github || ctx_r1.selectedApplication.github.trim() === ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedApplication.cv_summary || ctx_r1.selectedApplication.cv_Summary || ctx_r1.selectedApplication.summary || "Le candidat n'a pas encore r\u00E9dig\u00E9 de pr\u00E9sentation de profil sur son espace TunJob.", " ");
  }
}
class AtsPipelineComponent {
  cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
  applicationsList = [];
  selectedApplication = null;
  // 🎯 Variable pour stocker le filtre de l'offre d'emploi sélectionnée
  selectedJobTitle = 'all';
  ngOnInit() {
    this.fetchApplications();
  }
  fetchApplications() {
    const targetUrl = 'http://localhost:3000/api/recruiter/ats/applications';
    const token = localStorage.getItem('token');
    fetch(targetUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
      }
    }).then(res => {
      if (!res.ok) throw new Error("Impossible de charger le pipeline ATS.");
      return res.json();
    }).then(data => {
      this.applicationsList = data && Array.isArray(data.applications) ? data.applications : [];
      this.cdr.detectChanges();
      console.log("✅ Candidatures chargées :", this.applicationsList);
    }).catch(err => console.error("❌ Erreur ATS :", err));
  }
  getFilteredCandidatesCount(jobTitle) {
    return this.applicationsList.filter(app => {
      // 1. Si on cible une offre précise, on vérifie la correspondance
      if (jobTitle !== 'all' && app.job_title !== jobTitle) return false;
      // 2. On s'assure que le candidat appartient bien à l'une des 3 colonnes actives
      if (!app.status) return true;
      const currentStatus = app.status.toLowerCase().trim();
      return currentStatus.includes('nouv') || currentStatus.includes('att') || currentStatus === 'pending' || currentStatus.includes('entre') || currentStatus.includes('tech') || currentStatus.includes('prop') || currentStatus.includes('offr');
    }).length;
  }
  /**
   * 🎯 Extrait dynamiquement la liste unique des offres d'emploi pour alimenter le Dropdown
   */
  getUniqueJobTitles() {
    if (!this.applicationsList) return [];
    // 🟢 On ne garde que les offres qui ont au moins un candidat visible dans le Kanban
    const visibleApps = this.applicationsList.filter(app => {
      if (!app.status) return true; // Statut vide = 'Nouveau' (Visible)
      const currentStatus = app.status.toLowerCase().trim();
      return currentStatus.includes('nouv') || currentStatus.includes('att') || currentStatus === 'pending' || currentStatus.includes('entre') || currentStatus.includes('tech') || currentStatus.includes('prop') || currentStatus.includes('offr');
    });
    const titles = visibleApps.map(app => app.job_title).filter(title => !!title);
    return [...new Set(titles)]; // Supprime les doublons de titres
  }
  /**
   * 🎯 Intercepte le changement d'offre sélectionnée depuis l'interface utilisateur
   */
  onJobFilterChange(event) {
    this.selectedJobTitle = event.target.value;
    this.cdr.detectChanges();
  }
  /**
   * 🚀 Envoie le changement de statut au backend MySQL
   */
  changeCandidateStatus(applicationId, newStatus) {
    const targetUrl = 'http://localhost:3000/api/recruiter/ats/update-status';
    const token = localStorage.getItem('token');
    fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
      },
      body: JSON.stringify({
        id: applicationId,
        status: newStatus
      })
    }).then(/*#__PURE__*/function () {
      var _ref = (0,D_Tun_Job_Portal_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        if (!res.ok) throw new Error("Échec de la mise à jour du statut.");
        return res.json();
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).then(() => {
      const appIndex = this.applicationsList.findIndex(a => a.id === applicationId);
      if (appIndex !== -1) {
        this.applicationsList[appIndex].status = newStatus;
      }
      this.selectedApplication = null;
      this.cdr.detectChanges();
    }).catch(err => {
      console.error("Erreur de mise à jour ATS :", err);
      alert("Impossible de modifier le statut.");
    });
  }
  /**
   * 🚀 FILTRAGE DOUBLE COUCHE : Filtre par offre sélectionnée PUIS par colonne Kanban
   */
  getCandidatesByStatus(statusName) {
    return this.applicationsList.filter(app => {
      // Étape A : Filtrage par titre d'offre sélectionné
      if (this.selectedJobTitle !== 'all' && app.job_title !== this.selectedJobTitle) {
        return false;
      }
      // Étape B : Filtrage classique par colonne Kanban
      if (!app.status) return statusName === 'Nouveau';
      const currentStatus = app.status.toLowerCase().trim();
      if (statusName === 'Nouveau') return currentStatus.includes('nouv') || currentStatus.includes('att') || currentStatus === 'pending';
      if (statusName === 'Entretien') return currentStatus.includes('entre') || currentStatus.includes('tech');
      if (statusName === 'Proposition') return currentStatus.includes('prop') || currentStatus.includes('offr');
      return false;
    });
  }
  onSelectApplication(app) {
    this.selectedApplication = {
      ...app
    };
    if (app && app.cv_summary) {
      this.selectedApplication.cv_summary = app.cv_summary;
    }
    this.cdr.detectChanges();
    console.log("🔍 Consultation du candidat :", this.selectedApplication);
  }
  onCloseDetails() {
    this.selectedApplication = null;
    this.cdr.detectChanges();
  }
  // 🚀 MÉTHODE CORRIGÉE POUR OUVRIR LA PAGE ANGULAR DU CV
  openCandidateCV(candidateId) {
    if (!candidateId) return;
    // Ouvre la page Angular de visualisation du CV dans un nouvel onglet
    window.open(`/candidate/cv-view/${candidateId}`, '_blank');
  }
  static ɵfac = function AtsPipelineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AtsPipelineComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AtsPipelineComponent,
    selectors: [["app-ats-pipeline"]],
    decls: 38,
    vars: 12,
    consts: [[1, "ats-container"], [1, "ats-card"], [1, "card-header"], [1, "bi", "bi-people-fill"], [1, "job-filter-container", 2, "margin-bottom", "20px", "display", "flex", "align-items", "center", "gap", "12px"], [2, "font-size", "13px", "font-weight", "700", "color", "#475569", "text-transform", "uppercase"], [2, "padding", "10px 14px", "border", "1px solid #cbd5e1", "border-radius", "6px", "font-size", "14px", "color", "#1e293b", "background", "#fff", "width", "300px", 3, "change"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], [1, "pipeline-grid"], [1, "pipeline-column"], [1, "column-header"], [1, "count"], ["class", "candidate-item", 3, "click", 4, "ngFor", "ngForOf"], ["class", "empty-placeholder", 4, "ngIf"], ["class", "candidate-item border-orange", 3, "click", 4, "ngFor", "ngForOf"], ["class", "candidate-item border-green", 3, "click", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [3, "value"], [1, "candidate-item", 3, "click"], [1, "location"], [1, "bi", "bi-geo-alt"], [1, "empty-placeholder"], ["xmlns", "http://w3.org", "width", "24", "height", "24", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M4.5 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM3 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5M8 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H8A.5.5 0 0 1 8 9m.5 2.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1z"], [1, "candidate-item", "border-orange", 3, "click"], ["d", "M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"], ["d", "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"], [1, "candidate-item", "border-green", 3, "click"], ["d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 2, "width", "640px", "max-width", "95%", "max-height", "90vh", "display", "flex", "flex-direction", "column", "gap", "16px", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body"], [2, "display", "flex", "gap", "24px", "align-items", "flex-start", "margin-bottom", "20px"], [2, "flex-shrink", "0", "display", "flex", "flex-direction", "column", "align-items", "center", "gap", "10px", "width", "110px"], [2, "width", "85px", "height", "85px", "border-radius", "50%", "border", "1px solid #cbd5e1", "overflow", "hidden", "background", "#ffffff", "display", "flex", "align-items", "center", "justify-content", "center"], ["alt", "Photo du candidat", 2, "width", "100%", "height", "100%", "object-fit", "cover", 3, "error", "src"], [2, "background", "#ffffff", "border", "1px solid #cbd5e1", "color", "#0284c7", "padding", "6px 4px", "border-radius", "4px", "font-size", "11px", "font-weight", "700", "width", "100%", "text-align", "center", "display", "inline-flex", "align-items", "center", "justify-content", "center", "gap", "4px", "box-shadow", "0 1px 2px rgba(0,0,0,0.05)", 3, "click", "disabled"], ["xmlns", "http://w3.org", "width", "11", "height", "11", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 1A1.5 1.5 0 0 1 11 2.5V4h3v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"], [2, "flex-grow", "1", "display", "flex", "flex-direction", "column", "gap", "12px"], [1, "info-row", 2, "display", "flex"], [1, "info-label", 2, "width", "150px", "flex-shrink", "0"], [1, "info-value", "text-slate"], [1, "info-value"], [1, "info-row", 2, "display", "flex", "align-items", "center"], [1, "badge-status-pro-ats"], [1, "info-row", 2, "display", "flex", "align-items", "center", "margin-top", "4px"], [2, "display", "flex", "gap", "10px"], ["target", "_blank", "class", "social-badge-btn linkedin-badge", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "social-badge-btn github-badge", 3, "href", 4, "ngIf"], ["style", "color: #94a3b8; font-style: italic; font-size: 13px; font-weight: 500;", 4, "ngIf"], [1, "summary-box", 2, "margin-top", "15px", "padding", "16px", "background", "#f8fafc", "border-radius", "8px", "border-left", "4px solid #0ea5e9"], [1, "summary-title", 2, "color", "#0f172a", "font-weight", "700", "font-size", "13px", "display", "block", "margin-bottom", "8px"], [1, "summary-text", 2, "margin", "0", "color", "#475569", "font-size", "13px", "line-height", "1.6", "white-space", "pre-line"], [1, "modal-footer"], ["type", "button", 2, "background", "#10b981", "color", "white", "border", "none", "padding", "8px 14px", "border-radius", "6px", "font-size", "12px", "font-weight", "600", "cursor", "pointer", "display", "inline-flex", "align-items", "center", "gap", "6px", "transition", "background 0.2s", 3, "click"], ["xmlns", "http://w3.org", "width", "12", "height", "12", "fill", "currentColor", "viewBox", "0 0 16 16"], ["type", "button", 2, "background", "#64748b", "color", "white", "border", "none", "padding", "8px 14px", "border-radius", "6px", "font-size", "12px", "font-weight", "600", "cursor", "pointer", "display", "inline-flex", "align-items", "center", "gap", "6px", "transition", "background 0.2s", 3, "click"], ["d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 0 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"], ["d", "M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm4 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"], ["type", "button", 2, "background", "#f97316", "color", "white", "border", "none", "padding", "8px 14px", "border-radius", "6px", "font-size", "12px", "font-weight", "600", "cursor", "pointer", "display", "inline-flex", "align-items", "center", "gap", "6px", "transition", "background 0.2s", 3, "click"], ["d", "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-8.5-4.5A.5.5 0 0 1 7 4v3.5h2.5a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5"], ["type", "button", 2, "background", "#ef4444", "color", "white", "border", "none", "padding", "8px 14px", "border-radius", "6px", "font-size", "12px", "font-weight", "600", "cursor", "pointer", "display", "inline-flex", "align-items", "center", "gap", "6px", "transition", "background 0.2s", 3, "click"], ["d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"], ["type", "button", 1, "btn-secondary", 2, "padding", "8px 18px", "font-size", "12px", "font-weight", "600", "border-radius", "6px", "cursor", "pointer", "margin", "0", 3, "click"], ["target", "_blank", 1, "social-badge-btn", "linkedin-badge", 3, "href"], [1, "bi", "bi-linkedin"], ["target", "_blank", 1, "social-badge-btn", "github-badge", 3, "href"], [1, "bi", "bi-github"], [2, "color", "#94a3b8", "font-style", "italic", "font-size", "13px", "font-weight", "500"]],
    template: function AtsPipelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Suivi des Candidats (Pipeline ATS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Suivez pas \u00E0 pas la progression de vos candidats dans le tunnel de recrutement.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4)(9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Filtrer par offre :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AtsPipelineComponent_Template_select_change_11_listener($event) {
          return ctx.onJobFilterChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, AtsPipelineComponent_option_14_Template, 2, 3, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Nouveaux CV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, AtsPipelineComponent_div_21_Template, 8, 3, "div", 13)(22, AtsPipelineComponent_div_22_Template, 5, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 10)(24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Entretien Tech ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, AtsPipelineComponent_div_28_Template, 8, 3, "div", 15)(29, AtsPipelineComponent_div_29_Template, 6, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 10)(31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Proposition ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, AtsPipelineComponent_div_35_Template, 8, 3, "div", 16)(36, AtsPipelineComponent_div_36_Template, 5, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, AtsPipelineComponent_div_37_Template, 91, 25, "div", 17);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Tous les candidats (", ctx.getFilteredCandidatesCount("all"), ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.getUniqueJobTitles());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getCandidatesByStatus("Nouveau").length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.getCandidatesByStatus("Nouveau"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.getCandidatesByStatus("Nouveau").length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getCandidatesByStatus("Entretien").length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.getCandidatesByStatus("Entretien"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.getCandidatesByStatus("Entretien").length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.getCandidatesByStatus("Proposition").length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.getCandidatesByStatus("Proposition"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.getCandidatesByStatus("Proposition").length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedApplication);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
    styles: [".ats-container[_ngcontent-%COMP%] { \n  padding-top: 10px; \n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out; \n}\n\n.ats-card[_ngcontent-%COMP%] { \n  background: #ffffff; \n  border-radius: 12px; \n  border: 1px solid #e2e8f0; \n  padding: 30px; \n  box-shadow: 0 1px 3px rgba(0,0,0,0.02); \n}\n\n.card-header[_ngcontent-%COMP%] { \n  margin-bottom: 25px; \n}\n\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { \n  margin: 0 0 6px 0; \n  color: #0f172a; \n  font-size: 20px; \n  font-weight: 700; \n  display: flex; \n  align-items: center; \n  gap: 10px; \n}\n\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \n  color: #0ea5e9; \n}\n\n.card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { \n  margin: 0; \n  color: #64748b; \n  font-size: 14px; \n}\n\n\n.pipeline-grid[_ngcontent-%COMP%] { \n  display: grid; \n  grid-template-columns: repeat(3, 1fr); \n  gap: 20px; \n  align-items: start;\n  height: calc(100vh - 220px); \n}\n\n\n.pipeline-column[_ngcontent-%COMP%] { \n  background-color: #f8fafc; \n  border-radius: 8px; \n  padding: 15px; \n  border: 1px solid #e2e8f0; \n  display: flex; \n  flex-direction: column; \n  gap: 12px; \n  \n  \n  max-height: 100%;\n  overflow-y: auto; \n}\n\n.pipeline-column[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.pipeline-column[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.pipeline-column[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 4px;\n}\n.pipeline-column[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n\n.column-header[_ngcontent-%COMP%] { \n  font-size: 13px; \n  font-weight: 700; \n  color: #475569; \n  text-transform: uppercase; \n  letter-spacing: 0.5px; \n  display: flex; \n  justify-content: space-between; \n  align-items: center; \n  margin-bottom: 5px; \n}\n\n.column-header[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] { \n  background: #cbd5e1; \n  color: #334155; \n  font-size: 11px; \n  padding: 2px 6px; \n  border-radius: 10px; \n}\n\n\n.candidate-item[_ngcontent-%COMP%] { \n  background: #ffffff; \n  padding: 16px; \n  border-radius: 6px; \n  border: 1px solid #e2e8f0; \n  box-shadow: 0 1px 2px rgba(0,0,0,0.02); \n  border-left: 4px solid #0ea5e9; \n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.candidate-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);\n  border-color: #cbd5e1;\n}\n\n.candidate-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] { \n  margin: 0 0 4px 0; \n  color: #0f172a; \n  font-size: 14px; \n  font-weight: 600; \n}\n\n.candidate-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { \n  margin: 0 0 8px 0; \n  color: #64748b; \n  font-size: 12px; \n}\n\n.candidate-item[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] { \n  font-size: 11px; \n  color: #94a3b8; \n  display: flex; \n  align-items: center; \n  gap: 4px; \n}\n\n.candidate-item.border-orange[_ngcontent-%COMP%] { border-left-color: #ea580c; }\n.candidate-item.border-green[_ngcontent-%COMP%] { border-left-color: #22c55e; }\n\n\n.empty-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 1;\n  border: 2px dashed #e2e8f0;\n  border-radius: 6px;\n  padding: 20px;\n  color: #94a3b8;\n  background: #ffffff;\n  min-height: 150px;\n}\n\n.empty-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 8px;\n  color: #cbd5e1;\n}\n\n.empty-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  font-style: italic;\n}\n\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(15, 23, 42, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  animation: _ngcontent-%COMP%_fadeIn 0.15s ease-out;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 28px;\n  border-radius: 12px;\n  width: 640px !important;    \n  max-width: 95%;\n  height: auto !important;    \n  max-height: 90vh;           \n  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);\n  overflow-y: auto;           \n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #f1f5f9;\n  padding-bottom: 14px;\n  margin-bottom: 18px;\n}\n\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0f172a;\n  font-size: 16px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0ea5e9;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 26px;\n  color: #94a3b8;\n  cursor: pointer;\n  line-height: 1;\n}\n\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #475569;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 13.5px;\n}\n\n.info-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 500;\n  width: 150px;\n  flex-shrink: 0;\n}\n\n.info-value[_ngcontent-%COMP%] {\n  color: #334155;\n}\n\n.info-value.text-slate[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 600;\n}\n\n.summary-box[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 12px;\n  background: #f8fafc;\n  border-radius: 6px;\n  border-left: 4px solid #0ea5e9;\n}\n\n.summary-title[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 600;\n  font-size: 13px;\n  display: block;\n  margin-bottom: 6px;\n}\n\n.summary-text[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #475569;\n  font-size: 13px;\n  line-height: 1.5;\n  white-space: pre-line;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 14px;\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  gap: 10px !important;\n  flex-wrap: nowrap !important; \n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn { \n  from { opacity: 0; transform: translateY(4px); } \n  to { opacity: 1; transform: translateY(0); } \n}\n\n\n\n\n\n.badge-status-pro-ats[_ngcontent-%COMP%] {\n  background-color: #f0fdf4; \n  color: #166534; \n  padding: 3px 10px; \n  border-radius: 6px; \n  font-size: 12.5px; \n  font-weight: 600;\n  display: inline-block;\n  border: 1px solid #dcfce7;\n}\n\n\n.social-badge-btn[_ngcontent-%COMP%] {\n  display: inline-flex; \n  align-items: center; \n  gap: 6px; \n  padding: 5px 12px; \n  border-radius: 6px; \n  font-size: 12.5px; \n  font-weight: 600; \n  text-decoration: none;\n  transition: all 0.2s ease-in-out;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n\n\n.linkedin-badge[_ngcontent-%COMP%] { \n  background: #e0f2fe; \n  color: #0369a1;\n  border: 1px solid #bae6fd;\n}\n.linkedin-badge[_ngcontent-%COMP%]:hover { \n  background: #0369a1; \n  color: #ffffff;\n}\n\n\n.github-badge[_ngcontent-%COMP%] { \n  background: #f8fafc; \n  color: #0f172a; \n  border: 1px solid #cbd5e1; \n}\n.github-badge[_ngcontent-%COMP%]:hover { \n  background: #0f172a; \n  color: #ffffff;\n  border-color: #0f172a;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVjcnVpdGVyL2F0cy1waXBlbGluZS9hdHMtcGlwZWxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQSxrRkFBa0Y7QUFDbEY7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsMkJBQTJCLEVBQUUscURBQXFEO0FBQ3BGOztBQUVBLGlFQUFpRTtBQUNqRTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7O0VBRVQsdUNBQXVDO0VBQ3ZDLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQSx1RUFBdUU7QUFDdkU7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBLGtDQUFrQztBQUNsQztFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixzQ0FBc0M7RUFDdEMsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNkNBQTZDO0VBQzdDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUEsZ0NBQWdDLDBCQUEwQixFQUFFO0FBQzVELCtCQUErQiwwQkFBMEIsRUFBRTs7QUFFM0QsMkNBQTJDO0FBQzNDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBLCtFQUErRTtBQUMvRSw4RUFBOEU7QUFDOUUsbUZBQW1GO0FBQ25GO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEtBQUssc0RBQXNEO0VBQ2xGLGNBQWM7RUFDZCx1QkFBdUIsS0FBSywrQ0FBK0M7RUFDM0UsZ0JBQWdCLFlBQVksMENBQTBDO0VBQ3RFLDRDQUE0QztFQUM1QyxnQkFBZ0IsWUFBWSw4REFBOEQ7QUFDNUY7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGtDQUFrQztFQUNsQyw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLDRCQUE0QixFQUFFLCtEQUErRDtBQUMvRjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTyxVQUFVLEVBQUUsMEJBQTBCLEVBQUU7RUFDL0MsS0FBSyxVQUFVLEVBQUUsd0JBQXdCLEVBQUU7QUFDN0M7QUFDQTs7K0VBRStFOztBQUUvRSx3RUFBd0U7QUFDeEU7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBLDBEQUEwRDtBQUMxRDtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLHlDQUF5QztBQUMzQzs7QUFFQSxtREFBbUQ7QUFDbkQ7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUEsaURBQWlEO0FBQ2pEO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiLmF0cy1jb250YWluZXIgeyBcclxuICBwYWRkaW5nLXRvcDogMTBweDsgXHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycyBlYXNlLW91dDsgXHJcbn1cclxuXHJcbi5hdHMtY2FyZCB7IFxyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7IFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7IFxyXG4gIHBhZGRpbmc6IDMwcHg7IFxyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMDIpOyBcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHsgXHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgXHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciBoMyB7IFxyXG4gIG1hcmdpbjogMCAwIDZweCAwOyBcclxuICBjb2xvcjogIzBmMTcyYTsgXHJcbiAgZm9udC1zaXplOiAyMHB4OyBcclxuICBmb250LXdlaWdodDogNzAwOyBcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICBnYXA6IDEwcHg7IFxyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIgaDMgaSB7IFxyXG4gIGNvbG9yOiAjMGVhNWU5OyBcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHAgeyBcclxuICBtYXJnaW46IDA7IFxyXG4gIGNvbG9yOiAjNjQ3NDhiOyBcclxuICBmb250LXNpemU6IDE0cHg7IFxyXG59XHJcblxyXG4vKiDDsMKfwprCgCBGSVggOiBMYSBncmlsbGUgcHJlbmQgdG91dGUgbGEgaGF1dGV1ciBkaXNwb25pYmxlIGRlIGwnw4PCqWNyYW4gc2FucyBkw4PCqWJvcmRlciAqL1xyXG4ucGlwZWxpbmUtZ3JpZCB7IFxyXG4gIGRpc3BsYXk6IGdyaWQ7IFxyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7IFxyXG4gIGdhcDogMjBweDsgXHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIyMHB4KTsgLyogUydhZGFwdGUgZHluYW1pcXVlbWVudCDDg8KgIGxhIHRhaWxsZSBkZSBsYSBmZW7Dg8KqdHJlICovXHJcbn1cclxuXHJcbi8qIMOwwp/CmsKAIEZJWCBDT0xPTk5FIDogRGV2aWVudCB1bmUgem9uZSBkZSBkw4PCqWZpbGVtZW50IGluZMODwqlwZW5kYW50ZSAqL1xyXG4ucGlwZWxpbmUtY29sdW1uIHsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYzsgXHJcbiAgYm9yZGVyLXJhZGl1czogOHB4OyBcclxuICBwYWRkaW5nOiAxNXB4OyBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyBcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICBnYXA6IDEycHg7IFxyXG4gIFxyXG4gIC8qIFpvbmUgZGUgZMODwqlmaWxlbWVudCBpbnRlcm5lIG1hZ2lxdWUgKi9cclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87IFxyXG59XHJcbi8qIE9wdGlvbm5lbCA6IFJlbmRyZSBsYSBiYXJyZSBkZSBkw4PCqWZpbGVtZW50IHRyw4PCqHMgZGlzY3LDg8KodGUgZXQgbW9kZXJuZSAqL1xyXG4ucGlwZWxpbmUtY29sdW1uOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDZweDtcclxufVxyXG4ucGlwZWxpbmUtY29sdW1uOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnBpcGVsaW5lLWNvbHVtbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNjYmQ1ZTE7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5waXBlbGluZS1jb2x1bW46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjOTRhM2I4O1xyXG59XHJcblxyXG4uY29sdW1uLWhlYWRlciB7IFxyXG4gIGZvbnQtc2l6ZTogMTNweDsgXHJcbiAgZm9udC13ZWlnaHQ6IDcwMDsgXHJcbiAgY29sb3I6ICM0NzU1Njk7IFxyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IFxyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDsgXHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7IFxyXG59XHJcblxyXG4uY29sdW1uLWhlYWRlciAuY291bnQgeyBcclxuICBiYWNrZ3JvdW5kOiAjY2JkNWUxOyBcclxuICBjb2xvcjogIzMzNDE1NTsgXHJcbiAgZm9udC1zaXplOiAxMXB4OyBcclxuICBwYWRkaW5nOiAycHggNnB4OyBcclxuICBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxufVxyXG5cclxuLyogQ0FSVEVTIENBTkRJREFUUyBJTlRFUkFDVElWRVMgKi9cclxuLmNhbmRpZGF0ZS1pdGVtIHsgXHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjsgXHJcbiAgcGFkZGluZzogMTZweDsgXHJcbiAgYm9yZGVyLXJhZGl1czogNnB4OyBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyBcclxuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjAyKTsgXHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMGVhNWU5OyBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5jYW5kaWRhdGUtaXRlbTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxNSwgMjMsIDQyLCAwLjA2KTtcclxuICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XHJcbn1cclxuXHJcbi5jYW5kaWRhdGUtaXRlbSBoNSB7IFxyXG4gIG1hcmdpbjogMCAwIDRweCAwOyBcclxuICBjb2xvcjogIzBmMTcyYTsgXHJcbiAgZm9udC1zaXplOiAxNHB4OyBcclxuICBmb250LXdlaWdodDogNjAwOyBcclxufVxyXG5cclxuLmNhbmRpZGF0ZS1pdGVtIHAgeyBcclxuICBtYXJnaW46IDAgMCA4cHggMDsgXHJcbiAgY29sb3I6ICM2NDc0OGI7IFxyXG4gIGZvbnQtc2l6ZTogMTJweDsgXHJcbn1cclxuXHJcbi5jYW5kaWRhdGUtaXRlbSAubG9jYXRpb24geyBcclxuICBmb250LXNpemU6IDExcHg7IFxyXG4gIGNvbG9yOiAjOTRhM2I4OyBcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICBnYXA6IDRweDsgXHJcbn1cclxuXHJcbi5jYW5kaWRhdGUtaXRlbS5ib3JkZXItb3JhbmdlIHsgYm9yZGVyLWxlZnQtY29sb3I6ICNlYTU4MGM7IH1cclxuLmNhbmRpZGF0ZS1pdGVtLmJvcmRlci1ncmVlbiB7IGJvcmRlci1sZWZ0LWNvbG9yOiAjMjJjNTVlOyB9XHJcblxyXG4vKiDDsMKfwozCnyBTVFlMRSBJTkTDg8KJUEVOREFOVCBQT1VSIENPTE9OTkUgVklERSAqL1xyXG4uZW1wdHktcGxhY2Vob2xkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgI2UyZThmMDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBjb2xvcjogIzk0YTNiODtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4uZW1wdHktcGxhY2Vob2xkZXIgaSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBjb2xvcjogI2NiZDVlMTtcclxufVxyXG5cclxuLmVtcHR5LXBsYWNlaG9sZGVyIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKiDDsMKfwozCnyBJTlRFUkZBQ0UgTU9EQUxFIFBSRU1JVU0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC0tPiAqL1xyXG4ubW9kYWwtb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC40KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogMjAwMDtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICBhbmltYXRpb246IGZhZGVJbiAwLjE1cyBlYXNlLW91dDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMjhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHdpZHRoOiA2NDBweCAhaW1wb3J0YW50OyAgICAvKiBMYWlzc2UgZGUgbGEgcGxhY2UgcG91ciBsZXMgNSBib3V0b25zIGPDg8K0dGUgw4PCoCBjw4PCtHRlICovXHJcbiAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7ICAgIC8qIMOwwp/ChsKVIEFKT1VUIDogTGEgYm/Dg8KudGUgZ3JhbmRpdCBzZWxvbiBsZSB0ZXh0ZSAqL1xyXG4gIG1heC1oZWlnaHQ6IDkwdmg7ICAgICAgICAgICAvKiBTw4PCqWN1cml0w4PCqSBwb3VyIG5lIHBhcyBkw4PCqXBhc3NlciBsJ8ODwqljcmFuICovXHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDI1cHggLTVweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgb3ZlcmZsb3cteTogYXV0bzsgICAgICAgICAgIC8qIEFqb3V0ZSB1biBkw4PCqWZpbGVtZW50IHByb3ByZSBzaSBsZSByw4PCqXN1bcODwqkgSUEgZXN0IHRyw4PCqHMgbG9uZyAqL1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIgaDMge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIgaDMgaSB7XHJcbiAgY29sb3I6ICMwZWE1ZTk7XHJcbn1cclxuXHJcbi5jbG9zZS1idG4ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBjb2xvcjogIzk0YTNiODtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi5jbG9zZS1idG46aG92ZXIge1xyXG4gIGNvbG9yOiAjNDc1NTY5O1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLmluZm8tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG59XHJcblxyXG4uaW5mby1sYWJlbCB7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5pbmZvLXZhbHVlIHtcclxuICBjb2xvcjogIzMzNDE1NTtcclxufVxyXG5cclxuLmluZm8tdmFsdWUudGV4dC1zbGF0ZSB7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnN1bW1hcnktYm94IHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwZWE1ZTk7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXRpdGxlIHtcclxuICBjb2xvcjogIzBmMTcyYTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXRleHQge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzQ3NTU2OTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbiAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGdhcDogMTBweCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7IC8qIMOwwp/Cn8KiIE1vZGlmacODwqkgOiBFbXDDg8KqY2hlIGxlIGJvdXRvbiBGZXJtZXIgZGUgc2F1dGVyIMODwqAgbGEgbGlnbmUgKi9cclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7XHJcbiAgY29sb3I6ICM0NzU1Njk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXM7XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTJlOGYwO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IFxyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTsgfSBcclxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSBcclxufVxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICDDsMKfwobClSBBSk9VVFMgRVhDTFVTSUZTIFBPVVIgTEVTIE5PVVZFQVVYIENIQU1QUyBQUk9TIERVIENBTkRJREFUIChBVFMgTU9EQUxFKVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyogQmFkZ2UgZGUgc2l0dWF0aW9uIHByb2Zlc3Npb25uZWxsZSAoZXg6IEVuIHBvc3RlLCBSZWNoZXJjaGUgYWN0aXZlKSAqL1xyXG4uYmFkZ2Utc3RhdHVzLXByby1hdHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGZkZjQ7IFxyXG4gIGNvbG9yOiAjMTY2NTM0OyBcclxuICBwYWRkaW5nOiAzcHggMTBweDsgXHJcbiAgYm9yZGVyLXJhZGl1czogNnB4OyBcclxuICBmb250LXNpemU6IDEyLjVweDsgXHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZmNlNztcclxufVxyXG5cclxuLyogU3R5bGUgZGUgYmFzZSB1bmlmacODwqkgcG91ciBsZXMgYm91dG9ucyByw4PCqXNlYXV4IHNvY2lhdXggKi9cclxuLnNvY2lhbC1iYWRnZS1idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICBnYXA6IDZweDsgXHJcbiAgcGFkZGluZzogNXB4IDEycHg7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDZweDsgXHJcbiAgZm9udC1zaXplOiAxMi41cHg7IFxyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7IFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG5cclxuLyogU3R5bGUgc3DDg8KpY2lmaXF1ZSBMaW5rZWRJbiBhdmVjIGVmZmV0IGF1IHN1cnZvbCAqL1xyXG4ubGlua2VkaW4tYmFkZ2UgeyBcclxuICBiYWNrZ3JvdW5kOiAjZTBmMmZlOyBcclxuICBjb2xvcjogIzAzNjlhMTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYmFlNmZkO1xyXG59XHJcbi5saW5rZWRpbi1iYWRnZTpob3ZlciB7IFxyXG4gIGJhY2tncm91bmQ6ICMwMzY5YTE7IFxyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4vKiBTdHlsZSBzcMODwqljaWZpcXVlIEdpdEh1YiBhdmVjIGVmZmV0IGF1IHN1cnZvbCAqL1xyXG4uZ2l0aHViLWJhZGdlIHsgXHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYzsgXHJcbiAgY29sb3I6ICMwZjE3MmE7IFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7IFxyXG59XHJcbi5naXRodWItYmFkZ2U6aG92ZXIgeyBcclxuICBiYWNrZ3JvdW5kOiAjMGYxNzJhOyBcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItY29sb3I6ICMwZjE3MmE7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }

}]);
//# sourceMappingURL=src_app_features_recruiter_ats-pipeline_ats-pipeline_component_ts.js.map