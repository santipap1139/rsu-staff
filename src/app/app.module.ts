import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ToolbarLayoutComponent } from './layout/toolbar-layout/toolbar-layout.component';
import { FooterLayoutComponent } from './layout/footer-layout/footer-layout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenIntercepterInterceptor } from './core/intercepter/token-intercepter.interceptor';
import { MenuLeftLayoutComponent } from './layout/menu-left-layout/menu-left-layout.component';
import { LogInComponent } from './layout/log-in/log-in.component';
import { EditorModule } from '@tinymce/tinymce-angular';






@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ToolbarLayoutComponent,
    FooterLayoutComponent,
    MenuLeftLayoutComponent,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    EditorModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenIntercepterInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
