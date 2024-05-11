
//Función para guardar datos
function save() {
    try {
        var selectedCliente = parseInt($("#selected_cliente").val());
        if (isNaN(selectedCliente) || selectedCliente == null) {
            console.error("Error con ciudad.");
            return;
        }
        var dataVenta = {
            'cliente': {'id': selectedCliente },
            'fechaVenta': ($('#fechaVenta').val()),
            'estado': parseInt($('#estado').val())
        };
        
        var jsonData1 = JSON.stringify(dataVenta);
        $.ajax({
            url: 'http://localhost:7033/shoe-store/v1/api/ventas',
            method: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: jsonData1,
            success: function (dataVenta) {
                alert("Guardado");
                loadData();
                clearData();
            },
            error: function (error) {
                console.error("Error: ", error);
            }
        });
    } catch {
        Error("Error al guardar los datos");
    }
}

// //Función para actualizar datos
// function update() {
//     try {
//         var selectedCliente = parseInt($("#selected_cliente").val());
//         if (isNaN(selectedCliente) || selectedCliente == null) {
//             console.error("Error con ciudad.");
//             return;
//         }
//         var selectedProducto = parseInt($("#selected_producto").val());
//         if (isNaN(selectedProducto) || selectedProducto == null) {
//             console.error("Error con ciudad.");
//             return;
//         }
//         var dataVenta = {
//             'cliente': {'id': selectedCliente },
//             'fechaVenta': parseInt($('#fechaVenta').val()),
//             'estado': parseInt($('#estado').val())
//         };
//         var dataDetalle = {
//             'producto': {'id': selectedProducto },
//             'precio': parseInt($('#precio').val()),
//             'cantidad': parseInt($('#cantidad').val()),
//             'descuento': parseInt($('#descuento').val()),
//             'iva': parseInt($('#iva').val()),
//             'estado': true
//         };
//         var jsonData1 = JSON.stringify(dataVenta);
//         var jsonData2 = JSON.stringify(dataDetalle);
//         var id = parseInt($('#id').val());
//         $.ajax({
//             url: 'http://localhost:7033/shoe-store/v1/api/ventas/' + id,
//             method: 'PUT',
//             dataType: 'json',
//             contentType: 'application/json',
//             data: jsonData1,
//             success: function (result) {
//                 alert("Actualizado");
//                 loadData();
//                 clearData();

//                 var btnAgregar = $('button[name="btnAgregar"]');
//                 btnAgregar.text('Guardar');
//                 btnAgregar.attr('onclick', 'save()');
//             },
//             error: function (error) {
//                 console.error("Error: ", error);
//             }
//         });
//         $.ajax({
//             url: 'http://localhost:7033/shoe-store/v1/api/descripcion_ventas/' + id,
//             method: 'PUT',
//             dataType: 'json',
//             contentType: 'application/json',
//             data: jsonData2,
//             success: function (result) {
//                 alert("Actualizado");
//                 loadData();
//                 clearData();

//                 var btnAgregar = $('button[name="btnAgregar"]');
//                 btnAgregar.text('Guardar');
//                 btnAgregar.attr('onclick', 'save()');
//             },
//             error: function (error) {
//                 console.error("Error: ", error);
//             }
//         });
//     } catch {
//         Error("Error al actualizar los registros");
//     }
// }

// //Función para buscar datos por "id"
// function findById(id) {
//     $.ajax({
//         url: 'http://localhost:7033/shoe-store/v1/api/ventas/' + id,
//         method: 'GET',
//         dataType: 'json',
//         success: function (data) {
//             $('#id').val(data.data.id);
//             $('#cliente').val(data.data.cliente.name);
//             $('#fechaVenta').val(data.data.fechaVenta);
//             $('#cantidad').val(data.data.cantidad);
//             $('#precio').val(data.data.precio);
//             $('#iva').val(data.data.iva);
//             $('#descuento').val(data.data.descuento);
//             $('#estado').val(data.data.estado === true ? 1 : 0);

//             var btnAgregar = $('button[name="btnAgregar"]');
//             btnAgregar.text('Actualizar');
//             btnAgregar.attr('onclick', 'update()');
//         },
//         error: function (error) {
//             console.error('Error: ', error);
//         }
//     });
// }

