import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { AddsongComponent } from './page/addsong/addsong.component';
import { HomeComponent } from './page/home/home.component';
import { HomeuserComponent } from './page/homeuser/homeuser.component';
import { ProfileComponent } from './page/profile/profile.component';
import { SongComponent } from './page/song/song.component';
import { SonguserComponent } from './page/songuser/songuser.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  //Test
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutComponent },
  { path: 'song/:id', component: SongComponent },
  { path: 'addsong', component: AddsongComponent },
  { path: 'songuser/:id', component: SonguserComponent },
  { path: 'homeuser', component: HomeuserComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
