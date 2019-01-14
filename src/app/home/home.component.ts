import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: object;
  h1Style: boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data,
      console.log( this.users );
    });
  }

  // firstClick() {
  //   console.log('clicked');
  //   this.h1Style = true;
  // }

  firstClick() {
    this.data.firstClickService();
  }

}
