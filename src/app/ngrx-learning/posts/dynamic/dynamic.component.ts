import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../model/posts.model';
import { getPosts } from '../../state/posts.selector';
import { PostState } from '../../state/posts.state';

@Component({
  selector: '<tbody>[app-dynamic-component]</tbody>',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor( private store:Store<{posts:PostState}>) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
  }

}
