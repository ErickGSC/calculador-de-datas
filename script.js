let result = null;
const resultado = document.getElementById("resultado");

function diffDias() {
  const d1 = document.getElementById("data1").value;
  const d2 = document.getElementById("data2").value;

  const diffInMs = new Date(d2) - new Date(d1);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  result = diffInDays;
  resultado.innerHTML = `${diffInDays} dias.`;
  console.log(diffInMs);
}

const botao = document.getElementById("botao");

botao.addEventListener("click", diffDias);
