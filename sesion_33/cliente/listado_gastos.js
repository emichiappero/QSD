$(document).ready(function () {
  obtener_gastos();

  //Petición por AJAX para solicitar los documentos de la BD y agregarlos a la tabla
  function obtener_gastos() {
    $.ajax({
      url: "http://localhost:3000/obtener_gastos",
      method: "get",
      success: function (resp) {
        console.log(resp);
        armar_tabla(resp);
        calcular_total(resp);
      },
    });
  }

  function armar_tabla(documentos) {
    $("#tabla").empty();
    let cabecera =
      "<thead><th>#</th><th>Fecha</th><th>Descripcion</th><th>Monto</th><th>opciones</td></thead>";

    let tr_inicio = "<tr>";
    let tr_fin = "</tr>";

    let td_inicio = "<td>";
    let td_fin = "</td>";

    let tabla;
    let contador = 0;
    let color;
    for (let i = 0; i < documentos.length; i++) {
      color = documentos[i].tipo == "gasto" ? "red" : "green";

      contador = i + 1;
      tabla +=
        tr_inicio +
        td_inicio +
        contador +
        td_fin +
        td_inicio +
        documentos[i].fecha +
        td_fin +
        td_inicio +
        documentos[i].descripcion +
        td_fin +
        "<td style='color:" +
        color +
        "'>" +
        documentos[i].monto +
        td_fin +
        td_inicio +
        "<button class='btn_editar' data-id='" +
        documentos[i]._id +
        "'>Editar</button>" +
        "<button class='btn_eliminar' data-id='" +
        documentos[i]._id +
        "'>Eliminar</button>" +
        td_fin +
        tr_fin;
    }

    tabla = cabecera + "<tbody>" + tabla + "</tbody>";

    $("#tabla").append(tabla);
  }

  //Evento click para los botones Editar
  $("#tabla").on("click", ".btn_editar", function () {
    let id = $(this).data("id");
    alert("Editando el documento " + id);
  });

  //Evento click para los botones Eliminar
  $("#tabla").on("click", ".btn_eliminar", function () {
    let id = $(this).data("id");
    $.ajax({
      url: "http://localhost:3000/eliminar/" + id,
      method: "delete",
      success: function (respuesta) {
        alert(respuesta);
        obtener_gastos(); //pedir nuevamente los datos de la BD
      },
    });
  });

  //Funcion para calcular el total
  function calcular_total(datos) {
    let total = 0;
    let signo;
    let color;
    for (let i = 0; i < datos.length; i++) {
      if (datos[i].tipo == "gasto") {
        signo = -1;
      } else {
        signo = 1;
      }

      total += signo * datos[i].monto;

      color = total > 0 ? "green" : "red";
    }
    $("#total").html(
      "TOTAL " + "<span style='color: " + color + "'>$ " + total + "</span>"
    );

    /* $("#total")
      .text("TOTAL $" + total)
      .css("color", color); */
  }
});
