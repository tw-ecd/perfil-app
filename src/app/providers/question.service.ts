import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppGlobals } from '../app-globals.service';
import { Question } from '../models/question.model';

@Injectable()
export class QuestionService {

  private baseUrl = this.globals.apiURL + '/question/';

  constructor(private http: HttpClient, private globals: AppGlobals) { }

  getAll() {
    return this.http.get<Question[]>(this.baseUrl);
  }

  get(id: String) {
    return this.http.get<Question>(this.baseUrl + id);
  }
}
