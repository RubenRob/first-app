import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';
  getal;  
  randomGetal;
  teller;
  messageGetal;
  messageTeller;

  constructor() {
    this.Initialize();
  }

  Initialize(){    
    this.randomGetal = Math.floor(Math.random() * 100) + 1
    this.teller = 2;
    window.alert(this.randomGetal);
  }

  
  DoeEenGok() {
    /*als this.randomGetal = getal --> joepie
    anders is de gok groter of kleiner
    */
   if(this.getal == this.randomGetal)
   {
      this.messageGetal = "u hebt het getal geraden! Proficiat."
   }
   else
   {
     if(this.getal < this.randomGetal)
        this.messageGetal = "Uw gekozen getal is te klein"
      else
        this.messageGetal = "Uw gekozen getal is te groot"
    }
    this.teller = this.teller -1
    this.getal = null;
    this.messageTeller="u heeft nog" + this.teller + "kansen."
    if (this.teller == 0)
    {
      this.messageGetal = "u hebt verloren."
      this.Initialize();
    }

  }
  
}
