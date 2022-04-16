import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonguserComponent } from './songuser.component';

describe('SonguserComponent', () => {
  let component: SonguserComponent;
  let fixture: ComponentFixture<SonguserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonguserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SonguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
