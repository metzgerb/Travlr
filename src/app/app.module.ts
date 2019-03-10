import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';

import { AuthService } from '../services/auth.service';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [
		BrowserModule, 
		IonicModule.forRoot(), 
		IonicStorageModule.forRoot(),
		AppRoutingModule,
	    AngularFireModule.initializeApp(environment.firebase),
	    AngularFirestoreModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		AngularFireAuth,
		AuthService,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		{ provide: FirestoreSettingsToken, useValue: {} }    
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
