import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/core/service/app.service';
import { OdicOpenService } from 'src/app/core/service/odic/odic-open.service';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInComponent implements OnInit {
  user : any 
  password : any
  constructor(
    private router: Router,
    public dialog: MatDialog,
    public odic: OdicOpenService,
    public AppService: AppService
  ) { }

  ngOnInit(): void {
    this.odic.manager.signinRedirectCallback().then(res => {
      console.log(res);
      
      this.odic.user = res
      this.router.navigate(['/app/Project'])
    }).catch(err => {
    })
  }


  authen(){
    if(this.user == 'admin' && this.password == '1234'){
      this.router.navigate(['/app'])
    }else{
      this.AppService.swaltAlertError('Error','รหัสผิดพลาด')
    }
    
  }

  // openPopUp(){
  //   const dialogRef = this.dialog.open(DialogDemoComponent, {
  //     width: '250px',
  //     data: {data:'demoDialog'}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
      
  //   });
  // }

}
