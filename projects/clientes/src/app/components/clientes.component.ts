import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../design-system/src/app/components/header/header.component';
import { SidebarComponent } from '../../../../design-system/src/app/components/sidebar/sidebar.component';

@Component({
  selector: 'clientes-root',
  imports: [HeaderComponent, SidebarComponent],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent {}
