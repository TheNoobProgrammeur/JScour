"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function creerTache(titre, description) {
    return { "titre": titre, "description": description };
}
exports.creerTache = creerTache;
function addTache(taches, evt) {
    const newTaches = [...taches];
    newTaches.push(evt);
    return newTaches;
}
exports.addTache = addTache;
function delTache(taches, evt) {
    const newTaches = taches.filter(evts => evts != evt);
    return newTaches;
}
exports.delTache = delTache;
;
