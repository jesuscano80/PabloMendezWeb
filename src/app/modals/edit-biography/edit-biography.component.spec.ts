import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBiographyComponent } from './edit-biography.component';

describe('EditBiographyComponent', () => {
  let component: EditBiographyComponent;
  let fixture: ComponentFixture<EditBiographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBiographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
