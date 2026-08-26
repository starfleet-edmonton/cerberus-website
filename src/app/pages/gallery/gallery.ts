import { Component } from '@angular/core';
import { PageDisplayComponent } from '../../components/contentful-page.component';

@Component({
  selector: 'app-gallery',
  imports: [PageDisplayComponent],
  providers: [],
  template: ` <app-page-display pageId="5bYBfKBbACF1SRZXjY03RA"> </app-page-display> `,
})
export class GalleryComponent {}
