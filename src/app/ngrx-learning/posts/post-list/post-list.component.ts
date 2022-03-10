import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  //posts: Observable<Post[]>;

  constructor() { }

  ngOnInit(): void {
    //this.posts = this.store.select(getPosts);
  }

}
