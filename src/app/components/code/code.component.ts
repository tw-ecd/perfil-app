import { Component, OnInit, Inject,  Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { PersonService } from '../../providers/person.service';
import { Person } from '../../models/person.model';
import { MetaTags } from '../../../config/meta-tags';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  id: string;
  person;
  private href: string;

  constructor(@Inject(APP_BASE_HREF) private baseHref: string,
               private personService: PersonService,
               private activedRoute: ActivatedRoute,
               private meta: Meta,
               private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.removeAttribute(document.body, 'class');
    this.renderer.addClass(document.body, 'mask-white');
    this.activedRoute.params.subscribe(
      params => {
        this.id = params.id;
        this.href = window.location.href;
        this.personService.get(this.id).subscribe(
          result => {
            this.person = result;
            this.populateMeta();
          }, err => { this.id = 'NOTFOUND'; }
        );
      });
  }

  populateMeta() {
    const imgUrl = window.location.origin +
          this.baseHref + 'assets/' +
          'avatar' + '.jpg';

    MetaTags.forEach(function(metaTag) {
      this.meta.addTag(metaTag);
    }.bind(this));

    this.meta.addTag({ name: 'twitter:image', content: imgUrl });
    this.meta.addTag({ property: 'og:url', content: this.href });
    this.meta.addTag({ property: 'og:image', content: imgUrl });
  }
}
