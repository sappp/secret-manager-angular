import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Secret } from '../secret';

@Component({
  selector: 'app-secret-card',
  templateUrl: './secret-card.component.html',
  styleUrls: ['./secret-card.component.scss']
})
export class SecretCardComponent implements OnInit {
  @Input() secret: Secret;
  @Output() isOpen = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log(this.secret)
  }

  open(id: string) {
    this.isOpen.emit(id);
  }

}
