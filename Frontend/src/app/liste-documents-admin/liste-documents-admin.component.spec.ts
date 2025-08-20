import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDocumentsAdminComponent } from './liste-documents-admin.component';

describe('ListeDocumentsAdminComponent', () => {
  let component: ListeDocumentsAdminComponent;
  let fixture: ComponentFixture<ListeDocumentsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeDocumentsAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDocumentsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
