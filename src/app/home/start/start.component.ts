import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {

  showArrow = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.showArrow = window.pageYOffset === 0;
  }

  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset - 75;
      window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
    }
  }

}
