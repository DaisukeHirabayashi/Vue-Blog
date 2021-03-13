<template>
  <v-app>
    <form action="" class="form">
      <textarea v-model="input_title" :disabled="!user.uid"></textarea>
    </form>
    <form action="" @submit.prevent="doSend" class="form">
      <textarea v-model="input" :disabled="!user.uid"></textarea>
      <button type="submit" :disabled="!user.uid" class="send-button">Send</button>
    </form>
  </v-app>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      user:this.$store.state.store_user,
      input:'',
      input_title:''
    }
  },
  methods: {
    doSend() {
      const firedb_mark = firebase.database().ref('markdown');
      var newMarkdown = firedb_mark.push({markdown_text: this.input});
      console.log("new key: "+newMarkdown.key);
      firebase.database().ref('mk_title').push({
          markdown_title: this.input_title,
          id: newMarkdown.key
      });
    }
  }
};
</script>

<style>
  @import "../assets/markdown.css";
</style>