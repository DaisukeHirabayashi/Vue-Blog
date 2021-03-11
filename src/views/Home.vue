<template>
  <v-app>
    <v-container>
      <v-btn outlined color="green" @click="doSend">送信</v-btn>
      <v-card>
        <v-card-text>
          <div class="markdown-body">
            <div id="content"></div>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>

import marked from "marked"
import firebase from 'firebase'

export default {
  data() {
    return {
      markdown_text:""
    }
  },
  created() {
    this.axios.get('./markdown.md')
        .then(response => document.querySelector('#content').innerHTML = marked(response.data));
    this.axios.get('./markdown.md')
        .then(response => this.markdown_text = response.data);
  },
  methods: {
    doSend() {
      firebase.database().ref('markdown').push({
          markdown_text: this.markdown_text
        }, () => {
      })
    }
  }
};
</script>

<style>
  @import "../assets/markdown.css";
</style>
