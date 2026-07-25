import { Component } from '@angular/core';
import { ButtonModule } from '@openng/optimus-ui/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from '@openng/optimus-ui/card';
import { FormsModule } from '@angular/forms';
import { FluidModule } from '@openng/optimus-ui/fluid';
import { InputTextModule } from '@openng/optimus-ui/inputtext';
import { InputGroupModule } from '@openng/optimus-ui/inputgroup';
import { InputGroupAddonModule } from '@openng/optimus-ui/inputgroupaddon';
import { TextareaModule } from '@openng/optimus-ui/textarea';
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
  template: `
    <app-page-display pageId="4llZBfChWrk19FKRoLPIJN">
      <p-fluid class="flex flex-col md:flex-row gap-8" ngProjectAs="before">
        <div class="md:w-1/2">
          <div class="card flex flex-col gap-4">
            <form ngNoForm action="https://formspree.io/f/xjggbjga" method="POST">
              <input pInputText id="name" name="name" type="text" placeholder="Your Name:" />

              <input pInputText id="email" name="email" type="text" placeholder="Your Email:" />

              <textarea
                pTextarea
                name="message"
                placeholder="Your Message"
                [autoResize]="true"
                rows="5"
              ></textarea>

              <button label="Send" name="submit" type="submit" pButton></button>
            </form>
          </div>
        </div>
      </p-fluid>
    </app-page-display>
  `,
})
export class ContactUsComponent {}
