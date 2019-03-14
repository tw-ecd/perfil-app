import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobals {

  private api_url = 'https://perfil-app.herokuapp.com';
  private photo_url = 'https://inovecomcoragem.github.io/auras-photo/login';
  private auto_photo_login = true;

  constructor() { }

  public get apiURL(): string {
    return this.api_url;
  }

  public get photoURL(): string {
    return this.photo_url;
  }

  public get autoPhotoLogin(): boolean {
    return this.auto_photo_login;
  }
}
