import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, EmailValidator, AbstractControl } from '@angular/forms';

import { PersonService } from '../../providers/person.service';
import { Person } from '../../models/person.model';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent implements OnInit {

  personForm: FormGroup;

  constructor(private personService: PersonService, private fb: FormBuilder, private activedRoute: ActivatedRoute) { }

  private _id: String;

  ngOnInit() {
    this.createForm();
    this.activedRoute.params.subscribe(params => this._id = params.id);
  }

  createForm() {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      company: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  save() {
    if (this.personForm.invalid) {
      return false;
    }

    const newPerson: Person = this.personForm.value;
    newPerson._id = this._id;

    this.personService.update(newPerson)
      .subscribe(result => console.log(result), err => console.log(err));
  }

  clear(control: AbstractControl) {
    control.reset();
  }

  get name() {
    return this.personForm.get('name');
  }

  get email() {
    return this.personForm.get('email');
  }

  get company() {
    return this.personForm.get('company');
  }

  get role() {
    return this.personForm.get('role');
  }


}
