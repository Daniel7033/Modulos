
//Función para guardar datos
function save() {
    try {
        var selectedProducto = parseInt($("#selected_producto").val());
        if (isNaN(selectedProducto) || selectedProducto == null) {
            console.error("Error con ciudad.");
            return;
        }
        var selectedVentas = parseInt($("#selected_ventas").val());
        if (isNaN(selectedVentas) || selectedVentas == null) {
            console.error("Error con ciudad.");
            return;
        }
        var dataDetalle = {
            'producto': { 'id': selectedProducto },
            'venta': { 'id': selectedVentas },
            'precio': parseInt($('#precio').val()),
            'cantidad': parseInt($('#cantidad').val()),
            'descuento': parseInt($('#descuento').val()),
            'iva': parseInt($('#iva').val()),
            'estado': true
        }
        var jsonData2 = JSON.stringify(dataDetalle);
        $.ajax({
            url: 'http://localhost:7033/shoe-store/v1/api/descripcion_ventas',
            method: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: jsonData2,
            success: function (dataDetalle) {
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
    $('#fechaVenta').val('');
    $('#producto').val('');
    $('#cantidad').val('');
    $('#precio').val('');
    $('#iva').val('');
    $('#descuento').val('');
    $('#estado').val('');
}

function tablas() {
    return loadData(), detallesVenta();
}

//Función para mostrar los datos en una tabla
function loadData() {
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
                        <td>${item.venta.id}</td> 
                        <td>${item.producto.id}</td> 
                        <td>${item.producto.nombreProducto}</td> 
                        <td>${item.producto.descripcion} </td> 
                        <td>${item.cantidad}</td>
                        <td>$${item.producto.precio}.00</td>
                        <td>$${item.subTotal === null ? '0' : item.subTotal}.00</td>
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

function autocomplete() {
    loadProducto(), loadVentas();
}
function loadProducto() { //Producto
    $.ajax({
        url: 'http://localhost:7033/shoe-store/v1/api/producto',
        method: "GET",
        dataType: 'json',
        success: function (response) {
            if (response.status && Array.isArray(response.data)) {
                var productos = response.data.map(function (producto) {
                    return {
                        label: `${producto.id}. ${producto.nombreProducto}`,
                        value: producto.id
                    };
                });

                $('#producto').autocomplete({
                    source: function (request, response) {
                        var results = $.ui.autocomplete.filter(productos, request.term);
                        if (!results.length) {
                            results = [{ label: 'No se encontraron resultados', value: null }];
                        }
                        response(results);
                    },
                    select: function (event, ui) {
                        $("#selected_producto").val(ui.item.value);
                        $("#producto").val(ui.item.label);
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
function loadVentas() { //Ventas
    $.ajax({
        url: 'http://localhost:7033/shoe-store/v1/api/ventas',
        method: "GET",
        dataType: 'json',
        success: function (response) {
            if (response.status && Array.isArray(response.data)) {
                var ventas = response.data.map(function (venta) {
                    var nombre = `${venta.cliente.nombreCliente} ${venta.cliente.apellidoCliente}`;
                    return {
                        label: `${venta.id}. ${nombre}`,
                        value: venta.id
                    };
                });

                $('#venta').autocomplete({
                    source: function (request, response) {
                        var results = $.ui.autocomplete.filter(ventas, request.term);
                        if (!results.length) {
                            results = [{ label: 'No se encontraron resultados', value: null }];
                        }
                        response(results);
                    },
                    select: function (event, ui) {
                        $("#selected_ventas").val(ui.item.value);
                        $("#venta").val(ui.item.label);
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
