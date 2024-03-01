import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdloginComponent } from './stdlogin.component';

describe('StdloginComponent', () => {
  let component: StdloginComponent;
  let fixture: ComponentFixture<StdloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
