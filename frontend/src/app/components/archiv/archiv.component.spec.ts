import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivComponent } from './archiv.component';

describe('ArchivComponent', () => {
  let component: ArchivComponent;
  let fixture: ComponentFixture<ArchivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivComponent]
    });
    fixture = TestBed.createComponent(ArchivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
