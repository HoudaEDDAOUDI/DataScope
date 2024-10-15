// FONCTION SELECT DÉPARTEMENT 
function createDropdown(data) {
    const dropdown = document.getElementById('departementDropdown');

    // Parcours de chaque objet du tableau et récupération du libellé du département
    data.forEach(function (item) {
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
// PAGE FRANCE -------------------------------------------------------------------------
// FRANCE - REPARTITION DES VOTES TOUR 1 
fetch('json/resultats_t1.json')
    .then(response => response.json())
    .then(dataJson => {
        let totalExprimes = 0;
        let totalBlancs = 0;
        let totalNuls = 0;
        let totalAbstententions = 0;

        // Calcul des totaux
        for (const departement in dataJson) {
            totalExprimes += dataJson[departement].exprimes_t1;
            totalBlancs += dataJson[departement].blancs_t1;
            totalNuls += dataJson[departement].nuls_t1;
            totalAbstententions += dataJson[departement].abstentions_t1;
        }

        // Calcul du total des votes pour les pourcentages
        let totalVotes = 0;
        totalVotes = totalExprimes + totalBlancs + totalNuls + totalAbstententions;

        // Calcul des pourcentages
        let pourcentageExprimes = Math.round((totalExprimes / totalVotes) * 100);
        let pourcentageBlancs = Math.round((totalBlancs / totalVotes) * 100);
        let pourcentageNuls = Math.round((totalNuls / totalVotes) * 100);
        let pourcentageAbstentions = Math.round((totalAbstententions / totalVotes) * 100);

        // Configuration du graphique RadialBar avec les pourcentages
        var options = {
            series: [pourcentageExprimes, pourcentageBlancs, pourcentageNuls, pourcentageAbstentions],
            chart: {
                type: 'radialBar',
            },
            title: {
                text: 'Répartition des Votes au Tour 1',
                align: 'center', // Alignement du titre (optionnel)
                style: {
                    fontSize: '20px', // Taille de la police du titre
                    fontWeight: 'bold', // Épaisseur de la police
                    color: '#333' // Couleur du titre
                }
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function () {
                                return totalVotes.toLocaleString();  // Affiche le total en nombre
                            }
                        }
                    },
                    // Paramètres pour ajuster l'apparence des barres
                    hollow: {
                        margin: 15, // Marge entre le bord du graphique et le centre vide
                        size: '40%' // Taille du centre vide
                    },
                    // track: {
                    //     show: true, // Afficher le cercle de fond
                    //     background: '#e7e7e7', // Couleur de fond du cercle
                    //     strokeWidth: '97%', // Épaisseur de la ligne de fond
                    // },
                    // Ajuste la largeur des barres
                    dataLabels: {
                        show: true, // Afficher les étiquettes des barres
                    },
                    // Largeur des barres (un pourcentage de la largeur totale)
                    barHeight: '100%', // Ajuster la hauteur des barres
                    // Pour arrondir les barres
                    rounded: true
                }
            },
            labels: ['Exprimé', 'Vote nul', 'Vote blanc', 'Abstention'],
            colors: ['#C1A5DB', '#9472F7', '#8CABED', '#71E3D0']
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
    })
    .catch(error => console.error('Erreur lors du chargement des données JSON:', error));

// FRANCE - REPARTITION DES VOTES TOUR 2
fetch('json/resultats_t2.json')
    .then(response => response.json())
    .then(dataJson => {
        let totalExprimesT2 = 0;
        let totalBlancsT2 = 0;
        let totalNulsT2 = 0;
        let totalAbstententionsT2 = 0;

        // Calcul des totaux
        for (const departement in dataJson) {
            totalExprimesT2 += dataJson[departement].exprimes_t2;
            totalBlancsT2 += dataJson[departement].blancs_t2;
            totalNulsT2 += dataJson[departement].nuls_t2;
            totalAbstententionsT2 += dataJson[departement].abstentions_t2;
        }
        console.log(totalExprimesT2, totalBlancsT2, totalNulsT2, totalAbstententionsT2);


        // Calcul du total des votes pour les pourcentages
        let totalVotesT2 = 0;
        totalVotesT2 = totalExprimesT2 + totalBlancsT2 + totalNulsT2 + totalAbstententionsT2;

        // Calcul des pourcentages
        let pourcentageExprimesT2 = Math.round((totalExprimesT2 / totalVotesT2) * 100);
        let pourcentageBlancsT2 = Math.round((totalBlancsT2 / totalVotesT2) * 100);
        let pourcentageNulsT2 = Math.round((totalNulsT2 / totalVotesT2) * 100);
        let pourcentageAbstentionsT2 = Math.round((totalAbstententionsT2 / totalVotesT2) * 100);

        // Configuration du graphique RadialBar avec les pourcentages
        var options = {
            series: [pourcentageExprimesT2, pourcentageBlancsT2, pourcentageNulsT2, pourcentageAbstentionsT2],
            chart: {
                type: 'radialBar',
            },
            title: {
                text: 'Répartition des Votes au Tour 2',
                align: 'center', // Alignement du titre (optionnel)
                style: {
                    fontSize: '20px', // Taille de la police du titre
                    fontWeight: 'bold', // Épaisseur de la police
                    color: '#333' // Couleur du titre
                }
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function () {
                                return totalVotesT2.toLocaleString();  // Affiche le total en nombre
                            }
                        }
                    }
                }
            },
            labels: ['Exprimé', 'Vote nul', 'Vote blanc', 'Abstention'],
            colors: ['#C1A5DB', '#9472F7', '#8CABED', '#71E3D0']
        };

        var chartencore = new ApexCharts(document.querySelector("#chartencore"), options);
        chartencore.render();
    })
    .catch(error => console.error('Erreur lors du chargement des données JSON:', error));

