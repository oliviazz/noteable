import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  styles: ['h1 { font-weight: normal; align-items:center, align:center }']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'ozhang', 
    password: '*******'
  };

  constructor() {}

  ngOnInit() {
  }

}
