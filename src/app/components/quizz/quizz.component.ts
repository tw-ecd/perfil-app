import { Component, OnInit, Renderer2 } from '@angular/core';
import { QuestionService } from '../../providers/question.service';
import { Question } from '../../models/question.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../providers/local-storage.service';
import { Option } from '../../models/option.model';
import { PersonService } from '../../providers/person.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {

  private _id: string;
  private quantity: number;
  private colors = [
    'mask-solarized',
    'mask-purple',
    'mask-blue',
    'mask-green',
    'mask-coral'
  ];
  private currentColor: string;

  questions: Question[];
  answers: Option[];
  dots = [];
  currentQuestion: Question;

  constructor(
    private questionService: QuestionService,
    private personService: PersonService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private localStorage: LocalStorageService,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.prepare();
    this.fetch();
  }

  prepare() {
    if (!!this.localStorage.read(this.localStorage.keys.HAS_DONE)) {
      this.router.navigateByUrl('/subscribe/' + this._id);
    }
    this.setRandomColor();
    this.activatedRouter.params.subscribe(params => this._id = params.id);
  }

  fetch() {
    this.questionService.getAll().subscribe(
      all => {
        this.quantity = all.quantity;
        this.questions = all.questions;
        this.dots = Array(all.quantity).fill(1);
        this.currentQuestion = all.questions[0];
      },
      err => console.log(err)
    );
  }

  setRandomColor() {
    this.renderer.removeClass(document.body, this.currentColor);

    const colorName = this.colors[Math.floor(Math.random() * 6)];
    this.renderer.addClass(document.body, colorName);

    this.currentColor = colorName;
  }

  nextQuestion(index: number, option: Option) {
    this.setRandomColor();
    this.currentQuestion = this.questions[index];
  }

  onSelected(option: Option) {
    const nextIndex = this.currentQuestion.order + 1;

    if (nextIndex < this.questions.length) {
      this.personService.answer(this._id, option).subscribe(
        res => this.nextQuestion(nextIndex, option),
        err => console.log(err));
      return;
    }

    this.localStorage.write(this.localStorage.keys.HAS_DONE, JSON.stringify(true));
    this.router.navigateByUrl('/subscribe/' + this._id);

  }
}
