import * as types from "./mutation-types"; //mutation-typesをImportします

export const state = {
    markdown_info: {},
    store_user:{}
};

export const mutations = {
    [types.MARKDOWN_UPDATE](state, payload) {
        state.markdown_info = payload;
    },
    [types.USER_UPDATE](state, payload) {
        state.store_user = payload;
    }
};