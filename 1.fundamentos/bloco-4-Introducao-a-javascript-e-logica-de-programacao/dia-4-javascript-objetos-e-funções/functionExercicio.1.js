//- Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function checkPalindrome(string) {
  let test = string.split("");
  test = test.reverse();
  test = test.join("")
  if (test === string) {
    return "true";
  }
  else {
    return "false"
  }
}

console.log(checkPalindrome("maram"));