document.getElementById('formulario').addEventListener('submit', cadVeiculo);

function cadVeiculo(e) {
  var modelo =  document.getElementById('modelo').value;
  var placa = document.getElementById('placa').value;
  var time = new Date();

  carro = {
    modelo: modelo,
    palca: placa,
    hora: time.getHours(),
    min: time.getMinutes()
  }
  if (localStorage.getItem('patio') === null) {
    var carros = [];
    carros.push(carro);
    localStorage.setItem('patio', JSON.stringify(carros));
  }
  else {
    var carros = JSON.parse(localStorage.getItem('patio'));
    carros.push(carro);
    localStorage.setItem('patio', JSON.stringify(carros));
  }

  e.preventDefault();

}
