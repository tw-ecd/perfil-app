import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { PersonService } from '../../providers/person.service';
import { Result } from '../../models/result.model';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  private _id: string;
  href: string;
  result: Result;
  title: String;
  bold: String;
  person: Person;

  constructor(@Inject(APP_BASE_HREF) private baseHref: string,
               private renderer: Renderer2,
               private personService: PersonService,
               private router: Router,
               private activedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.setBackground();
    this.activedRoute.params.subscribe(
      params => {
        this._id = params.id;
        this.fetch();
      });
  }

  setBackground() {
    this.renderer.removeAttribute(document.body, 'class');
    this.renderer.addClass(document.body, 'mask-blue');
  }

  fetch() {
    this.personService.result(this._id).subscribe((result) => {
      this.result = result;
      this.title = result.details.title.substr(0, result.details.title.lastIndexOf(' '));
      this.bold = result.details.title.substr(result.details.title.lastIndexOf(' '));
      this.setShareHref();
    });
    this.personService.get(this._id).subscribe((person) => {
      this.person = person;
    });
  }

  setShareHref() {
    this.href = window.location.origin +
          this.baseHref + 'profile/' +
          this.result.details.identifier.toLowerCase() + '/?id=' + this._id;
  }

  restart() {
    this.router.navigateByUrl('/');
  }
}
