import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobals {

  private api_url = 'https://su-auras.herokuapp.com';

  constructor() {
  }


  public get apiURL(): string {
    return this.api_url;
  }

}
