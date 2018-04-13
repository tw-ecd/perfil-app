import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Person } from '../models/person.model';
import { ResponseModel } from '../models/response.model';
import { AppGlobals } from '../app-globals.service';

@Injectable()
export class PersonService {

  private baseUrl = this.globals.apiURL + '/person/';

  constructor(private http: HttpClient, private globals: AppGlobals) {
  }

  getAll() {
    return this.http.get<Person[]>(this.baseUrl);
  }

  add(person: Person) {
    return this.http.post<ResponseModel<Person>>(this.baseUrl, person);
  }

  addEmpty() {
    return this.http.post<ResponseModel<Person>>(this.baseUrl, {
      name: null,
      email: null,
      company: null,
      role: null
    });
  }

  update(person: Person) {
    return this.http.put<ResponseModel<Person>>(this.baseUrl + person._id, person);
  }



}
