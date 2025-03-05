import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../../design-system/src/app/components/header/header.component';
import { SidebarComponent } from '../../../../design-system/src/app/components/sidebar/sidebar.component';

@Component({
  selector: 'clientes-root',
  imports: [HeaderComponent, SidebarComponent, RouterModule, CommonModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent {
  sidebarOpen: boolean = false;

  openSidebar() {
    this.sidebarOpen = true;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }
}
