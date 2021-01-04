import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';




@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    CommonModule,
    HttpClientModule,
  ],
  providers :[AuthGuard]
})
export class CoreModule { }
