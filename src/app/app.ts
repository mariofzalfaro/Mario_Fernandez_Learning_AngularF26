import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('My First app');

  student: {name:string} & {id:string} =
    {
      name: 'Mario',
      id:'0887177'
    };

  course: {name:string} & {code:string} =
    {
      name:'Java Frameworks',
      code:'MAD307'
    };

}


