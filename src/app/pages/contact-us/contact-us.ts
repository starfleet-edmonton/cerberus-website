import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TextareaModule } from 'primeng/textarea';
import { PageDisplayComponent } from '../../components/contentful-page.component';

@Component({
  selector: 'app-contact-us',
  imports: [
    ButtonModule,
    RouterModule,
    CardModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    InputGroupModule,
    FluidModule,
    InputGroupAddonModule,
    TextareaModule,
    PageDisplayComponent,
  ],
  providers: [],
  templateUrl: './contact-us.html',
})
export class ContactUsComponent {}
