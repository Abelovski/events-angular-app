import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  onBtnClick(){
    console.log("Button click event happened!");
  }
  onChkBoxChange(){
    console.log("Checkbox value has changed!");
  }
}
