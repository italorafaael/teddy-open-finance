import { Component, EventEmitter, Input, Output } from '@angular/core';
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
export class SidebarComponent {
  @Input() isOpen: boolean = false;
  @Output() closeSidebar = new EventEmitter<void>();

  faBars = faBars;
  faHouse = faHouse;
  faUser = faUser;
  faList = faList;

  constructor(library: FaIconLibrary) {
    library.addIcons(faBars, faHouse, faUser, faList);
  }

  hideSidebar() {
    this.closeSidebar.emit();
  }
}
