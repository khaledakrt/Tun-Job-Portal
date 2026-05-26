"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_features_admin_manage-jobs_manage-jobs_component_ts"],{

/***/ 3306
/*!*********************************************************************!*\
  !*** ./src/app/features/admin/manage-jobs/manage-jobs.component.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageJobsComponent: () => (/* binding */ ManageJobsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _core_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/admin.service */ 3511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);





function ManageJobsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Chargement des offres d'emploi... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ManageJobsComponent_table_11_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 14)(1, "td", 15)(2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 19)(8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 19)(13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td", 23)(18, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageJobsComponent_table_11_tr_12_Template_button_click_18_listener() {
      const job_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onDeleteJob(job_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Retirer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const job_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](job_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", job_r2.company_name || "Recruteur");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](job_r2.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](job_r2.contract_type);
  }
}
function ManageJobsComponent_table_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 10)(1, "thead")(2, "tr")(3, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Titre du poste / Recruteur");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Localisation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Type de Contrat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ManageJobsComponent_table_11_tr_12_Template, 21, 4, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.jobsList);
  }
}
class ManageJobsComponent {
  adminService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService);
  cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  jobsList = [];
  isLoading = false;
  ngOnInit() {
    this.isLoading = true;
    this.adminService.getAllJobs().subscribe({
      next: data => {
        this.jobsList = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => this.isLoading = false
    });
  }
  onDeleteJob(jobId) {
    if (confirm("❌ Voulez-vous vraiment retirer cette offre d'emploi de Tun-Job ?")) {
      this.adminService.deleteJob(jobId).subscribe({
        next: () => {
          this.jobsList = this.jobsList.filter(j => j.id !== jobId);
          this.cdr.detectChanges();
        }
      });
    }
  }
  static ɵfac = function ManageJobsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ManageJobsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ManageJobsComponent,
    selectors: [["app-manage-jobs"]],
    decls: 12,
    vars: 2,
    consts: [[1, "manage-container"], [1, "card-header-flex"], [1, "card-header-left"], [1, "bi", "bi-briefcase-fill"], [1, "manage-card-premium"], [1, "table-wrapper-premium"], ["class", "loading-box", 4, "ngIf"], ["class", "jobs-table-premium", 4, "ngIf"], [1, "loading-box"], [1, "bi", "bi-arrow-clockwise", "spinning"], [1, "jobs-table-premium"], [1, "th-left-padding"], [1, "th-center-align"], ["class", "table-row-premium", 4, "ngFor", "ngForOf"], [1, "table-row-premium"], [1, "job-company-cell"], [1, "clickable-job-title", 2, "font-size", "14px !important", "font-weight", "700"], [1, "company-sub-badge"], [1, "bi", "bi-building"], [1, "date-text-cell-premium"], [1, "date-container-premium"], [1, "bi", "bi-geo-alt"], [1, "bi", "bi-file-earmark-text"], [1, "status-cell-premium"], [1, "btn-action-delete", 3, "click"], [1, "bi", "bi-x-circle-fill"]],
    template: function ManageJobsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Mod\u00E9ration des Offres");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Consultez l'ensemble des offres d'emploi actives et supprimez les annonces non conformes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4)(9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ManageJobsComponent_div_10_Template, 3, 0, "div", 6)(11, ManageJobsComponent_table_11_Template, 13, 1, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: ["\n\n\n\n\n.manage-card-premium[_ngcontent-%COMP%] { \n  background: #ffffff !important; \n  border-radius: 12px !important; \n  border: 1px solid #e2e8f0 !important; \n  padding: 24px !important; \n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03) !important;\n  margin-top: 20px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n\n.table-wrapper-premium[_ngcontent-%COMP%] { \n  width: 100%; \n  overflow-x: auto; \n  border: 1px solid #e2e8f0; \n  border-radius: 8px; \n  background: #ffffff; \n}\n\n.jobs-table-premium[_ngcontent-%COMP%] { \n  width: 100%; \n  border-collapse: collapse; \n  text-align: left; \n  font-size: 14px; \n}\n\n\n.jobs-table-premium[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { \n  background: #f8fafc; \n  padding: 16px 20px; \n  color: #64748b; \n  font-weight: 600; \n  border-bottom: 1px solid #e2e8f0; \n  text-transform: uppercase; \n  font-size: 11px; \n  letter-spacing: 0.5px; \n}\n\n.th-left-padding[_ngcontent-%COMP%] { padding-left: 24px !important; }\n.th-center-align[_ngcontent-%COMP%] { text-align: center !important; }\n\n\n.table-row-premium[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n  transition: background-color 0.15s ease;\n}\n\n.table-row-premium[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n}\n\n.table-row-premium[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { \n  padding: 16px 20px; \n  color: #334155; \n  vertical-align: middle; \n}\n\n\n.job-company-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  align-items: flex-start;\n  padding-left: 24px !important;\n}\n\n.clickable-job-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n  font-size: 14px;\n}\n\n.company-sub-badge[_ngcontent-%COMP%] { \n  display: inline-flex; \n  align-items: center; \n  gap: 4px; \n  font-size: 11.5px; \n  font-weight: 600; \n  color: #64748b; \n}\n\n\n.date-text-cell-premium[_ngcontent-%COMP%] { \n  color: #475569; \n  font-weight: 500; \n  font-size: 13.5px; \n}\n\n.date-container-premium[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.date-container-premium[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 14px;\n}\n\n.status-cell-premium[_ngcontent-%COMP%] { text-align: center !important; }\n\n\n.btn-action-delete[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  color: #b91c1c;\n  border: 1px solid #fee2e2;\n  padding: 6px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.15s ease;\n}\n\n.btn-action-delete[_ngcontent-%COMP%]:hover {\n  background-color: #b91c1c;\n  color: #ffffff;\n}\n\n.loading-box[_ngcontent-%COMP%] { text-align: center; padding: 40px; color: #64748b; font-weight: 500; }\n.spinning[_ngcontent-%COMP%] { display: inline-block; animation: _ngcontent-%COMP%_spin 1s linear infinite; margin-right: 6px; }\n@keyframes _ngcontent-%COMP%_spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vbWFuYWdlLWpvYnMvbWFuYWdlLWpvYnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7K0VBRStFOztBQUUvRSwwQ0FBMEM7QUFDMUM7RUFDRSw4QkFBOEI7RUFDOUIsOEJBQThCO0VBQzlCLG9DQUFvQztFQUNwQyx3QkFBd0I7RUFDeEIseURBQXlEO0VBQ3pELGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBLGdEQUFnRDtBQUNoRDtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBLDBDQUEwQztBQUMxQztFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUEsbUJBQW1CLDZCQUE2QixFQUFFO0FBQ2xELG1CQUFtQiw2QkFBNkIsRUFBRTs7QUFFbEQseURBQXlEO0FBQ3pEO0VBQ0UsZ0NBQWdDO0VBQ2hDLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCOztBQUVBLHNEQUFzRDtBQUN0RDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLHVCQUF1QjtFQUN2Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUEsZ0VBQWdFO0FBQ2hFO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBLHVCQUF1Qiw2QkFBNkIsRUFBRTs7QUFFdEQsaURBQWlEO0FBQ2pEO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQSxlQUFlLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUU7QUFDcEYsWUFBWSxxQkFBcUIsRUFBRSxrQ0FBa0MsRUFBRSxpQkFBaUIsRUFBRTtBQUMxRixrQkFBa0IsT0FBTyx1QkFBdUIsRUFBRSxFQUFFLEtBQUsseUJBQXlCLEVBQUUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIMOwwp/CmsKoIFNUWUxFIFBSRU1JVU0gUE9VUiBMRSBUQUJMRUFVIERFIE1PRMODwolSQVRJT04gREVTIE9GRlJFU1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyogU3RydWN0dXJlIGRlIGxhIGNhcnRlIGJsYW5jaGUgZ2xvYmFsZSAqL1xyXG4ubWFuYWdlLWNhcmQtcHJlbWl1bSB7IFxyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDsgXHJcbiAgYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50OyBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwICFpbXBvcnRhbnQ7IFxyXG4gIHBhZGRpbmc6IDI0cHggIWltcG9ydGFudDsgXHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjAzKSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogRW5jYXJ0IGRlIGTDg8KpZmlsZW1lbnQgZXQgYm9yZHVyZXMgZHUgdGFibGVhdSAqL1xyXG4udGFibGUtd3JhcHBlci1wcmVtaXVtIHsgXHJcbiAgd2lkdGg6IDEwMCU7IFxyXG4gIG92ZXJmbG93LXg6IGF1dG87IFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDhweDsgXHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjsgXHJcbn1cclxuXHJcbi5qb2JzLXRhYmxlLXByZW1pdW0geyBcclxuICB3aWR0aDogMTAwJTsgXHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXHJcbiAgdGV4dC1hbGlnbjogbGVmdDsgXHJcbiAgZm9udC1zaXplOiAxNHB4OyBcclxufVxyXG5cclxuLyogU3R5bGUgZGVzIGVuLXTDg8KqdGVzIGRlIGNvbG9ubmVzIGdyaXNlcyAqL1xyXG4uam9icy10YWJsZS1wcmVtaXVtIHRoIHsgXHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYzsgXHJcbiAgcGFkZGluZzogMTZweCAyMHB4OyBcclxuICBjb2xvcjogIzY0NzQ4YjsgXHJcbiAgZm9udC13ZWlnaHQ6IDYwMDsgXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7IFxyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IFxyXG4gIGZvbnQtc2l6ZTogMTFweDsgXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4OyBcclxufVxyXG5cclxuLnRoLWxlZnQtcGFkZGluZyB7IHBhZGRpbmctbGVmdDogMjRweCAhaW1wb3J0YW50OyB9XHJcbi50aC1jZW50ZXItYWxpZ24geyB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDsgfVxyXG5cclxuLyogTGlnbmVzIGR1IHRhYmxlYXUgZXNwYWPDg8KpZXMgZXQgaW50ZXJhY3RpdmVzIGF1IHN1cnZvbCAqL1xyXG4udGFibGUtcm93LXByZW1pdW0ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZTtcclxufVxyXG5cclxuLnRhYmxlLXJvdy1wcmVtaXVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xyXG59XHJcblxyXG4udGFibGUtcm93LXByZW1pdW0gdGQgeyBcclxuICBwYWRkaW5nOiAxNnB4IDIwcHg7IFxyXG4gIGNvbG9yOiAjMzM0MTU1OyBcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBcclxufVxyXG5cclxuLyogQWxpZ25lbWVudCBkdSBibG9jIGRlIGwnb2ZmcmUgKFBvc3RlICsgUmVjcnV0ZXVyKSAqL1xyXG4uam9iLWNvbXBhbnktY2VsbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctbGVmdDogMjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2xpY2thYmxlLWpvYi10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jb21wYW55LXN1Yi1iYWRnZSB7IFxyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICBnYXA6IDRweDsgXHJcbiAgZm9udC1zaXplOiAxMS41cHg7IFxyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7IFxyXG4gIGNvbG9yOiAjNjQ3NDhiOyBcclxufVxyXG5cclxuLyogU3R5bGUgcG91ciBsZXMgY29udGVuZXVycyBkJ2ljw4PCtG5lcyAoTG9jYWxpc2F0aW9uICYgQ29udHJhdCkgKi9cclxuLmRhdGUtdGV4dC1jZWxsLXByZW1pdW0geyBcclxuICBjb2xvcjogIzQ3NTU2OTsgXHJcbiAgZm9udC13ZWlnaHQ6IDUwMDsgXHJcbiAgZm9udC1zaXplOiAxMy41cHg7IFxyXG59XHJcblxyXG4uZGF0ZS1jb250YWluZXItcHJlbWl1bSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG59XHJcblxyXG4uZGF0ZS1jb250YWluZXItcHJlbWl1bSBpIHtcclxuICBjb2xvcjogIzk0YTNiODtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtY2VsbC1wcmVtaXVtIHsgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7IH1cclxuXHJcbi8qIEJvdXRvbiByb3VnZSBcIlJldGlyZXJcIiBhdmVjIGwnaWPDg8K0bmUgeC1jaXJjbGUgKi9cclxuLmJ0bi1hY3Rpb24tZGVsZXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmMmYyO1xyXG4gIGNvbG9yOiAjYjkxYzFjO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZWUyZTI7XHJcbiAgcGFkZGluZzogNnB4IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1kZWxldGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOTFjMWM7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5sb2FkaW5nLWJveCB7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogNDBweDsgY29sb3I6ICM2NDc0OGI7IGZvbnQtd2VpZ2h0OiA1MDA7IH1cclxuLnNwaW5uaW5nIHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlOyBtYXJnaW4tcmlnaHQ6IDZweDsgfVxyXG5Aa2V5ZnJhbWVzIHNwaW4geyBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH0gdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }

}]);
//# sourceMappingURL=src_app_features_admin_manage-jobs_manage-jobs_component_ts.js.map