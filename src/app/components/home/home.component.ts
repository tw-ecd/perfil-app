import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../providers/person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: []
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private personService: PersonService) { }

  ngOnInit() { }

  start() {
    this.personService.addEmpty().subscribe(response => {
      this.router.navigateByUrl('/subscribe/' + response.data._id);
    });
  }

}
