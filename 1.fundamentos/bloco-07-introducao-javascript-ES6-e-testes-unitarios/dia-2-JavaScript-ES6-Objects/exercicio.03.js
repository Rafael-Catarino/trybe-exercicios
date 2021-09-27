/**Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade" */
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};


function listSkills(params) {
  for (let abilidades in params) {
    console.log(`${abilidades}: ${params[abilidades]}`);
  }
}

listSkills(student1);

//Outra forma:

/**const listSkills = (params) => {
  const skills = Object.keys(params);
  for(let abilidade in skils){
    console.log(`${skills[abilidade]}, Nível: ${params[skills[abiliadade]]}`);
  }
};
*/