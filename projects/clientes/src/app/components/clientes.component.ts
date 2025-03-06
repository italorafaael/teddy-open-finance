import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../../design-system/src/app/components/header/header.component';
import { SidebarComponent } from '../../../../design-system/src/app/components/sidebar/sidebar.component';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'clientes-root',
  imports: [HeaderComponent, SidebarComponent, RouterModule, CommonModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit, AfterViewInit {
  sidebarOpen: boolean = false;
  clients: any[] = [];

  constructor(
    private clientesService: ClientesService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.listClients();
  }

  ngAfterViewInit() {
    this.updateContentPosition();
    window.addEventListener('storage', this.updateContentPosition.bind(this));
  }

  listClients() {
    const page = 0;
    const limit = 16;

    this.clientesService.getClients(page, limit).subscribe({
      next: (data) => {
        this.clients = data.clients;
      },
      error: (error) => {
        console.error('error listUsers: ', error);
      },
    });
  }

  openSidebar() {
    this.sidebarOpen = true;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

  private updateContentPosition(): void {
    const headerHeight = localStorage.getItem('headerHeight') || '100px';
    this.renderer.setStyle(this.el.nativeElement, 'top', headerHeight);
  }
}
