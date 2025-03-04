import { TestBed } from '@angular/core/testing';
import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShellComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'shell' title`, () => {
    const fixture = TestBed.createComponent(ShellComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('shell');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ShellComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, shell');
  });
});
