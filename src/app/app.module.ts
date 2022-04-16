import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './material_module';
import { NgImageSliderModule } from 'ng-image-slider';
import { HomeComponent } from './page/home/home.component';
import { ProfileComponent } from './page/profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponent } from './page/about/about.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { SongComponent } from './page/song/song.component';
import { AddsongComponent } from './page/addsong/addsong.component';
import { FormsModule } from '@angular/forms';
import { SonguserComponent } from './page/songuser/songuser.component';
import { HomeuserComponent } from './page/homeuser/homeuser.component';
// import { ActivatedRoute } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    SongComponent,
    AddsongComponent,
    SonguserComponent,
    HomeuserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    NgImageSliderModule,
    FlexLayoutModule, HttpClientModule, FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
