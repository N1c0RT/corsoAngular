import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { Esercizio1Component } from './components/esercizio-1/esercizio-1.component';
import { ContatoreComponent } from "./components/contatore/contatore.component";
import { SommatoreComponent } from './components/sommatore/sommatore.component';
import { MostraBottoneComponent } from './components/mostra-bottone/mostra-bottone.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloWorldComponent, Esercizio1Component, ContatoreComponent, SommatoreComponent, MostraBottoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'corsoAngular';

  ngOnInit() {
    alert("Ciao, benvenuto nel mondo di Angular")
  }

  urlImmagine = "https://brandslogos.com/wp-content/uploads/images/large/angular-logo.png";
}
