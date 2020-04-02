import Player from './player';

export default class Team {
    public id!: number;
    public points: number = 0; // TODO remove when new GameResult type is implemented
    public name: string;
    public abbr: string;
    public players: Player[] = [];


    constructor(name: string, abbr: string) {
        this.name = name;
        this.abbr = abbr;
    }

    public addPlayer(player: Player): void {
        player.team = this.id;
        this.players.push(player);
    }
}