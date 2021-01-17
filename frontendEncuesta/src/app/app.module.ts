import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { HttpInterceptorService } from './service/httpInterceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CreateEncuestaComponent } from './create-encuesta/create-encuesta.component';
import { EncuestaDetailsComponent } from './encuesta-details/encuesta-details.component';
import { EncuestaListComponent } from './encuesta-list/encuesta-list.component';
import { UpdateEncuestaComponent } from './update-encuesta/update-encuesta.component';

@NgModule({
	declarations: [
		AppComponent,
		MenuComponent,
		LoginComponent,
		LogoutComponent,
		CreateEncuestaComponent,
		EncuestaDetailsComponent,
		EncuestaListComponent,
		UpdateEncuestaComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpInterceptorService,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
