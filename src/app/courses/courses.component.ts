import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {deleteCourse, getCourses} from "../../utils/api";
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  CoursesList: any[] | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    getCourses().then((res: any)=>{
      this.CoursesList = res
    });
  }

  new() {
    this.router.navigate(['courses/new']);
  }
  deleteItem = (id:any) => {
    if(confirm('Are you sure you want to delete')){
      deleteCourse(id).then((res: any)=>{
        getCourses().then((res: any)=>{
          this.CoursesList = res
        });
      })
    }
  }
}
