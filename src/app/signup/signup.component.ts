import { Component } from '@angular/core';
import { HostService } from '../../services/host.service';
import { NgForm } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private hostService: HostService) { }

  onSubmit(signupForm: NgForm) {
    if (signupForm.valid) {
      const formData = signupForm.value;
      console.log(formData);
      this.hostService.addHost(formData).subscribe(
        (response: HttpResponse<any>) => {
          if (response.status === 200) {
            console.log('Host added successfully:', response.body);
          } else {
            console.error('Unexpected response status:', response.status);
          }
        },
        error => {
          console.error('Error adding host:', error);
        }
      );
    }
  }

}
