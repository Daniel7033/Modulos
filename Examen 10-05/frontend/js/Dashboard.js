//Función para mostrar los datos en una tabla
function loadData() {
    $.ajax({
        url: 'http://localhost:7033/shoe-store/v1/api/producto/dashboard',
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
                    <td>${item.cantidad}</td>
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
