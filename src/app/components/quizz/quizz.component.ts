import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../providers/question.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {

  private quantity: number;

  questions: Question[];
  dots = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.questionService.getAll().subscribe(
      all => {
        this.quantity = all.quantity;
        this.questions = all.questions;
        this.dots = Array(all.quantity).fill(1);
      },
      err => console.log(err)
    );
  }

  onSelected(event: any) {
    console.log(event);
  }
}
