import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; 


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Handle form submission logic here
      console.log('Form Data:', form.value);
    }
  }




}
