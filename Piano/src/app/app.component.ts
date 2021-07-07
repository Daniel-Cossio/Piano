import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piano';

  aplicarSonido(sonido:number):void{
    const audio = new Audio();
    audio.src="../assets/Sounds/note" + sonido + ".wav";
    audio.load();
    audio.play();
  }
}