// FRANCE - TOP 3 TOUR 1
fetch('json/resultats_t1.json')
    .then(response => response.json())
    .then(dataJson => {
        let totalMacronT1 = 0;
        let totalLassaleT1 = 0;
        let totalLePenT1 = 0;
        let totalZemmourT1 = 0;
        let totalMelanchonT1 = 0;
        let totalPecresseT1 = 0;
        let nomMacron = 0;
        let nomLassale = 0;
        let nomLePen = 0;
        let nomZemmour = 0;
        let nomMelanchon = 0;
        let nomPecresse = 0;

        for (const departement in dataJson) {
            nomMacron = dataJson[departement].nom_c1_t1;
            totalMacronT1 += dataJson[departement].voix_c1_t1;

            nomLassale = dataJson[departement].nom_c3_2;
            totalLassaleT1 += dataJson[departement].voix_c3_t1;

            nomLePen = dataJson[departement].nom_c2_t1;
            totalLePenT1 += dataJson[departement].voix_c2_t1;

            nomZemmour = dataJson[departement].nom_c4_t1;
            totalZemmourT1 += dataJson[departement].voix_c4_t1;

            nomMelanchon = dataJson[departement].nom_c5_t1;
            totalMelanchonT1 += dataJson[departement].voix_c5_t1;

            nomPecresse = dataJson[departement].nom_c6_t1;
            totalPecresseT1 += dataJson[departement].voix_c6_t1;
        }

        let candidats = [
            {
                nom: nomMacron,
                voix: totalMacronT1
            },
            {
                nom: nomLassale,
                voix: totalLassaleT1
            },
            {
                nom: nomLePen,
                voix: totalLePenT1
            },
            {
                nom: nomZemmour,
                voix: totalZemmourT1
            },
            {
                nom: nomMelanchon,
                voix: totalMelanchonT1
            },
            {
                nom: nomPecresse,
                voix: totalPecresseT1
            }
        ];

        candidats.sort((a, b) => b.voix - a.voix);
        let top3Candidats = candidats.slice(0, 3);

        const top3t1 = new Chart(
            document.getElementById('top3t1'),
            {
                type: 'bar',
                data: {
                    labels: [
                        top3Candidats[0].nom,
                        top3Candidats[1].nom,
                        top3Candidats[2].nom
                    ],
                    datasets: [{
                        label: 'Nombres de voix:',
                        backgroundColor: [
                            '#C1A5DB',
                            '#9472F7',
                            '#8CABED',
                        ],
                        hoverOffset: 4,
                        data: [top3Candidats[0].voix, top3Candidats[1].voix, top3Candidats[2].voix],
                        borderRadius: 50,
                        barPercentage: 0.7, // Ajuste la largeur des barres 
                        // categoryPercentage: 1, // Ajuste la largeur relative des barres dans la catégorie
                        // barThickness: 30, // Définit une épaisseur fixe pour les barres
                        // maxBarThickness: 40, // Limite maximale de la largeur des barres
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            text: 'Répartition des votes tour 2',
                            display: true
                        }
                    },
                    scales: {
                        x: {
                            display: false,
                        },
                        y: {
                            display: false,
                        }
                    }
                }
            }
        );
    })
    .catch(error => console.error('Erreur lors du chargement des données JSON:', error));

// FRANCE - TOP 2 TOUR 2
fetch('json/resultats_t2.json')
    .then(response => response.json())
    .then(dataJson => {
        let totalMacronT2 = 0;
        let nomMacronT2 = '';
        let totalLePenT2 = 0;
        let nomLePenT2 = '';

        for (const departement in dataJson) {
            if (!nomMacronT2) {
                nomMacronT2 = dataJson[departement].nom_c1_t2;
            }
            if (!nomLePenT2) {
                nomLePenT2 = dataJson[departement].nom_c2_t2;
            }
            totalMacronT2 += dataJson[departement].voix_c1_t2;
            totalLePenT2 += dataJson[departement].voix_c2_t2;
        }

        let cand = [
            {
                nom: nomMacronT2,
                voix: totalMacronT2
            },
            {
                nom: nomLePenT2,
                voix: totalLePenT2
            }
        ];

        cand.sort((a, b) => b.voix - a.voix);
        let top2Candidats = cand.slice(0, 2);

        const top2t2 = new Chart(
            document.getElementById('top2t2'),
            {
                type: 'bar',
                data: {
                    labels: [
                        top2Candidats[0].nom,
                        top2Candidats[1].nom,
                    ],
                    datasets: [{
                        label: 'Nombres de voix:',
                        backgroundColor: [
                            '#C1A5DB',
                            '#9472F7',
                        ],
                        hoverOffset: 4,
                        data: [top2Candidats[0].voix, top2Candidats[1].voix],
                        borderRadius: 70,
                        barPercentage: 0.6,
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            text: 'Répartition des votes tour 2',
                            display: true
                        }
                    },
                    scales: {
                        x: {
                            display: false, // Cache l'axe X
                        },
                        y: {
                            display: false, // Cache l'axe Y et les chiffres
                        }
                    }
                }
            }
        );
    })
    .catch(error => console.error('Erreur lors du chargement des données JSON:', error));

