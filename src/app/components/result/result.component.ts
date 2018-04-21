import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
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
               private meta: Meta,
               private router: Router,
               private activedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.setBackground();
    this.activedRoute.params.subscribe(
      params => {
        this._id = params.id;
        this.href = window.location.href;
        this.fetch();
      });

    // this.meta.addTag({ property: 'og:url', content: this.href });
  }

  setBackground() {
    this.renderer.removeAttribute(document.body, 'class');
    this.renderer.addClass(document.body, 'mask-blue');
  }

  fetch() {
    this.personService.result(this._id).subscribe((result) => {
      this.result = result;
      this.title = result.name.substr(0, result.name.lastIndexOf(' '));
      this.bold = result.name.substr(result.name.lastIndexOf(' '));
      this.populateImageMeta();
    });
    this.personService.get(this._id).subscribe((person) => {
      this.person = person;
    });
  }

  populateImageMeta() {
    const imgUrl = window.location.origin +
          this.baseHref + 'assets/' +
          this.result.details.identifier + '.png';

    // this.meta.addTag({ name: 'twitter:image', content: imgUrl });
    // this.meta.addTag({ property: 'og:image', content: imgUrl });
  }

  restart() {
    this.router.navigateByUrl('/');
  }
}
