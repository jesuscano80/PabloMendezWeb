import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//----- imports of components ------
//----------//----------//----------//----------//----------//----------
import { ContactComponent } from './components/contact/contact.component';
import { IndexComponent } from './components/index/index.component';
import { ExperienciesComponent } from './components/experiencies/experiencies.component';
import { ScoresComponent } from './components/scores/scores.component';
//----------//----------//----------//----------//----------//----------

const routes: Routes = [
  {path:"contact", component: ContactComponent},
  {path:"scores", component: ScoresComponent},
  {path:"experiencies", component: ExperienciesComponent},
  {path:"index", component: IndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }