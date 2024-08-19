import { Component, OnInit } from '@angular/core';

interface Event {
  title: string;
  description: string;
  image: string;
  date?: string; // Optional if you want to include event date
  location?: string; // Optional if you want to include event location
  category: string;
}

interface Category {
  name: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[] = [
    {
      title: 'Music Concert Extravaganza',
      description: 'Immerse yourself in an unforgettable evening of live music performances by top artists in the heart of Central Park.',
      image: 'assets/UpcomingEvents/Event1.png',
      date: '2024-09-10',
      location: 'Central Park',
      category: 'Education & Training'
    },
    {
      title: 'Innovative Art Showcase',
      description: 'Discover cutting-edge artworks from emerging local artists at this exclusive art exhibition held at the Art Gallery.',
      image: 'assets/UpcomingEvents/Event1.png',
      date: '2024-09-12',
      location: 'Art Gallery',
      category: 'Health & Wellness'
    },
    {
      title: 'Wellness Through Art',
      description: 'Explore how art can enhance well-being and mental health in this inspiring art exhibition at the Art Gallery.',
      image: 'assets/UpcomingEvents/Event1.png',
      date: '2024-09-12',
      location: 'Art Gallery',
      category: 'Health & Wellness'
    },
    {
      title: 'Future of Technology Summit',
      description: 'Join leading tech experts and innovators at the Convention Center to discuss groundbreaking advancements and trends in technology.',
      image: 'assets/UpcomingEvents/Event1.png',
      date: '2024-09-15',
      location: 'Convention Center',
      category: 'Travel & Exploration'
    },
    {
      title: 'Tech Innovations Conference',
      description: 'Experience a deep dive into the latest tech innovations and their implications for global travel and exploration at the Convention Center.',
      image: 'assets/UpcomingEvents/Event1.png',
      date: '2024-09-15',
      location: 'Convention Center',
      category: 'Travel & Exploration'
    },
    {
      title: 'Exploring New Frontiers in Tech',
      description: 'Engage with tech leaders and visionaries on how new technologies are shaping the future of travel and exploration.',
      image: 'assets/UpcomingEvents/Event1.png',
      date: '2024-09-15',
      location: 'Convention Center',
      category: 'Travel & Exploration'
    },
    {
      title: 'Sports Innovation Expo',
      description: 'Get insights into the latest advancements in sports technology and performance at the Convention Center, featuring industry experts and interactive exhibits.',
      image: 'assets/UpcomingEvents/Event1.png',
      date: '2024-09-15',
      location: 'Convention Center',
      category: 'Sports'
    },
    {
      title: 'Ultimate Sports Experience',
      description: 'Join fellow sports enthusiasts for a day of interactive sessions and showcases highlighting the future of sports and athletic performance.',
      image: 'assets/UpcomingEvents/Event1.png',
      date: '2024-09-15',
      location: 'Convention Center',
      category: 'Sports'
    },
    {
      title: 'Sports Leadership Summit',
      description: 'Network with sports leaders and gain valuable insights into the evolution of sports management and leadership at the Convention Center.',
      image: 'assets/UpcomingEvents/Event1.png',
      date: '2024-09-15',
      location: 'Convention Center',
      category: 'Sports'
    },
    {
      title: 'Global Sports Trends Forum',
      description: 'Explore emerging global trends in sports, including new technologies and strategies for enhancing athletic performance and fan engagement.',
      image: 'assets/UpcomingEvents/Event1.png',
      date: '2024-09-15',
      location: 'Convention Center',
      category: 'Sports'
    },
    {
      title: 'Interactive Sports Workshop',
      description: 'Participate in hands-on workshops focused on the latest techniques and technologies in sports training and development.',
      image: 'assets/UpcomingEvents/Event1.png',
      date: '2024-09-15',
      location: 'Convention Center',
      category: 'Sports'
    }
  ];
  
  categories: Category[] = [
    { name: 'Education & Training' },
    { name: 'Health & Wellness' },
    { name: 'Travel & Exploration' },
    { name: 'Sports' }
  ];

  selectedCategory: Category | null = null;
  filteredEvents: Event[] = [];
  selectedEvent: Event | null = null;
  formData = {
    firstName: '',
    lastName: '',
    email: ''
  };

  ngOnInit(): void {
    this.filteredEvents = this.events; // Initially show all events
  }

  selectCategory(category: Category | null): void {
    this.selectedCategory = category;
    this.filteredEvents = category ? 
      this.events.filter(event => event.category === category.name) : 
      this.events;
  }

  openModal(event: Event): void {
    this.selectedEvent = event;
  }

  closeModal(): void {
    this.selectedEvent = null;
  }

  submitForm(): void {
    // Handle form submission logic here
    console.log('Form data:', this.formData);
    this.closeModal(); // Optionally close the modal after submission
  }
}
