import { Component } from '@angular/core';
import { PageDisplayComponent } from '../../components/contentful-page.component';

@Component({
  selector: 'app-officers',
  imports: [PageDisplayComponent],
  providers: [],
  template: `<app-page-display pageId="1IxSEpJ2mETCCK4vLYRYRV"></app-page-display>`,
})
export class OfficersComponent {
  constructor() {}
}
