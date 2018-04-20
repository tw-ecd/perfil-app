import { Component, OnInit, Renderer2 } from '@angular/core';
import { PersonService } from '../../providers/person.service';
import { Result } from '../../models/result.model';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  private _id: string;
  result: Result;
  title: String;
  bold: String;
  person: Person;

  constructor(private renderer: Renderer2,
    private personService: PersonService,
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
      this.title = result.name.substr(0, result.name.lastIndexOf(' '));
      this.bold = result.name.substr(result.name.lastIndexOf(' '));
    });
    this.personService.get(this._id).subscribe((person) => {
      this.person = person;
    });
  }

}
