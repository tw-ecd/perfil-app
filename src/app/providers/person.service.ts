import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Person } from '../models/person.model';
import { ResponseModel } from '../models/response.model';
import { AppGlobals } from '../app-globals.service';
import { Option } from '../models/option.model';

@Injectable()
export class PersonService {

  private baseUrl = this.globals.apiURL + '/person/';

  constructor(private http: HttpClient, private globals: AppGlobals) {
  }

  get(id: String) {
    return this.http.get<Person>(this.baseUrl + id);
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

  answer(personId: string, option: Option) {
    return this.http.put<ResponseModel<Person>>(`${this.baseUrl}${personId}/answer/${option._id}`, null);
  }

}
