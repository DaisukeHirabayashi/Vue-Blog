<template>
    <v-container>
      <v-toolbar color="cyan" dark>
        <v-toolbar-title>{{list_title}}</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-item-group color="primary">
          <template v-for="menu_list in menu_lists">
            <v-list-item :key="menu_list.markdown_key">
              <v-list-item-icon>
                <v-icon>{{"mdi-menu-right"}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  v-text="menu_list.markdown_text"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider :key="`second-${menu_list.markdown_key}`"></v-divider><!-- 区切り線 -->
          </template>
        </v-list-item-group>
      </v-list>
    </v-container>
</template>

<script>
export default {
  name: "Display_List",
  props: {
    menu_lists: Array,
    list_title: String
  }
};
</script>