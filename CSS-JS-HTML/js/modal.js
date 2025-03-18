document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', function() {
        const imageUrl = this.getAttribute('href');
        document.getElementById('modalImage').setAttribute('src', imageUrl); 
    });
});