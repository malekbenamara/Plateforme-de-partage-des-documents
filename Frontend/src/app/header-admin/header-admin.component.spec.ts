import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAdminComponent } from './header-admin.component';
import { ListeCategoriesAdminComponent } from '../liste-categories-admin/liste-categories-admin.component';
import { ListeEmployesAdminComponent } from '../liste-employes-admin/liste-employes-admin.component';
import { LoginComponent } from '../login/login.component';

describe('HeaderAdminComponent', () => {
  let component: HeaderAdminComponent;
  let fixture: ComponentFixture<HeaderAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderAdminComponent,ListeCategoriesAdminComponent,ListeEmployesAdminComponent,LoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
