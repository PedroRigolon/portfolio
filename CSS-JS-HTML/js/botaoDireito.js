document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Impede o menu de contexto de aparecer
  });

  document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', function() {
        const imageUrl = this.getAttribute('href'); // Pega o href do botão clicado
        document.getElementById('modalImage').setAttribute('src', imageUrl); // Define a imagem no modal
    });
});