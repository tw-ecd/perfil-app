import { Component, OnInit, Renderer } from '@angular/core';
import { QuestionService } from '../../providers/question.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {

  private quantity: number;
  private colors = [
    'mask-solarized',
    'mask-purple',
    'mask-yellow',
    'mask-blue',
    'mask-green',
    'mask-coral'
  ]

  questions: Question[];
  dots = [];

  constructor(private questionService: QuestionService, private renderer: Renderer) { }

  ngOnInit() {
    this.setRandomColor();
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

  setRandomColor() {
    const colorName = this.colors[Math.floor(Math.random() * 6)];
    this.renderer.setElementClass(document.body, colorName, true);
  }

  onSelected(event: any) {
    console.log(event);
  }
}
