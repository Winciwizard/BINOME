$(document).ready(function($) {

    var tableauListeEleve = [ //tableau de la liste des élèves
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

        $('.groupeTravail').remove();
        $('.erreur').remove();


        var nombreDeGroupe = $('#nombreDeGroupe').val();

        if (tableauResultats.length === tailleTableau){ //vérifie si le tableau est plein et le vide le cas échéant
            tableauResultats = [];
        };

        for (var i = 1; i <= tailleTableau; i++) {

            
            var indexEleveAleatoire = (Math.floor((tailleTableau)*Math.random()));

            while ($.inArray(indexEleveAleatoire, tableauResultats) != -1) {
        
                    indexEleveAleatoire = (Math.floor((tailleTableau)*Math.random()));

            };

        tableauResultats.push(indexEleveAleatoire); //rajoute le nombre aléatoire dans le tableau des résultats
            
        };

    if(nombreDeGroupe < 2 || nombreDeGroupe > 7){

        $listeGroupes.append('<div class="erreur" id="erreur">Le nombre de groupe doit être compris entre 2 et 7</div>');
    
    } else {

    if (tailleTableau%nombreDeGroupe === 0){

        var nbEleve = 0;

        for (var a = 1; a <= nombreDeGroupe; a++) {
            
            var personnesParGroupe = tailleTableau / nombreDeGroupe;

            $listeGroupes.append('<div class="groupeTravail" id="groupeTravail' + a + '">Groupe ' + a + ' :</div>');
            
            for (var b = 1; b <= personnesParGroupe; b++) {
                
                $('#groupeTravail'+a).append('<span> /'+tableauListeEleve[tableauResultats[nbEleve]]+'./ </span>')
                nbEleve++;
            };


        };
    };


    if (tailleTableau%nombreDeGroupe != 0){

        if (nombreDeGroupe === "6") {

            var nbEleve = 0;
    
            for (var m = 1; m <= nombreDeGroupe; m++){
                
                $listeGroupes.append('<div class="groupeTravail" id="groupeTravail' + m + '">Groupe ' + m + ' :</div>');
    
                for (var n = 1; n <= 3; n++){
                    $('#groupeTravail'+m).append('<span> /'+tableauListeEleve[tableauResultats[nbEleve]]+'./ </span>');
                    nbEleve++;
                };
    
                m++;
    
                $listeGroupes.append('<div class="groupeTravail" id="groupeTravail' + m + '">Groupe ' + m + ' :</div>');
    
                for (var o = 1; o <= 2; o++){
                    $('#groupeTravail'+m).append('<span> /'+tableauListeEleve[tableauResultats[nbEleve]]+'./ </span>');
                    nbEleve++;
                };
                
            };
        } else {

            var nbEleve = 0,
                personnesParGroupe = tailleTableau / nombreDeGroupe;

            var personnesParGroupeCalcul = Math.floor(personnesParGroupe);

            for (var e = 1; e < nombreDeGroupe; e++) {

                $listeGroupes.append('<div class="groupeTravail" id="groupeTravail' + e + '">Groupe ' + e + ' :</div>');

                for (var f=1; f <= personnesParGroupeCalcul; f++){
                    $('#groupeTravail'+e).append('<span> /'+tableauListeEleve[tableauResultats[nbEleve]]+'./ </span>');
                    nbEleve++;
                };
            };

            $listeGroupes.append('<div class="groupeTravail" id="groupeTravail' + e + '">Groupe ' + e + ' :</div>');

            for (var g=1; g <= (Math.ceil(personnesParGroupe)); g++){
                $('#groupeTravail'+e).append('<span> /'+tableauListeEleve[tableauResultats[nbEleve]]+'./ </span>');
                nbEleve++;
            };
        };

    };
    
    //AFFICHE LA LISTE ALEATOIRE DES ELEVES - LAISSER SI TEST NECESSAIRES
    //for (var z=0;z<tailleTableau;z++){
    //    console.log(tableauListeEleve[tableauResultats[z]]);
    //};

    };
    
    });


});