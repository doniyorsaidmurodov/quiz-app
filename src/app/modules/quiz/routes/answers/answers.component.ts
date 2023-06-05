import {Component} from '@angular/core';
import {quizList} from '../../../../../mock-api/data';

@Component({
  selector: 'quiz-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class QuizAnswersComponent {
  quizList = quizList;

  removeLast() {
    this.quizList.pop();
  }
}
