import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDirectivesComponent } from './user-directives.component';

describe('UserDirectivesComponent', () => {
  let component: UserDirectivesComponent;
  let fixture: ComponentFixture<UserDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
