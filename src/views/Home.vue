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
    <DisplayList :list_title="'最新の三件'" :menu_lists="markdown_new_titles"/>
    <DisplayList :list_title="'全ての記事'" :menu_lists="markdown_titles"/>
  </v-app>
</template>

<script>

import firebase from 'firebase'
import DisplayList from '../components/Disp_List.vue';

export default {
  components: {
    DisplayList
  },
  data() {
    return {
      markdown_titles: [],
      markdown_new_titles: [],
      img_src:require("../assets/cherry-blossom.jpg")
    }
  },
  created() {
    const ref_new_markdown_titles = firebase.database().ref('/mk_title');
    ref_new_markdown_titles.limitToLast(3).on('child_added', this.childNewAdded);

    const ref_markdown_titles = firebase.database().ref('/mk_title');
    ref_markdown_titles.limitToLast(10).on('child_added', this.childAdded);
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
    childNewAdded(snap) {
      const markdown = snap.val()
      this.markdown_new_titles.push({
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
