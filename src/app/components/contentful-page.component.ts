import { ContentfulService } from '../services/contentful.service';
import { Component, input, resource } from '@angular/core';
import { ContentfulRichText } from './contentful-rich-text.component';

@Component({
  selector: 'app-page-display',
  imports: [ContentfulRichText],
  providers: [ContentfulService],
  template: `
    @if (pageContentResource.asReadonly().isLoading()) {
      <div>Loading...</div>
    } @else {
      <div>
        <h1>{{ pageContentResource.asReadonly().value()?.fields?.pageTitle }}</h1>
        <ng-content select="before"></ng-content>
        <app-contentful-rich-text
          [document]="pageContentResource.asReadonly().value()?.fields?.pageContent"
        ></app-contentful-rich-text>
        <ng-content select="after"></ng-content>
        <ng-content></ng-content>
      </div>
    }
  `,
})
export class PageDisplayComponent {
  public pageId = input<string>('');

  pageContentResource = resource({
    loader: () => this.contentfulService.getOnePage(this.pageId()),
    params: () => ({ pageId: this.pageId() }),
  });

  constructor(private contentfulService: ContentfulService) {}
}
