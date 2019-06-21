import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p [innerHtml]= "title | link "> </p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The environment at DigitalLync is colorful and creative. It is where ideas are incubated and generated.';
}
