import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // wymagane dopisanie tego by oiperować na formach
import { HttpClientModule } from '@angular/common/http'

import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { ApiService } from './apiService';


const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: 'post/:id',
    component: PostComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  declarations: [AppComponent, PostsComponent, PostComponent, AdminComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot( routes ), HttpClientModule],  // dodaj ręcznie "FormsModule" i jest OK
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
