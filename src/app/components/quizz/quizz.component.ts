import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../providers/question.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {

  private questions: Question[];
  private quantity: number;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.questionService.getAll().subscribe(
      all => {
        this.quantity = all.quantity;
        this.questions = all.questions;
      },
      err => console.log(err)
    );
  }

  onSelected(event: any) {
    console.log(event);
  }
}
