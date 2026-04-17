import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors, withXsrfConfiguration } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { APP_ROUTES } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { httpErrorInterceptor } from '@interceptors/http-error.interceptor';
import { httpAuthInterceptor } from '@interceptors/http-auth.interceptor';
import { httpLoggingInterceptor } from '@interceptors/http-logging.interceptor';
import { mockApiInterceptor } from './app/core/mock/mock-api.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(APP_ROUTES),
    provideHttpClient(
      withInterceptors([
        mockApiInterceptor,  // Mock API interceptor (first in chain)
        httpLoggingInterceptor,
        httpAuthInterceptor,
        httpErrorInterceptor
      ]),
      withXsrfConfiguration({
        cookieName: 'XSRF-TOKEN',
        headerName: 'X-XSRF-TOKEN'
      })
    )
  ]
}).catch(err => console.error('Bootstrap error:', err));
