const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

/*como faríamos para listar os valores de cada chave do nosso objeto coolestTvShow ? */

for (let key in coolestTvShow) {
  console.log(coolestTvShow[key]);
}

//Outra forma para fazer:

console.log(Object.values(coolestTvShow));
