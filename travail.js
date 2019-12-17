

function creerTache(titre,description) {
    return {"titre":titre,"description":description};
};

function addTache(tache, evt) {
    const  newTache = [... tache];
    newTache.push(evt);
    return newTache;
};

function delTache (tache, evt) {
    newTache = taches.filter(evts => evts != evt);
    return newTache
};

function afficherTache(taches) {
    return  `
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ${taches.map(function (evt,index){
        return `${index} - titre : ${evt.titre} , description : ${evt.description}`
    }).join("/n")}
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`
};

function modifier(taches,evt,newEvt) {
    var newTache = delTache(taches,evt);
    newTache = addTache(newTache,newEvt);
    return newTache;
}




module.exports={
    creerTache,
    addTache,
    delTache,
    afficherTache,
    modifier
};

