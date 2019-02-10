import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[] = [];  // เป็นการประกาศ array ของ card
  
  get sorted(): Card[]{
    console.log('access');
    // return this.cards.sort(()=>); เป็น aero function รับ parameter มา 2 ตัว
    // b.votes - a.votes เรียงจากมากไปน้อย
    return this.cards.sort((a, b) => b.votes - a.votes); 
  }

    onclick(firstname: HTMLInputElement, lastname: HTMLInputElement) {
    console.log(firstname.value, lastname.value);
    const card = new Card(firstname.value, lastname.value, 0);
    this.cards.push(card); // การที่เราจะใส่ค่าเข้าไปใน array
    console.log(this.cards);

    firstname.value = '';
    lastname.value = '';

  }
}
