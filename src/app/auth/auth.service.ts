import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../manga/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private mockUser: User = {
    id: 1,
    username: 'admin',
    password: 'admin',
    token: 'mock-jwt-token'
  };

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === this.mockUser.username && password === this.mockUser.password) {
      localStorage.setItem('user', JSON.stringify(this.mockUser));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  getToken(): string | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).token : null;
  }
}
