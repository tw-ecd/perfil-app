import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  keys = {
    HAS_DONE: 'SU-HASDONE',
    USER_ID: 'SU-USERID',
    CURRENT_QUESTION: 'SU-CURRENTQUESTION'
  };

  constructor() { }

  read(key: string) {
    return localStorage.getItem(key);
  }

  write(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  clear() {
    localStorage.clear();
  }

}
