import { Component } from '@angular/core';
import { ListeCategoriesAdminComponent } from '../liste-categories-admin/liste-categories-admin.component';
import { ListeEmployesAdminComponent } from '../liste-employes-admin/liste-employes-admin.component';
import { LoginComponent } from '../login/login.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  imports: [RouterLink],
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.css'
})
export class HeaderAdminComponent {

}
