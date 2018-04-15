import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { PersonService } from '../../providers/person.service';
import { Person } from '../../models/person.model';
import { MetaTags } from '../../../config/meta-tags';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  id: string;
  person;
  private href: string;

  constructor(@Inject(APP_BASE_HREF) private baseHref: string,
               private personService: PersonService,
               private activedRoute: ActivatedRoute,
               private meta: Meta) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(
      params => {
        this.id = params.id;
        this.href = window.location.href;
        this.personService.get(this.id).subscribe(
          result => {
            this.person = result;
            // TODO: perfil deve vir no objeto person
            this.person.profile = 'Mestra dos Dados';
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
