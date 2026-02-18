import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  template: `<div class="layout-footer">
    &copy;{{ currentYear }} 2724594 ALBERTA SOCIETY / USS Cerberus
  </div>`,
})
export class AppFooter {
  currentYear: number = new Date().getFullYear();
}
