
import { NgModule, Injectable, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData, DatePipe, DecimalPipe } from '@angular/common';
import { DemoDirective } from './directives/demo.directive';
import { DemoPipe } from './pipes/demo.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatStepperModule } from '@angular/material/stepper'
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE, NativeDateAdapter, MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { GetFormIdPipe } from './pipes/get-form-id.pipe';
import { NumberCharacterDirective } from './directives/number-character.directive';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgProgressModule } from 'ngx-progressbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingComponent } from './components/loading/loading.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import localeTh from '@angular/common/locales/th';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { PreviewDocComponent } from './components/preview-doc/preview-doc.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { NumberTypeDirective } from './directives/number-type.directive';
import { SearchInputAutoPipe } from './pipes/search-input-auto.pipe';
import { DoubleCheckItemPipe } from './pipes/double-check-item.pipe';
import { DateThaiPipe } from './pipes/date-thai.pipe';
import { QRCodeModule } from 'angularx-qrcode';
import { ShowMenuRolePipe } from '../layout/main-layout/show-menu-role.pipe';
// import { NgxQRCodeModule } from 'ngx-qrcode2';



registerLocaleData(localeTh)
@Injectable()
export class AppDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    let monthNamesThai = ["ม.ก.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.",
        "ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค"];    
    // if (displayFormat === 'input') {
      let day: string = date.getDate().toLocaleString()
      day = +day < 10 ? '0' + day : day;
      // let month: string = (date.getMonth() + 1).toLocaleString()
      // month = +month < 10 ? '0' + month : month;
      let year = date.getFullYear();
      return `${day}/${monthNamesThai[date.getMonth()]}/${year + 543}`;
    // }
    // return date.toDateString();
  }
}

export const PICK_FORMATS = {
  parse: {
    dateInput: {
      month: 'short',
      year: 'numeric',
      day: 'numeric'
    }
  },
  display: {
      dateInput: 'input',
      monthYearLabel: {day: 'numeric', year: 'numeric', month: 'long'},
      dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
      monthYearA11yLabel: {year: 'numeric', month: 'long'}
  }
};
//  format for Moment
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MMM-YYYY',
  },
  display: {  
    dateInput: 'DD-MMM-YYYY',
    monthYearLabel: 'DD-MMM-YYYY',
    dateA11yLabel: 'DD-MMM-YYYY',
    monthYearA11yLabel: 'DD-MMM-YYYY',
  },
};

const mat = [
  ReactiveFormsModule,
  FormsModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatTableModule,
  MatIconModule,
  MatChipsModule,
  MatCheckboxModule,
  MatStepperModule,
  MatRadioModule, 
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatSortModule, 
  MatPaginatorModule, 
  NgProgressModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  NgxMaterialTimepickerModule,
  MatExpansionModule,
  MatSortModule,
  
]

@NgModule({
  declarations: [
    DemoDirective, 
    DemoPipe, 
    GetFormIdPipe, 
    NumberCharacterDirective, 
    LoadingComponent, 
    PreviewDocComponent,
    SafeUrlPipe, 
    NumberTypeDirective, 
    SearchInputAutoPipe, DoubleCheckItemPipe, DateThaiPipe,ShowMenuRolePipe
  ],
  exports:[
    DemoDirective, 
    DemoPipe,
    ReactiveFormsModule,
    FormsModule,
    GetFormIdPipe,
    NumberCharacterDirective,
    EditorModule,
    LoadingComponent,
    PreviewDocComponent,
    SafeUrlPipe,
    SearchInputAutoPipe,
    DoubleCheckItemPipe,
    DateThaiPipe,
    // NgxQRCodeModule,
    QRCodeModule,
    ShowMenuRolePipe,
    ...mat
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    EditorModule,
    EditorModule,
    QRCodeModule,
    // NgxQRCodeModule,
    ...mat
  ],
  providers: [
    DatePipe,
    DecimalPipe,
    { provide: LOCALE_ID, useValue: 'th-TH'},
    { provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS},
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: DateAdapter, useClass: AppDateAdapter},


    // { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true }},
    // { provide: DateAdapter, useClass: CustomeMomentDateAdapter},
    // { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
  
})
export class SharedModule { }
