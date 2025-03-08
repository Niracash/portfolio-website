import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects: any[] = [
    {
      name: 'News Blog',
      type: 'Web Application',
      description: 'The News Blog Web API is an easy-to-use website where people can read and post news articles. It has a special login area for managing everything, built with a simple design to keep things running smoothly.',
      techs: ['dotnetcore', 'csharp', 'microsoftsqlserver'],
      github: 'https://github.com/Niracash/NewsBlogV2',
      image: [
        'assets/projects/newsblog/blog1.png',
        'assets/projects/newsblog/blog2.png',
        'assets/projects/newsblog/blog3.png',
        'assets/projects/newsblog/blog4.png',
        'assets/projects/newsblog/blog5.png',
        'assets/projects/newsblog/blog6.png',
        'assets/projects/newsblog/blog7.png',


      ]

    },
    {
      name: 'Blood Alcohol Concentration',
      description: 'This magical app lets you enter your drinking details and tells you whether it\'s safe to drive or if you should start looking for a couch to crash on.',
      techs: ['csharp'],
      github: 'https://github.com/Niracash/BloodAlcoholCalculator',
      livePreview: 'https://github.com/Niracash/BloodAlcoholCalculator/releases/tag/V0.3',
      image: [
        'assets/projects/bac/bac1.png',
      ]
    },
    {
      name: 'Company Tracker',
      description: 'A simple note tracking app that tracks which company have been applied for job.',
      techs: ['csharp', 'angularjs', 'microsoftsqlserver'],
      github: 'https://github.com/Niracash/JobNotesAPI',
      image: [
        'assets/projects/jobnotes/jobnotes3.png',
        'assets/projects/jobnotes/jobnotes2.png',
        'assets/projects/jobnotes/jobnotes4.png',
        'assets/projects/jobnotes/jobnotes5.png',
        'assets/projects/jobnotes/jobnotes1.png',
        'assets/projects/jobnotes/jobnotes6.png',


      ]

    },
    {
      name: 'Asking out',
      description: 'If anyone have a crush on somebody I can be their wingman as a programmer too!',
      techs: ['svelte', 'tailwindcss'],
      github: 'https://github.com/Niracash/asking-out',
      livePreview: 'https://niracash.github.io/asking-out/',
      image: [
        'assets/projects/askingout/askingout.png',
      ]
    },
  ];
    // New property to track the current image index for each project
    currentImageIndices: {[key: number]: number} = {};

    constructor() {
      // Initialize currentImageIndices with 0s
      this.projects.forEach((_, index) => this.currentImageIndices[index] = 0);
    }
  
    // Function to show the next image
    showNext(projectIndex: number): void {
      if (this.currentImageIndices[projectIndex] < this.projects[projectIndex].image.length - 1) {
        this.currentImageIndices[projectIndex]++;
      }
    }
  
    // Function to show the previous image
    showPrevious(projectIndex: number): void {
      if (this.currentImageIndices[projectIndex] > 0) {
        this.currentImageIndices[projectIndex]--;
      }
    }
}
