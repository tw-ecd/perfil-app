import { Component, OnInit } from '@angular/core';

import { PersonService } from '../../providers/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent implements OnInit {

  people: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    
  }

  

}
