$(document).ready(function() {
    $('#formulario').submit(function(event) {
        event.preventDefault();

        // Obtener datos del formulario
        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();

        // Enviar datos al servidor
        $.post('/insertar', { nombre: nombre, apellido: apellido }, function(data) {
            // Manejar la respuesta del servidor
            if (data.success) {
                alert('Datos insertados con éxito.');
                // Puedes redirigir o realizar otras acciones aquí
            } else {
                alert('Error al insertar datos.');
            }
        });
    });
});
