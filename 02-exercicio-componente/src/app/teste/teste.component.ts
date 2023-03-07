import { Component } from "@angular/core";

@Component({
  selector: "app-teste",
  templateUrl: "./teste.component.html",
  styleUrls: ["./teste.component.css"],
})
export class TesteComponent {
  mensagem: string = "";
  exibicao: string = "";
  usarCss = false;

  mostrarMensagem() {
    this.exibicao = this.mensagem;
  }

  mudarCor() {
    this.usarCss = !this.usarCss;
  }
}
