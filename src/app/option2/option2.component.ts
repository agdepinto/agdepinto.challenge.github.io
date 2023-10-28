import { Component, OnInit } from '@angular/core';
import { OptionsComponent } from '../options/options.component';

@Component({
  selector: 'app-option2',
  templateUrl: './option2.component.html',
  styleUrls: ['./option2.component.css']
})
export class Option2Component implements OnInit{
  showContent: boolean = false;
  constructor(private optionsComponent: OptionsComponent) {
    optionsComponent.option1Subject.subscribe(() => {
      this.showContent = false
    });
    optionsComponent.option2Subject.subscribe(() => {
      this.showContent = true
    });
    optionsComponent.option3Subject.subscribe(() => {
      this.showContent = false
    });
  }

  ngOnInit(): void {
  }

}
