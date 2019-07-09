import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMovieModalComponent } from './add-new-movie-modal.component';

describe('AddNewMovieModalComponent', () => {
  let component: AddNewMovieModalComponent;
  let fixture: ComponentFixture<AddNewMovieModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewMovieModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMovieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
