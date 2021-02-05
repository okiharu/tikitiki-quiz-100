import { Component, OnInit, Injectable } from '@angular/core';
import { APIService } from '../../API.service';
import { Subscription, interval } from 'rxjs';
import { RandomQuestion } from 'src/types/random_question';
import { QuestionService } from '../../services/question.service';
import { ParticipantService } from '../../services/participant.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class QuestionComponent implements OnInit {
  question: RandomQuestion;
  count: string;
  isStarted = false;
  setting_question_number;
  setting_time = 30;
  questionCounter = 1;
  isGuest = false;
  subscription: Subscription;

  constructor(
    private api: APIService,
    private questionService: QuestionService,
    private participantService: ParticipantService
  ) {
    this.setting_question_number = questionService.getQuestionNumber();
  }

  ngOnInit(): void {
    this.api.OnDeleteRandomQuestionListener.subscribe((event: any) => {
      this.initQuestion();
      this.getRandomQuestionCount();
      if (this.questionCounter >= this.setting_question_number) {
        this.isStarted = false;
        return;
      }
    });
    this.api.OnCreateRandomQuestionListener.subscribe((event: any) => {
      this.isStarted = true;
      this.initQuestion();
      this.getRandomQuestionCount();
    });
  }

  getNextQuestion() {
    console.log(this.questionCounter);
    if (this.question == null) {
      this.isStarted = false;
      console.log('終了');
    }
    this.questionService.deleteRandomQuestion(this.question.id).then(event => {
      this.getRandomQuestion();
    });
  }

  start() {
    this.questionService.deleteAllRandomQuestion().then(e => {
      this.questionService.listQuestions().then(event => {
        this.shuffle(event.items)
          .slice(0, this.setting_question_number)
          .forEach((value, index) => {
            const input = {
              id: String(index),
              text: value.text,
              level: value.level
            };
            this.questionService
              .createRandomQuestion(input)
              .catch(e => console.log(e));
          });
      });
    });
  }

  private initQuestion() {
    this.setTimer();
    this.getRandomQuestion();
  }

  private setTimer() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = interval(1000).subscribe(x => {
      this.count = String(this.setting_time - x);
      if (x == this.setting_time) {
        this.count = 'Time Up!';
        this.subscription.unsubscribe();
      }
    });
  }

  private getRandomQuestion() {
    this.questionService.listRandomQuestions().then(event => {
      this.question = event.items[0];
    });
  }

  private getRandomQuestionCount() {
    this.questionService.listRandomQuestions().then(event => {
      this.questionCounter =
        this.setting_question_number - event.items.length + 1;
    });
  }

  private shuffle([...array]): any {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
