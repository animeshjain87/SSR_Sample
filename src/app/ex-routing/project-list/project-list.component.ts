import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {'id': 1, 'name': 'Angular'},
    {'id': 2, 'name': 'Java'},
    {'id': 3, 'name': 'React'},
    {'id': 4, 'name': 'SFCC'},
    {'id': 5, 'name': 'Ionic'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
