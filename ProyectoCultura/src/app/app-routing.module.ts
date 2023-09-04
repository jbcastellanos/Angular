import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FeaturesComponent } from './features/features.component';
import { JaponesaComponent } from './japonesa/japonesa.component';
import { ColombianaComponent } from './colombiana/colombiana.component';
import { FrancesaComponent } from './francesa/francesa.component';
import { MexicanaComponent } from './mexicana/mexicana.component';
import { ItalianaComponent } from './italiana/italiana.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'Japonesa', component: JaponesaComponent},
  { path: 'Colombiana', component: ColombianaComponent},
  { path: 'Italiana', component: ItalianaComponent},
  { path: 'Francesa', component: FrancesaComponent},
  { path: 'Mexicana', component: MexicanaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
