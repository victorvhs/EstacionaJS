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
  console.log(carro)

  e.preventDefault();

}
