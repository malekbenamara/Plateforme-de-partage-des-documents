import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEmployesAdminComponent } from './liste-employes-admin.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';
import { FormsModule } from '@angular/forms';

describe('ListeEmployesAdminComponent', () => {
  let component: ListeEmployesAdminComponent;
  let fixture: ComponentFixture<ListeEmployesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent,CommonModule,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEmployesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
