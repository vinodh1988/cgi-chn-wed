import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { CourselistComponent } from './courselist/courselist.component';
import { CourseComponent } from './courselist/course/course.component';
import {CourseService} from './course.service';
import { MenubarComponent } from './menubar/menubar.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { ComplaintsComponent } from './routes/complaints/complaints.component';
import { EbooksComponent } from './routes/ebooks/ebooks.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { ReviewlistComponent } from './routes/reviews/reviewlist/reviewlist.component';
import { ReviewComponent } from './routes/reviews/review/review.component';
import { ReviewformComponent } from './routes/reviews/reviewform/reviewform.component';
import { ReviewService } from 'app/review.service';
const routes=[
  {path:"",component: CourselistComponent},
  {path:"Offices",component: OfficesComponent},
  {path:"Ebooks",component: EbooksComponent},
  {path:"Reviews",component: ReviewsComponent},
  {path:"Complaints", component: ComplaintsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CourselistComponent,
    CourseComponent,
    MenubarComponent,
    OfficesComponent,
    ComplaintsComponent,
    EbooksComponent,
    ReviewsComponent,
    ReviewlistComponent,
    ReviewComponent,
    ReviewformComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes),
    HttpModule,ReactiveFormsModule
  ],
  providers: [CourseService,ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
