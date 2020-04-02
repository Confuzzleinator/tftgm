<template>
    <div class='gameResult'>
        <v-row justify="center">
            <v-col cols='5'>
                <v-data-table 
                    hide-default-footer 
                    :headers='headers' 
                    :items='standings'
                    dense></v-data-table>
            </v-col>
            <v-col cols='4'>
                <v-data-table 
                    :headers='teamHeaders' 
                    :items='teamStandings'
                    hide-default-footer
                    dense></v-data-table>
            </v-col>
        </v-row>
    </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import {Prop, Watch} from 'vue-property-decorator';
import Component from 'vue-class-component';
import Player from '../core/player';
import Constants from '../core/constants';
import Globals from '../core/globals';
import Team from '../core/team';

@Component({})
export default class GameResult extends Vue {
    @Prop() results!: Player[];
    // Reload results whenever the prop changes
    @Watch('results') onResultsChange(results: Player[], oldResults: Player[]) {
        this.r = results;
        this.loadResults(this.r);
    }
    headers: Object[] = [ // Headers/columns for the table
        {
            text: "Place",
            value: "place"
        },
        {
            text: "Name",
            value: "name"
        },
        {
            text: "Rating",
            value: "rating"
        },
        {
            text: "Team",
            value: "team"
        }
    ];
    teamHeaders: Object[] = [
        {
            text: "Name",
            value: "name"
        },
        {
            text: "Points",
            value: "points"
        }
    ]
    standings: Object[] = []; // The table data, populated by loadResults()
    teamStandings: Object[] = [];
    r: Player[] = this.results;

    // Load the table data initially
    mounted() {
        this.r = this.results;
        this.loadResults(this.r);
    }

    loadResults(results: Player[]) {
        this.standings = []; // Clear past standings
        this.teamStandings = []; // Clear past team standings
        let teams: number[] = []; // List of teams (ids) involved in the game
        
        // Loop through the results array, formatting it for the table and putting it in standings
        for(let i=0; i < results.length; i++) {
            this.standings.push({
                place: i + 1,
                name: results[i].name,
                rating: results[i].rating,
                team: Globals.league.teams[results[i].team].abbr,
            });

            // Add the player's team to list of teams involved if it hasn't been added already
            // and clear it's past points from previous sims
            if(!teams.includes(results[i].team)) {
                teams.push(results[i].team);
                Globals.league.teams[results[i].team].points = 0;
            }
            // Calculate each team's points
            let teamPoints: number[];
            if(i >= Constants.placementPoints.length) { // If the player placed too low to get points slap 'em with a big fat 0
                Globals.league.teams[results[i].team].points += 0;
            } else { // If the player placed high enough to receive points give 'em what the deserve
                Globals.league.teams[results[i].team].points += Constants.placementPoints[i];
            }            
        }
        

        // Create teams data table
        for(let t of teams) {
            let team = Globals.league.teams[t];
            this.teamStandings.push({
                name: team.name,
                points: team.points,
            });
        }
    }
}
</script>