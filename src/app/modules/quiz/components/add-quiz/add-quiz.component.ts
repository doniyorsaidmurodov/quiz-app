import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {MatSelectChange} from '@angular/material/select';
import {MatDialogRef} from '@angular/material/dialog';
import {quizList} from '../../../../../mock-api/data';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit {
  form!: FormGroup;
  answerFormat: number | null = null;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddQuizComponent>
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: this.fb.control('')
    });
  }

  get answers(): FormArray<any> {
    return this.form.get('answers') as FormArray<any>;
  }

  selectAnswerFormat(format: MatSelectChange) {
    this.form = this.fb.group({
      title: this.fb.control('')
    });
    this.answerFormat = format.value;
    if (format.value === 1) {
      this.form.addControl('answer', this.fb.control(''));
    } else {
      this.form.addControl('answers', this.fb.array([]));
      this.answers.push(this.fb.group({
        checked: this.fb.control(false),
        value: this.fb.control(1),
        title: this.fb.control(null)
      }));
    }
  }

  submit() {
    this.dialogRef.close();
    quizList.push(this.form.value);
  }

  addCheckboxAnswer() {
    if (this.answers.length < 5) {
      this.answers.push(this.fb.group({
        checked: this.fb.control(false),
        value: this.fb.control(this.answers.length + 1),
        title: this.fb.control(null)
      }));
    }
  }

  removeCheckboxAnswer(index: number) {
    if (this.answers.length > 1) {
      this.answers.removeAt(index);
    }
  }
}
