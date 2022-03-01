import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../model/posts.model';
import { getPosts } from '../../state/posts.selector';
import { PostState } from '../../state/posts.state';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor( private store:Store<{posts:PostState}>) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
  }

}
