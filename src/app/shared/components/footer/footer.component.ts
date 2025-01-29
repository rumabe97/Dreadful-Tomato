import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  menuItems = [
    { label: "Home", link: "/" },
    { label: "Terms of Use", link: "/terms" },
    { label: "Legal Notices", link: "/legal" },
    { label: "Help", link: "/help" },
    { label: "Manage Account", link: "/account" },
  ]
}
