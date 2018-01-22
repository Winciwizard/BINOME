$(document).ready(function($) {

    var tableauListeEleve = [ //tableau de la liste des élèves
        "Vincent V",
        "Theo",
        "Zouleka"
        ,"Alexandre Bou",
        "Vincent M",
        "Amhed",
        "Eric",
        "Alexandre Bi",
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

        var nombreDeGroupe = $('#nombreDeGroupe').val();

        if (tableauResultats.length === tailleTableau){ //vérifie si le tableau est plein et le vide le cas échéant
            tableauResultats = [];
        };

        for (var i = 0; i < tailleTableau; i++) {

            
            var indexEleveAleatoire = (Math.floor((tailleTableau)*Math.random()));

            while ($.inArray(indexEleveAleatoire, tableauResultats) != -1) {
        
                    indexEleveAleatoire = (Math.floor((tailleTableau)*Math.random()));

            };

        tableauResultats.push(indexEleveAleatoire); //rajoute le nombre aléatoire dans le tableau des résultats
            
        };

    console.log(nombreDeGroupe);


    if (tailleTableau%nombreDeGroupe != 0){
        console.log('erreur');
    } else {
        
        var nbEleve = 1;

        for (var a = 1; a <= nombreDeGroupe; a++) {
            
            var personnesParGroupe = tailleTableau / nombreDeGroupe;

            $listeGroupes.append('<div id="groupeTravail' + a + '"></div>');
            for (var b = 1; b <= personnesParGroupe; b++) {
                $('#groupeTravail'+a).append('<span> '+tableauListeEleve[tableauResultats[nbEleve]]+' </span>')
                nbEleve++;
            };


        };
    };
    

    console.log(personnesParGroupe);

    

    });

});