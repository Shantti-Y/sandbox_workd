import { createStore, Store, useStore as baseUseStore } from 'vuex';
import formData from "@client/store/formData";
import masterData from "@client/store/masterData";

// stateの型定義
type State = {};

// storeをprovide/injectするためのキー
export const key = Symbol();

export const useStore = () => {
  return baseUseStore(key);
}


export default createStore<State>({
  modules: {
    formData,
    masterData
  }
});