import { Component } from '@angular/core';

@Component({
  selector: 'app-contatore',
  standalone: true,
  imports: [],
  templateUrl: './contatore.component.html',
  styleUrl: './contatore.component.css'
})

export class ContatoreComponent {
  conta: number = 0;

  incremento(){
    this.conta ++;
  }

  //Poniamo all'interno della funzione incremento un controllo che blocchi il decremento nel caso l'utente voglia scendere sotto lo zero
  
  decremento(){ 

    if (this.conta == 0){
      alert("Il contatore non puo scendere oltre lo zero")
    } else {
      this.conta --;
    }
    
  }


}
