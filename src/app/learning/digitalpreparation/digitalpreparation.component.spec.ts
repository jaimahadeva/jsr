import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalpreparationComponent } from './digitalpreparation.component';

describe('DigitalpreparationComponent', () => {
  let component: DigitalpreparationComponent;
  let fixture: ComponentFixture<DigitalpreparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalpreparationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalpreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
