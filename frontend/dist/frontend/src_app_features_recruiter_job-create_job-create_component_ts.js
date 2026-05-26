"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_features_recruiter_job-create_job-create_component_ts"],{

/***/ 3538
/*!***********************************************************************!*\
  !*** ./src/app/features/recruiter/job-create/job-create.component.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobCreateComponent: () => (/* binding */ JobCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ 5312);
/* harmony import */ var _shared_components_quiz_builder_quiz_builder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/quiz-builder/quiz-builder.component */ 9205);
/* harmony import */ var _shared_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/constants/quiz.constants */ 3692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 6124);










function JobCreateComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 5)(1, "div", 52)(2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r0.notification.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.notification.type === "success" ? "\u2705" : "\u274C");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.notification.message);
  }
}
function JobCreateComponent_Conditional_80_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", skill_r2, " ");
  }
}
function JobCreateComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](1, JobCreateComponent_Conditional_80_For_2_Template, 2, 1, "span", 55, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx_r0.getSkillsArray());
  }
}
function JobCreateComponent_Conditional_85_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lang_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", lang_r3, " ");
  }
}
function JobCreateComponent_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](1, JobCreateComponent_Conditional_85_For_2_Template, 2, 1, "span", 55, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx_r0.getLanguagesArray());
  }
}
class JobCreateComponent {
  router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient);
  notification = {
    show: false,
    message: '',
    type: 'success'
  };
  job = {
    title: '',
    contract_type: 'CDI',
    location: '',
    workplace_type: 'Présentiel',
    salary: '',
    experience_level: 'Junior (0-2 ans)',
    missions_desc: '',
    profile_desc: '',
    skills_desc: '',
    languages_desc: '',
    expires_at: ''
  };
  hasQuiz = false;
  quizTitle = 'Quiz de présélection';
  quizQuestions = [];
  showFlashMessage(message, type, callback) {
    this.notification = {
      show: true,
      message,
      type
    };
    this.cdr.detectChanges();
    setTimeout(() => {
      this.notification.show = false;
      this.cdr.detectChanges();
      if (callback) callback();
    }, 3000);
  }
  getSkillsArray() {
    if (!this.job.skills_desc) return [];
    return this.job.skills_desc.split(',').map(s => s.trim()).filter(Boolean);
  }
  getLanguagesArray() {
    if (!this.job.languages_desc) return [];
    return this.job.languages_desc.split(',').map(s => s.trim()).filter(Boolean);
  }
  onQuizEnabledChange(v) {
    this.hasQuiz = v;
    if (v && !this.quizQuestions.length) {
      this.quizQuestions = [(0,_shared_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_8__.createEmptyQuestion)()];
    }
    this.cdr.detectChanges();
  }
  onPublish(event) {
    event.preventDefault();
    if (!this.job.title || !this.job.location || !this.job.missions_desc || !this.job.profile_desc || !this.job.skills_desc || !this.job.languages_desc) {
      this.showFlashMessage("Veuillez renseigner tous les champs obligatoires (*).", 'error');
      return;
    }
    if (this.hasQuiz) {
      const err = this.validateQuizLocal();
      if (err) {
        this.showFlashMessage(err, 'error');
        return;
      }
    }
    const payload = {
      ...this.job,
      has_quiz: this.hasQuiz
    };
    if (this.hasQuiz) {
      payload.quiz = {
        title: this.quizTitle.trim() || 'Quiz de présélection',
        questions: this.quizQuestions.map(q => ({
          question_text: q.question_text.trim(),
          question_type: 'single',
          choices: q.choices.map(c => ({
            choice_text: c.choice_text.trim(),
            is_correct: !!c.is_correct
          }))
        }))
      };
    }
    this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.apiUrl}/recruiter/jobs/create`, payload).subscribe({
      next: res => {
        this.showFlashMessage(res.message || "Annonce diffusée avec succès !", 'success', () => this.router.navigate(['/recruiter/job-manage']));
      },
      error: err => {
        const msg = err.error?.message || err.error?.errors?.join(' ') || "Impossible de diffuser l'offre.";
        this.showFlashMessage(msg, 'error');
      }
    });
  }
  validateQuizLocal() {
    if (!this.quizQuestions.length) return 'Ajoutez au moins une question.';
    for (let i = 0; i < this.quizQuestions.length; i++) {
      const q = this.quizQuestions[i];
      if (!q.question_text.trim()) return `La question ${i + 1} est vide.`;
      if (q.choices.filter(c => c.choice_text.trim()).length < 3) {
        return `La question ${i + 1} doit avoir 3 réponses.`;
      }
      if (!q.choices.some(c => c.is_correct)) {
        return `Indiquez la bonne réponse (question ${i + 1}).`;
      }
    }
    return null;
  }
  static ɵfac = function JobCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || JobCreateComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: JobCreateComponent,
    selectors: [["app-job-create"]],
    decls: 91,
    vars: 17,
    consts: [[1, "job-container-compact"], [1, "card-header-flex-compact"], [1, "card-header-left"], [1, "bi", "bi-file-earmark-medical-fill", 2, "color", "#0ea5e9"], [2, "margin", "2px 0 0 0", "color", "#64748b", "font-size", "13px"], [1, "toast-notification", 3, "ngClass"], [1, "job-split-layout", 3, "ngSubmit"], [1, "job-panel-card"], [1, "panel-inner-title"], [1, "bi", "bi-sliders"], [1, "compact-form-grid"], [1, "form-group-compact", "span-all"], ["for", "title"], ["type", "text", "id", "title", "name", "title", "placeholder", "Ex: D\u00E9veloppeur Angular Senior", "required", "", 3, "ngModelChange", "ngModel"], ["for", "location"], ["type", "text", "id", "location", "name", "location", "placeholder", "Ex: Les Berges du Lac, Tunis", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-group-compact"], ["for", "contract_type"], ["id", "contract_type", "name", "contract_type", 1, "form-select-compact", 3, "ngModelChange", "ngModel"], ["value", "CDI"], ["value", "CDD"], ["value", "SIVP"], ["value", "Freelance"], ["for", "workplace_type"], ["id", "workplace_type", "name", "workplace_type", 1, "form-select-compact", 3, "ngModelChange", "ngModel"], ["value", "Pr\u00E9sentiel"], ["value", "Hybride"], ["value", "T\u00E9l\u00E9travail"], ["for", "salary"], ["type", "text", "id", "salary", "name", "salary", "placeholder", "Ex: 1500 - 2200 DT", 3, "ngModelChange", "ngModel"], ["for", "experience_level"], ["id", "experience_level", "name", "experience_level", 1, "form-select-compact", 3, "ngModelChange", "ngModel"], ["value", "Junior (0-2 ans)"], ["value", "Interm\u00E9diaire (2-5 ans)"], ["value", "Senior (5+ ans)"], ["for", "expires_at"], ["type", "date", "id", "expires_at", "name", "expires_at", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-text-paragraph"], [1, "compact-form-grid", "vertical-stack"], ["for", "missions"], ["id", "missions", "name", "missions_desc", "rows", "3", "placeholder", "D\u00E9crivez les responsabilit\u00E9s quotidiennes et les projets techniques...", "required", "", 3, "ngModelChange", "ngModel"], ["for", "profile"], ["id", "profile", "name", "profile_desc", "rows", "3", "placeholder", "Comp\u00E9tences cl\u00E9s, technologies ma\u00EEtris\u00E9es, soft skills...", "required", "", 3, "ngModelChange", "ngModel"], ["for", "skills"], ["id", "skills", "name", "skills_desc", "rows", "2", "placeholder", "Ex: Docker, Kubernetes, MySQL, JavaScript... (S\u00E9parez par des virgules)", "required", "", 3, "ngModelChange", "ngModel"], [1, "skills-badge-preview-grid", 2, "display", "flex", "flex-wrap", "wrap", "gap", "8px", "margin-top", "8px"], ["for", "languages"], ["id", "languages", "name", "languages_desc", "rows", "2", "placeholder", "Ex: Fran\u00E7ais (Excellent), Anglais (Technique)... (S\u00E9parez par des virgules)", "required", "", 3, "ngModelChange", "ngModel"], [1, "span-all", 3, "enabledChange", "quizTitleChange", "questionsChange", "enabled", "quizTitle", "questions"], [1, "form-actions-compact", 2, "margin-top", "20px"], ["type", "submit", 1, "btn-publish-job-compact"], [1, "bi", "bi-rocket-takeoff-fill"], [1, "toast-content"], [1, "toast-icon"], [1, "toast-message"], [1, "live-skill-tag", 2, "background-color", "#f0f9ff", "color", "#0369a1", "border", "1px solid #e0f2fe", "padding", "5px 12px", "border-radius", "6px", "font-size", "12.5px", "font-weight", "600"]],
    template: function JobCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " R\u00E9daction d'une fiche de poste");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Remplissez les crit\u00E8res requis pour diffuser votre annonce d'emploi en Tunisie.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](8, JobCreateComponent_Conditional_8_Template, 6, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function JobCreateComponent_Template_form_ngSubmit_9_listener($event) {
          return ctx.onPublish($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, " Crit\u00E8res de l'offre");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Intitul\u00E9 du poste *");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function JobCreateComponent_Template_input_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.job.title, $event) || (ctx.job.title = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 11)(20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Localisation *");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function JobCreateComponent_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.job.location, $event) || (ctx.job.location = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 16)(24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Type de contrat");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function JobCreateComponent_Template_select_ngModelChange_26_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.job.contract_type, $event) || (ctx.job.contract_type = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "CDI");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "CDD");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "SIVP / Stage");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Freelance");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 16)(36, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "Mode de travail");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function JobCreateComponent_Template_select_ngModelChange_38_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.job.workplace_type, $event) || (ctx.job.workplace_type = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "Pr\u00E9sentiel");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "Hybride");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "T\u00E9l\u00E9travail \u00E0 100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 16)(46, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "Salaire indicatif (Optionnel)");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function JobCreateComponent_Template_input_ngModelChange_48_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.job.salary, $event) || (ctx.job.salary = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 16)(50, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "Exp\u00E9rience requise");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function JobCreateComponent_Template_select_ngModelChange_52_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.job.experience_level, $event) || (ctx.job.experience_level = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "Junior (0-2 ans)");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "Interm\u00E9diaire (2-5 ans)");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "Senior (5+ ans)");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "div", 11)(60, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61, "Date limite de candidature");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function JobCreateComponent_Template_input_ngModelChange_62_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.job.expires_at, $event) || (ctx.job.expires_at = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div", 7)(64, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](65, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, " Contenu de la fiche de poste");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "div", 38)(68, "div", 16)(69, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, "Missions principales *");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "textarea", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function JobCreateComponent_Template_textarea_ngModelChange_71_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.job.missions_desc, $event) || (ctx.job.missions_desc = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "div", 16)(73, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74, "Profil recherch\u00E9 & Pr\u00E9requis *");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "textarea", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function JobCreateComponent_Template_textarea_ngModelChange_75_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.job.profile_desc, $event) || (ctx.job.profile_desc = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "div", 16)(77, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](78, "Comp\u00E9tences cl\u00E9s & Technologies *");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "textarea", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function JobCreateComponent_Template_textarea_ngModelChange_79_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.job.skills_desc, $event) || (ctx.job.skills_desc = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](80, JobCreateComponent_Conditional_80_Template, 3, 0, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "div", 16)(82, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](83, "Langues exig\u00E9es *");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "textarea", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function JobCreateComponent_Template_textarea_ngModelChange_84_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.job.languages_desc, $event) || (ctx.job.languages_desc = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](85, JobCreateComponent_Conditional_85_Template, 3, 0, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "app-quiz-builder", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("enabledChange", function JobCreateComponent_Template_app_quiz_builder_enabledChange_86_listener($event) {
          return ctx.onQuizEnabledChange($event);
        })("quizTitleChange", function JobCreateComponent_Template_app_quiz_builder_quizTitleChange_86_listener($event) {
          return ctx.quizTitle = $event;
        })("questionsChange", function JobCreateComponent_Template_app_quiz_builder_questionsChange_86_listener($event) {
          return ctx.quizQuestions = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "div", 49)(88, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](89, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](90, " Diffuser l'annonce ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.notification.show ? 8 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.job.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.job.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.job.contract_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.job.workplace_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.job.salary);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.job.experience_level);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.job.expires_at);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.job.missions_desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.job.profile_desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.job.skills_desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.getSkillsArray().length > 0 ? 80 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.job.languages_desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.getLanguagesArray().length > 0 ? 85 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("enabled", ctx.hasQuiz)("quizTitle", ctx.quizTitle)("questions", ctx.quizQuestions);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _shared_components_quiz_builder_quiz_builder_component__WEBPACK_IMPORTED_MODULE_7__.QuizBuilderComponent],
    styles: ["/* ==========================================================================\n   \uD83D\uDD4B CONTENEUR PRINCIPAL FLUIDE & SAAS DESIGN\n   ========================================================================== */\n.job-container-compact { \n  max-width: 100% !important; \n  margin: 0 auto; \n  padding: 0 20px !important; \n  font-family: inherit; \n  box-sizing: border-box;\n}\n\n.card-header-flex-compact { \n  display: flex; \n  justify-content: space-between; \n  align-items: center; \n  margin-bottom: 15px; \n}\n\n.card-header-left h3 { \n  margin: 0; \n  color: #0f172a; \n  font-size: 18px; \n  font-weight: 700; \n  display: flex; \n  align-items: center; \n  gap: 8px; \n}\n\n/* ==========================================================================\n   \uD83D\uDC8E DISPOSITION SPLIT : 2 PANNEAUX SANS SCROLL CONTRE LE VIDE\n   ========================================================================== */\n.job-split-layout { \n  display: grid; \n  grid-template-columns: 1fr 1.2fr; /* \u00C9quilibre parfait pour accueillir les textareas \u00E0 droite */\n  gap: 24px; \n  align-items: start; \n  width: 100%;\n}\n\n.job-panel-card { \n  background: #ffffff; \n  border-radius: 12px; \n  border: 1px solid #e2e8f0; \n  padding: 26px; \n  box-shadow: 0 1px 3px rgba(0,0,0,0.02); \n  box-sizing: border-box;\n}\n\n.panel-inner-title { \n  font-size: 14px; \n  font-weight: 700; \n  color: #0f172a; \n  text-align: left; \n  margin-bottom: 18px; \n  display: flex; \n  align-items: center; \n  gap: 8px; \n}\n.panel-inner-title i { color: #0ea5e9; }\n\n/* Grilles de formulaires condens\u00E9es */\n.compact-form-grid { \n  display: grid; \n  grid-template-columns: 1fr 1fr; \n  gap: 14px; \n}\n.compact-form-grid.vertical-stack { \n  grid-template-columns: 1fr; \n  gap: 14px; \n}\n\n.form-group-compact { \n  display: flex; \n  flex-direction: column; \n  gap: 6px; \n}\n.form-group-compact.span-all { \n  grid-column: span 2; \n}\n\n.form-group-compact label { \n  font-size: 11px; \n  font-weight: 700; \n  color: #64748b; \n  text-align: left; \n  text-transform: uppercase; \n  letter-spacing: 0.3px; \n}\n\n/* Zones d'entr\u00E9es et s\u00E9lecteurs unifi\u00E9s */\n.form-group-compact input, \n.form-select-compact, \n.form-group-compact textarea { \n  width: 100% !important; \n  padding: 10px 14px !important; \n  border: 1px solid #cbd5e1 !important; \n  border-radius: 6px !important; \n  font-size: 13.5px !important; \n  box-sizing: border-box !important; \n  color: #1e293b !important; \n  background-color: #ffffff !important; \n  font-family: inherit !important;\n  margin: 0 !important;\n  transition: border-color 0.2s ease;\n}\n\n.form-group-compact input:focus, \n.form-select-compact:focus, \n.form-group-compact textarea:focus { \n  border-color: #0ea5e9 !important; \n  outline: none !important; \n  box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.12) !important; \n}\n\n.form-select-compact {\n  cursor: pointer;\n}\n\n/* Ajustement de hauteur pour les deux zones de texte longues */\n.form-group-compact textarea {\n  min-height: 105px;\n  max-height: 105px;\n  resize: none;\n  line-height: 1.5;\n}\n\n/* \uD83D\uDD18 ACTION DE SOUFFLAGE DE L'OFFRE (BOUTON PREMIUM) */\n.form-actions-compact { \n  display: flex; \n  justify-content: flex-end; \n  padding-top: 15px; \n  border-top: 1px solid #f1f5f9; \n}\n\n.btn-publish-job-compact { \n  background-color: #0ea5e9 !important; \n  color: #ffffff !important; \n  border: none !important; \n  border-radius: 6px !important; \n  padding: 11px 24px !important; \n  font-size: 13.5px !important; \n  font-weight: 600 !important; \n  cursor: pointer !important; \n  display: inline-flex !important; \n  align-items: center !important; \n  gap: 8px !important; \n  transition: background-color 0.2s ease !important; \n}\n\n.btn-publish-job-compact:hover { \n  background-color: #0284c7 !important; \n}\n\n/* ==========================================================================\n   \uD83D\uDE80 TOAST NOTIFICATION FLOATING PRO\n   ========================================================================== */\n.toast-notification {\n  position: fixed !important;\n  top: 25px !important;\n  right: 25px !important;\n  z-index: 12000 !important;\n  min-width: 320px;\n  max-width: 480px;\n  padding: 16px 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  animation: slideInFromRight 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n/* Th\u00E8me d'insertion accept\u00E9e (Vert) */\n.toast-notification.success {\n  background-color: #ecfdf5 !important;\n  border-left: 5px solid #059669 !important;\n  color: #065f46 !important;\n}\n\n/* Th\u00E8me d'erreur (Rouge) */\n.toast-notification.error {\n  background-color: #fef2f2 !important;\n  border-left: 5px solid #dc2626 !important;\n  color: #991b1b !important;\n}\n\n.toast-content {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.toast-icon {\n  font-size: 22px;\n  display: flex;\n  align-items: center;\n}\n\n.toast-message {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  text-align: left;\n}\n\n/* Animation d'apparition dynamique */\n@keyframes slideInFromRight {\n  from { transform: translateX(130%); opacity: 0; }\n  to { transform: translateX(0); opacity: 1; }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVjcnVpdGVyL2pvYi1jcmVhdGUvam9iLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzsrRUFFK0U7QUFDL0U7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBOzsrRUFFK0U7QUFDL0U7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDLEVBQUUsNkRBQTZEO0VBQy9GLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWO0FBQ0EsdUJBQXVCLGNBQWMsRUFBRTs7QUFFdkMsc0NBQXNDO0FBQ3RDO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0FBQ1g7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUEsMENBQTBDO0FBQzFDOzs7RUFHRSxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLCtCQUErQjtFQUMvQixvQkFBb0I7RUFDcEIsa0NBQWtDO0FBQ3BDOztBQUVBOzs7RUFHRSxnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsK0RBQStEO0FBQy9EO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBLHVEQUF1RDtBQUN2RDtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsK0JBQStCO0VBQy9CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBOzsrRUFFK0U7QUFDL0U7RUFDRSwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDJDQUEyQztFQUMzQyxpRUFBaUU7QUFDbkU7O0FBRUEsc0NBQXNDO0FBQ3RDO0VBQ0Usb0NBQW9DO0VBQ3BDLHlDQUF5QztFQUN6Qyx5QkFBeUI7QUFDM0I7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0Usb0NBQW9DO0VBQ3BDLHlDQUF5QztFQUN6Qyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSxPQUFPLDJCQUEyQixFQUFFLFVBQVUsRUFBRTtFQUNoRCxLQUFLLHdCQUF3QixFQUFFLFVBQVUsRUFBRTtBQUM3QyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIMOwwp/ClcKLIENPTlRFTkVVUiBQUklOQ0lQQUwgRkxVSURFICYgU0FBUyBERVNJR05cclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLmpvYi1jb250YWluZXItY29tcGFjdCB7IFxyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50OyBcclxuICBtYXJnaW46IDAgYXV0bzsgXHJcbiAgcGFkZGluZzogMCAyMHB4ICFpbXBvcnRhbnQ7IFxyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyBcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItZmxleC1jb21wYWN0IHsgXHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4OyBcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyLWxlZnQgaDMgeyBcclxuICBtYXJnaW46IDA7IFxyXG4gIGNvbG9yOiAjMGYxNzJhOyBcclxuICBmb250LXNpemU6IDE4cHg7IFxyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7IFxyXG4gIGRpc3BsYXk6IGZsZXg7IFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gIGdhcDogOHB4OyBcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgw7DCn8KSwo4gRElTUE9TSVRJT04gU1BMSVQgOiAyIFBBTk5FQVVYIFNBTlMgU0NST0xMIENPTlRSRSBMRSBWSURFXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5qb2Itc3BsaXQtbGF5b3V0IHsgXHJcbiAgZGlzcGxheTogZ3JpZDsgXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS4yZnI7IC8qIMODwolxdWlsaWJyZSBwYXJmYWl0IHBvdXIgYWNjdWVpbGxpciBsZXMgdGV4dGFyZWFzIMODwqAgZHJvaXRlICovXHJcbiAgZ2FwOiAyNHB4OyBcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7IFxyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uam9iLXBhbmVsLWNhcmQgeyBcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyBcclxuICBib3JkZXItcmFkaXVzOiAxMnB4OyBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyBcclxuICBwYWRkaW5nOiAyNnB4OyBcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjAyKTsgXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnBhbmVsLWlubmVyLXRpdGxlIHsgXHJcbiAgZm9udC1zaXplOiAxNHB4OyBcclxuICBmb250LXdlaWdodDogNzAwOyBcclxuICBjb2xvcjogIzBmMTcyYTsgXHJcbiAgdGV4dC1hbGlnbjogbGVmdDsgXHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDsgXHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgZ2FwOiA4cHg7IFxyXG59XHJcbi5wYW5lbC1pbm5lci10aXRsZSBpIHsgY29sb3I6ICMwZWE1ZTk7IH1cclxuXHJcbi8qIEdyaWxsZXMgZGUgZm9ybXVsYWlyZXMgY29uZGVuc8ODwqllcyAqL1xyXG4uY29tcGFjdC1mb3JtLWdyaWQgeyBcclxuICBkaXNwbGF5OiBncmlkOyBcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IFxyXG4gIGdhcDogMTRweDsgXHJcbn1cclxuLmNvbXBhY3QtZm9ybS1ncmlkLnZlcnRpY2FsLXN0YWNrIHsgXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IFxyXG4gIGdhcDogMTRweDsgXHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwLWNvbXBhY3QgeyBcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICBnYXA6IDZweDsgXHJcbn1cclxuLmZvcm0tZ3JvdXAtY29tcGFjdC5zcGFuLWFsbCB7IFxyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7IFxyXG59XHJcblxyXG4uZm9ybS1ncm91cC1jb21wYWN0IGxhYmVsIHsgXHJcbiAgZm9udC1zaXplOiAxMXB4OyBcclxuICBmb250LXdlaWdodDogNzAwOyBcclxuICBjb2xvcjogIzY0NzQ4YjsgXHJcbiAgdGV4dC1hbGlnbjogbGVmdDsgXHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyBcclxufVxyXG5cclxuLyogWm9uZXMgZCdlbnRyw4PCqWVzIGV0IHPDg8KpbGVjdGV1cnMgdW5pZmnDg8KpcyAqL1xyXG4uZm9ybS1ncm91cC1jb21wYWN0IGlucHV0LCBcclxuLmZvcm0tc2VsZWN0LWNvbXBhY3QsIFxyXG4uZm9ybS1ncm91cC1jb21wYWN0IHRleHRhcmVhIHsgXHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgXHJcbiAgcGFkZGluZzogMTBweCAxNHB4ICFpbXBvcnRhbnQ7IFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTEgIWltcG9ydGFudDsgXHJcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7IFxyXG4gIGZvbnQtc2l6ZTogMTMuNXB4ICFpbXBvcnRhbnQ7IFxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDsgXHJcbiAgY29sb3I6ICMxZTI5M2IgIWltcG9ydGFudDsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50OyBcclxuICBmb250LWZhbWlseTogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwLWNvbXBhY3QgaW5wdXQ6Zm9jdXMsIFxyXG4uZm9ybS1zZWxlY3QtY29tcGFjdDpmb2N1cywgXHJcbi5mb3JtLWdyb3VwLWNvbXBhY3QgdGV4dGFyZWE6Zm9jdXMgeyBcclxuICBib3JkZXItY29sb3I6ICMwZWE1ZTkgIWltcG9ydGFudDsgXHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50OyBcclxuICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSgxNCwgMTY1LCAyMzMsIDAuMTIpICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG4uZm9ybS1zZWxlY3QtY29tcGFjdCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBBanVzdGVtZW50IGRlIGhhdXRldXIgcG91ciBsZXMgZGV1eCB6b25lcyBkZSB0ZXh0ZSBsb25ndWVzICovXHJcbi5mb3JtLWdyb3VwLWNvbXBhY3QgdGV4dGFyZWEge1xyXG4gIG1pbi1oZWlnaHQ6IDEwNXB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwNXB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4vKiDDsMKfwpTCmCBBQ1RJT04gREUgU09VRkZMQUdFIERFIEwnT0ZGUkUgKEJPVVRPTiBQUkVNSVVNKSAqL1xyXG4uZm9ybS1hY3Rpb25zLWNvbXBhY3QgeyBcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBcclxuICBwYWRkaW5nLXRvcDogMTVweDsgXHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWY1Zjk7IFxyXG59XHJcblxyXG4uYnRuLXB1Ymxpc2gtam9iLWNvbXBhY3QgeyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGVhNWU5ICFpbXBvcnRhbnQ7IFxyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7IFxyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50OyBcclxuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDsgXHJcbiAgcGFkZGluZzogMTFweCAyNHB4ICFpbXBvcnRhbnQ7IFxyXG4gIGZvbnQtc2l6ZTogMTMuNXB4ICFpbXBvcnRhbnQ7IFxyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDsgXHJcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7IFxyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7IFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDsgXHJcbiAgZ2FwOiA4cHggIWltcG9ydGFudDsgXHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi5idG4tcHVibGlzaC1qb2ItY29tcGFjdDpob3ZlciB7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjg0YzcgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIMOwwp/CmsKAIFRPQVNUIE5PVElGSUNBVElPTiBGTE9BVElORyBQUk9cclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLnRvYXN0LW5vdGlmaWNhdGlvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAxMjAwMCAhaW1wb3J0YW50O1xyXG4gIG1pbi13aWR0aDogMzIwcHg7XHJcbiAgbWF4LXdpZHRoOiA0ODBweDtcclxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZUluRnJvbVJpZ2h0IDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XHJcbn1cclxuXHJcbi8qIFRow4PCqG1lIGQnaW5zZXJ0aW9uIGFjY2VwdMODwqllIChWZXJ0KSAqL1xyXG4udG9hc3Qtbm90aWZpY2F0aW9uLnN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2ZkZjUgIWltcG9ydGFudDtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMwNTk2NjkgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzA2NWY0NiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBUaMODwqhtZSBkJ2VycmV1ciAoUm91Z2UpICovXHJcbi50b2FzdC1ub3RpZmljYXRpb24uZXJyb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWYyZjIgIWltcG9ydGFudDtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNkYzI2MjYgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzk5MWIxYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9hc3QtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTRweDtcclxufVxyXG5cclxuLnRvYXN0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b2FzdC1tZXNzYWdlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4vKiBBbmltYXRpb24gZCdhcHBhcml0aW9uIGR5bmFtaXF1ZSAqL1xyXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Gcm9tUmlnaHQge1xyXG4gIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTMwJSk7IG9wYWNpdHk6IDA7IH1cclxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2
  });
}

/***/ }

}]);
//# sourceMappingURL=src_app_features_recruiter_job-create_job-create_component_ts.js.map