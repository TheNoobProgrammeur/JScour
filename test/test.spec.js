const travail = require("../travail");



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

it('Suprimer Tache',()=>{

    const titre = "Titre 1";
    const description  = "Description 1";
    evt = travail.creerTache(titre,description);

    const titre2 = "Titre 2";
    const description2  = "Description 2";
    evt2 = travail.creerTache(titre2,description2);

    taches = [];
    taches = travail.addTache(taches,evt);
    taches = travail.addTache(taches,evt2);
    resultat = travail.delTache(taches,evt);
    expect(resultat).toEqual([evt2]);
});

it('Afficher Taches',()=>{
    taches = [];
    const titre = "Titre 1";
    const description  = "Description 1";
    evt = travail.creerTache(titre,description);
    resultat = travail.addTache(taches,evt);
    expect(travail.afficherTache(resultat)).toEqual(`
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    0 - titre : Titre 1 , description : Description 1
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`);
});


it("Modifier Taches",()=>{
    taches = [];
    const titre = "Titre 1";
    const description  = "Description 1";
    evt = travail.creerTache(titre,description);

    const titreBis = "Titre 1bis";
    const descriptionBis  = "Description 1bis";
    evtBis = travail.creerTache(titreBis,descriptionBis);

    const titre2 = "Titre 2";
    const description2  = "Description 2";
    evt2 = travail.creerTache(titre2,description2);

    taches = travail.addTache(taches,evt);
    taches = travail.addTache(taches,evt2);
    resultat = travail.modifier(taches,evt,evtBis);
    expect(resultat).toEqual([{"titre":"Titre 2","description":"Description 2"},{"titre":"Titre 1bis","description":"Description 1bis"}])

});


