<?php
    include("autres_pages/header.php");
?>
    <div class="block_principale cadre_scroll block_france">
        <h1>Dans chaque départements</h1>
        <h2 class="h2_titre">Les chiffres clés des élections présidentielles en France en 2022</h2>
        
        <div class="select_param_depart">
            <form action="" id="form_depart">
            <select id="departementDropdown"></select>
            <div>
                <input type="radio" id="tour1" name="tour" value="tour1"/>
                <label for="tour1">Tour 1</label>
            </div>
            <div>
                <input type="radio" id="tour2" name="tour" value="tour2"/>
                <label for="tour2">Tour 2</label>
            </div>
            <div>
                <input type="submit" value="Voir"/>
            </div>
            </form>
        
        </div>

        <div class="grid_depart">
            <div class="item_carte">Carte departements</div>
            <div class="item_classement">Classement des candidats</div>
            <div class="item_inscrit_depart">Nombre d'inscrits</div>
            <div class="item_votants_depart">Nombre de votants</div>
            <div class="item_repart_vote">
                <div class="item_graph_votant">Vote par rapport aux inscrits</div>
                <div class="item_text_exprim">Votes exprimés</div>
                <div class="item_text_blanc">Votes blanc</div>
                <div class="item_text_abs">Votes abstenus</div>
                <div class="item_text_nul">Votes nuls</div>
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