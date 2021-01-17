
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EncuestaDetailsComponent } from './encuesta-details/encuesta-details.component';
import { CreateEncuestaComponent } from './create-encuesta/create-encuesta.component';
import { EncuestaListComponent } from './encuesta-list/encuesta-list.component';
import { UpdateEncuestaComponent } from './update-encuesta/update-encuesta.component';
//import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: '', component: LoginComponent },
	{ path: 'logout', component: LoginComponent },
	{ path: 'encuestas', component: EncuestaListComponent/*, canActivate:[AuthGuardService]*/ },
	{ path: 'add', component: CreateEncuestaComponent/*, canActivate:[AuthGuardService]*/ },
	{ path: 'update/:id', component: UpdateEncuestaComponent/*, canActivate:[AuthGuardService]*/ },
	{ path: 'details/:id', component: EncuestaDetailsComponent/*, canActivate:[AuthGuardService]*/ },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
