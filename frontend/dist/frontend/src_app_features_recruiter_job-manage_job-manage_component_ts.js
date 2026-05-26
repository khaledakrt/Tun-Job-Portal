"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_features_recruiter_job-manage_job-manage_component_ts"],{

/***/ 3
/*!***********************************************************************!*\
  !*** ./src/app/features/recruiter/job-manage/job-manage.component.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobManageComponent: () => (/* binding */ JobManageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ 5312);
/* harmony import */ var _core_services_quiz_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/quiz.service */ 7101);
/* harmony import */ var _shared_components_quiz_builder_quiz_builder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/quiz-builder/quiz-builder.component */ 9205);
/* harmony import */ var _shared_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/constants/quiz.constants */ 3692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 6124);











const _forTrack0 = ($index, $item) => $item.id;
function JobManageComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Synchronisation avec la base de donn\u00E9es... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function JobManageComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Aucune annonce ne correspond \u00E0 votre recherche. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function JobManageComponent_For_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td")(11, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td")(14, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "td")(17, "div", 36)(18, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobManageComponent_For_73_Template_button_click_18_listener() {
      const job_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onManageQuiz(job_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobManageComponent_For_73_Template_button_click_20_listener() {
      const job_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onViewJob(job_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobManageComponent_For_73_Template_button_click_22_listener() {
      const job_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onToggleStatus(job_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobManageComponent_For_73_Template_button_click_24_listener() {
      const job_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onDeleteJob(job_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const job_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](job_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](job_r2.contract_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](job_r2.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", job_r2.application_count || 0, " ", (job_r2.application_count || 0) <= 1 ? "profil" : "profils", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", job_r2.status === "disponible" || job_r2.status === "Actif" ? "bg-green" : "bg-gray");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", job_r2.status === "disponible" || job_r2.status === "Actif" ? "Actif" : "Masqu\u00E9", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", job_r2.has_quiz ? job_r2.quiz_is_active ? "bg-green" : "bg-gray" : "bg-gray");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.getQuizBadge(job_r2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", job_r2.status === "disponible" || job_r2.status === "Actif" ? "bi-eye-slash-fill" : "bi-check-circle-fill");
  }
}
function JobManageComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 26)(1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 46)(7, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobManageComponent_Conditional_74_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.goToPage(ctx_r2.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, " Pr\u00E9c\u00E9dent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobManageComponent_Conditional_74_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.goToPage(ctx_r2.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " Suivant ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" sur ", ctx_r2.totalPages, " (", ctx_r2.filteredJobs.length, " offres au total) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r2.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
  }
}
function JobManageComponent_Conditional_75_Conditional_48_For_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", skill_r6, " ");
  }
}
function JobManageComponent_Conditional_75_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 67)(1, "h4", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Comp\u00E9tences cl\u00E9s & Technologies");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 70)(5, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](6, JobManageComponent_Conditional_75_Conditional_48_For_7_Template, 3, 1, "span", 75, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx_r2.getJobSkillsArray(ctx_r2.selectedJob.skills_desc));
  }
}
function JobManageComponent_Conditional_75_Conditional_49_For_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lang_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", lang_r7, " ");
  }
}
function JobManageComponent_Conditional_75_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 67)(1, "h4", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Langues exig\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 70)(5, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](6, JobManageComponent_Conditional_75_Conditional_49_For_7_Template, 3, 1, "span", 78, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx_r2.getJobLanguagesArray(ctx_r2.selectedJob.languages_desc));
  }
}
function JobManageComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobManageComponent_Conditional_75_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onCloseModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobManageComponent_Conditional_75_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 52)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobManageComponent_Conditional_75_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onCloseModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 56)(9, "div", 57)(10, "div", 58)(11, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, " Contrat");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "strong", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 58)(17, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, " Lieu");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "strong", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 58)(23, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, " Salaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "strong", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 58)(29, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](30, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, " Exp\u00E9rience");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "strong", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 67)(35, "h4", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](36, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, " Missions principales");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 70)(39, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 67)(42, "h4", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](43, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, " Profil recherch\u00E9 & Exigences");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 70)(46, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](48, JobManageComponent_Conditional_75_Conditional_48_Template, 8, 0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](49, JobManageComponent_Conditional_75_Conditional_49_Template, 8, 0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedJob.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.selectedJob.contract_type || "CDI");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx_r2.selectedJob.location, " (", ctx_r2.selectedJob.workplace_type || "Pr\u00E9sentiel", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.selectedJob.salary || "Non sp\u00E9cifi\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.selectedJob.experience_level || "Tous niveaux");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.selectedJob.missions_desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.selectedJob.profile_desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx_r2.selectedJob.skills_desc ? 48 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx_r2.selectedJob.languages_desc ? 49 : -1);
  }
}
function JobManageComponent_Conditional_76_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.quizMessage);
  }
}
function JobManageComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobManageComponent_Conditional_76_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onCloseQuizModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobManageComponent_Conditional_76_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 52)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobManageComponent_Conditional_76_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onCloseQuizModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](9, JobManageComponent_Conditional_76_Conditional_9_Template, 2, 1, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "app-quiz-builder", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("enabledChange", function JobManageComponent_Conditional_76_Template_app_quiz_builder_enabledChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onQuizEnabledChange($event));
    })("quizTitleChange", function JobManageComponent_Conditional_76_Template_app_quiz_builder_quizTitleChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.quizTitle = $event);
    })("questionsChange", function JobManageComponent_Conditional_76_Template_app_quiz_builder_questionsChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.quizQuestions = $event);
    })("save", function JobManageComponent_Conditional_76_Template_app_quiz_builder_save_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.saveQuiz());
    })("toggleVisibility", function JobManageComponent_Conditional_76_Template_app_quiz_builder_toggleVisibility_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.toggleQuizVisibility($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Quiz \u2014 ", ctx_r2.quizManageJob.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx_r2.quizMessage ? 9 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("enabled", ctx_r2.hasQuizEdit)("quizTitle", ctx_r2.quizTitle)("questions", ctx_r2.quizQuestions)("isActive", ctx_r2.quizIsActive)("showManageActions", true)("isSaving", ctx_r2.isSavingQuiz);
  }
}
class JobManageComponent {
  cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient);
  quizService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_6__.QuizService);
  jobsList = [];
  isLoading = true;
  selectedJob = null;
  quizManageJob = null;
  hasQuizEdit = false;
  quizTitle = 'Quiz de présélection';
  quizQuestions = [];
  quizIsActive = true;
  isSavingQuiz = false;
  quizMessage = '';
  recruiterStats = {
    totalApplications: 0,
    todayApplications: 0,
    plannedInterviews: 0,
    conversionRate: 0,
    conversionEvolution: 0
  };
  searchText = '';
  currentPage = 1;
  pageSize = 8;
  ngOnInit() {
    this.fetchRecruiterJobs();
    this.fetchDashboardStats();
  }
  fetchRecruiterJobs() {
    this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiUrl}/recruiter/jobs/list`).subscribe({
      next: data => {
        this.jobsList = Array.isArray(data) ? data : [];
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  fetchDashboardStats() {
    this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiUrl}/recruiter/stats`).subscribe({
      next: data => {
        this.recruiterStats.totalApplications = data.applicationsCount || 0;
        this.recruiterStats.plannedInterviews = data.interviewsCount || 0;
        this.recruiterStats.conversionRate = data.conversionRate || 0;
        this.cdr.detectChanges();
      }
    });
  }
  get filteredJobs() {
    return this.jobsList.filter(job => job.title.toLowerCase().includes(this.searchText.toLowerCase()) || job.location.toLowerCase().includes(this.searchText.toLowerCase()));
  }
  get paginatedJobs() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredJobs.slice(start, start + this.pageSize);
  }
  get totalPages() {
    return Math.ceil(this.filteredJobs.length / this.pageSize) || 1;
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.cdr.detectChanges();
    }
  }
  onSearchChange() {
    this.currentPage = 1;
  }
  onViewJob(job) {
    this.selectedJob = job;
    this.cdr.detectChanges();
  }
  onCloseModal() {
    this.selectedJob = null;
    this.cdr.detectChanges();
  }
  onManageQuiz(job) {
    this.quizManageJob = job;
    this.quizMessage = '';
    this.hasQuizEdit = !!job.has_quiz;
    this.quizIsActive = job.quiz_is_active !== 0 && job.quiz_is_active !== false;
    this.quizTitle = job.quiz_title || 'Quiz de présélection';
    this.quizQuestions = [];
    if (job.has_quiz) {
      this.quizService.getRecruiterQuiz(job.id).subscribe({
        next: quiz => {
          this.quizTitle = quiz.title || this.quizTitle;
          this.quizIsActive = quiz.is_active !== 0;
          this.quizQuestions = (quiz.questions || []).map(q => ({
            question_text: q.question_text,
            question_type: 'single',
            choices: (q.choices || []).slice(0, 3).map(c => ({
              choice_text: c.choice_text,
              is_correct: !!c.is_correct
            }))
          }));
          while (this.quizQuestions.length < 1 && this.hasQuizEdit) {
            this.quizQuestions.push((0,_shared_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_8__.createEmptyQuestion)());
          }
          this.cdr.detectChanges();
        },
        error: () => {
          this.quizQuestions = [(0,_shared_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_8__.createEmptyQuestion)()];
          this.cdr.detectChanges();
        }
      });
    } else {
      this.quizQuestions = [(0,_shared_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_8__.createEmptyQuestion)()];
      this.cdr.detectChanges();
    }
  }
  onCloseQuizModal() {
    this.quizManageJob = null;
    this.cdr.detectChanges();
  }
  onQuizEnabledChange(enabled) {
    this.hasQuizEdit = enabled;
    if (enabled && !this.quizQuestions.length) {
      this.quizQuestions = [(0,_shared_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_8__.createEmptyQuestion)()];
    }
    this.cdr.detectChanges();
  }
  saveQuiz() {
    if (!this.quizManageJob) return;
    if (!this.hasQuizEdit) {
      if (this.quizManageJob.has_quiz) {
        this.quizService.deleteQuizForJob(this.quizManageJob.id).subscribe({
          next: () => {
            this.quizMessage = 'Quiz supprimé.';
            this.fetchRecruiterJobs();
            this.onCloseQuizModal();
          }
        });
      }
      return;
    }
    const err = this.validateQuiz();
    if (err) {
      this.quizMessage = err;
      this.cdr.detectChanges();
      return;
    }
    this.isSavingQuiz = true;
    const payload = {
      title: this.quizTitle.trim(),
      questions: this.quizQuestions.map(q => ({
        question_text: q.question_text.trim(),
        question_type: 'single',
        choices: q.choices.map(c => ({
          choice_text: c.choice_text.trim(),
          is_correct: !!c.is_correct
        }))
      }))
    };
    this.quizService.saveQuizForJob(this.quizManageJob.id, payload).subscribe({
      next: () => {
        this.isSavingQuiz = false;
        this.quizMessage = 'Quiz enregistré.';
        this.fetchRecruiterJobs();
        this.cdr.detectChanges();
        setTimeout(() => this.onCloseQuizModal(), 1200);
      },
      error: e => {
        this.isSavingQuiz = false;
        this.quizMessage = e.error?.message || 'Erreur enregistrement.';
        this.cdr.detectChanges();
      }
    });
  }
  toggleQuizVisibility(visible) {
    if (!this.quizManageJob?.has_quiz) return;
    this.quizService.setQuizVisibility(this.quizManageJob.id, visible).subscribe({
      next: res => {
        this.quizIsActive = visible;
        this.quizManageJob.quiz_is_active = visible ? 1 : 0;
        this.quizMessage = res.message;
        this.fetchRecruiterJobs();
        this.cdr.detectChanges();
      },
      error: e => {
        this.quizMessage = e.error?.message || 'Erreur.';
        this.cdr.detectChanges();
      }
    });
  }
  validateQuiz() {
    if (!this.quizQuestions.length) return 'Ajoutez au moins une question.';
    for (let i = 0; i < this.quizQuestions.length; i++) {
      const q = this.quizQuestions[i];
      if (!q.question_text.trim()) return `Question ${i + 1} vide.`;
      if (q.choices.filter(c => c.choice_text.trim()).length < 3) {
        return `Question ${i + 1} : 3 réponses requises.`;
      }
      if (!q.choices.some(c => c.is_correct)) {
        return `Question ${i + 1} : indiquez la bonne réponse.`;
      }
    }
    return null;
  }
  onToggleStatus(job) {
    this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiUrl}/recruiter/jobs/toggle-status`, {
      jobId: job.id
    }).subscribe({
      next: () => {
        job.status = job.status === 'disponible' ? 'fermé' : 'disponible';
        this.cdr.detectChanges();
      },
      error: () => alert('Erreur statut.')
    });
  }
  onDeleteJob(jobId) {
    if (!confirm('Supprimer cette annonce ?')) return;
    this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiUrl}/recruiter/jobs/delete/${jobId}`).subscribe({
      next: () => {
        this.jobsList = this.jobsList.filter(j => j.id !== jobId);
        this.currentPage = 1;
        this.cdr.detectChanges();
      }
    });
  }
  getJobSkillsArray(skillsText) {
    if (!skillsText) return [];
    return skillsText.split(',').map(s => s.trim()).filter(Boolean);
  }
  getJobLanguagesArray(langText) {
    if (!langText) return [];
    return langText.split(',').map(s => s.trim()).filter(Boolean);
  }
  getQuizBadge(job) {
    if (!job.has_quiz) return 'Aucun';
    return job.quiz_is_active ? 'Actif' : 'Masqué';
  }
  static ɵfac = function JobManageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || JobManageComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: JobManageComponent,
    selectors: [["app-job-manage"]],
    decls: 77,
    vars: 10,
    consts: [[1, "manage-container"], [1, "stats-row"], [1, "stat-card"], [1, "stat-content"], [1, "stat-label"], [1, "stat-number"], [1, "stat-sub", "green"], [1, "stat-icon", "blue-bg"], [1, "bi", "bi-briefcase"], [1, "stat-icon", "green-bg"], [1, "bi", "bi-file-earmark-person"], [1, "stat-sub", "gray"], [1, "stat-icon", "orange-bg"], [1, "bi", "bi-calendar-event"], [1, "stat-icon", "purple-bg"], [1, "bi", "bi-pie-chart"], [1, "manage-card"], [1, "card-header-flex"], [1, "card-header-left"], [1, "bi", "bi-briefcase-fill"], [1, "search-box-container"], [1, "bi", "bi-search", "search-icon"], ["type", "text", "placeholder", "Rechercher...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "table-wrapper"], [1, "jobs-table"], [2, "text-align", "center"], [1, "pagination-container"], [1, "modal-overlay"], ["colspan", "7", 2, "text-align", "center", "padding", "25px", "color", "#64748b", "font-weight", "500"], [1, "bi", "bi-arrow-clockwise", 2, "display", "inline-block", "animation", "spin 1s linear infinite", "margin-right", "8px"], ["colspan", "7", 2, "text-align", "center", "padding", "35px", "color", "#64748b"], [1, "bi", "bi-folder-x", 2, "font-size", "26px", "display", "block", "margin-bottom", "6px", "color", "#cbd5e1"], [1, "job-title"], [1, "candidate-count"], [1, "bi", "bi-people-fill"], [1, "status-badge", 3, "ngClass"], [1, "actions-cell"], ["title", "G\u00E9rer le quiz", 1, "btn-action", "btn-view", 2, "color", "#7c3aed", 3, "click"], [1, "bi", "bi-patch-question-fill"], ["title", "Consulter", 1, "btn-action", "btn-view", 3, "click"], [1, "bi", "bi-eye-fill"], ["title", "Masquer/Afficher", 1, "btn-action", "btn-toggle", 3, "click"], [1, "bi", 3, "ngClass"], ["title", "Supprimer", 1, "btn-action", "btn-delete", 3, "click"], [1, "bi", "bi-trash3-fill"], [1, "pagination-info"], [1, "pagination-buttons"], [1, "btn-page-nav", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], [1, "bi", "bi-chevron-right"], [1, "modal-overlay", 3, "click"], [1, "modal-card", 3, "click"], [1, "modal-header"], [1, "bi", "bi-file-earmark-text-fill"], [1, "btn-close-modal", 3, "click"], [1, "bi", "bi-x-lg"], [1, "modal-body"], [1, "job-meta-header-grid"], [1, "meta-card-item"], [1, "meta-card-label"], [1, "bi", "bi-file-earmark-text"], [1, "meta-card-value", "badge-contract-premium"], [1, "bi", "bi-geo-alt"], [1, "meta-card-value"], [1, "bi", "bi-cash-stack"], [1, "meta-card-value", "value-salary"], [1, "bi", "bi-mortarboard"], [1, "job-display-section"], [1, "section-display-title"], [1, "bi", "bi-list-task"], [1, "display-text-card"], [1, "formatted-pre-line"], [1, "bi", "bi-person-badge-fill"], [1, "bi", "bi-tags-fill"], [1, "skills-badge-display-grid"], [1, "premium-skill-tag"], [1, "bi", "bi-check2"], [1, "bi", "bi-translate"], [1, "premium-lang-tag"], [1, "bi", "bi-globe"], [1, "modal-card", 2, "max-width", "720px", "max-height", "90vh", "overflow-y", "auto", 3, "click"], [1, "bi", "bi-patch-question-fill", 2, "color", "#7c3aed"], [2, "font-size", "13px", "color", "#0369a1", "background", "#e0f2fe", "padding", "10px", "border-radius", "8px"], [3, "enabledChange", "quizTitleChange", "questionsChange", "save", "toggleVisibility", "enabled", "quizTitle", "questions", "isActive", "showManageActions", "isSaving"]],
    template: function JobManageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "OFFRES ACTIVES");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "+1 cette semaine");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 2)(13, "div", 3)(14, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "CANDIDATURES");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "+8 aujourd'hui");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 2)(23, "div", 3)(24, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "ENTRETIENS");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Planifi\u00E9s ce mois");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](31, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 2)(33, "div", 3)(34, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "TAUX DE CONVERSION");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "+-2.4% vs mois max");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](41, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 16)(43, "div", 17)(44, "div", 18)(45, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](46, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, " Vos Annonces en Ligne");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](49, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function JobManageComponent_Template_input_ngModelChange_50_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function JobManageComponent_Template_input_ngModelChange_50_listener() {
          return ctx.onSearchChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 23)(52, "table", 24)(53, "thead")(54, "tr")(55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "Intitul\u00E9 du Poste");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "Type de Contrat");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "Localisation");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "Candidatures Re\u00E7ues");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "Statut");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, "Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](70, JobManageComponent_Conditional_70_Template, 4, 0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](71, JobManageComponent_Conditional_71_Template, 4, 0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](72, JobManageComponent_For_73_Template, 26, 10, "tr", null, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](74, JobManageComponent_Conditional_74_Template, 13, 5, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](75, JobManageComponent_Conditional_75_Template, 50, 10, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](76, JobManageComponent_Conditional_76_Template, 11, 8, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.jobsList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.recruiterStats.totalApplications);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.recruiterStats.plannedInterviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx.recruiterStats.conversionRate, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.isLoading ? 70 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](!ctx.isLoading && ctx.filteredJobs.length === 0 ? 71 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx.paginatedJobs);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.totalPages > 1 ? 74 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.selectedJob ? 75 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.quizManageJob ? 76 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _shared_components_quiz_builder_quiz_builder_component__WEBPACK_IMPORTED_MODULE_7__.QuizBuilderComponent],
    styles: ["\n\n\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n  width: 100%;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);\n}\n\n.stat-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.stat-number[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 4px 0;\n}\n\n.stat-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.stat-sub.green[_ngcontent-%COMP%] { color: #16a34a; }\n.stat-sub.gray[_ngcontent-%COMP%] { color: #64748b; }\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n\n.blue-bg[_ngcontent-%COMP%] { background: #f0f9ff; color: #0ea5e9; }\n.green-bg[_ngcontent-%COMP%] { background: #f0fdf4; color: #16a34a; }\n.orange-bg[_ngcontent-%COMP%] { background: #fff7ed; color: #ea580c; }\n.purple-bg[_ngcontent-%COMP%] { background: #faf5ff; color: #a855f7; }\n\n\n\n\n.manage-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.card-header-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  gap: 16px;\n}\n\n.card-header-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.card-header-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0ea5e9;\n}\n\n.search-box-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 280px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 14px;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px 8px 36px;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  font-size: 13.5px;\n  outline: none;\n  box-sizing: border-box;\n  transition: all 0.2s;\n}\n\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #0ea5e9;\n  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.15);\n}\n\n\n\n\n.table-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n\n.jobs-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n}\n\n.jobs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 14px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.jobs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  font-size: 13.5px;\n  color: #334155;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n\n.jobs-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n\n.job-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n}\n\n.candidate-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #475569;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.candidate-count[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n\n\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.bg-green[_ngcontent-%COMP%] { background: #f0fdf4; color: #16a34a; border: 1px solid #bbf7d0; }\n.bg-gray[_ngcontent-%COMP%] { background: #f1f5f9; color: #64748b; border: 1px solid #e2e8f0; }\n\n\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n\n.btn-action[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.15s;\n}\n\n.btn-view[_ngcontent-%COMP%] { color: #0ea5e9; }\n.btn-view[_ngcontent-%COMP%]:hover { background: #f0f9ff; border-color: #0ea5e9; }\n\n.btn-toggle[_ngcontent-%COMP%] { color: #64748b; }\n.btn-toggle[_ngcontent-%COMP%]:hover { background: #f1f5f9; border-color: #64748b; }\n\n.btn-delete[_ngcontent-%COMP%] { color: #ef4444; }\n.btn-delete[_ngcontent-%COMP%]:hover { background: #fef2f2; border-color: #ef4444; }\n\n\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 18px;\n  padding-top: 14px;\n  border-top: 1px solid #f1f5f9;\n}\n\n.pagination-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n}\n\n.pagination-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.btn-page-nav[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  padding: 6px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #334155;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.btn-page-nav[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(6px);\n          backdrop-filter: blur(6px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n}\n\n.modal-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  width: 100%;\n  max-width: 950px;\n  max-height: 88vh;\n  border-radius: 16px;\n  box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.15);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px 28px;\n  border-bottom: 1px solid #f1f5f9;\n}\n\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.btn-close-modal[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  color: #64748b;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n\n.btn-close-modal[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #ef4444;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 28px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  box-sizing: border-box;\n}\n\n\n.job-meta-header-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n  width: 100%;\n}\n\n.meta-card-item[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 14px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  text-align: left;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n\n.meta-card-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.meta-card-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0ea5e9;\n  font-size: 14px;\n}\n\n.meta-card-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1e293b;\n}\n\n.badge-contract-premium[_ngcontent-%COMP%] {\n  color: #0284c7;\n  background: #f0f9ff;\n  border: 1px solid #e0f2fe;\n  padding: 2px 10px;\n  border-radius: 6px;\n  display: inline-block;\n  width: max-content;\n}\n\n.value-salary[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n\n\n.job-display-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  text-align: left;\n}\n\n.section-display-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-left: 4px solid #0ea5e9;\n  padding-left: 10px;\n}\n\n.display-text-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);\n}\n\n.formatted-pre-line[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #334155;\n  font-size: 14px;\n  line-height: 1.7;\n  white-space: pre-line;\n}\n\n\n\n\n.skills-badge-display-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.premium-skill-tag[_ngcontent-%COMP%] {\n  background-color: #f0f9ff;\n  color: #0369a1;\n  border: 1px solid #e0f2fe;\n  padding: 6px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);\n}\n\n.premium-lang-tag[_ngcontent-%COMP%] {\n  background-color: #faf5ff;\n  color: #6b21a8;\n  border: 1px solid #f3e8ff;\n  padding: 6px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVjcnVpdGVyL2pvYi1tYW5hZ2Uvam9iLW1hbmFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzsrRUFFK0U7QUFDL0U7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEsa0JBQWtCLGNBQWMsRUFBRTtBQUNsQyxpQkFBaUIsY0FBYyxFQUFFOztBQUVqQztFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUEsV0FBVyxtQkFBbUIsRUFBRSxjQUFjLEVBQUU7QUFDaEQsWUFBWSxtQkFBbUIsRUFBRSxjQUFjLEVBQUU7QUFDakQsYUFBYSxtQkFBbUIsRUFBRSxjQUFjLEVBQUU7QUFDbEQsYUFBYSxtQkFBbUIsRUFBRSxjQUFjLEVBQUU7O0FBRWxEOzsrRUFFK0U7QUFDL0U7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOENBQThDO0VBQzlDLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7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InNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIMOwwp/Ck8KKIDEuIFNFQ1RJT04gQ09NUFRFVVJTIERZTkFNSVFVRVMgKFNUQVRTKVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uc3RhdHMtcm93IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjIwcHgsIDFmcikpO1xyXG4gIGdhcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3RhdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxufVxyXG5cclxuLnN0YXQtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5zdGF0LWxhYmVsIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5cclxuLnN0YXQtbnVtYmVyIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxuICBtYXJnaW46IDRweCAwO1xyXG59XHJcblxyXG4uc3RhdC1zdWIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc3RhdC1zdWIuZ3JlZW4geyBjb2xvcjogIzE2YTM0YTsgfVxyXG4uc3RhdC1zdWIuZ3JheSB7IGNvbG9yOiAjNjQ3NDhiOyB9XHJcblxyXG4uc3RhdC1pY29uIHtcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uYmx1ZS1iZyB7IGJhY2tncm91bmQ6ICNmMGY5ZmY7IGNvbG9yOiAjMGVhNWU5OyB9XHJcbi5ncmVlbi1iZyB7IGJhY2tncm91bmQ6ICNmMGZkZjQ7IGNvbG9yOiAjMTZhMzRhOyB9XHJcbi5vcmFuZ2UtYmcgeyBiYWNrZ3JvdW5kOiAjZmZmN2VkOyBjb2xvcjogI2VhNTgwYzsgfVxyXG4ucHVycGxlLWJnIHsgYmFja2dyb3VuZDogI2ZhZjVmZjsgY29sb3I6ICNhODU1Zjc7IH1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIMOwwp/Ck8KLIDIuIENBUlRFIERVIFRBQkxFQVUgRVQgQkFSUkUgREUgUkVDSEVSQ0hFXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5tYW5hZ2UtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItbGVmdCBoMyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyLWxlZnQgaDMgaSB7XHJcbiAgY29sb3I6ICMwZWE1ZTk7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMjgwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDEycHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGNvbG9yOiAjOTRhM2I4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogOHB4IDEycHggOHB4IDM2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxMy41cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICMwZWE1ZTk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMTQsIDE2NSwgMjMzLCAwLjE1KTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgw6LCmsKZw6/CuMKPIDMuIFNUWUxJU0FUSU9OIERFIExBIFRBQkxFIERFUyBBTk5PTkNFU1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4udGFibGUtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLmpvYnMtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmpvYnMtdGFibGUgdGgge1xyXG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNDc1NTY5O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwO1xyXG59XHJcblxyXG4uam9icy10YWJsZSB0ZCB7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG4gIGNvbG9yOiAjMzM0MTU1O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5qb2JzLXRhYmxlIHRyOmhvdmVyIHRkIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG59XHJcblxyXG4uam9iLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG59XHJcblxyXG4uY2FuZGlkYXRlLWNvdW50IHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNDc1NTY5O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbn1cclxuXHJcbi5jYW5kaWRhdGUtY291bnQgaSB7XHJcbiAgY29sb3I6ICM5NGEzYjg7XHJcbn1cclxuXHJcbi8qIEJhZGdlcyBkZSBzdGF0dXQgKi9cclxuLnN0YXR1cy1iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5iZy1ncmVlbiB7IGJhY2tncm91bmQ6ICNmMGZkZjQ7IGNvbG9yOiAjMTZhMzRhOyBib3JkZXI6IDFweCBzb2xpZCAjYmJmN2QwOyB9XHJcbi5iZy1ncmF5IHsgYmFja2dyb3VuZDogI2YxZjVmOTsgY29sb3I6ICM2NDc0OGI7IGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7IH1cclxuXHJcbi8qIEFjdGlvbnMgKi9cclxuLmFjdGlvbnMtY2VsbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDhweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cztcclxufVxyXG5cclxuLmJ0bi12aWV3IHsgY29sb3I6ICMwZWE1ZTk7IH1cclxuLmJ0bi12aWV3OmhvdmVyIHsgYmFja2dyb3VuZDogI2YwZjlmZjsgYm9yZGVyLWNvbG9yOiAjMGVhNWU5OyB9XHJcblxyXG4uYnRuLXRvZ2dsZSB7IGNvbG9yOiAjNjQ3NDhiOyB9XHJcbi5idG4tdG9nZ2xlOmhvdmVyIHsgYmFja2dyb3VuZDogI2YxZjVmOTsgYm9yZGVyLWNvbG9yOiAjNjQ3NDhiOyB9XHJcblxyXG4uYnRuLWRlbGV0ZSB7IGNvbG9yOiAjZWY0NDQ0OyB9XHJcbi5idG4tZGVsZXRlOmhvdmVyIHsgYmFja2dyb3VuZDogI2ZlZjJmMjsgYm9yZGVyLWNvbG9yOiAjZWY0NDQ0OyB9XHJcblxyXG4vKiBQYWdpbmF0aW9uICovXHJcbi5wYWdpbmF0aW9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbi1pbmZvIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5idG4tcGFnZS1uYXYge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICBwYWRkaW5nOiA2cHggMTRweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMzMzQxNTU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbn1cclxuXHJcbi5idG4tcGFnZS1uYXY6ZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICDDsMKfwpXCiyA0LiBDT05URU5FVVIgTU9EQUwgUFJFTUlVTSDDg8KJTEFSR0lFIChORVcgREVTSUdOKVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4ubW9kYWwtb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUsIDIzLCA0MiwgMC42KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbn1cclxuXHJcbi5tb2RhbC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogOTUwcHg7XHJcbiAgbWF4LWhlaWdodDogODh2aDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMjVweCA1MHB4IC0xMnB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xNSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxOHB4IDI4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIgaDMge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5idG4tY2xvc2UtbW9kYWwge1xyXG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uYnRuLWNsb3NlLW1vZGFsOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmVlMmUyO1xyXG4gIGNvbG9yOiAjZWY0NDQ0O1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogMjhweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDI0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogR3JpbGxlIEhvcml6b250YWxlIGRlcyBDYXJhY3TDg8KpcmlzdGlxdWVzICovXHJcbi5qb2ItbWV0YS1oZWFkZXItZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE4MHB4LCAxZnIpKTtcclxuICBnYXA6IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tZXRhLWNhcmQtaXRlbSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMTRweCAxOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDZweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG59XHJcblxyXG4ubWV0YS1jYXJkLWxhYmVsIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbn1cclxuXHJcbi5tZXRhLWNhcmQtbGFiZWwgaSB7XHJcbiAgY29sb3I6ICMwZWE1ZTk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubWV0YS1jYXJkLXZhbHVlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzFlMjkzYjtcclxufVxyXG5cclxuLmJhZGdlLWNvbnRyYWN0LXByZW1pdW0ge1xyXG4gIGNvbG9yOiAjMDI4NGM3O1xyXG4gIGJhY2tncm91bmQ6ICNmMGY5ZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZjJmZTtcclxuICBwYWRkaW5nOiAycHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxufVxyXG5cclxuLnZhbHVlLXNhbGFyeSB7XHJcbiAgY29sb3I6ICMxNmEzNGE7XHJcbn1cclxuXHJcbi8qIEJsb2NzIFRleHR1ZWxzIE9yZ2FuaXPDg8KpcyAqL1xyXG4uam9iLWRpc3BsYXktc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2VjdGlvbi1kaXNwbGF5LXRpdGxlIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzBlYTVlOTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kaXNwbGF5LXRleHQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG59XHJcblxyXG4uZm9ybWF0dGVkLXByZS1saW5lIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICMzMzQxNTU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICDDsMKfwo7CryA1LiBERVNJR04gREVTIFRBR1MgREUgQ09NUMODwolURU5DRVMgJiBERSBMQU5HVUVTXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5za2lsbHMtYmFkZ2UtZGlzcGxheS1ncmlkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5wcmVtaXVtLXNraWxsLXRhZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjlmZjtcclxuICBjb2xvcjogIzAzNjlhMTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTBmMmZlO1xyXG4gIHBhZGRpbmc6IDZweCAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG59XHJcblxyXG4ucHJlbWl1bS1sYW5nLXRhZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjVmZjtcclxuICBjb2xvcjogIzZiMjFhODtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjNlOGZmO1xyXG4gIHBhZGRpbmc6IDZweCAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }

}]);
//# sourceMappingURL=src_app_features_recruiter_job-manage_job-manage_component_ts.js.map