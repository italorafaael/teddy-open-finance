import { TestBed } from '@angular/core/testing';
import { ClientesComponent } from './clientes.component';

describe('ClientesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ClientesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
