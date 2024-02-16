import { Component, Output } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {



  ngOnInit(): void {
    const tl: gsap.core.Timeline = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".intro-text", { y: "0%", duration: 3 });
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.1 });
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");


  }
}


