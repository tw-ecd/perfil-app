import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../providers/person.service';
import { LocalStorageService } from '../../providers/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: []
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private personService: PersonService,
    private renderer: Renderer2,
    private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.localStorage.clear();
    this.renderer.removeAttribute(document.body, 'class');
    this.renderer.addClass(document.body, 'mask-blue');
  }

  start() {
    this.personService.addEmpty().subscribe(response => {
      this.router.navigateByUrl('/quizz/' + response.data._id);
    });
  }

}
