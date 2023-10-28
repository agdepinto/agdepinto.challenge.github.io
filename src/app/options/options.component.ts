import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  option1: boolean = false;
  option2: boolean = false;
  option3: boolean = false;
  option1Subject: Subject<void> = new Subject<void>();
  option2Subject: Subject<void> = new Subject<void>();
  option3Subject: Subject<void> = new Subject<void>();
  radioChanged(option: number) {
    console.log(option)
    switch (option) {
      case 1:
        this.option1Subject.next();
        this.option2 = false
        this.option3 = false
        break;
      case 2:
        this.option2Subject.next();
        this.option1 = false
        this.option3 = false
        break;
      case 3:
        this.option3Subject.next();
        this.option1 = false
        this.option2 = false
        break;
    }
  }
}
