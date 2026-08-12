import { Component } from '@angular/core';
import { PageDisplayComponent } from '../../components/contentful-page.component';

@Component({
  selector: 'app-partners',
  imports: [PageDisplayComponent],
  providers: [],
  template: ` <app-page-display pageId="5KJjB70AQZ2RiJbLfiUHx4"> </app-page-display> `,
})
export class PartnersComponent {}
