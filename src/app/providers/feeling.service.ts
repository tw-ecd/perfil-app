import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feeling } from '../models/feeling.model';

@Injectable()
export class FeelingService {

  private baseUrl = "https://su-auras.herokuapp.com/feeling";

  constructor(private http: HttpClient) { 
  }

  getAll() {
    return this.http.get<Feeling[]>(this.baseUrl);
  }

  add(feeling: Feeling){
    return this.http.post<Feeling>(this.baseUrl, feeling);
  }
}
