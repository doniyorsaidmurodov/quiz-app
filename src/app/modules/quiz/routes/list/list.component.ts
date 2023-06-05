import {Component, OnInit} from '@angular/core';
import {quizList} from '../../../../../mock-api/data';
import {MatDialog} from '@angular/material/dialog';
import {AddQuizComponent} from '../../components/add-quiz/add-quiz.component';

@Component({
  selector: 'quiz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class QuizListComponent implements OnInit {
  quizList = quizList;

  constructor(
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  addQuiz() {
    this.dialog.open(AddQuizComponent, {
      maxWidth: '640px',
      height: '90vh',
      width: '100%'
    })
  }
}
