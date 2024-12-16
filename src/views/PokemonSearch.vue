<template>
  <div class="pokemon-search">
    <h1>Pokémon Guide</h1>
    <div class="search-section">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Enter name or ID of the Pokemon" 
      />
      <button @click="fetchPokemon">Search</button>
    </div>
    <PokemonCard v-if="pokemonData" :pokemonData="pokemonData"/>
    <AppFooter />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PokemonCard from '@/components/PokemonCard.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'PokemonSearch',
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    ...mapGetters(['pokemon']),
    pokemonData() {
      return this.pokemon; // Access Pokémon data from the store
    },
  },
  methods: {
    async fetchPokemon() {
      await this.$store.dispatch('getPokemon', this.searchQuery); // Call the action to fetch Pokémon data
    },
  },
  components: {
    PokemonCard,
    AppFooter,
  },
  created() {
    this.fetchPokemon(); //loads pikachu by default
  },
};
</script>

<style scoped>
/* Base styles (Mobile First) */
.pokemon-search {
  font-family: 'Arial', sans-serif;
  text-align: center;
  background-color: #f4f4f9;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

h1 {
  margin-top: 1.5em;
  font-size: 1.8rem;
  font-family: 'Press Start 2P', cursive;
  color: #ffcc00; /* Pokémon yellow */
  text-shadow: 2px 2px #333;
  margin-bottom: 1.8em;
  text-align: center;
}

.search-section {
  margin: 20px;
}

input {
  padding: 10px;
  font-size: 0.7rem;
  width: 80%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
  margin-bottom: 10px; /* Separación clara con otros elementos */
}
input:focus {
  border-color: #ff6347;
}

button {
  padding: 10px 20px;
  font-size: 0.8rem;
  color: #fff;
  background-color: #ff6347;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #e5533d;
}

/* Styles for larger screens */
@media (min-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
  input {
    font-size: 1.1rem;
    width: 300px;
  }
  button {
    font-size: 1.2rem;
    margin-left: 10px;
  }
}

@media (min-width: 1024px) {
  .pokemon-search {
    justify-content: flex-start;
  }
  h1 {
    font-size: 3rem;
  }
}
</style>