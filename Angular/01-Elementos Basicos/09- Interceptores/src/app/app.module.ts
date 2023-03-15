import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import { AppComponent } from './app.component';

import { DigimonService } from './service/digimon.service';
import { InterceptorService } from './service/interceptor.service';

import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { DigimonComponent } from './digimon/digimon.component';
import { SearchPipe } from './search.pipe';


PdfMakeWrapper.setFonts(pdfFonts);

@NgModule({
	declarations: [
		AppComponent,
		DigimonComponent,
		SearchPipe
	],

	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule
	],

	providers: [
		DigimonService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: InterceptorService, // Esta es la clase que se va a encargar de interceptar las peticiones
			multi: true  // Permite agregar más interceptores en caso se requiera, asi no sobre escribimos el que tenemos.
		}
	],

	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
