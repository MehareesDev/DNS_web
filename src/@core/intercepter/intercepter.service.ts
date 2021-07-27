import {Injectable} from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class IntercepterService implements HttpInterceptor {

  constructor() {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("intercept")
      var httpsReq ;
      var header_params = {
        'Content-Type': 'application/json'
      }
      httpsReq = request.clone({
        setHeaders: header_params
      });
        return next.handle(httpsReq);
    }
}
