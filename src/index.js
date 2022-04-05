
// Esta es la funcionalidad del botón que elimina el último número
export const btnDel = (numero) => {
  if (!numero.startsWith("-")) {
    if (numero !== "0" && numero.length > 1) {
      numero = numero.slice(0, -1);
    } else {
      numero = "0";
    }
  } else {
    if (numero.length > 2) {
      numero = numero.slice(0, -1);
    } else {
      numero = "0";
    }
  }
  return numero;
};

// Esta funcionalidad es la del botón +/-
export const positivoNegativo = (numero) => {
  if (numero.includes("-")) {
    numero = numero.replace("-", "");
  } else {
    numero = "-" + numero;
  }
  return numero;
};

// Esta función realiza las operaciones aritméticas
export const calcular = (num, operacion, numAux) => {
  const num1 = Number(num);
  const num2 = Number(numAux);

  let resultado = "";

  switch (operacion) {
    case "+":
      resultado = `${num1 + num2}`;
      break;

    case "-":
      resultado = `${num1 - num2}`;
      break;

    case "*":
      resultado = `${num1 * num2}`;
      break;

    case "/":
      if (num2 === 0) {
        resultado = "Error";
      } else {
        resultado = `${num1 / num2}`;
      }
      break;
  }
  return resultado;
};
