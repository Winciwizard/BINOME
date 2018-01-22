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
         for (a = 1; a <= tailleTableau; a++) {
                
            $listeGroupes.append('<div class="groupeTravail"></div>');
            
        }
    };
    
    var personnesParGroupe = tailleTableau / nombreDeGroupe;

    console.log(personnesParGroupe);

    

    });

});