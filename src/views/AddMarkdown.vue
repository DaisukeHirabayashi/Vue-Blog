<template>
  <v-app>
    <v-container fluid>
      <h1 class = "mt-2">記事の追加</h1>
      <v-form class="pa-4 pt-6" v-model="form">
        <v-textarea
          :label="input_title_data.label"
          auto-grow
          :rules="input_title_data.rules"
          rows="1"
          row-height="15"
          v-model="input_title_data.text"
        ></v-textarea>
        <v-textarea
          filled
          :rules="input_markdown_data.rules"
          :label="input_markdown_data.label"
          auto-grow
          v-model="input_markdown_data.text"
        ></v-textarea>
        <v-btn :disabled="!form" color="primary" @click="doSend">Submit</v-btn>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      user:this.$store.state.store_user,
      form:false,
      input_title_data:{
        label: "Title",
        text:'',
        rules: [v => !!v || "Title is required"]
      },
      input_markdown_data:{
        label: "Aritcle",
        text:'',
        rules: [v => !!v || "Aritcle is required"]
      }
    }
  },
  methods: {
    doSend() {
      const firedb_mark = firebase.database().ref('markdown');
      var newMarkdown = firedb_mark.push({markdown_text: this.input_markdown_data.text});
      console.log("new key: "+newMarkdown.key);
      firebase.database().ref('mk_title').push({
          markdown_title: this.input_title_data.text,
          id: newMarkdown.key
      });
      alert("投稿が完了しました");
      document.location.href = "./";
    }
  }
};
</script>

<style>
  @import "../assets/markdown.css";
</style>