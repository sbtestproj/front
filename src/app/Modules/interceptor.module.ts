import { CommonModule } from '@angular/common';
import { Injectable, NgModule } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { HTTP_INTERCEPTORS} from '@angular/common/http';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
  dupReq;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.dupReq = req.clone({headers: req.headers.set('Access-Control-Allow-Origin', 'http://localhost:8080/hiberProject/test')});

    return next.handle(this.dupReq);
  }
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class InterceptorModule { }
