<template>
    <footer class="footer">
      <p>&copy; 2024 Tolevats. All rights reserved.</p>
      <nav>
        <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a>
        <a href="https://github.com/Tolevats" target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
    </footer>
</template>
  
<script>
export default {
    name: 'AppFooter',
};
</script>
  
<style scoped>
footer {
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  padding: 1em 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  text-align: center;
  margin-top: 2em;
}
footer p {
  margin: 0;
  margin-bottom: 10px;
}
footer nav {
  margin-top: 5px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
footer nav a {
    color: #ff6347;
    margin: 0 10px;
    text-decoration: none;
  }

footer a {
  color: #ff6347;
  text-decoration: none;
  transition: color 0.3s ease;
}
footer a:hover {
  color: #e5533d;
}
</style>