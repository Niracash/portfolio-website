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
        'assets/workout buddy/login.jpg',
        'assets/workout buddy/signup.jpg',
        'assets/workout buddy/homepage.jpg',
        'assets/workout buddy/bmi.jpg'
      ]

    },
    {
      name: 'JobNotesAPI',
      type: 'Web Application',
      description: 'A simple note tracking app that tracks which company have been applied for job.',
      techs: ['csharp', 'dotnetcore', 'angularjs', 'microsoftsqlserver'],
      github: 'https://github.com/Niracash/JobNotesAPI',
      image: [
        'assets/projexus/login.jpg',
        'assets/projexus/signup.jpg',
        'assets/projexus/view.jpg',
        'assets/projexus/delete.jpg',
        'assets/projexus/add.jpg',
      ]

    },
    {
      name: 'Riot API',
      type: 'Web Application',
      description: 'A WPF project where you can track the stats in a game using Riot API. You can track player rank, games, levels etc',
      techs: ['csharp', 'xml'],
      github: 'https://github.com/Niracash/RiotAPI',
      image: [
        'assets/simongame/end.jpg',
        'assets/simongame/howto.jpg',
        'assets/simongame/start.jpg'
      ]
    },
    {
      name: 'PC Health Checker',
      type: 'Web Application',
      description: 'A python health script that constantly check health and make a log file with timestamp and error status when the pc gets problem',
      techs: ['python'],
      github: 'https://github.com/Niracash/PythonHealth',
      image: [
        'assets/product manager/categories.jpg',
        'assets/product manager/landing.jpg',
        'assets/product manager/login.jpg',
        'assets/product manager/manage.jpg',
      ]
    },
  ]

}
