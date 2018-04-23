function dimeFecha(laFecha) {
  var monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  var dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
  ];
  if (laFecha === null) {
    f_texto = "";
  } else {
    fecha = laFecha.split('/');
    var day = fecha[0];
    var monthIndex = fecha[1] - 1;
    var year = fecha[2];
    var date = new Date();
    date.setDate(day);
    date.setFullYear(year);
    date.setMonth(monthIndex);
    var dia = date.getDay();
    f_texto = dias[dia] + ', ' + day + ' de ' + monthNames[monthIndex] + ' del ' + year;
  }
  return f_texto;
}

function dimeEdadDeCURP(curp) {
  anio = curp.substr(4, 2);
  mes = curp.substr(6, 2);
  dia = curp.substr(8, 2);
  fecha_hoy = new Date();
  ahora_ano = fecha_hoy.getFullYear();
  ahora_mes = fecha_hoy.getMonth();
  ahora_dia = fecha_hoy.getDate();
  ahora_anio = String(ahora_ano);
  inicio_anio = ahora_anio.substr(0, 2);
  ahora_anio = ahora_anio.substr(2, 2);
  if (ahora_anio < anio) {
    anio = inicio_anio - 1 + '' + anio;
  } else {
    anio = inicio_anio + '' + anio;
  }
  edad = ahora_ano - anio;
  if (ahora_mes < (mes - 1)) {
    edad--;
  }
  if (((mes - 1) == ahora_mes) && (ahora_dia < dia)) {
    edad--;
  }
  if (edad > 1900) {
    edad -= 1900;
  }
  return edad;
}

function dimeFechaNacCURP(curp, tipo) {
  if (tipo === undefined) {
    tipo = 0;
  }

  anio = curp.substr(4, 2);
  mes = curp.substr(6, 2);
  dia = curp.substr(8, 2);

  fecha_hoy = new Date();
  ahora_ano = fecha_hoy.getFullYear();
  ahora_mes = fecha_hoy.getMonth();
  ahora_dia = fecha_hoy.getDate();
  ahora_anio = String(ahora_ano);
  inicio_anio = ahora_anio.substr(0, 2);
  ahora_anio = ahora_anio.substr(2, 2);
  if (ahora_anio < anio) {
    anio = inicio_anio - 1 + '' + anio;
  } else {
    anio = inicio_anio + '' + anio;
  }

  if (tipo == 1) {
    meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
    fecha = dia + ' / ' + mes[mes] + ' / ' + anio;
  } else {
    fecha = dia + '/' + mes + '/' + anio;
  }
  return fecha;
}
