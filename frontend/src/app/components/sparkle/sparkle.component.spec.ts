import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkleComponent } from './sparkle.component';

describe('SparkleComponent', () => {
  let component: SparkleComponent;
  let fixture: ComponentFixture<SparkleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SparkleComponent]
    });
    fixture = TestBed.createComponent(SparkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
