window.onload = function(){
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
    
        // Obtener valores del formulario
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
    
        // Simulación de respuesta de envío
        let messageStatus = document.getElementById('messageStatus');
        messageStatus.textContent = `Gracias, ${name}. Tu mensaje ha sido enviado.`;
        messageStatus.style.color = 'green';
    
        // Limpiar formulario después de enviar
        document.getElementById('contactForm').reset();
    });
    
}