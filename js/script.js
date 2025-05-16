// PAGE FRANCE -------------------------------------------------------------------------
// FRANCE - REPARTITION DES VOTES TOUR 2
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
                align: 'center',
                style: {
                    fontSize: '15px',
                    fontWeight: '300',
                    color: '#464646'
                    // color: isDarkModeEnabled() ? '#FFFFFF' : '#464646'
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
                }
            },
            labels: ['Exprimé', 'Vote nul', 'Vote blanc', 'Abstention'],
            colors: ['#7237B9', '#4D32E7', '#0b74d5', '#0F8385']
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
                align: 'center',
                style: {
                    fontSize: '15px',
                    fontWeight: '300',
                    color: '#464646'
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
            colors: ['#7237B9', '#4D32E7', '#0b74d5', '#0F8385']
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

        // Variables pour les noms des candidats
        let nomMacron, nomLassale, nomLePen, nomZemmour, nomMelanchon, nomPecresse;

        // Calculer les voix pour chaque candidat
        for (const departement in dataJson) {
            nomMacron = dataJson[departement].nom_c1_t1;
            totalMacronT1 += dataJson[departement].voix_c1_t1 || 0;

            nomLassale = dataJson[departement].nom_c3_2;
            totalLassaleT1 += dataJson[departement].voix_c3_t1 || 0;

            nomLePen = dataJson[departement].nom_c2_t1;
            totalLePenT1 += dataJson[departement].voix_c2_t1 || 0;

            nomZemmour = dataJson[departement].nom_c4_t1;
            totalZemmourT1 += dataJson[departement].voix_c4_t1 || 0;

            nomMelanchon = dataJson[departement].nom_c5_t1;
            totalMelanchonT1 += dataJson[departement].voix_c5_t1 || 0;

            nomPecresse = dataJson[departement].nom_c6_t1;
            totalPecresseT1 += dataJson[departement].voix_c6_t1 || 0;
        }

        // Vérifier les totaux
        console.log("Total Macron: ", totalMacronT1);
        console.log("Total Lassale: ", totalLassaleT1);
        console.log("Total Le Pen: ", totalLePenT1);
        console.log("Total Zemmour: ", totalZemmourT1);
        console.log("Total Melanchon: ", totalMelanchonT1);
        console.log("Total Pecresse: ", totalPecresseT1);

        // Créer le tableau des candidats
        let candidats = [
            { nom: nomMacron, voix: totalMacronT1 },
            { nom: nomLassale, voix: totalLassaleT1 },
            { nom: nomLePen, voix: totalLePenT1 },
            { nom: nomZemmour, voix: totalZemmourT1 },
            { nom: nomMelanchon, voix: totalMelanchonT1 },
            { nom: nomPecresse, voix: totalPecresseT1 }
        ];

        candidats.sort((a, b) => b.voix - a.voix);
        let top3Candidats = candidats.slice(0, 3);

        var options = {
            series: [{
                data: [
                    top3Candidats[0].voix,
                    top3Candidats[1].voix,
                    top3Candidats[2].voix
                ]
            }],
            chart: {
                id: 'barYear',
                width: '100%',
                type: 'bar'
            },
            plotOptions: {
                bar: {
                    distributed: true,
                    horizontal: true,
                    borderRadius: 7,
                    barHeight: '50%',
                    dataLabels: {
                        position: 'bottom'
                    }
                }
            },
            dataLabels: {
                enabled: true,
                textAnchor: 'start',
                style: {
                    colors: ['#fff'],
                    fontSize: 15
                },
                formatter: function (val, opt) {
                    return top3Candidats[opt.dataPointIndex].nom;
                },
                offsetX: 0,
            },
            colors: ['#4D32E7', '#0b74d5', '#7237B9'],
            states: {
                normal: {
                    filter: {
                        type: 'desaturate'
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: true,
                    filter: {
                        type: 'darken',
                        value: 1
                    }
                }
            },
            tooltip: {
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (val, opts) {
                            const voix = opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex];
                            return `${top3Candidats[opts.dataPointIndex].nom}: `;
                        }
                    }
                }
            },
            title: {
                text: 'Top 3 des candidats au Tour 1',
                offsetX: 15,
                style: {
                    fontSize: '15px',
                    fontWeight: '300',
                    color: '#464646'
                }
            },
            legend: {
                show: false
            },
            grid: {
                show: false
            },
            xaxis: {
                labels: {
                    show: false
                },
                show: false
            },
            yaxis: {
                labels: {
                    show: true
                },
                show: false
            }
        };
        var top3t1 = new ApexCharts(document.querySelector("#top3t1"), options);
        top3t1.render();

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

        var options = {
            series: [{
                data: [
                    top2Candidats[0].voix,
                    top2Candidats[1].voix
                ]
            }],
            chart: {
                id: 'barYear',
                width: '300',
                type: 'bar'
            },
            plotOptions: {
                bar: {
                    distributed: true,
                    horizontal: true,
                    borderRadius: 7,
                    barHeight: '40%',
                    dataLabels: {
                        position: 'bottom'
                    }
                }
            },
            dataLabels: {
                enabled: true,
                textAnchor: 'start',
                style: {
                    colors: ['#fff'],
                    fontSize: 15
                },
                formatter: function (val, opt) {
                    return top2Candidats[opt.dataPointIndex].nom;
                },
                offsetX: 0,
            },
            colors: ['#4D32E7', '#0b74d5'],
            states: {
                normal: {
                    filter: {
                        type: 'desaturate'
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: true,
                    filter: {
                        type: 'darken',
                        value: 1
                    }
                }
            },
            tooltip: {
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (val, opts) {
                            const voix = opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex];
                            return `${top2Candidats[opts.dataPointIndex].nom}: `;
                        }
                    }
                }
            },
            title: {
                text: 'Top 2 des candidats au Tour 2',
                offsetX: 15,
                style: {
                    fontSize: '15px',
                    fontWeight: '300',
                    color: '#464646'
                }
            },
            legend: {
                show: false
            },
            grid: {
                show: false
            },
            xaxis: {
                labels: {
                    show: false
                },
                show: false
            },
            yaxis: {
                labels: {
                    show: true
                },
                show: false
            }
        };
        var top2t2 = new ApexCharts(document.querySelector("#top2t2"), options);
        top2t2.render();

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
                name: 'Vote au 2 tours',
                data: vote_aux_2_tours_data
            }, {
                name: 'Tour 1 seulement',
                data: t1_seulement_data
            }, {
                name: 'Tour 2 seulement',
                data: t2_seulement_data
            }, {
                name: 'Pas voté',
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

// FRANCE - AFFICHAGE CHIFFRS CLEE TOUR 1
fetch('json/resultats_t1.json')
    .then(response => response.json())
    .then(dataJson => {

        let totalBlancsT1 = 0;
        let totalAbstententionsT1 = 0;
        let totalNulsT1 = 0;
        let totalExprimesT1 = 0;
        let totalVotantT1 = 0;
        let totalInscritsT1 = 0;

        for (const departement in dataJson) {
            totalExprimesT1 += dataJson[departement].exprimes_t1;
            totalBlancsT1 += dataJson[departement].blancs_t1;
            totalNulsT1 += dataJson[departement].nuls_t1;
            totalAbstententionsT1 += dataJson[departement].abstentions_t1;
            totalVotantT1 += dataJson[departement].votants_t1;
            totalInscritsT1 += dataJson[departement].inscrits_t1;
        }

        // Afficher le nombre de votes exprimés dans la div
        document.getElementById('voteBlanc_t1').innerHTML = `${totalBlancsT1.toLocaleString('fr-FR').replace(/\s/g, '   ')}<br> blancs`;
        document.getElementById('voteAbsten_t1').innerHTML = `${totalAbstententionsT1.toLocaleString('fr-FR').replace(/\s/g, '   ')}<br> abstentions`;
        document.getElementById('voteNul_t1').innerHTML = `${totalNulsT1.toLocaleString('fr-FR').replace(/\s/g, '   ')}<br> nuls`;
        document.getElementById('voteExprime_t1').innerHTML = `${totalExprimesT1.toLocaleString('fr-FR').replace(/\s/g, '   ')}<br> exprimés `;
        document.getElementById('votant_t1').innerHTML = `${totalVotantT1.toLocaleString('fr-FR').replace(/\s/g, '   ')} votants`;
        document.getElementById('inscrit_t1').innerHTML = `${totalInscritsT1.toLocaleString('fr-FR').replace(/\s/g, '   ')} inscrits`;

    })
    .catch(error => console.error("Erreur lors du chargement des données:", error));

// FRANCE - AFFICHAGE CHIFFRS CLEE TOUR 2
fetch('json/resultats_t2.json')
    .then(response => response.json())
    .then(dataJson => {

        let totalBlancsT2 = 0;
        let totalAbstententionsT2 = 0;
        let totalNulsT2 = 0;
        let totalExprimesT2 = 0;
        let totalVotantT2 = 0;
        // let totalInscritsT2 = 0;

        for (const departement in dataJson) {
            totalExprimesT2 += dataJson[departement].exprimes_t2;
            totalBlancsT2 += dataJson[departement].blancs_t2;
            totalNulsT2 += dataJson[departement].nuls_t2;
            totalAbstententionsT2 += dataJson[departement].abstentions_t2;
            totalVotantT2 += dataJson[departement].votants_t2;
            // totalInscritsT2 += dataJson[departement].inscrits_t2;
        }

        // Afficher le nombre de votes exprimés dans la div
        document.getElementById('voteBlanc_t2').innerHTML = `${totalBlancsT2.toLocaleString('fr-FR').replace(/\s/g, '   ')}<br> blancs`;
        document.getElementById('voteAbsten_t2').innerHTML = `${totalAbstententionsT2.toLocaleString('fr-FR').replace(/\s/g, '   ')}<br> abstentions`;
        document.getElementById('voteNul_t2').innerHTML = `${totalNulsT2.toLocaleString('fr-FR').replace(/\s/g, '   ')}<br> nuls`;
        document.getElementById('voteExprime_t2').innerHTML = `${totalExprimesT2.toLocaleString('fr-FR').replace(/\s/g, '   ')}<br> exprimés `;
        document.getElementById('votant_t2').innerHTML = `${totalVotantT2.toLocaleString('fr-FR').replace(/\s/g, '   ')} votants`;
        // document.getElementById('inscrit_t2').innerHTML = `${totalInscritsT2.toLocaleString('fr-FR').replace(/\s/g, '   ')}<br> inscrits`;

    })
    .catch(error => console.error("Erreur lors du chargement des données:", error));
// PAGE DEPARTMENT ---------------------------------------------------------------------------------------------

// DEPARTMENT - CARTE
const width = 550, height = 500;
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

let lastSelectedDepartment = null;

fetch('json/resultats_t2.json')
    .then(response => response.json())
    .then(data => {
        dataJson = data;

        // Charger les données GeoJSON
        d3.json('json/a-dep2021.json').then(function (geojson) {
            deps.selectAll("path")
                .data(geojson.features)
                .enter()
                .append("path")
                .attr('class', 'department')
                .attr("d", path)
                .attr("fill", "#C8C8C8")  // Couleur grise par défaut
                .attr("stroke", "#ffff")
                .on("mouseover", function (event, d) {
                    d3.select(this).attr("fill", "black");  // Changer la couleur au survol
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.libgeo)
                        .style("left", (event.pageX + 20) + "px")
                        .style("top", (event.pageY - 20) + "px")
                })
                .on("mouseout", function (event, d) {
                    div.html('');
                    if (d.properties.libgeo !== selectedDepartment) {
                        d3.select(this).attr("fill", "#C8C8C8");  // Couleur grise par défaut
                    }
                })
                .on("click", function (event, d) {
                    const h2Element = document.querySelector("h2");
                    h2Element.textContent = "";
                    let depart = '';
                    // if (lastSelectedDepartment && lastSelectedDepartment !== selectedDepartment) {
                    //     d3.select(lastSelectedDepartment).attr("fill", "#C8C8C8");
                    // }
                    selectedDepartment = d.properties.libgeo;
                    // lastSelectedDepartment = this;
                    // d3.select(this).attr("fill", "black");

                    const radioToSelect = document.querySelector(`input[type="radio"][value="${selectedDepartment}"]`);
                    if (radioToSelect) {
                        radioToSelect.checked = true;
                    }
                    if (selectedTour === 'tour2') {
                        carteCouleurT2(selectedDepartment);
                    } else {
                        carteCouleurT1(selectedDepartment);
                    }

                    document.querySelector('.selected').innerHTML = `${d.properties.libgeo} <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                        class="arrow">
                        <path
                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                    </svg>`;
                    document.querySelector('input[name="choix"][value="tour1"]').checked = true;

                    // lastSelectedDepartment = this;
                    // if (lastSelectedDepartment && lastSelectedDepartment !== this) {
                    //     d3.select(lastSelectedDepartment).attr("fill", originalColors[lastSelectedDepartment.properties.libgeo]);
                    // }

                    // depart = d.properties.libgeo;

                    // originalColors[depart] = d3.select(this).attr("fill");
                    // d3.select(this).attr("fill", "black");

                });
        });
    })
    .catch(error => console.error('Erreur lors du chargement du JSON :', error));

