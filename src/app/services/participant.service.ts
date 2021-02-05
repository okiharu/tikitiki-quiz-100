import { Injectable } from '@angular/core';
import { Participant } from '../../types/participant';
import { APIService } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private participants: Participant[];
  constructor(private api: APIService) {}

  listParticipants() {
    return this.api.ListParticipants();
  }

  deleteParticipant(id: string) {
    return this.api.DeleteParticipant({ id: id });
  }

  updateParticipant(participant: Participant) {
    this.api
      .UpdateParticipant({
        id: participant.id,
        name: participant.name,
        point: participant.point,
        answer: participant.answer,
        isGuest: participant.isGuest
      })
      .catch(e => console.log(e));
  }
}
