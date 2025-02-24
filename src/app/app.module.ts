import { NgModule } from '@angular/core'
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { provideHttpClient } from '@angular/common/http'
import { ContainerComponent, NavbarModule, NavModule } from '@coreui/angular'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContainerComponent,
    NavbarModule,
    NavModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
