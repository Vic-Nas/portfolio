// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Gestion des onglets pour la section Parcours
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons et contenus
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            
            // Afficher le contenu correspondant
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Animation au défilement
    const scrollElements = document.querySelectorAll('.timeline-item, .project-card, .skills-card');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    // Ajouter un délégateur d'événement de défilement
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Exécuter une fois au chargement pour les éléments déjà visibles
    handleScrollAnimation();
    
    // Traitement du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ici, vous pouvez ajouter du code pour traiter l'envoi du formulaire
            // Par exemple, utiliser l'API Fetch pour envoyer les données à un serveur
            
            // Pour l'instant, nous simulons juste une soumission réussie
            alert('Merci pour votre message ! Je vous contacterai bientôt.');
            contactForm.reset();
        });
    }

    // Ajout de la classe scrolled aux éléments visibles au chargement de la page
    document.addEventListener('DOMContentLoaded', handleScrollAnimation);
});

// Ajouter une animation de défilement fluide pour les ancres dans la navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // 70px de décalage pour la barre de navigation fixe
                behavior: 'smooth'
            });
            
            // Fermer le menu mobile si ouvert
            const nav = document.querySelector('nav');
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        }
    });
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'fr',
        includedLanguages: 'en,fr,it',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

window.addEventListener('load', function() {
    setTimeout(function() {
        // Cette technique repose sur la structure interne du widget qui peut changer
        var gtCombo = document.querySelector('.goog-te-combo');
        if(gtCombo) {
            // Par exemple, modifier l'option par défaut (bien que cela reste limité)
            gtCombo.options[0].text = 'Choisissez votre langue';
        }
    }, 1000);
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'fr',
        includedLanguages: 'en,fr,it',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,  // Désactive l'affichage automatique
    }, 'google_translate_element');
}

