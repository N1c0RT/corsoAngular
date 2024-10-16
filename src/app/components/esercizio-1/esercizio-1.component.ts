import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-esercizio-1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './esercizio-1.component.html',
  styleUrl: './esercizio-1.component.css'
})

export class Esercizio1Component {

  nome: string = "Nico"
  cognome: string = "Tanzi"
  eta: number = 19
  hobby: string = "Palestra, Videogame, Leggere"

  count: number = 0

  onBtnClick() {
    this.count++;
  }
}
