"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_features_candidate_job-search_job-search_component_ts"],{

/***/ 9018
/*!******************************************************!*\
  !*** ./src/app/core/services/application.service.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApplicationService: () => (/* binding */ ApplicationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 5312);




class ApplicationService {
  http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
  api = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/candidate`;
  applyToJob(jobId, quizAnswers = []) {
    return this.http.post(`${this.api}/apply`, {
      job_id: jobId,
      quiz_answers: quizAnswers
    });
  }
  getHistory() {
    return this.http.get(`${this.api}/history`);
  }
  static ɵfac = function ApplicationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ApplicationService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ApplicationService,
    factory: ApplicationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ },

/***/ 4182
/*!***********************************************************************!*\
  !*** ./src/app/features/candidate/job-search/job-search.component.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobSearchComponent: () => (/* binding */ JobSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _core_services_application_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/application.service */ 9018);
/* harmony import */ var _core_services_quiz_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/quiz.service */ 7101);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../environments/environment */ 5312);
/* harmony import */ var _shared_components_quiz_player_quiz_player_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/quiz-player/quiz-player.component */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 6124);












const _forTrack0 = ($index, $item) => $item.id;
function JobSearchComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 21)(1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobSearchComponent_Conditional_43_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onResetFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " R\u00E9initialiser");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function JobSearchComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function JobSearchComponent_Conditional_45_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 33);
  }
  if (rf & 2) {
    const job_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", "http://localhost:3000/logos/" + job_r4.company_logo, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function JobSearchComponent_Conditional_45_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 34);
  }
}
function JobSearchComponent_Conditional_45_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Quiz ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function JobSearchComponent_Conditional_45_For_2_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " D\u00E9j\u00E0 postul\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function JobSearchComponent_Conditional_45_For_2_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobSearchComponent_Conditional_45_For_2_Conditional_33_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const job_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onOpenApplyModal(job_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Postuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function JobSearchComponent_Conditional_45_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](3, JobSearchComponent_Conditional_45_For_2_Conditional_3_Template, 1, 1, "img", 33)(4, JobSearchComponent_Conditional_45_For_2_Conditional_4_Template, 1, 0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 35)(6, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobSearchComponent_Conditional_45_For_2_Template_span_click_8_listener() {
      const job_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onViewRecruiterProfile(job_r4.recruiter_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 39)(12, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](14, JobSearchComponent_Conditional_45_For_2_Conditional_14_Template, 3, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 42)(16, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](27, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 48)(29, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobSearchComponent_Conditional_45_For_2_Template_button_click_29_listener() {
      const job_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onViewJobDetails(job_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, " Consulter");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](32, JobSearchComponent_Conditional_45_For_2_Conditional_32_Template, 3, 0, "span", 51)(33, JobSearchComponent_Conditional_45_For_2_Conditional_33_Template, 3, 0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const job_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](job_r4.company_logo ? 3 : 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](job_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", job_r4.company_name || "Entreprise Partenaire", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](job_r4.contract_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](job_r4.has_quiz ? 14 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", job_r4.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", job_r4.workplace_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", job_r4.experience_level);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](27, 10, job_r4.missions_desc, 0, 100), "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](job_r4.isAlreadyApplied ? 32 : 33);
  }
}
function JobSearchComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterCreate"](1, JobSearchComponent_Conditional_45_For_2_Template, 34, 14, "div", 30, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeater"](ctx_r1.filteredJobs);
  }
}
function JobSearchComponent_Conditional_46_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Expire le : ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](3, 1, ctx_r1.selectedJob.expires_at, "dd/MM/yyyy"), " ");
  }
}
function JobSearchComponent_Conditional_46_Conditional_40_For_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", skill_r7, " ");
  }
}
function JobSearchComponent_Conditional_46_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 75)(1, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Comp\u00E9tences cl\u00E9s & Technologies");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 78)(5, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterCreate"](6, JobSearchComponent_Conditional_46_Conditional_40_For_7_Template, 3, 1, "span", 88, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeater"](ctx_r1.getSearchJobSkillsArray(ctx_r1.selectedJob.skills_desc));
  }
}
function JobSearchComponent_Conditional_46_Conditional_41_For_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lang_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", lang_r8, " ");
  }
}
function JobSearchComponent_Conditional_46_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 75)(1, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Langues exig\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 78)(5, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterCreate"](6, JobSearchComponent_Conditional_46_Conditional_41_For_7_Template, 3, 1, "span", 91, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeater"](ctx_r1.getSearchJobLanguagesArray(ctx_r1.selectedJob.languages_desc));
  }
}
function JobSearchComponent_Conditional_46_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 75)(1, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Questionnaire de pr\u00E9s\u00E9lection");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "app-quiz-player", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("answerChange", function JobSearchComponent_Conditional_46_Conditional_42_Template_app_quiz_player_answerChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onQuizAnswerChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("quiz", ctx_r1.jobQuiz)("loading", ctx_r1.isLoadingQuiz)("answers", ctx_r1.quizAnswers);
  }
}
function JobSearchComponent_Conditional_46_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.applyError);
  }
}
function JobSearchComponent_Conditional_46_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Vous avez d\u00E9j\u00E0 postul\u00E9 \u00E0 cette offre");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function JobSearchComponent_Conditional_46_Conditional_46_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0, " Envoi en cours\u2026 ");
  }
}
function JobSearchComponent_Conditional_46_Conditional_46_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0, " Compl\u00E9tez le quiz pour postuler ");
  }
}
function JobSearchComponent_Conditional_46_Conditional_46_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0, " Envoyer ma candidature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 56);
  }
}
function JobSearchComponent_Conditional_46_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobSearchComponent_Conditional_46_Conditional_46_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.executeApplySubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](1, JobSearchComponent_Conditional_46_Conditional_46_Conditional_1_Template, 1, 0)(2, JobSearchComponent_Conditional_46_Conditional_46_Conditional_2_Template, 1, 0)(3, JobSearchComponent_Conditional_46_Conditional_46_Conditional_3_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("opacity", ctx_r1.canSubmitApply() ? "1" : "0.55");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r1.canSubmitApply() || ctx_r1.isSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx_r1.isSubmitting ? 1 : ctx_r1.selectedJob.has_quiz && !ctx_r1.canSubmitApply() ? 2 : 3);
  }
}
function JobSearchComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobSearchComponent_Conditional_46_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onCloseModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobSearchComponent_Conditional_46_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 59)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " D\u00E9tails de l'offre d'emploi");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobSearchComponent_Conditional_46_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onCloseModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 63)(9, "div", 64)(10, "div", 65)(11, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("error", function JobSearchComponent_Conditional_46_Template_img_error_11_listener($event) {
      return $event.target.src = "https://placehold.co";
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 67)(13, "h4", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobSearchComponent_Conditional_46_Template_span_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onViewRecruiterProfile(ctx_r1.selectedJob.recruiter_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 70)(19, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](25, JobSearchComponent_Conditional_46_Conditional_25_Template, 4, 4, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 75)(27, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, " Missions principales");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 78)(31, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 75)(34, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](35, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, " Profil requis & Pr\u00E9requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 78)(38, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](40, JobSearchComponent_Conditional_46_Conditional_40_Template, 8, 0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](41, JobSearchComponent_Conditional_46_Conditional_41_Template, 8, 0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](42, JobSearchComponent_Conditional_46_Conditional_42_Template, 5, 3, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](43, JobSearchComponent_Conditional_46_Conditional_43_Template, 2, 1, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](45, JobSearchComponent_Conditional_46_Conditional_45_Template, 3, 0, "span", 83)(46, JobSearchComponent_Conditional_46_Conditional_46_Template, 4, 4, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r1.selectedJob.company_logo ? "http://localhost:3000/logos/" + ctx_r1.selectedJob.company_logo : "https://placehold.co", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.selectedJob.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedJob.company_name || "Entreprise Partenaire", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedJob.contract_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedJob.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx_r1.selectedJob.expires_at ? 25 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.selectedJob.missions_desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.selectedJob.profile_desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx_r1.selectedJob.skills_desc ? 40 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx_r1.selectedJob.languages_desc ? 41 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx_r1.selectedJob.has_quiz ? 42 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx_r1.applyError ? 43 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx_r1.selectedJob.isAlreadyApplied ? 45 : 46);
  }
}
function JobSearchComponent_Conditional_47_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 33);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", "http://localhost:3000/logos/" + ctx_r1.selectedRecruiter.company_logo, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function JobSearchComponent_Conditional_47_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 100);
  }
}
function JobSearchComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 24)(1, "div", 96)(2, "div", 59)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " Fiche de l'entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobSearchComponent_Conditional_47_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onCloseRecruiterModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 63)(9, "div", 98)(10, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](11, JobSearchComponent_Conditional_47_Conditional_11_Template, 1, 1, "img", 33)(12, JobSearchComponent_Conditional_47_Conditional_12_Template, 1, 0, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 101)(14, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, " Partenaire Verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 104)(20, "div", 105)(21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, " Email :");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 105)(27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, " T\u00E9l\u00E9phone :");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 108)(33, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](34, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, " Si\u00E8ge social :");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 109)(39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "\u00C0 propos de l'entreprise :");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx_r1.selectedRecruiter.company_logo ? 11 : 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.selectedRecruiter.company_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.selectedRecruiter.email || "Non sp\u00E9cifi\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.selectedRecruiter.phone || "Non sp\u00E9cifi\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.selectedRecruiter.address || "Non sp\u00E9cifi\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.selectedRecruiter.company_bio || "Aucune description fournie par l'entreprise.");
  }
}
function JobSearchComponent_Conditional_48_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.applyError);
  }
}
function JobSearchComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobSearchComponent_Conditional_48_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.showConfirmApplyPopup = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobSearchComponent_Conditional_48_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\uD83D\uDE80");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "h4", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Confirmer votre candidature");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " Souhaitez-vous transmettre votre profil TunJob pour l'offre : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "strong", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, " ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](12, JobSearchComponent_Conditional_48_Conditional_12_Template, 2, 1, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 118)(14, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobSearchComponent_Conditional_48_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.showConfirmApplyPopup = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobSearchComponent_Conditional_48_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.executeApplySubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, " Confirmer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.jobToApply == null ? null : ctx_r1.jobToApply.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx_r1.applyError ? 12 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r1.canSubmitApply());
  }
}
function JobSearchComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobSearchComponent_Conditional_49_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.showAuthRequiredPopup = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobSearchComponent_Conditional_49_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Connexion requise");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 125)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Pour postuler \u00E0 cette offre et transmettre votre dossier aux recruteurs sur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "TunJob Portal");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, ", vous devez poss\u00E9der un compte candidat connect\u00E9.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "L'inscription est gratuite et prend moins de 2 minutes !");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 127)(15, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobSearchComponent_Conditional_49_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.showAuthRequiredPopup = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, " Plus tard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JobSearchComponent_Conditional_49_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.goToLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, " Se connecter / S'inscrire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
}
class JobSearchComponent {
  cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
  http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient);
  applicationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_application_service__WEBPACK_IMPORTED_MODULE_6__.ApplicationService);
  quizService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_quiz_service__WEBPACK_IMPORTED_MODULE_7__.QuizService);
  allJobs = [];
  isLoading = true;
  selectedJob = null;
  selectedRecruiter = null;
  showConfirmApplyPopup = false;
  jobToApply = null;
  showAuthRequiredPopup = false;
  jobQuiz = null;
  quizAnswers = {};
  isLoadingQuiz = false;
  applyError = '';
  isSubmitting = false;
  searchFilters = {
    title: '',
    location: '',
    experience: '',
    contract: ''
  };
  ngOnInit() {
    this.fetchAvailableJobs();
  }
  fetchAvailableJobs() {
    const token = localStorage.getItem('token');
    const jobsPromise = this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.apiUrl}/candidate/jobs/list`).toPromise();
    let historyPromise = Promise.resolve({
      history: []
    });
    if (token) {
      historyPromise = this.applicationService.getHistory().toPromise().catch(() => ({
        history: []
      }));
    }
    Promise.all([jobsPromise, historyPromise]).then(([jobsData, historyData]) => {
      const jobsList = Array.isArray(jobsData) ? jobsData : jobsData?.jobs || [];
      const historyList = historyData?.history || [];
      const appliedJobIds = historyList.map(app => app.job_id);
      this.allJobs = jobsList.map(job => ({
        ...job,
        has_quiz: !!job.has_quiz,
        isAlreadyApplied: token ? appliedJobIds.includes(job.id) : false
      }));
      this.isLoading = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }
  loadQuizForJob(jobId) {
    const token = localStorage.getItem('token');
    this.isLoadingQuiz = true;
    this.jobQuiz = null;
    this.quizAnswers = {};
    this.quizService.getQuizForJob(jobId, !token).subscribe({
      next: res => {
        this.jobQuiz = res.has_quiz ? res.quiz : null;
        this.isLoadingQuiz = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.isLoadingQuiz = false;
        this.jobQuiz = null;
        this.cdr.detectChanges();
      }
    });
  }
  onViewRecruiterProfile(recruiterId) {
    if (!recruiterId) return;
    this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.apiUrl}/candidate/profile/details-public/${recruiterId}`).subscribe({
      next: data => {
        this.selectedRecruiter = data;
        this.cdr.detectChanges();
      },
      error: () => alert("Impossible de charger la fiche de cette entreprise.")
    });
  }
  getSearchJobSkillsArray(skillsText) {
    if (!skillsText) return [];
    return skillsText.split(',').map(s => s.trim()).filter(Boolean);
  }
  getSearchJobLanguagesArray(langText) {
    if (!langText) return [];
    return langText.split(',').map(s => s.trim()).filter(Boolean);
  }
  onCloseRecruiterModal() {
    this.selectedRecruiter = null;
    this.cdr.detectChanges();
  }
  get filteredJobs() {
    return this.allJobs.filter(job => {
      const matchTitle = !this.searchFilters.title.trim() || job.title?.toLowerCase().includes(this.searchFilters.title.toLowerCase()) || job.company_name?.toLowerCase().includes(this.searchFilters.title.toLowerCase());
      const matchLocation = !this.searchFilters.location.trim() || job.location?.toLowerCase().includes(this.searchFilters.location.toLowerCase());
      const matchExperience = !this.searchFilters.experience || job.experience_level === this.searchFilters.experience;
      const matchContract = !this.searchFilters.contract || job.contract_type === this.searchFilters.contract;
      return matchTitle && matchLocation && matchExperience && matchContract;
    });
  }
  get hasActiveFilters() {
    return !!(this.searchFilters.title.trim() || this.searchFilters.location.trim() || this.searchFilters.experience || this.searchFilters.contract);
  }
  onResetFilters() {
    this.searchFilters = {
      title: '',
      location: '',
      experience: '',
      contract: ''
    };
    this.cdr.detectChanges();
  }
  onViewJobDetails(job) {
    this.selectedJob = job;
    this.applyError = '';
    if (job.has_quiz) {
      this.loadQuizForJob(job.id);
    } else {
      this.jobQuiz = null;
      this.quizAnswers = {};
    }
    this.cdr.detectChanges();
  }
  onCloseModal() {
    this.selectedJob = null;
    this.jobQuiz = null;
    this.quizAnswers = {};
    this.applyError = '';
    this.cdr.detectChanges();
  }
  onOpenApplyModal(job) {
    const token = localStorage.getItem('token');
    if (!token) {
      this.showAuthRequiredPopup = true;
      this.cdr.detectChanges();
      return;
    }
    if (job.has_quiz) {
      this.onViewJobDetails(job);
      return;
    }
    this.jobToApply = job;
    this.showConfirmApplyPopup = true;
    this.cdr.detectChanges();
  }
  goToLogin() {
    this.showAuthRequiredPopup = false;
    this.router.navigate(['/login']);
  }
  onQuizAnswerChange(event) {
    this.quizAnswers[event.questionId] = event.choiceId;
    this.cdr.detectChanges();
  }
  buildQuizAnswers() {
    return Object.entries(this.quizAnswers).map(([questionId, choiceId]) => ({
      question_id: Number(questionId),
      choice_id: Number(choiceId)
    }));
  }
  canSubmitApply() {
    const job = this.selectedJob || this.jobToApply;
    if (!job) return false;
    if (!job.has_quiz || !this.jobQuiz?.questions?.length) return true;
    return this.jobQuiz.questions.every(q => this.quizAnswers[q.id]);
  }
  executeApplySubmit() {
    const job = this.selectedJob || this.jobToApply;
    if (!job || !this.canSubmitApply()) {
      this.applyError = 'Veuillez répondre à toutes les questions du quiz.';
      this.cdr.detectChanges();
      return;
    }
    if (!confirm(`Confirmer votre candidature pour « ${job.title} » ?`)) {
      return;
    }
    this.isSubmitting = true;
    this.applyError = '';
    const answers = job.has_quiz ? this.buildQuizAnswers() : [];
    this.applicationService.applyToJob(job.id, answers).subscribe({
      next: () => {
        job.isAlreadyApplied = true;
        const inList = this.allJobs.find(j => j.id === job.id);
        if (inList) inList.isAlreadyApplied = true;
        this.isSubmitting = false;
        this.showConfirmApplyPopup = false;
        this.onCloseModal();
        this.cdr.detectChanges();
      },
      error: err => {
        this.isSubmitting = false;
        this.applyError = err.error?.message || 'Erreur lors de la transmission.';
        this.cdr.detectChanges();
      }
    });
  }
  static ɵfac = function JobSearchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || JobSearchComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: JobSearchComponent,
    selectors: [["app-job-search"]],
    decls: 50,
    vars: 11,
    consts: [[1, "job-search-container"], [1, "search-advanced-card"], [1, "advanced-search-grid"], [1, "search-filter-group"], [1, "bi", "bi-briefcase"], [1, "input-with-icon"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Ex: Angular...", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-geo-alt"], [1, "bi", "bi-map"], ["type", "text", "placeholder", "Ex: Tunis...", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-mortarboard"], [1, "select-filter-compact", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Junior (0-2 ans)"], ["value", "Interm\u00E9diaire (2-5 ans)"], ["value", "Senior (5+ ans)"], [1, "bi", "bi-tags"], ["value", "CDI"], ["value", "CDD"], ["value", "SIVP"], [1, "reset-filters-row"], [1, "loading-state-box"], [1, "jobs-cards-grid-3"], [1, "modal-overlay"], [1, "modal-overlay", 2, "z-index", "100005"], [1, "custom-modal-overlay-auth"], ["type", "button", 1, "btn-reset-filters", 3, "click"], [1, "bi", "bi-x-circle"], [1, "bi", "bi-arrow-clockwise", "spin-animation"], [1, "job-feed-card"], [1, "card-top-info"], [1, "company-logo-placeholder"], ["alt", "Logo", 3, "src"], [1, "bi", "bi-building"], [1, "job-title-block"], [1, "feed-job-title"], [1, "feed-company-name", "clickable-recruiter", 3, "click"], [1, "bi", "bi-building-check"], [2, "display", "flex", "flex-direction", "column", "gap", "6px", "align-items", "flex-end"], [1, "contract-badge-feed"], [2, "font-size", "10px", "font-weight", "700", "color", "#7c3aed", "background", "#f3e8ff", "padding", "3px 8px", "border-radius", "6px"], [1, "card-mid-meta"], [1, "meta-item"], [1, "bi", "bi-geo-alt-fill"], [1, "bi", "bi-laptop-fill"], [1, "bi", "bi-mortarboard-fill"], [1, "job-short-desc"], [1, "card-bottom-actions"], [1, "btn-consult-job", 3, "click"], [1, "bi", "bi-eye-fill"], [1, "badge-already-applied"], [1, "btn-apply-now"], [1, "bi", "bi-patch-question"], [1, "bi", "bi-check-circle-fill"], [1, "btn-apply-now", 3, "click"], [1, "bi", "bi-arrow-right-short"], [1, "modal-overlay", 3, "click"], [1, "modal-card", 3, "click"], [1, "modal-header"], [1, "bi", "bi-file-earmark-text-fill"], [1, "btn-close-modal", 3, "click"], [1, "bi", "bi-x-lg"], [1, "modal-body"], [1, "job-hero-section"], [1, "job-logo-wrapper"], ["alt", "Logo entreprise", 3, "error", "src"], [1, "job-meta-content"], [1, "job-main-title"], [1, "job-company-link", 3, "click"], [1, "job-badges-row"], [1, "premium-badge", "badge-contract"], [1, "bi", "bi-file-earmark-text"], [1, "premium-badge", "badge-location"], [1, "premium-badge", "badge-expiration", 2, "background-color", "#fff7ed", "color", "#c2410c", "border-color", "#ffedd5", "font-weight", "600"], [1, "job-text-block-section"], [1, "job-block-title"], [1, "bi", "bi-list-task"], [1, "job-block-card"], [2, "white-space", "pre-line", "margin", "0", "line-height", "1.65", "color", "#334155"], [1, "bi", "bi-person-badge-fill"], [2, "color", "#ef4444", "font-size", "13px", "margin", "0 0 12px"], [1, "modal-footer-action-row"], [1, "premium-applied-banner"], [1, "btn-submit-apply-large", 3, "disabled", "opacity"], [1, "bi", "bi-calendar-x-fill", 2, "color", "#ea580c"], [1, "bi", "bi-tags-fill"], [1, "skills-badge-grid"], [1, "skill-tag"], [1, "bi", "bi-check2"], [1, "bi", "bi-translate"], [1, "skill-tag", 2, "background-color", "#faf5ff", "color", "#6b21a8", "border-color", "#f3e8ff"], [1, "bi", "bi-globe"], [1, "bi", "bi-patch-question-fill"], [3, "answerChange", "quiz", "loading", "answers"], [1, "btn-submit-apply-large", 3, "click", "disabled"], [1, "modal-card", "recruiter-profile-card"], [1, "bi", "bi-building-fill"], [1, "recruiter-meta-header"], [1, "large-avatar-placeholder"], [1, "bi", "bi-building", 2, "font-size", "32px", "color", "#cbd5e1"], [1, "recruiter-main-titles"], [1, "badge-verified"], [1, "bi", "bi-patch-check-fill"], [1, "recruiter-contact-grid"], [1, "contact-item"], [1, "bi", "bi-envelope-fill"], [1, "bi", "bi-telephone-fill"], [1, "contact-item", "span-two"], [1, "detail-block", 2, "margin-top", "15px"], [1, "bio-text-box"], [1, "modal-overlay", 2, "z-index", "100005", 3, "click"], [1, "modal-card", 2, "max-width", "440px", "padding", "28px", "text-align", "center", "display", "flex", "flex-direction", "column", "gap", "16px", 3, "click"], [2, "font-size", "42px", "margin-bottom", "4px"], [2, "margin", "0", "font-size", "17px", "font-weight", "700", "color", "#0f172a"], [2, "margin", "0", "font-size", "13.5px", "color", "#64748b", "line-height", "1.6"], [2, "color", "#0ea5e9"], [2, "color", "#ef4444", "font-size", "13px", "margin", "0"], [2, "display", "flex", "gap", "12px", "margin-top", "12px", "width", "100%"], ["type", "button", 1, "btn-close-modal", 2, "flex", "1", "height", "42px", "border-radius", "8px", "width", "100%", "font-weight", "600", "font-size", "13px", 3, "click"], ["type", "button", 1, "btn-submit-apply-large", 2, "flex", "1", "height", "42px", "border-radius", "8px", "font-size", "13px", 3, "click", "disabled"], [1, "custom-modal-overlay-auth", 3, "click"], [1, "custom-modal-box-auth", 3, "click"], [1, "custom-modal-header-auth"], [1, "bi", "bi-box-arrow-in-right", "login-icon-ats"], [1, "custom-modal-body-auth"], [1, "sub-text-auth"], [1, "custom-modal-footer-auth"], ["type", "button", 1, "btn-modal-cancel-auth", 3, "click"], ["type", "button", 1, "btn-modal-confirm-auth", 3, "click"]],
    template: function JobSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Titre du poste");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function JobSearchComponent_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.searchFilters.title, $event) || (ctx.searchFilters.title = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 3)(11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, " Ville / R\u00E9gion");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function JobSearchComponent_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.searchFilters.location, $event) || (ctx.searchFilters.location = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 3)(18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, " Exp\u00E9rience");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function JobSearchComponent_Template_select_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.searchFilters.experience, $event) || (ctx.searchFilters.experience = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Tous les niveaux");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Junior (0-2 ans)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Interm\u00E9diaire (2-5 ans)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Senior (5+ ans)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 3)(31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, " Contrat");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function JobSearchComponent_Template_select_ngModelChange_34_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.searchFilters.contract, $event) || (ctx.searchFilters.contract = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "Tous les contrats");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "CDI");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "CDD");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "SIVP");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](43, JobSearchComponent_Conditional_43_Template, 4, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](44, JobSearchComponent_Conditional_44_Template, 4, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](45, JobSearchComponent_Conditional_45_Template, 3, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](46, JobSearchComponent_Conditional_46_Template, 47, 13, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](47, JobSearchComponent_Conditional_47_Template, 43, 6, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](48, JobSearchComponent_Conditional_48_Template, 18, 3, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](49, JobSearchComponent_Conditional_49_Template, 19, 0, "div", 26);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx.searchFilters.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx.searchFilters.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx.searchFilters.experience);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx.searchFilters.contract);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx.hasActiveFilters ? 43 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx.isLoading ? 44 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](!ctx.isLoading && ctx.filteredJobs.length > 0 ? 45 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx.selectedJob ? 46 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx.selectedRecruiter ? 47 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx.showConfirmApplyPopup ? 48 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx.showAuthRequiredPopup ? 49 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _shared_components_quiz_player_quiz_player_component__WEBPACK_IMPORTED_MODULE_9__.QuizPlayerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
    styles: [".job-search-container[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n\n.search-advanced-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.02);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.advanced-search-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr) !important; \n  gap: 16px;\n  width: 100%;\n}\n\n.search-filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  text-align: left;\n}\n\n.search-filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.input-with-icon[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n\n.input-with-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 14px;\n}\n\n.input-with-icon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .select-filter-compact[_ngcontent-%COMP%] {\n  width: 100% !important;\n  padding: 9px 12px 9px 34px !important;\n  border: 1px solid #cbd5e1 !important;\n  border-radius: 6px !important;\n  font-size: 13px !important;\n  color: #1e293b !important;\n  background-color: #f8fafc !important;\n  box-sizing: border-box;\n}\n\n.select-filter-compact[_ngcontent-%COMP%] {\n  padding: 9px 12px !important; \n  cursor: pointer;\n}\n\n.input-with-icon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .select-filter-compact[_ngcontent-%COMP%]:focus {\n  background-color: #ffffff !important;\n  border-color: #0ea5e9 !important;\n  outline: none !important;\n}\n\n\n.reset-filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.btn-reset-filters[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #ef4444;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.btn-reset-filters[_ngcontent-%COMP%]:hover { text-decoration: underline; }\n\n\n.jobs-cards-grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr) !important;\n  gap: 20px;\n  width: 100%;\n}\n\n.job-feed-card[_ngcontent-%COMP%] {\n  background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; display: flex; flex-direction: column; text-align: left; box-shadow: 0 1px 3px rgba(0,0,0,0.01); box-sizing: border-box;\n}\n\n.card-top-info[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }\n.company-logo-placeholder[_ngcontent-%COMP%] { width: 44px; height: 44px; border-radius: 8px; border: 1px solid #e2e8f0; background: #f8fafc; display: flex; justify-content: center; align-items: center; overflow: hidden; }\n.company-logo-placeholder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 100%; height: 100%; object-fit: cover; }\n\n.job-title-block[_ngcontent-%COMP%] { flex: 1; display: flex; flex-direction: column; overflow: hidden; }\n.feed-job-title[_ngcontent-%COMP%] { margin: 0; color: #0f172a; font-size: 14.5px; font-weight: 700; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }\n.feed-company-name[_ngcontent-%COMP%] { font-size: 12.5px; color: #64748b; margin-top: 1px; }\n.contract-badge-feed[_ngcontent-%COMP%] { background: #f0f9ff; color: #0ea5e9; font-size: 11px; font-weight: 700; padding: 3px 6px; border-radius: 4px; }\n\n.card-mid-meta[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 6px 10px; margin-bottom: 12px; }\n.meta-item[_ngcontent-%COMP%] { font-size: 12px; color: #64748b; font-weight: 500; display: inline-flex; align-items: center; gap: 4px; }\n.salary-tag[_ngcontent-%COMP%] { color: #10b981; font-weight: 600; }\n\n.job-short-desc[_ngcontent-%COMP%] { margin: 0 0 14px 0; font-size: 13px; color: #475569; line-height: 1.5; flex: 1; }\n\n.card-bottom-actions[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9; padding-top: 12px; gap: 8px; }\n.btn-consult-job[_ngcontent-%COMP%] { background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; border-radius: 6px; padding: 7px 12px; font-size: 12.5px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; }\n.btn-apply-now[_ngcontent-%COMP%] { background: #0ea5e9; color: #ffffff; border: none; border-radius: 6px; padding: 8px 14px; font-size: 12.5px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; }\n.badge-already-applied[_ngcontent-%COMP%] { background: #f1f5f9; color: #64748b; border: 1px solid #e2e8f0; font-size: 12px; font-weight: 600; padding: 7px 12px; border-radius: 6px; display: inline-flex; align-items: center; gap: 6px; }\n\n\n.modal-overlay[_ngcontent-%COMP%] { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15, 23, 42, 0.4); -webkit-backdrop-filter: blur(4px); backdrop-filter: blur(4px); z-index: 11000; display: flex; align-items: center; justify-content: center; }\n.modal-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  width: 100%;\n  max-width: 1100px; \n  max-height: 90vh;\n  border-radius: 16px;\n  box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.15);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.modal-header[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; margin-bottom: 16px; }\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0; font-size: 18px; font-weight: 700; color: #0f172a; display: flex; gap: 8px; align-items: center; }\n.btn-close-modal[_ngcontent-%COMP%] { background: #f1f5f9; border: none; font-size: 13px; color: #64748b; cursor: pointer; padding: 5px 10px; border-radius: 6px; }\n.modal-body[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 11px; text-align: left; }\n.detail-row[_ngcontent-%COMP%] { display: flex; justify-content: space-between; font-size: 13.5px; padding-bottom: 8px; border-bottom: 1px solid #f8fafc; }\n.detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: #0f172a; font-weight: 600; }\n.detail-block[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 4px; margin-top: 4px; }\n.detail-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { background: #f8fafc; padding: 12px; border-radius: 6px; color: #334155; font-size: 13px; line-height: 1.5; margin: 0; white-space: pre-line; border: 1px solid #e2e8f0; }\n.modal-footer-action[_ngcontent-%COMP%] { margin-top: 15px; display: flex; justify-content: center; }\n.btn-apply-now-large[_ngcontent-%COMP%] { background: #0ea5e9; color: white; border: none; width: 100%; padding: 11px; font-size: 14px; font-weight: 600; border-radius: 6px; cursor: pointer; display: flex; justify-content: center; align-items: center; gap: 8px; }\n.badge-already-applied-large[_ngcontent-%COMP%] { background: #f8fafc; color: #64748b; width: 100%; padding: 11px; border-radius: 6px; text-align: center; font-weight: 600; border: 1px solid #e2e8f0; font-size: 13.5px; }\n\n.loading-state-box[_ngcontent-%COMP%], .empty-state-box[_ngcontent-%COMP%] { padding: 40px; text-align: center; color: #64748b; }\n.spin-animation[_ngcontent-%COMP%] { display: inline-block; font-size: 24px; animation: _ngcontent-%COMP%_spin 1s linear infinite; margin-bottom: 8px; color: #0ea5e9; }\n@keyframes _ngcontent-%COMP%_spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n@keyframes _ngcontent-%COMP%_fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }\n\n.clickable-recruiter[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n  transition: color 0.15s ease;\n}\n.clickable-recruiter[_ngcontent-%COMP%]:hover {\n  color: #0ea5e9 !important;\n  text-decoration: underline !important;\n}\n\n\n.recruiter-meta-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #f8fafc;\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  margin-bottom: 16px;\n}\n.large-avatar-placeholder[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n.large-avatar-placeholder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 100%; height: 100%; object-fit: cover; }\n\n.recruiter-main-titles[_ngcontent-%COMP%] { text-align: left; }\n.recruiter-main-titles[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { margin: 0; font-size: 18px; color: #0f172a; font-weight: 700; }\n.badge-verified[_ngcontent-%COMP%] { font-size: 12px; color: #0ea5e9; font-weight: 600; display: inline-flex; align-items: center; gap: 4px; margin-top: 4px; }\n\n.recruiter-contact-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  text-align: left;\n}\n.contact-item[_ngcontent-%COMP%] { font-size: 13.5px; background: #fafbfc; border: 1px solid #f1f5f9; padding: 10px; border-radius: 6px; }\n.contact-item.span-two[_ngcontent-%COMP%] { grid-column: span 2; }\n.contact-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: #64748b; }\n.contact-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: #1e293b; font-weight: 600; float: right; }\n.contact-item.span-two[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { float: none; display: block; margin-top: 4px; }\n\n.bio-text-box[_ngcontent-%COMP%] { max-height: 120px; overflow-y: auto; }\n\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(6px);\n          backdrop-filter: blur(6px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n}\n\n\n.modal-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  width: 100%;\n  max-width: 950px; \n  max-height: 88vh;\n  border-radius: 16px;\n  box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.15);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px 28px;\n  border-bottom: 1px solid #f1f5f9;\n}\n\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.btn-close-modal[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  color: #64748b;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.btn-close-modal[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #ef4444;\n}\n\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 28px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n\n.job-hero-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  align-items: center;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #f1f5f9;\n}\n\n.job-logo-wrapper[_ngcontent-%COMP%] {\n  width: 85px;\n  height: 85px;\n  border-radius: 12px;\n  border: 1px solid #cbd5e1;\n  overflow: hidden;\n  background: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.job-logo-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.job-meta-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  text-align: left;\n}\n\n.job-main-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 800;\n  color: #0f172a;\n}\n\n.job-company-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0ea5e9;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.job-badges-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 4px;\n}\n\n\n.premium-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 14px;\n  background-color: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #475569;\n}\n\n\n.job-text-block-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  text-align: left;\n}\n\n.job-block-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  border-left: 4px solid #0ea5e9;\n  padding-left: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.job-block-card[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 18px;\n}\n.job-block-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #334155;\n  font-size: 13.5px;\n  line-height: 1.65;\n  white-space: pre-line; \n}\n\n\n.modal-footer-action-row[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.btn-submit-apply-large[_ngcontent-%COMP%] {\n  background-color: #0ea5e9;\n  color: #ffffff;\n  border: none;\n  padding: 11px 28px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 6px -1px rgba(14, 165, 233, 0.2);\n}\n.btn-submit-apply-large[_ngcontent-%COMP%]:hover {\n  background-color: #0284c7;\n}\n\n.premium-applied-banner[_ngcontent-%COMP%] {\n  background-color: #f0fdf4;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n  padding: 11px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 600;\n  width: 100%;\n  text-align: center;\n}\n.badge-expiration[_ngcontent-%COMP%] {\n  background-color: #fff7ed !important; \n  color: #c2410c !important;            \n  border-color: #ffedd5 !important;\n  font-weight: 600;\n}\n\n.badge-expiration[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ea580c;\n}\n\n\n.custom-modal-overlay-auth[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(15, 23, 42, 0.4);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n  z-index: 999999 !important; \n}\n\n\n\n.custom-modal-box-auth[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 460px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_modalSlideUp 0.25s ease-out;\n}\n\n.custom-modal-header-auth[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 18px 24px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border-bottom: 1px solid #f1f5f9;\n}\n\n.custom-modal-header-auth[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n  color: #0f172a;\n  font-weight: 700;\n}\n\n.login-icon-ats[_ngcontent-%COMP%] {\n  color: #0ea5e9; \n  font-size: 1.5rem;\n}\n\n.custom-modal-body-auth[_ngcontent-%COMP%] {\n  padding: 24px;\n  color: #334155;\n  font-size: 0.95rem;\n  line-height: 1.6;\n}\n\n.sub-text-auth[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #64748b;\n  font-size: 0.85rem;\n  font-style: italic;\n}\n\n.custom-modal-footer-auth[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  background: #f8fafc;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  border-top: 1px solid #f1f5f9;\n}\n\n\n.btn-modal-cancel-auth[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #475569;\n  border: 1px solid #cbd5e1;\n  padding: 8px 18px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 13px;\n  transition: background 0.15s;\n}\n\n.btn-modal-cancel-auth[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\n.btn-modal-confirm-auth[_ngcontent-%COMP%] {\n  background: #0ea5e9;\n  color: white;\n  border: none;\n  padding: 8px 20px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 13px;\n  transition: background 0.15s;\n}\n\n.btn-modal-confirm-auth[_ngcontent-%COMP%]:hover {\n  background: #0284c7;\n}\n\n@keyframes _ngcontent-%COMP%_modalSlideUp {\n  from { transform: translateY(20px); opacity: 0; }\n  to { transform: translateY(0); opacity: 1; }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2FuZGlkYXRlL2pvYi1zZWFyY2gvam9iLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBLHNEQUFzRDtBQUN0RDtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0RBQWdELEVBQUUsc0NBQXNDO0VBQ3hGLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIscUNBQXFDO0VBQ3JDLG9DQUFvQztFQUNwQyw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNEJBQTRCLEVBQUUsK0RBQStEO0VBQzdGLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtBQUMxQjs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtF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Q0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjLEVBQUUsd0RBQXdEO0VBQ3hFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsNkJBQTZCO0FBQy9COztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPLDJCQUEyQixFQUFFLFVBQVUsRUFBRTtFQUNoRCxLQUFLLHdCQUF3QixFQUFFLFVBQVUsRUFBRTtBQUM3QyIsInNvdXJjZXNDb250ZW50IjpbIi5qb2Itc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycyBlYXNlLW91dDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4vKiDDsMKfwpTCjSBDT05URU5FVVIgUkVDSEVSQ0hFIEFWQU5Dw4PCiUUgRU4gR1JJTExFIENPTVBBQ1RFICovXHJcbi5zZWFyY2gtYWR2YW5jZWQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjAyKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4uYWR2YW5jZWQtc2VhcmNoLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKSAhaW1wb3J0YW50OyAvKiBBbGlnbmUgbGVzIDQgY3JpdMODwqhyZXMgY8ODwrR0ZSDDg8KgIGPDg8K0dGUgKi9cclxuICBnYXA6IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWFyY2gtZmlsdGVyLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA2cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnNlYXJjaC1maWx0ZXItZ3JvdXAgbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxufVxyXG5cclxuLmlucHV0LXdpdGgtaWNvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW5wdXQtd2l0aC1pY29uIGkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxMnB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBjb2xvcjogIzk0YTNiODtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5pbnB1dC13aXRoLWljb24gaW5wdXQsIC5zZWxlY3QtZmlsdGVyLWNvbXBhY3Qge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogOXB4IDEycHggOXB4IDM0cHggIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMxZTI5M2IgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnNlbGVjdC1maWx0ZXItY29tcGFjdCB7XHJcbiAgcGFkZGluZzogOXB4IDEycHggIWltcG9ydGFudDsgLyogUGFzIGQnaWPDg8K0bmUgaW50ZXJuZSBuw4PCqWNlc3NhaXJlIHBvdXIgbGVzIGxpc3RlcyBkw4PCqXJvdWxhbnRlcyAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmlucHV0LXdpdGgtaWNvbiBpbnB1dDpmb2N1cywgLnNlbGVjdC1maWx0ZXItY29tcGFjdDpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogIzBlYTVlOSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogQm91dG9uIHLDg8KpaW5pdGlhbGlzZXIgKi9cclxuLnJlc2V0LWZpbHRlcnMtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLmJ0bi1yZXNldC1maWx0ZXJzIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI2VmNDQ0NDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDRweDtcclxufVxyXG4uYnRuLXJlc2V0LWZpbHRlcnM6aG92ZXIgeyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxyXG5cclxuLyogw7DCn8KawoAgR1JJTExFIMODwoAgMyBDT0xPTk5FUyBTQU5TIFNDUk9MTCAqL1xyXG4uam9icy1jYXJkcy1ncmlkLTMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKSAhaW1wb3J0YW50O1xyXG4gIGdhcDogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmpvYi1mZWVkLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7IGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7IGJvcmRlci1yYWRpdXM6IDEycHg7IHBhZGRpbmc6IDIycHg7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHRleHQtYWxpZ246IGxlZnQ7IGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMDEpOyBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY2FyZC10b3AtaW5mbyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDsgbWFyZ2luLWJvdHRvbTogMTJweDsgfVxyXG4uY29tcGFueS1sb2dvLXBsYWNlaG9sZGVyIHsgd2lkdGg6IDQ0cHg7IGhlaWdodDogNDRweDsgYm9yZGVyLXJhZGl1czogOHB4OyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyBiYWNrZ3JvdW5kOiAjZjhmYWZjOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4uY29tcGFueS1sb2dvLXBsYWNlaG9sZGVyIGltZyB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IG9iamVjdC1maXQ6IGNvdmVyOyB9XHJcblxyXG4uam9iLXRpdGxlLWJsb2NrIHsgZmxleDogMTsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4uZmVlZC1qb2ItdGl0bGUgeyBtYXJnaW46IDA7IGNvbG9yOiAjMGYxNzJhOyBmb250LXNpemU6IDE0LjVweDsgZm9udC13ZWlnaHQ6IDcwMDsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IG92ZXJmbG93OiBoaWRkZW47IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cclxuLmZlZWQtY29tcGFueS1uYW1lIHsgZm9udC1zaXplOiAxMi41cHg7IGNvbG9yOiAjNjQ3NDhiOyBtYXJnaW4tdG9wOiAxcHg7IH1cclxuLmNvbnRyYWN0LWJhZGdlLWZlZWQgeyBiYWNrZ3JvdW5kOiAjZjBmOWZmOyBjb2xvcjogIzBlYTVlOTsgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNzAwOyBwYWRkaW5nOiAzcHggNnB4OyBib3JkZXItcmFkaXVzOiA0cHg7IH1cclxuXHJcbi5jYXJkLW1pZC1tZXRhIHsgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBnYXA6IDZweCAxMHB4OyBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XHJcbi5tZXRhLWl0ZW0geyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNjQ3NDhiOyBmb250LXdlaWdodDogNTAwOyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA0cHg7IH1cclxuLnNhbGFyeS10YWcgeyBjb2xvcjogIzEwYjk4MTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxyXG5cclxuLmpvYi1zaG9ydC1kZXNjIHsgbWFyZ2luOiAwIDAgMTRweCAwOyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjNDc1NTY5OyBsaW5lLWhlaWdodDogMS41OyBmbGV4OiAxOyB9XHJcblxyXG4uY2FyZC1ib3R0b20tYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWY1Zjk7IHBhZGRpbmctdG9wOiAxMnB4OyBnYXA6IDhweDsgfVxyXG4uYnRuLWNvbnN1bHQtam9iIHsgYmFja2dyb3VuZDogI2YxZjVmOTsgY29sb3I6ICM0NzU1Njk7IGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7IGJvcmRlci1yYWRpdXM6IDZweDsgcGFkZGluZzogN3B4IDEycHg7IGZvbnQtc2l6ZTogMTIuNXB4OyBmb250LXdlaWdodDogNjAwOyBjdXJzb3I6IHBvaW50ZXI7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDVweDsgfVxyXG4uYnRuLWFwcGx5LW5vdyB7IGJhY2tncm91bmQ6ICMwZWE1ZTk7IGNvbG9yOiAjZmZmZmZmOyBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDZweDsgcGFkZGluZzogOHB4IDE0cHg7IGZvbnQtc2l6ZTogMTIuNXB4OyBmb250LXdlaWdodDogNjAwOyBjdXJzb3I6IHBvaW50ZXI7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgfVxyXG4uYmFkZ2UtYWxyZWFkeS1hcHBsaWVkIHsgYmFja2dyb3VuZDogI2YxZjVmOTsgY29sb3I6ICM2NDc0OGI7IGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDYwMDsgcGFkZGluZzogN3B4IDEycHg7IGJvcmRlci1yYWRpdXM6IDZweDsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4OyB9XHJcblxyXG4vKiBNT0RBTEUgSU5URVJORSAqL1xyXG4ubW9kYWwtb3ZlcmxheSB7IHBvc2l0aW9uOiBmaXhlZDsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuNCk7IGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpOyB6LWluZGV4OiAxMTAwMDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cclxuLm1vZGFsLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMTAwcHg7IC8qIMOwwp/CmsKAIEFVR01FTlRFWiBDRVRURSBWQUxFVVIgSUNJIFBPVVIgw4PCiUxBUkdJUiBMQSBDQVJURSAqL1xyXG4gIG1heC1oZWlnaHQ6IDkwdmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3gtc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDE1LCAyMywgNDIsIDAuMTUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGFuaW1hdGlvbjogc2xpZGVVcCAwLjNzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xyXG59XHJcbi5tb2RhbC1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5OyBwYWRkaW5nLWJvdHRvbTogMTJweDsgbWFyZ2luLWJvdHRvbTogMTZweDsgfVxyXG4ubW9kYWwtaGVhZGVyIGgzIHsgbWFyZ2luOiAwOyBmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjMGYxNzJhOyBkaXNwbGF5OiBmbGV4OyBnYXA6IDhweDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4uYnRuLWNsb3NlLW1vZGFsIHsgYmFja2dyb3VuZDogI2YxZjVmOTsgYm9yZGVyOiBub25lOyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjNjQ3NDhiOyBjdXJzb3I6IHBvaW50ZXI7IHBhZGRpbmc6IDVweCAxMHB4OyBib3JkZXItcmFkaXVzOiA2cHg7IH1cclxuLm1vZGFsLWJvZHkgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDExcHg7IHRleHQtYWxpZ246IGxlZnQ7IH1cclxuLmRldGFpbC1yb3cgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGZvbnQtc2l6ZTogMTMuNXB4OyBwYWRkaW5nLWJvdHRvbTogOHB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZmFmYzsgfVxyXG4uZGV0YWlsLXJvdyBzcGFuIHsgY29sb3I6ICMwZjE3MmE7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cclxuLmRldGFpbC1ibG9jayB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogNHB4OyBtYXJnaW4tdG9wOiA0cHg7IH1cclxuLmRldGFpbC1ibG9jayBwIHsgYmFja2dyb3VuZDogI2Y4ZmFmYzsgcGFkZGluZzogMTJweDsgYm9yZGVyLXJhZGl1czogNnB4OyBjb2xvcjogIzMzNDE1NTsgZm9udC1zaXplOiAxM3B4OyBsaW5lLWhlaWdodDogMS41OyBtYXJnaW46IDA7IHdoaXRlLXNwYWNlOiBwcmUtbGluZTsgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDsgfVxyXG4ubW9kYWwtZm9vdGVyLWFjdGlvbiB7IG1hcmdpbi10b3A6IDE1cHg7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XHJcbi5idG4tYXBwbHktbm93LWxhcmdlIHsgYmFja2dyb3VuZDogIzBlYTVlOTsgY29sb3I6IHdoaXRlOyBib3JkZXI6IG5vbmU7IHdpZHRoOiAxMDAlOyBwYWRkaW5nOiAxMXB4OyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGJvcmRlci1yYWRpdXM6IDZweDsgY3Vyc29yOiBwb2ludGVyOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IH1cclxuLmJhZGdlLWFscmVhZHktYXBwbGllZC1sYXJnZSB7IGJhY2tncm91bmQ6ICNmOGZhZmM7IGNvbG9yOiAjNjQ3NDhiOyB3aWR0aDogMTAwJTsgcGFkZGluZzogMTFweDsgYm9yZGVyLXJhZGl1czogNnB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtd2VpZ2h0OiA2MDA7IGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7IGZvbnQtc2l6ZTogMTMuNXB4OyB9XHJcblxyXG4ubG9hZGluZy1zdGF0ZS1ib3gsIC5lbXB0eS1zdGF0ZS1ib3ggeyBwYWRkaW5nOiA0MHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiAjNjQ3NDhiOyB9XHJcbi5zcGluLWFuaW1hdGlvbiB7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAyNHB4OyBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlOyBtYXJnaW4tYm90dG9tOiA4cHg7IGNvbG9yOiAjMGVhNWU5OyB9XHJcbkBrZXlmcmFtZXMgc3BpbiB7IGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfSB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTsgfSB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XHJcbi8qIE5vbSBkdSByZWNydXRldXIgY2xpcXVhYmxlICovXHJcbi5jbGlja2FibGUtcmVjcnVpdGVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlO1xyXG59XHJcbi5jbGlja2FibGUtcmVjcnVpdGVyOmhvdmVyIHtcclxuICBjb2xvcjogIzBlYTVlOSAhaW1wb3J0YW50O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIE1vZGFsZSBkZSBsJ2VudHJlcHJpc2UgKi9cclxuLnJlY3J1aXRlci1tZXRhLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG4ubGFyZ2UtYXZhdGFyLXBsYWNlaG9sZGVyIHtcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubGFyZ2UtYXZhdGFyLXBsYWNlaG9sZGVyIGltZyB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IG9iamVjdC1maXQ6IGNvdmVyOyB9XHJcblxyXG4ucmVjcnVpdGVyLW1haW4tdGl0bGVzIHsgdGV4dC1hbGlnbjogbGVmdDsgfVxyXG4ucmVjcnVpdGVyLW1haW4tdGl0bGVzIGg0IHsgbWFyZ2luOiAwOyBmb250LXNpemU6IDE4cHg7IGNvbG9yOiAjMGYxNzJhOyBmb250LXdlaWdodDogNzAwOyB9XHJcbi5iYWRnZS12ZXJpZmllZCB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICMwZWE1ZTk7IGZvbnQtd2VpZ2h0OiA2MDA7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgbWFyZ2luLXRvcDogNHB4OyB9XHJcblxyXG4ucmVjcnVpdGVyLWNvbnRhY3QtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmNvbnRhY3QtaXRlbSB7IGZvbnQtc2l6ZTogMTMuNXB4OyBiYWNrZ3JvdW5kOiAjZmFmYmZjOyBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5OyBwYWRkaW5nOiAxMHB4OyBib3JkZXItcmFkaXVzOiA2cHg7IH1cclxuLmNvbnRhY3QtaXRlbS5zcGFuLXR3byB7IGdyaWQtY29sdW1uOiBzcGFuIDI7IH1cclxuLmNvbnRhY3QtaXRlbSBzdHJvbmcgeyBjb2xvcjogIzY0NzQ4YjsgfVxyXG4uY29udGFjdC1pdGVtIHNwYW4geyBjb2xvcjogIzFlMjkzYjsgZm9udC13ZWlnaHQ6IDYwMDsgZmxvYXQ6IHJpZ2h0OyB9XHJcbi5jb250YWN0LWl0ZW0uc3Bhbi10d28gc3BhbiB7IGZsb2F0OiBub25lOyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLXRvcDogNHB4OyB9XHJcblxyXG4uYmlvLXRleHQtYm94IHsgbWF4LWhlaWdodDogMTIwcHg7IG92ZXJmbG93LXk6IGF1dG87IH1cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgw7DCn8KVwosgQ09VQ0hFIERFIERFU0lHTiBNT0RBTEUgTEFSR0UgJiBSRU9SR0FOSVPDg8KJRVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLm1vZGFsLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCAyMywgNDIsIDAuNik7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG59XHJcblxyXG4vKiBWZXJzaW9uIMODwolsYXJnaWUgZXQgSGFybW9uaXPDg8KpZSBkZSBsYSBDYXJ0ZSAqL1xyXG4ubW9kYWwtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDk1MHB4OyAvKiBHcmFuZCBjb25mb3J0IGRlIGxlY3R1cmUgcG91ciBsZXMgbG9uZ3MgdGV4dGVzICovXHJcbiAgbWF4LWhlaWdodDogODh2aDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMjVweCA1MHB4IC0xMnB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xNSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMThweCAyOHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIGgzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4uYnRuLWNsb3NlLW1vZGFsIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuLmJ0bi1jbG9zZS1tb2RhbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZlZTJlMjtcclxuICBjb2xvcjogI2VmNDQ0NDtcclxufVxyXG5cclxuLyogWm9uZSBzY3JvbGxhYmxlIGludGVybmUgKi9cclxuLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDI4cHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAyNHB4O1xyXG59XHJcblxyXG4vKiBTdHJ1Y3R1cmUgSMODwqlybyBBbGlnbsODwqllICovXHJcbi5qb2ItaGVyby1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjRweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xyXG59XHJcblxyXG4uam9iLWxvZ28td3JhcHBlciB7XHJcbiAgd2lkdGg6IDg1cHg7XHJcbiAgaGVpZ2h0OiA4NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcbi5qb2ItbG9nby13cmFwcGVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uam9iLW1ldGEtY29udGVudCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDZweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uam9iLW1haW4tdGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxufVxyXG5cclxuLmpvYi1jb21wYW55LWxpbmsge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMGVhNWU5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNHB4O1xyXG59XHJcblxyXG4uam9iLWJhZGdlcy1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuLyogQmFkZ2VzIMODwolwdXLDg8KpcyAqL1xyXG4ucHJlbWl1bS1iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICBwYWRkaW5nOiA1cHggMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzQ3NTU2OTtcclxufVxyXG5cclxuLyogQmxvY3MgVGV4dHVlbHMgU3RydWN0dXLDg8KpcyAqL1xyXG4uam9iLXRleHQtYmxvY2stc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uam9iLWJsb2NrLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwZWE1ZTk7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG59XHJcblxyXG4uam9iLWJsb2NrLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbn1cclxuLmpvYi1ibG9jay1jYXJkIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzMzNDE1NTtcclxuICBmb250LXNpemU6IDEzLjVweDtcclxuICBsaW5lLWhlaWdodDogMS42NTtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7IC8qIFBlcm1ldCBkJ2FsaWduZXIgbGVzIGxpc3RlcyDDg8KgIHB1Y2VzIHNhbnMgw4PCqWNyYXNlbWVudCAqL1xyXG59XHJcblxyXG4vKiBGb290ZXIgQWN0aW9ucyAqL1xyXG4ubW9kYWwtZm9vdGVyLWFjdGlvbi1yb3cge1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmJ0bi1zdWJtaXQtYXBwbHktbGFyZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZWE1ZTk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDExcHggMjhweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxMy41cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDE0LCAxNjUsIDIzMywgMC4yKTtcclxufVxyXG4uYnRuLXN1Ym1pdC1hcHBseS1sYXJnZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyODRjNztcclxufVxyXG5cclxuLnByZW1pdW0tYXBwbGllZC1iYW5uZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGZkZjQ7XHJcbiAgY29sb3I6ICMxNmEzNGE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiZjdkMDtcclxuICBwYWRkaW5nOiAxMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXNpemU6IDEzLjVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYmFkZ2UtZXhwaXJhdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjdlZCAhaW1wb3J0YW50OyAvKiBGb25kIG9yYW5nZS9hbWJyw4PCqSB0csODwqhzIGNsYWlyICovXHJcbiAgY29sb3I6ICNjMjQxMGMgIWltcG9ydGFudDsgICAgICAgICAgICAvKiDDg8KJY3JpdHVyZSBvcmFuZ2UgZm9uY8ODwqkgKi9cclxuICBib3JkZXItY29sb3I6ICNmZmVkZDUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYmFkZ2UtZXhwaXJhdGlvbiBpIHtcclxuICBjb2xvcjogI2VhNTgwYztcclxufVxyXG5cclxuLyogQXJyacODwqhyZS1wbGFuIGZsb3V0w4PCqSBldCBhc3NvbWJyaSBkZSBmb3JjZSBhdSBwcmVtaWVyIHBsYW4gKi9cclxuLmN1c3RvbS1tb2RhbC1vdmVybGF5LWF1dGgge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuNCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC8qIMOwwp/Cn8KiIE1PRElGSUNBVElPTiA6IE9uIGFwcGxpcXVlIHVuIHotaW5kZXggbWF4aW1hbCBwb3VyIHBhc3NlciBkZXZhbnQgbGEgZ3JhbmRlIGNhcnRlIGRlcyBkw4PCqXRhaWxzICovXHJcbiAgei1pbmRleDogOTk5OTk5ICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG5cclxuLyogQm/Dg8KudGUgZGUgbGEgcG9wdXAgKi9cclxuLmN1c3RvbS1tb2RhbC1ib3gtYXV0aCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDYwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDI1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMTBweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGFuaW1hdGlvbjogbW9kYWxTbGlkZVVwIDAuMjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY3VzdG9tLW1vZGFsLWhlYWRlci1hdXRoIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gIHBhZGRpbmc6IDE4cHggMjRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xyXG59XHJcblxyXG4uY3VzdG9tLW1vZGFsLWhlYWRlci1hdXRoIGgzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5sb2dpbi1pY29uLWF0cyB7XHJcbiAgY29sb3I6ICMwZWE1ZTk7IC8qIEJsZXUgbW9kZXJuZSBwb3VyIGNvcnJlc3BvbmRyZSDDg8KgIHZvdHJlIHRow4PCqG1lIFR1bkpvYiAqL1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uY3VzdG9tLW1vZGFsLWJvZHktYXV0aCB7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBjb2xvcjogIzMzNDE1NTtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuLnN1Yi10ZXh0LWF1dGgge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmN1c3RvbS1tb2RhbC1mb290ZXItYXV0aCB7XHJcbiAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGdhcDogMTJweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjVmOTtcclxufVxyXG5cclxuLyogQm91dG9ucyBkZSBsYSBwb3B1cCAqL1xyXG4uYnRuLW1vZGFsLWNhbmNlbC1hdXRoIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjNDc1NTY5O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XHJcbiAgcGFkZGluZzogOHB4IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xyXG59XHJcblxyXG4uYnRuLW1vZGFsLWNhbmNlbC1hdXRoOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG59XHJcblxyXG4uYnRuLW1vZGFsLWNvbmZpcm0tYXV0aCB7XHJcbiAgYmFja2dyb3VuZDogIzBlYTVlOTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcclxufVxyXG5cclxuLmJ0bi1tb2RhbC1jb25maXJtLWF1dGg6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMjg0Yzc7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW9kYWxTbGlkZVVwIHtcclxuICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyBvcGFjaXR5OiAwOyB9XHJcbiAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IG9wYWNpdHk6IDE7IH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ },

/***/ 3069
/*!************************************************************************!*\
  !*** ./src/app/shared/components/quiz-player/quiz-player.component.ts ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuizPlayerComponent: () => (/* binding */ QuizPlayerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6124);



const _forTrack0 = ($index, $item) => $item.id;
function QuizPlayerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](0, "div", 0)(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElement"](2, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Chargement du questionnaire\u2026 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()();
  }
}
function QuizPlayerComponent_Conditional_1_For_12_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomListener"]("click", function QuizPlayerComponent_Conditional_1_For_12_For_8_Template_button_click_0_listener() {
      const c_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const q_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.selectAnswer(q_r3.id, c_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ɵ$index_42_r5 = ctx.$index;
    const q_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", ctx_r3.isSelected(q_r3.id, c_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.choiceLetter(ɵ$index_42_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r2.choice_text);
  }
}
function QuizPlayerComponent_Conditional_1_For_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](0, "div", 7)(1, "p", 8)(2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](7, QuizPlayerComponent_Conditional_1_For_12_For_8_Template, 5, 4, "button", 11, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    const q_r3 = ctx.$implicit;
    const ɵ$index_29_r6 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ɵ$index_29_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](q_r3.question_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](q_r3.choices);
  }
}
function QuizPlayerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](0, "div", 0)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElement"](3, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](4, "div")(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "R\u00E9pondez \u00E0 toutes les questions avant de postuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](9, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](11, QuizPlayerComponent_Conditional_1_For_12_Template, 9, 2, "div", 7, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r3.quiz == null ? null : ctx_r3.quiz.title) || "Quiz de pr\u00E9s\u00E9lection");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r3.answeredCount, "/", ctx_r3.totalQuestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r3.quiz == null ? null : ctx_r3.quiz.questions);
  }
}
class QuizPlayerComponent {
  quiz = null;
  loading = false;
  answers = {};
  answerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  get answeredCount() {
    if (!this.quiz?.questions) return 0;
    return this.quiz.questions.filter(q => this.answers[q.id]).length;
  }
  get totalQuestions() {
    return this.quiz?.questions?.length || 0;
  }
  selectAnswer(questionId, choiceId) {
    this.answerChange.emit({
      questionId,
      choiceId
    });
  }
  isSelected(questionId, choiceId) {
    return this.answers[questionId] === choiceId;
  }
  choiceLetter(index) {
    return ['A', 'B', 'C'][index] || '?';
  }
  static ɵfac = function QuizPlayerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || QuizPlayerComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: QuizPlayerComponent,
    selectors: [["app-quiz-player"]],
    inputs: {
      quiz: "quiz",
      loading: "loading",
      answers: "answers"
    },
    outputs: {
      answerChange: "answerChange"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "quiz-player-card"], [1, "quiz-loading"], [1, "bi", "bi-arrow-repeat"], [1, "quiz-player-header"], [1, "quiz-player-icon"], [1, "bi", "bi-ui-checks-grid"], [1, "quiz-progress"], [1, "question-block"], [1, "question-label"], [1, "question-index"], [1, "choices-grid"], ["type", "button", 1, "choice-option", 3, "selected"], ["type", "button", 1, "choice-option", 3, "click"], [1, "choice-letter"]],
    template: function QuizPlayerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](0, QuizPlayerComponent_Conditional_0_Template, 4, 0, "div", 0)(1, QuizPlayerComponent_Conditional_1_Template, 13, 3, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.loading ? 0 : (ctx.quiz == null ? null : ctx.quiz.questions == null ? null : ctx.quiz.questions.length) ? 1 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    styles: [".quiz-player-card[_ngcontent-%COMP%] {\n  background: linear-gradient(160deg, #eff6ff 0%, #f8fafc 45%, #ffffff 100%);\n  border: 1px solid #bfdbfe;\n  border-radius: 14px;\n  padding: 20px 22px;\n  margin-top: 8px;\n  box-shadow: 0 8px 24px rgba(14, 165, 233, 0.1);\n}\n\n.quiz-player-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 18px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #dbeafe;\n}\n\n.quiz-player-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: #0ea5e9;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n\n.quiz-player-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n}\n\n.quiz-player-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 12px;\n  color: #64748b;\n}\n\n.quiz-progress[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 12px;\n  font-weight: 700;\n  color: #0369a1;\n  background: #e0f2fe;\n  padding: 6px 12px;\n  border-radius: 20px;\n}\n\n.question-block[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.question-block[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.question-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 12px;\n  line-height: 1.5;\n  display: flex;\n  gap: 8px;\n}\n\n.question-index[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 26px;\n  height: 26px;\n  border-radius: 8px;\n  background: #0ea5e9;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.choices-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.choice-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: #fff;\n  border: 2px solid #e2e8f0;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  text-align: left;\n  width: 100%;\n  font-size: 14px;\n  color: #334155;\n}\n\n.choice-option[_ngcontent-%COMP%]:hover {\n  border-color: #7dd3fc;\n  background: #f0f9ff;\n}\n\n.choice-option.selected[_ngcontent-%COMP%] {\n  border-color: #0ea5e9;\n  background: #e0f2fe;\n  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.15);\n}\n\n.choice-letter[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #f1f5f9;\n  color: #475569;\n  font-weight: 800;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.choice-option.selected[_ngcontent-%COMP%]   .choice-letter[_ngcontent-%COMP%] {\n  background: #0ea5e9;\n  color: #fff;\n}\n\n.quiz-loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  color: #64748b;\n  font-size: 14px;\n}\n\n.quiz-loading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 24px;\n  margin-bottom: 8px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to { transform: rotate(360deg); }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcXVpei1wbGF5ZXIvcXVpei1wbGF5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBFQUEwRTtFQUMxRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxLQUFLLHlCQUF5QixFQUFFO0FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiLnF1aXotcGxheWVyLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsICNlZmY2ZmYgMCUsICNmOGZhZmMgNDUlLCAjZmZmZmZmIDEwMCUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmRiZmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBwYWRkaW5nOiAyMHB4IDIycHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgxNCwgMTY1LCAyMzMsIDAuMSk7XHJcbn1cclxuXHJcbi5xdWl6LXBsYXllci1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZWFmZTtcclxufVxyXG5cclxuLnF1aXotcGxheWVyLWljb24ge1xyXG4gIHdpZHRoOiA0NHB4O1xyXG4gIGhlaWdodDogNDRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICMwZWE1ZTk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnF1aXotcGxheWVyLWhlYWRlciBoNCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG59XHJcblxyXG4ucXVpei1wbGF5ZXItaGVhZGVyIHAge1xyXG4gIG1hcmdpbjogMnB4IDAgMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbn1cclxuXHJcbi5xdWl6LXByb2dyZXNzIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzAzNjlhMTtcclxuICBiYWNrZ3JvdW5kOiAjZTBmMmZlO1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5xdWVzdGlvbi1ibG9jayB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnF1ZXN0aW9uLWJsb2NrOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5xdWVzdGlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMxZTI5M2I7XHJcbiAgbWFyZ2luOiAwIDAgMTJweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5xdWVzdGlvbi1pbmRleCB7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgd2lkdGg6IDI2cHg7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kOiAjMGVhNWU5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNob2ljZXMtZ3JpZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4uY2hvaWNlLW9wdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxuICBwYWRkaW5nOiAxMnB4IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMzM0MTU1O1xyXG59XHJcblxyXG4uY2hvaWNlLW9wdGlvbjpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjN2RkM2ZjO1xyXG4gIGJhY2tncm91bmQ6ICNmMGY5ZmY7XHJcbn1cclxuXHJcbi5jaG9pY2Utb3B0aW9uLnNlbGVjdGVkIHtcclxuICBib3JkZXItY29sb3I6ICMwZWE1ZTk7XHJcbiAgYmFja2dyb3VuZDogI2UwZjJmZTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxNCwgMTY1LCAyMzMsIDAuMTUpO1xyXG59XHJcblxyXG4uY2hvaWNlLWxldHRlciB7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xyXG4gIGNvbG9yOiAjNDc1NTY5O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmNob2ljZS1vcHRpb24uc2VsZWN0ZWQgLmNob2ljZS1sZXR0ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwZWE1ZTk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5xdWl6LWxvYWRpbmcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnF1aXotbG9hZGluZyBpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
//# sourceMappingURL=src_app_features_candidate_job-search_job-search_component_ts.js.map