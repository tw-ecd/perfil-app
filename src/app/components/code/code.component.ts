import { Component, OnInit,  Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PersonService } from '../../providers/person.service';
import { Person } from '../../models/person.model';
import { AppGlobals } from '../../app-globals.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  private photoUrl: string = this.globals.photoURL;
  private autoPhotoLogin: boolean = this.globals.autoPhotoLogin;
  id: string;
  person;

  constructor(private personService: PersonService,
               private activedRoute: ActivatedRoute,
               private renderer: Renderer2,
               private globals: AppGlobals
              ) { }

  ngOnInit() {
    this.renderer.removeAttribute(document.body, 'class');
    this.renderer.addClass(document.body, 'mask-white');
    this.activedRoute.params.subscribe(
      params => {
        this.id = params.id;
        this.personService.get(this.id).subscribe(
          result => {
            this.person = result;
            if (this.autoPhotoLogin) {
              window.location.replace(this.photoUrl + '/' + this.id);
            }
          }, err => { this.id = 'NOTFOUND'; }
        );
      });
  }
}
