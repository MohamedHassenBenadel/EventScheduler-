import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EventScheduler';

  showNavbar = false;
  showAdminNavbar = false;
  showFooter = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const adminNavbarRoutes = ['/dashboard', '/navadmin'];
        const regularNavbarRoutes = ['/home', '/events', '/gallery', '/contact'];
        const noFooterRoutes = ['/signup']; // Add /signup to noFooterRoutes

        this.showAdminNavbar = adminNavbarRoutes.includes(event.urlAfterRedirects);
        this.showNavbar = !adminNavbarRoutes.includes(event.urlAfterRedirects) &&
                          regularNavbarRoutes.includes(event.urlAfterRedirects);
        this.showFooter = !adminNavbarRoutes.includes(event.urlAfterRedirects) &&
                          !noFooterRoutes.includes(event.urlAfterRedirects); // Update condition to include noFooterRoutes
      }
    });
  }
}
