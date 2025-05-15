document.addEventListener('DOMContentLoaded', function() {
    // Seleziona tutti i pulsanti dropdown
    const dropbtns = document.querySelectorAll('.dropbtn');
    
    // Per ogni pulsante dropdown
    dropbtns.forEach(function(btn) {
        // Aggiungi l'event listener per il click
        btn.addEventListener('click', function(event) {
            // Previeni il comportamento di default
            event.preventDefault();
            // Ferma la propagazione dell'evento
            event.stopPropagation();
            
            // Trova il dropdown-content associato a questo pulsante
            const content = this.nextElementSibling;
            
            // Se il content è già visibile, nascondilo e rimuovi active dal bottone
            if (content.style.display === 'block') {
                content.style.display = 'none';
                this.classList.remove('active');
            } 
            // Altrimenti, mostralo e aggiungi active al bottone
            else {
                // Prima chiudi tutti gli altri dropdown
                document.querySelectorAll('.dropdown-content').forEach(function(openContent) {
                    openContent.style.display = 'none';
                });
                document.querySelectorAll('.dropbtn').forEach(function(button) {
                    button.classList.remove('active');
                });
                
                // Poi apri questo dropdown
                content.style.display = 'block';
                this.classList.add('active');
            }
        });
    });
    
    // Chiudi i dropdown quando si clicca fuori
    document.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown-content')) {
            // Chiudi tutti i dropdown
            document.querySelectorAll('.dropdown-content').forEach(function(content) {
                content.style.display = 'none';
            });
            document.querySelectorAll('.dropbtn').forEach(function(button) {
                button.classList.remove('active');
            });
        }
    });
});