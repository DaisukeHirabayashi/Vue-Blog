import * as types from "./mutation-types"; //mutation-typesをImportします

export const state = {
    markdown_id: ""
};

export const mutations = {
    [types.MARKDOWN_UPDATE](state, payload) {
        state.markdown_id = payload;
    }
};