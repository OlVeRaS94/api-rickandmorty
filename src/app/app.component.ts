import { Component } from '@angular/core';
import { PersonajesService } from './personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ims-rickandmortyapi';

  personajes: any = null;

  constructor(private personajesService: PersonajesService) {}

  ngOnInit() {
    this.personajesService
      .retornar()
      .subscribe((personaje) => (this.personajes = personaje));
  }
}
