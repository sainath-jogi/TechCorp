import { HttpErrorResponse, HttpHandlerFn, HttpRequest, HttpEvent } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoggerService } from '@services/logger.service';
import { NotificationService } from '@services/notification.service';
import { AuthService } from '@services/auth.service';
import { HttpErrorResponse as CustomErrorResponse } from '@models/index';

export function httpErrorInterceptor(
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> {
  const logger = inject(LoggerService);
  const notificationService = inject(NotificationService);
  const authService = inject(AuthService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'An unexpected error occurred';
      const statusCode = error.status;

      switch (statusCode) {
        case 0:
          errorMessage = 'Network error. Please check your connection.';
          break;

        case 400:
          errorMessage = error.error?.message || 'Invalid request';
          break;

        case 401:
          errorMessage = 'Session expired. Please log in again.';
          authService.logout();
          break;

        case 403:
          errorMessage = 'You do not have permission to access this resource';
          break;

        case 404:
          errorMessage = 'Resource not found';
          break;

        case 409:
          errorMessage = error.error?.message || 'Conflict with existing resource';
          break;

        case 422:
          errorMessage = error.error?.message || 'Validation failed';
          break;

        case 500:
          errorMessage = 'Server error. Please try again later.';
          break;

        case 503:
          errorMessage = 'Service temporarily unavailable. Please try again later.';
          break;

        default:
          errorMessage = `Error: ${statusCode} - ${error.statusText || 'Unknown'}`;
      }

      const errorResponse: CustomErrorResponse = {
        statusCode,
        message: errorMessage,
        error: error.error?.error || error.message,
        timestamp: new Date().toISOString()
      };

      logger.error(`HTTP Error [${statusCode}]`, {
        url: req.url,
        method: req.method,
        error: errorResponse
      });

      notificationService.error(errorMessage);

      return throwError(() => errorResponse);
    })
  );
}
