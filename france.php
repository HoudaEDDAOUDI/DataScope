<?php
    include("autres_pages/header.php");
?>

    <div class="block_principale block_france cadre_scroll">
        <h1>En France</h1>
        <h2 class="h2_titre">Les chiffres clés des élections présidentielles en France en 2022</h2>
<div id="inscrit_t1" class="nb_inscrit_fr titre_tours"><p>Nombre d'inscrits</p></div>
    <div class="tours_france">
        <div class="tour1_france">
            <p class="titre_tours">Tour 1</p>
            <div class="tour1_grid-container">
            <div id="votant_t1" class="nb_votants"></div>
                    
                        <div id="chart" class="item1"></div>

                        <div id="voteExprime_t1" class="item2"></div>
                        
                        <canvas id="top3t1" class="item3"></canvas>
                        
                        <div id="voteNul_t1" class="item4"></div>
                        <div id="voteBlanc_t1" class="item5"></div>
                        <div id="voteAbsten_t1" class="item6"></div>
                    </div>
                </div>
                <div class="tour2_france">
                    <p class="titre_tours">Tour 2</p>
                    <div class="tour2_grid-container">
                    <div id="votant_t2" class="nb_votants"></div>
                            
                        
                            <div id="chartencore" class="tour2_item1"></div>
                        
                            <div id="voteExprime_t2" class="tour2_item2"></div>
                        
                            <canvas id="top2t2" class="tour2_item3"></canvas>
                        
                            <div id="voteNul_t2" class="tour2_item4"></div>
                            <div id="voteBlanc_t2" class="tour2_item5"></div>
                            <div id="voteAbsten_t2" class="tour2_item6"></div>
                        </div>
                        </div>
            </div>
            <h3>Le vote selon les variables socio démographiques</h3>
                <div id="age_france">
                    <div id="graph_age_france">
                            <div  class="item_age_titre">L’âge : Participation aux élections présidentielles selon l’âge en 2022</div>
                            <div class="item_age_legende">
                                <div class="leg_1"><div class="couleur_leg_1"></div>Vote aux 2 tours</div>
                                <div class="leg_2"><div class="couleur_leg_2"></div>Tour 1 seulement</div>
                                <div class="leg_3"><div class="couleur_leg_3"></div>Tour 2 seulement</div>
                                <div class="leg_4"><div class="couleur_leg_4"></div>Pas voté</div>
                            </div>
                            <div id="age" class="item_age_graph"></div>

                    </div>
</div>

                    <div id="socio_france">
                    <div id="graph_socio_france">
                            <div class="item_socio_titre">La zone d’habitation : Score des principaux candidats au premier tour de l’élection présidentielle par zone de résidence</div>
                            <div id="zone" class="item_socio_graph"></div>
                    </div>

                </div>
<a href="depart.php" class="chang_page">Les chiffres par départements <span>&#10138;</span></a>
</div>
<?php
    include("autres_pages/footer.php");
?>