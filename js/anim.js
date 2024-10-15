// PAGE DEPARTMENT - SCROL
const parentContainer = document.querySelector('.cadre_scroll');
    const selectParamDiv = document.querySelector('.select_param_depart');
    
    // Sauvegarde la position initiale de la div
    const originalOffsetTop = selectParamDiv.offsetTop;

    // Ajoute un événement de défilement sur la div parent
    parentContainer.addEventListener('scroll', function () {
        console.log('Scrolling inside parent...'); // Log pour voir le défilement

        // Vérifie la position de défilement relative à la position initiale de la div
        if (parentContainer.scrollTop > originalOffsetTop) {
            console.log('Fixing div at top'); // Log lorsque la classe 'fixed' est ajoutée
            selectParamDiv.classList.add('fixed');
        } else {
            console.log('Removing fixed class'); // Log lorsque la classe 'fixed' est retirée
            selectParamDiv.classList.remove('fixed');
        }
    });