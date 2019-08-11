import { Injectable } from '@angular/core';
import { delay } from 'q';

@Injectable()
export class ArvincaService {
    games: Arvinca[] = [];

    constructor() { }

    init(initialMove = null) {
        this.games.push(new Arvinca(this.games.length, initialMove));
    }

    makeMove(myTurn: boolean) {
    }
}

export enum Bonus {
    None = 0,
    Contra,
    Recontra
}

export interface Poker {
    value: number;
    bonus: Bonus;
    pagat: boolean;

}

export class Arvinca {
    id: number;
    moves: {mine: Poker, other: Poker} = {
        mine: {value: 0, bonus: Bonus.None, pagat: false},
        other: {value: 0, bonus: Bonus.None, pagat: false}
    };

    iPlayFirst: boolean;

    constructor(id, initialMove) {
        this.id = id;
        this.iPlayFirst = initialMove !== null;
    }

    makeNextMove(moves) {
        // can't if game is already over
    }

    isGameOver() {
        // if last move is pagat
        if (this.moves.mine.pagat || this.moves.other.pagat) {
            return true;
        }

        if (this.isMyTurn() && this.iLead()) {
            return true;
        }

        if (!this.isMyTurn() && !this.iLead()) {
            return true;
        }

        return false;
    }

    isMyTurn() {
        return this.iPlayFirst && !this.moves.mine.value
            || !this.iPlayFirst && this.moves.other.value;
    }

    iLead() {
        return this.getValue('mine') > this.getValue('other');
    }

    iTrail() {
        return this.getValue('mine') < this.getValue('other');
    }

    getValue(type) {
        const bonus = this.moves[type].bonus !== Bonus.None ? 2 : 1;

        return this.moves[type].value * bonus;
    }
}
