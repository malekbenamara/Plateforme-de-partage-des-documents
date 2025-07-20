import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from './login/login.component';
import { ListeDocumentsComponent } from './liste-documents/liste-documents.component';
import { RegisterComponent } from './register/register.component';
import { Header1Component } from './header1/header1.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'plateforme';
}
