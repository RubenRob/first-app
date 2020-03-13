import { Injectable} from  '@angular/core';
import { Subject, interval} from  'rxjs';
import { TYPED_NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private timer;
  private interval;
  secondsSubject: Subject<number> = new Subject<number>();
  seconds =  this.secondsSubject.asObservable();
  
  StopTimer()
  {
    clearInterval(this.interval);
  }

  SetTimer()
  {
    this.timer = 60;
    this.interval = setInterval(() => {
      this.timer -=1;
        this.secondsSubject.next(this.timer);
      },1000)
    }  
}
