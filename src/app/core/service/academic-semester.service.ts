import { Injectable } from '@angular/core';
import { BaseService } from '../base/base-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcademicSemesterService extends BaseService {

  constructor(public http: HttpClient) 
   { super('/app/academic_semesters', http); }
}
