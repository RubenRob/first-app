import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

import { CounterService} from  './counter.service';

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'firstApp';
  counterserviceApp;
  randomGetal;
  timerApp = 60;
  getal;  
  lijst;    
  teller;
  messageGetal;
  messageTimer;
  buttonOpnieuw;

  constructor(counterservice : CounterService)
  {
    this.counterserviceApp = counterservice;
    this.counterserviceApp.seconds.subscribe((seconden)=>
      {
        this.timerApp=seconden;
      }
    );
    this.Initialize();
  }

  Initialize(){   
    this.timerApp = 60; 
    this.randomGetal = Math.floor(Math.random() * 100) + 1;
    this.lijst = "";
    this.teller = 10;
    this.messageGetal = "";
    this.messageTimer = "";
    this.buttonOpnieuw = false;
    this.counterserviceApp.SetTimer();
  }

  Enter(event)
  {
    if(event.key  === "Enter")
      this.DoeEenGok();
  }

  DoeEenGok() 
  {
    this.teller -= 1;
    this.lijst = this.getal + " "  + this.lijst;
   if(this.getal == this.randomGetal)
   {
      this.messageGetal = "Het getal was inderdaad " + this.randomGetal + " , proficiat!";
      this.counterserviceApp.StopTimer();
      this.messageTimer="U had nog "+this.timerApp +" seconden over.";
      this.buttonOpnieuw = true;
   }
   else
   {
     if(this.getal < this.randomGetal)
        this.messageGetal = "Uw gekozen getal is te klein, u probeerde reeds " + this.lijst + ".";
      else
        this.messageGetal = "Uw gekozen getal is te groot, u probeerde reeds " + this.lijst + ".";
    }
    if (this.teller == 0 && this.getal != this.randomGetal)//of timer is nul
    {
      this.messageGetal = "U heeft verloren, het getal was " + this.randomGetal + ".";
      this.counterserviceApp.StopTimer();
      this.buttonOpnieuw = true;
    }
    this.getal = null;
  }
}
