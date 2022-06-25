import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { PostsComponent } from './posts/posts.component';
import { CoursesComponent } from './courses/courses.component';
import { NewCoursesComponent } from './new-courses/new-courses.component';
import { EditCoursesComponent } from './edit-courses/edit-courses.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    PostsComponent,
    CoursesComponent,
    NewCoursesComponent,
    EditCoursesComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'posts', component: PostsComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'courses/new', component: NewCoursesComponent},
      {path: 'courses/edit/:id', component: EditCoursesComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
