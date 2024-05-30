import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioepiComponent } from './inicioepi.component';

describe('InicioepiComponent', () => {
  let component: InicioepiComponent;
  let fixture: ComponentFixture<InicioepiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioepiComponent]
    });
    fixture = TestBed.createComponent(InicioepiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
