import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'design-system-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username: string | null = '';

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
  }
}
