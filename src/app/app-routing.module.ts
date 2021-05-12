import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

// ----- imports of components ------
// ----------//----------//----------//----------//----------//----------
import { ContactComponent } from './components/contact/contact.component';
import { IndexComponent } from './components/index/index.component';
import { ExperienciesComponent } from './components/experiencies/experiencies.component';
import { ScoresComponent } from './components/scores/scores.component';
import { LoginComponent } from './components/login/login.component';
// ----------//----------//----------//----------//----------//----------

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'scores', component: ScoresComponent},
  {path: 'experiencies', component: ExperienciesComponent},
  {path: 'index', component: IndexComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: '**', redirectTo: 'index', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
