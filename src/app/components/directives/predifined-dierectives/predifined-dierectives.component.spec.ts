import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredifinedDierectivesComponent } from './predifined-dierectives.component';

describe('PredifinedDierectivesComponent', () => {
  let component: PredifinedDierectivesComponent;
  let fixture: ComponentFixture<PredifinedDierectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredifinedDierectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredifinedDierectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