// FRANCE - AGE
fetch('json/vote_tour_age.json')
    .then(response => response.json())
    .then(dataJson => {
        // Initialisation des tableaux de données pour chaque série
        let vote_aux_2_tours_data = [];
        let t1_seulement_data = [];
        let t2_seulement_data = [];
        let pas_vote_data = [];

        // Extraction des données et conversion en nombre
        dataJson.forEach(item => {
            vote_aux_2_tours_data.push(parseFloat(item.vote_aux_2_tours.replace(',', '.')));
            t1_seulement_data.push(parseFloat(item.t1_seulement.toString().replace(',', '.')));
            t2_seulement_data.push(parseFloat(item.t2_seulement.toString().replace(',', '.')));
            pas_vote_data.push(parseFloat(item.pas_vote.replace(',', '.')));
        });

        // Configuration du graphique avec les données extraites
        var options = {
            series: [{
                name: 'vote_aux_2_tours',
                data: vote_aux_2_tours_data
            }, {
                name: 't1_seulement',
                data: t1_seulement_data
            }, {
                name: 't2_seulement',
                data: t2_seulement_data
            }, {
                name: 'pas_vote',
                data: pas_vote_data
            }],
            chart: {
                type: 'bar',
                height: 350
            },
            colors: ['#2B3695', '#ADB4F3', '#6976EB', '#BC8FF4'],  // Couleurs personnalisées pour chaque série
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '75%',
                    borderRadius: 5,
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['18-29 ans', '30-39 ans', '40-49 ans', '50-59 ans', '60-69 ans', '70-79 ans', '80-89 ans', '90 ans ou plus'],
            },
            yaxis: {
                title: {
                    text: 'Pourcentage (%)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + " %";
                    }
                }
            }
        };

        var age = new ApexCharts(document.querySelector("#age"), options);
        age.render();
    })
    .catch(error => console.error('Erreur lors du chargement des données JSON:', error));

// FRANCE - ZONE DEMOGRAPHIQUE
fetch('json/zone.json')
    .then(response => response.json())
    .then(dataJson => {
        // Initialisation des tableaux de données pour chaque série
        let resulat_c1 = [];
        let resulat_c2 = [];
        let resulat_c3 = [];

        // // Extraction des données et conversion en nombre
        dataJson.forEach(item => {
            resulat_c1.push(item.Emmanuel_Macron);
            resulat_c2.push(item.Marin_le_Pen);
            resulat_c3.push(item.Jen_Luc_Mélanchon);
        });

        var options = {
            series: [{
                name: 'Macron',
                data: resulat_c1
            }, {
                name: 'Le Pen',
                data: resulat_c2
            }, {
                name: 'Mélanchon',
                data: resulat_c3
            }],
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            colors: ['#2B3695', '#ADB4F3', '#BC8FF4'],
            xaxis: {
                categories: ["Urbain dense", "Urbain densité intermédiaire", "Rural sous forte influence d'un pôle", "Rural sous faible influence d'un pôle", "Rural autonome peu dense", "Rural autonome très peu dense"]
            },
            tooltip: {
                y: {
                    formatter: function (value) {
                        return value + "%";  // Ajout du symbole de pourcentage
                    }
                }
            }
        };

        var zone = new ApexCharts(document.querySelector("#zone"), options);
        zone.render();
    })

// PAGE DEPARTMENT ---------------------------------------------------------------------------------------------

// DEPARTMENT - CARTE
const width = 550, height = 550;
const path = d3.geoPath();

const projection = d3.geoConicConformal()
    .center([2.454071, 46.279229])
    .scale(2600)
    .translate([width / 2, height / 2]);
path.projection(projection);

const svg = d3.select('#map').append("svg")
    .attr("id", "svg")
    .attr("width", width)
    .attr("height", height);

const deps = svg.append("g");

let selectedDepartment = null;
let selectedTour = null;
let dataJson = null;
let originalColors = {};

