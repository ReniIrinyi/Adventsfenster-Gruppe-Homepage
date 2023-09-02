import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgFor } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderComponent } from './components/calender/calender.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIf } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArchivComponent } from './components/archiv/archiv.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'calender', component: CalenderComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'archiv', component: ArchivComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,

    HomeComponent,
    MapComponent,
    ContactComponent,
    FooterComponent,
    ArchivComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    NgIf,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    NgFor,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
