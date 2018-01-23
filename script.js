$(document).ready(function($) {

    var tableauListeEleve = [ //Tableau de la liste des élèves
        "VincentV",
        "Theo",
        "Zouleka",
        "AlexandreBo",
        "VincentM",
        "Amhed",
        "Eric",
        "AlexandreBi",
        "Arnaud",
        "Cecilia",
        "Julien",
        "Isabelle",
        "Igor",
        "Sandrine",
        "Samir"
    ];

    var $boutonNomAleatoire = $('#boutonNomAleatoire'),
        $listeGroupes = $('#listeGroupes'),
        $groupeTravail = $('#groupeTravail'),
        tailleTableau = tableauListeEleve.length,
        nombreDeGroupe,
        tableauResultats = [];

    $boutonNomAleatoire.click(function() {

        $('.groupeTravail').remove();//Efface les messages précédents
        $('.erreur').remove();


        var nombreDeGroupe = $('#nombreDeGroupe').val();//Recupére le nombre de groupes choisis

        if (tableauResultats.length === tailleTableau){ //Vérifie si le tableau est plein et le vide le cas échéant
            tableauResultats = [];
        };

        for (var i = 1; i <= tailleTableau; i++) {//Boulce de remplissage du tableau avec les index aléatoires

            var indexEleveAleatoire = (Math.floor((tailleTableau)*Math.random()));//Sort un nombre aléatoire entre 1 et 15

            while ($.inArray(indexEleveAleatoire, tableauResultats) != -1) {//Verifie qu'il n'est pas déjà dans le tableau
                indexEleveAleatoire = (Math.floor((tailleTableau)*Math.random()));//Sinon retire au sort un index juqu'a ce qu'il ne soit pas dans le tableau
            };

        tableauResultats.push(indexEleveAleatoire); //rajoute le nombre aléatoire dans le tableau des résultats   
        };


    function impressionNom(numGroup, limiteHaute){//Fonction d'affichage des noms

        $listeGroupes.append('<div class="groupeTravail" id="groupeTravail' + numGroup + '">Groupe ' + numGroup + ' </div>');//Integre un div qui englobe tous les élèves d'un groupe
            
        for (var b = 1; b <= limiteHaute; b++) {//Integre un span dans le code pour chaque éléve en fonction du nombre par groupe
            $('#groupeTravail'+ numGroup).append('<span class="nomEleve"> : '+tableauListeEleve[tableauResultats[nbEleve]]+' </span>')
            nbEleve++;
        };
    };




    if(nombreDeGroupe < 2 || nombreDeGroupe > 7){//Vérification que le nombre de groupe soit bien compris entre 2 et 7 inclus

        $listeGroupes.append('<div class="erreur" id="erreur">Le nombre de groupe doit être compris entre 2 et 7</div>');
    
    } else {

    if (tailleTableau%nombreDeGroupe === 0){//Si le nombre d'élèves est divisible par le nombre de groupes (pour 5 et 3 groupes)

        var nbEleve = 0;

        for (var a = 1; a <= nombreDeGroupe; a++) {//Affiche x groupe de y personnes
            var personnesParGroupe = tailleTableau / nombreDeGroupe;

            impressionNom(a, personnesParGroupe);
        };
    };


    if (tailleTableau%nombreDeGroupe != 0){//Si le nombre d'élèves est n'est pas divisible par le nombre de groupes

        if (nombreDeGroupe === "6") {//Pour 6 groupes

            var nbEleve = 0;
    
            for (var m = 1; m <= nombreDeGroupe; m++){ //Affiche 3 fois 1 groupe de 3 et 1 groupe de 2
                impressionNom(m, 3);
                m++;
                impressionNom(m, 2);    
            };
        } else {//Pour les autres nombre de groupes (2,4,7)

            var nbEleve = 0,
                personnesParGroupe = tailleTableau / nombreDeGroupe;

            var personnesParGroupeCalcul = Math.floor(personnesParGroupe);

            for (var e = 1; e < nombreDeGroupe; e++) {//Integre x groupe avec pour le dernier groupe 1 élève de plus que les autres
                impressionNom(e, personnesParGroupeCalcul);
            };

            impressionNom(e, (Math.ceil(personnesParGroupe))); 
        };
    };
    
    //AFFICHE LA LISTE ALEATOIRE DES ELEVES - LAISSER SI TEST NECESSAIRES
    //for (var z=0;z<tailleTableau;z++){
    //    console.log(tableauListeEleve[tableauResultats[z]]);
    //};

    };
    
    });
});