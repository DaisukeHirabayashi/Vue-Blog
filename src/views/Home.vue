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
      markdown_text: "",
      markdown_texts: [],
      markdown_content: [],
      mk_text: ""
    }
  },
  created() {
    this.axios.get('./markdown.md')
        .then(response => this.markdown_text = response.data);
    const ref_markdown = firebase.database().ref('/markdown');//"-MVU3vgLypjxus0REDJ9"
    ref_markdown.limitToLast(10).on('child_added', this.childAdded);

    const dataRef = firebase.database().ref('/markdown/-MVU3vgLypjxus0REDJ9');
    dataRef.once("value")
    .then(function(snapshot) {
      console.log(snapshot.child("markdown_text").val());
      document.querySelector('#content').innerHTML = marked(snapshot.child("markdown_text").val());
    });
  },
  methods: {
    childAdded(snap) {
      const markdown = snap.val()
      this.markdown_texts.push({
        key: snap.key,
        markdown_text: markdown.markdown_text
      })
    },
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
