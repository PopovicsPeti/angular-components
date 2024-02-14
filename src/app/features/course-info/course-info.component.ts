import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@app/shared/interfaces/course';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent {
  @Input() courseData: Course = <Course>{};
  @Output() closeInfo: EventEmitter<boolean> = new EventEmitter();

  onClose() {
    this.closeInfo.emit(false);
  }
}
