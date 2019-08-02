import { Injectable } from '@angular/core';

export enum STATE {
    GAME, CONTRA, RECONTRA
}

export enum TURN {
    ME, OTHER
}

@Injectable()
export class PokerService {
    state = STATE.GAME;
    turn = TURN.ME;

    constructor() { }

    submit() {
        
    }

    
}