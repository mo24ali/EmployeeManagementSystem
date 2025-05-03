import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLlistComponent } from './employee-llist.component';

describe('EmployeeLlistComponent', () => {
  let component: EmployeeLlistComponent;
  let fixture: ComponentFixture<EmployeeLlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeLlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
