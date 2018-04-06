import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';

import { PersonService } from '../../providers/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent implements OnInit {

  personForm: FormGroup;

  constructor(private personService: PersonService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      company: ['', Validators.required]
    });
  }

  save() {
    if (this.personForm.invalid)
      return false;

    const newPerson: Person = this.personForm.value;
    this.personService.add(newPerson)
      .subscribe(result => console.log(result), err => console.log(err));
  }

  get name() { 
    return this.personForm.get('name'); 
  }

  get email() { 
    return this.personForm.get('email'); 
  }

  get company(){
    return this.personForm.get('company'); 
  }

}
