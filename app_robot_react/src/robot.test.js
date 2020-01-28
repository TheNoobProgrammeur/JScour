import {fabricRobot,getRandomInt,lecteurCommande,reOrinetation,deplacement} from './robot'

const listeOrientation = ["N","E","S","O"];

it("Test Random",()=>{
    const a = getRandomInt(3);
    expect(a).toBeLessThan(3);
});

it("Test Random valeur 5",()=>{
    const a = getRandomInt(3,5);
    expect(a).toBe(5);
});

it("Test init robot {x_position: 10, y_position : 10 orientationRobor: 'O'}",()=>{

    let orientationO = listeOrientation[getRandomInt(4,3)];
    let robot = {
        x_position: getRandomInt(50,10),
        y_position: getRandomInt(50,10),
        orientationRobor: orientationO,
    };

    expect(robot.x_position).toBe(10);
    expect(robot.y_position).toBe(10);
    expect(robot.orientationRobor).toBe("O");

});


it("Test robot reOrinetation N to E  ", function () {
    let orientationN = listeOrientation[getRandomInt(0,0)];
    let robot = {
        x_position: getRandomInt(50,10),
        y_position: getRandomInt(50,10),
        orientationRobor: orientationN,
    };
    let updateRobot = reOrinetation("d",robot);
    expect(updateRobot.x_position).toBe(10);
    expect(updateRobot.y_position).toBe(10);
    expect(updateRobot.orientationRobor).toBe("E")

});


it("Test robot reOrinetation N to O  ", function () {
    let orientationN = listeOrientation[getRandomInt(0,0)];
    let robot = {
        x_position: getRandomInt(50,10),
        y_position: getRandomInt(50,10),
        orientationRobor: orientationN,
    };
    let updateRobot = reOrinetation("g",robot);
    expect(updateRobot.x_position).toBe(10);
    expect(updateRobot.y_position).toBe(10);
    expect(updateRobot.orientationRobor).toBe("O")

});


it('Test robot {x:10, y:10} avance avec orintation O => {x:9,y:10}', function () {
    let orientationO = listeOrientation[getRandomInt(4,3)];
    let robot = {
        x_position: getRandomInt(50,10),
        y_position: getRandomInt(50,10),
        orientationRobor: orientationO,
    };
    let updateRobot = deplacement("a",robot,50,50,1);
    expect(updateRobot.x_position).toBe(9);
    expect(updateRobot.y_position).toBe(10);
    expect(updateRobot.orientationRobor).toBe("O");

});

it("Test robot {x:0, y:0} avance avec orintation O => {x:49,y:0} ", function () {
    let orientationO = listeOrientation[getRandomInt(4,3)];
    let robot = {
        x_position: getRandomInt(50,0),
        y_position: getRandomInt(50,0),
        orientationRobor: orientationO,
    };
    let updateRobot = deplacement("a",robot,50,50,1);
    expect(updateRobot.x_position).toBe(49);
    expect(updateRobot.y_position).toBe(0);
    expect(updateRobot.orientationRobor).toBe("O")
});





it('Deplacement du robot {x:10,y:10}  avec une liste ["a"] => {x:9,y:10} ', function () {
    let orientationO = listeOrientation[getRandomInt(4,3)];
    let robot = {
        x_position: getRandomInt(50,10),
        y_position: getRandomInt(50,10),
        orientationRobor: orientationO,
    };
    let evts = ["a"];
    let updateRobot = lecteurCommande(evts,robot,50,50,1)
    expect(updateRobot.x_position).toBe(9);
    expect(updateRobot.y_position).toBe(10);
    expect(updateRobot.orientationRobor).toBe("O")
});

it('Deplacement du robot {x:10,y:10}  avec une liste ["a","a"] => {x:8,y:10} ', function () {
    let orientationO = listeOrientation[getRandomInt(4,3)];
    let robot = {
        x_position: getRandomInt(50,10),
        y_position: getRandomInt(50,10),
        orientationRobor: orientationO,
    };
    let evts = ["a","a"];
    let updateRobot = lecteurCommande(evts,robot,50,50,1);
    expect(updateRobot.x_position).toBe(8);
    expect(updateRobot.y_position).toBe(10);
    expect(updateRobot.orientationRobor).toBe("O")
});

it('Deplacement du robot {x:10,y:10, orienter: O}  avec une liste ["a","a","d"] => {x:8,y:10,  orienter: N} ', function () {

    let orientationO = listeOrientation[getRandomInt(4,3)];
    let robot = {
        x_position: getRandomInt(50,10),
        y_position: getRandomInt(50,10),
        orientationRobor: orientationO,
    };
    let evts = ["a","a","d"];
    let updateRobot = lecteurCommande(evts,robot,50,50,1);
    expect(updateRobot.x_position).toBe(8);
    expect(updateRobot.y_position).toBe(10);
    expect(updateRobot.orientationRobor).toBe("N")
});

it('Deplacement du robot {x:10,y:10, orienter: O}  avec une liste ["a","a","d","r"] => {x:8,y:9,  orienter: N} ', function () {

    let orientationO = listeOrientation[getRandomInt(4,3)];
    let robot = {
        x_position: getRandomInt(50,10),
        y_position: getRandomInt(50,10),
        orientationRobor: orientationO,
    };
    let evts = ["a","a","d","r"];
    let updateRobot = lecteurCommande(evts,robot,50,50,1)
    expect(updateRobot.x_position).toBe(8);
    expect(updateRobot.y_position).toBe(9);
    expect(updateRobot.orientationRobor).toBe("N")

});
