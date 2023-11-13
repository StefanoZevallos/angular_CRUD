import { Component } from '@angular/core';

@Component({
  selector: 'Header-Component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor() {}

variable:string = "HOLA"

funcionConsola() {
  console.log("Hola Mundo");
}

}
