const index = require('../index');

const listeOrientation = ["N","E","S","O"];

it("Test Random",()=>{
    const a = index.getRandomInt(3);
    expect(a).toBeLessThan(3);
});

it("Test Random valeur 5",()=>{
    const a = index.getRandomInt(3,5);
    expect(a).toBe(5);
});

it("Test init robot {x_position: 10, y_position : 10 orientationRobor: 'O'}",()=>{

    let orientationO = listeOrientation[index.getRandomInt(4,3)];
    let robot = {
        x_position: index.getRandomInt(50,10),
        y_position: index.getRandomInt(50,10),
        orientationRobor: orientationO,
    };

    expect(robot.x_position).toBe(10);
    expect(robot.y_position).toBe(10);
    expect(robot.orientationRobor).toBe("O");

});


it("Test robot reOrinetation N to E  ", function () {
    let orientationN = listeOrientation[index.getRandomInt(0,0)];
    let robot = {
        x_position: index.getRandomInt(50,10),
        y_position: index.getRandomInt(50,10),
        orientationRobor: orientationN,
    };
    let updateRobot = index.reOrinetation("d",robot);
    expect(updateRobot.x_position).toBe(10);
    expect(updateRobot.y_position).toBe(10);
    expect(updateRobot.orientationRobor).toBe("E")

});


it("Test robot reOrinetation N to O  ", function () {
    let orientationN = listeOrientation[index.getRandomInt(0,0)];
    let robot = {
        x_position: index.getRandomInt(50,10),
        y_position: index.getRandomInt(50,10),
        orientationRobor: orientationN,
    };
    let updateRobot = index.reOrinetation("g",robot);
    expect(updateRobot.x_position).toBe(10);
    expect(updateRobot.y_position).toBe(10);
    expect(updateRobot.orientationRobor).toBe("O")

});


it('Test robot {x:10, y:10} avance avec orintation O => {x:9,y:10}', function () {
    let orientationO = listeOrientation[index.getRandomInt(4,3)];
    let robot = {
        x_position: index.getRandomInt(50,10),
        y_position: index.getRandomInt(50,10),
        orientationRobor: orientationO,
    };
    let updateRobot = index.deplacement("a",robot);
    expect(updateRobot.x_position).toBe(9);
    expect(updateRobot.y_position).toBe(10);
    expect(updateRobot.orientationRobor).toBe("O");

});

it("Test robot {x:0, y:0} avance avec orintation O => {x:49,y:0} ", function () {
    let orientationO = listeOrientation[index.getRandomInt(4,3)];
    let robot = {
        x_position: index.getRandomInt(50,0),
        y_position: index.getRandomInt(50,0),
        orientationRobor: orientationO,
    };
    let updateRobot = index.deplacement("a",robot);
    expect(updateRobot.x_position).toBe(49);
    expect(updateRobot.y_position).toBe(0);
    expect(updateRobot.orientationRobor).toBe("O")
});





it('Deplacement du robot {x:10,y:10}  avec une liste ["a"] => {x:9,y:10} ', function () {
    let orientationO = listeOrientation[index.getRandomInt(4,3)];
    let robot = {
        x_position: index.getRandomInt(50,10),
        y_position: index.getRandomInt(50,10),
        orientationRobor: orientationO,
    };
    evts = ["a"];
    updateRobot = index.lecteurCommande(evts,robot)
    expect(updateRobot.x_position).toBe(9);
    expect(updateRobot.y_position).toBe(10);
    expect(updateRobot.orientationRobor).toBe("O")
});

it('Deplacement du robot {x:10,y:10}  avec une liste ["a","a"] => {x:8,y:10} ', function () {
    let orientationO = listeOrientation[index.getRandomInt(4,3)];
    let robot = {
        x_position: index.getRandomInt(50,10),
        y_position: index.getRandomInt(50,10),
        orientationRobor: orientationO,
    };
    evts = ["a","a"];
    updateRobot = index.lecteurCommande(evts,robot)
    expect(updateRobot.x_position).toBe(8);
    expect(updateRobot.y_position).toBe(10);
    expect(updateRobot.orientationRobor).toBe("O")
});

it('Deplacement du robot {x:10,y:10, orienter: O}  avec une liste ["a","a","d"] => {x:8,y:10,  orienter: N} ', function () {

    let orientationO = listeOrientation[index.getRandomInt(4,3)];
    let robot = {
        x_position: index.getRandomInt(50,10),
        y_position: index.getRandomInt(50,10),
        orientationRobor: orientationO,
    };
    evts = ["a","a","d"];
    updateRobot = index.lecteurCommande(evts,robot)
    expect(updateRobot.x_position).toBe(8);
    expect(updateRobot.y_position).toBe(10);
    expect(updateRobot.orientationRobor).toBe("N")
});

it('Deplacement du robot {x:10,y:10, orienter: O}  avec une liste ["a","a","d","r"] => {x:8,y:9,  orienter: N} ', function () {

    let orientationO = listeOrientation[index.getRandomInt(4,3)];
    let robot = {
        x_position: index.getRandomInt(50,10),
        y_position: index.getRandomInt(50,10),
        orientationRobor: orientationO,
    };
    evts = ["a","a","d","r"];
    updateRobot = index.lecteurCommande(evts,robot)
    expect(updateRobot.x_position).toBe(8);
    expect(updateRobot.y_position).toBe(9);
    expect(updateRobot.orientationRobor).toBe("N")

});


it(' ', function () {

});
