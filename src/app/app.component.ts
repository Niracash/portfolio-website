import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './home/contact/contact.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { CommonModule } from '@angular/common';
import { EducationComponent } from "./home/education/education.component";
declare const gtag: Function;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, HomeComponent, ContactComponent, PortfolioComponent, EducationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'portfolio';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-42206BJGCL', { 'page_path': event.urlAfterRedirects });
      }
    })
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          // @ts-ignore
          HSStaticMethods.autoInit();
        }, 100);
      }
    });
  }
}
