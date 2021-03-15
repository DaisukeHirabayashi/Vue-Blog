<template>
  <v-app>
    <!-- ナビゲーションバーの設定 -->
    <Navigation :title="nav_title" :nav_lists="nav_lists" :drawer="drawer"/>
    <!-- headerの情報 -->
    <v-app-bar color="primary" dark app clipped-left><!-- clippedで下にnavigationを配置 -->
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon><!-- ナビゲーションバーのボタン -->
      <v-toolbar-title>Blog-Memo</v-toolbar-title><!-- ナビゲーションバーの隣のアイコン -->

      <v-spacer></v-spacer>

      <v-toolbar-items><!-- headerの右側の情報 -->
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

export default {
  components: {
    Navigation,
    HeaderMenu
  },
  data(){
    return{
        drawer: false,
        support_title:{
          name : "Option",
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
            name: 'Create Article',
            icon: 'mdi-file-document-edit',
            link:'/create_markdown'
          },
          {
            name: 'Information',
            icon: 'mdi-account-question',
            lists:[{
                name:'Twitter Account',link:'/twitter'
              },
              {
                name:'Github Code',link:'/github'
              }
            ]
          },
        ]
    }
  }
}
</script>