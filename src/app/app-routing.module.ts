import { HomeComponent } from './module/home/home.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './module/posts/posts.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { LoginComponent } from './module/login/login.component';
import { BackendComponent } from './layouts/backend/backend.component';
import { AdminManagerComponent } from './module/admin-manager/admin-manager.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children:[
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
    ]
  },
  {
    path:'',
    component: FullwidthComponent,
    children:[
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path:'',
    component: BackendComponent,
    children:[
      {
        path: 'backend',
        component: AdminManagerComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
