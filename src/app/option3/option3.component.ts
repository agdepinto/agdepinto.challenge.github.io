import { Component, OnInit } from '@angular/core';
import { OptionsComponent } from '../options/options.component';

@Component({
  selector: 'app-option3',
  templateUrl: './option3.component.html',
  styleUrls: ['./option3.component.css']
})
export class Option3Component implements OnInit{
  showContent: boolean = false;
  constructor(private optionsComponent: OptionsComponent) {
    optionsComponent.option1Subject.subscribe(() => {
      this.showContent = false
    });
    optionsComponent.option2Subject.subscribe(() => {
      this.showContent = false
    });
    optionsComponent.option3Subject.subscribe(() => {
      this.showContent = true
    });
  }

  ngOnInit(): void {
  }
}
