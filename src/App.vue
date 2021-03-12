<template>
  <v-app>
    <!-- ナビゲーションバーの設定 -->
    <Navigation :title="nav_title" :nav_lists="nav_lists" :drawer="drawer"/>
    <!-- headerの情報 -->
    <v-app-bar color="primary" dark app clipped-left><!-- clippedで下にnavigationを配置 -->
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon><!-- ナビゲーションバーのボタン -->
      <v-toolbar-title>Vuetify</v-toolbar-title><!-- ナビゲーションバーの隣のアイコン -->

      <v-spacer></v-spacer>

      <v-toolbar-items><!-- headerの右側の情報 -->
        <v-btn text to="/enterprise">For Enterprise</v-btn>
        <HeaderMenu :menu_title="support_title" :menu_lists="supports"/>
      </v-toolbar-items>

    </v-app-bar>

    <v-main>
     <router-view />
    </v-main>

    <v-footer color="primary" dark app>
      Vuetify
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
          name : "Support",
          icon: "mdi-menu-down"
        },
        supports:[
          {
            name: 'Consulting and suppourt',
            icon: 'mdi-vuetify',
            link:'/consulting-and-support'
          },
          {
            name: 'Discord community',
            icon: 'mdi-discord',
            link:'/discord-community'},
          {
            name: 'Report a bug',
            icon: 'mdi-bug',
            link:'/report-a-bug'
          },
          {
            name: 'Github issue board',
            icon: 'mdi-github',
            link:'/guthub-issue-board'
          },
          {
            name: 'Stack overview',
            icon: 'mdi-stack-overflow',
            link:'/stack-overview'
          },
        ],
        nav_title: "Navigation lists",
        nav_lists:[
          {
            name: 'Getting Started',
            icon: 'mdi-speedometer',
            lists:[{
                name:'Quick Start',link:'/quick-start'
              },
              {
                name:'Pre-made layouts',link:'/pre-made-layouts'
              }
            ]
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
            name: 'Directives',
            icon: 'mdi-function',
            link:'/directives'
          },
          {
            name: 'Preminum themes',
            icon: 'mdi-vuetify',
            link:'/vuetify'
          },
        ]
    }
  }
}
</script>