const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

//Dê uma olhada no exemplo a seguir e pense como você poderia listar as chaves desse objeto:
for (let keys in coolestTvShow) {
  console.log(keys);
}
//utilizando o metodo bject.keys:
console.log(Object.keys(coolestTvShow));
let keys = Object.keys(coolestTvShow);
console.log(keys[3]);