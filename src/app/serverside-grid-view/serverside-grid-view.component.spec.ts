import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersideGridViewComponent } from './serverside-grid-view.component';

describe('ServersideGridViewComponent', () => {
  let component: ServersideGridViewComponent;
  let fixture: ComponentFixture<ServersideGridViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServersideGridViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersideGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
