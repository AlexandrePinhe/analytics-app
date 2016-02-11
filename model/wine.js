// app/models/wine.js

// dependencias
var mongoose = require('mongoose');

// cria schema do mongo
var wineSchema = mongoose.Schema({
  //Aqui seria melhor avaliar se descreve total e precisamente o que a variável representa
  //por exemplo "funçãoNome"
  name: String,
  year: String,
  grapes: String,
  country: String,
  region: String,
  description: String,
  picture: String
});

// exporta o resultado do modelo
module.exports = mongoose.model('Wine', wineSchema);
