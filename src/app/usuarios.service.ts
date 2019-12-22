import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(protected http: HttpClient) { }

  getUsers() {
    return this.http.get('https://gorest.co.in/public-api/users?_format=json&access-token=2sTTRZ41l-OXUyHqJQDmVQph7HYgT8A0Mw9X');
  }

  getPerfil(id) {
    return this.http.get('https://gorest.co.in/public-api/users/' + id + '?_format=json&access-token=2sTTRZ41l-OXUyHqJQDmVQph7HYgT8A0Mw9X');
  }

}
