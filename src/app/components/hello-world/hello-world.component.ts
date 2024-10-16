import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'


@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
  message: string = "hello world ";
  name: string = "Nico";

  ngOnInit() {
    console.log("sono stato avviato")
  }

  ngOnChange() {
    console.log("sono stato modificato")
  }

  saluta() {
    alert("ciao bello");
  }

  isShow: boolean = true;
}
