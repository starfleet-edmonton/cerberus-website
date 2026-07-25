import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonModule } from '@openng/optimus-ui/button';
import { ContentfulRichText } from '../../components/contentful-rich-text.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardModule } from '@openng/optimus-ui/card';
import { Entry } from 'contentful';
import { FormsModule } from '@angular/forms';
import { FluidModule } from '@openng/optimus-ui/fluid';
import { InputTextModule } from '@openng/optimus-ui/inputtext';
import { InputGroupModule } from '@openng/optimus-ui/inputgroup';
import { InputGroupAddonModule } from '@openng/optimus-ui/inputgroupaddon';
import { TextareaModule } from '@openng/optimus-ui/textarea';
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
  changeDetection: ChangeDetectionStrategy.Eager,
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