let div = d3.select("body").append("div")
    .attr("class", "map-tooltip")
    .style("opacity", 0);

function liste() {
    fetch('json/resultats_t2.json')
        .then(response => response.json())
        .then(data => {
            const optionsContainer = document.getElementById('departements');
            optionsContainer.innerHTML = '';

            const defaultOption = document.createElement('div');
            const defaultLabel = document.createElement('label');
            defaultLabel.textContent = 'Sélectionner un département';
            defaultOption.appendChild(defaultLabel);
            optionsContainer.appendChild(defaultOption);

            data.forEach((departement, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.setAttribute('title', departement.libelle_du_departement_t2);

                const inputRadio = document.createElement('input');
                inputRadio.type = 'radio';
                inputRadio.id = `option-${index + 1}`;
                inputRadio.name = 'option';
                inputRadio.value = departement.libelle_du_departement_t2;

                // Ajout du gestionnaire d'événements pour le click
                inputRadio.addEventListener('click', () => {
                    document.querySelector('.selected').innerHTML = `${departement.libelle_du_departement_t2} <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 512 512"
                            class="arrow">
                            <path
                                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                        </svg>`;
                });

                const label = document.createElement('label');
                label.className = 'option';
                label.setAttribute('for', `option-${index + 1}`);
                label.setAttribute('data-txt', departement.libelle_du_departement_t2);
                label.textContent = departement.libelle_du_departement_t2;

                optionDiv.appendChild(inputRadio);
                optionDiv.appendChild(label);

                optionsContainer.appendChild(optionDiv);
            });
            document.querySelector('.selected').innerHTML = `Sélectionner un département <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                        class="arrow">
                        <path
                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                    </svg>`;
        })
        .catch(error => console.error('Erreur lors du chargement du JSON pour le tour 2 :', error));

    document.getElementById('submitButton').addEventListener('click', () => {
        const h2Element = document.querySelector("h2");
        h2Element.textContent = "";

        const selectedRadioDepartment = document.querySelector('input[name="option"]:checked');
        const depart = selectedRadioDepartment ? selectedRadioDepartment.value : selectedDepartment;

        const radios = document.querySelectorAll('input[name="choix"]');
        let selectedTour;
        radios.forEach((radio) => {
            if (radio.checked) {
                selectedTour = radio.value;
            }
        });

        if (selectedTour === 'tour2') {
            carteCouleurT2(depart);
        } else {
            carteCouleurT1(depart);
        }
    });
}
liste();

