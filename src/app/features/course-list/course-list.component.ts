import { Component, Input, OnInit, Output } from '@angular/core';
import { mockedAuthorsList, mockedCoursesList } from '@app/shared/mocks/mock';
import { Author } from '@app/shared/interfaces/authors';
import { Course } from '@app/shared/interfaces/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courseList: Array<Course> = [];
  authorList: Array<Author> = [];
  recivedCourseData: Course = <Course>{};
  @Output() coursDataToInfo: Course = <Course>{};
  @Input() showInfo: boolean = false;

  ngOnInit(): void {
    this.courseList = mockedCoursesList;
    this.mapAuthors(mockedCoursesList, mockedAuthorsList);
  }

  mapAuthors(courseList: Course[], authorList: Author[]) {
    const authorMap = new Map<string, string>();
    authorList.forEach(author => {
        authorMap.set(author.id, author.name);
    });
    courseList.forEach(course => {
      course.authors = course.authors.map(authorId => authorMap.get(authorId) || authorId);
    });

    this.courseList = courseList;
  }

  receiveDataFromChild(data: Course) {
    this.coursDataToInfo = data;
    this.showInfo = true;
  }

  closeInfoComponent(close: boolean) {
    this.showInfo = close;
  }
}
