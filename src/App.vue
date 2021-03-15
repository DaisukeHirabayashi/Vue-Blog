<template>
  <v-app>
    <!-- ナビゲーションバーの設定 -->
    <Navigation :title="nav_title" :nav_lists="nav_lists" :drawer="drawer"/>
    <!-- headerの情報 -->
    <v-app-bar color="primary" dark app clipped-left><!-- clippedで下にnavigationを配置 -->
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon><!-- ナビゲーションバーのボタン -->
      <v-toolbar-title>Blog Memo(ブロメモ)</v-toolbar-title><!-- ナビゲーションバーの隣のアイコン -->

      <v-spacer></v-spacer>

      <v-toolbar-items><!-- headerの右側の情報 -->
        <v-btn v-if="!$store.state.store_user.uid" text @click="doLogin">管理者ログイン</v-btn>
        <v-btn v-else text @click="doLogout">ログアウト</v-btn>
        <HeaderMenu :menu_title="support_title" :menu_lists="supports"/>
      </v-toolbar-items>

    </v-app-bar>

    <v-main>
     <router-view />
    </v-main>

    <v-footer color="primary" dark app>
      Blog Memo(ブロメモ)
    </v-footer>

  </v-app>
</template>

<script>
import HeaderMenu from './components/Header_Menubar.vue';
import Navigation from "./components/Navigation.vue";
import firebase from 'firebase'
import { mapMutations } from "vuex";
import { USER_UPDATE } from "./store/mutation-types";

export default {
  components: {
    Navigation,
    HeaderMenu
  },
  data(){
    return{
        drawer: false,
        support_title:{
          name : "Contact...",
          icon: "mdi-menu-down"
        },
        supports:[
          {
            name: 'Twitter Account',
            icon: 'mdi-twitter',
            link:'/twitter'
          },
          {
            name: 'Github Code',
            icon: 'mdi-github',
            link:'/github'
          },
          {
            name: 'Administrator Login',
            icon: 'mdi-account-box',
            link:'/consulting-and-support'
          }
        ],
        nav_title: "Navigation lists",
        nav_lists:[
          {
            name: 'Home',
            icon: 'mdi-home',
            link:'/'
          },
          {
            name: 'Customization',
            icon: 'mdi-cogs',
            link:'/customization'
          },
          {
            name: 'Styles & animations',
            icon: 'mdi-palette',
            lists:[{
                name:'Colors',link:'/colors'
              },
              {
                name:'Content',link:'/content'
              },
              {
                name:'Display',link:'/display'
              }
            ]
          },
          {
            name: 'UI Components',
            icon: 'mdi-view-dashboard',
            lists:[{
                name:'API explorer',link:'/api-explorer'
              },
              {
                name:'Alerts',link:'/alerts'
              }
            ]
          },
          {
            name: 'Create Article',
            icon: 'mdi-file-document-edit',
            link:'/create_markdown'
          },
          {
            name: 'Github Code',
            icon: 'mdi-github',
            link:'/github'
          },
        ]
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
}
</script>