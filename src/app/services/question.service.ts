import { Injectable } from '@angular/core';
import { APIService, CreateRandomQuestionInput } from '../API.service';
import { RandomQuestion } from '../../types/random_question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private randomQuestion: RandomQuestion;
  setting_question_number = 15;
  constructor(private api: APIService) {}

  listQuestions() {
    return this.api.ListQuestions();
  }
  listRandomQuestions() {
    return this.api.ListRandomQuestions();
  }

  createRandomQuestion(input: CreateRandomQuestionInput) {
    return this.api.CreateRandomQuestion(input).catch(e => console.log(e));
  }
  deleteRandomQuestion(id: string) {
    return this.api.DeleteRandomQuestion({ id: id }).catch(e => console.log(e));
  }

  deleteAllRandomQuestion() {
    return this.api.ListRandomQuestions().then(event => {
      for (var item of event.items) {
        this.api.DeleteRandomQuestion({ id: item.id });
      }
    });
  }
  getQuestionNumber() {
    return this.setting_question_number;
  }
}
