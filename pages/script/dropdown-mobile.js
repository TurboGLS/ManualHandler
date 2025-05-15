document.addEventListener('DOMContentLoaded', function() {
    // Funzione per controllare se siamo su mobile (definita come larghezza schermo <= 600px)
    function isMobileDevice() {
        return window.innerWidth <= 600;
    }
    
    // Funzione per impostare il comportamento dei dropdown
    function setupDropdowns() {
        // Seleziona tutti i pulsanti dropdown
        const dropbtns = document.querySelectorAll('.dropbtn');
        
        // Rimuovi prima eventuali listener esistenti (in caso di resize)
        dropbtns.forEach(function(btn) {
            // Clona e sostituisci per rimuovere i listener
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
        });
        
        // Se non siamo su mobile, esci dalla funzione
        if (!isMobileDevice()) {
            return;
        }
        
        // Seleziona di nuovo i pulsanti dopo la sostituzione
        const newDropbtns = document.querySelectorAll('.dropbtn');
        
        // Per ogni pulsante dropdown
        newDropbtns.forEach(function(btn) {
            // Aggiungi l'event listener per il click solo su mobile
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
        
        // Chiudi i dropdown quando si clicca fuori (solo su mobile)
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
    }
    
    // Inizializza i dropdown
    setupDropdowns();
    
    // Riesegui la configurazione quando la finestra viene ridimensionata
    window.addEventListener('resize', function() {
        setupDropdowns();
    });
});