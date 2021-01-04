import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { OdicOpenService } from 'src/app/core/service/odic/odic-open.service';
import { PermissiomService } from 'src/app/core/service/permissiom.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent implements OnInit {
  clickMenu : boolean = false
  isExpandMenu: boolean = true
  @Output() onToggleMenu = new EventEmitter<boolean>()
  nameUser : any
  mailUser : any
  mode = new FormControl('over');
  role : any
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor(public router:Router,
              public OdicOpenService:OdicOpenService,
              public PermissiomService:PermissiomService,
              ) { }

  ngOnInit(): void {
    console.log(this.OdicOpenService.getClaims());
    this.nameUser = this.OdicOpenService.getClaims().Name
    this.mailUser = this.OdicOpenService.getClaims().email

    this.PermissiomService.getAll().subscribe((x:any)=>{
      console.log(x)
      this.nameUser = x.user_display_name
      if(x.object_permissions){
        this.role =  x.object_permissions
      }else{
        this.role =  x.data_permissions
      }
      console.log(this.role)
    })
    
  }
  toggleMenu(){
    this.isExpandMenu = !this.isExpandMenu
    this.onToggleMenu.emit(this.isExpandMenu)
  }
  
  gotoProjectSchedulePage(){
    this.router.navigate(['app/Project'])
  }
  
}
