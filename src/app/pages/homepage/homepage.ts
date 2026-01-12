import { Component, resource } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ContentfulRichText } from '../../components/contentful-rich-text.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CtDatePipe } from '../../pipes/contentful-date.pipe';
import { Entry } from 'contentful';
import { ContentfulService } from '../../services/contentful.service';
import { BlogEntrySkeleton, MemberPageSkeleton } from '../../models/contentful.model';

@Component({
  selector: 'app-homepage',
  imports: [ButtonModule, ContentfulRichText, CommonModule, RouterModule, CardModule, CtDatePipe],
  providers: [ContentfulService],
  templateUrl: './homepage.html',
})
export class HomePageComponent {
  blogVisibility: { [id: string]: boolean } = {};

  isVisible(blogId: string): boolean {
    return this.blogVisibility[blogId] || false;
  }

  toggleVisibility(blogId: string): void {
    this.blogVisibility[blogId] = !this.isVisible(blogId);
  }

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
