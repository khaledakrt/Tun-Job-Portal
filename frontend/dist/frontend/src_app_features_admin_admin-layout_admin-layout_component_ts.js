"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_features_admin_admin-layout_admin-layout_component_ts"],{

/***/ 2496
/*!***********************************************************************!*\
  !*** ./src/app/features/admin/admin-layout/admin-layout.component.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminLayoutComponent: () => (/* binding */ AdminLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);




class AdminLayoutComponent {
  router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
  adminName = localStorage.getItem('name') || 'Administrateur';
  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  static ɵfac = function AdminLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AdminLayoutComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AdminLayoutComponent,
    selectors: [["app-admin-layout"]],
    decls: 32,
    vars: 1,
    consts: [[1, "admin-layout-container"], [1, "admin-sidebar"], [1, "sidebar-header"], [1, "admin-profile-box"], [1, "admin-avatar"], [1, "bi", "bi-shield-lock-fill"], [1, "admin-info"], [1, "admin-name"], [1, "admin-role"], [1, "sidebar-menu"], ["routerLink", "/admin/overview", "routerLinkActive", "active-menu"], [1, "bi", "bi-speedometer2"], ["routerLink", "/admin/manage-users", "routerLinkActive", "active-menu"], [1, "bi", "bi-person-gear"], ["routerLink", "/admin/manage-jobs", "routerLinkActive", "active-menu"], [1, "bi", "bi-briefcase-fill"], [1, "sidebar-footer"], [1, "btn-logout-admin", 3, "click"], [1, "bi", "bi-box-arrow-left"], [1, "admin-main-content"]],
    template: function AdminLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Tun");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Job");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 3)(9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 6)(12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Super Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "nav", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Vue d'ensemble ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Gestion Utilisateurs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Mod\u00E9ration Offres ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 16)(27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_button_click_27_listener() {
          return ctx.onLogout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " D\u00E9connexion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "main", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.adminName);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
    styles: [".admin-layout-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  width: 100vw;\n  background-color: #f8fafc;\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n}\n\n\n.admin-sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  background-color: #0f172a;\n  color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n}\n\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n  border-bottom: 1px solid #1e293b;\n}\n\n.sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px; }\n.sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: #0ea5e9; }\n\n\n.admin-profile-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px;\n  background-color: #1e293b;\n  margin: 15px;\n  border-radius: 8px;\n}\n\n.admin-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #334155;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #38bdf8;\n  font-size: 18px;\n}\n\n.admin-info[_ngcontent-%COMP%] { display: flex; flex-direction: column; text-align: left; }\n.admin-name[_ngcontent-%COMP%] { font-size: 14px; font-weight: 600; color: #f8fafc; }\n.admin-role[_ngcontent-%COMP%] { font-size: 11px; color: #94a3b8; }\n\n\n.sidebar-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 0 15px;\n  flex-grow: 1;\n}\n\n.sidebar-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  color: #94a3b8;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n  text-align: left;\n}\n\n.sidebar-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { background-color: #1e293b; color: #f8fafc; }\n.sidebar-menu[_ngcontent-%COMP%]   a.active-menu[_ngcontent-%COMP%] {\n  background-color: #0ea5e9;\n  color: #ffffff;\n}\n\n\n.sidebar-footer[_ngcontent-%COMP%] { padding: 20px 15px; }\n.btn-logout-admin[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  background-color: #1e293b;\n  color: #ef4444;\n  border: 1px solid #334155;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13.5px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.15s ease;\n}\n\n.btn-logout-admin[_ngcontent-%COMP%]:hover { background-color: #fef2f2; }\n\n\n.admin-main-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 30px;\n  overflow-y: auto;\n  height: 100vh;\n  box-sizing: border-box;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCw4RUFBOEU7QUFDaEY7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFDbEM7O0FBRUEscUJBQXFCLFNBQVMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsc0JBQXNCLEVBQUU7QUFDM0YsMEJBQTBCLGNBQWMsRUFBRTs7QUFFMUMsK0JBQStCO0FBQy9CO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBLGNBQWMsYUFBYSxFQUFFLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFO0FBQ3ZFLGNBQWMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRTtBQUNqRSxjQUFjLGVBQWUsRUFBRSxjQUFjLEVBQUU7O0FBRS9DLHVCQUF1QjtBQUN2QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCOztBQUVBLHdCQUF3Qix5QkFBeUIsRUFBRSxjQUFjLEVBQUU7QUFDbkU7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQSx1QkFBdUI7QUFDdkIsa0JBQWtCLGtCQUFrQixFQUFFO0FBQ3RDO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLDBCQUEwQjtBQUM1Qjs7QUFFQSwwQkFBMEIseUJBQXlCLEVBQUU7O0FBRXJELDRCQUE0QjtBQUM1QjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcbi5hZG1pbi1sYXlvdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLyogw7DCn8Knwq0gU3R5bGUgZGUgbGEgU2lkZWJhciAqL1xyXG4uYWRtaW4tc2lkZWJhciB7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjE3MmE7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uc2lkZWJhci1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWUyOTNiO1xyXG59XHJcblxyXG4uc2lkZWJhci1oZWFkZXIgaDIgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMjBweDsgZm9udC13ZWlnaHQ6IDgwMDsgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDsgfVxyXG4uc2lkZWJhci1oZWFkZXIgaDIgc3BhbiB7IGNvbG9yOiAjMGVhNWU5OyB9XHJcblxyXG4vKiBQcm9maWwgZGUgbCdhZG1pbiBjb25uZWN0w4PCqSAqL1xyXG4uYWRtaW4tcHJvZmlsZS1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5hZG1pbi1hdmF0YXIge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM0MTU1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICMzOGJkZjg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uYWRtaW4taW5mbyB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHRleHQtYWxpZ246IGxlZnQ7IH1cclxuLmFkbWluLW5hbWUgeyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjZjhmYWZjOyB9XHJcbi5hZG1pbi1yb2xlIHsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogIzk0YTNiODsgfVxyXG5cclxuLyogTWVudSBkZSBOYXZpZ2F0aW9uICovXHJcbi5zaWRlYmFyLW1lbnUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDRweDtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uc2lkZWJhci1tZW51IGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIGNvbG9yOiAjOTRhM2I4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnNpZGViYXItbWVudSBhOmhvdmVyIHsgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjsgY29sb3I6ICNmOGZhZmM7IH1cclxuLnNpZGViYXItbWVudSBhLmFjdGl2ZS1tZW51IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGVhNWU5O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4vKiBCb3V0b24gRMODwqljb25uZXhpb24gKi9cclxuLnNpZGViYXItZm9vdGVyIHsgcGFkZGluZzogMjBweCAxNXB4OyB9XHJcbi5idG4tbG9nb3V0LWFkbWluIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XHJcbiAgY29sb3I6ICNlZjQ0NDQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzNDE1NTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xyXG59XHJcblxyXG4uYnRuLWxvZ291dC1hZG1pbjpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6ICNmZWYyZjI7IH1cclxuXHJcbi8qIFpvbmUgZCdhZmZpY2hhZ2UgZHJvaXRlICovXHJcbi5hZG1pbi1tYWluLWNvbnRlbnQge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }

}]);
//# sourceMappingURL=src_app_features_admin_admin-layout_admin-layout_component_ts.js.map