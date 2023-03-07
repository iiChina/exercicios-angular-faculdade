import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { TesteComponent } from "./teste/teste.component";
import { SegundoComponent } from './segundo/segundo.component';

@NgModule({
  declarations: [AppComponent, TesteComponent, SegundoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
