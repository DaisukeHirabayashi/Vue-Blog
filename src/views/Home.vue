<template>
  <v-app>
    <v-container>
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
export default {
  created() {
    this.axios.get('./markdown.md')
        .then(response => document.querySelector('#content').innerHTML = marked(response.data));
  }
};
</script>

<style>
  @import "../assets/markdown.css";
</style>
