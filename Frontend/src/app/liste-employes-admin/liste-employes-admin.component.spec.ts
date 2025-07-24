import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEmployesAdminComponent } from './liste-employes-admin.component';

describe('ListeEmployesAdminComponent', () => {
  let component: ListeEmployesAdminComponent;
  let fixture: ComponentFixture<ListeEmployesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeEmployesAdminComponent]
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
