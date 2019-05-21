import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SecretCardComponent } from './secret-card/secret-card.component';
import { SecretCardDetailsComponent } from './secret-card-details/secret-card-details.component';
import { SecretCardEditComponent } from './secret-card-edit/secret-card-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SecretCardComponent,
    SecretCardDetailsComponent,
    SecretCardEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
