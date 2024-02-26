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
      techs: ['dotnetcore', 'csharp', 'bootstrap', 'microsoftsqlserver'],
      github: 'https://github.com/Niracash/NewsBlog',
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
      name: 'JobNotesAPI',
      type: 'Web Application',
      description: 'A simple note tracking app that tracks which company have been applied for job.',
      techs: ['csharp', 'dotnetcore', 'angularjs', 'microsoftsqlserver'],
      github: 'https://github.com/Niracash/JobNotesAPI',
      image: [
        'assets/projects/jobnotes/jobnotes1.png',
        'assets/projects/jobnotes/jobnotes2.png',
        'assets/projects/jobnotes/jobnotes3.png',
        'assets/projects/jobnotes/jobnotes4.png',
        'assets/projects/jobnotes/jobnotes5.png',
        'assets/projects/jobnotes/jobnotes6.png',


      ]

    },
    {
      name: 'Riot API',
      type: 'Web Application',
      description: 'A WPF project where you can track the stats in a game using Riot API. You can track player rank, games, levels etc',
      techs: ['csharp', 'xml'],
      github: 'https://github.com/Niracash/RiotAPI',
      image: [
        'assets/projects/riotapi/riotapi1.png',
        'assets/projects/riotapi/riotapi2.png'
      ]
    },
    {
      name: 'PC Health Checker',
      type: 'Web Application',
      description: 'A python health script that constantly check health and make a log file with timestamp and error status when the pc gets problem',
      techs: ['python'],
      github: 'https://github.com/Niracash/PythonHealth',
      image: [
        'assets/projects/pythonhealth/pyhealth1.png',
        'assets/projects/pythonhealth/pyhealth2.png'
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
