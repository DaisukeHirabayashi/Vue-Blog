<template>
    <v-menu offset-y><!-- Get helpボタンの設定 -->
        <template v-slot:activator="{on}">
          <v-btn v-on="on" text>{{ menu_title.name }}<v-icon>{{ menu_title.icon }}</v-icon></v-btn><!-- ボタンの隣にアイコンの設置 -->
        </template>
        <v-list>
            <v-subheader>Get help</v-subheader>
            <v-list-item v-for="menu in menu_lists" :key="menu.name" :to="menu.link"><!-- Supportの構造体の中身を一つずつ取り出す -->
                <v-list-item-icon>
                    <v-icon>{{ menu.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ menu.name }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="!$store.state.store_user.uid" @click="doLogin()">
                <v-list-item-icon>
                    <v-icon>{{'mdi-account-box'}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Administrator Login</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item v-else @click="doLogout()">
                <v-list-item-icon>
                    <v-icon>{{'mdi-exit-to-app'}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
import firebase from 'firebase'
import { mapMutations } from "vuex";
import { USER_UPDATE } from "../store/mutation-types";

export default {
  name: "Header_Menubar",
  props: {
    menu_lists: Array,
    menu_title: Object
  },
  computed: {
    user_uid: function(){
      return this.$store.state.store_user.uid;
    }
  },
    methods: {
    // ログイン処理
    ...mapMutations({
      USER_UPDATE
    }),
    doLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(result => {
        // ログインしたユーザーの情報を取得します。
        if(result.user.uid == "mQyHVZi87AMkrbR7PXXaFHQAHWb2"){
          this.USER_UPDATE(result.user);
          console.log(this.$store.state.store_user);
        }
      }).catch(function(err) {
        console.error(err)
        // エラー処理
      });
    },
    doLogout() {
      this.USER_UPDATE({});
      console.log(this.$store.state.store_user);
      alert("ログアウトしました");
    },
  }
};
</script>