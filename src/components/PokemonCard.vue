<template>
    <div v-if="pokemonData" class="pokemon-card">
      <div class="card-header">
        <h2>Pokémon</h2>
      </div>
      <div class="card-body">        
        <div class="image">
          <img :src="pokemonImage" alt="Image of the Pokémon" />
        </div>
        <div class="info">
          <p><strong>Name:</strong> {{ pokemonData.name | capitalize }}</p>
          <p><strong>ID:</strong> {{ pokemonData.id }}</p>
          <h3>Skills</h3>
          <ul>
            <li v-for="ability in pokemonAbilities" :key="ability">{{ ability }}</li>
          </ul>
        </div>
      </div>
      <div class="card-footer">
        <h3>Movements</h3>
        <ul class="movements">
          <li v-for="move in pokemonMoves" :key="move">{{ move }}</li>
        </ul>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'PokemonCard',
    props: {
      pokemonData: {
        type: Object,
        required: true,
      },
    },
    computed: {
      pokemonImage() {
        return this.pokemonData?.sprites?.front_default || '';
      },
      pokemonAbilities() {
        return this.pokemonData?.abilities?.map((ability) => ability.ability.name) || [];
      },
      pokemonMoves() {
        return this.pokemonData?.moves?.map((move) => move.move.name) || [];
      },
    },
    filters: {
      capitalize(value) {
        if (!value) return '';
        return value.charAt(0).toUpperCase() + value.slice(1);
      },
    },
  };
</script>
  
<style scoped>
  /* Card-specific styles */
.pokemon-card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin: 20px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 90%;
    text-align: left;
    padding: 20px;
}
.card-header h2 {
    font-size: 1.8rem;
    margin-top: 0.5em;    
    text-align: center;
    text-decoration-line: underline;
    text-decoration-style: wavy;
    text-decoration-color: #ff6347;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
}
li {
  margin-bottom: 10px;
  font-size: 0.9rem;
  background-color: #ffebd9;
  padding: 5px 10px;
  border-radius: 5px;
}
.card-body {
  display: flex;
  flex-direction: column;
  gap:20px;
  margin-bottom: 20px;
}
.info {
  margin-bottom: 20px;
}
.info p {
    font-size: 1.4em;
    line-height: 2;
    margin-inline: auto;
}
.info h3 {
  margin-top: 30px;
}

.image {
  display: flex;
  justify-content: center;
}
.image img {
  width: 150px;
  margin: 20px 0;
  border-radius: 50%;
  border: 3px solid #ff6347;
}
.card-footer .movements {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

@media (min-width: 768px) {
    .card-header h2{
        margin-bottom: 0.6em;
    }
    div .card-body {
      flex-direction: row;
      justify-content: center;
      gap: 20px; 
    }
    .info {
      flex: 2;
      text-align: left;
    }
    div .image {
      flex: 1;
      justify-content: center;
    }
    .image img {
      width: 300px;
    }
    ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    }
    li {
    font-size: 1rem;
    margin-bottom: 0;
    }
    footer {
    font-size: 1rem;
    }
    footer nav {
    gap: 30px;
    }
  }

@media (min-width: 1024px) {
  img {
    width: 250px;
  }
  ul {
    justify-content: flex-start;
    gap: 15px;
  }
}
  </style>  