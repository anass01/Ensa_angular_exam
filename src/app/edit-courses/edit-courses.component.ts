import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {createCourse, getCourse, updateCourse} from "../../utils/api";

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.scss']
})
export class EditCoursesComponent implements OnInit {
  Id:any;
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
    this.Id = this.route.snapshot.paramMap.get('id');

    getCourse(this.Id).then((res: any)=>{
      this.theForm.get('title')?.setValue(res.title);
      this.theForm.get('price')?.setValue(res.price);
      this.theForm.get('content')?.setValue(res.content);
      this.theForm.get('imgUrl')?.setValue(res.imgUrl);
    })
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
      updateCourse(this.Id,payload).then((res: any) => {
        this.router.navigate(['courses']);
      })
    }
  }
}
