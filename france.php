<?php
    include("autres_pages/header.php");
?>

    <div class="block_principale block_france cadre_scroll">
        <h1>En France</h1>
        <h2 class="h2_titre">Les chiffres clés des élections présidentielles en France en 2022</h2>
<div class="nb_inscrit_fr titre_tours"><p>Nombre d'inscrits</p></div>
    <div class="tours_france">
        <div class="tour1_france">
            <p class="titre_tours">Tour 1</p>
            <div class="tour1_grid-container">
            <div class="nb_votants">Nombre de votants</div>
                    
                        <div id="chart" class="item1"></div>

                        <div class="item2">EXPRIMÉ</div>
                        
                        <canvas id="top3t1" class="item3"></canvas>
                        
                        <div class="item4">VOTE NUL</div>
                        <div class="item5">VOTE BLANC</div>
                        <div class="item6">ABSTENTION</div>
                    </div>
                </div>
                <div class="tour2_france">
                    <p class="titre_tours">Tour 2</p>
                    <div class="tour2_grid-container">
                    <div class="nb_votants">Nombre de votants</div>
                            
                        
                            <div id="chartencore" class="tour2_item1"></div>
                        
                            <div class="tour2_item2">EXPRIMÉ</div>
                        
                            <canvas id="top2t2" class="tour2_item3"></canvas>
                        
                            <div class="tour2_item4">VOTE NUL</div>
                            <div class="tour2_item5">VOTE BLANC</div>
                            <div class="tour2_item6">ABSTENTION</div>
                        </div>
                        </div>
            </div>
            <h3>Le vote selon les variables socio démographiques</h3>
                <div id="age_france">
                    <div id="graph_age_france">
                            <div  class="item_age_titre">L’âge : Participation aux élections présidentielles selon l’âge en 2022</div>
                            <div class="item_age_legende">Légende</div>
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