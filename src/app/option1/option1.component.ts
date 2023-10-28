import { Component, OnInit } from '@angular/core';
import { OptionsComponent } from '../options/options.component';

@Component({
  selector: 'app-option1',
  templateUrl: './option1.component.html',
  styleUrls: ['./option1.component.css']
})
export class Option1Component implements OnInit{
  showContent: boolean = false;
  constructor(private optionsComponent: OptionsComponent) {
    optionsComponent.option1Subject.subscribe(() => {
      this.showContent = true
    });
    optionsComponent.option2Subject.subscribe(() => {
      this.showContent = false
    });
    optionsComponent.option3Subject.subscribe(() => {
      this.showContent = false
    });
  }

  ngOnInit(): void {
  }

}
