import React, { useState, useEffect } from 'react';
import  {fabricRobot,lecteurCommande} from './robot/index'
import './App.css';
import { render } from 'react-dom';
import { Stage, Layer, Rect , Circle , RegularPolygon, Group} from 'react-konva';
import Konva from 'konva';
import {obstacles} from './obstacle/index'

const BackRect = () =>{
    return(
        <Rect width={1520} height={735} fill="blue" />
    )
};

const CercleNoir = () => {
    return(
        <Circle  radius={30} fill='black' />
    );
};

const TriangleNoir = () => {
    return(
        <RegularPolygon sides={3} radius={30}  x={20} y={10} fill='black'/>
    );
};

const GroupRobotNoir = (props) => {

   const convertiseurRotation = {
       E: 0,
       N: 90,
       O: 180,
       S: 270
   };

    return(
        <Group y={props.y} x={props.x} rotation={convertiseurRotation[props.oriantation]} >
            <CercleNoir />
            <TriangleNoir />
        </Group>
    );
};

const Obstacles = (props) => {
    const obstaclesJSX = [];
    obstacles.forEach(value =>
        obstaclesJSX.push(<RegularPolygon x={value.x} y={value.y} sides={6}  radius={30}  fill='gray'/>)
    );
    return(
        obstaclesJSX
    )
};

const GroupAireDeJeu = (props) => {
    return(
        <Group x={10} y={10}>
            <BackRect />
            <GroupRobotNoir x={props.rover.x_position} y={props.rover.y_position} oriantation={props.rover.orientationRobor}/>
            <Obstacles/>
        </Group>
    );
};



const App = (props) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const [rover, setRover] = useState( fabricRobot(width,height));
    const [commandValeur, setCommandValeur] = useState("");
    const echelle = 10;
    return(
        <div>
            <input type ="text" value={commandValeur} onChange={(event) => {
                setCommandValeur(event.target.value);
            }}/> <br />
            <button onClick={() => {
                const command = commandValeur.split("");
                const robot = lecteurCommande(command,rover,width,height,echelle,obstacles);
                setRover(robot);
            }}>valider</button>
            <Stage className="canvas" width={width} height={height} >
                <Layer>
                    <GroupAireDeJeu rover={rover}/>
                </Layer>
            </Stage>
        </div>
    );
};

export default App;



