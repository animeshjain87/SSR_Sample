import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  showFormEvent(){
    this.router.navigate(['form-event'], {relativeTo: this.route})
  }

  showDebouncetime(){
    this.router.navigate(['debouncetime'], {relativeTo: this.route})
  }

}
