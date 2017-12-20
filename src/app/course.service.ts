import { Injectable } from '@angular/core';
import {course} from './course';
@Injectable()
export class CourseService {

  private courselist:course[];
  constructor() { 
   this.courselist=[
    {
      title:"Angular 4",
      description:"Sample description",
      price: 20000,
      image:"angular4.jpg"
    },
    {
      title:"HTML 5",
      description:"HTML Course with new features",
      price: 10000,
      image:"html.jpg"
    },
    {
      title:"Javascript",
      description:"Javascript with es6 Features",
      price: 18000,
      image:"javascript.png"
    },
    {
      title:"Ember  JS",
      description:"Most Advance javascript framework",
      price: 24000,
      image:"ember.png"
    },
    {
      title:"React  JS",
      description:"A component based framework",
      price: 20000,
      image:"react.png"
    }
   ]
  }

  getCourses():course[]
  {
    return this.courselist;
  }

}
