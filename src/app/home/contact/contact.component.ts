import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { NgIf } from '@angular/common'; // ✅ Import NgIf

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf], // ✅ Add NgIf here
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isCopied = false;

  constructor(private clipboard: Clipboard) {}

  copyText() {
    const text = 'nirakashmail@gmail.com';
    this.clipboard.copy(text);

    // Show the notification
    this.isCopied = true;

    // Hide the notification after 2 seconds
    setTimeout(() => {
      this.isCopied = false;
    }, 2000);
  }
}
