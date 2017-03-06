document.getElementById('formulario').addEventListener('submit', cadVeiculo);

function cadVeiculo(e) {
  var modelo =  document.getElementById('modelo').value;
  var placa = document.getElementById('placa').value;
  var time = new Date();

  carro = {
    modelo: modelo,
    placa: placa,
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
  document.getElementById('formulario').reset();
  mostrarPatio();
  e.preventDefault();

}

function apagar(pl) {
  var carros = JSON.parse(localStorage.getItem('patio'));

  for (var i = 0; i < carros.length; i++) {
    if (carros[i].placa == pl) {
      carros.splice(i, 1);
    }
    localStorage.setItem('patio', JSON.stringify(carros));
  }
  mostrarPatio();

}

function mostrarPatio() {
  var carros = JSON.parse( localStorage.getItem('patio') );
  var tabela = document.getElementById('resultado');

  tabela.innerHTML = "";
  for (var i = 0; i < carros.length; i++) {
    var modelo = carros[i].modelo;
    var placa = carros[i].placa;
    var hora = carros[i].hora;
    var minuto = carros[i].min;

   tabela.innerHTML += '<tr><td>'  + modelo +
             '</td><td>' + placa +
             '</td><td>' + hora + ':' + minuto+
             '</td><td>'+
             '<button class="btn btn-danger" onclick="apagar(\''+ placa +'\')">'+
             'Finalizar <i class="fa fa-trash-o" aria-hidden="true"></i></button>'+
            '</td></tr>';
  }
}
