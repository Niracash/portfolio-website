import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { GithubApiService } from '../services/github-api.service'

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

}
