import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCategoriesAdminComponent } from './liste-categories-admin.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

describe('ListeCategoriesAdminComponent', () => {
  let component: ListeCategoriesAdminComponent;
  let fixture: ComponentFixture<ListeCategoriesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCategoriesAdminComponent,HeaderComponent,CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCategoriesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
