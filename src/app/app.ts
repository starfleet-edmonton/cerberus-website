import { Component, Renderer2, resource, signal, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { Entry } from 'contentful';
import {
  BlogEntrySkeleton,
  ContentfulService,
  MemberPageSkeleton,
} from './services/contentful.service';
import { ContentfulRichText } from './components/contentful-rich-text.component';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { filter, Subscription } from 'rxjs';
import { AppSidebar } from './components/app.sidebar';
import { AppTopbar } from './components/app.topbar';
import { LayoutService } from './services/layout.service';
import { AppFooter } from './components/app.footer';

@Component({
  selector: 'app-root',
  imports: [
    ButtonModule,
    ContentfulRichText,
    CommonModule,
    RouterModule,
    CardModule,
    AppSidebar,
    AppTopbar,
    AppFooter,
  ],
  providers: [ContentfulService, LayoutService],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('cerberus-website');

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

  overlayMenuOpenSubscription: Subscription;

  menuOutsideClickListener: any;

  @ViewChild(AppSidebar) appSidebar!: AppSidebar;

  @ViewChild(AppTopbar) appTopBar!: AppTopbar;

  constructor(
    public layoutService: LayoutService,
    public renderer: Renderer2,
    public router: Router,
    private contentfulService: ContentfulService
  ) {
    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
      if (!this.menuOutsideClickListener) {
        this.menuOutsideClickListener = this.renderer.listen('document', 'click', (event) => {
          if (this.isOutsideClicked(event)) {
            this.hideMenu();
          }
        });
      }

      if (this.layoutService.layoutState().staticMenuMobileActive) {
        this.blockBodyScroll();
      }
    });

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.hideMenu();
    });
  }

  isOutsideClicked(event: MouseEvent) {
    const sidebarEl = document.querySelector('.layout-sidebar');
    const topbarEl = document.querySelector('.layout-menu-button');
    const eventTarget = event.target as Node;

    return !(
      sidebarEl?.isSameNode(eventTarget) ||
      sidebarEl?.contains(eventTarget) ||
      topbarEl?.isSameNode(eventTarget) ||
      topbarEl?.contains(eventTarget)
    );
  }

  hideMenu() {
    this.layoutService.layoutState.update((prev) => ({
      ...prev,
      overlayMenuActive: false,
      staticMenuMobileActive: false,
      menuHoverActive: false,
    }));
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
  }

  blockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.add('blocked-scroll');
    } else {
      document.body.className += ' blocked-scroll';
    }
  }

  unblockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.remove('blocked-scroll');
    } else {
      document.body.className = document.body.className.replace(
        new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'),
        ' '
      );
    }
  }

  get containerClass() {
    return {
      'layout-overlay': this.layoutService.layoutConfig().menuMode === 'overlay',
      'layout-static': this.layoutService.layoutConfig().menuMode === 'static',
      'layout-static-inactive':
        this.layoutService.layoutState().staticMenuDesktopInactive &&
        this.layoutService.layoutConfig().menuMode === 'static',
      'layout-overlay-active': this.layoutService.layoutState().overlayMenuActive,
      'layout-mobile-active': this.layoutService.layoutState().staticMenuMobileActive,
    };
  }

  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }

    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
  }
}
