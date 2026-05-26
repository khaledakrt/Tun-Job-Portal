"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 92
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);


class AppComponent {
  static ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ },

/***/ 289
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routes */ 2181);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/interceptors/auth.interceptor */ 3622);




const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_0__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_1__.routes), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.withInterceptors)([_core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__.authInterceptor]))]
};

/***/ },

/***/ 2181
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guards/admin.guard */ 7823);
/* harmony import */ var _core_guards_candidate_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/guards/candidate.guard */ 3541);
/* harmony import */ var _core_guards_recruiter_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/guards/recruiter.guard */ 665);



const routes = [{
  path: '',
  redirectTo: 'job-search',
  pathMatch: 'full'
}, {
  path: 'login',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_auth_login_login_component_ts-src_environments_environment_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/auth/login/login.component */ 461)).then(m => m.LoginComponent)
}, {
  path: 'register',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_auth_register_register_component_ts-src_environments_environment_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/auth/register/register.component */ 3165)).then(m => m.RegisterComponent)
},
// ==========================================================================
// 🌍 ENTRÉE PUBLIQUE (Pour les visiteurs anonymes / plein écran)
// ==========================================================================
{
  path: 'candidate/cv-view/:id',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_features_candidate_cv-view_cv-view_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/candidate/cv-view/cv-view.component */ 128)).then(m => m.CvViewComponent)
}, {
  path: 'job-search',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_candidate_job-search_job-search_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/candidate/job-search/job-search.component */ 4182)).then(m => m.JobSearchComponent)
},
// ==========================================================================
// 🧭 ESPACE CANDIDAT CONNECTÉ (Avec Layout complet + Menu de navigation)
// ==========================================================================
{
  path: 'candidate',
  canActivate: [_core_guards_candidate_guard__WEBPACK_IMPORTED_MODULE_1__.candidateGuard],
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_notification-center_notification-center_component_ts"), __webpack_require__.e("src_app_features_candidate_candidate-layout_candidate-layout_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/candidate/candidate-layout/candidate-layout.component */ 6614)).then(m => m.CandidateLayoutComponent),
  children: [{
    path: '',
    redirectTo: 'job-search',
    // 🟢 Redirige vers la version AVEC menu pour le connecté
    pathMatch: 'full'
  }, {
    // 🟢 RÉINTRODUIT : Permet au candidat connecté d'avoir la recherche AVEC le menu latéral !
    path: 'job-search',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_candidate_job-search_job-search_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/candidate/job-search/job-search.component */ 4182)).then(m => m.JobSearchComponent)
  }, {
    path: 'applications-list',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_features_candidate_applications-list_applications-list_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/candidate/applications-list/applications-list.component */ 3868)).then(m => m.ApplicationsListComponent)
  }, {
    path: 'cv-builder',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("src_app_features_candidate_cv-builder_cv-builder_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/candidate/cv-builder/cv-builder.component */ 580)).then(m => m.CvBuilderComponent)
  }, {
    path: 'cv-view',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_features_candidate_cv-view_cv-view_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/candidate/cv-view/cv-view.component */ 128)).then(m => m.CvViewComponent)
  }, {
    path: 'profile-settings',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("src_app_features_candidate_profile-settings_profile-settings_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/candidate/profile-settings/profile-settings.component */ 9256)).then(m => m.ProfileSettingsComponent)
  }]
},
// ==========================================================================
// 💼 ESPACE RECRUTEUR
// ==========================================================================
{
  path: 'recruiter',
  canActivate: [_core_guards_recruiter_guard__WEBPACK_IMPORTED_MODULE_2__.recruiterGuard],
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_components_notification-center_notification-center_component_ts"), __webpack_require__.e("src_app_features_recruiter_recruiter-layout_recruiter-layout_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/recruiter/recruiter-layout/recruiter-layout.component */ 26)).then(m => m.RecruiterLayoutComponent),
  children: [{
    path: '',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_features_recruiter_recruiter-overview_recruiter-overview_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/recruiter/recruiter-overview/recruiter-overview.component */ 696)).then(m => m.RecruiterOverviewComponent)
  }, {
    path: 'create-job',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-src_app_shared_components_quiz-builder_quiz-builder_component_ts-src_environments_env-90c5b7"), __webpack_require__.e("src_app_features_recruiter_job-create_job-create_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/recruiter/job-create/job-create.component */ 3538)).then(m => m.JobCreateComponent)
  }, {
    path: 'job-manage',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-src_app_shared_components_quiz-builder_quiz-builder_component_ts-src_environments_env-90c5b7"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_recruiter_job-manage_job-manage_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/recruiter/job-manage/job-manage.component */ 3)).then(m => m.JobManageComponent)
  }, {
    path: 'profile-settings',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("src_app_features_recruiter_profile-settings_profile-settings_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/recruiter/profile-settings/profile-settings.component */ 4672)).then(m => m.ProfileSettingsComponent)
  }, {
    path: 'ats-pipeline',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_features_recruiter_ats-pipeline_ats-pipeline_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/recruiter/ats-pipeline/ats-pipeline.component */ 8596)).then(m => m.AtsPipelineComponent)
  }]
},
// ==========================================================================
// 🛡️ ESPACE ADMIN
// ==========================================================================
{
  path: 'admin',
  canActivate: [_core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_0__.adminGuard],
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_features_admin_admin-layout_admin-layout_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/admin/admin-layout/admin-layout.component */ 2496)).then(m => m.AdminLayoutComponent),
  children: [{
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  }, {
    path: 'overview',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_admin_admin-overview_admin-overview_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/admin/admin-overview/admin-overview.component */ 9502)).then(m => m.AdminOverviewComponent)
  }, {
    path: 'manage-users',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_admin_manage-users_manage-users_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/admin/manage-users/manage-users.component */ 6852)).then(m => m.ManageUsersComponent)
  }, {
    path: 'manage-jobs',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_admin_manage-jobs_manage-jobs_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/admin/manage-jobs/manage-jobs.component */ 3306)).then(m => m.ManageJobsComponent)
  }]
}, {
  path: '**',
  redirectTo: 'job-search'
}];

