import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ContentfulRichText } from '../../components/contentful-rich-text.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { Entry } from 'contentful';
import { ContentfulService } from '../../services/contentful.service';
import { FormsModule } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TextareaModule } from 'primeng/textarea';
import { PageSkeleton } from '../../models/contentful.model';

@Component({
  selector: 'app-contact-us',
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
  providers: [ContentfulService],
  templateUrl: './contact-us.html',
})
export class ContactUsComponent {
  pageContent: Entry<PageSkeleton> | null = null;

  constructor(private contentfulService: ContentfulService) {
    this.contentfulService.getOnePage('4llZBfChWrk19FKRoLPIJN').then((entry) => {
      this.pageContent = entry;
    });
  }
}