fetch('json/resultats_t2.json')
    .then(response => response.json())
    .then(data => {
        dataJson = data;

        // Charger les données GeoJSON
        d3.json('json/departements-avec-outre-mer.geojson').then(function (geojson) {
            const departments = deps.selectAll("path")
                .data(geojson.features)
                .enter()
                .append("path")
                .attr('class', 'department')
                .attr("d", path)
                .attr("fill", "#C8C8C8")  // Couleur grise par défaut
                .attr("stroke", "#ffff")
                .on("mouseover", function (event, d) {
                    d3.select(this).attr("fill", "black");  // Changer la couleur au survol
                })
                .on("mouseout", function (event, d) {
                    const depart = d.properties.nom;  // Le nom du département

                    // Récupérer la couleur d'origine du département
                    // const fillColor = originalColors[depart] || "#C8C8C8"; // Grisé par défaut si pas de couleur stockée
                    const fillColor = "#C8C8C8";
                    // Appliquer la couleur d'origine
                    d3.select(this).attr("fill", fillColor);
                })
                .on("click", function (event, d) {
                    const h2Element = document.querySelector("h2");
                    // Vider le texte à l'intérieur
                    h2Element.textContent = "";

                    const depart = d.properties.nom;
                    // Appeler la fonction pour colorer les départements selon le tour sélectionné
                    if (selectedTour === 'tour2') {
                        carteCouleurT2(depart);
                    } else {
                        carteCouleurT1(depart);
                    }
                    // Colorer en noir le département sélectionné
                    d3.timeout(() => {
                        d3.select(this).attr("fill", "black");  // Mettre en noir après la sélection
                    }, 10);
                });

        });
    })
    .catch(error => console.error('Erreur lors du chargement du JSON :', error));

// DEPARTEMENT - LISTE DEROULANTE
function liste() {
    // // Charger les résultats du tour 2
    fetch('json/resultats_t2.json')  // Assurez-vous que ce chemin est correct
        .then(response => response.json())
        .then(data => {
            dataJsonT2 = data;  // Stocker les données du tour 2
            const select = document.getElementById('departements');
            // Ajouter une option pour chaque département du tour 2
            data.forEach(departement => {
                const option = document.createElement('option');
                option.value = departement.libelle_du_departement_t2;  // Utilisez le libellé du tour 2
                option.textContent = departement.libelle_du_departement_t2;  // Utilisez le libellé du tour 2
                select.appendChild(option);
            });
        })
        .catch(error => console.error('Erreur lors du chargement du JSON pour le tour 2 :', error));

    document.getElementById('submitButton').addEventListener('click', () => {
        const h2Element = document.querySelector("h2");

        // Vider le texte à l'intérieur
        h2Element.textContent = "";

        const depart = document.getElementById('departements').value;

        const radios = document.querySelectorAll('input[name="choix"]');
        let selectedTour;
        radios.forEach((radio) => {
            if (radio.checked) {
                selectedTour = radio.value;
            }
        });

        // Si "Tour 2" est sélectionné, colorer la carte selon les résultats
        if (selectedTour === 'tour2') {
            carteCouleurT2(depart)
        } else {
            carteCouleurT1(depart)
        }
    });
}
liste();

// PAGE DEPARTMENT - TOUR1 ----------------------------------

