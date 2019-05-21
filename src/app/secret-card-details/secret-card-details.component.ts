import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { Secret } from '../secret';

@Component({
  selector: 'app-secret-card-details',
  templateUrl: './secret-card-details.component.html',
  styleUrls: ['./secret-card-details.component.scss']
})
export class SecretCardDetailsComponent implements OnInit {
  @Input() secret: Secret;
  @Input() saving: boolean;
  @Input() showSavedMsg: boolean;
  @Output() isClose = new EventEmitter<string>();
  @Output() toggleEdit = new EventEmitter<string>();
  @Output() toggleSaving = new EventEmitter<string>();
  @Output() toggleShowSavedMsg = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
    if(this.saving) {
      this.stopSavingIcon();
      this.stopShowSavedMsg()
    }
  }

  close(id: string) {
    this.isClose.emit(id);
  }
  edit(id: string) {
    this.toggleEdit.emit(id);
  }
  stopSavingIcon() {
    setTimeout(() => {
      // @ts-ignore
      this.toggleSaving.emit(this.secret.id);
    }, 400);
  }
  stopShowSavedMsg() {
    // @ts-ignore
    setTimeout(() => {
      // @ts-ignore
      this.toggleShowSavedMsg.emit(this.secret.id);
    }, 1500);
  }

}
