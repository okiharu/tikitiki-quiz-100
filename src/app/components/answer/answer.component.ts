import { Component, OnInit } from '@angular/core';
import { Participant } from '../../../types/participant';
import { ParticipantService } from '../../services/participant.service';
import { APIService, UpdateParticipantInput } from '../../API.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  answer: string;
  participant: Participant;
  participants: Participant[];
  updateParticipant: UpdateParticipantInput;
  constructor(
    private api: APIService,
    private participantService: ParticipantService
  ) {}

  ngOnInit(): void {
    this.participantService.listParticipants().then(event => {
      this.participants = event.items;
      this.participants.sort();
    });
    this.api.OnCreateParticipantListener.subscribe((event: any) => {
      const newParticipant = event.value.data.onCreateParticipant;
      this.participants = [newParticipant, ...this.participants];
    });
    this.api.OnUpdateParticipantListener.subscribe((event: any) => {
      this.participantService.listParticipants().then(event => {
        this.participants = event.items;
      });
    });
    this.api.OnDeleteParticipantListener.subscribe((event: any) => {
      this.participantService.listParticipants().then(event => {
        this.participants = event.items;
      });
    });
  }

  addPoint(participant: Participant): void {
    participant.point++;
    this.participantService.updateParticipant(participant);
  }
}
