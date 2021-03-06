import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base-service';

@Injectable({
  providedIn: 'root'
})
export class CouponService extends BaseService {

  constructor(public http: HttpClient) 
   { super('/app/coupons', http); }
}
