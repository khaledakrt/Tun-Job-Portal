import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // 🟢 CORRECTION FINALE : Ajout du port 3000 ET du préfixe de routage d'Express
  private apiUrl = 'http://127.0.0';

  register(user: any): Observable<any> {
    // Appelle désormais : http://127.0.0/register
    const promise = fetch(`${this.apiUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(async res => {
      if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}));
        throw { status: res.status, message: errorBody.message };
      }
      return res.json();
    });

    return from(promise);
  }

  login(credentials: any): Observable<any> {
    // Appelle désormais : http://127.0.0/login
    const promise = fetch(`${this.apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(async res => {
      if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}));
        throw { status: res.status, message: errorBody.message };
      }
      return res.json();
    });

    return from(promise);
  }
}
