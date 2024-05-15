function convertir() {
    var dias = document.getElementById("dias").value;
    var semanas = dias / 7;
    var anos = dias / 365;

    document.getElementById("resultado").innerHTML = "<p>" + dias + " días equivalen a:</p>" +
                                                      "<p>" + semanas.toFixed(2) + " semanas</p>" +
                                                      "<p>" + anos.toFixed(2) + " años</p>";
  }