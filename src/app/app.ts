import { Component, resource, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { Entry } from 'contentful';
import {
  BlogEntrySkeleton,
  ContentfulService,
  MemberPageSkeleton,
} from './services/contentful.service';
import { ContentfulRichText } from './components/contentful-rich-text.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, ContentfulRichText, CommonModule],
  providers: [ContentfulService],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('cerberus-website');

  blogEntries: Entry<BlogEntrySkeleton>[] = [];
  memberPages: Entry<MemberPageSkeleton>[] = [];

  singleEntry: Entry<BlogEntrySkeleton> | null = null;

  blogEntriesResource = resource({
    defaultValue: [] as Entry<BlogEntrySkeleton>[],
    loader: () => this.contentfulService.getBlogEntries(),
    //request: () => this.contentfulService.getBlogEntries(),
  });

  constructor(private contentfulService: ContentfulService) {}
}
