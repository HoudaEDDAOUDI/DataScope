// DARK MODE
document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('#color_mode');
    const body = document.body;

    // Vérifie si le dark mode est activé dans le localStorage
    function isDarkModeEnabled() {
        return localStorage.getItem('darkModeEnabled') === 'true';
    }

    // Active le dark mode
    function enableDarkMode() {
        body.classList.add('dark-mode');
        localStorage.setItem('darkModeEnabled', 'true');
    }

    // Désactive le dark mode
    function disableDarkMode() {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkModeEnabled', 'false');
    }

    // Écouteur pour le changement d'état de la case à cocher
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    // Applique le dark mode si activé au rechargement de la page
    if (isDarkModeEnabled()) {
        enableDarkMode();
        checkbox.checked = true; // Coche la case si le dark mode est activé
    }
});

// PAGE DEPARTMENT - SCROL
const parentContainer = document.querySelector('.cadre_scroll');
    const selectParamDiv = document.querySelector('.select_param_depart');
    
    // Sauvegarde la position initiale de la div
    const originalOffsetTop = selectParamDiv.offsetTop;

    parentContainer.addEventListener('scroll', function () {

        if (parentContainer.scrollTop > originalOffsetTop) {
            //  lorsque la classe 'fixed' est ajoutée
            selectParamDiv.classList.add('fixed');
        } else {
            //  lorsque la classe 'fixed' est retirée
            selectParamDiv.classList.remove('fixed');
        }
    });