/***/ },

/***/ 7823
/*!********************************************!*\
  !*** ./src/app/core/guards/admin.guard.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adminGuard: () => (/* binding */ adminGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3305);


const adminGuard = (route, state) => {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
  return localStorage.getItem('token') && localStorage.getItem('role') === 'admin' ? true : router.navigate(['/login']);
};

/***/ },

/***/ 3541
/*!************************************************!*\
  !*** ./src/app/core/guards/candidate.guard.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   candidateGuard: () => (/* binding */ candidateGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3305);


const candidateGuard = (route, state) => {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
  return localStorage.getItem('token') && localStorage.getItem('role') === 'candidate' ? true : router.navigate(['/login']);
};

/***/ },

/***/ 665
/*!************************************************!*\
  !*** ./src/app/core/guards/recruiter.guard.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   recruiterGuard: () => (/* binding */ recruiterGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3305);


const recruiterGuard = (route, state) => {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  // Sécurité renforcée : On passe tout en minuscules pour éviter les conflits de casse (recruiter vs Recruteur)
  if (token && role && role.toLowerCase() === 'recruiter') {
    return true;
  }
  // Correction cruciale : On redirige ET on retourne explicitement false pour couper la navigation
  router.navigate(['/login']);
  return false;
};

/***/ },

/***/ 3622
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authInterceptor: () => (/* binding */ authInterceptor)
/* harmony export */ });
const authInterceptor = (req, next) => {
  const token = localStorage.getItem('token');
  if (!token || req.headers.has('Authorization')) {
    return next(req);
  }
  return next(req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  }));
};

/***/ },

/***/ 4429
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 4967);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.config */ 289);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.component */ 92);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig).catch(err => console.error(err));

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map