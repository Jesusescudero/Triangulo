function calcular() {
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);

    if (!esTrianguloValido(lado1, lado2, lado3)) {
      document.getElementById('resultado').innerHTML = "Los lados no forman un triángulo válido.";
      return;
    }

    var area = calcularArea(lado1, lado2, lado3);
    var perimetro = calcularPerimetro(lado1, lado2, lado3);
    var tipoTriangulo = determinarTipoTriangulo(lado1, lado2, lado3);

    document.getElementById('resultado').innerHTML = "Área: " + area + "<br>Perímetro: " + perimetro + "<br>Tipo de triángulo: " + tipoTriangulo;
  }

  function esTrianguloValido(lado1, lado2, lado3) {
    return lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1;
  }

  function calcularArea(lado1, lado2, lado3) {
    var semiperimetro = (lado1 + lado2 + lado3) / 2;
    var area = Math.sqrt(semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - lado3));
    return area.toFixed(2);
  }

  function calcularPerimetro(lado1, lado2, lado3) {
    var perimetro = lado1 + lado2 + lado3;
    return perimetro.toFixed(2);
  }

  function determinarTipoTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado1 === lado3) {
      return "Equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
}