<template>
<div class='new'>
    <v-row justify='center' align="center">
        <v-col cols='2'>
            <h1>New League</h1>
        </v-col>
    </v-row>
    <v-row justify='center' align="center">
        <v-col cols='2'>
            <v-text-field label='League Name'></v-text-field>
        </v-col>
    </v-row>
    <v-row justify='center' align='center'>
        <v-col cols='1'>
            <v-btn color='primary' v-model="name" single-line @click="createLeague">Create</v-btn>
        </v-col>
    </v-row>
</div>   
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Globals from '@/core/globals';
import League from '../core/league';
import Team from '../core/team';
import Player from '../core/player';

@Component({})
export default class New extends Vue {
    name: string = "";

    createLeague() {
        let l: League = new League(this.name);
        let t1: Team = new Team("Tesla", "TSLA");
        let t2: Team = new Team("Crimson Wings", "CW");
        let t3: Team = new Team("Team Liquid", "TL");
        let t4: Team = new Team("Counter Logic Gaming", "CLG");

        l.addTeam(t1);
        l.addTeam(t2);
        l.addTeam(t3);
        l.addTeam(t4);

        l.addPlayer(new Player("Keane", 95));
        l.addPlayer(new Player("Curry", 42));
        l.addPlayer(new Player("Lebron", 55));
        l.addPlayer(new Player("Pretty", 60));
        l.addPlayer(new Player("Confuzzle", 69));
        l.addPlayer(new Player("Matrix", 77));
        l.addPlayer(new Player("LS", 84));
        l.addPlayer(new Player("Wolf", 81));

        t1.addPlayer(l.players[0]);
        t1.addPlayer(l.players[1]);
        t2.addPlayer(l.players[2]);
        t2.addPlayer(l.players[3]);
        t3.addPlayer(l.players[4]);
        t3.addPlayer(l.players[5]);
        t4.addPlayer(l.players[6]);
        t4.addPlayer(l.players[7]);

        Globals.league = l;
        this.$router.push("dashboard");
    }
}
</script>