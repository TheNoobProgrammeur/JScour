// Règles
// - Vous devez générer le point de départ en coordonnées carthésiennes
// `(Math.random)` et une orientation `(N,S,E,O)` dans laquelle pointe le Rover.
// - Les commandes ont le format suivant `a,a,a,r,a,g,a,a,a,d,a,a,g`
// - Les commandes pour changer de position sont `avance/recule (a,r)`.
// - Les commandes pour changer d'orientation sont `gauche/droite (g,d)`.
// - Quand on arrive à un bord de la carte, on passe à l'autre bord (c'est un planisphère 🚀)
// - S'il y a un obstacle le Rover s'arrête devant et retourne la position de l'obstacle.


const listeOrientation = ["N","E","S","O"];

export function getRandomInt(max, value=Math.floor(Math.random() * Math.floor(max))) {
        return  value
}

export function lecteurCommande (listElement, robot,width,height,echelle,obstacles){
    const mapCommande = {
        a: deplacement,
        r: deplacement,
        g: reOrinetation,
        d: reOrinetation
    };

    const reduceur = (robot,element) => mapCommande[element](element,robot,width,height,echelle,obstacles);
    robot = listElement.reduce(reduceur,robot);
    //listElement.flatMap(element => mapCommande[element](element,robot));
    //robot = mapCommande[element](element,robot);
    return {... robot}
}


export function deplacement (element, robot,width,height,echelle,obstacles) {

    const mapDemMap = {
        a: {x: {E: 1, O: -1, N: 0 , S:0 }, y: {E: 0, O: 0, N: 1 , S:-1}},
        r: {x: {E: -1, O: 1, N: 0 , S: 0}, y: {E: 0, O: 0, N: -1 , S: 1}}
    };

    const possition = {
        y: deplacer(robot.y_position,robot.orientationRobor,height,mapDemMap[element].y,echelle),
        x: deplacer(robot.x_position,robot.orientationRobor,width,mapDemMap[element].x,echelle)
    };

    

    return {... robot, x_position: possition.x, y_position: possition.y}
}

export function deplacer(coord,orientation,mapSize, orientationMap,echelle) {
    return (coord + (orientationMap[orientation]*echelle) + mapSize) % mapSize
}

export function reOrinetation(element,robot) {
    const commandeMap = {d: 1, g: -1 };
    const indexOrinetationActuelle = listeOrientation.indexOf(robot.orientationRobor);
    const updetIndex = ((indexOrinetationActuelle + commandeMap[element]) + 4 ) %4;
    return {...robot, orientationRobor: listeOrientation[updetIndex]};
}

export  function fabricRobot(width,height){
    let robot;
    return robot = {
        x_position: getRandomInt(width),
        y_position: getRandomInt(height),
        orientationRobor: listeOrientation[getRandomInt(4)],
    };
}
