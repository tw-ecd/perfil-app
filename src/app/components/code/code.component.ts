import { Component, OnInit,  Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PersonService } from '../../providers/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  id: string;
  person;

  constructor(private personService: PersonService,
               private activedRoute: ActivatedRoute,
               private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.removeAttribute(document.body, 'class');
    this.renderer.addClass(document.body, 'mask-white');
    this.activedRoute.params.subscribe(
      params => {
        this.id = params.id;
        this.personService.get(this.id).subscribe(
          result => {
            this.person = result;
          }, err => { this.id = 'NOTFOUND'; }
        );
      });
  }
}
