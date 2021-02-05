import { Component, OnInit, Injectable } from '@angular/core';
import { Participant } from '../../../types/participant';
import { ParticipantService } from '../../services/participant.service';
import { APIService } from '../../API.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class RankingComponent implements OnInit {
  participants: Participant[];
  constructor(
    private api: APIService,
    private participantService: ParticipantService
  ) {}

  ngOnInit() {
    this.getParticipants();
    this.api.OnUpdateParticipantListener.subscribe((event: any) => {
      this.getParticipants();
    });
    this.api.OnCreateParticipantListener.subscribe((event: any) => {
      const newParticipant = event.value.data.onCreateParticipant;
      this.participants = [newParticipant, ...this.participants];
      this.participants = this.participants.sort((a, b) => b.point - a.point);
    });
  }

  setGuest(participant: Participant) {
    participant.isGuest = !participant.isGuest;
    this.participantService.updateParticipant(participant);
  }

  private getParticipants() {
    this.participantService.listParticipants().then(event => {
      this.participants = event.items;
      this.participants = this.participants.sort((a, b) => b.point - a.point);
    });
  }
}
