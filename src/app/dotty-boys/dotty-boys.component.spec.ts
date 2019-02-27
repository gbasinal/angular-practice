import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DottyBoysComponent } from './dotty-boys.component';

describe('DottyBoysComponent', () => {
  let component: DottyBoysComponent;
  let fixture: ComponentFixture<DottyBoysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DottyBoysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DottyBoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
