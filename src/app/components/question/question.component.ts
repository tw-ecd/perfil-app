import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../../models/option.model';
import { QuestionService } from '../../providers/question.service';
import { Question } from '../../models/question.model';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  private _id: String;
  private question: Question;

  constructor(private questionService: QuestionService) { }

  @Input()
  set questionId(id: string) {
    this._id = (id && id.trim()) || '<no id set>';
  }

  @Output() selected = new EventEmitter<Option>();

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.questionService.get(this._id)
      .subscribe(
        question => this.question = question,
        err => console.log(err));
  }

  selectOption(selectedOption: Option) {
    this.selected.emit(selectedOption);
  }

}
