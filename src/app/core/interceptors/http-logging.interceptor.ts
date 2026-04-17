import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggerService } from '@services/logger.service';
import { environment } from '@environments/environment';

export function httpLoggingInterceptor(
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> {
  const logger = inject(LoggerService);

  if (!environment.production) {
    logger.debug(`[HTTP] ${req.method} ${req.url}`, {
      headers: req.headers,
      body: req.body
    });
  }

  return next(req).pipe(
    tap(
      (event: HttpEvent<any>) => {
        if (!environment.production) {
          logger.debug(`[HTTP Response] ${req.method} ${req.url} ${(event as any).status}`);
        }
      },
      (error: any) => {
        logger.error(`[HTTP Error] ${req.method} ${req.url}`, error);
      }
    )
  );
}
