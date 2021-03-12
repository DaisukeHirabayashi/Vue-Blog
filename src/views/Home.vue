<template>
  <v-app>
    <v-img :src="img_src" max-height="300">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <div class="box">
              <div>
                <h3 class="display-3 p3">ブログメモサイト</h3>
                <p>
                  <span class="subheading">自分用のメモや最近使った技術等のメモサイト</span>
                </p>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
  </v-app>
</template>

<script>

import marked from "marked"
import firebase from 'firebase'

export default {
  data() {
    return {
      img_src:require("../assets/cherry-blossom.jpg")
    }
  },
  created() {
    this.axios.get('./markdown.md')
        .then(response => this.markdown_text = response.data);
    const ref_markdown = firebase.database().ref('/markdown');//"-MVU3vgLypjxus0REDJ9"
    ref_markdown.limitToLast(10).on('child_added', this.childAdded);

    const dataRef = firebase.database().ref('/markdown/-MVaID_mMXoSeCGiKZbY');
    dataRef.once("value")
    .then(function(snapshot) {
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
      const firedb = firebase.database().ref('markdown');
      var newMarkdown = firedb.push({markdown_text: this.markdown_text});
      console.log("new key: "+newMarkdown.key);
    }
  }
};
</script>

<style>
  @import "../assets/markdown.css";
  .box {
  padding-top: 20px;
  padding-bottom: 10px;
  font-weight: bold;
  color: #6091d3; /*文字色*/
  background: #fff;
  border: solid 3px #6091d3; /*線*/
  border-radius: 10px; /*角の丸み*/
}
</style>
