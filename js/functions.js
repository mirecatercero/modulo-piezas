/****************************************************************************************************************************************************
Autor:Benjamín Arturo López Tovar
Fecha:23/05/2019
Módulo contador de piezas revisadas
***************************************************************************************************************************************************/

$(document).ready(function(){//JQuery

  function actualizaPiezas(){//creamos función

    var fi = moment("April 1st, 2019", "MMM-DD-YYYY"); //variable para almacenar la fecha incial: 01 de abril del 2019 00:00:00
    var hoy=moment(); //variable para almacenar la fecha del sistema.
    var n = 2000000; // almacenamos piezas totales revisadas (01 de abril)
    var i = 1000; //variable incremento, representa las 1000 piezas por hora
    var horas=hoy.diff(fi,"hours"); // MEDIANTE LA FUNCIÓN diff, obtenemos el número de horas transcurridas desde las 0 horas del 1 de abril, hasta una hora antes de la hora del sistema.

    var totalPiezas = n + (horas * i);//mutiplicamos las horas transcurridas por 1000 (1000 piezas por hora) y le sumamos las 2,000,000 de piezas ya hechas.
    $("#hora").text(totalPiezas+" M");//mandamos el resultado al h1 que tiene un ID=hora.

  }
  setInterval(actualizaPiezas, 1000);// en intervalos de 1 segundo, la función se ejecuta; de esta manera se resuelve de manera simple el cambio de cada hora.

});