// DEPARTEMENT - COULEUR CARTE T1
function carteCouleurT1(depart) {
    // Charger les résultats du tour 1
    fetch('json/resultats_t1.json')  // Assurez-vous que ce chemin est correct
        .then(response => response.json())
        .then(data => {
            dataJsonT1 = data;  // Stocker les données du tour 1

            // Charger les données GeoJSON
            d3.json('json/departements-avec-outre-mer.geojson').then(function (geojson) {
                deps.selectAll("path")
                    .data(geojson.features)
                    .join("path")
                    .attr('class', 'department')
                    .attr("d", path)
                    .attr("fill", function (d) {
                        const departmentData = dataJsonT1.find(item => item.libelle_du_departement_t1 === d.properties.nom);
                        if (departmentData) {
                            // Récupération des voix des candidats pour le tour 1
                            let totalMacronT1 = departmentData.voix_c1_t1;
                            let totalLassaleT1 = departmentData.voix_c3_t1;
                            let totalLePenT1 = departmentData.voix_c2_t1;
                            let totalZemmourT1 = departmentData.voix_c4_t1;
                            let totalMelanchonT1 = departmentData.voix_c5_t1;
                            let totalPecresseT1 = departmentData.voix_c6_t1;

                            // Association des candidats à leurs voix et leurs couleurs
                            let candidats = [
                                { voix: totalMacronT1, couleur: "#C1A5DB" },       // Macron
                                { voix: totalLassaleT1, couleur: "orange" },     // Lassalle
                                { voix: totalLePenT1, couleur: "#8CABED" },          // Le Pen
                                { voix: totalZemmourT1, couleur: "purple" },     // Zemmour
                                { voix: totalMelanchonT1, couleur: "#71E3D0" },     // Mélenchon
                                { voix: totalPecresseT1, couleur: "pink" }       // Pécresse
                            ];

                            // Tri des candidats en fonction des voix (du plus grand au plus petit)
                            candidats.sort((a, b) => b.voix - a.voix);

                            // Récupération du candidat en tête et application de sa couleur
                            return candidats[0].couleur;  // La couleur du candidat avec le plus de voix
                        }
                        return "#C8C8C8";  // Grisé si pas de données pour ce département
                    })
                    .on("mouseover", function (event, d) {
                        d3.select(this).attr("fill", "black");  // Changer la couleur au survol
                    })
                    .on("mouseout", function (event, d) {
                        const departmentData = dataJsonT1.find(item => item.libelle_du_departement_t1 === d.properties.nom);
                        if (departmentData) {
                            // Récupération des voix des candidats pour le tour 1
                            let totalMacronT1 = departmentData.voix_c1_t1;
                            let totalLassaleT1 = departmentData.voix_c3_t1;
                            let totalLePenT1 = departmentData.voix_c2_t1;
                            let totalZemmourT1 = departmentData.voix_c4_t1;
                            let totalMelanchonT1 = departmentData.voix_c5_t1;
                            let totalPecresseT1 = departmentData.voix_c6_t1;

                            // Association des candidats à leurs voix et leurs couleurs
                            let candidats = [
                                { voix: totalMacronT1, couleur: "#C1A5DB" },       // Macron
                                { voix: totalLassaleT1, couleur: "orange" },     // Lassalle
                                { voix: totalLePenT1, couleur: "#8CABED" },          // Le Pen
                                { voix: totalZemmourT1, couleur: "purple" },     // Zemmour
                                { voix: totalMelanchonT1, couleur: "#71E3D0" },     // Mélenchon
                                { voix: totalPecresseT1, couleur: "pink" }       // Pécresse
                            ];

                            // Tri des candidats en fonction des voix (du plus grand au plus petit)
                            candidats.sort((a, b) => b.voix - a.voix);

                            const fillColor = candidats[0].couleur;
                            console.log('fillColor : ', fillColor);
                            d3.select(this).attr("fill", fillColor);  // Appliquer la couleur d'origine
                        }
                    })

                // Colorer le département sélectionné en noir
                deps.selectAll("path")
                    .filter(d => d.properties.nom === depart)  // Filtrer pour trouver le département correspondant
                    .attr("fill", "black");  // Appliquer la couleur noire
            });

            // Appel des fonctions pour afficher les informations supplémentaires
            afficherRepartitionVoteT1(depart);
            afficherVoteExprimeT1(depart);
            afficherTop3Candidat(depart);
            afficherCsp(depart);
            ajouterLegendeT1();
        })
        .catch(error => console.error('Erreur lors du chargement du JSON pour le tour 1 :', error));
}

// DEPARTEMENT - LEGENDE T1
function ajouterLegendeT1() {
    svg.selectAll(".legend").remove();

    const legend = svg.append("g")
        .attr("class", "legend")
        .attr("transform", "translate(10, 20)"); // Position de la légende

    // Ajouter un cercle pour la couleur de sélection
    legend.append("circle")
        .attr("cx", 9) // Position horizontale du cercle
        .attr("cy", 9) // Position verticale du cercle (première position)
        .attr("r", 9) // Rayon du cercle
        .attr("fill", "black"); // Couleur noire pour le département sélectionné

    // Ajouter le texte pour le département sélectionné
    legend.append("text")
        .attr("x", 25) // Position horizontale du texte
        .attr("y", 14) // Position verticale du texte (aligné avec le cercle)
        .text("Département sélectionné"); // Texte pour le département sélectionné

    const candidats = [
        { nom: "Macron", couleur: "#C1A5DB" },
        { nom: "Le Pen", couleur: "#8CABED" },
        { nom: "Mélenchon", couleur: "#71E3D0" },
    ];

    // Ajouter des cercles et du texte pour chaque candidat
    candidats.forEach((candidat, index) => {
        legend.append("circle") // Créer un cercle pour chaque candidat
            .attr("cx", 9) // Position horizontale du cercle
            .attr("cy", (index + 1) * 25 + 9) // Position verticale du cercle
            .attr("r", 9) // Rayon du cercle
            .attr("fill", candidat.couleur); // Couleur du cercle

        legend.append("text")
            .attr("x", 25) // Position horizontale du texte
            .attr("y", (index + 1) * 25 + 14) // Position verticale du texte
            .text(candidat.nom + " en tête"); // Texte du candidat
    });
}

