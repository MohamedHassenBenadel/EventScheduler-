import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    { src: 'assets/Gallery/image1.jpg', alt: 'Image 1' },
    { src: 'assets/Gallery/image2.jpg', alt: 'Image 2' },
    { src: 'assets/Gallery/image3.jpg', alt: 'Image 3' },
    { src: 'assets/Gallery/image4.jpg', alt: 'Image 4' },
    { src: 'assets/Gallery/image5.jpg', alt: 'Image 5' },
    { src: 'assets/Gallery/image6.jpg', alt: 'Image 6' },
    { src: 'assets/Gallery/image7.jpg', alt: 'Image 7' },
    { src: 'assets/Gallery/image8.jpg', alt: 'Image 8' },
    { src: 'assets/Gallery/image9.jpg', alt: 'Image 9' },
    { src: 'assets/Gallery/image10.jpg', alt: 'Image 10' },
    { src: 'assets/Gallery/image4.jpg', alt: 'Image 11' },
    { src: 'assets/Gallery/image6.jpg', alt: 'Image 12' },
    { src: 'assets/Gallery/image1.jpg', alt: 'Image 13' },
    { src: 'assets/Gallery/image1.jpg', alt: 'Image 14' },
    { src: 'assets/Gallery/image2.jpg', alt: 'Image 15' },
    { src: 'assets/Gallery/image3.jpg', alt: 'Image 16' },
    { src: 'assets/Gallery/image4.jpg', alt: 'Image 17' },
    { src: 'assets/Gallery/image7.jpg', alt: 'Image 18' },
    { src: 'assets/Gallery/image10.jpg', alt: 'Image 19' },
    { src: 'assets/Gallery/image9.jpg', alt: 'Image 20' },
    { src: 'assets/Gallery/image8.jpg', alt: 'Image 21' },
    { src: 'assets/Gallery/image7.jpg', alt: 'Image 22' },
    { src: 'assets/Gallery/image6.jpg', alt: 'Image 23' },
    { src: 'assets/Gallery/image1.jpg', alt: 'Image 24' },
    { src: 'assets/Gallery/image6.jpg', alt: 'Image 25' },
    { src: 'assets/Gallery/image2.jpg', alt: 'Image 26' },

    // Add more images as needed
  ];

  currentImageIndex: number = 0;
  modalOpen: boolean = false;
  currentPage: number = 1;
  imagesPerPage: number = 9; // 3 rows of 3 images each

  openModal(index: number) {
    this.currentImageIndex = index + (this.currentPage - 1) * this.imagesPerPage;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  changeImage(direction: number) {
    this.currentImageIndex += direction;

    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.images.length - 1;
    } else if (this.currentImageIndex >= this.images.length) {
      this.currentImageIndex = 0;
    }
  }

  get currentImage() {
    return this.images[this.currentImageIndex];
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent) {
    this.closeModal();
  }

  get paginatedImages() {
    const startIndex = (this.currentPage - 1) * this.imagesPerPage;
    return this.images.slice(startIndex, startIndex + this.imagesPerPage);
  }

  get totalPages() {
    return Math.ceil(this.images.length / this.imagesPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }
}
