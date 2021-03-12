<template>
  <v-app>
    <!-- ナビゲーションバーの設定 -->
    <v-navigation-drawer app v-model="drawer" clipped >
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-2">
              Navigation lists
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-group
          v-for="nav_list in nav_lists"
          :key="nav_list.name"
          :prepend-icon="nav_list.icon"
          no-action
          :append-icon="nav_list.lists ? undefined : ''"><!-- no-action:paddingの設定,append-icon:階層構造があるかの確認 -->
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="list in nav_list.lists" :key="list" :to="list.link">
              <v-list-item-content>
                <v-list-item-title>{{ list.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>

      </v-container>
    </v-navigation-drawer>

    <!-- headerの情報 -->
    <v-app-bar color="primary" dark app clipped-left><!-- clippedで下にnavigationを配置 -->
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon><!-- ナビゲーションバーのボタン -->
      <v-toolbar-title>Vuetify</v-toolbar-title><!-- ナビゲーションバーの隣のアイコン -->

      <v-spacer></v-spacer>

      <v-toolbar-items><!-- headerの右側の情報 -->
        <v-btn text to="/enterprise">For Enterprise</v-btn>

        <v-menu offset-y><!-- Get helpボタンの設定 -->
          <template v-slot:activator="{on}">
          <v-btn v-on="on" text>Support<v-icon>mdi-menu-down</v-icon></v-btn><!-- ボタンの隣にアイコンの設置 -->
          </template>
          <v-list>
            <v-subheader>Get help</v-subheader>
              <v-list-item v-for="support in supports" :key="support.name" :to="support.link"><!-- Supportの構造体の中身を一つずつ取り出す -->
                <v-list-item-icon>
                <v-icon>{{ support.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                <v-list-item-title>{{ support.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
          </v-list>
        </v-menu>

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
export default {
  data(){
    return{
        drawer: false,
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
            icon: 'mdi-function'
          },
          {
            name: 'Preminum themes',
            icon: 'mdi-vuetify'
          },
        ]
    }
  }
}
</script>