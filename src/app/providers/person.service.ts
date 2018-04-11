import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Person } from '../models/person.model';

@Injectable()
export class PersonService {

  private baseUrl = "https://su-auras.herokuapp.com/person/"

  constructor(private http: HttpClient) { 
  }

  getAll() {
    return this.http.get<Person[]>(this.baseUrl);
  }

  add(person: Person){
    return this.http.post<Person>(this.baseUrl, person);
  }
  
  update(person: Person){
    return this.http.put<Person>(this.baseUrl + person._id, person);
  }



}
