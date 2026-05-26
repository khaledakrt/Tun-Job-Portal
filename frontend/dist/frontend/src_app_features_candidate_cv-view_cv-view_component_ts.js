"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_features_candidate_cv-view_cv-view_component_ts"],{

/***/ 128
/*!*****************************************************************!*\
  !*** ./src/app/features/candidate/cv-view/cv-view.component.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CvViewComponent: () => (/* binding */ CvViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);


 // 🚀 AJOUT : Pour lire l'ID dans l'URL

function CvViewComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Mise en page de vos comp\u00E9tences...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]()();
  }
}
function CvViewComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Profil introuvable");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Veuillez configurer vos donn\u00E9es dans l'onglet de cr\u00E9ation de CV.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]()();
  }
}
function CvViewComponent_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomProperty"]("src", ctx_r0.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function CvViewComponent_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
  }
}
function CvViewComponent_Conditional_7_Conditional_30_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](skill_r2.trim());
  }
}
function CvViewComponent_Conditional_7_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](0, CvViewComponent_Conditional_7_Conditional_30_For_1_Template, 2, 1, "span", 31, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r0.getSkillsArray());
  }
}
function CvViewComponent_Conditional_7_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Aucune saisie.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
  }
}
function CvViewComponent_Conditional_7_Conditional_36_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const interest_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](interest_r3.trim());
  }
}
function CvViewComponent_Conditional_7_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](0, CvViewComponent_Conditional_7_Conditional_36_For_1_Template, 2, 1, "span", 32, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r0.getInterestsArray());
  }
}
function CvViewComponent_Conditional_7_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Aucun int\u00E9r\u00EAt.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
  }
}
function CvViewComponent_Conditional_7_Conditional_47_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](0, "div", 33)(1, "div", 34)(2, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElement"](7, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](9, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    const exp_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exp_r4.job_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exp_r4.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", exp_r4.company, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", exp_r4.description, " ");
  }
}
function CvViewComponent_Conditional_7_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](0, CvViewComponent_Conditional_7_Conditional_47_For_1_Template, 11, 4, "div", 33, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r0.cvData.experiences);
  }
}
function CvViewComponent_Conditional_7_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Aucune exp\u00E9rience professionnelle ajout\u00E9e. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
  }
}
function CvViewComponent_Conditional_7_Conditional_52_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](0, "div", 33)(1, "div", 34)(2, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElement"](7, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    const edu_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](edu_r5.degree);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](edu_r5.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", edu_r5.school, " ");
  }
}
function CvViewComponent_Conditional_7_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](0, CvViewComponent_Conditional_7_Conditional_52_For_1_Template, 9, 3, "div", 33, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r0.cvData.educations);
  }
}
function CvViewComponent_Conditional_7_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Aucune formation r\u00E9pertori\u00E9e. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
  }
}
function CvViewComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](0, "div", 6)(1, "div", 9)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](3, CvViewComponent_Conditional_7_Conditional_3_Template, 1, 1, "img", 11)(4, CvViewComponent_Conditional_7_Conditional_4_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](5, "div", 13)(6, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](10, "div", 16)(11, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](13, "ul", 18)(14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElement"](15, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElement"](19, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElement"](23, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](26, "div", 16)(27, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Comp\u00E9tences");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](29, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](30, CvViewComponent_Conditional_7_Conditional_30_Template, 2, 0)(31, CvViewComponent_Conditional_7_Conditional_31_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](32, "div", 16)(33, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Centres d'int\u00E9r\u00EAt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](35, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](36, CvViewComponent_Conditional_7_Conditional_36_Template, 2, 0)(37, CvViewComponent_Conditional_7_Conditional_37_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](38, "div", 24)(39, "div", 25)(40, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Profil Professionnel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](42, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](44, "div", 25)(45, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Parcours Professionnel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](47, CvViewComponent_Conditional_7_Conditional_47_Template, 2, 0)(48, CvViewComponent_Conditional_7_Conditional_48_Template, 2, 0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](49, "div", 29)(50, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Formations & Dipl\u00F4mes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](52, CvViewComponent_Conditional_7_Conditional_52_Template, 2, 0)(53, CvViewComponent_Conditional_7_Conditional_53_Template, 2, 0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r0.avatarUrl ? 3 : 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.candidateName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.cvData.title || "Poste Recherch\u00E9", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.candidateContact.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.candidateContact.phone || "Non sp\u00E9cifi\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.candidateContact.address || "Non sp\u00E9cifi\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r0.cvData.skills ? 30 : 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r0.cvData.interests ? 36 : 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.cvData.summary || "Aucun r\u00E9sum\u00E9 r\u00E9dig\u00E9.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r0.cvData.experiences.length > 0 ? 47 : 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r0.cvData.educations.length > 0 ? 52 : 53);
  }
}
class CvViewComponent {
  cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute); // 🚀 AJOUT : Injection du service de routage
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
  isLoading = true;
  candidateId = null; // 🚀 AJOUT : Stocke l'ID s'il est fourni dans l'URL
  ngOnInit() {
    // 🚀 Extraction de l'ID depuis l'URL (/candidate/cv-view/7)
    this.candidateId = this.route.snapshot.paramMap.get('id');
    if (!this.candidateId) {
      // Mode classique : Le candidat connecté regarde son propre profil
      this.candidateName = localStorage.getItem('name') || 'Candidat';
    }
    this.fetchProfileDetailsAndCV();
  }
  fetchProfileDetailsAndCV() {
    const token = localStorage.getItem('token');
    // 🚀 DÉFINITION DYNAMIQUE DES ENDPOINTS
    // Si candidateId existe, on interroge les nouvelles routes d'accès recruteur/public en passant l'ID
    let profileUrl = 'http://localhost:3000/api/candidate/profile/details';
    let cvUrl = 'http://localhost:3000/api/candidate/cv/details';
    if (this.candidateId) {
      profileUrl = `http://localhost:3000/api/recruiter/candidate-profile/${this.candidateId}`;
      cvUrl = `http://localhost:3000/api/recruiter/candidate-cv/${this.candidateId}`;
    }
    const profilePromise = fetch(profileUrl, {
      method: 'GET',
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      }
    }).then(res => res.ok ? res.json() : null);
    const cvPromise = fetch(cvUrl, {
      method: 'GET',
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      }
    }).then(res => res.ok ? res.json() : null);
    Promise.all([profilePromise, cvPromise]).then(([profileData, cvDetails]) => {
      // 1. Extraction des coordonnées (Table users)
      if (profileData) {
        const user = Array.isArray(profileData) ? profileData[0] : profileData;
        if (user) {
          this.candidateContact.email = user.email || '';
          this.candidateContact.phone = user.phone || '';
          this.candidateContact.address = user.address || '';
          this.candidateName = user.name || this.candidateName;
          if (user.avatar_logo) {
            this.avatarUrl = `http://localhost:3000/logos/${user.avatar_logo}`;
          }
        }
      }
      // 2. Extraction du parcours (Table cvs)
      if (cvDetails) {
        let cv = Array.isArray(cvDetails) ? cvDetails[0] : cvDetails;
        this.cvData.title = cv.title || 'Poste non configuré';
        this.cvData.summary = cv.summary || 'Aucun résumé disponible.';
        this.cvData.skills = cv.skills || '';
        this.cvData.interests = cv.interests || '';
        try {
          this.cvData.experiences = typeof cv.experience === 'string' ? JSON.parse(cv.experience) : cv.experience || [];
        } catch {
          this.cvData.experiences = [];
        }
        try {
          this.cvData.educations = typeof cv.education === 'string' ? JSON.parse(cv.education) : cv.education || [];
        } catch {
          this.cvData.educations = [];
        }
      }
      this.isLoading = false;
      this.cdr.detectChanges();
    }).catch(err => {
      console.error("Erreur de synchronisation globale CV :", err);
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }
  getSkillsArray() {
    return this.cvData.skills ? this.cvData.skills.split(',').filter(s => s.trim() !== '') : [];
  }
  getInterestsArray() {
    return this.cvData.interests ? this.cvData.interests.split(',').filter(i => i.trim() !== '') : [];
  }
  static ɵfac = function CvViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CvViewComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CvViewComponent,
    selectors: [["app-cv-view"]],
    decls: 8,
    vars: 3,
    consts: [[1, "cv-view-container"], [1, "no-print", "cv-action-bar"], ["onclick", "window.print()", 1, "btn-export-pdf"], [1, "bi", "bi-file-earmark-pdf-fill"], [1, "cv-loading-screen", "no-print"], [1, "cv-empty-screen", "no-print"], [1, "cv-paper-a4"], [1, "spinner-pro"], [1, "bi", "bi-file-earmark-x-fill", "text-slate-300", 2, "font-size", "40px"], [1, "cv-sidebar-slate"], [1, "avatar-profile-box"], ["alt", "Photo de profil", 3, "src"], [1, "avatar-fallback-initials"], [1, "sidebar-name-block"], [1, "candidate-full-name"], [1, "candidate-job-target"], [1, "sidebar-block-section"], [1, "sidebar-section-title"], [1, "contact-ul-list"], [1, "bi", "bi-envelope-fill"], [1, "bi", "bi-telephone-fill"], [1, "bi", "bi-geo-alt-fill"], [1, "sidebar-tags-flex"], [1, "text-slate-400", "text-xs", "italic"], [1, "cv-main-body-white"], [1, "main-cv-section"], [1, "main-section-heading"], [1, "profile-summary-text-justify"], [1, "empty-section-notice-italic"], [1, "main-cv-section", 2, "margin-top", "25px"], [1, "bi", "bi-person-fill"], [1, "pro-tag-skill"], [1, "pro-tag-interest"], [1, "timeline-cv-item"], [1, "timeline-meta-row"], [1, "timeline-item-title"], [1, "timeline-item-date"], [1, "timeline-item-subtitle"], [1, "bi", "bi-building"], [1, "timeline-item-description"], [1, "bi", "bi-mortarboard"]],
    template: function CvViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " T\u00E9l\u00E9charger au format PDF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](5, CvViewComponent_Conditional_5_Template, 4, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](6, CvViewComponent_Conditional_6_Template, 6, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](7, CvViewComponent_Conditional_7_Template, 54, 11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.isLoading ? 5 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](!ctx.isLoading && !ctx.candidateContact.email ? 6 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](!ctx.isLoading && ctx.candidateContact.email ? 7 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    styles: ["\n\n\n.cv-view-container[_ngcontent-%COMP%] {\n  padding: 10px 24px 40px 24px;\n  background-color: #f8fafc;\n  min-height: calc(100vh - 80px);\n  box-sizing: border-box;\n}\n\n\n.cv-action-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #ffffff;\n  padding: 16px 24px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.02);\n}\n.bar-left[_ngcontent-%COMP%] { text-align: left; }\n.bar-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0; font-size: 18px; font-weight: 700; color: #0f172a; display: flex; align-items: center; gap: 8px; }\n.bar-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 4px 0 0 0; color: #64748b; font-size: 13px; }\n\n.btn-export-pdf[_ngcontent-%COMP%] {\n  background-color: #0ea5e9 !important;\n  color: #ffffff !important;\n  border: none !important;\n  border-radius: 6px !important;\n  padding: 10px 20px !important;\n  font-size: 13px !important;\n  font-weight: 600 !important;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.15s ease;\n}\n.btn-export-pdf[_ngcontent-%COMP%]:hover { background-color: #0284c7 !important; transform: translateY(-1px); }\n\n\n.cv-paper-a4[_ngcontent-%COMP%] {\n  background: #ffffff;\n  width: 100%;\n  max-width: 820px;\n  min-height: 1050px;\n  margin: 0 auto;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);\n  display: grid;\n  grid-template-columns: 260px 1fr; \n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n\n.cv-sidebar-slate[_ngcontent-%COMP%] {\n  background-color: #1e293b; \n  color: #f8fafc;\n  padding: 35px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n  box-sizing: border-box;\n  text-align: left;\n}\n\n.avatar-profile-box[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  border: 3px solid #334155;\n  background: #334155;\n  overflow: hidden;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.avatar-profile-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 100%; height: 100%; object-fit: cover; }\n.avatar-fallback-initials[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 50px; color: #94a3b8; }\n\n.sidebar-identity-text[_ngcontent-%COMP%] { text-align: center; }\n.candidate-full-name[_ngcontent-%COMP%] { margin: 0; font-size: 20px; font-weight: 700; color: #ffffff; text-transform: capitalize; letter-spacing: -0.3px; }\n.candidate-job-target[_ngcontent-%COMP%] { display: block; margin-top: 6px; font-size: 12px; color: #38bdf8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }\n\n.sidebar-block-section[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 10px; }\n.sidebar-section-title[_ngcontent-%COMP%] { margin: 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #94a3b8; letter-spacing: 0.8px; border-bottom: 1px solid #334155; padding-bottom: 6px; }\n\n\n.contact-ul-list[_ngcontent-%COMP%] { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }\n.contact-ul-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { font-size: 11.5px; color: #cbd5e1; display: flex; align-items: flex-start; gap: 8px; word-break: break-all; line-height: 1.4; }\n.contact-ul-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { color: #38bdf8; font-size: 12px; margin-top: 1px; }\n\n\n.sidebar-tags-flex[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 6px; }\n.pro-tag-skill[_ngcontent-%COMP%], .pro-tag-interest[_ngcontent-%COMP%] { background: #334155; color: #f1f5f9; padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: 600; border: 1px solid rgba(255,255,255,0.03); }\n.pro-tag-interest[_ngcontent-%COMP%] { background: rgba(56, 189, 248, 0.08); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.15); }\n\n\n.cv-main-body-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 45px 35px;\n  display: flex;\n  flex-direction: column;\n  gap: 26px;\n  box-sizing: border-box;\n  text-align: left;\n}\n\n.main-cv-section[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 12px; }\n.main-section-heading[_ngcontent-%COMP%] { margin: 0; font-size: 14px; font-weight: 700; text-transform: uppercase; color: #0f172a; letter-spacing: 0.5px; border-bottom: 2px solid #0f172a; padding-bottom: 4px; }\n\n.profile-summary-text-justify[_ngcontent-%COMP%] { margin: 0; font-size: 13px; color: #334155; line-height: 1.5; text-align: justify; }\n\n\n.timeline-cv-item[_ngcontent-%COMP%] { display: flex; flex-direction: column; position: relative; padding-left: 14px; border-left: 2px solid #e2e8f0; margin-bottom: 4px; }\n.timeline-cv-item[_ngcontent-%COMP%]:last-of-type { margin-bottom: 0; }\n.timeline-meta-row[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: baseline; }\n.timeline-item-title[_ngcontent-%COMP%] { margin: 0; font-size: 13.5px; font-weight: 700; color: #0f172a; }\n.timeline-item-date[_ngcontent-%COMP%] { font-size: 11.5px; font-weight: 600; color: #64748b; }\n.timeline-item-subtitle[_ngcontent-%COMP%] { font-size: 12.5px; font-weight: 600; color: #0ea5e9; margin-top: 2px; display: inline-flex; align-items: center; gap: 4px; }\n.timeline-item-description[_ngcontent-%COMP%] { margin: 6px 0 0 0; font-size: 12.5px; color: #475569; line-height: 1.5; text-align: justify; }\n\n.empty-section-notice-italic[_ngcontent-%COMP%] { color: #94a3b8; font-style: italic; font-size: 12px; margin: 0; }\n.cv-loading-screen[_ngcontent-%COMP%], .cv-empty-screen[_ngcontent-%COMP%] { padding: 50px; background: white; border-radius: 12px; border: 1px solid #e2e8f0; text-align: center; }\n\n\n\n\n@media print {\n  \n  .no-print[_ngcontent-%COMP%], \n   app-candidate-layout[_ngcontent-%COMP%], \n   .sidebar[_ngcontent-%COMP%], \n   aside[_ngcontent-%COMP%], \n   header[_ngcontent-%COMP%], \n   .card-header-left[_ngcontent-%COMP%] {\n    display: none !important;\n    width: 0 !important;\n    height: 0 !important;\n    opacity: 0 !important;\n    visibility: hidden !important;\n  }\n\n  \n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], .cv-view-container[_ngcontent-%COMP%] {\n    background: #ffffff !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    width: 100% !important;\n    height: 100% !important;\n    position: absolute !important;\n    left: 0 !important;\n    top: 0 !important;\n  }\n\n  \n  .cv-paper-a4[_ngcontent-%COMP%] {\n    border: none !important;\n    box-shadow: none !important;\n    width: 100% !important;\n    height: 100% !important;\n    min-height: 100% !important;\n    position: absolute !important;\n    left: 0 !important;\n    top: 0 !important;\n    display: grid !important;\n    grid-template-columns: 240px 1fr !important;\n  }\n\n  .cv-sidebar-slate[_ngcontent-%COMP%] {\n    background-color: #1e293b !important;\n    -webkit-print-color-adjust: exact !important; \n    print-color-adjust: exact !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2FuZGlkYXRlL2N2LXZpZXcvY3Ytdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzsrRUFFK0U7QUFDL0U7RUFDRSw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixzQ0FBc0M7QUFDeEM7QUFDQSxZQUFZLGdCQUFnQixFQUFFO0FBQzlCLGVBQWUsU0FBUyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRTtBQUMzSCxjQUFjLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUU7O0FBRWxFO0VBQ0Usb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUiwwQkFBMEI7QUFDNUI7QUFDQSx3QkFBd0Isb0NBQW9DLEVBQUUsMkJBQTJCLEVBQUU7O0FBRTNGLHlEQUF5RDtBQUN6RDtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnREFBZ0Q7RUFDaEQsYUFBYTtFQUNiLGdDQUFnQyxFQUFFLGlDQUFpQztFQUNuRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBLGtEQUFrRDtBQUNsRDtFQUNFLHlCQUF5QixFQUFF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QUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFOztBQUUxSCwrQkFBK0IsY0FBYyxFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUU7QUFDL0YsdUNBQXVDLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSx5QkFBeUIsRUFBRSxrQkFBa0IsRUFBRTs7QUFFN0k7OytFQUUrRTtBQUMvRTtFQUNFLHlGQUF5RjtFQUN6Rjs7Ozs7O0lBTUUsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDZCQUE2QjtFQUMvQjs7RUFFQSx1RUFBdUU7RUFDdkU7SUFDRSw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBLHFEQUFxRDtFQUNyRDtJQUNFLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLDJDQUEyQztFQUM3Qzs7RUFFQTtJQUNFLG9DQUFvQztJQUNwQyw0Q0FBNEMsRUFBRSw4Q0FBOEM7SUFDNUYsb0NBQW9DO0VBQ3RDO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICDDsMKfwpbCpcOvwrjCjyBWSVNVQUxJU0FUSU9OIFNVUiBMJ8ODwolDUkFOIENBTkRJREFUIChEQVNIQk9BUkQpXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5jdi12aWV3LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTBweCAyNHB4IDQwcHggMjRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBCYXJyZSBkJ291dGlscyBzdXDDg8KpcmlldXJlICovXHJcbi5jdi1hY3Rpb24tYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMDIpO1xyXG59XHJcbi5iYXItbGVmdCB7IHRleHQtYWxpZ246IGxlZnQ7IH1cclxuLmJhci1sZWZ0IGgzIHsgbWFyZ2luOiAwOyBmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjMGYxNzJhOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgfVxyXG4uYmFyLWxlZnQgcCB7IG1hcmdpbjogNHB4IDAgMCAwOyBjb2xvcjogIzY0NzQ4YjsgZm9udC1zaXplOiAxM3B4OyB9XHJcblxyXG4uYnRuLWV4cG9ydC1wZGYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZWE1ZTkgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcclxufVxyXG4uYnRuLWV4cG9ydC1wZGY6aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI4NGM3ICFpbXBvcnRhbnQ7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTsgfVxyXG5cclxuLyogw7DCn8KTwoQgRkVVSUxMRSBTVFJVQ1RVUkVMTEUgRFUgVlJBSSBDViBJTlRFUk5BVElPTkFMRSBBNCAqL1xyXG4uY3YtcGFwZXItYTQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA4MjBweDtcclxuICBtaW4taGVpZ2h0OiAxMDUwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNjBweCAxZnI7IC8qIFJhcHBvcnQgYXN5bcODwql0cmlxdWUgc3RhbmRhcmQgKi9cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIMOwwp/Cl8KCw6/CuMKPIENPTE9OTkUgREUgR0FVQ0hFIDogU0xBVEUgREFSSyBCQUNLR1JPVU5EICovXHJcbi5jdi1zaWRlYmFyLXNsYXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiOyAvKiBBcmRvaXNlIGRlIHByZXN0aWdlICovXHJcbiAgY29sb3I6ICNmOGZhZmM7XHJcbiAgcGFkZGluZzogMzVweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDI4cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uYXZhdGFyLXByb2ZpbGUtYm94IHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzMzNDE1NTtcclxuICBiYWNrZ3JvdW5kOiAjMzM0MTU1O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5hdmF0YXItcHJvZmlsZS1ib3ggaW1nIHsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgb2JqZWN0LWZpdDogY292ZXI7IH1cclxuLmF2YXRhci1mYWxsYmFjay1pbml0aWFscyBpIHsgZm9udC1zaXplOiA1MHB4OyBjb2xvcjogIzk0YTNiODsgfVxyXG5cclxuLnNpZGViYXItaWRlbnRpdHktdGV4dCB7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4uY2FuZGlkYXRlLWZ1bGwtbmFtZSB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAyMHB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2ZmZmZmZjsgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IGxldHRlci1zcGFjaW5nOiAtMC4zcHg7IH1cclxuLmNhbmRpZGF0ZS1qb2ItdGFyZ2V0IHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi10b3A6IDZweDsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzM4YmRmODsgZm9udC13ZWlnaHQ6IDYwMDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuNXB4OyB9XHJcblxyXG4uc2lkZWJhci1ibG9jay1zZWN0aW9uIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxMHB4OyB9XHJcbi5zaWRlYmFyLXNlY3Rpb24tdGl0bGUgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDcwMDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgY29sb3I6ICM5NGEzYjg7IGxldHRlci1zcGFjaW5nOiAwLjhweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzQxNTU7IHBhZGRpbmctYm90dG9tOiA2cHg7IH1cclxuXHJcbi8qIExpc3RlIGRlIGNvbnRhY3RzIHRleHR1ZWxzICovXHJcbi5jb250YWN0LXVsLWxpc3QgeyBsaXN0LXN0eWxlOiBub25lOyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogOHB4OyB9XHJcbi5jb250YWN0LXVsLWxpc3QgbGkgeyBmb250LXNpemU6IDExLjVweDsgY29sb3I6ICNjYmQ1ZTE7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBnYXA6IDhweDsgd29yZC1icmVhazogYnJlYWstYWxsOyBsaW5lLWhlaWdodDogMS40OyB9XHJcbi5jb250YWN0LXVsLWxpc3QgbGkgaSB7IGNvbG9yOiAjMzhiZGY4OyBmb250LXNpemU6IDEycHg7IG1hcmdpbi10b3A6IDFweDsgfVxyXG5cclxuLyogVGFncyBkZSBjb21ww4PCqXRlbmNlcyDDg8KpcHVyw4PCqXMgKi9cclxuLnNpZGViYXItdGFncy1mbGV4IHsgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBnYXA6IDZweDsgfVxyXG4ucHJvLXRhZy1za2lsbCwgLnByby10YWctaW50ZXJlc3QgeyBiYWNrZ3JvdW5kOiAjMzM0MTU1OyBjb2xvcjogI2YxZjVmOTsgcGFkZGluZzogNHB4IDEwcHg7IGJvcmRlci1yYWRpdXM6IDRweDsgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDMpOyB9XHJcbi5wcm8tdGFnLWludGVyZXN0IHsgYmFja2dyb3VuZDogcmdiYSg1NiwgMTg5LCAyNDgsIDAuMDgpOyBjb2xvcjogIzM4YmRmODsgYm9yZGVyOiAxcHggc29saWQgcmdiYSg1NiwgMTg5LCAyNDgsIDAuMTUpOyB9XHJcblxyXG4vKiDDsMKfwpPChCBDT0xPTk5FIERFIERST0lURSA6IExVWFVSWSBURVhUIENPUlBTICovXHJcbi5jdi1tYWluLWJvZHktd2hpdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogNDVweCAzNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDI2cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ubWFpbi1jdi1zZWN0aW9uIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxMnB4OyB9XHJcbi5tYWluLXNlY3Rpb24taGVhZGluZyB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNzAwOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBjb2xvcjogIzBmMTcyYTsgbGV0dGVyLXNwYWNpbmc6IDAuNXB4OyBib3JkZXItYm90dG9tOiAycHggc29saWQgIzBmMTcyYTsgcGFkZGluZy1ib3R0b206IDRweDsgfVxyXG5cclxuLnByb2ZpbGUtc3VtbWFyeS10ZXh0LWp1c3RpZnkgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICMzMzQxNTU7IGxpbmUtaGVpZ2h0OiAxLjU7IHRleHQtYWxpZ246IGp1c3RpZnk7IH1cclxuXHJcbi8qIEZyaXNlIGNocm9ub2xvZ2lxdWUgw4PCqXB1csODwqllIGR1IENWICovXHJcbi50aW1lbGluZS1jdi1pdGVtIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgcG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLWxlZnQ6IDE0cHg7IGJvcmRlci1sZWZ0OiAycHggc29saWQgI2UyZThmMDsgbWFyZ2luLWJvdHRvbTogNHB4OyB9XHJcbi50aW1lbGluZS1jdi1pdGVtOmxhc3Qtb2YtdHlwZSB7IG1hcmdpbi1ib3R0b206IDA7IH1cclxuLnRpbWVsaW5lLW1ldGEtcm93IHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogYmFzZWxpbmU7IH1cclxuLnRpbWVsaW5lLWl0ZW0tdGl0bGUgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMTMuNXB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzBmMTcyYTsgfVxyXG4udGltZWxpbmUtaXRlbS1kYXRlIHsgZm9udC1zaXplOiAxMS41cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjNjQ3NDhiOyB9XHJcbi50aW1lbGluZS1pdGVtLXN1YnRpdGxlIHsgZm9udC1zaXplOiAxMi41cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjMGVhNWU5OyBtYXJnaW4tdG9wOiAycHg7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgfVxyXG4udGltZWxpbmUtaXRlbS1kZXNjcmlwdGlvbiB7IG1hcmdpbjogNnB4IDAgMCAwOyBmb250LXNpemU6IDEyLjVweDsgY29sb3I6ICM0NzU1Njk7IGxpbmUtaGVpZ2h0OiAxLjU7IHRleHQtYWxpZ246IGp1c3RpZnk7IH1cclxuXHJcbi5lbXB0eS1zZWN0aW9uLW5vdGljZS1pdGFsaWMgeyBjb2xvcjogIzk0YTNiODsgZm9udC1zdHlsZTogaXRhbGljOyBmb250LXNpemU6IDEycHg7IG1hcmdpbjogMDsgfVxyXG4uY3YtbG9hZGluZy1zY3JlZW4sIC5jdi1lbXB0eS1zY3JlZW4geyBwYWRkaW5nOiA1MHB4OyBiYWNrZ3JvdW5kOiB3aGl0ZTsgYm9yZGVyLXJhZGl1czogMTJweDsgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDsgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICDDsMKfwpbCqMOvwrjCjyDDsMKfwozCnyBCTE9DSyBVTFRSQS1DSUJMw4PCiSBERSBTVVBQUkVTU0lPTiBERSBMQSBTSURFQkFSIE5PSVJFIERFIEwnQVBQTElcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuQG1lZGlhIHByaW50IHtcclxuICAvKiAxLiBEaXNzb2x1dGlvbiBhYnNvbHVlIGRlIGwnZW50acODwqhyZXTDg8KpIGRlIGxhIGNvcXVpbGxlIHN0cnVjdHVyZWxsZSBkZSBsJ2FwcGxpIEFuZ3VsYXIgKi9cclxuICAubm8tcHJpbnQsIFxyXG4gIGFwcC1jYW5kaWRhdGUtbGF5b3V0LCBcclxuICAuc2lkZWJhciwgXHJcbiAgYXNpZGUsIFxyXG4gIGhlYWRlciwgXHJcbiAgLmNhcmQtaGVhZGVyLWxlZnQge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAvKiAyLiBGb3JjZXIgbGEgcGFnZSBkZSByZW5kdSDDg8KgIG9jY3VwZXIgbGUgcmVww4PCqHJlIEE0IGQnaW1wcmVzc2lvbiBwdXIgKi9cclxuICBodG1sLCBib2R5LCAuY3Ytdmlldy1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLyogMy4gQWp1c3RlbWVudCBtaWxsaW3Dg8KpdHLDg8KpIGRlIGxhIGZldWlsbGUgZGUgcGFwaWVyICovXHJcbiAgLmN2LXBhcGVyLWE0IHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjQwcHggMWZyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY3Ytc2lkZWJhci1zbGF0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3QgIWltcG9ydGFudDsgLyogRm9yY2UgQ2hyb21lIMODwqAgaW1wcmltZXIgbGUgZm9uZCBibGV1IG51aXQgKi9cclxuICAgIHByaW50LWNvbG9yLWFkanVzdDogZXhhY3QgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }

}]);
//# sourceMappingURL=src_app_features_candidate_cv-view_cv-view_component_ts.js.map