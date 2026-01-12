import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ContentfulRichText } from '../../components/contentful-rich-text.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { Entry } from 'contentful';
import { FormsModule } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TextareaModule } from 'primeng/textarea';
import { PreviewContentfulService } from '../preview-contentful.service';
import { PageSkeleton } from '../../models/contentful.model';

@Component({
  selector: 'app-preview-page',
  imports: [
    ButtonModule,
    ContentfulRichText,
    RouterModule,
    CardModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    InputGroupModule,
    FluidModule,
    InputGroupAddonModule,
    TextareaModule,
  ],
  providers: [PreviewContentfulService],
  templateUrl: './page.html',
})
export class PreviewPageComponent {
  pageContent: Entry<PageSkeleton> | null = null;

  constructor(
    private contentfulService: PreviewContentfulService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.contentfulService.getOnePage(params['pageId']).then((entry) => {
        this.pageContent = entry;
      });
    });
  }
}
