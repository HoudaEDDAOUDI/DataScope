// FONCTION SELECT DÉPARTEMENT 

function createDropdown(data) {
    const dropdown = document.getElementById('departementDropdown');

    // Parcours de chaque objet du tableau et récupération du libellé du département
    data.forEach(function(item) {
        const option = document.createElement('option');
        option.textContent = item.libelle_du_departement_t1;  // Libellé du département
        option.value = item.code_du_departement_t1;  // Utilisation du code département comme valeur
        dropdown.appendChild(option);
    });
}

// Récupération du fichier JSON
fetch('json/resultats_t1.json') 
    .then(response => response.json())  // Convertir la réponse en objet JSON
    .then(data => {
        createDropdown(data);  // Appel de la fonction pour remplir la liste déroulante
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));