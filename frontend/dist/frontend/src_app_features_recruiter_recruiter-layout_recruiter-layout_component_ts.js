"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_features_recruiter_recruiter-layout_recruiter-layout_component_ts"],{

/***/ 26
/*!***********************************************************************************!*\
  !*** ./src/app/features/recruiter/recruiter-layout/recruiter-layout.component.ts ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecruiterLayoutComponent: () => (/* binding */ RecruiterLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _shared_components_notification_center_notification_center_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/notification-center/notification-center.component */ 693);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6124);







const _c0 = () => ({
  exact: true
});
function RecruiterLayoutComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Compte V\u00E9rifi\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RecruiterLayoutComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " En attente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RecruiterLayoutComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RecruiterLayoutComponent_div_60_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RecruiterLayoutComponent_div_60_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 40)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RecruiterLayoutComponent_div_60_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 42)(8, "div", 43)(9, "div", 44)(10, "div", 45)(11, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("error", function RecruiterLayoutComponent_div_60_Template_img_error_11_listener($event) {
      return $event.target.src = "assets/images/default-avatar.png";
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RecruiterLayoutComponent_div_60_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openCandidateCV(ctx_r1.selectedDirectCandidate.candidate_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "svg", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 50)(17, "div", 51)(18, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Poste cibl\u00E9 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "strong", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 51)(23, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Adresse e-mail :");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 51)(28, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Num\u00E9ro de t\u00E9l\u00E9phone :");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 51)(33, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Ville / R\u00E9gion :");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 55)(38, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, " R\u00E9sum\u00E9 du profil & Comp\u00E9tences cl\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 58)(43, "div", 59)(44, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RecruiterLayoutComponent_div_60_Template_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.changeCandidateStatus(ctx_r1.selectedDirectCandidate.application_id, "Proposition"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Accepter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RecruiterLayoutComponent_div_60_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.changeCandidateStatus(ctx_r1.selectedDirectCandidate.application_id, "Nouveau"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "En attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RecruiterLayoutComponent_div_60_Template_button_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.changeCandidateStatus(ctx_r1.selectedDirectCandidate.application_id, "Entretien"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Entretien");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RecruiterLayoutComponent_div_60_Template_button_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.changeCandidateStatus(ctx_r1.selectedDirectCandidate.application_id, "Rejete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Rejeter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RecruiterLayoutComponent_div_60_Template_button_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Fermer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Candidature de ", ctx_r1.selectedDirectCandidate.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.selectedDirectCandidate.avatar_logo ? "http://localhost:3000/logos/" + ctx_r1.selectedDirectCandidate.avatar_logo : "assets/images/default-avatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("opacity", ctx_r1.selectedDirectCandidate.cv_summary && ctx_r1.selectedDirectCandidate.cv_summary.trim() !== "" ? "1" : "0.5")("cursor", ctx_r1.selectedDirectCandidate.cv_summary && ctx_r1.selectedDirectCandidate.cv_summary.trim() !== "" ? "pointer" : "not-allowed")("pointer-events", ctx_r1.selectedDirectCandidate.cv_summary && ctx_r1.selectedDirectCandidate.cv_summary.trim() !== "" ? "auto" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r1.selectedDirectCandidate.cv_summary || ctx_r1.selectedDirectCandidate.cv_summary.trim() === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedDirectCandidate.cv_summary && ctx_r1.selectedDirectCandidate.cv_summary.trim() !== "" ? "Consulter le CV" : "Aucun CV", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedDirectCandidate.job_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedDirectCandidate.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedDirectCandidate.phone || "Non renseign\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedDirectCandidate.address || "Non sp\u00E9cifi\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedDirectCandidate.cv_summary || "Le candidat n'a pas encore r\u00E9dig\u00E9 de pr\u00E9sentation de profil sur son espace TunJob.", " ");
  }
}
class RecruiterLayoutComponent {
  router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService);
  cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  zone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
  recruiterName = 'Recruteur';
  selectedDirectCandidate = null;
  // 🏢 L'état du badge passe par cette variable mise à jour par l'API
  isVerifiedCompany = false;
  notifSubscription = null;
  ngOnInit() {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      this.recruiterName = storedName;
    }
    // 🚀 FIX CHIRURGICAL : Plus de localStorage. On interroge directement MySQL au chargement
    this.checkRealtimeVerification();
    // 🚀 LIAISON SÉCURISÉE AVEC RÉINITIALISATION DYNAMIQUE DU CANDIDAT
    this.notifSubscription = this.notificationService.openApplication$.subscribe(candidateObject => {
      if (!candidateObject) {
        this.zone.run(() => {
          this.selectedDirectCandidate = null;
          this.cdr.detectChanges();
        });
        return;
      }
      console.log("📥 Layout global - Reçu l'objet pour affichage de la popup :", candidateObject);
      this.zone.run(() => {
        // A. On vide d'abord l'ancien profil pour forcer le rafraîchissement d'Angular
        this.selectedDirectCandidate = null;
        this.cdr.detectChanges();
        // B. On injecte immédiatement le nouveau candidat chargé de MySQL
        this.selectedDirectCandidate = candidateObject;
        this.cdr.detectChanges();
      });
    });
  }
  // 📡 SYNCHRONISATION EN DIRECT PAR API : Cherche la valeur fraîche dans votre table users
  checkRealtimeVerification() {
    const token = localStorage.getItem('token');
    fetch('http://localhost:3000/api/auth/profile', {
      method: 'GET',
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      }
    }).then(res => res.json()).then(user => {
      // Met à jour la variable avec le vrai état de votre table MySQL (0 ou 1)
      this.isVerifiedCompany = user.is_verified_company === 1;
      this.cdr.detectChanges(); // Force le rafraîchissement visuel du menu
    }).catch(err => console.error("❌ Erreur de synchronisation du statut recruteur :", err));
  }
  changeCandidateStatus(applicationId, newStatus) {
    if (!applicationId) return;
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
    }).then(res => {
      if (!res.ok) throw new Error("Échec de la mise à jour du statut.");
      return res.json();
    }).then(() => {
      console.log(`✅ Statut mis à jour avec succès : ${newStatus}`);
      this.closeModal();
    }).catch(err => console.error("❌ Erreur de traitement du changement de statut :", err));
  }
  openCandidateCV(candidateId) {
    if (!candidateId) return;
    window.open(`/candidate/cv-view/${candidateId}`, '_blank');
  }
  // 🚀 ACTION DE FERMETURE : Supprime les données en mémoire du service et du composant
  closeModal() {
    this.zone.run(() => {
      this.selectedDirectCandidate = null;
      this.notificationService.clearTrigger(); // Demande au service d'émettre 'null'
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy() {
    if (this.notifSubscription) {
      this.notifSubscription.unsubscribe();
    }
    this.notificationService.clearTrigger();
  }
  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  static ɵfac = function RecruiterLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RecruiterLayoutComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: RecruiterLayoutComponent,
    selectors: [["app-recruiter-layout"]],
    decls: 61,
    vars: 6,
    consts: [[1, "app-container"], [1, "app-sidebar"], [1, "sidebar-brand"], [1, "logo-icon"], [1, "bi", "bi-rocket-takeoff-fill"], [1, "logo-text"], [1, "recruiter-profile-summary"], [1, "avatar-circle"], [1, "bi", "bi-building-fill"], [1, "profile-info"], [1, "company-name"], [1, "badge-status"], [1, "badge-status-pending"], [1, "sidebar-nav"], [1, "nav-section-title"], ["routerLink", "/recruiter", "routerLinkActive", "active", 1, "nav-link-item", 3, "routerLinkActiveOptions"], [1, "bi", "bi-grid-1x2-fill"], ["routerLink", "/recruiter/create-job", "routerLinkActive", "active", 1, "nav-link-item"], [1, "bi", "bi-plus-circle-fill"], ["routerLink", "/recruiter/job-manage", "routerLinkActive", "active", 1, "nav-link-item"], [1, "bi", "bi-briefcase-fill"], ["routerLink", "/recruiter/ats-pipeline", "routerLinkActive", "active", 1, "nav-link-item"], [1, "bi", "bi-people-fill"], [1, "nav-badge"], ["routerLink", "/recruiter/profile-settings", "routerLinkActive", "active", 1, "nav-link-item"], [1, "bi", "bi-sliders"], [1, "nav-link-item", "logout-item", 2, "cursor", "pointer", 3, "click"], [1, "bi", "bi-box-arrow-left"], [1, "app-main"], [1, "app-header"], [1, "header-welcome"], [1, "highlight"], [1, "header-actions"], ["routerLink", "/recruiter/create-job", 1, "btn-quick-add"], [1, "bi", "bi-plus"], [1, "content-body"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "dot"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 2, "width", "720px", "height", "500px", "max-width", "95%", "max-height", "90vh", "display", "flex", "flex-direction", "column", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body"], [2, "display", "flex", "gap", "24px", "align-items", "flex-start", "margin-bottom", "20px"], [2, "flex-shrink", "0", "display", "flex", "flex-direction", "column", "align-items", "center", "gap", "10px", "width", "110px"], [2, "width", "85px", "height", "85px", "border-radius", "50%", "border", "1px solid #cbd5e1", "overflow", "hidden", "background", "#ffffff", "display", "flex", "align-items", "center", "justify-content", "center"], ["alt", "Photo du candidat", 2, "width", "100%", "height", "100%", "object-fit", "cover", 3, "error", "src"], [2, "background", "#ffffff", "border", "1px solid #cbd5e1", "color", "#0284c7", "padding", "6px 4px", "border-radius", "4px", "font-size", "11px", "font-weight", "700", "width", "100%", "text-align", "center", "display", "inline-flex", "align-items", "center", "justify-content", "center", "gap", "4px", "box-shadow", "0 1px 2px rgba(0,0,0,0.05)", 3, "click", "disabled"], ["xmlns", "http://w3.org", "width", "11", "height", "11", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 1A1.5 1.5 0 0 1 11 2.5V4h3v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"], [2, "flex-grow", "1", "display", "flex", "flex-direction", "column", "gap", "12px"], [1, "info-row", 2, "display", "flex"], [1, "info-label", 2, "width", "150px", "flex-shrink", "0"], [1, "info-value", "text-slate"], [1, "info-value"], [1, "summary-box", 2, "margin-top", "15px", "padding", "16px", "background", "#f8fafc", "border-radius", "8px", "border-left", "4px solid #0ea5e9"], [1, "summary-title", 2, "color", "#0f172a", "font-weight", "700", "font-size", "13px", "display", "block", "margin-bottom", "8px"], [1, "summary-text", 2, "margin", "0", "color", "#475569", "font-size", "13px", "line-height", "1.6", "white-space", "pre-line"], [1, "modal-footer", 2, "display", "flex !important", "align-items", "center !important", "justify-content", "space-between !important", "gap", "20px !important", "margin-top", "25px", "border-top", "1px solid #f1f5f9", "padding-top", "16px", "width", "100% !important", "box-sizing", "border-box !important"], [2, "display", "flex !important", "gap", "8px !important", "flex-wrap", "wrap !important", "flex-grow", "1 !important"], [2, "background", "#10b981", "color", "white", "border", "none", "padding", "8px 12px", "border-radius", "5px", "font-size", "12px", "font-weight", "600", "cursor", "pointer", "display", "flex", "align-items", "center", "gap", "5px", 3, "click"], [2, "background", "#64748b", "color", "white", "border", "none", "padding", "8px 12px", "border-radius", "5px", "font-size", "12px", "font-weight", "600", "cursor", "pointer", "display", "flex", "align-items", "center", "gap", "5px", 3, "click"], [2, "background", "#f97316", "color", "white", "border", "none", "padding", "8px 12px", "border-radius", "5px", "font-size", "12px", "font-weight", "600", "cursor", "pointer", "display", "flex", "align-items", "center", "gap", "5px", 3, "click"], [2, "background", "#ef4444", "color", "white", "border", "none", "padding", "8px 12px", "border-radius", "5px", "font-size", "12px", "font-weight", "600", "cursor", "pointer", "display", "flex", "align-items", "center", "gap", "5px", 3, "click"], [1, "btn-secondary", 2, "padding", "8px 16px !important", "font-size", "12px !important", "font-weight", "600 !important", "cursor", "pointer !important", "flex-shrink", "0 !important", "margin", "0 !important", 3, "click"]],
    template: function RecruiterLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Tun");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Job");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Pro");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 6)(11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 9)(14, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](16, RecruiterLayoutComponent_Conditional_16_Template, 3, 0, "span", 11)(17, RecruiterLayoutComponent_Conditional_17_Template, 3, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "nav", 13)(19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Recrutement");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, " Vue d'ensemble ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, " Publier une offre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " G\u00E9rer mes annonces ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, " Suivi Candidats (ATS) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Entreprise & Param\u00E8tres");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, " Configuration Profil & Logo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RecruiterLayoutComponent_Template_a_click_40_listener() {
          return ctx.onLogout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, " Quitter la session ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "main", 28)(44, "header", 29)(45, "div", 30)(46, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Bienvenue, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, " \uD83D\uDC4B");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Voici l'\u00E9tat actuel de vos campagnes de recrutement en Tunisie.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 32)(54, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, " Nouvelle Annonce ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "app-notification-center");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, RecruiterLayoutComponent_div_60_Template, 54, 15, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.recruiterName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx.isVerifiedCompany ? 16 : 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.recruiterName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedDirectCandidate);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_notification_center_notification_center_component__WEBPACK_IMPORTED_MODULE_5__.NotificationCenterComponent],
    styles: ["\n.app-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  width: 100vw;\n  background-color: #f8fafc;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n  margin: 0; position: absolute; top: 0; left: 0;\n  overflow: hidden;\n}\n\n\n.app-sidebar[_ngcontent-%COMP%] {\n  width: 280px;\n  background-color: #0f172a;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid #1e293b;\n  z-index: 10;\n}\n\n.sidebar-brand[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border-bottom: 1px solid #1e293b;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  background-color: #0ea5e9;\n  color: #ffffff;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n}\n.brand-logo[_ngcontent-%COMP%], .logo-text[_ngcontent-%COMP%] { font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; }\n.logo-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: #0ea5e9; }\n\n\n.recruiter-profile-summary[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background-color: rgba(30, 41, 59, 0.38);\n  margin: 15px 15px 5px 15px;\n  border-radius: 10px;\n}\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  background-color: #334155;\n  color: #94a3b8;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n}\n.company-name[_ngcontent-%COMP%] { margin: 0; font-size: 14px; font-weight: 600; color: #f8fafc; }\n.badge-status[_ngcontent-%COMP%] { font-size: 11px; color: #38bdf8; display: flex; align-items: center; gap: 6px; margin-top: 2px; }\n.dot[_ngcontent-%COMP%] { width: 6px; height: 6px; background-color: #22c55e; border-radius: 50%; display: inline-block; }\n\n\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  gap: 4px;\n  flex: 1;\n  overflow-y: auto;\n}\n.nav-section-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #64748b;\n  letter-spacing: 1px;\n  margin: 20px 0 8px 12px;\n}\n.nav-link-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 14px;\n  color: #94a3b8;\n  text-decoration: none;\n  font-weight: 500;\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.nav-link-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { margin-right: 12px; font-size: 18px; color: #64748b; transition: color 0.15s; }\n.nav-link-item[_ngcontent-%COMP%]:hover, .nav-link-item.active[_ngcontent-%COMP%] {\n  background-color: #1e293b;\n  color: #ffffff;\n}\n.nav-link-item.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .nav-link-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] { color: #0ea5e9; }\n\n.nav-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background-color: rgba(14, 165, 233, 0.12);\n  color: #38bdf8;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n.logout-item[_ngcontent-%COMP%] { margin-top: auto; color: #ef4444; }\n.logout-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { color: #ef4444; }\n.logout-item[_ngcontent-%COMP%]:hover { background-color: rgba(239, 68, 68, 0.08); color: #f87171; }\n\n\n.app-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow-y: auto;\n}\n\n\n.app-header[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 24px 40px;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-welcome[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 0 0 4px 0; color: #0f172a; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }\n.header-welcome[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] { color: #0ea5e9; }\n.header-welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; color: #64748b; font-size: 14px; }\n\n.header-actions[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 20px; }\n.btn-quick-add[_ngcontent-%COMP%] {\n  background-color: #0f172a; color: white; border: none; border-radius: 6px;\n  padding: 10px 16px; font-size: 14px; font-weight: 600; cursor: pointer;\n  display: flex; align-items: center; gap: 4px; transition: background 0.15s;\n}\n.btn-quick-add[_ngcontent-%COMP%]:hover { background-color: #1e293b; }\n\n\n.notification-bell[_ngcontent-%COMP%] {\n  font-size: 20px; color: #64748b; position: relative; cursor: pointer;\n}\n.bell-dot[_ngcontent-%COMP%] { \n  width: 16px; height: 16px; background-color: #ef4444; color: white;\n  border-radius: 50%; position: absolute; top: -6px; right: -6px; \n  border: 2px solid white; font-size: 9px; font-weight: 800;\n  display: flex; justify-content: center; align-items: center;\n}\n\n.content-body[_ngcontent-%COMP%] { padding: 0 40px; margin-bottom: -10px; }\n\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 24px;\n  padding: 30px 40px;\n}\n.premium-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 24px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.02);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: transform 0.2s;\n}\n.premium-card[_ngcontent-%COMP%]:hover { transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); }\n.card-title[_ngcontent-%COMP%] { font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; }\n.card-value[_ngcontent-%COMP%] { margin: 6px 0; font-size: 28px; font-weight: 800; color: #0f172a; }\n.card-trend[_ngcontent-%COMP%] { font-size: 12px; font-weight: 500; display: flex; align-items: center; }\n\n\n.text-green[_ngcontent-%COMP%] { color: #16a34a; }\n.text-neutral[_ngcontent-%COMP%] { color: #94a3b8; }\n.card-icon[_ngcontent-%COMP%] { width: 48px; height: 48px; border-radius: 10px; display: flex; justify-content: center; align-items: center; font-size: 22px; }\n\n.bg-light-blue[_ngcontent-%COMP%] { background-color: #e0f2fe; } .text-blue[_ngcontent-%COMP%] { color: #0284c7; }\n.bg-light-green[_ngcontent-%COMP%] { background-color: #dcfce7; } .text-green[_ngcontent-%COMP%] { color: #16a34a; }\n.bg-light-orange[_ngcontent-%COMP%] { background-color: #ffedd5; } .text-orange[_ngcontent-%COMP%] { color: #ea580c; }\n.bg-light-purple[_ngcontent-%COMP%] { background-color: #f3e8ff; } .text-purple[_ngcontent-%COMP%] { color: #9333ea; }\n\n\n.notif-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 35px;\n  right: 0;\n  width: 320px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  z-index: 100;\n  overflow: hidden;\n}\n\n.notif-header[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n}\n\n.mark-read[_ngcontent-%COMP%] {\n  color: #0ea5e9;\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.notif-list[_ngcontent-%COMP%] {\n  max-height: 280px;\n  overflow-y: auto;\n}\n\n.notif-empty[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #64748b;\n  font-size: 13px;\n}\n\n.notif-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f1f5f9;\n  transition: background 0.15s;\n  cursor: pointer;\n}\n\n.notif-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\n.notif-item.unread[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n}\n\n.notif-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 2px;\n}\n\n.notif-message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #334155;\n  line-height: 1.4;\n}\n\n.notif-item.unread[_ngcontent-%COMP%]   .notif-message[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.notif-time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #94a3b8;\n  margin-top: 4px;\n  display: block;\n}\n\n\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(15, 23, 42, 0.6); \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 99999; \n}\n\n.modal-content[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  padding: 0;\n  overflow: hidden;\n  border: 1px solid #e2e8f0;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #ffffff;\n}\n\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 28px;\n  color: #94a3b8;\n  cursor: pointer;\n  line-height: 1;\n  transition: color 0.1s ease;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  flex: 1;\n  overflow-y: auto;\n}\n\n.info-row[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n\n.info-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.info-value[_ngcontent-%COMP%] {\n  color: #334155;\n  font-size: 13px;\n}\n\n.info-value.text-slate[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  background-color: #f8fafc;\n  border-top: 1px solid #f1f5f9;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #334155;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n  box-shadow: 0 1px 2px rgba(0,0,0,0.05);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVjcnVpdGVyL3JlY3J1aXRlci1sYXlvdXQvcmVjcnVpdGVyLWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQztFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnR0FBZ0c7RUFDaEcsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxPQUFPO0VBQzlDLGdCQUFnQjtBQUNsQjs7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQSwwQkFBMEIsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxzQkFBc0IsRUFBRTtBQUNyRyxrQkFBa0IsY0FBYyxFQUFFOztBQUVsQyxxQ0FBcUM7QUFDckM7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsd0NBQXdDO0VBQ3hDLDBCQUEwQjtFQUMxQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBLGdCQUFnQixTQUFTLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixF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QTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyogw7DCn8KTwosgQ09SRSBDT05GSUdVUkFUSU9OICYgUkVTRVQgKi9cclxuLmFwcC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vKiDDsMKfwqfCrSBTSURFQkFSIExPR0lDSUVMTEUgU1RZTEUgU0FBUyAqL1xyXG4uYXBwLXNpZGViYXIge1xyXG4gIHdpZHRoOiAyODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxNzJhO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMWUyOTNiO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uc2lkZWJhci1icmFuZCB7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWUyOTNiO1xyXG59XHJcbi5sb2dvLWljb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZWE1ZTk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5icmFuZC1sb2dvLCAubG9nby10ZXh0IHsgZm9udC1zaXplOiAyMnB4OyBmb250LXdlaWdodDogODAwOyBjb2xvcjogI2ZmZmZmZjsgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDsgfVxyXG4ubG9nby10ZXh0IHNwYW4geyBjb2xvcjogIzBlYTVlOTsgfVxyXG5cclxuLyogUHJvZmlsIGQnZW50cmVwcmlzZSBkYW5zIGxlIG1lbnUgKi9cclxuLnJlY3J1aXRlci1wcm9maWxlLXN1bW1hcnkge1xyXG4gIHBhZGRpbmc6IDIwcHggMjRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDQxLCA1OSwgMC4zOCk7XHJcbiAgbWFyZ2luOiAxNXB4IDE1cHggNXB4IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uYXZhdGFyLWNpcmNsZSB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzQxNTU7XHJcbiAgY29sb3I6ICM5NGEzYjg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmNvbXBhbnktbmFtZSB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogI2Y4ZmFmYzsgfVxyXG4uYmFkZ2Utc3RhdHVzIHsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogIzM4YmRmODsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7IG1hcmdpbi10b3A6IDJweDsgfVxyXG4uZG90IHsgd2lkdGg6IDZweDsgaGVpZ2h0OiA2cHg7IGJhY2tncm91bmQtY29sb3I6ICMyMmM1NWU7IGJvcmRlci1yYWRpdXM6IDUwJTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XHJcblxyXG4vKiBOYXZpZ2F0aW9uIGV0IExpZW5zICovXHJcbi5zaWRlYmFyLW5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZ2FwOiA0cHg7XHJcbiAgZmxleDogMTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5uYXYtc2VjdGlvbi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIG1hcmdpbjogMjBweCAwIDhweCAxMnB4O1xyXG59XHJcbi5uYXYtbGluay1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTJweCAxNHB4O1xyXG4gIGNvbG9yOiAjOTRhM2I4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xyXG59XHJcbi5uYXYtbGluay1pdGVtIGkgeyBtYXJnaW4tcmlnaHQ6IDEycHg7IGZvbnQtc2l6ZTogMThweDsgY29sb3I6ICM2NDc0OGI7IHRyYW5zaXRpb246IGNvbG9yIDAuMTVzOyB9XHJcbi5uYXYtbGluay1pdGVtOmhvdmVyLCAubmF2LWxpbmstaXRlbS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLm5hdi1saW5rLWl0ZW0uYWN0aXZlIGksIC5uYXYtbGluay1pdGVtOmhvdmVyIGkgeyBjb2xvcjogIzBlYTVlOTsgfVxyXG5cclxuLm5hdi1iYWRnZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDAuMTIpO1xyXG4gIGNvbG9yOiAjMzhiZGY4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG4ubG9nb3V0LWl0ZW0geyBtYXJnaW4tdG9wOiBhdXRvOyBjb2xvcjogI2VmNDQ0NDsgfVxyXG4ubG9nb3V0LWl0ZW0gaSB7IGNvbG9yOiAjZWY0NDQ0OyB9XHJcbi5sb2dvdXQtaXRlbTpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMDgpOyBjb2xvcjogI2Y4NzE3MTsgfVxyXG5cclxuLyogw7DCn8KSwrsgTUFJTiBBUFBMSUNBVElGICovXHJcbi5hcHAtbWFpbiB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4vKiDDsMKfwpHCpCBBUFBMSUNBVElPTiBIRUFERVIgVVBQRVIgREVDSyAqL1xyXG4uYXBwLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAyNHB4IDQwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaGVhZGVyLXdlbGNvbWUgaDIgeyBtYXJnaW46IDAgMCA0cHggMDsgY29sb3I6ICMwZjE3MmE7IGZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6IDgwMDsgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDsgfVxyXG4uaGVhZGVyLXdlbGNvbWUgLmhpZ2hsaWdodCB7IGNvbG9yOiAjMGVhNWU5OyB9XHJcbi5oZWFkZXItd2VsY29tZSBwIHsgbWFyZ2luOiAwOyBjb2xvcjogIzY0NzQ4YjsgZm9udC1zaXplOiAxNHB4OyB9XHJcblxyXG4uaGVhZGVyLWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDIwcHg7IH1cclxuLmJ0bi1xdWljay1hZGQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjE3MmE7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzogMTBweCAxNnB4OyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcclxufVxyXG4uYnRuLXF1aWNrLWFkZDpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7IH1cclxuXHJcbi8qIMOwwp/ClMKUIFNUWUxFIERFIExBIENMT0NIRSBFVCBEVSBCQURHRSBST1VHRSAqL1xyXG4ubm90aWZpY2F0aW9uLWJlbGwge1xyXG4gIGZvbnQtc2l6ZTogMjBweDsgY29sb3I6ICM2NDc0OGI7IHBvc2l0aW9uOiByZWxhdGl2ZTsgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5iZWxsLWRvdCB7IFxyXG4gIHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHg7IGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7IGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtNnB4OyByaWdodDogLTZweDsgXHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7IGZvbnQtc2l6ZTogOXB4OyBmb250LXdlaWdodDogODAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudC1ib2R5IHsgcGFkZGluZzogMCA0MHB4OyBtYXJnaW4tYm90dG9tOiAtMTBweDsgfVxyXG5cclxuLyogw7DCn8KTwoggV0lER0VUIEdSSUxMRSBQUkVNSVVNICovXHJcbi5zdGF0cy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpO1xyXG4gIGdhcDogMjRweDtcclxuICBwYWRkaW5nOiAzMHB4IDQwcHg7XHJcbn1cclxuLnByZW1pdW0tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjAyKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xyXG59XHJcbi5wcmVtaXVtLWNhcmQ6aG92ZXIgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLDAsMCwwLjA1KTsgfVxyXG4uY2FyZC10aXRsZSB7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICM2NDc0OGI7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAwLjVweDsgfVxyXG4uY2FyZC12YWx1ZSB7IG1hcmdpbjogNnB4IDA7IGZvbnQtc2l6ZTogMjhweDsgZm9udC13ZWlnaHQ6IDgwMDsgY29sb3I6ICMwZjE3MmE7IH1cclxuLmNhcmQtdHJlbmQgeyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA1MDA7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuXHJcbi8qIENvdWxldXJzIGRlIHRlbmRhbmNlcyBldCBkJ2ljw4PCtG5lcyAqL1xyXG4udGV4dC1ncmVlbiB7IGNvbG9yOiAjMTZhMzRhOyB9XHJcbi50ZXh0LW5ldXRyYWwgeyBjb2xvcjogIzk0YTNiODsgfVxyXG4uY2FyZC1pY29uIHsgd2lkdGg6IDQ4cHg7IGhlaWdodDogNDhweDsgYm9yZGVyLXJhZGl1czogMTBweDsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGZvbnQtc2l6ZTogMjJweDsgfVxyXG5cclxuLmJnLWxpZ2h0LWJsdWUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmMmZlOyB9IC50ZXh0LWJsdWUgeyBjb2xvcjogIzAyODRjNzsgfVxyXG4uYmctbGlnaHQtZ3JlZW4geyBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNmY2U3OyB9IC50ZXh0LWdyZWVuIHsgY29sb3I6ICMxNmEzNGE7IH1cclxuLmJnLWxpZ2h0LW9yYW5nZSB7IGJhY2tncm91bmQtY29sb3I6ICNmZmVkZDU7IH0gLnRleHQtb3JhbmdlIHsgY29sb3I6ICNlYTU4MGM7IH1cclxuLmJnLWxpZ2h0LXB1cnBsZSB7IGJhY2tncm91bmQtY29sb3I6ICNmM2U4ZmY7IH0gLnRleHQtcHVycGxlIHsgY29sb3I6ICM5MzMzZWE7IH1cclxuXHJcbi8qIMOwwp/CjsKoIFNUWUxFIERVIERST1BET1dOIElTT0zDg8KJIERFUyBOT1RJRklDQVRJT05TICovXHJcbi5ub3RpZi1kcm9wZG93biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzVweDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5ub3RpZi1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG59XHJcblxyXG4ubWFyay1yZWFkIHtcclxuICBjb2xvcjogIzBlYTVlOTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm5vdGlmLWxpc3Qge1xyXG4gIG1heC1oZWlnaHQ6IDI4MHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5ub3RpZi1lbXB0eSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4ubm90aWYtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEycHg7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubm90aWYtaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxufVxyXG5cclxuLm5vdGlmLWl0ZW0udW5yZWFkIHtcclxuICBiYWNrZ3JvdW5kOiAjZjBmOWZmO1xyXG59XHJcblxyXG4ubm90aWYtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLm5vdGlmLW1lc3NhZ2Uge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICMzMzQxNTU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxufVxyXG5cclxuLm5vdGlmLWl0ZW0udW5yZWFkIC5ub3RpZi1tZXNzYWdlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubm90aWYtdGltZSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiAjOTRhM2I4O1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLyogw7DCn8KOwpvDr8K4wo8gTk9VVkVBVSA6IEdSQVBISVNNRSBJTlRFUkFDVElGIERFIExBIENBUlRFIERFIENBTkRJREFUVVJFIChQT1BVUCkgICAgICAgKi9cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5tb2RhbC1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNSwgMjMsIDQyLCAwLjYpOyAvKiBGb25kIHNvbWJyZSBmbG91dMODwqkgc3RhbmRhcmQgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogOTk5OTk7IC8qIEZvcmNlIGxlIHByZW1pZXIgcGxhbiBhYnNvbHUgKi9cclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3gtc2hhZG93OiAwIDIwcHggMjVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIDAgMTBweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMjBweCAyNHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciBoMyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG59XHJcblxyXG4uY2xvc2UtYnRuIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgY29sb3I6ICM5NGEzYjg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMXMgZWFzZTtcclxufVxyXG4uY2xvc2UtYnRuOmhvdmVyIHtcclxuICBjb2xvcjogI2VmNDQ0NDtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgZmxleDogMTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uaW5mby1yb3cge1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuLmluZm8tbGFiZWwge1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uaW5mby12YWx1ZSB7XHJcbiAgY29sb3I6ICMzMzQxNTU7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uaW5mby12YWx1ZS50ZXh0LXNsYXRlIHtcclxuICBjb2xvcjogIzBmMTcyYTtcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjMzM0MTU1O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXM7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbn1cclxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }

}]);
//# sourceMappingURL=src_app_features_recruiter_recruiter-layout_recruiter-layout_component_ts.js.map