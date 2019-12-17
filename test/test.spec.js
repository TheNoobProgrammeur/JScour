function creerTache(titre,description) {
    return {"titre":titre,"description":description};
}

tasks = {
    name : "liste de tache",
    taches : [],
    addTache: function (evt) {
        this.taches.push(evt);
    },
    delTache: function (evt) {
        this.taches = this.taches.filter(evts => evts != evt);
    },
    afficherTache: function () {
        var message = "";
        this.taches.forEach(evt => message += "titre : " + evt["titre"] + ", description " + evt["description"] + "/n");
        return message;
    },
};

it('creer Tache',() => {
    const titre = "Titre 1";
    const description  = "Description 1";
    expect(creerTache(titre,description)).toEqual({"titre":"Titre 1","description":"Description 1"});
});


it('ajouter Tache',() => {
    tasks.taches = [];
    const titre = "Titre 1";
    const description  = "Description 1";
    evt = creerTache(titre,description);
    tasks.addTache(evt);
    expect(tasks.taches).toEqual([{"titre":"Titre 1","description":"Description 1"}])
});

it('Suprimer Tache',()=>{
    tasks.taches = [];
    const titre = "Titre 1";
    const description  = "Description 1";
    evt = creerTache(titre,description);
    tasks.addTache(evt);
    tasks.delTache(evt);
    expect(tasks.taches).toEqual([]);
});

it('Afficher Taches',()=>{
    tasks.taches = [];
    const titre = "Titre 1";
    const description  = "Description 1";
    evt = creerTache(titre,description);
    tasks.addTache(evt);
    expect("titre : Titre 1, description Description 1/n").toEqual( tasks.afficherTache());
});


