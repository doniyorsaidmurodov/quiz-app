import { Component } from '@angular/core';
import {quizList} from '../../../mock-api/data';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  constructor() {
    quizList.push({title: 'test'})
  }
}
