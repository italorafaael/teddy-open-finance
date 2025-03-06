import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
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
export class HeaderComponent implements OnInit, AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<boolean>();
  sidebarState = false;
  username: string | null = '';

  faBars = faBars;

  constructor(private router: Router, library: FaIconLibrary) {
    library.addIcons(faBars);
  }

  toggleSidebarState() {
    this.sidebarState = !this.sidebarState;
    this.toggleSidebar.emit(this.sidebarState);
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

  ngAfterViewInit() {
    this.updateHeaderHeight();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.updateHeaderHeight();
  }

  private updateHeaderHeight(): void {
    const header = document.querySelector('.header') as HTMLElement;
    if (header) {
      const headerHeight = `${header.offsetHeight}px`;
      localStorage.setItem('headerHeight', headerHeight);
      document.documentElement.style.setProperty(
        '--header-height',
        headerHeight
      );
    }
  }
}
