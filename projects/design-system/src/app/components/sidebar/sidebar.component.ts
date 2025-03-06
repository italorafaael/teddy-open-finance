import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faHouse,
  faUser,
  faList,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'design-system-sidebar',
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements AfterViewInit {
  @Input() isOpen: boolean = false;
  @Output() closeSidebar = new EventEmitter<void>();

  faBars = faBars;
  faHouse = faHouse;
  faUser = faUser;
  faList = faList;

  constructor(
    library: FaIconLibrary,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    library.addIcons(faBars, faHouse, faUser, faList);
  }

  hideSidebar() {
    this.closeSidebar.emit();
  }

  ngAfterViewInit() {
    this.updateSidebarPosition();
    window.addEventListener('storage', this.updateSidebarPosition.bind(this));
  }

  private updateSidebarPosition(): void {
    const headerHeight = localStorage.getItem('headerHeight') || '100px';
    this.renderer.setStyle(this.el.nativeElement, 'top', headerHeight);
  }
}
