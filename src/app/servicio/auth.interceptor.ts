import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // El login y el registro son públicos: no se les manda token
  if (req.url.includes('/usuarios/login') || req.url.includes('/usuarios/registro')) {
    return next(req);
  }

  const token = inject(AuthService).getToken();
  if (token) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
  return next(req);
};