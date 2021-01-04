import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StateAppService } from '../state/state-app.service';
import { NgProgress } from 'ngx-progressbar';
import { finalize } from 'rxjs/operators';
import { OdicOpenService } from '../service/odic/odic-open.service';

@Injectable()
export class TokenIntercepterInterceptor implements HttpInterceptor {
  private token :string = ''
  
  constructor(
    private stateApp: StateAppService,
    private OdicOpenService: OdicOpenService,
    private progress: NgProgress
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(this.OdicOpenService.getAuthorizationHeaderValue());
    const customReq = request.clone({
      setHeaders:{
          Authorization:this.OdicOpenService.getAuthorizationHeaderValue(),
      }
    })
    this.progress.ref('home-progress').start()
    return next.handle(customReq).pipe(
      finalize(() => this.progress.ref('home-progress').complete())
    );
  }
}
