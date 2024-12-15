import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemon: null,
  },
  mutations: {
    setName(state, pokemonData) {
      state.pokemon = pokemonData; // Update only the name property for now
    },
  },
  actions: {
    async getPokemon({ commit }, name) {
      const query = name.trim() || 'pikachu';
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        if (!response.ok) throw new Error('Pokémon not found');
        const data = await response.json();
        commit('setName', data); // Update state with pokemon name
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
        alert(error.message);
      }
    },
  },
  getters: {
    pokemon: (state) => state.pokemon,
  },
});