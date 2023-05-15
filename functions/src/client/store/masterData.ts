import { areas, genders } from '@util/masterData';
interface masterDataState {
  areas: Area[],
  genders: Gender[]
}
const state = (): masterDataState => ({
  areas: areas,
  genders: genders
});

const getters = {
  selectedArea: (state: masterDataState) => (value: number): Area | null => {
    return state.areas.find(area => area.value == value) || null;
  },
  selectedGender: (state: masterDataState) => (value: number): Gender | null => {
    return state.genders.find(gender => gender.value == value) || null;
  },
}

export default {
  namespaced: true,
  state,
  getters
}