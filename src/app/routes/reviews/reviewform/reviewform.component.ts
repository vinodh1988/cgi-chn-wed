import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import {ReviewService} from '../../../review.service';

@Component({
  selector: 'app-reviewform',
  templateUrl: './reviewform.component.html',
  styleUrls: ['./reviewform.component.css']
})
export class ReviewformComponent implements OnInit {
rvwForm:any;
  constructor(private formbuilder:FormBuilder,private rs:ReviewService) {

    this.rvwForm=this.formbuilder.group({
      name:['',Validators.required],
      message:['',Validators.required],
      email:['',Validators.required],
        
      course:['Java']
    });
   }

  ngOnInit() {
  }

}
