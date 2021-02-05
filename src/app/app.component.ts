import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from './API.service';
import { Participant } from 'src/types/participant';
import { CookieService } from 'ngx-cookie-service';
import { ParticipantService } from './services/participant.service';
import { QuestionService } from './services/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public createForm: FormGroup;
  public isRegister = false;
  public guestName = '○○';
  isGuest = false;
  questionNumber: number;

  participant: Participant;
  /* declare restaurants variable */
  participants: Array<Participant>;

  constructor(
    private api: APIService,
    private fb: FormBuilder,
    private cookieService: CookieService,
    private questionService: QuestionService,
    private participantService: ParticipantService
  ) {
    this.isRegister = Boolean(this.cookieService.get('isRegister'));
    this.questionNumber = this.questionService.getQuestionNumber();
  }

  async ngOnInit() {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      answer: ['', Validators.required],
      point: 0,
      isGuest: false
    });
    this.api.ListParticipants().then(event => {
      this.participants = event.items;
    });
    this.api.OnCreateParticipantListener.subscribe((event: any) => {
      const newParticipant = event.value.data.onCreateParticipant;
      this.participants = [newParticipant, ...this.participants];
    });
    this.api.OnUpdateParticipantListener.subscribe((event: any) => {
      this.getGuestParticipant();
    });
    this.api.OnDeleteParticipantListener.subscribe((event: any) => {
      this.ngOnInit();
    });
  }

  public register(participant: Participant) {
    console.log(participant);
    this.isRegister = true;
    this.cookieService.set('isRegister', 'true');
    this.cookieService.set('participant_id', participant.id);
    participant.name = participant.name.substring(0, 5);
    this.createParticipant(participant);
  }

  public submitAnswer(participant: Participant) {
    console.log(this.cookieService.get('participant_id'));
    this.api
      .UpdateParticipant({
        id: this.cookieService.get('participant_id'),
        answer: participant.answer
      })
      .then(event => {
        console.log('answer updated!');
        this.createForm.reset();
      })
      .catch(e => {
        console.log(e);
        // this.cookieService.delete('participant_id');
        this.cookieService.delete('isRegister');
      });
  }

  private createParticipant(participant: Participant) {
    this.api
      .CreateParticipant(participant)
      .then(event => {
        console.log('participant created!');
        this.cookieService.set('participant_id', event.id);
      })
      .catch(e => {
        console.log('error creating participant...', e);
      });
  }
  resetPoints() {
    for (var item of this.participants) {
      this.api
        .UpdateParticipant({
          id: item.id,
          point: 0
        })
        .then(event => {
          console.log('point reseted');
        })
        .catch(e => console.log(e));
    }
  }

  getGuestParticipant() {
    this.participantService
      .listParticipants()
      .then(event => {
        this.isGuest = false;
        for (var item of event.items) {
          if (item.isGuest == true) {
            this.guestName = item.name;
            if (this.cookieService.get('participant_id') == item.id) {
              this.isGuest = true;
            } else {
              this.isGuest = false;
            }
            return;
          }
        }
        this.guestName = '○○';
      })
      .catch(e => console.log(e));
  }

  exit() {
    this.participantService
      .deleteParticipant(this.cookieService.get('participant_id'))
      .then(e => this.cookieService.deleteAll());
  }
}
