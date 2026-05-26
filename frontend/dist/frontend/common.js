"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["common"],{

/***/ 3511
/*!************************************************!*\
  !*** ./src/app/core/services/admin.service.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminService: () => (/* binding */ AdminService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 698);



class AdminService {
  http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
  apiUrl = 'http://localhost:3000/api/admin';
  // 🛡️ MÉTHODE PRIVÉE : Récupère le jeton JWT et génère les Headers de sécurité
  getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Injecte le jeton pour passer la barrière verifyToken
      })
    };
  }
  // 📊 Récupérer les compteurs du tableau de bord (Corrigé avec Headers)
  getDashboardStats() {
    return this.http.get(`${this.apiUrl}/dashboard-stats`, this.getAuthHeaders());
  }
  // 👥 Récupérer tous les candidats et recruteurs (Corrigé avec Headers)
  getAllUsers() {
    return this.http.get(`${this.apiUrl}/users`, this.getAuthHeaders());
  }
  // 🚫 Supprimer un utilisateur définitivement (Corrigé avec Headers)
  deleteUser(userId) {
    return this.http.delete(`${this.apiUrl}/users/${userId}`, this.getAuthHeaders());
  }
  // 💼 Récupérer l'intégralité des offres d'emploi (Corrigé avec Headers)
  getAllJobs() {
    return this.http.get(`${this.apiUrl}/jobs`, this.getAuthHeaders());
  }
  // 🗑️ Supprimer une offre d'emploi non conforme (Corrigé avec Headers)
  deleteJob(jobId) {
    return this.http.delete(`${this.apiUrl}/jobs/${jobId}`, this.getAuthHeaders());
  }
  // 🏢 Valider ou révoquer la certification d'une entreprise recruteur
  toggleCompanyVerification(userId, status) {
    return this.http.put(`${this.apiUrl}/users/${userId}/verify-company`, {
      status
    }, this.getAuthHeaders());
  }
  static ɵfac = function AdminService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AdminService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AdminService,
    factory: AdminService.ɵfac,
    providedIn: 'root'
  });
}

/***/ },

/***/ 8010
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 5312);





class AuthService {
  http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
  apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/auth`;
  register(user) {
    return this.http.post(`${this.apiUrl}/register`, {
      name: user.name.trim(),
      email: user.email.trim().toLowerCase(),
      password: user.password,
      role: user.role || 'candidate'
    });
  }
  login(credentials) {
    return this.http.post(`${this.apiUrl}/login`, {
      email: credentials.email.trim().toLowerCase(),
      password: credentials.password
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(res => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('name', res.name || '');
      }
    }));
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isLoggedIn() {
    return !!this.getToken();
  }
  /** Extrait le message d'erreur renvoyé par l'API (Joi ou controller) */
  static formatHttpError(err, fallback) {
    const body = err?.error;
    if (typeof body === 'string') return body;
    if (body?.message) return body.message;
    if (Array.isArray(body?.errors) && body.errors.length) {
      return body.errors.join(' ');
    }
    return err?.message || fallback;
  }
  static ɵfac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ },

/***/ 7101
/*!***********************************************!*\
  !*** ./src/app/core/services/quiz.service.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuizService: () => (/* binding */ QuizService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 5312);




class QuizService {
  http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
  api = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl;
  getQuizForJob(jobId, publicAccess = false) {
    const url = publicAccess ? `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.assetsUrl}/api/public/jobs/${jobId}/quiz` : `${this.api}/candidate/jobs/${jobId}/quiz`;
    return this.http.get(url);
  }
  getRecruiterQuiz(jobId) {
    return this.http.get(`${this.api}/recruiter/jobs/${jobId}/quiz`);
  }
  saveQuizForJob(jobId, payload) {
    return this.http.post(`${this.api}/recruiter/jobs/${jobId}/quiz`, payload);
  }
  setQuizVisibility(jobId, isActive) {
    return this.http.patch(`${this.api}/recruiter/jobs/${jobId}/quiz/visibility`, {
      is_active: isActive
    });
  }
  deleteQuizForJob(jobId) {
    return this.http.delete(`${this.api}/recruiter/jobs/${jobId}/quiz`);
  }
  static ɵfac = function QuizService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || QuizService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: QuizService,
    factory: QuizService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }

}]);
//# sourceMappingURL=common.js.map