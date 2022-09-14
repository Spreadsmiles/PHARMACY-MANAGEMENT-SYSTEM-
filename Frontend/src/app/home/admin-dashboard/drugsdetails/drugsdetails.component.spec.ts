import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugsdetailsComponent } from './drugsdetails.component';

describe('DrugsdetailsComponent', () => {
  let component: DrugsdetailsComponent;
  let fixture: ComponentFixture<DrugsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
