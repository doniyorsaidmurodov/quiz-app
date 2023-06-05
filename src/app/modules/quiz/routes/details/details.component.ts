import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {quizList} from '../../../../../mock-api/data';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'quiz-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class QuizDetailsComponent implements OnInit {
  quiz: any;
  form!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.quiz = quizList.find((value, index) => index === +params['id']);
    });
  }
}
