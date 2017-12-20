import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourselistComponent } from './courselist/courselist.component';
import { CourseComponent } from './courselist/course/course.component';
import {CourseService} from './course.service';

@NgModule({
  declarations: [
    AppComponent,
    CourselistComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
