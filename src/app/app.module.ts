import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material-module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//----- imports of components ------
//----------//----------//----------//----------//----------//----------
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar//navbar.component';
import { IndexComponent } from './components/index/index.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienciesComponent } from './components/experiencies/experiencies.component';
import { ScoresComponent } from './components/scores/scores.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { NewScoreComponent } from './components/new-score/new-score.component';
//----------//----------//----------//----------//----------//----------

//----- imports of modals ------
//----------//----------//----------//----------//----------//----------
import { SimpleNotificationComponent } from './modals/simple-notification/simple-notification.component';
import { TwoWaysNotificationComponent } from './modals/two-ways-notification/two-ways-notification.component';
import { ContactFormComponent } from './modals/contact-form/contact-form.component';
import { NewsLetterComponent } from './modals/news-letter/news-letter.component';
import { EditVideosComponent } from './modals/edit-videos/edit-videos.component';
import { EditBiographyComponent } from './modals/edit-biography/edit-biography.component';
//----------//----------//----------//----------//----------//----------

//----- imports of guards ------
import { AuthGuard } from "./guards/auth.guard";
//----------//----------//----------//----------//----------//----------
import { TokenInterceptorService } from "./shared/token-interceptor.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ContactComponent,
    ExperienciesComponent,
    ScoresComponent,
    LoginComponent,
    SimpleNotificationComponent,
    TwoWaysNotificationComponent,
    ContactFormComponent,
    NewsLetterComponent,
    CartComponent,
    NewScoreComponent,
    EditVideosComponent,
    EditBiographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
