//Función para guardar datos
function save() {
        var data = {
            'nombreProducto': $('#nombreProducto').val(),
            'descripcion': $('#descripcion').val(),
            'cantidad': parseInt($('#cantidad').val()),
            'precio': parseFloat($('#precio').val()),
            'iva': parseInt($('#iva').val()),
            'descuento': parseInt($('#descuento').val()),
            'estado': parseInt($('#estado').val())
        };
        var jsonData = JSON.stringify(data);
        $.ajax({
            url: 'http://localhost:7033/shoe-store/v1/api/producto',
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
            'nombreProducto': $('#nombreProducto').val(),
            'descripcion': $('#descripcion').val(),
            'cantidad': parseInt($('#cantidad').val()),
            'precio': parseFloat($('#precio').val()),
            'iva': parseInt($('#iva').val()),
            'descuento': parseInt($('#descuento').val()),
            'estado': parseInt($('#estado').val())
        };
        var id = parseInt($('#id').val());
        var jsonData = JSON.stringify(data);
        $.ajax({
            url: 'http://localhost:7033/shoe-store/v1/api/producto/' + id,
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
        url: 'http://localhost:7033/shoe-store/v1/api/producto/' + id,
        method: 'GET',
        dataType: 'json',
        success: function (data){
            $('#id').val(data.data.id);
            $('#nombreProducto').val(data.data.nombreProducto);
            $('#descripcion').val(data.data.descripcion);
            $('#cantidad').val(data.data.cantidad);
            $('#precio').val(data.data.precio);
            $('#iva').val(data.data.iva);
            $('#descuento').val(data.data.descuento);
            $('#estado').val(data.data.estado === true ? 1 : 0);

            var btnAgregar = $('button[name="btnAgregar"]');
            btnAgregar.text('Actualizar');
            btnAgregar.attr('onclick', 'update()');
        },
        error: function (error){
            console.error('Error: ', error);
        }
    });
}

//Función para eliminar datos de manera permanente
function dropById(id) {
    $.ajax({
        url: 'http://localhost:7033/shoe-store/v1/api/producto/' + id,
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
    $('#nombreProducto').val('');
    $('#descripcion').val('');
    $('#cantidad').val('');
    $('#precio').val('');
    $('#iva').val('');
    $('#descuento').val('');
    $('#estado').val('');
}

//Función para mostrar los datos en una tabla
function loadData() {
    $.ajax({
        url: 'http://localhost:7033/shoe-store/v1/api/producto',
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
                    <td>${item.nombreProducto}</td> 
                    <td>${item.descripcion}</td>
                    <td>${item.cantidad}</td>
                    <td>$${item.precio}.00</td>
                    <td>${item.iva}%</td>
                    <td>${item.descuento}%</td>
                    <td>${item.estado === true ? 'ACTIVO' : 'INACTIVO'}</td>
                    <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick='findById(${item.id})'>Editar</button></td>
                    <td><button class="btn btn-danger" onclick='dropById(${item.id})'>Eliminar</button></td>
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
