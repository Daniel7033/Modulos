//Función para retornar todos los enums/datos quemados
function enums() {
    return loadTipo(), loadDireccion();
}
//Funiones enums/datos quemados
function loadTipo() {
    $.ajax({
        url: 'http://localhost:7033/shoe-store/v1/api/enum/tipo_identificacion',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            var html = "";
            response.forEach(function (item) {
                html += `<option value="${item}">${item}</option>`
            });
            $("#tipoIdentificacion").html(html);
        },
        error: function (error) {
            console.error("Error: ", error);
        },
    });
}
function loadDireccion() {
    $.ajax({
        url: 'http://localhost:7033/shoe-store/v1/api/enum/nomenclatura',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            var html = "";
            response.forEach(function (item) {
                html += `<option value="${item}">${item}</option>`;
            });
            $('#direccion').html(html);
        },
        error: function (error) {
            console.error("Error: ", error);
        }
    });
}

//Función para guardar datos
function save() {
    var data = {
        'tipoIdentificacion': $('#tipoIdentificacion').val(),
        'identificacion': parseInt($('#identificacion').val()),
        'nombreCliente': $('#nombreCliente').val(),
        'apellidoCliente': $('#apellidoCliente').val(),
        'telefono': parseInt($('#telefono').val()),
        'ciudad': $('#ciudad').val(),
        'direccion': $('#direccion').val() + ' No. ' + $('#numeral').val() + ' - ' + $('#numeral2').val() + '. ' + $('#descripcion').val(),
        'estado': parseInt($('#estado').val())
    };
    var jsonData = JSON.stringify(data);
    $.ajax({
        url: 'http://localhost:7033/shoe-store/v1/api/cliente',
        method: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: jsonData,
        success: function (data) {
            alert("Guardado");
            loadData();
            clearData();
        },
        error: function (error) {
            console.error("Error: ", error);
        }
    });
}

//Función para actualizar datos
function update() {
    var data = {
        'tipoIdentificacion': $('#tipoIdentificacion').val(),
        'identificacion': parseInt($('#identificacion').val()),
        'nombreCliente': $('#nombreCliente').val(),
        'apellidoCliente': $('#apellidoCliente').val(),
        'telefono': parseInt($('#telefono').val()),
        'ciudad': $('#ciudad').val(),
        'direccion': $('#direccion').val() + ' No. ' + $('#numeral').val() + ' - ' + $('#numeral2').val() + '. ' + $('#descripcion').val(),
        'estado': parseInt($('#estado').val())
    };
    var id = parseInt($('#id').val());
    var jsonData = JSON.stringify(data);
    $.ajax({
        url: 'http://localhost:7033/shoe-store/v1/api/cliente/' + id,
        method: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        data: jsonData,
        success: function (result) {
            alert("Actualizado");
            loadData();
            clearData();

            var btnAgregar = $('button[name="btnAgregar"]');
            btnAgregar.text('Guardar');
            btnAgregar.attr('onclick', 'save()');
        },
        error: function (error) {
            console.error("Error: ", error);
        }
    });
}

//Función para buscar datos por "id"
function findById(id) {
    $.ajax({
        url: 'http://localhost:7033/shoe-store/v1/api/cliente/' + id,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            $('#id').val(data.data.id);
            $('#tipoIdentificacion').val(data.data.tipoIdentificacion);
            $('#identificacion').val(data.data.identificacion);
            $('#nombreCliente').val(data.data.nombreCliente);
            $('#apellidoCliente').val(data.data.apellidoCliente);
            $('#telefono').val(data.data.telefono);
            $('#ciudad').val(data.data.ciudad);
            $('#direccion').val(data.data.direccion);
            $('#estado').val(data.data.estado === true ? 1 : 0);

            var btnAgregar = $('button[name="btnAgregar"]');
            btnAgregar.text('Actualizar');
            btnAgregar.attr('onclick', 'update()');
        },
        error: function (error) {
            console.error('Error: ', error);
        }
    });
}

//Función para eliminar datos de manera permanente
function dropById(id) {
    $.ajax({
        url: 'http://localhost:7033/shoe-store/v1/api/cliente/' + id,
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (result) {
        alert("Registro eliminado exitoso");
        loadData();
        clearData();
    }).fail(function (xhr, status, error) {
        console.error("Error al eliminar el registro:", error);
    });
}

//Función para eliminar datos de manera lógica
function deleteById(id) {

}

//Función para limpiar datos
function clearData() {
    //$('#tipoIdentificacion').val('');
    $('#identificacion').val('');
    $('#nombreCliente').val('');
    $('#apellidoCliente').val('');
    $('#telefono').val('');
    $('#ciudad').val('');
    //$('#direccion').val('');
    $('#numeral').val(''); 
    $('#numeral2').val("");
    $('#descripcion').val("");
    //$('#estado').val('');
}

//Función para mostrar los datos en una tabla
function loadData() {
    $.ajax({
        url: 'http://localhost:7033/shoe-store/v1/api/cliente',
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
                    <td>${item.tipoIdentificacion}</td> 
                    <td>${item.identificacion}</td>
                    <td>${item.nombreCliente}</td>
                    <td>${item.apellidoCliente}</td>
                    <td>${item.telefono}</td>
                    <td>${item.direccion}</td>
                    <td>${item.ciudad}</td>
                    <td>${item.estado === true ? 'ACTIVO' : 'INACTIVO'}</td>
                    <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick='findById(${item.id})'>Editar</button></td>
                    <td><button class="btn btn-danger" onclick='dropById(${item.id})'>Eliminar</button></td>
                </tr>`
                });
            } else {
                console.error('No fue posible mostrar los datos.');
            }
            $('#resultData').html(html);
        },
        error: function (error) {
            console.error('Error en la función: ', error);
        }
    });
}
