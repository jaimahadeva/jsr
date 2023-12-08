import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomcontentComponent } from './ecomcontent.component';

describe('EcomcontentComponent', () => {
  let component: EcomcontentComponent;
  let fixture: ComponentFixture<EcomcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
