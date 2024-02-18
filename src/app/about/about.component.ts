import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { GithubApiService } from '../services/github-api.service'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  private gitApi = inject(GithubApiService);
  private cd = inject(ChangeDetectorRef);

  publicRepos: number = 0
  followers: number = 0



  ngOnInit(): void {
    this.gitApi.getInfo().subscribe((data: any) => {
      this.followers = data.followers;

      this.publicRepos = data.public_repos;
      // Manually mark the component to be checked for changes
      this.cd.markForCheck();
    });
  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo("#title", {
      y: 100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#title",
        start: "top 75%",
        once: true
      },
    });

    gsap.fromTo("#grid", {
      y: 100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#grid",
        start: "top 75%",
        once: true
      },
    });
    gsap.fromTo("#github", {
      y: 100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#github",
        start: "top 75%",
        once: true
      },
    });
  }
}