// PAGE DEPARTMENT - TOUR1 ----------------------------------

// DEPARTEMENT - COULEUR CARTE T1
function carteCouleurT1(depart) {
    // Charger les résultats du tour 1
    fetch('json/resultats_t1.json')
        .then(response => response.json())
        .then(data => {
            dataJsonT1 = data;

            d3.json('json/a-dep2021.json').then(function (geojson) {
                deps.selectAll("path")
                    .data(geojson.features)
                    .join("path")
                    .attr('class', 'department')
                    .attr("d", path)
                    .attr("fill", function (d) {
                        const departmentData = dataJsonT1.find(item => item.libelle_du_departement_t1 === d.properties.libgeo);
                        if (departmentData) {
                            let totalMacronT1 = departmentData.voix_c1_t1;
                            let totalLassaleT1 = departmentData.voix_c3_t1;
                            let totalLePenT1 = departmentData.voix_c2_t1;
                            let totalZemmourT1 = departmentData.voix_c4_t1;
                            let totalMelanchonT1 = departmentData.voix_c5_t1;
                            let totalPecresseT1 = departmentData.voix_c6_t1;

                            let candidats = [
                                { voix: totalMacronT1, couleur: "#C1A5DB" },
                                { voix: totalLassaleT1, couleur: "orange" },
                                { voix: totalLePenT1, couleur: "#8CABED" },
                                { voix: totalZemmourT1, couleur: "purple" },
                                { voix: totalMelanchonT1, couleur: "#71E3D0" },
                                { voix: totalPecresseT1, couleur: "pink" }
                            ];

                            candidats.sort((a, b) => b.voix - a.voix);

                            return candidats[0].couleur;
                        }
                        return "#C8C8C8";
                    })
                    .on("mouseover", function (event, d) {
                        d3.select(this).attr("fill", "black");
                        div.transition()
                            .duration(200)
                            .style("opacity", .9);
                        div.html(d.properties.libgeo)
                            .style("left", (event.pageX + 20) + "px")
                            .style("top", (event.pageY - 20) + "px")
                    })
                    .on("mouseout", function (event, d) {
                        div.html('');
                        const departmentData = dataJsonT1.find(item => item.libelle_du_departement_t1 === d.properties.libgeo);
                        if (departmentData) {
                            let totalMacronT1 = departmentData.voix_c1_t1;
                            let totalLassaleT1 = departmentData.voix_c3_t1;
                            let totalLePenT1 = departmentData.voix_c2_t1;
                            let totalZemmourT1 = departmentData.voix_c4_t1;
                            let totalMelanchonT1 = departmentData.voix_c5_t1;
                            let totalPecresseT1 = departmentData.voix_c6_t1;

                            let candidats = [
                                { voix: totalMacronT1, couleur: "#C1A5DB" },
                                { voix: totalLassaleT1, couleur: "orange" },
                                { voix: totalLePenT1, couleur: "#8CABED" },
                                { voix: totalZemmourT1, couleur: "purple" },
                                { voix: totalMelanchonT1, couleur: "#71E3D0" },
                                { voix: totalPecresseT1, couleur: "pink" }
                            ];

                            candidats.sort((a, b) => b.voix - a.voix);

                            const fillColor = candidats[0].couleur;
                            d3.select(this).attr("fill", fillColor);
                        }
                    })

                deps.selectAll("path")
                    .filter(d => d.properties.libgeo === selectedDepartment)
                    .attr("fill", "black");
            });

            afficherDiplome(depart);
            afficherRepartitionVoteT1(depart);
            afficherVoteExprimeT1(depart);
            afficherTop3Candidat(depart);
            afficherIndiceDeJeune(depart)
            afficherAge(depart);
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
        .attr("transform", "translate(10, 20)");

    legend.append("circle")
        .attr("cx", 9)
        .attr("cy", 9)
        .attr("r", 9)
        .attr("fill", "black");

    legend.append("text")
        .attr("x", 25)
        .attr("y", 14)
        .style("font-size", "14px")
        .text("Département sélectionné");

    const candidats = [
        { nom: "Macron", couleur: "#9472F7" },
        { nom: "Le Pen", couleur: "#8CABED" },
        { nom: "Mélenchon", couleur: "#71E3D0" },
    ];

    candidats.forEach((candidat, index) => {
        legend.append("circle")
            .attr("cx", 9)
            .attr("cy", (index + 1) * 25 + 9)
            .attr("r", 9)
            .attr("fill", candidat.couleur);

        legend.append("text")
            .attr("x", 25)
            .attr("y", (index + 1) * 25 + 14)
            .style("font-size", "10px")
            .text(candidat.nom + " en tête");
    });
}
// DEPARTEMENT - PODIUM
function afficherTop3Candidat(depart) {
    fetch('json/resultats_t1.json')
        .then(response => response.json())
        .then(dataJson => {
            const departmentData = dataJson.find(item => item.libelle_du_departement_t1 === depart);

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

            if (departmentData) {
                nomMacron = departmentData.nom_c1_t1;
                totalMacronT1 = departmentData.voix_c1_t1;

                nomLassale = departmentData.nom_c3_2;
                totalLassaleT1 = departmentData.voix_c3_t1;

                nomLePen = departmentData.nom_c2_t1;
                totalLePenT1 = departmentData.voix_c2_t1;

                nomZemmour = departmentData.nom_c4_t1;
                totalZemmourT1 = departmentData.voix_c4_t1;

                nomMelanchon = departmentData.nom_c5_t1;
                totalMelanchonT1 = departmentData.voix_c5_t1;

                nomPecresse = departmentData.nom_c6_t1;
                totalPecresseT1 = departmentData.voix_c6_t1;
            }

            let candidats = [
                { nom: nomMacron, voix: totalMacronT1 },
                { nom: nomLassale, voix: totalLassaleT1 },
                { nom: nomLePen, voix: totalLePenT1 },
                { nom: nomZemmour, voix: totalZemmourT1 },
                { nom: nomMelanchon, voix: totalMelanchonT1 },
                { nom: nomPecresse, voix: totalPecresseT1 }
            ];

            candidats.sort((a, b) => b.voix - a.voix);
            let top3Candidats = candidats.slice(0, 3);

            document.getElementById('top1').innerHTML = `1.<br> ${top3Candidats[0].nom}`;
            document.getElementById('top2').innerHTML = `2.<br> ${top3Candidats[1].nom}`;
            document.getElementById('top3').innerHTML = ` 3.<br> ${top3Candidats[2].nom}`;
        })
        .catch(error => console.error('Erreur lors du chargement des données JSON:', error));
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
                        type: 'radialBar',
                        height: 200,
                        width: 250,
                    },
                    title: {
                        text: `Répartition des Votes`,
                        align: 'center',
                        style: {
                            fontSize: '15px',
                            fontWeight: '300',
                            color: '#464646'
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
                    colors: ['#7237B9', '#4D32E7', '#0b74d5', '#0F8385']
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
            let totalExprimesT1 = 0;
            let totalVotantT1 = 0;
            let totalInscritsT1 = 0;

            if (departmentData) {
                totalExprimesT1 = departmentData.exprimes_t1;
                totalBlancsT1 = departmentData.blancs_t1;
                totalNulsT1 = departmentData.nuls_t1;
                totalAbstententionsT1 = departmentData.abstentions_t1;
                totalVotantT1 = departmentData.votants_t1;
                totalInscritsT1 = departmentData.inscrits_t1;
            }

            // Afficher le nombre de votes exprimés dans la div
            document.getElementById('voteBlanc').innerHTML = `${totalBlancsT1.toLocaleString('fr-FR').replace(/\s/g, '   ')}<br> blancs`;
            document.getElementById('voteAbsten').innerHTML = `${totalAbstententionsT1.toLocaleString('fr-FR').replace(/\s/g, '   ')}<br> abstentions`;
            document.getElementById('voteNul').innerHTML = `${totalNulsT1.toLocaleString('fr-FR').replace(/\s/g, '   ')}<br> nuls`;
            document.getElementById('voteExprime').innerHTML = `${totalExprimesT1.toLocaleString('fr-FR').replace(/\s/g, '   ')}<br> exprimés`;
            document.getElementById('votant').innerHTML = `${totalVotantT1.toLocaleString('fr-FR').replace(/\s/g, '   ')} votants`;
            document.getElementById('inscrit').innerHTML = `${totalInscritsT1.toLocaleString('fr-FR').replace(/\s/g, '   ')} inscrits`;
            document.getElementById('nomDepart').innerHTML = `Vous avez choisi le département <span class="item_gras"> ${depart} </span> pour le <span class="item_gras"> Tour 1 </span>.`;
            document.getElementById('titre').innerHTML = `${depart}`;
        })
        .catch(error => console.error("Erreur lors du chargement des données:", error));
}

// PAGE DEPARTMENT - TOUR2 ----------------------------------

// DEPARTEMENT - COULEUR CARTE T2
function carteCouleurT2(depart) {
    // Charger les résultats du tour 2
    fetch('json/resultats_t2.json')
        .then(response => response.json())
        .then(data => {
            dataJsonT2 = data;  // Stocker les données du tour 2

            // Charger les données GeoJSON
            d3.json('json/a-dep2021.json').then(function (geojson) {
                deps.selectAll("path")
                    .data(geojson.features)
                    .join("path")
                    .attr('class', 'department')
                    .attr("d", path)
                    .attr("fill", function (d) {
                        const departmentData = dataJsonT2.find(item => item.libelle_du_departement_t2 === d.properties.libgeo);
                        if (departmentData) {
                            let totalMacronT2 = departmentData.voix_c1_t2;
                            let totalLePenT2 = departmentData.voix_c2_t2;
                            return totalMacronT2 > totalLePenT2 ? "#7237B9" : "#0b74d5";
                        }
                        return "#C8C8C8";
                    })
                    .on("mouseover", function (event, d) {
                        d3.select(this).attr("fill", "black");
                        div.transition()
                            .duration(200)
                            .style("opacity", .9);
                        div.html(d.properties.libgeo)
                            .style("left", (event.pageX + 20) + "px")
                            .style("top", (event.pageY - 20) + "px")
                    })
                    .on("mouseout", function (event, d) {
                        div.html('');
                        const departmentData = dataJsonT2.find(item => item.libelle_du_departement_t2 === d.properties.libgeo);
                        if (departmentData) {
                            let totalMacronT2 = departmentData.voix_c1_t2;
                            let totalLePenT2 = departmentData.voix_c2_t2;
                            const fillColor = totalMacronT2 > totalLePenT2 ? "#7237B9" : "#0b74d5";
                            d3.select(this).attr("fill", fillColor);
                        } else {
                            d3.select(this).attr("fill", "#C8C8C8");
                        }
                    });

                deps.selectAll("path")
                    .filter(d => d.properties.libgeo === selectedDepartment)
                    .attr("fill", "black");
            });

            // Appel des fonctions pour afficher les informations supplémentaires

            afficherDiplome(depart);
            afficherRepartitionVoteT2(depart);
            afficherVoteExprimeT2(depart);
            afficherTop2Candidat(depart);
            afficherIndiceDeJeune(depart);
            afficherAge(depart);
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
        .attr("transform", "translate(10, 20)");

    legend.append("circle")
        .attr("cx", 9)
        .attr("cy", 9)
        .attr("r", 9)
        .attr("fill", "black");

    legend.append("text")
        .attr("x", 25)
        .attr("y", 14)
        .style("font-size", "14px")
        .text("Département sélectionné");

    const candidats = [
        { nom: "Macron", couleur: "#7237B9" },
        { nom: "Le Pen", couleur: "#0b74d5" },
    ];

    candidats.forEach((candidat, index) => {
        legend.append("circle")
            .attr("cx", 9)
            .attr("cy", (index + 1) * 25 + 9)
            .attr("r", 9)
            .attr("fill", candidat.couleur);

        legend.append("text")
            .attr("x", 25)
            .attr("y", (index + 1) * 25 + 14)
            .style("font-size", "10px")
            .text(candidat.nom + " en tête");
    });
}

// DEPARTEMENT - PODIUM
function afficherTop2Candidat(depart) {
    fetch('json/resultats_t2.json')
        .then(response => response.json())
        .then(dataJson => {
            const departmentData = dataJson.find(item => item.libelle_du_departement_t2 === depart);

            let totalMacronT2 = 0;
            let nomMacronT2 = '';
            let totalLePenT2 = 0;
            let nomLePenT2 = '';

            if (departmentData) {
                nomMacronT2 = departmentData.nom_c1_t2;
                nomLePenT2 = departmentData.nom_c2_t2;
                totalMacronT2 = departmentData.voix_c1_t2;
                totalLePenT2 = departmentData.voix_c2_t2;
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

            document.getElementById('top1').innerHTML = `1.<br> ${top2Candidats[0].nom}`;
            document.getElementById('top2').innerHTML = `2.<br> ${top2Candidats[1].nom}`;
            document.getElementById('top3').innerHTML = ``;

        })
        .catch(error => console.error('Erreur lors du chargement des données JSON:', error));
}

// DEPARTEMENT - REPARTITION VOTE T2
function afficherRepartitionVoteT2(depart) {
    fetch('json/resultats_t2.json')
        .then(response => response.json())
        .then(dataJson => {
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
                        type: 'radialBar',
                        height: 200,
                        width: 250,
                    },
                    title: {
                        text: `Répartition des Votes`,
                        align: 'center',
                        style: {
                            fontSize: '15px',
                            fontWeight: '300',
                            color: '#464646'
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
                    colors: ['#7237B9', '#4D32E7', '#0b74d5', '#0F8385']
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
            // let nomDepart = '';

            if (departmentData) {
                totalExprimesT2 = departmentData.exprimes_t2; // Utiliser la bonne clé pour obtenir le nombre de votes exprimés
                totalBlancsT2 = departmentData.blancs_t2;
                totalNulsT2 = departmentData.nuls_t2;
                totalAbstententionsT2 = departmentData.abstentions_t2;
                totalVotantT2 = departmentData.votants_t2;
                totalInscritsT2 = departmentData.inscrits_t2;
                // nomDepart = departmentData.libelle_du_departement_t2;
            }

            // Afficher le nombre de votes exprimés dans la div
            document.getElementById('voteBlanc').innerHTML = `${totalBlancsT2.toLocaleString('fr-FR').replace(/\s/g, '   ')}<br> blancs`;
            document.getElementById('voteAbsten').innerHTML = `${totalAbstententionsT2.toLocaleString('fr-FR').replace(/\s/g, '   ')}<br> abstentions`;
            document.getElementById('voteNul').innerHTML = `${totalNulsT2.toLocaleString('fr-FR').replace(/\s/g, '   ')}<br> nuls`;
            document.getElementById('voteExprime').innerHTML = `${totalExprimesT2.toLocaleString('fr-FR').replace(/\s/g, '   ')}<br> exprimés`;
            document.getElementById('votant').innerHTML = `${totalVotantT2.toLocaleString('fr-FR').replace(/\s/g, '   ')} votants`;
            document.getElementById('inscrit').innerHTML = `${totalInscritsT2.toLocaleString('fr-FR').replace(/\s/g, '   ')} inscrits`;
            document.getElementById('nomDepart').innerHTML = `Vous avez choisi le département <span class="item_gras">${depart}</span> pour le <span class="item_gras">Tour 2</span>.`;
            document.getElementById('titre').innerHTML = `${depart}`;
        })
        .catch(error => console.error("Erreur lors du chargement des données:", error));
}

// GENERAL--------------------------------------------------------------------------------------------------------
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
                            text: `Répartition des CSP`,
                            align: 'center',
                            style: {
                                fontSize: '15px',
                                fontWeight: '300',
                                color: '#464646'
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
                            categories: ['Agriculteurs', 'Artisans', 'Cadres', 'Professions intermédiaires', 'Employés', 'Ouvriers', 'Retraités', 'Autres inactifs'],
                        },
                        colors: ['#7237B9']
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

// DEPARTEMENT - graph diplome T1/T2
function afficherDiplome(depart) {
    fetch('json/jeunesse_diplome_chom.json')
        .then(response => response.json())
        .then(dataJson => {
            const departmentData = dataJson.find(item => item.libGeo === depart);

            if (departmentData) {

                const partPopSansDip = departmentData.partPopSansDip;
                const partPopBepCap = departmentData.partPopBepCap;
                const partPopBac = departmentData.partPopBac;
                const partPopBacSup = departmentData.partPopBacSup;

                // console.log('test', partPopSansDip, partPopBacSup, partPopBepCap, partPopSansDip);
                var options = {
                    series: [{
                        name: 'En pourcentage ',
                        data: [partPopSansDip, partPopBepCap, partPopBac, partPopBacSup],
                    }],
                    chart: {
                        type: 'bar',
                        height: '300px'
                    },
                    title: {
                        text: 'Niveau de diplome',
                        align: 'center',
                        style: {
                            fontSize: '15px',
                            fontWeight: '300',
                            color: '#464646'
                        }
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '25%',
                            borderRadius: 8,
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
                    // title: {
                    //     text: 'Basic Radar Chart'
                    // },
                    yaxis: {
                        stepSize: 20
                    },
                    xaxis: {
                        categories: ['sans diplome', 'BEP/CAP', 'Niveau BAC', 'BAC+2 ou plus']
                    },
                    colors: ['#BC8FF4'],
                    fill: {
                        opacity: 1
                    },
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return val + " % "
                            }
                        }
                    }
                };
                document.querySelector("#graph_test").innerHTML = "";
                var graph_test = new ApexCharts(document.querySelector("#graph_test"), options);
                graph_test.render();

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

//-----------------AFFICHE TANCHE AGE
function afficherAge(depart) {
    fetch('json/age_dep.json')
        .then(response => response.json())
        .then(dataJson => {
            let departmentData = dataJson.find(item => item.nom === depart);
            let nom = '';
            let tranche1 = 0;
            let tranche2 = 0;
            let tranche3 = 0;
            let tranche4 = 0;
            if (departmentData) {
                nom = departmentData.nom;
                tranche1 = departmentData.tranche1;
                tranche2 = departmentData.tranche2;
                tranche3 = departmentData.tranche3;
                tranche4 = departmentData.tranche4;

            }
            var options = {
                series: [{
                    name: 'Tranches d\'âge',
                    data: [tranche1, tranche2, tranche3, tranche4],
                }],
                chart: {
                    height: 350,
                    type: 'radar',
                },
                title: {
                    text: 'Représentation des votants par âge',
                    align: 'center',
                    style: {
                        fontSize: '15px',
                        fontWeight: '300',
                        color: '#464646'
                    }
                },
                yaxis: {
                    show: false,
                    labels: {
                        formatter: function (value) {
                            return value + "%";
                        }
                    }
                },
                xaxis: {
                    categories: ['20-39 ans', '40-59 ans', '60-74 ans', '75 et plus']
                },
                colors: ['#7237B9']
            };
            document.querySelector("#age_dep").innerHTML = "";
            var age_dep = new ApexCharts(document.querySelector("#age_dep"), options);
            age_dep.render();

        })
}

//-------------------INDICE DE JEUNESSE
function afficherIndiceDeJeune(depart) {
    fetch('json/jeunesse_diplome_chom.json')
        .then(response => response.json())
        .then(dataJson => {
            const departmentData = dataJson.find(item => item.libGeo === depart);
            let indiceJeunesse = 0;
            if (departmentData) {
                indiceJeunesse = departmentData.indiceJeunesse;
            }
            document.getElementById('indice_jeunesse').innerHTML = `<div id="div_titre_jeune"><img class="image_info" src="images/icones/information.png" alt="icone information"><p class="indice_titre">Indice de jeunesse</p><div class="vignette">L'indice de jeunesse est le rapport entre le nombre de jeunes et le nombre de personnes âgées dans une population.</br></br>indice supérieur à 1 = population jeune</br>indice inférieur à 1 = population vieillissante</div></div><p class="indice_chiffre">${indiceJeunesse}</p>`;
        })
}

