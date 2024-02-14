import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  @Input('title') title: string = '';
  @Input('text') text: string = '';
}
// Use the names `title` and `text`.
