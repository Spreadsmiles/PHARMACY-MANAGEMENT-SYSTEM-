import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdersummaryComponent } from './odersummary.component';

describe('OdersummaryComponent', () => {
  let component: OdersummaryComponent;
  let fixture: ComponentFixture<OdersummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdersummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdersummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
