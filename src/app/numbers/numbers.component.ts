import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  lista: number[] = [];
  n = Math.floor((Math.random() * 10) + 1);
 
  constructor() { }

  ngOnInit() {
  }
  
  TabelaAlea(){
    let n = Math.floor((Math.random() * 10) + 1);
    for (let x = 1; x<=10; x++) {
          n = Math.floor((Math.random() * 10) + 1);
          this.lista.push(n);     
    }
     
    return this.lista;
  }
  
}