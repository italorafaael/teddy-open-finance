import { TestBed } from '@angular/core/testing';
import { DesignSystemComponent } from './design-system.component';

describe('DesignSystemComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignSystemComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DesignSystemComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
