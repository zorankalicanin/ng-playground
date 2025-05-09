import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
   navItems = [
    { path: '/home', label: 'Home' },
    { path: '/tables', label: 'Tables' },
    { path: '/processes', label: 'Processes' },
    { path: '/schema', label: 'Schema' }
  ];
}
