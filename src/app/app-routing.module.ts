import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { ExRoutingComponent } from './ex-routing/ex-routing.component';
import { ProjectDetailComponent } from './ex-routing/project-detail/project-detail.component';
import { ProjectListComponent } from './ex-routing/project-list/project-list.component';
import { LoginComponent } from './login/login.component';
import { AddPostComponent } from './ngrx-learning/posts/add-post/add-post.component';
import { PostListComponent } from './ngrx-learning/posts/post-list/post-list.component';
import { DebounceTimeComponent } from './rxjs-learning/debounce-time/debounce-time.component';
import { RxjsFromeventComponent } from './rxjs-learning/rxjs-fromevent/rxjs-fromevent.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning/rxjs-learning.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'list', component: ProjectListComponent, canActivate:[AuthGuard]},
  {path: 'detail', component: ProjectDetailComponent, canActivate:[AuthGuard]},
  {path: 'counter', component: CounterComponent, canActivate:[AuthGuard]},
  {path: 'post-list', component: PostListComponent, canActivate:[AuthGuard]},
  {path: 'add-post', component: AddPostComponent, canActivate:[AuthGuard]},
  {path: 'rxjs-learning', component: RxjsLearningComponent, canActivate:[AuthGuard],
  children: [
    {
      path: 'form-event',
      component: RxjsFromeventComponent,
    },
    {
      path: 'debounce-time',
      component: DebounceTimeComponent,
    },
  ]
},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
