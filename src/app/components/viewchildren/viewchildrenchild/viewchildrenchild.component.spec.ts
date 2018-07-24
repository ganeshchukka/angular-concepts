import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildrenchildComponent } from './viewchildrenchild.component';

describe('ViewchildrenchildComponent', () => {
  let component: ViewchildrenchildComponent;
  let fixture: ComponentFixture<ViewchildrenchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchildrenchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildrenchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