// //Función para eliminar datos de manera permanente
// function dropById(id) {
//     $.ajax({
//         url: 'http://localhost:7033/shoe-store/v1/api/producto/' + id,
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }).done(function (result) {
//         alert("Registro eliminado exitoso");
//         loadData();
//         clearData();
//     }).fail(function (xhr, status, error) {
//         console.error("Error al eliminar el registro:", error);
//     });
// }

// //Función para eliminar datos de manera lógica
// function deleteById(id) {

// }

//Función para limpiar datos
function clearData() {
    $('#cliente').val('');
    //$('#fechaVenta').val('');
    //$('#estado').val('');
}

function tablas(){
    return loadData(), detallesVenta();
}

//Función para mostrar los datos en una tabla
function loadData() {
    $.ajax({
        url: 'http://localhost:7033/shoe-store/v1/api/ventas',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            var html = '';
            var data = response.data;
            if (Array.isArray(data)) {
                data.forEach(function (item) {
                    html +=
                        `<tr>
                    <td>${item.id}</td> 
                <td>${item.cliente.nombreCliente} ${item.cliente.apellidoCliente} </td> 
                <td>${item.total}</td>
                <td>${item.fechaVenta}</td>
                <td>${item.estado === true ? 'PENDIENTE PAGO' || 'PAGADA' : 'CANCELADA'}</td>
                <td><button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#modal" onclick='detallesVenta()'>Ver Detalles</button></td>
            </tr>`
                });
            } else {
                console.error('Error.');
            }
            $('#resultData').html(html);
        },
        error: function (error) {
            console.error('Error: ', error);
        }
    });
}

function detallesVenta() {
    $.ajax({
        url: 'http://localhost:7033/shoe-store/v1/api/descripcion_ventas',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            var html = '';
            var data = response.data;
            if (Array.isArray(data)) {
                data.forEach(function (item) {
                    html +=
                        `<tr>
                <td>${item.producto.nombreProducto}</td> 
                <td>${item.producto.descripcion} </td> 
                <td>${item.producto.cantidad}</td>
                <td>${item.producto.precio}</td>
                <td>${item.subTotal}</td>
            </tr>`
                });
            } else {
                console.error('Error.');
            }
            $('#detallesData').html(html);
        },
        error: function (error) {
            console.error('Error: ', error);
        }
    });
}

function autocomplete(){
    return loadCliente();
}
function loadCliente() { //Cliente
    $.ajax({
        url: 'http://localhost:7033/shoe-store/v1/api/cliente',
        method: "GET",
        dataType: 'json',
        success: function (response) {
            if (response.status && Array.isArray(response.data)) {
                var clientes = response.data.map(function (cliente) {
                    return {
                        label: `${cliente.nombreCliente} ${cliente.apellidoCliente}`,
                        value: cliente.id
                    };
                });

                $('#cliente').autocomplete({
                    source: function (request, response) {
                        var results = $.ui.autocomplete.filter(clientes, request.term);
                        if (!results.length) {
                            results = [{ label: 'No se encontraron resultados', value: null }];
                        }
                        response(results);
                    },
                    select: function (event, ui) {
                        $("#selected_cliente").val(ui.item.value);
                        $("#cliente").val(ui.item.label);
                        return false; // Evita la actualización del valor del input después de la selección.
                    }
                });
            } else {
                console.error("No se obtuvo la lista de ciudades.");
            }
        },
        error: function (error) {
            console.error("Error en la solicitud: ", error);
        }
    });
}
//FECHA ACTUAL: Código guiado por Registro.js del repositorio principal Actividad. 6-04
document.addEventListener('DOMContentLoaded', function () {
    loadData();
    var fechaInput = document.getElementById('fechaVenta');
    var hoy = new Date();
    var dia = ('0' + hoy.getDate()).slice(-2); // Añade un cero si es necesario y toma los últimos dos dígitos
    var mes = ('0' + (hoy.getMonth() + 1)).slice(-2); // Los meses van de 0 a 11, por lo que se suma 1
    var ano = hoy.getFullYear();
    var fechaHoy = `${ano}-${mes}-${dia}`; // Formato necesario para inputs de tipo 'date'
    fechaInput.value = fechaHoy;
}); 