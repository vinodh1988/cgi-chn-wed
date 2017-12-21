import { Component, OnInit,Input,EventEmitter,Output } 
from '@angular/core';
import {course} from '../../course';
@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
   
 @Input('data')  current:course;
 @Output('send') sendData:EventEmitter<string>=
 new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  buyCourse(){
    this.sendData.emit(this.current.title);
  }

}
