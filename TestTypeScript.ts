type evenement = {"titre":titre,"description":description};
type  titre = string;
type  description = string;

function creerTache(titre : titre ,description:description):evenement {
    return {"titre":titre,"description":description};
}

function addTache(taches:evenement[], evt:evenement):evenement[] {
    const  newTaches  = [... taches];
    newTaches.push(evt);
    return newTaches;
}

function delTache (taches:evenement[], evt:evenement):evenement[] {
    const  newTaches = taches.filter(evts => evts != evt);
    return newTaches
};




export {creerTache,addTache,delTache};