// DEPARTEMENT - REPARTITION VOTE T1
function afficherRepartitionVoteT1(depart) {
    fetch('json/resultats_t1.json')
        .then(response => response.json())
        .then(dataJson => {

            const departmentData = dataJson.find(item => item.libelle_du_departement_t1 === depart);

            if (departmentData) {

                nomT1 = departmentData.libelle_du_departement_t1;
                totalExprimesT1 = parseFloat(departmentData.pourcentage_exprimes_t1.toString().replace(',', '.'));
                totalBlancsT1 = parseFloat(departmentData.pourcentage_blancs_t1.toString().replace(',', '.'));
                totalNulsT1 = parseFloat(departmentData.pourcentage_nuls_t1.toString().replace(',', '.'));
                totalAbstententionsT1 = parseFloat(departmentData.pourcentage_abstentions_t1.toString().replace(',', '.'));

                let totalVotesT1 = 0;
                totalVotesT1 = totalExprimesT1 + totalBlancsT1 + totalNulsT1 + totalAbstententionsT1;

                var options = {
                    series: [totalExprimesT1, totalBlancsT1, totalNulsT1, totalAbstententionsT1],
                    chart: {
                        height: 350,
                        type: 'radialBar',
                    },
                    title: {
                        text: `Répartition des Votes au Tour 1 - Département ${depart}`,
                        align: 'center',
                        style: {
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: '#333'
                        }
                    },
                    plotOptions: {
                        radialBar: {
                            dataLabels: {
                                total: {
                                    show: true,
                                    label: 'Total',
                                    formatter: function () {
                                        return totalVotesT1.toLocaleString();
                                    }
                                }
                            }
                        }
                    },
                    labels: ['Exprimé', 'Vote nul', 'Vote blanc', 'Abstention'],
                    colors: ['#C1A5DB', '#9472F7', '#8CABED', '#71E3D0']
                };

                document.querySelector("#tendanceVote").innerHTML = "";

                var tendanceVote = new ApexCharts(document.querySelector("#tendanceVote"), options);
                tendanceVote.render();
            } else {
                console.log("Département non trouvé");
            }


        })
        .catch(error => console.error("Erreur lors du chargement des données:", error));
}

// DEPARTEMENT - AFFICHAGE CHIFFRES CLEE T1
function afficherVoteExprimeT1(depart) {
    fetch('json/resultats_t1.json')
        .then(response => response.json())
        .then(dataJson => {
            const departmentData = dataJson.find(item => item.libelle_du_departement_t1 === depart);

            let totalBlancsT1 = 0;
            let totalAbstententionsT1 = 0;
            let totalNulsT1 = 0;
            let totalExprimesT1 = 0; // Utiliser let pour pouvoir modifier la variable
            let totalVotantT1 = 0;
            let totalInscritsT1 = 0;

            if (departmentData) {
                totalExprimesT1 = departmentData.exprimes_t1; // Utiliser la bonne clé pour obtenir le nombre de votes exprimés
                totalBlancsT1 = departmentData.blancs_t1;
                totalNulsT1 = departmentData.nuls_t1;
                totalAbstententionsT1 = departmentData.abstentions_t1;
                totalVotantT1 = departmentData.votants_t1;
                totalInscritsT1 = departmentData.inscrits_t1;
            }

            // Afficher le nombre de votes exprimés dans la div
            document.getElementById('voteBlanc').innerHTML = `Votes blancs : ${totalBlancsT1}`;
            document.getElementById('voteAbsten').innerHTML = `Abstentions : ${totalAbstententionsT1}`;
            document.getElementById('voteNul').innerHTML = `Votes nuls : ${totalNulsT1}`;
            document.getElementById('voteExprime').innerHTML = `Votes exprimés : ${totalExprimesT1}`;
            document.getElementById('votant').innerHTML = `Votants : ${totalVotantT1}`;
            document.getElementById('inscrit').innerHTML = `Inscrit : ${totalInscritsT1}`;
        })
        .catch(error => console.error("Erreur lors du chargement des données:", error));
}

// PAGE DEPARTMENT - TOUR2 ----------------------------------

// DEPARTEMENT - COULEUR CARTE T2
function carteCouleurT2(depart) {
    // Charger les résultats du tour 2
    fetch('json/resultats_t2.json')  // Assurez-vous que ce chemin est correct
        .then(response => response.json())
        .then(data => {
            dataJsonT2 = data;  // Stocker les données du tour 2

            // Charger les données GeoJSON
            d3.json('json/departements-avec-outre-mer.geojson').then(function (geojson) {
                deps.selectAll("path")
                    .data(geojson.features)
                    .join("path")
                    .attr('class', 'department')
                    .attr("d", path)
                    .attr("fill", function (d) {
                        const departmentData = dataJsonT2.find(item => item.libelle_du_departement_t2 === d.properties.nom);
                        if (departmentData) {
                            let totalMacronT2 = departmentData.voix_c1_t2;
                            let totalLePenT2 = departmentData.voix_c2_t2;
                            return totalMacronT2 > totalLePenT2 ? "#C1A5DB" : "#8CABED";  // Vert pour Macron, rouge pour Le Pen
                        }
                        return "#C8C8C8";  // Grisé si pas de données pour ce département
                    })
                    .on("mouseover", function (event, d) {
                        // Changer la couleur au survol
                        d3.select(this).attr("fill", "black");  // Colorer en noir au survol
                    })
                    .on("mouseout", function (event, d) {
                        const departmentData = dataJsonT2.find(item => item.libelle_du_departement_t2 === d.properties.nom);
                        if (departmentData) {
                            let totalMacronT2 = departmentData.voix_c1_t2;
                            let totalLePenT2 = departmentData.voix_c2_t2;
                            const fillColor = totalMacronT2 > totalLePenT2 ? "#C1A5DB" : "#8CABED";  // Vert pour Macron, rouge pour Le Pen
                            d3.select(this).attr("fill", fillColor);  // Appliquer la couleur d'origine
                        } else {
                            d3.select(this).attr("fill", "#C8C8C8");  // Grisé si pas de données
                        }
                    });

                // Colorer le département sélectionné en noir
                deps.selectAll("path")
                    .filter(d => d.properties.nom === depart)  // Filtrer pour trouver le département correspondant
                    .attr("fill", "black");  // Appliquer la couleur noire
            });

            // Appel des fonctions pour afficher les informations supplémentaires
            afficherRepartitionVoteT2(depart);
            afficherVoteExprimeT2(depart);
            afficherTop2Candidat(depart);
            afficherCsp(depart);
            ajouterLegendeT2();
        })
        .catch(error => console.error('Erreur lors du chargement du JSON pour le tour 2 :', error));
}

