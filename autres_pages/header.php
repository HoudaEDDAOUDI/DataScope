<!DOCTYPE html>
<html lang="fr">
<head>
    <meta name="description" content="DataScope met en avant les résultats des élections présidentielles 2022 en France. Explorez des visualisations interactives et détaillées des données électorales par département pour une analyse complète." />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DataScope</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" type="image/png" href="images/logos/fav_noir.png"/> 
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="js/graph.js" defer type="module"></script>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
</head>
<body>
    <header>
        <img class="logo_menu"src="images/logos/logo_noir.png" alt="logo DataScope">
        <nav>
            <ul>
                <li <?php echo (basename($_SERVER['PHP_SELF']) == "index.php") ? 'class="current"' : ''; ?>><a href="index.php"><img src="<?php echo (basename($_SERVER['PHP_SELF']) == "index.php") ? 'images/icones/accueil_bleu.png' : 'images/icones/accueil_gris.png'; ?>" alt="icone Accueil">Accueil</a></li>
                <li <?php echo (basename($_SERVER['PHP_SELF']) == "france.php") ? 'class="current"' : ''; ?>><a href="france.php"><img src="<?php echo (basename($_SERVER['PHP_SELF']) == "france.php") ? 'images/icones/france_bleu.png' : 'images/icones/france_gris.png'; ?>" alt="icone France">En France</a></li>
                <li <?php echo (basename($_SERVER['PHP_SELF']) == "depart.php") ? 'class="current"' : ''; ?>><a href="depart.php"><img src="<?php echo (basename($_SERVER['PHP_SELF']) == "depart.php") ? 'images/icones/depart_bleu.png' : 'images/icones/depart_gris.png'; ?>" alt="icone département">Dans chaque département</a></li>
                <li <?php echo (basename($_SERVER['PHP_SELF']) == "analyse.php") ? 'class="current"' : ''; ?>><a href="analyse.php"><img src="<?php echo (basename($_SERVER['PHP_SELF']) == "analyse.php") ? 'images/icones/conclu_bleu.png' : 'images/icones/conclu_gris.png'; ?>" alt="icone analyse">Analyse</a></li>
                <li <?php echo (basename($_SERVER['PHP_SELF']) == "coord.php") ? 'class="current"' : ''; ?>><a href="coord.php"><img src="<?php echo (basename($_SERVER['PHP_SELF']) == "coord.php") ? 'images/icones/coord_bleu.png' : 'images/icones/coord_gris.png'; ?>" alt="icone coordonnées">Coordonnées</a></li>
                <li <?php echo (basename($_SERVER['PHP_SELF']) == "ref.php") ? 'class="current"' : ''; ?>><a href="ref.php"><img src="<?php echo (basename($_SERVER['PHP_SELF']) == "ref.php") ? 'images/icones/ref_bleu.png' : 'images/icones/ref_gris.png'; ?>" alt="icone références">Références</a></li>
            </ul>
        </nav>
</header>
    
</body>
</html>
