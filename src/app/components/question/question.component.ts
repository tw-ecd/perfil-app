import { Component, OnInit } from '@angular/core';
import { FeelingService } from '../../providers/feeling.service';
import { Feeling } from '../../models/feeling.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  feelings: Feeling[];

  constructor(private feelingService: FeelingService) { }

  ngOnInit() {
    this.fetchFeelings();
  }

  fetchFeelings() {
    this.feelingService.getAll()
      .subscribe(
        result => this.feelings = result,
        err => console.log(err));
  }

}
