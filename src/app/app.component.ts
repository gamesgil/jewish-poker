import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { PokerService, TURN, STATE } from './poker.service';
import { state } from '@angular/animations';
import { ArvincaService } from './arvinca.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JewishPoker';

  constructor(private pokerService: PokerService, private arvinca: ArvincaService) { 
    
  }

  onSubmit() {
    this.pokerService.turn = TURN.OTHER;
  }

  get myTurn() {
    return this.pokerService.turn === TURN.ME;
  }

  get isContra() {
    return this.myTurn && this.pokerService.state === STATE.CONTRA;
  }

  get isRecontra() {
    return this.myTurn && this.pokerService.state === STATE.RECONTRA;
  }
}
