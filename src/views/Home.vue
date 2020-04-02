<template>
  <div class="home">
    <v-row justify='center'>
      <v-col cols='2'>
        <h1>TFT GM</h1>
      </v-col>
    </v-row>
    <v-row justify='center'>
      <v-col cols='2'>
        <v-btn color='primary' @click="$router.push('new')">New League</v-btn>
      </v-col>
    </v-row>
    <v-row justify='center'>
      <v-col cols='2'>
        <v-btn color='primary'>Load League</v-btn>
      </v-col>
    </v-row>
    <v-row justify='center'>
      <v-col cols='2'>
        <p class='text--disabled text-center'>v0.1</p>
      </v-col>
    </v-row>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({})

export default class Home extends Vue {
  
}
</script>
