import { Component, OnInit } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  Title = "Web Technologies";

  projects = [
    {'id': 1, 'name': 'Angular'},
    {'id': 2, 'name': 'Java'},
    {'id': 3, 'name': 'React'},
    {'id': 4, 'name': 'SFCC'},
    {'id': 5, 'name': 'Ionic'}
  ]
  constructor(private TitleService:Title, private MetaService:Meta) { }

  ngOnInit(): void {
    this.TitleService.setTitle(this.Title);
    this.MetaService.addTag({name: 'keywords', content: 'Angular, Java, React, SFCC, Ionic'});
    this.MetaService.addTag({name: 'description', content: 'Latest Frontend web technologies'});
    this.MetaService.addTag({name: 'author', content: 'Angular Training'});
    this.MetaService.addTag({name: 'robots', content: 'index, follow'});
  }

}
