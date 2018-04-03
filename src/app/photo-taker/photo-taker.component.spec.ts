import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoTakerComponent } from './photo-taker.component';

describe('PhotoTakerComponent', () => {
  let component: PhotoTakerComponent;
  let fixture: ComponentFixture<PhotoTakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoTakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
