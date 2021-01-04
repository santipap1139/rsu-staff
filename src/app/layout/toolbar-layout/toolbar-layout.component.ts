import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LogInService } from 'src/app/core/service/log-in.service';

@Component({
  selector: 'app-toolbar-layout',
  templateUrl: './toolbar-layout.component.html',
  styleUrls: ['./toolbar-layout.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarLayoutComponent implements OnInit {
  path : any = 'no'
  constructor(private router:Router,
              public LogInService:LogInService) { }

  ngOnInit(): void {
    this.LogInService.menuChange$.subscribe(x=>{
      console.log(x)
      this.path = x
    })
  }
  logOut(){
    console.log('a');
    this.router.navigateByUrl('http://rsu-iam.71dev.com/account/logout')
    // this.router.url.link('https://rsu-iam.71dev.com/account/logout')
  }
  gotoinquirePage(){
    this.router.navigate(['app/inquire'])
  }
  inportScorePage(){
    this.router.navigate(['app/inport-score'])
  }
  arrangeRoomPage(){
    this.router.navigate(['app/arrange-room'])
  }
  ExamResultsPage(){
    this.router.navigate(['app/check-exam-results'])
  }
  profilePage(){
    this.router.navigate(['app/profile-detail'])
  }
  SchoolDataPage(){
    this.router.navigate(['app/SchoolData'])
  }
  messagePage(){
    this.router.navigate(['app/set-message'])
  }
  subjectPage(){
    this.router.navigate(['app/subject'])
  }
}
