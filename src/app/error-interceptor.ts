import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from './services/error-service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
        errorService.message.set('Could not reach the server. Check your internet connection.');
      } else if (error.status === 404) {
        errorService.message.set('The requested data was not found.');
      } else if (error.status >= 500) {
        errorService.message.set('The server had a problem. Please try again later.');
      } else {
        errorService.message.set('Something went wrong while loading data.');
      }

      return throwError(() => error);
    })
  );
};
