import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  events: any[] = [];
  isModalOpen: boolean = false;
  isEditMode: boolean = false;
  newEvent: any = {
    id: null,
    name: '',
    description: '',
    location: '',
    date: '',
    imageUrl: null,
    hostId: null
  };
  selectedFile: File | null = null;
  previewUrl: string | null = null;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    const hostJson = localStorage.getItem('host');
    if (hostJson) {
      try {
        const host = JSON.parse(hostJson);
        this.newEvent.hostId = host.id;
        this.getEventsByHostId(this.newEvent.hostId);
      } catch (error) {
        console.error('Error parsing host from localStorage:', error);
      }
    } else {
      console.error('Host not found in localStorage');
    }
  }

  openModal(editEvent: any = null): void {
    this.isEditMode = !!editEvent;
    this.isModalOpen = true;
    if (this.isEditMode) {
      this.newEvent = { ...editEvent };
      this.previewUrl = this.newEvent.imageUrl;
    } else {
      this.resetForm();
    }
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.previewUrl = null;
    this.resetForm();
  }

  onImageSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.previewUrl = URL.createObjectURL(this.selectedFile);
    }
  }

  async uploadImage(file: File): Promise<string> {
    try {
      const response: any = await this.dashboardService.uploadImage(file).toPromise();
      if (response && response.url) {
        return response.url;
      } else {
        throw new Error('Image upload failed or URL not returned');
      }
    } catch (error) {
      console.error('Error during image upload:', error);
      throw error;
    }
  }

  async submitEvent(): Promise<void> {
    try {
      if (this.selectedFile) {
        this.newEvent.imageUrl = await this.uploadImage(this.selectedFile);
      }
  
      if (this.isEditMode) {
        this.dashboardService.updateEvent(this.newEvent).subscribe({
          next: () => {
            this.getEventsByHostId(this.newEvent.hostId!);
            this.closeModal();
            window.location.reload(); // Automatically refresh the page after updating the event
          },
          error: (error) => console.error('Error updating event:', error)
        });
      } else {
        if (!this.newEvent.hostId) {
          console.error('Host ID is not available');
          return;
        }
  
        this.dashboardService.createEvent(this.newEvent).subscribe({
          next: () => {
            this.getEventsByHostId(this.newEvent.hostId!);
            this.closeModal();
            window.location.reload(); // Automatically refresh the page after creating the event
          },
          error: (error) => console.error('Error creating event:', error)
        });
      }
    } catch (error) {
      console.error('Error during event submission:', error);
    }
  }

  editEvent(event: any): void {
    this.openModal(event);
  }

  deleteEvent(eventId: number): void {
    if (confirm('Are you sure you want to delete this event?')) {
      this.dashboardService.deleteEvent(eventId).subscribe({
        next: () => {
          this.getEventsByHostId(this.newEvent.hostId);
          window.location.reload(); // Automatically refresh the page after deleting the event
        },
        error: (error) => console.error('Error deleting event:', error)
      });
    }
  }

  getEventsByHostId(hostId: number): void {
    if (hostId) {
      this.dashboardService.getEventsByHostId(hostId).subscribe({
        next: (events) => {
          this.events = events;
          console.log('Events retrieved:', this.events);
        },
        error: (error) => console.error('Error fetching events:', error)
      });
    } 
  }
  
  private resetForm(): void {
    this.newEvent = {
      id: null,
      name: '',
      description: '',
      location: '',
      date: '',
      imageUrl: null,
      hostId: this.newEvent.hostId
    };
    this.selectedFile = null;
    this.previewUrl = null;
  }
}
