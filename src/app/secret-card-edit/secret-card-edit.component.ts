import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Secret } from '../secret';

@Component({
  selector: 'app-secret-card-edit',
  templateUrl: './secret-card-edit.component.html',
  styleUrls: ['./secret-card-edit.component.scss']
})
export class SecretCardEditComponent implements OnInit {

  @Input() secret: Secret;
  @Input() saving: boolean;
  @Input() showError: boolean;
  @Output() isClose = new EventEmitter<string>();
  @Output() toggleEdit = new EventEmitter<string>();
  @Output() editSave = new EventEmitter<object>();
  @Output() deleteSecret = new EventEmitter<string>();
  
  public name: string;
  public text: string;

  constructor() { }

  ngOnInit() {
    this.name = this.secret.name;
    this.text = this.secret.text;
  }

  close(id: string) {
    this.isClose.emit(id);
  }

  edit(id: string) {
    this.toggleEdit.emit(id);
  }
  save(id: string, name: string, text: string) {
    this.editSave.emit({ id, name, text });
  }
  delete(id: string) {
    this.deleteSecret.emit(id);
  }
}
