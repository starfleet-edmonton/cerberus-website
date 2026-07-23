import { Component, Renderer2, resource, signal, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { filter, Subscription } from 'rxjs';
import { AppSidebar } from './layout/components/app.sidebar';
import { AppTopbar } from './layout/components/app.topbar';
import { LayoutService } from './layout/services/layout.service';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, CommonModule, RouterModule, CardModule],
  providers: [LayoutService],
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class App {}
