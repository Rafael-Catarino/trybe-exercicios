let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (let cont in info) {
  if (cont === "recorrente" && info[cont] === "Sim" && info2[cont] === "Sim") {
    console.log("Ambos recorrentes.");
  }
  else if (cont === "recorrente" && info[cont] === "Sim" && info2[cont] === "Sim") {
    console.log("Ambos não são recorrentes.");
  }
  else {
    console.log(info[cont] + " e " + info2[cont]);
  }
}
