import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdustListComponent } from './produst-list.component';

describe('ProdustListComponent', () => {
  let component: ProdustListComponent;
  let fixture: ComponentFixture<ProdustListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdustListComponent]
    });
    fixture = TestBed.createComponent(ProdustListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