// DEPARTEMENT - LEGENDE T2
function ajouterLegendeT2() {
    svg.selectAll(".legend").remove();

    const legend = svg.append("g")
        .attr("class", "legend")
        .attr("transform", "translate(10, 20)"); // Position de la légende

    legend.append("circle")
        .attr("cx", 9) // Position horizontale du cercle
        .attr("cy", 9) // Position verticale du cercle
        .attr("r", 9) // Rayon du cercle
        .attr("fill", "black"); // Couleur noire pour le département sélectionné

    legend.append("text")
        .attr("x", 25) // Position horizontale du texte
        .attr("y", 14) // Position verticale du texte
        .text("Département sélectionné"); // Texte pour le département sélectionné
    // Ajouter un cercle pour la couleur de sélection

    const candidats = [
        { nom: "Macron", couleur: "#C1A5DB" },
        { nom: "Le Pen", couleur: "#8CABED" },
    ];

    // Ajouter des cercles et du texte pour chaque candidat
    candidats.forEach((candidat, index) => {
        legend.append("circle") // Créer un cercle pour chaque candidat
            .attr("cx", 9) // Position horizontale du cercle
            .attr("cy", (index + 1) * 25 + 9) // Position verticale du cercle
            .attr("r", 9) // Rayon du cercle
            .attr("fill", candidat.couleur); // Couleur du cercle

        legend.append("text")
            .attr("x", 25) // Position horizontale du texte
            .attr("y", (index + 1) * 25 + 14) // Position verticale du texte
            .text(candidat.nom + " en tête"); // Texte du candidat
    });

}

// DEPARTEMENT - REPARTITION VOTE T2
function afficherRepartitionVoteT2(depart) {
    fetch('json/resultats_t2.json')
        .then(response => response.json())
        .then(dataJson => {
            // Trouver le département correspondant dans le JSON
            const departmentData = dataJson.find(item => item.libelle_du_departement_t2 === depart);

            // const nomT2 =0;
            // const totalExprimesT2 = 0;
            // const totalBlancsT2 = 0;
            // const totalNulsT2 = 0;
            // const totalAbstententionsT2 = 0;

            if (departmentData) {
                // Afficher les données du département trouvé
                nomT2 = departmentData.libelle_du_departement_t2;
                totalExprimesT2 = parseFloat(departmentData.pourcentage_exprimes_t2.toString().replace(',', '.'));
                totalBlancsT2 = parseFloat(departmentData.pourcentage_blancs_t2.toString().replace(',', '.'));
                totalNulsT2 = parseFloat(departmentData.pourcentage_nuls_t2.toString().replace(',', '.'));
                totalAbstententionsT2 = parseFloat(departmentData.pourcentage_abstentions_t2.toString().replace(',', '.'));

                let totalVotesT2 = 0;
                totalVotesT2 = totalExprimesT2 + totalBlancsT2 + totalNulsT2 + totalAbstententionsT2;

                console.log("Nom:", nomT2);
                console.log("Exprimé:", totalExprimesT2);
                console.log("Blancs:", totalBlancsT2);
                console.log("Nuls:", totalNulsT2);
                console.log("Abstentions:", totalAbstententionsT2);

                var options = {
                    series: [totalExprimesT2, totalBlancsT2, totalNulsT2, totalAbstententionsT2],
                    chart: {
                        height: 350,
                        type: 'radialBar',
                    },
                    title: {
                        text: `Répartition des Votes au Tour 2 - Département ${depart}`,
                        align: 'center',
                        style: {
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: '#333'
                        }
                    },
                    plotOptions: {
                        radialBar: {
                            dataLabels: {
                                total: {
                                    show: true,
                                    label: 'Total',
                                    formatter: function () {
                                        return totalVotesT2.toLocaleString();
                                    }
                                }
                            }
                        }
                    },
                    labels: ['Exprimé', 'Vote nul', 'Vote blanc', 'Abstention'],
                    colors: ['#C1A5DB', '#9472F7', '#8CABED', '#71E3D0']
                };

                document.querySelector("#tendanceVote").innerHTML = "";

                var tendanceVote = new ApexCharts(document.querySelector("#tendanceVote"), options);
                tendanceVote.render();
            } else {
                console.log("Département non trouvé");
            }


        })
        .catch(error => console.error("Erreur lors du chargement des données:", error));
}

