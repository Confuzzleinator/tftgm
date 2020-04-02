import Team from './team';
import Player from './player';

export default class League {
    id: number;
    name: string;
    players: Player[] = [];
    teams: Team[] = [];
    teamIdCount: number = 0;
    playerIdCount: number = 0;

    constructor(name: string) {
        this.id = 0;
        this.name = name;
    }

    public addTeam(team: Team): void {
        team.id = this.teamIdCount;
        this.teamIdCount++;
        this.teams.push(team);
    }

    public addPlayer(player: Player): void {
        player.id = this.playerIdCount;
        this.playerIdCount++;
        this.players.push(player);
    }
}