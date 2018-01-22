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

    console.log('nb groupe '+nombreDeGroupe);


    if (tailleTableau%nombreDeGroupe != 0){
        console.log('erreur');
    } else {
        
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
    

    console.log('nb personne par groupe '+personnesParGroupe);

    for (var z=0;z<tailleTableau;z++){
        console.log(tableauResultats);
        console.log(tableauListeEleve[tableauResultats[z]]);
    };
    

    });

});