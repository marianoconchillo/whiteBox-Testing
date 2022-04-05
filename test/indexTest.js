import { assert } from "chai";
import { btnDel, positivoNegativo, calcular } from "../src/index.js";

describe("Calculadora", () => {
  it("La función debería retornar números positivos si se envían negativos y viceversa", () => {
    assert.equal(positivoNegativo("-1"), "1");
    assert.equal(positivoNegativo("1"), "-1");
    assert.equal(positivoNegativo("-0"), "0");
    assert.equal(positivoNegativo("100"), "-100");
  });

  it("La función debería eliminar el último número escrito en pantalla", () => {
    assert.equal(btnDel("1234"), "123");
    assert.equal(btnDel("12.5"), "12.");
    assert.equal(btnDel("12."), "12");
    assert.equal(btnDel("5"), "0");
    assert.equal(btnDel("0"), "0");
    assert.equal(btnDel("-1.5"), "-1.");
    assert.equal(btnDel("-1"), "0");
    // assert.equal(btnDel("Error"), "0");
  });

  it("La función debería retornar el resultado según los números ingresados y la operación elegida", () => {
    assert.equal(calcular("5", "+", "6"), "11");
    assert.equal(calcular("8", "-", "9"), "-1");
    assert.equal(calcular("7", "*", "8"), "56");
    assert.equal(calcular("5", "/", "0"), "Error");
    assert.equal(calcular("5", "/", "2"), "2.5");
  });
});
