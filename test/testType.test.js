const travail = require("../dist/TestTypeScript");


it('Creer Tache',() => {
    const titre = "Titre 1";
    const description  = "Description 1";
    expect(travail.creerTache(titre,description)).toEqual({"titre":"Titre 1","description":"Description 1"});
});


it('Ajouter Tache',() => {
    taches = [];
    const titre = "Titre 1";
    const description  = "Description 1";
    evt = travail.creerTache(titre,description);
    resultat = travail.addTache(taches,evt);
    expect(resultat).toEqual([{"titre":"Titre 1","description":"Description 1"}])
});
