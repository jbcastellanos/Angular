import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import { ColombianaComponent } from './colombiana/colombiana.component';
import { MexicanaComponent } from './mexicana/mexicana.component';
import { FrancesaComponent } from './francesa/francesa.component';
import { ItalianaComponent } from './italiana/italiana.component';
import { JaponesaComponent } from './japonesa/japonesa.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FeaturesComponent,
    ColombianaComponent,
    MexicanaComponent,
    FrancesaComponent,
    ItalianaComponent,
    JaponesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
