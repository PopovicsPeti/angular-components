import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Course } from '@app/shared/interfaces/course';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input('editable') editableInput: boolean = false;
  @Input('course') courseData: Course = <Course>{};
  @Output() showCourse: EventEmitter<Course> = new EventEmitter();
  @Output() editCourse: string = '';
  @Output() deleteCourse: string = '';
  
  id: string = '';
  title: string = '';
  description: string = ''
  creationDate: string = '';
  duration: number = 0;
  authors: string[] = [];
  editable: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.id = this.courseData.id;
    this.title = this.courseData.title;
    this.description = this.courseData.description;
    this.creationDate = this.courseData.creationDate;
    this.duration = this.courseData.duration;
    this.authors = this.courseData.authors;
    this.editable = this.courseData.editable;
  }

  clickOnShow(course: Course) {
    this.showCourse.emit(course);
  }

  onEditCourse(courseName: string) {
    console.log(`The fallowing course will be EDITED ${courseName}`);
  }

  onDeleteCourse(courseName: string) {
    console.log(`The fallowing course will be DELETED ${courseName}`);
  }
}
