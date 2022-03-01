import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsFromeventComponent } from './rxjs-fromevent.component';

describe('RxjsFromeventComponent', () => {
  let component: RxjsFromeventComponent;
  let fixture: ComponentFixture<RxjsFromeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsFromeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsFromeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
