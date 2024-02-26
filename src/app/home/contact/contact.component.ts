import { Component, inject } from '@angular/core';
import { gsap } from "gsap";
import { Clipboard } from '@angular/cdk/clipboard';
import { HotToastService } from '@ngneat/hot-toast';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private clipboard: Clipboard) { }


  private toastService = inject(HotToastService);


  copyText() {
    const text = 'nirakashmail@gmail.com';
    this.clipboard.copy(text);
    
  }

}
