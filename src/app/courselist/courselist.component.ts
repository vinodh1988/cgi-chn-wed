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
 interested:Set<string>=new Set<string>();
  constructor(private cs:CourseService) {
     this.clist=cs.getCourses();
   }

  ngOnInit() {
  }

  receiveData(data):void{
    this.interested.add(data);
    console.log(this.interested);
 }
}
