//Agora inverta o lado do triângulo.Por exemplo:
//n = 5
//    *
//   **
//  ***
// ****
//*****

let n = 5;
let asteristico

for (let cont = 0; cont < n; cont += 1) {
  if (cont === 0) {
    asteristico = "    *";
    console.log(asteristico);
  }
  else if (cont === 1) {
    asteristico = "   **";
    console.log(asteristico);
  } 
  else if (cont === 2) {
    asteristico = "  ***";
    console.log(asteristico);
  } 
  else if (cont === 3) {
    asteristico = " ****";
    console.log(asteristico);
  } 
  else {
    asteristico = "*****";
    console.log(asteristico);
  }
}

// Outra forma de fazer:

// OBS: Eu consegui chegar nessa forma atravez do gabarito.
let n = 5;
let asteristico = "*";
let espaço = n;
let triangulo = "";

for (let linha = 0; linha < n; linha += 1) {
  for (let coluna = 0; coluna <= n; coluna += 1) {
    if (coluna < espaço) {
      triangulo += " ";
    }
    else {
      triangulo += asteristico;
    }
  }
  console.log(triangulo);
  triangulo = "";
  espaço -= 1;
}
