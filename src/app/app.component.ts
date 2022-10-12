import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'este es mi titulo';
  habilidato = false;

  mensaje() { 
    alert('haz dado clic');
  }
}
