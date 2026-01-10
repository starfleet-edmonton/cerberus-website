import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ContentfulRichText } from '../../components/contentful-rich-text.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { Entry } from 'contentful';
import { PageSkeleton, ContentfulService } from '../../services/contentful.service';

@Component({
  selector: 'app-homepage',
  imports: [ButtonModule, ContentfulRichText, CommonModule, RouterModule, CardModule],
  providers: [ContentfulService],
  templateUrl: './about-us.html',
})
export class AboutUsComponent {
  pageContent: Entry<PageSkeleton> | null = null;

  constructor(private contentfulService: ContentfulService) {
    this.contentfulService.getOnePage('1O7RuZnUAKcVKxTzGBDua1').then((entry) => {
      this.pageContent = entry;
    });
  }
}
