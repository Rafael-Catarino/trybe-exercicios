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
