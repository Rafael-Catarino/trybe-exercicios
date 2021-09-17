function createOptionStates() {
  const createEstado = document.querySelector('#estado');
  const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < estados; index += 1) {
    const createOption = document.createElement('option');
    createEstado.appendChild(createOption).innerText = estados[index];
    createEstado.appendChild(createOption).value = estados[index];
  }
}

window.onload = function () {
  createOptionStates();
}