// DEPARTEMENT - AFFICHAGE CHIFFRES CLEE T2
function afficherVoteExprimeT2(depart) {
    fetch('json/resultats_t2.json')
        .then(response => response.json())
        .then(dataJson => {
            const departmentData = dataJson.find(item => item.libelle_du_departement_t2 === depart);

            let totalBlancsT2 = 0;
            let totalAbstententionsT2 = 0;
            let totalNulsT2 = 0;
            let totalExprimesT2 = 0; // Utiliser let pour pouvoir modifier la variable
            let totalVotantT2 = 0;
            let totalInscritsT2 = 0;

            if (departmentData) {
                totalExprimesT2 = departmentData.exprimes_t2; // Utiliser la bonne clé pour obtenir le nombre de votes exprimés
                totalBlancsT2 = departmentData.blancs_t2;
                totalNulsT2 = departmentData.nuls_t2;
                totalAbstententionsT2 = departmentData.abstentions_t2;
                totalVotantT2 = departmentData.votants_t2;
                totalInscritsT2 = departmentData.inscrits_t2;
            }

            // Afficher le nombre de votes exprimés dans la div
            document.getElementById('voteBlanc').innerHTML = `Votes blancs : ${totalBlancsT2}`;
            document.getElementById('voteAbsten').innerHTML = `Abstentions : ${totalAbstententionsT2}`;
            document.getElementById('voteNul').innerHTML = `Votes nuls : ${totalNulsT2}`;
            document.getElementById('voteExprime').innerHTML = `Votes exprimés : ${totalExprimesT2}`;
            document.getElementById('votant').innerHTML = `Votants : ${totalVotantT2}`;
            document.getElementById('inscrit').innerHTML = `Inscrit : ${totalInscritsT2}`;
        })
        .catch(error => console.error("Erreur lors du chargement des données:", error));
}

// DEPARTEMENT - CSP T1/T2
function afficherCsp(depart) {
    fetch('json/csp.json')
        .then(response => response.json())
        .then(dataJson => {
            const departmentData = dataJson.find(item => item.libelle_csp === depart);

            if (departmentData) {
                // Remplacer les valeurs "N/A - résultat non disponible" par 0
                const parseValue = (val) => val === "N/A - résultat non disponible" ? 0 : +val;
                if (depart == "") {
                    document.querySelector("#csp").innerHTML = `Données non disponibles pour : ${depart}`;
                } else {

                    const nom = departmentData.libelle_csp;
                    const agriculteurs = parseValue(departmentData.agriculteurs_exploitants);
                    const artisans = parseValue(departmentData.artisans);
                    const cadres = parseValue(departmentData.cadres);
                    const professions = parseValue(departmentData.professions_interm);
                    const employes = parseValue(departmentData.employes);
                    const ouvriers = parseValue(departmentData.ouvriers);
                    const retraites = parseValue(departmentData.retraites);
                    const autres = parseValue(departmentData.autres);

                    let total = agriculteurs + artisans + cadres + professions + employes + ouvriers + retraites + autres;

                    let pourcentageAgriculteurs = Math.round((agriculteurs / total) * 100);
                    let pourcentageArtisans = Math.round((artisans / total) * 100);
                    let pourcentageCadres = Math.round((cadres / total) * 100);
                    let pourcentageProfessions = Math.round((professions / total) * 100);
                    let pourcentageEmployes = Math.round((employes / total) * 100);
                    let pourcentageOuvriers = Math.round((ouvriers / total) * 100);
                    let pourcentageRetraites = Math.round((retraites / total) * 100);
                    let pourcentageAutres = Math.round((autres / total) * 100);

                    var options = {
                        series: [{
                            data: [pourcentageAgriculteurs, pourcentageArtisans, pourcentageCadres, pourcentageProfessions, pourcentageEmployes, pourcentageOuvriers, pourcentageRetraites, pourcentageAutres]
                        }],
                        chart: {
                            type: 'bar',
                            height: 350
                        },
                        title: {
                            text: `Répartition des CSP - Département ${depart}`,
                            align: 'center',
                            style: {
                                fontSize: '20px',
                                fontWeight: 'bold',
                                color: '#333'
                            }
                        },
                        plotOptions: {
                            bar: {
                                borderRadius: 4,
                                borderRadiusApplication: 'end',
                                horizontal: true,
                            }
                        },
                        dataLabels: {
                            enabled: false
                        },
                        xaxis: {
                            categories: ['Agriculteurs', 'Artisans', 'Cadres', 'Professions intermédiaires', 'Employés', 'Ouvriers', 'Retraités', 'Autres'],
                        },
                        colors: ['#C1A5DB']

                    };

                    document.querySelector("#csp").innerHTML = "";

                    var csp = new ApexCharts(document.querySelector("#csp"), options);
                    csp.render();
                }
            } else {
                // Si le département n'a pas de données, afficher un message dans le conteneur #csp
                document.querySelector("#csp").innerHTML = `Données non disponibles pour : ${depart}`;
            }
        })
        .catch(error => {
            console.error("Erreur lors du chargement du fichier JSON :", error);
            document.querySelector("#csp").innerHTML = `Erreur lors du chargement des données pour : ${depart}`;
        });
}