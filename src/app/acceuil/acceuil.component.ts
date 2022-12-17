import { Component } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent {
  showFiller = false;
  list: string[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.list.push("Test" + i);
    }
  }

  delete(element: string) {
    const index: number = this.list.indexOf(element);
    if (index !== -1) {
        this.list.splice(index, 1);
    }
  }
}
