import { Injectable } from '@angular/core';
import swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  
  swaltAlert(title:string = 'บันทึก',text:string = 'บันทึกสำเร็จ') {
    swal.fire({
      title: title,
      text: text,
      icon: 'success',
      // confirmButtonText: 'Cool'
    })
  }
  swaltAlertError(title:string = 'Error',text:string) {
    swal.fire({
      title: title,
      text: text,
      icon: 'error',
      // confirmButtonText: 'Cool'
    })
  }
}
