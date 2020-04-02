<template>
<div class='dashboard'>
    <v-row justify="center">
        <v-col cols='1'>
            <v-btn color='primary' @click="sim">Sim</v-btn>
        </v-col>
    </v-row>
    <v-row justify="center">
        <v-col cols='8'>
            <GameResult :results='results'/>
        </v-col>
    </v-row>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import GameResult from '@/components/GameResult.vue';
import Player from '../core/player';
import Game from '../core/game';
import Globals from '../core/globals';

@Component({
    components: {GameResult}
})
export default class Dashboard extends Vue {
    results: Player[] = [];

    sim() {
        let g: Game = new Game([
            Globals.league.players[0],
            Globals.league.players[1],
            Globals.league.players[2],
            Globals.league.players[3],
            Globals.league.players[4],
            Globals.league.players[5],
            Globals.league.players[6],
            Globals.league.players[7],
        ]);
        
        this.results = g.sim();
    }
}
</script>