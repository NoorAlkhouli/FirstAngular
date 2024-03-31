import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultislotComponent } from './multislot.component';

describe('MultislotComponent', () => {
  let component: MultislotComponent;
  let fixture: ComponentFixture<MultislotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultislotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultislotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
