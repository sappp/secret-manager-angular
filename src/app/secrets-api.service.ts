import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Secret } from './secret';

@Injectable({
  providedIn: 'root'
})
export class SecretsAPIService {
  apiURL: string = 'https://secret-manger-api.herokuapp.com/secrets';
  constructor(private httpClient: HttpClient) { }
  
  public getSecrets(url?: string) {
    return this.httpClient.get(`${this.apiURL}`);
  }

  public getSecretById(id: string) {
    return this.httpClient.get(`${this.apiURL}/${id}`);
  }

  public createSecret(secret: object) { 
    return this.httpClient.post(`${this.apiURL}/`, secret);
  }

  public updateSecret(secret: Secret) {
    return this.httpClient.put(`${this.apiURL}/${secret.id}`, secret);
  }

  public deleteSecret(id: string) {
    return this.httpClient.delete(`${this.apiURL}/${id}`);
  }

  

  
}
