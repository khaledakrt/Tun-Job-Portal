"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_features_admin_admin-overview_admin-overview_component_ts"],{

/***/ 9502
/*!***************************************************************************!*\
  !*** ./src/app/features/admin/admin-overview/admin-overview.component.ts ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminOverviewComponent: () => (/* binding */ AdminOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _core_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/admin.service */ 3511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);





function AdminOverviewComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Chargement des compteurs... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AdminOverviewComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 12)(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Candidats inscrits");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 14)(10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 12)(13, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Recruteurs partenaires");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 16)(18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 12)(21, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Offres d'emploi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.stats.totalCandidates);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.stats.totalRecruiters);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.stats.totalJobs);
  }
}
class AdminOverviewComponent {
  adminService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService);
  cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  stats = {
    totalCandidates: 0,
    totalRecruiters: 0,
    totalJobs: 0
  };
  isLoading = false;
  ngOnInit() {
    this.isLoading = true;
    this.adminService.getDashboardStats().subscribe({
      next: data => {
        this.stats = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => this.isLoading = false
    });
  }
  static ɵfac = function AdminOverviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AdminOverviewComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AdminOverviewComponent,
    selectors: [["app-admin-overview"]],
    decls: 10,
    vars: 2,
    consts: [[1, "manage-container"], [1, "card-header-flex"], [1, "card-header-left"], [1, "bi", "bi-speedometer2"], ["style", "text-align: center; padding: 40px; color: #64748b;", 4, "ngIf"], ["class", "admin-stats-grid", 4, "ngIf"], [2, "text-align", "center", "padding", "40px", "color", "#64748b"], [1, "bi", "bi-arrow-clockwise", 2, "display", "inline-block", "animation", "spin 1s linear infinite", "margin-right", "6px"], [1, "admin-stats-grid"], [1, "stat-premium-card", "card-blue"], [1, "stat-icon"], [1, "bi", "bi-people-fill"], [1, "stat-info"], [1, "stat-number"], [1, "stat-premium-card", "card-emerald"], [1, "bi", "bi-building-fill"], [1, "stat-premium-card", "card-amber"], [1, "bi", "bi-briefcase-fill"]],
    template: function AdminOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Vue d'ensemble");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Statistiques globales en temps r\u00E9el de l'activit\u00E9 sur Tun-Job Portal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AdminOverviewComponent_div_8_Template, 3, 0, "div", 4)(9, AdminOverviewComponent_div_9_Template, 25, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: [".admin-stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n  margin-top: 15px;\n}\n\n.stat-premium-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n}\n\n.card-blue[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] { background: #eff6ff; color: #3b82f6; }\n.card-emerald[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] { background: #ecfdf5; color: #10b981; }\n.card-amber[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] { background: #fff7ed; color: #f97316; }\n\n.stat-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { margin: 0; font-size: 13.5px; color: #64748b; font-weight: 600; }\n.stat-number[_ngcontent-%COMP%] { font-size: 28px; font-weight: 800; color: #0f172a; }\n\n@keyframes _ngcontent-%COMP%_spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vYWRtaW4tb3ZlcnZpZXcvYWRtaW4tb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQSx3QkFBd0IsbUJBQW1CLEVBQUUsY0FBYyxFQUFFO0FBQzdELDJCQUEyQixtQkFBbUIsRUFBRSxjQUFjLEVBQUU7QUFDaEUseUJBQXlCLG1CQUFtQixFQUFFLGNBQWMsRUFBRTs7QUFFOUQsZ0JBQWdCLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUU7QUFDaEYsZUFBZSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFOztBQUVsRSxrQkFBa0IsT0FBTyx1QkFBdUIsRUFBRSxFQUFFLEtBQUsseUJBQXlCLEVBQUUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIiBcclxuLmFkbWluLXN0YXRzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5zdGF0LXByZW1pdW0tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbn1cclxuXHJcbi5zdGF0LWljb24ge1xyXG4gIHdpZHRoOiA1MnB4O1xyXG4gIGhlaWdodDogNTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWJsdWUgLnN0YXQtaWNvbiB7IGJhY2tncm91bmQ6ICNlZmY2ZmY7IGNvbG9yOiAjM2I4MmY2OyB9XHJcbi5jYXJkLWVtZXJhbGQgLnN0YXQtaWNvbiB7IGJhY2tncm91bmQ6ICNlY2ZkZjU7IGNvbG9yOiAjMTBiOTgxOyB9XHJcbi5jYXJkLWFtYmVyIC5zdGF0LWljb24geyBiYWNrZ3JvdW5kOiAjZmZmN2VkOyBjb2xvcjogI2Y5NzMxNjsgfVxyXG5cclxuLnN0YXQtaW5mbyBoNCB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAxMy41cHg7IGNvbG9yOiAjNjQ3NDhiOyBmb250LXdlaWdodDogNjAwOyB9XHJcbi5zdGF0LW51bWJlciB7IGZvbnQtc2l6ZTogMjhweDsgZm9udC13ZWlnaHQ6IDgwMDsgY29sb3I6ICMwZjE3MmE7IH1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7IGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfSB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }

}]);
//# sourceMappingURL=src_app_features_admin_admin-overview_admin-overview_component_ts.js.map