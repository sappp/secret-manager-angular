import { Component, OnInit } from '@angular/core';
import { SecretsAPIService } from './secrets-api.service';

import { Secret } from './secret';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public secrets: any;
  public cardState: any;
  public toggleAdd:any;
  public newSecret: Secret;

  constructor(private apiService: SecretsAPIService) { }

  ngOnInit() {
    this.apiService.getSecrets().subscribe((res) => {
      this.secrets = res;
      this.secrets.unshift({ id: 'new', name: "", text: "" })
      this.initialCardState(res)
    });
  }

  getSecretDetails(id: string): void {
    this.apiService.getSecretById(id).subscribe((res) => {
      this.secrets = this.secrets.map(item => {
        if (item.id === id) {
          return res
        } else {
          return item
        }
      });
    });
  }

  initialCardState(secrets): void {
    this.cardState = secrets.reduce((state, secret, i) => {
      return {
        ...state,
        [secret.id]: {
          isOpen: false,
          edit: false,
          saving: false,
          showSavedMsg: false,
          showError: false,
        }
      }
    }, {});
  }

  onOpenCard(id: string) {
    this.cardState[id] = {
      ...this.cardState[id],
      isOpen: true
    }
    if(id === "new") {
      this.onToggleEdit(id);
    } else {
      this.getSecretDetails(id);
    }
  }

  onCloseCard(id: string) {
    this.cardState[id] = {
      ...this.cardState[id],
      isOpen: false
    }
  }

  onToggleEdit(id: string) {
    this.cardState[id] = {
      ...this.cardState[id],
      edit: !this.cardState[id].edit
    }
    if (this.cardState[id].showError) {
      this.onToggleShowError(id);
    }
  }

  onEditSave(secretInfo: any) {
    if(secretInfo.id === 'new') {
      this.createNewSecret(secretInfo)
    } else {
      this.onToggleEditSaving(secretInfo.id)
      const allSecrets = this.secrets.filter(item => item.id !== secretInfo.id);
      const isUnique = this.checkNameUnique(secretInfo.name, allSecrets);
      if (isUnique) {
        const updateSecret = this.secrets.filter(item => item.id === secretInfo.id).reduce((secret, item) => ({
          ...secret,
          ...secretInfo
        }), {})
        this.apiService.updateSecret(updateSecret).subscribe((res) => {
          if (res) {
            this.getSecretDetails(secretInfo.id);
            this.onToggleShowSavedMsg(secretInfo.id);
            this.onToggleEdit(secretInfo.id);
            if (this.cardState[secretInfo.id].showError) {
              this.onToggleShowError(secretInfo.id);
            }
          }
        });
      } else {
        this.onToggleShowError(secretInfo.id);
        this.onToggleEditSaving(secretInfo.id)
      }
    }
  }

  onToggleEditSaving(id: string) {
    this.cardState[id] = {
      ...this.cardState[id],
      saving: !this.cardState[id].saving
    }
  }

  onToggleShowError(id: string) {
    this.cardState[id] = {
      ...this.cardState[id],
      showError: !this.cardState[id].showError
    }
  }

  onToggleShowSavedMsg(id: string) {
    this.cardState[id] = {
      ...this.cardState[id],
      showSavedMsg: !this.cardState[id].showSavedMsg
    }
  }

  onToggleAdd() {
    this.toggleAdd = !this.toggleAdd;
  }

  checkNameUnique(name, allSecrets) {
    const filtered = allSecrets.filter(secret => secret.name === name);
    return filtered.length > 0 ? false : true;
  }

  createNewSecret(secretInfo: any) {
    this.onToggleEditSaving(secretInfo.id)

    const isUnique = this.checkNameUnique(secretInfo.name, this.secrets);
    if (isUnique) {
      const newSecret = {
        name: secretInfo.name,
        allowExport: false,
        text: secretInfo.text,
      }
      this.apiService.createSecret(newSecret).subscribe((res) => {
        if (res) {
          if (this.cardState['new'].showError) {
            this.onToggleShowError(secretInfo.id);
          }
          this.apiService.getSecrets().subscribe((res) => {
            if(res) {
              // @ts-ignore
              this.secrets = [{ id: 'new', name: "", text: "" }, ...res];
              const newCardState = this.initialCardState(res);
              // @ts-ignore
              this.cardState = {
                // @ts-ignore
                ...newCardState,
                ...this.cardState,
                ["new"]: {
                  isOpen: false,
                  edit: false,
                  saving: false,
                  showSavedMsg: false,
                  showError: false,
                }
              }
            }
          });
        }
      });
    } else {
      this.onToggleShowError(secretInfo.id);
      this.onToggleEditSaving(secretInfo.id)
    }
  }

  onDeleteSecret(id: string) {
    this.apiService.deleteSecret(id).subscribe((res) => {
      if (res) {
        this.secrets = this.secrets.filter(secret => secret.id !== id);
        delete this.cardState[id];   
      }
    });
  }
}
