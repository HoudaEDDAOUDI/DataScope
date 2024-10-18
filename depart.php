<?php
include("autres_pages/header.php");
?>
<div class="block_principale cadre_scroll block_france">
    <h1>Dans chaque départements</h1>
    <h2 class="h2_titre">Les chiffres clés des élections présidentielles en France en 2022</h2>

    <div class="select_param_depart">

        <!-- <form action="" id="form_depart"> -->
        <!-- <label for="departements"></label>
        <select id="departements"></select> -->
        <div class="select">
            <div class="selected"></div>
            <!-- <div class="selected">Sélectionner un département <span class="arrow"></span></div> -->
            <div class="options" id="departements"></div> <!-- id="departements" conservé -->
        </div>

        <label class="label">
    <input type="radio" id="tour1" name="choix" value="tour1" class="radio-input">
    <span class="radio-design"></span> <!-- Utilisation de <span> -->
    <span class="label-text">Tour 1</span>
</label>
<label class="label">
    <input type="radio" id="tour2" name="choix" value="tour2" class="radio-input">
    <span class="radio-design"></span> <!-- Utilisation de <span> -->
    <span class="label-text">Tour 2</span>
</label>
        <button type="submit" id="submitButton" class="envoyer">&#10004;</button>
        <!-- </form> -->
    </div>
    <div id="nomDepart">Veuillez choisir un département</div>
    <div class="grid_depart">
        <div id="map" class="item_carte"></div>
        <div class="item_classement">
            <div id="top1"></div>
            <div id="top2"></div>
            <div id="top3"></div>
        </div>
        <div id="inscrit" class="item_inscrit_depart"></div>
        <div id="votant" class="item_votants_depart"></div>
        <div class="item_repart_vote">
            <div id="tendanceVote" class="item_graph_votant"></div>
            <div id="voteExprime" class="item_text_exprim item2"></div>
            <div id="voteBlanc" class="item_text_blanc item5"></div>
            <div id="voteAbsten" class="item_text_abs item6"></div>
            <div id="voteNul" class="item_text_nul item4"></div>
        </div>
    </div>
    <h3>Les variables socio démographique de <span id="titre"></span></h3>
    <div id="explication_socio">
        <p>Ci-dessous nous pouvons voir différents graphiques sur la population représentative du département choisi. Attention ces graphiques ne représentent pas uniquement les votants mais tous les citoyens du département. Ils n'ont donc pas un lien direct avec les élections. Néanmoins cela nous donne tout de même une idée sur les votants.</p>
    </div>
    <div class="variable_socio_depart">
        <div id="csp" class="part_csp">Part des catégories socio professionnelles</div>

        <div id="age_dep" class="part_age">Représentation des votants par âge</div>
        <div id="indice_jeunesse" class="indice_jeunesse"></div>
        <div id="graph_test" class="niv_diplome"></div>

        <!-- <div id="graph_test"></div> -->

    </div>
</div>
<?php
include("autres_pages/footer.php");
?>