import Player from './player';
import { randBetween } from './utils';

export default class Game {
  private players: Player[];
  private standings: Player[] = [];

  constructor(players: Player[]) {
    this.players = players;
  }

  public sim(): Player[] {
    let scores: number[] = [];
    // Determine max overall
    let max: number = this.maxOverall(this.players);

    // Calculate starting scores and round1 results
    for(let i = 0; i < this.players.length; i++) {
      scores[i] = this.startingScore(this.players[i]);
      scores [i] += this.roundScore(max);
    }

    // Simulate each round until all players are eliminated
    while(this.players.length > 1) {
      // Add new round scores
      for(let i = 0; i < this.players.length; i++) {
        scores[i] += this.roundScore(max);
      }
      // Eliminate lowest player
      let low = Math.min.apply(Math, scores);
      let index = scores.indexOf(low);
      scores.splice(index, 1);
      this.standings.push(this.players.splice(index, 1)[0]);
    }

    this.standings.push(this.players[0]); // Add the first place into the standings
    this.standings.reverse();
    return this.standings;
  }

  private startingScore(player: Player): number {
    return player.rating;
  }

  private roundScore(maxOvr: number): number {
    return (randBetween(1, maxOvr)/3) + (Math.random() / 1000);
  }

  private maxOverall(players: Player[]): number {
    let maxOvr = 0;
    for(let p of players) {
      if(p.rating > maxOvr) {
        maxOvr = p.rating;
      }
    }
    return maxOvr;
  }

}
