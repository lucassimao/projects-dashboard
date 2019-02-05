import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular core workshop';
  links = [
    //   {path: '/', title: 'Home',icon:'home'},
    //   {path: 'customers', title: 'Customer',icon:'face'},
      {path: '/', title: 'Projects',icon:'work'}
  ]
}
