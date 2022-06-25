import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {createCourse} from "../../utils/api";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-courses',
  templateUrl: './new-courses.component.html',
  styleUrls: ['./new-courses.component.scss']
})
export class NewCoursesComponent implements OnInit {
  theForm:FormGroup;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.theForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      price: new FormControl(null),
      content: new FormControl(null),
      imgUrl: new FormControl(null)
    })
  }

  ngOnInit(): void {
  }
  formSubmit = (e: any) => {
    e.preventDefault()
    if (this.theForm.valid) {
      let payload = {
        title: this.theForm.get('title')?.value,
        price: this.theForm.get('price')?.value,
        content: this.theForm.get('content')?.value,
        imgUrl: this.theForm.get('imgUrl')?.value,
      }
      createCourse(payload).then((res: any) => {
        this.router.navigate(['courses']);
      })
    }
  }

}
