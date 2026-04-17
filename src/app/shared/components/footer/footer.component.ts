import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  readonly socialLinks = [
    { icon: 'bi-facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'bi-twitter-x', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'bi-instagram', url: 'https://instagram.com', label: 'Instagram' },
    { icon: 'bi-linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'bi-github', url: 'https://github.com', label: 'GitHub' }
  ];

  readonly quickLinks = [
    { label: 'Home', path: '/dashboard' },
    { label: 'Products', path: '/products' },
    { label: 'Orders', path: '/orders' },
    { label: 'Cart', path: '/cart' }
  ];

  readonly supportLinks = [
    { label: 'Help Center', path: '/help' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'Shipping Info', path: '/shipping' }
  ];

  readonly legalLinks = [
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Cookie Policy', path: '/cookies' },
    { label: 'Refund Policy', path: '/refunds' }
  ];
}
