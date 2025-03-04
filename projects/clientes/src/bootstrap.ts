import { bootstrapApplication } from '@angular/platform-browser';
import { clientesConfig } from './app/clientes.config';
import { ClientesComponent } from './app/components/clientes.component';

bootstrapApplication(ClientesComponent, clientesConfig).catch((err) =>
  console.error('error bootstrap clientes - ', err)
);
