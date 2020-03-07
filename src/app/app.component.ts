import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';


import { Injectable} from  '@angular/core';
import { Subject} from  'rxjs';

@Injectable({
  providedIn: 'root'
})


  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'firstApp';
  randomGetal;
  timer;
  getal;  
  lijst;    
  teller;
  messageGetal;
  messageTeller;
  buttonOpnieuw;

  secondsSubject: Subject<number> = new Subject<number>();
  seconds = this.secondsSubject.asObservable();

  constructor() {
    this.Initialize();

    setInterval(() => {
      this.timer -= 1;
      this.secondsSubject.next(this.teller);
    }, 1000);
  }

  Initialize(){    
    this.randomGetal = Math.floor(Math.random() * 100) + 1
    this.teller = 3;
    this.timer = 60;
    this.lijst = "";
    this.buttonOpnieuw = false;
  }

  
  DoeEenGok() {

    this.teller = this.teller -1
    this.messageTeller="U heeft nog" + this.teller + "kansen."
    this.lijst = this.getal + " "  + this.lijst
   if(this.getal == this.randomGetal)
   {
      this.messageGetal = "U hebt het getal geraden! Proficiat."
      this.messageTeller=""
      this.buttonOpnieuw = true;
   }
   else
   {
     if(this.getal < this.randomGetal)
        this.messageGetal = "Uw gekozen getal is te klein, u probeerde reeds " + this.lijst + "."
      else
        this.messageGetal = "Uw gekozen getal is te groot, u probeerde reeds " + this.lijst + "."
    }
    this.getal = null;
    if (this.teller == 0)
    {
      this.messageGetal = "U heeft verloren, het getal was " + this.randomGetal + "."
      this.messageTeller=""
      this.buttonOpnieuw = true;
    }

  }
  
}
