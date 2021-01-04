import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent implements OnInit {
  @Input() title:string = 'Loading...'
  @Input() colorText:string = ''  
  constructor() { }

  ngOnInit(): void {
  }

}
