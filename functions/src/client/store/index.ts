import { createStore } from 'vuex';
import formData from "@client/store/formData";
import masterData from "@client/store/masterData";

// stateの型定義
export type State = {};

export default createStore<State>({
  modules: {
    formData,
    masterData
  }
});