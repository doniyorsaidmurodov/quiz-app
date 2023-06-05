import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {QuizAnswersComponent} from './answers.component';

const routes: Routes = [
  {
    path: '',
    component: QuizAnswersComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuizAnswersComponent]
})

export class QuizAnswersModule {
}
