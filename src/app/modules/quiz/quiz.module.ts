import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {QuizComponent} from './quiz.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '',
    component: QuizComponent,
    children: [
      {
        path: 'list',
        loadChildren: () => import('./routes/list/list.module').then((m) => m.QuizListModule)
      },
      {
        path: 'list/:id',
        loadChildren: () => import('./routes/details/details.module').then((m) => m.QuizDetailsModule)
      },
      {
        path: 'answers',
        loadChildren: () => import('./routes/answers/answers.module').then((m) => m.QuizAnswersModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuizComponent]
})

export class QuizModule {
}
