import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environment';

export const ApiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const request = req.clone({
    setHeaders: {
      'X-Api-Key': environment.API_KEY
    }
  });

  return next(request);
};

