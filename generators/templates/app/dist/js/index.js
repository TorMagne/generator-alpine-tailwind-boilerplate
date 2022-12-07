let indexApp = () => {
  return {
    open: false,
    pokemons: [],
    pokeUrl: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151',
    hei: null,

    async getPokemon() {
      try {
        const response = await fetch(this.pokeUrl);
        const pokemons = await response.json();
        this.pokemons = pokemons.results;
      } catch (error) {
        console.log(error);
      }
    },
  };
};
