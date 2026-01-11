import { Entry } from 'contentful';
import { ContentfulService, PageSkeleton } from '../services/contentful.service';
import { Component, Input } from '@angular/core';
import { ContentfulRichText } from './contentful-rich-text.component';

@Component({
  selector: 'app-page-display',
  imports: [ContentfulRichText],
  providers: [ContentfulService],
  template: `<h1>{{ pageContent?.fields?.pageTitle }}</h1>
    <div>
      <app-contentful-rich-text
        [document]="pageContent?.fields?.pageContent"
      ></app-contentful-rich-text>
    </div>`,
})
export class PageDisplayComponent {
  private _pageId: string = '';

  @Input()
  get pageId(): string {
    return this._pageId;
  }
  set pageId(value: string) {
    this._pageId = value;
    this.contentfulService.getOnePage(value).then((entry) => {
      this.pageContent = entry;
    });
  }
  pageContent: Entry<PageSkeleton> | null = null;

  submitted() {
    alert('Your message has been sent.');
  }

  constructor(private contentfulService: ContentfulService) {}
}
