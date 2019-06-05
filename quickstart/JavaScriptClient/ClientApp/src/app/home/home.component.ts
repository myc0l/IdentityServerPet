import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

 log() {
  document.getElementById('results').innerText = '';

  Array.prototype.forEach.call(arguments, function (msg) {
    if (msg instanceof Error) {
      msg = "Error: " + msg.message;
    }
    else if (typeof msg !== 'string') {
      msg = JSON.stringify(msg, null, 2);
    }
    document.getElementById('results').innerHTML += msg + '\r\n';
  });
  }

}
