<template>
  <v-app>
    <v-container>
      <h1 class = "mt-2">{{title}}</h1>
      <v-card class = "mt-5">
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
      title:this.$store.state.markdown_info.markdown_text
    }
  },
  created() {
    // this.axios.get('./markdown.md')
    //     .then(response => this.markdown_text = response.data);
    const dataRef = firebase.database().ref('/markdown/' + this.$store.state.markdown_info.markdown_key);
    dataRef.once("value")
    .then(function(snapshot) {
      document.querySelector('#content').innerHTML = marked(snapshot.child("markdown_text").val());
    });
  },
  methods: {
    // doSend() {
    //   const firedb_mark = firebase.database().ref('markdown');
    //   var newMarkdown = firedb_mark.push({markdown_text: this.markdown_text});
    //   console.log("new key: "+newMarkdown.key);
    //   firebase.database().ref('mk_title').push({
    //       markdown_title: "疲れた",
    //       id: newMarkdown.key
    //   });
    // }
  }
};
</script>

<style>
  @import "../assets/markdown.css";
</style>
