import { Component } from '@angular/core';
import { HostService } from '../../services/host.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: string = '';
  password: string = '';

  constructor(private hostService: HostService, private router: Router) { }

  onSubmit(signinForm: NgForm) {
    if (signinForm.valid) {
      const credentials = {
        email: this.email,
        password: this.password
      };

      this.hostService.loginHost(credentials).subscribe(
        response => {
          if (response.status === 200) {
            localStorage.setItem('host', JSON.stringify(response.body.host));

            this.router.navigate(['/dashboard']);
          } else {
            console.error('Unexpected response status:', response.status);
          }
        },
        error => {
          console.error('Error during login:', error);
        }
      );
    }
  }
}
