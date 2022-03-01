import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-rxjs-fromevent',
  templateUrl: './rxjs-fromevent.component.html',
  styleUrls: ['./rxjs-fromevent.component.css']
})
export class RxjsFromeventComponent implements OnInit {

  @ViewChild ('myBtnClick')
  myBtnClick : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  rxjsEventForm(){
    const btnObeservalble$ = fromEvent(this.myBtnClick?.nativeElement, 'click');
    btnObeservalble$.subscribe(data => {
      console.log (data)
    })

  }

}
