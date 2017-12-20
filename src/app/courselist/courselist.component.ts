import { Component, OnInit } from '@angular/core';
import {course} from '../course'; 
import {CourseService} from '../course.service';

@Component({
  selector: 'courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
 clist:course[];
  constructor(private cs:CourseService) {
     this.clist=cs.getCourses();
   }

  ngOnInit() {
  }

}
