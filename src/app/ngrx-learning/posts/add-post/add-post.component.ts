import {
  Component, OnInit, OnDestroy,
  ComponentFactoryResolver,
  ViewChild,
  ElementRef,
  ViewContainerRef,
} from '@angular/core';

import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from '../../model/posts.model';
import { addPost } from '../../state/posts.actions';
import { PostState } from '../../state/posts.state';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  postForm: FormGroup;

  constructor(private store: Store<{ posts: PostState }>, private componentFactoryResolver: ComponentFactoryResolver,) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    })
  }

  onAddPost() {
    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };
    this.postForm.reset();

    this.store.dispatch(addPost({ post }));

    if (this.postForm != undefined) {
      this.add();
    }
  }

  add(): void {
    this.container.clear()
    // create the component factory
    const dynamicComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    // add the component to the view
    const componentRef = this.container.createComponent(
      dynamicComponentFactory
    );
  }

}
