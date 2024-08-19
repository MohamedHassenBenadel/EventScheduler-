import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  selectCategory(category: string) {
    // Handle the selection of the category here
    console.log(`Selected category: ${category}`);
  }
}
