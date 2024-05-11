
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

//Función para limpiar datos
function clearData() {
    $('#cliente').val('');
    
    var btnAgregar = $('button[name="btnAgregar"]');
    btnAgregar.text('Guardar');
    btnAgregar.attr('onclick', 'save()');
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
                <td><button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#modal" onclick='detallesVenta(${item.id})'>Ver Detalles</button></td>
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

function detallesVenta(id) {
    console.log(id); //Me muestra el id de la venta
    $.ajax({
        url: 'http://localhost:7033/shoe-store/v1/api/descripcion_ventas/' + id, //Se indefine por el controlador del backend
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            console.log(id); //Me muestra el id de manera indefinida
            var html = '';
            var data = response.data;
            if (Array.isArray(data)) {
                data.forEach(function (item) {
                    html +=
                        `<tr>
                <td>${item.producto.nombreProducto}</td> 
                <td>${item.producto.descripcion} </td> 
                <td>${item.producto.cantidad}</td>
                <td>$${item.producto.precio}.00</td>
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