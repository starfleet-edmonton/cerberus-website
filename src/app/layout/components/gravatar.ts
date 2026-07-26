import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AvatarModule } from '@openng/optimus-ui/avatar';
import jsSHA from 'jssha';

@Component({
  selector: 'app-gravatar',
  standalone: true,
  imports: [AvatarModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `<p-avatar
    style="background-color: #dee9fc; color: #1a2551"
    shape="circle"
    image="{{ url }}"
  />`,
})
export class Gravatar {
  @Input() email: string | null = '';
  @Input() name: string | null = '';
  @Input() size: number | null = 80;

  get url(): string {
    if (!this.email) {
      return '';
    }
    return this.getGravatarUrl(this.email, this.size ?? 80);
  }

  getGravatarUrl(email: string, size = 80) {
    const trimmedEmail = email.trim().toLowerCase();

    const shaObj = new jsSHA('SHA-256', 'TEXT', { encoding: 'UTF8' });
    /* .update() can be chained */
    shaObj.update(trimmedEmail);
    const hash = shaObj.getHash('HEX');

    //const hash = sha256.hash(trimmedEmail);
    return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=initials&name=${this.name}`;
  }

  getInitial(data: string): string {
    const [fname, lname] = data.split(' ');
    return `${fname[0]}${lname ? lname[0] : ''}`;
  }
}
