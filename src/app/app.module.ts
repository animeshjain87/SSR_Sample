import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExRoutingComponent } from './ex-routing/ex-routing.component';
import { ProjectListComponent } from './ex-routing/project-list/project-list.component';
import { ProjectDetailComponent } from './ex-routing/project-detail/project-detail.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RxjsFromeventComponent } from './rxjs-learning/rxjs-fromevent/rxjs-fromevent.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning/rxjs-learning.component';
import { DebounceTimeComponent } from './rxjs-learning/debounce-time/debounce-time.component';
import { StoreModule } from '@ngrx/store';
import { PostListComponent } from './ngrx-learning/posts/post-list/post-list.component';
import { postsReducer } from './ngrx-learning/state/posts.reducers';
import { AddPostComponent } from './ngrx-learning/posts/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ExRoutingComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    LoginComponent,
    HeaderComponent,
    RxjsFromeventComponent,
    RxjsLearningComponent,
    DebounceTimeComponent,    
    PostListComponent, AddPostComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({posts:postsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
