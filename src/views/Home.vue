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
    <v-container>
      <v-toolbar color="cyan" dark>
        <v-toolbar-title>最新の三件</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-item-group color="primary">
          <template v-for="markdown_title in markdown_titles">
            <v-list-item :key="markdown_title.markdown_key">
              <v-list-item-icon>
                <v-icon>{{"mdi-menu-right"}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  v-text="markdown_title.markdown_text"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider :key="`second-${markdown_title.markdown_key}`"></v-divider><!-- 区切り線 -->
          </template>
        </v-list-item-group>
      </v-list>
    </v-container>
  </v-app>
</template>

<script>

import firebase from 'firebase'

export default {
  data() {
    return {
      markdown_titles: [],
      img_src:require("../assets/cherry-blossom.jpg")
    }
  },
  created() {
    const ref_markdown_titles = firebase.database().ref('/mk_title');
    ref_markdown_titles.limitToLast(3).on('child_added', this.childAdded);
  },
  methods: {
    childAdded(snap) {
      const markdown = snap.val()
      this.markdown_titles.push({
        key: snap.key,
        markdown_key:markdown.id,
        markdown_text: markdown.markdown_title
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
