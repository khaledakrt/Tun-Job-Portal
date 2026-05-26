"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_features_candidate_candidate-layout_candidate-layout_component_ts"],{

/***/ 6614
/*!***********************************************************************************!*\
  !*** ./src/app/features/candidate/candidate-layout/candidate-layout.component.ts ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CandidateLayoutComponent: () => (/* binding */ CandidateLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _shared_components_notification_center_notification_center_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/notification-center/notification-center.component */ 693);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3305);








function CandidateLayoutComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CandidateLayoutComponent_div_47_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CandidateLayoutComponent_div_47_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 29)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "D\u00E9tails de l'entreprise & Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CandidateLayoutComponent_div_47_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 31)(8, "div", 32)(9, "div", 33)(10, "div", 34)(11, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("error", function CandidateLayoutComponent_div_47_Template_img_error_11_listener($event) {
      return $event.target.src = "https://placehold.co";
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Soci\u00E9t\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 37)(15, "div", 38)(16, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Entreprise :");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "strong", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 38)(21, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Poste cibl\u00E9 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "strong", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 38)(26, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Adresse e-mail :");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 38)(31, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Num\u00E9ro de t\u00E9l\u00E9phone :");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 38)(36, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Ville / R\u00E9gion :");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 43)(41, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, " Statut actuel de votre dossier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 45)(44, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "\u00C9tat :");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 49)(51, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CandidateLayoutComponent_div_47_Template_button_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, " Fermer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.selectedNotifData.avatar_logo ? "http://localhost:3000/logos/" + ctx_r1.selectedNotifData.avatar_logo : "https://placehold.co", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.selectedNotifData.company_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.selectedNotifData.job_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.selectedNotifData.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.selectedNotifData.phone || "Non renseign\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.selectedNotifData.address || "Non sp\u00E9cifi\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedNotifData.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedNotifData.message, " ");
  }
}
class CandidateLayoutComponent {
  notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService);
  cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  zone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
  candidateName = 'Candidat';
  // 🚀 Variable réactive liée au *ngIf du HTML pour afficher la popup
  selectedNotifData = null;
  notifSub = null;
  ngOnInit() {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      this.candidateName = storedName;
    }
    // 🚀 INTERCEPTION DU SIGNAL UNIFIÉ DU SERVICE DE NOTIFICATIONS
    // Utilisation d'une vérification dynamique sur le flux disponible pour éviter les erreurs de typage
    const modalObservable$ = this.notificationService.candidateModal$ || this.notificationService.candidatePopup$ || this.notificationService.openApplication$;
    this.notifSub = modalObservable$.subscribe(data => {
      if (!data) {
        this.zone.run(() => {
          this.selectedNotifData = null;
          this.cdr.detectChanges();
        });
        return;
      }
      console.log("📥 Layout Candidat - Données relationnelles reçues de MySQL :", data);
      // Force l'affichage dans la zone Angular et mappe explicitement les données dynamiques reçues
      this.zone.run(() => {
        this.selectedNotifData = {
          company_name: data.company_name || data.name || 'Société Partenaire',
          job_title: data.job_title || 'Poste sélectionné',
          email: data.email || 'Non renseigné',
          phone: data.phone || 'Non renseigné',
          address: data.address || 'Non spécifiée',
          avatar_logo: data.avatar_logo || null,
          status: data.status || "En cours d'étude",
          message: data.message || ''
        };
        this.cdr.detectChanges(); // Réveille l'interface pour faire jaillir la popup !
      });
    });
  }
  // ❌ Méthode de fermeture liée au bouton "Fermer" et à la croix (X)
  closeModal() {
    this.zone.run(() => {
      this.selectedNotifData = null;
      this.notificationService.clearTrigger(); // Vide la mémoire du service partagé
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy() {
    // Désinscription impérative pour éviter les écoutes fantômes en mémoire
    if (this.notifSub) {
      this.notifSub.unsubscribe();
    }
    this.notificationService.clearTrigger();
  }
  onLogout() {
    localStorage.clear();
    window.location.href = '/login';
  }
  static ɵfac = function CandidateLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CandidateLayoutComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: CandidateLayoutComponent,
    selectors: [["app-candidate-layout"]],
    decls: 48,
    vars: 2,
    consts: [[1, "candidate-app-container"], [1, "candidate-sidebar"], [1, "sidebar-brand"], [1, "logo-icon"], [1, "bi", "bi-rocket-takeoff-fill"], [1, "logo-text"], [1, "sidebar-nav"], [1, "nav-section-title"], ["routerLink", "/candidate/job-search", "routerLinkActive", "active", 1, "nav-link-item"], [1, "bi", "bi-search"], ["routerLink", "/candidate/applications-list", "routerLinkActive", "active", 1, "nav-link-item"], [1, "bi", "bi-file-earmark-check-fill"], ["routerLink", "/candidate/cv-builder", "routerLinkActive", "active", 1, "nav-link-item"], [1, "bi", "bi-file-earmark-person-fill"], ["routerLink", "/candidate/cv-view", "routerLinkActive", "active", 1, "nav-link-item"], [1, "bi", "bi-eye-fill"], ["routerLink", "/candidate/profile-settings", "routerLinkActive", "active", 1, "nav-link-item"], [1, "bi", "bi-sliders"], [1, "nav-link-item", "logout-item", 2, "margin-top", "auto", "color", "#ef4444", "cursor", "pointer", 3, "click"], [1, "bi", "bi-box-arrow-left", 2, "color", "#ef4444"], [1, "candidate-main"], [1, "candidate-header", 2, "display", "flex", "justify-content", "space-between", "align-items", "center", "background-color", "#ffffff", "padding", "24px 40px", "border-bottom", "1px solid #e2e8f0"], [1, "header-welcome"], [2, "color", "#0ea5e9"], [2, "display", "flex", "align-items", "center", "gap", "20px"], [1, "candidate-content-body", 2, "padding", "30px 40px"], ["class", "global-popup-backdrop", 3, "click", 4, "ngIf"], [1, "global-popup-backdrop", 3, "click"], [1, "global-popup-card", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body"], [2, "display", "flex", "gap", "24px", "align-items", "flex-start", "margin-bottom", "20px"], [2, "flex-shrink", "0", "display", "flex", "flex-direction", "column", "align-items", "center", "gap", "10px", "width", "110px"], [2, "width", "85px", "height", "85px", "border-radius", "50%", "border", "1px solid #cbd5e1", "overflow", "hidden", "background", "#ffffff", "display", "flex", "align-items", "center", "justify-content", "center"], ["alt", "Logo entreprise", 2, "width", "100%", "height", "100%", "object-fit", "cover", 3, "error", "src"], [2, "font-size", "11px", "font-weight", "700", "color", "#64748b", "text-transform", "uppercase"], [2, "flex-grow", "1", "display", "flex", "flex-direction", "column", "gap", "12px"], [1, "info-row", 2, "display", "flex"], [1, "info-label", 2, "width", "150px", "flex-shrink", "0"], [1, "info-value", "text-slate", 2, "color", "#0ea5e9"], [1, "info-value", "text-slate"], [1, "info-value"], [1, "summary-box", 2, "margin-top", "15px", "padding", "16px", "background", "#f8fafc", "border-radius", "8px", "border-left", "4px solid #0ea5e9"], [1, "summary-title", 2, "color", "#0f172a", "font-weight", "700", "font-size", "13px", "display", "block", "margin-bottom", "8px"], [2, "display", "flex", "align-items", "center", "gap", "10px", "margin-bottom", "10px"], [2, "font-size", "13px", "color", "#64748b"], [2, "display", "inline-block", "padding", "4px 14px", "border-radius", "20px", "font-size", "12px", "font-weight", "700", "background", "#e0f2fe", "color", "#0369a1"], [1, "summary-text", 2, "margin", "0", "color", "#475569", "font-size", "13px", "line-height", "1.6"], [1, "modal-footer", 2, "display", "flex", "justify-content", "flex-end", "padding-top", "16px", "border-top", "1px solid #f1f5f9"], [1, "btn-secondary", 2, "padding", "8px 24px !important", "font-size", "12px !important", "font-weight", "600 !important", "cursor", "pointer !important", 3, "click"]],
    template: function CandidateLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Tun");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Job");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Candidate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "nav", 6)(11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Recherche & Suivi");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Trouver un emploi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " Mes candidatures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Mon Profil & CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, " Construire mon CV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " Voir mon CV public ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " Configuration Profil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CandidateLayoutComponent_Template_a_click_30_listener() {
          return ctx.onLogout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " Quitter la session ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "main", 20)(34, "header", 21)(35, "div", 22)(36, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Bienvenue, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, " \uD83D\uDC4B");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Propulsez votre carri\u00E8re et trouvez les meilleures opportunit\u00E9s en Tunisie.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "app-notification-center");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, CandidateLayoutComponent_div_47_Template, 53, 8, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.candidateName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedNotifData);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_components_notification_center_notification_center_component__WEBPACK_IMPORTED_MODULE_4__.NotificationCenterComponent],
    styles: ["\n\n\n.candidate-app-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #f8fafc;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n}\n\n\n\n\n.candidate-sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  background: #0f172a; \n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  padding: 24px 16px;\n  box-sizing: border-box;\n}\n\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 30px;\n}\n.logo-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { color: #0ea5e9; font-size: 22px; }\n.logo-text[_ngcontent-%COMP%] { font-size: 18px; font-weight: 700; }\n.logo-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: #0ea5e9; }\n\n.sidebar-nav[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 4px; }\n\n.nav-section-title[_ngcontent-%COMP%] { \n  font-size: 11px; \n  font-weight: 700; \n  color: #64748b; \n  text-transform: uppercase; \n  letter-spacing: 0.5px; \n  margin: 20px 0 8px 8px; \n  text-align: left; \n}\n\n.nav-link-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  color: #94a3b8;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  text-align: left;\n}\n.nav-link-item[_ngcontent-%COMP%]:hover, .nav-link-item.active[_ngcontent-%COMP%] {\n  background: #1e293b;\n  color: #ffffff;\n}\n.nav-link-item.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { color: #0ea5e9; }\n\n\n\n\n.candidate-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  box-sizing: border-box;\n}\n\n.candidate-header[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 20px 30px;\n  border-bottom: 1px solid #e2e8f0;\n  text-align: left;\n}\n.header-welcome[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 0; color: #0f172a; font-size: 20px; font-weight: 700; }\n.header-welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 4px 0 0 0; color: #64748b; font-size: 13.5px; }\n\n\n.candidate-content-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 30px;\n  overflow-y: auto;\n  box-sizing: border-box;\n}\n\n\n\n\n\n\n.global-popup-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(15, 23, 42, 0.6); \n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px); \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999; \n}\n\n\n.global-popup-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  width: 100%;\n  max-width: 650px; \n  max-height: 85vh; \n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f1f5f9;\n}\n\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1e293b;\n}\n\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\n\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  overflow-y: auto;\n  text-align: left;\n}\n\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 14px 24px;\n  background-color: #f8fafc;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: flex-end;\n}\n\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 1px solid #cbd5e1;\n  color: #334155;\n  padding: 8px 20px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  transition: all 0.15s ease;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f1f5f9;\n  border-color: #94a3b8;\n  color: #0f172a;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2FuZGlkYXRlL2NhbmRpZGF0ZS1sYXlvdXQvY2FuZGlkYXRlLWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzsrRUFFK0U7QUFDL0U7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHlGQUF5RjtBQUMzRjs7QUFFQTs7K0VBRStFO0FBQy9FO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQixFQUFFLGtCQUFrQjtFQUN2QyxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCO0FBQ0EsZUFBZSxjQUFjLEVBQUUsZUFBZSxFQUFFO0FBQ2hELGFBQWEsZUFBZSxFQUFFLGdCQUFnQixFQUFFO0FBQ2hELGtCQUFrQixjQUFjLEVBQUU7O0FBRWxDLGVBQWUsYUFBYSxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRTs7QUFFaEU7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBLDBCQUEwQixjQUFjLEVBQUU7O0FBRTFDOzsrRUFFK0U7QUFDL0U7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0FBQ2xCO0FBQ0EscUJBQXFCLFNBQVMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFO0FBQ25GLG9CQUFvQixpQkFBaUIsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUU7O0FBRTFFLGdDQUFnQztBQUNoQztFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7K0VBRStFOztBQUUvRSx1RUFBdUU7QUFDdkU7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVDQUF1QyxFQUFFLHlCQUF5QjtFQUNsRSxrQ0FBMEI7VUFBMUIsMEJBQTBCLEVBQUUsNkJBQTZCO0VBQ3pELGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWMsRUFBRSw2Q0FBNkM7QUFDL0Q7O0FBRUEsOENBQThDO0FBQzlDO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0IsRUFBRSw4Q0FBOEM7RUFDaEUsZ0JBQWdCLEVBQUUsb0NBQW9DO0VBQ3RELG1CQUFtQjtFQUNuQixxRkFBcUY7RUFDckYsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixVQUFVO0VBQ1YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQSxpREFBaUQ7QUFDakQ7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBLHFDQUFxQztBQUNyQztFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsY0FBYztBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIMOwwp/ClcKLIFNUUlVDVFVSRSBEVSBDT05URU5FVVIgR0xPQkFMIENBTkRJREFUXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5jYW5kaWRhdGUtYXBwLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XHJcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgw7DCn8Knwq0gU0lERUJBUiBQUkVNSVVNIChHQVVDSEUpXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5jYW5kaWRhdGUtc2lkZWJhciB7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwZjE3MmE7IC8qIEJsZXUgbnVpdCBwcm8gKi9cclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMjRweCAxNnB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWJyYW5kIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmxvZ28taWNvbiBpIHsgY29sb3I6ICMwZWE1ZTk7IGZvbnQtc2l6ZTogMjJweDsgfVxyXG4ubG9nby10ZXh0IHsgZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogNzAwOyB9XHJcbi5sb2dvLXRleHQgc3BhbiB7IGNvbG9yOiAjMGVhNWU5OyB9XHJcblxyXG4uc2lkZWJhci1uYXYgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDRweDsgfVxyXG5cclxuLm5hdi1zZWN0aW9uLXRpdGxlIHsgXHJcbiAgZm9udC1zaXplOiAxMXB4OyBcclxuICBmb250LXdlaWdodDogNzAwOyBcclxuICBjb2xvcjogIzY0NzQ4YjsgXHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4OyBcclxuICBtYXJnaW46IDIwcHggMCA4cHggOHB4OyBcclxuICB0ZXh0LWFsaWduOiBsZWZ0OyBcclxufVxyXG5cclxuLm5hdi1saW5rLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gIGNvbG9yOiAjOTRhM2I4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5uYXYtbGluay1pdGVtOmhvdmVyLCAubmF2LWxpbmstaXRlbS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICMxZTI5M2I7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLm5hdi1saW5rLWl0ZW0uYWN0aXZlIGkgeyBjb2xvcjogIzBlYTVlOTsgfVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgw7DCn8KSwrsgQ09OVEVORVVSIERFIENPTlRFTlUgRVQgSEVBREVSIChEUk9JVEUpXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5jYW5kaWRhdGUtbWFpbiB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY2FuZGlkYXRlLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uaGVhZGVyLXdlbGNvbWUgaDIgeyBtYXJnaW46IDA7IGNvbG9yOiAjMGYxNzJhOyBmb250LXNpemU6IDIwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IH1cclxuLmhlYWRlci13ZWxjb21lIHAgeyBtYXJnaW46IDRweCAwIDAgMDsgY29sb3I6ICM2NDc0OGI7IGZvbnQtc2l6ZTogMTMuNXB4OyB9XHJcblxyXG4vKiBDb3JwcyBkJ2FmZmljaGFnZSBkeW5hbWlxdWUgKi9cclxuLmNhbmRpZGF0ZS1jb250ZW50LWJvZHkge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIMOwwp/CjsKbw6/CuMKPIENPVUNIRSBTVVBQTMODwolNRU5UQUlSRSA6IFNUUlVDVFVSRSBERSBMQSBWRVJJVEFCTEUgTU9EQUwgUE9QVVAgQ0VOVFLDg8KJRVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyogQXJyacODwqhyZS1wbGFuIHNvbWJyZSB0cmFuc2x1Y2lkZSBjb3V2cmFudCBsYSB0b3RhbGl0w4PCqSBkdSBuYXZpZ2F0ZXVyICovXHJcbi5nbG9iYWwtcG9wdXAtYmFja2Ryb3Age1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCAyMywgNDIsIDAuNik7IC8qIFN1cGVycG9zaXRpb24gZm9uY8ODwqllICovXHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7IC8qIEVmZmV0IGRlIGZsb3UgZXN0aMODwql0aXF1ZSAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5OTk5OTsgLyogRm9yY2UgbCdhZmZpY2hhZ2UgYXUgcHJlbWllciBwbGFuIGFic29sdSAqL1xyXG59XHJcblxyXG4vKiBDYXJ0ZSBtb2RhbGUgYmxhbmNoZSBwYXJmYWl0ZW1lbnQgY2VudHLDg8KpZSAqL1xyXG4uZ2xvYmFsLXBvcHVwLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA2NTBweDsgLyogTGFyZ2V1ciBpZMODwqlhbGUgZCd1bmUgY2FydGUgZCdpbmZvcm1hdGlvbnMgKi9cclxuICBtYXgtaGVpZ2h0OiA4NXZoOyAvKiBFbXDDg8KqY2hlIGxlIGTDg8KpYm9yZGVtZW50IHZlcnRpY2FsICovXHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3gtc2hhZG93OiAwIDIwcHggMjVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxMHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vKiBFbi10w4PCqnRlIGRlIGxhIGNhcnRlICovXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMThweCAyNHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIGgzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMxZTI5M2I7XHJcbn1cclxuXHJcbi8qIEJvdXRvbiBGZXJtZXIgZCdlbi10w4PCqnRlIChYKSAqL1xyXG4uY2xvc2UtYnRuIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICM5NGEzYjg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuLmNsb3NlLWJ0bjpob3ZlciB7XHJcbiAgY29sb3I6ICNlZjQ0NDQ7XHJcbn1cclxuXHJcbi8qIENvcnBzIGRlIGNvbnRlbnUgaW50ZXJuZSAqL1xyXG4ubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi8qIFBpZWQgZGUgcGFnZSBjb250ZW5hbnQgbGVzIGJvdXRvbnMgZCdhY3Rpb25zICovXHJcbi5tb2RhbC1mb290ZXIge1xyXG4gIHBhZGRpbmc6IDE0cHggMjRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLyogQm91dG9uIHN0eWxpc8ODwqkgcG91ciBsYSBmZXJtZXR1cmUgKi9cclxuLmJ0bi1zZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICBjb2xvcjogIzMzNDE1NTtcclxuICBwYWRkaW5nOiA4cHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XHJcbn1cclxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjOTRhM2I4O1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }

}]);
//# sourceMappingURL=src_app_features_candidate_candidate-layout_candidate-layout_component_ts.js.map