import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mostra-bottone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostra-bottone.component.html',
  styleUrl: './mostra-bottone.component.css'
})
export class MostraBottoneComponent {

  mostra: boolean = true;

  completeLoading() {
    setTimeout(() => {
      this.mostra = false;
    }, 3000) 
  }
  ngOnInit() {
    this.completeLoading();
  }
}
