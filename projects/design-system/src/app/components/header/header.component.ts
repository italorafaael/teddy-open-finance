import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'design-system-header',
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() openSidebar = new EventEmitter<void>();
  username: string | null = '';

  faBars = faBars;

  constructor(private router: Router, library: FaIconLibrary) {
    library.addIcons(faBars);
  }

  showSidebar() {
    this.openSidebar.emit();
  }

  logout() {
    sessionStorage.removeItem('username');
    this.router.navigate(['/home']).then(() => {
      window.history.pushState(null, '', '/home');
    });
  }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
  }
}
