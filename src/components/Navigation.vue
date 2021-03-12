<template>
    <!-- ナビゲーションバーの設定 -->
    <v-navigation-drawer app v-model="draw" clipped >
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-2"><!-- ナビゲーションバーのタイトル設定 -->
              {{ title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider><!-- 区切り線 -->

        <v-list nav dense><!-- ナビゲーションバーの個々の設定 -->
          <template v-for="nav_list in nav_lists">
            <!-- もしナビゲーションのアイテムがリストでなければリンクをつけるためにv-list-itemタグとする -->
            <v-list-item
              v-if="!nav_list.lists"
              :to="nav_list.link"
              :key="nav_list.name"
            >
              <v-list-item-icon>
                <v-icon>{{ nav_list.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{ nav_list.name }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- もしナビゲーションのアイテムにリストがあればv-list-groupタグとする -->
            <v-list-group
              v-else
              no-action
              :prepend-icon="nav_list.icon"
              :key="nav_list.name"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ nav_list.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <!-- ナビゲーションのアイテムのリストを表示する -->
              <v-list-item
                v-for="list in nav_list.lists"
                :key="list.name"
                :to="list.link"
              >
                <v-list-item-title>
                  {{ list.name }}
                </v-list-item-title>
              </v-list-item>
            </v-list-group>
          </template>
        </v-list>
      </v-container>
    </v-navigation-drawer>

</template>
<script>
export default {
  name: "Navigation",
  props: {
    nav_lists: Array,
    title: String,
    drawer:Boolean
  },
  computed: {
    draw :{
        get: function() {
        return this.drawer;
      },
      set: function(value) {
        this.$emit('input', value) // おやでは @input に書いたメソッドがよばれる。引数にvalue
      }
    }
  },
  methods: {
  }
};
</script>