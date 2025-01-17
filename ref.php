<?php
    include("autres_pages/header.php");
?>
    <div class="block_principale block">
        <h1>Nos références</h1>
        <div id="references_grid">
            <div id="insee_ref"><img src="images/logos/insee_logo.png" alt="logo insee">
            <p>Les données utilisées sur ce site proviennent des bases de données publiques mises à disposition par l'INSEE (Institut national de la statistique et des études économiques). Elles incluent des informations démographiques, socio-économiques et électorales, permettant une analyse approfondie des résultats des élections présidentielles de 2022 par département.<br><br>Pour en savoir plus et accéder aux sources officielles, nous vous invitons à consulter le site de l'INSEE.</p>
            <a href="https://www.insee.fr/fr/accueil" class="chang_page">Consulter le site<span>&#10138;</span></a></div>
            <div id="open_data_ref"><img src="images/logos/open_data_logo.png" alt="logo open data university">
            <p>Les données utilisées sur ce site proviennent des bases de données publiques mises à disposition par l’Open Data University dans la catégories élections.  Nous nous sommes concentrées sur les élections présidentielles de 2022, le site lui propose un plus large choix d’élections. Mais aussi d’autres informations comme les niveaux de vie, les revenus la pauvreté et d’autres encore.<br><br>Pour en savoir plus et accéder aux sources officielles, nous vous invitons à consulter le site de l'Open Data University.</p>
            <a href="https://defis.data.gouv.fr/defis/elections" class="chang_page">Consulter le site<span>&#10138;</span></a></div>
        </div>
        <h3 id="h3_ref">Nos tables de données</h3>
        <div id="grid_ref">
            <div class="ref_tour1">
                <p>Résultats élections présidentielles 2022 Tour 1</p>
                <a href="xlsx/resultats-par-niveau-dpt-t1-france-entiere.xlsx" target="_blank"><img class="ref_icones" src="images/icones/telecharger.png" alt="icone téléchargement"></a>
            </div>
            <div class="ref_tour2">
            <p>Résultats élections présidentielles 2022 Tour 2</p>
            <a href="xlsx/resultats-par-niveau-dpt-t2-france-entiere.xlsx" target="_blank"><img class="ref_icones" src="images/icones/telecharger.png" alt="icone téléchargement"></a>

            </div>
            <div class="ref_estimation">
            <p>Estimations démographiques départementales des populations en 2020</p>
            <a href="xlsx/estimations-demographiques_2020_QPV2024_Departemen.xlsx" target="_blank"><img class="ref_icones" src="images/icones/telecharger.png" alt="icone téléchargement"></a>
            </div>
        </div>
    </div>
<?php
    include("autres_pages/footer.php");
?>