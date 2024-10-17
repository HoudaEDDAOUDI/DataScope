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
            <input type="radio" id="tour1" name="choix" value="tour1" class="radio-input" />
            <div class="radio-design"></div>
            <div class="label-text">Tour 1</div>

            <!-- <label for="tour1">Tour 1</label> -->
        </label>
        <label class="label">
            <input type="radio" id="tour2" name="choix" value="tour2" class="radio-input" />
            <div class="radio-design"></div>
            <div class="label-text">Tour 2</div>

            <!-- <label for="tour2">Tour 2</label> -->
        </label>
        <button type="submit" id="submitButton">Envoyer</button>
        <!-- </form> -->
    </div>
    <div id="nomDepart"></div>
    <div class="grid_depart">
        <div id="map" class="item_carte"></div>
        <div class="item_classement">Veuillez choisir un département</div>
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
    <h3>Les variables socio démographique de </h3>
    <div class="variable_socio_depart">
        <div id="part_csp">Part des catégories socio professionnelles</div>

        <div id="part_age">Représentation des votants par âge</div>

    </div>
</div>
<?php
include("autres_pages/footer.php");
?>