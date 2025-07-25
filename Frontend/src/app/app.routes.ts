import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { ListeDocumentsComponent } from './liste-documents/liste-documents.component';
import { ListeEmployesComponent } from './liste-employes/liste-employes.component';
import { ChatComponent } from './chat/chat.component';

import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { Header1Component } from './header1/header1.component';
import { ListeCategoriesAdminComponent } from './liste-categories-admin/liste-categories-admin.component';
import { ListeEmployesAdminComponent } from './liste-employes-admin/liste-employes-admin.component';

export const routes: Routes = [
    { path:'',redirectTo :'/login',pathMatch:'full'},
    { path:'login', component: LoginComponent},
    { path:'liste-categories', component: ListeCategoriesComponent},
    { path:'liste-documents/:id', component: ListeDocumentsComponent},
    { path:'liste-employes', component: ListeEmployesComponent},
    { path:'chat', component: ChatComponent},
    { path:'register', component: RegisterComponent},
    { path:'header', component: HeaderComponent},
    { path:'header1', component: Header1Component},
    { path:'liste-categories-Admin', component: ListeCategoriesAdminComponent},
    { path:'liste-employes-Admin', component: ListeEmployesAdminComponent},

];
