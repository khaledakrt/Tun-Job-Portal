"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["default-src_app_shared_components_quiz-builder_quiz-builder_component_ts-src_environments_env-90c5b7"],{

/***/ 9205
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/quiz-builder/quiz-builder.component.ts ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuizBuilderComponent: () => (/* binding */ QuizBuilderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _constants_quiz_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/quiz.constants */ 3692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);





const _c0 = () => ["A", "B", "C"];
function QuizBuilderComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r0.isActive)("hidden", !ctx_r0.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.isActive ? "Visible candidats" : "Masqu\u00E9", " ");
  }
}
function QuizBuilderComponent_Conditional_13_For_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuizBuilderComponent_Conditional_13_For_7_Conditional_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ɵ$index_37_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.removeQuestion(ɵ$index_37_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Supprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function QuizBuilderComponent_Conditional_13_For_7_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21)(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function QuizBuilderComponent_Conditional_13_For_7_For_9_Template_input_ngModelChange_3_listener($event) {
      const c_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](c_r8.choice_text, $event) || (c_r8.choice_text = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuizBuilderComponent_Conditional_13_For_7_For_9_Template_button_click_4_listener() {
      const ɵ$index_54_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7).$index;
      const ɵ$index_37_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.setCorrectChoice(ɵ$index_37_r5, ɵ$index_54_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    const ɵ$index_54_r9 = ctx.$index;
    const ɵ$index_37_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("correct-selected", c_r8.is_correct);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0)[ɵ$index_54_r9]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", c_r8.choice_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", "qb_c_" + ɵ$index_37_r5 + "_" + ɵ$index_54_r9)("placeholder", "R\u00E9ponse " + _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c0)[ɵ$index_54_r9]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-correct", c_r8.is_correct);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", c_r8.is_correct ? "\u2713 Bonne r\u00E9ponse" : "Marquer correcte", " ");
  }
}
function QuizBuilderComponent_Conditional_13_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "div", 14)(2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](4, QuizBuilderComponent_Conditional_13_For_7_Conditional_4_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function QuizBuilderComponent_Conditional_13_For_7_Template_input_ngModelChange_5_listener($event) {
      const q_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](q_r6.question_text, $event) || (q_r6.question_text = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "3 r\u00E9ponses \u2014 cliquez sur \u00AB Bonne r\u00E9ponse \u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](8, QuizBuilderComponent_Conditional_13_For_7_For_9_Template, 6, 11, "div", 19, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r6 = ctx.$implicit;
    const ɵ$index_37_r5 = ctx.$index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Question ", ɵ$index_37_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r0.questions.length > 1 ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", q_r6.question_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", "qb_q_" + ɵ$index_37_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](q_r6.choices);
  }
}
function QuizBuilderComponent_Conditional_13_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuizBuilderComponent_Conditional_13_Conditional_10_Conditional_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.toggleVisibility.emit(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Masquer aux candidats ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function QuizBuilderComponent_Conditional_13_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuizBuilderComponent_Conditional_13_Conditional_10_Conditional_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.toggleVisibility.emit(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Rendre disponible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function QuizBuilderComponent_Conditional_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuizBuilderComponent_Conditional_13_Conditional_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.save.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](3, QuizBuilderComponent_Conditional_13_Conditional_10_Conditional_3_Template, 3, 0, "button", 26)(4, QuizBuilderComponent_Conditional_13_Conditional_10_Conditional_4_Template, 3, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.isSaving ? "Enregistrement\u2026" : "Enregistrer le quiz", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r0.isActive ? 3 : 4);
  }
}
function QuizBuilderComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Titre affich\u00E9 aux candidats");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function QuizBuilderComponent_Conditional_13_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.updateTitle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](6, QuizBuilderComponent_Conditional_13_For_7_Template, 10, 4, "div", 11, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuizBuilderComponent_Conditional_13_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.addQuestion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](10, QuizBuilderComponent_Conditional_13_Conditional_10_Template, 5, 3, "div", 13);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.quizTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r0.questions.length, " / ", ctx_r0.maxQuestions, " questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r0.questions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.questions.length >= ctx_r0.maxQuestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" + Ajouter une question (", ctx_r0.questions.length, "/", ctx_r0.maxQuestions, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r0.showManageActions ? 10 : -1);
  }
}
class QuizBuilderComponent {
  cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  enabled = false;
  quizTitle = 'Quiz de présélection';
  questions = [];
  isActive = true;
  showManageActions = false;
  isSaving = false;
  enabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  quizTitleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  questionsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  isActiveChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  toggleVisibility = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  maxQuestions = _constants_quiz_constants__WEBPACK_IMPORTED_MODULE_3__.QUIZ_MAX_QUESTIONS;
  choicesCount = _constants_quiz_constants__WEBPACK_IMPORTED_MODULE_3__.QUIZ_CHOICES_PER_QUESTION;
  onToggleEnabled(checked) {
    this.enabledChange.emit(checked);
    if (checked && this.questions.length === 0) {
      this.addQuestion();
    }
    this.cdr.detectChanges();
  }
  addQuestion() {
    if (this.questions.length >= _constants_quiz_constants__WEBPACK_IMPORTED_MODULE_3__.QUIZ_MAX_QUESTIONS) return;
    const next = [...this.questions, (0,_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_3__.createEmptyQuestion)()];
    this.questionsChange.emit(next);
    this.cdr.detectChanges();
  }
  removeQuestion(index) {
    if (this.questions.length <= 1) return;
    const next = this.questions.filter((_, i) => i !== index);
    this.questionsChange.emit(next);
    this.cdr.detectChanges();
  }
  setCorrectChoice(qIndex, cIndex) {
    const next = this.questions.map((q, qi) => {
      if (qi !== qIndex) return q;
      return {
        ...q,
        choices: q.choices.map((c, ci) => ({
          ...c,
          is_correct: ci === cIndex
        }))
      };
    });
    this.questionsChange.emit(next);
    this.cdr.detectChanges();
  }
  updateTitle(value) {
    this.quizTitleChange.emit(value);
  }
  validate() {
    if (!this.enabled) return null;
    if (!this.questions.length) return 'Ajoutez au moins une question.';
    for (let i = 0; i < this.questions.length; i++) {
      const q = this.questions[i];
      if (!q.question_text.trim()) return `La question ${i + 1} est vide.`;
      const filled = q.choices.filter(c => c.choice_text.trim());
      if (filled.length < _constants_quiz_constants__WEBPACK_IMPORTED_MODULE_3__.QUIZ_CHOICES_PER_QUESTION) {
        return `La question ${i + 1} doit avoir 3 réponses.`;
      }
      if (!q.choices.some(c => c.is_correct)) {
        return `Indiquez la bonne réponse pour la question ${i + 1}.`;
      }
    }
    return null;
  }
  buildPayload() {
    return {
      title: this.quizTitle.trim() || 'Quiz de présélection',
      questions: this.questions.map(q => ({
        question_text: q.question_text.trim(),
        question_type: 'single',
        choices: q.choices.map(c => ({
          choice_text: c.choice_text.trim(),
          is_correct: !!c.is_correct
        }))
      }))
    };
  }
  static ɵfac = function QuizBuilderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || QuizBuilderComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: QuizBuilderComponent,
    selectors: [["app-quiz-builder"]],
    inputs: {
      enabled: "enabled",
      quizTitle: "quizTitle",
      questions: "questions",
      isActive: "isActive",
      showManageActions: "showManageActions",
      isSaving: "isSaving"
    },
    outputs: {
      enabledChange: "enabledChange",
      quizTitleChange: "quizTitleChange",
      questionsChange: "questionsChange",
      isActiveChange: "isActiveChange",
      save: "save",
      toggleVisibility: "toggleVisibility"
    },
    decls: 14,
    vars: 4,
    consts: [[1, "quiz-builder-card"], [1, "quiz-builder-header"], [1, "bi", "bi-patch-question-fill"], [1, "quiz-status-pill", 3, "active", "hidden"], [1, "quiz-toggle-row", 2, "margin-bottom", "14px", "cursor", "pointer"], ["type", "checkbox", 3, "change", "checked"], [2, "font-size", "14px", "font-weight", "600", "color", "#334155"], [1, "quiz-status-pill"], [1, "quiz-title-field"], ["type", "text", "name", "quizTitleInput", "placeholder", "Ex : Test technique \u2014 D\u00E9veloppeur Angular", 3, "ngModelChange", "ngModel"], [1, "quiz-counter"], [1, "question-card"], ["type", "button", 1, "btn-add-question", 3, "click", "disabled"], [1, "quiz-actions-bar"], [1, "question-card-header"], [1, "question-number"], ["type", "button", 1, "btn-remove-q"], ["type", "text", "placeholder", "Ex : Quelle est votre exp\u00E9rience avec Angular ?", 3, "ngModelChange", "ngModel", "name"], [1, "choices-label"], [1, "choice-row", 3, "correct-selected"], ["type", "button", 1, "btn-remove-q", 3, "click"], [1, "choice-row"], [2, "font-weight", "700", "color", "#94a3b8", "width", "18px"], ["type", "text", 3, "ngModelChange", "ngModel", "name", "placeholder"], ["type", "button", 1, "btn-mark-correct", 3, "click"], ["type", "button", 1, "btn-save-quiz", 3, "click", "disabled"], ["type", "button", 1, "btn-hide-quiz"], ["type", "button", 1, "btn-hide-quiz", "btn-show-quiz"], ["type", "button", 1, "btn-hide-quiz", 3, "click"], [1, "bi", "bi-eye-slash"], ["type", "button", 1, "btn-hide-quiz", "btn-show-quiz", 3, "click"], [1, "bi", "bi-eye"]],
    template: function QuizBuilderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Quiz de pr\u00E9s\u00E9lection");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](8, QuizBuilderComponent_Conditional_8_Template, 2, 5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 4)(10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function QuizBuilderComponent_Template_input_change_10_listener($event) {
          return ctx.onToggleEnabled($event.target.checked);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Activer un quiz pour cette offre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](13, QuizBuilderComponent_Conditional_13_Template, 11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Maximum ", ctx.maxQuestions, " questions \u00B7 3 r\u00E9ponses QCM par question \u00B7 1 bonne r\u00E9ponse");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.showManageActions ? 8 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.enabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.enabled ? 13 : -1);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
    styles: [".quiz-builder-card[_ngcontent-%COMP%] {\n  background: linear-gradient(145deg, #f8fafc 0%, #f1f5f9 100%);\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 20px;\n  margin-top: 16px;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);\n}\n\n.quiz-builder-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 18px;\n}\n\n.quiz-builder-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.quiz-builder-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0ea5e9;\n}\n\n.quiz-builder-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #64748b;\n}\n\n.quiz-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n\n.quiz-status-pill[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n\n.quiz-status-pill.active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n\n.quiz-status-pill.hidden[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n\n.quiz-title-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 6px;\n}\n\n.quiz-title-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n\n.question-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px;\n  margin-top: 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n\n.question-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n\n.question-number[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #0ea5e9;\n  background: #e0f2fe;\n  padding: 4px 10px;\n  border-radius: 6px;\n}\n\n.question-card[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  margin-bottom: 12px;\n  box-sizing: border-box;\n}\n\n.choices-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n  display: block;\n}\n\n.choice-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 8px;\n  padding: 8px 10px;\n  border-radius: 8px;\n  border: 1px solid #f1f5f9;\n  transition: border-color 0.15s, background 0.15s;\n}\n\n.choice-row.correct-selected[_ngcontent-%COMP%] {\n  border-color: #86efac;\n  background: #f0fdf4;\n}\n\n.choice-row[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0;\n  border: none;\n  background: transparent;\n  padding: 4px 0;\n}\n\n.choice-row[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.btn-mark-correct[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  border: 1px solid #cbd5e1;\n  background: #fff;\n  color: #64748b;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 6px 10px;\n  border-radius: 6px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.btn-mark-correct.is-correct[_ngcontent-%COMP%] {\n  background: #10b981;\n  border-color: #10b981;\n  color: #fff;\n}\n\n.btn-add-question[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 14px;\n  padding: 12px;\n  border: 2px dashed #bae6fd;\n  background: #f0f9ff;\n  color: #0369a1;\n  font-size: 13px;\n  font-weight: 600;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.btn-add-question[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.btn-remove-q[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: #ef4444;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.quiz-counter[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 8px;\n}\n\n.quiz-actions-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 16px;\n  flex-wrap: wrap;\n}\n\n.btn-save-quiz[_ngcontent-%COMP%] {\n  background: #0ea5e9;\n  color: #fff;\n  border: none;\n  padding: 10px 18px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n}\n\n.btn-hide-quiz[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #64748b;\n  border: 1px solid #cbd5e1;\n  padding: 10px 18px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n}\n\n.btn-show-quiz[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n  border: 1px solid #a7f3d0;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcXVpei1idWlsZGVyL3F1aXotYnVpbGRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkRBQTZEO0VBQzdELHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsU0FBUztFQUNULFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiLnF1aXotYnVpbGRlci1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjZjhmYWZjIDAlLCAjZjFmNWY5IDEwMCUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDE1LCAyMywgNDIsIDAuMDYpO1xyXG59XHJcblxyXG4ucXVpei1idWlsZGVyLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbi5xdWl6LWJ1aWxkZXItaGVhZGVyIGg0IHtcclxuICBtYXJnaW46IDAgMCA0cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4ucXVpei1idWlsZGVyLWhlYWRlciBoNCBpIHtcclxuICBjb2xvcjogIzBlYTVlOTtcclxufVxyXG5cclxuLnF1aXotYnVpbGRlci1oZWFkZXIgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxufVxyXG5cclxuLnF1aXotdG9nZ2xlLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLnF1aXotc3RhdHVzLXBpbGwge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG59XHJcblxyXG4ucXVpei1zdGF0dXMtcGlsbC5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNkY2ZjZTc7XHJcbiAgY29sb3I6ICMxNjY1MzQ7XHJcbn1cclxuXHJcbi5xdWl6LXN0YXR1cy1waWxsLmhpZGRlbiB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjVmOTtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxufVxyXG5cclxuLnF1aXotdGl0bGUtZmllbGQgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNDc1NTY5O1xyXG4gIG1hcmdpbi1ib3R0b206IDZweDtcclxufVxyXG5cclxuLnF1aXotdGl0bGUtZmllbGQgaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnF1ZXN0aW9uLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxufVxyXG5cclxuLnF1ZXN0aW9uLWNhcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5xdWVzdGlvbi1udW1iZXIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMGVhNWU5O1xyXG4gIGJhY2tncm91bmQ6ICNlMGYyZmU7XHJcbiAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4ucXVlc3Rpb24tY2FyZCBpbnB1dFt0eXBlPSd0ZXh0J10ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY2hvaWNlcy1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jaG9pY2Utcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBwYWRkaW5nOiA4cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMsIGJhY2tncm91bmQgMC4xNXM7XHJcbn1cclxuXHJcbi5jaG9pY2Utcm93LmNvcnJlY3Qtc2VsZWN0ZWQge1xyXG4gIGJvcmRlci1jb2xvcjogIzg2ZWZhYztcclxuICBiYWNrZ3JvdW5kOiAjZjBmZGY0O1xyXG59XHJcblxyXG4uY2hvaWNlLXJvdyBpbnB1dFt0eXBlPSd0ZXh0J10ge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiA0cHggMDtcclxufVxyXG5cclxuLmNob2ljZS1yb3cgaW5wdXRbdHlwZT0ndGV4dCddOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uYnRuLW1hcmstY29ycmVjdCB7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmJ0bi1tYXJrLWNvcnJlY3QuaXMtY29ycmVjdCB7XHJcbiAgYmFja2dyb3VuZDogIzEwYjk4MTtcclxuICBib3JkZXItY29sb3I6ICMxMGI5ODE7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5idG4tYWRkLXF1ZXN0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkICNiYWU2ZmQ7XHJcbiAgYmFja2dyb3VuZDogI2YwZjlmZjtcclxuICBjb2xvcjogIzAzNjlhMTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bi1hZGQtcXVlc3Rpb246ZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4uYnRuLXJlbW92ZS1xIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBjb2xvcjogI2VmNDQ0NDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5xdWl6LWNvdW50ZXIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5xdWl6LWFjdGlvbnMtYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmJ0bi1zYXZlLXF1aXoge1xyXG4gIGJhY2tncm91bmQ6ICMwZWE1ZTk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHggMThweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuLWhpZGUtcXVpeiB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xyXG4gIHBhZGRpbmc6IDEwcHggMThweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuLXNob3ctcXVpeiB7XHJcbiAgYmFja2dyb3VuZDogI2VjZmRmNTtcclxuICBjb2xvcjogIzA1OTY2OTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYTdmM2QwO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ },

/***/ 3692
/*!****************************************************!*\
  !*** ./src/app/shared/constants/quiz.constants.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QUIZ_CHOICES_PER_QUESTION: () => (/* binding */ QUIZ_CHOICES_PER_QUESTION),
/* harmony export */   QUIZ_MAX_QUESTIONS: () => (/* binding */ QUIZ_MAX_QUESTIONS),
/* harmony export */   createEmptyQuestion: () => (/* binding */ createEmptyQuestion)
/* harmony export */ });
const QUIZ_MAX_QUESTIONS = 5;
const QUIZ_CHOICES_PER_QUESTION = 3;
function createEmptyQuestion() {
  return {
    question_text: '',
    question_type: 'single',
    choices: [{
      choice_text: '',
      is_correct: true
    }, {
      choice_text: '',
      is_correct: false
    }, {
      choice_text: '',
      is_correct: false
    }]
  };
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
//# sourceMappingURL=default-src_app_shared_components_quiz-builder_quiz-builder_component_ts-src_environments_env-90c5b7.js.map