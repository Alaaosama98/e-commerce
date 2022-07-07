import { Component, OnInit } from '@angular/core';
import { Good } from '../interface/good.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  goods: Good[] = [
    { name: 'cherries', price: 5, photoUrl: 'assets/cherries_small.jpg' },
    { name: 'banana', price: 5, photoUrl: 'assets/download.jpeg' },
    { name: 'water melon', price: 5, photoUrl: 'assets/srob.png' },
    { name: 'kiwi', price: 5, photoUrl: 'assets/images.jpeg' }

  ]
  constructor() { }

  ngOnInit(): void {
  }


  addToCart(){
    console.log("jjj");

  }
}
