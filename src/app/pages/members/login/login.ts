import { Component, inject } from '@angular/core';
import { TabsModule } from '@openng/optimus-ui/tabs';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from '@openng/optimus-ui/button';
import { CardModule } from '@openng/optimus-ui/card';
import { FluidModule } from '@openng/optimus-ui/fluid';
import { InputGroupModule } from '@openng/optimus-ui/inputgroup';
import { InputGroupAddonModule } from '@openng/optimus-ui/inputgroupaddon';
import { InputTextModule } from '@openng/optimus-ui/inputtext';
import { TextareaModule } from '@openng/optimus-ui/textarea';

@Component({
  selector: 'app-login',
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
    TabsModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  authService: AuthService = inject(AuthService);
  router = inject(Router);

  resetEmailMessage = '';

  doEmailLogin(email: string, password: string) {
    this.authService.loginWithEmailAndPassword(email, password).subscribe({
      next: () => {
        // Handle successful login
        //debugger;
        this.redirectToEvents();
      },
      error: (error) => {
        // Handle login error
        //debugger;
      },
    });
  }

  doGoogleLogin() {
    this.authService.loginFromGoogle().subscribe({
      next: () => {
        // Handle successful login
        //debugger;
        this.redirectToEvents();
      },
      error: (error) => {
        // Handle login error
        //debugger;
      },
    });
  }

  redirectToEvents() {
    this.router.navigate(['/members/events']);
  }

  sendResetPasswordEmail(resetEmail: string) {
    this.authService.sendResetPasswordEmail(resetEmail).subscribe({
      next: () => {
        // Password reset email sent!
        // ..
        //debugger;
        this.resetEmailMessage = 'Password reset email sent!';
      },
      error: (error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        debugger;
      },
    });
  }

  updateProfile() {
    this.authService
      .updateProfile('Jane Q. User', 'https://example.com/jane-q-user/profile.jpg')
      .subscribe({
        next: () => {
          // Profile updated!
          // ...
        },
        error: (error) => {
          // An error occurred
          // ...
        },
      });
  }
}
