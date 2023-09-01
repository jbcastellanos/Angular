import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
