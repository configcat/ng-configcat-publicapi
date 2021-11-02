import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgConfigcatPublicapiComponent } from './ng-configcat-publicapi.component';

describe('NgConfigcatPublicapiComponent', () => {
  let component: NgConfigcatPublicapiComponent;
  let fixture: ComponentFixture<NgConfigcatPublicapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgConfigcatPublicapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgConfigcatPublicapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
