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
        </v-list>
    </v-menu>
</template>

<script>
export default {
  name: "Header_Menubar",
  props: {
    menu_lists: Array,
    menu_title: Object
  }
};
</script>