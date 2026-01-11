import { Component } from '@angular/core';
import { PageDisplayComponent } from '../../components/contentful-page.component';

@Component({
  selector: 'app-about-us',
  imports: [PageDisplayComponent],
  providers: [],
  template: `<app-page-display pageId="1O7RuZnUAKcVKxTzGBDua1"></app-page-display>`,
})
export class AboutUsComponent {
  constructor() {}
}
