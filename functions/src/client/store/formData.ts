interface FormDataState {
  area: number | null;
  email: string;
  firstName: string;
  gender: number | null;
  lastName: string;
}

const actions = {
  updateArea: ({ commit }, value: number | null) => {
    commit('setArea', value);
  },
  updateEmail: ({ commit }, value: string) => {
    commit('setEmail', value);
  },
  updateFirstName: ({ commit }, value: string) => {
    commit('setFirstName', value);
  },
  updateGender: ({ commit }, value: number | null) => {
    commit('setGender', value);
  },
  updateLastName: ({ commit }, value: string) => {
    commit('setLastName', value);
  }
}

const mutations = {
  setArea(state, value: number | null){
    state.area = value;
  },
  setEmail(state, value: string){
    state.email = value;
  },
  setFirstName(state, value: string){
    state.firstName = value;
  },
  setGender(state, value: number | null){
    state.gender = value;
  },
  setLastName(state, value: string){
    state.lastName = value;
  }
}

export default {
  namespaced: true,
  state: (): FormDataState => ({
    area: null,
    email: '',
    firstName: '',
    gender: null,
    lastName: ''
  }),
  actions,
  mutations
}