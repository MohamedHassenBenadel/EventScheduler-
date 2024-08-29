import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrl: './adminnavbar.component.css'
})
export class AdminnavbarComponent {

  constructor(private router: Router) {}

  isDashboardActive(): boolean {
    return this.router.url === '/dashboard'; // Adjust this to your actual dashboard route
  }


}
