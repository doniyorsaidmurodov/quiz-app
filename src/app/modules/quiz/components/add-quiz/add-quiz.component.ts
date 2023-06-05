import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
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

  get checkboxAnswers(): FormArray<any> {
    return this.form.get('checkboxAnswers') as FormArray<any>;
  }

  get paragraphAnswers(): FormArray<any> {
    return this.form.get('paragraphAnswers') as FormArray<any>;
  }

  selectAnswerFormat(format: MatSelectChange) {
    this.form = this.fb.group({
      title: this.fb.control('')
    });
    this.answerFormat = format.value;
    if (format.value === 1) {
      this.form.addControl('paragraphAnswers', this.fb.array([]));
      this.paragraphAnswers.push(this.fb.group({
        id: this.fb.control(1),
        value: this.fb.control(null)
      }));
      this.form.addControl('answer', this.fb.control('', [Validators.max(this.paragraphAnswers.length)]));
    } else {
      this.form.addControl('checkboxAnswers', this.fb.array([]));
      this.checkboxAnswers.push(this.fb.group({
        id: this.fb.control(1),
        checked: this.fb.control(false),
        title: this.fb.control(null)
      }));
    }
  }

  submit() {
    if (this.form.valid) {
      this.dialogRef.close();
      quizList.push(this.form.value);
    }
  }

  addCheckboxAnswer() {
    if (this.checkboxAnswers.length < 5) {
      this.checkboxAnswers.push(this.fb.group({
        id: this.fb.control(this.checkboxAnswers.length + 1),
        checked: this.fb.control(false),
        title: this.fb.control(null)
      }));
    }
  }

  removeCheckboxAnswer(index: number) {
    if (this.checkboxAnswers.length > 1) {
      this.checkboxAnswers.removeAt(index);
    }
  }

  addParagraphAnswer() {
    if (this.paragraphAnswers.length < 5) {
      this.paragraphAnswers.push(this.fb.group({
        id: this.fb.control(this.paragraphAnswers.length + 1),
        value: this.fb.control(null)
      }));
      this.form.get('answer')?.setValidators([Validators.max(this.paragraphAnswers.length)])
    }
  }
}
