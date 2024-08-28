import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe_in_angular';

  todaydate = new Date();
  // json
  jsonval ={ name:'rupesh', age:'21' ,addres:{ city:'pune', hometown:'nanded'}};
  days=
['sun', 'mon','tus','won','ths','sat','fry'];
}
