import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  slides = [
    { image: '/assets/HomeImages/slider_image1.jpg', title: 'Unlock the Best Events !', subtitle: 'From lively concerts to engaging workshops, discover exciting events tailored just for you. Don’t miss out—explore our schedule now!' },
    { image: '/assets/HomeImages/slider_image2.jpg', title: 'Get into Sports in Your Area!', subtitle: 'Discover local sporting events happening right around the corner. Whether you’re a player or a fan, there’s something for everyone.' },
    { image: '/assets/HomeImages/slider_image3.jpg', title: 'Connect with Like-Minded Individuals!', subtitle: 'Join our vibrant community at local meetups and networking events. Build valuable connections and enhance your social circle. See what’s happening near you!' }
  ];

  currentIndex = 0;
  private slider: HTMLElement | null = null;

  constructor(private router: Router , private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.slider = document.querySelector('.slider');
    if (this.slider) {
      setInterval(() => this.nextSlide(), 5000); // Change slide every 5 seconds
    }
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex === 0) ? this.slides.length - 1 : this.currentIndex - 1;
    this.updateSlidePosition();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : this.currentIndex + 1;
    this.updateSlidePosition();
  }

  updateSlidePosition(): void {
    if (this.slider) {
      this.renderer.setStyle(this.slider, 'transform', `translateX(-${this.currentIndex * 100}%)`);
    }
  }

  onCategoryChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedCategory = target.value;
    // Implement further logic for category selection here
  }
  goToEvents(): void {
    this.router.navigate(['/events']);
  }

}
