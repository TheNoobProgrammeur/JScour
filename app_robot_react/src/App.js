import React from 'react';
import './App.css';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text , Circle , RegularPolygon, Group} from 'react-konva';
import Konva from 'konva';

const BackRect = () =>{
    return(
        <Rect x={10} y={10} width={1520} height={735} fill="orange" />
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

const GroupRobotNoir = () => {
    return(
        <Group y={500} x={500} rotation={250} >
            <CercleNoir />
            <TriangleNoir />
        </Group>
    );
};

const App = (props) => {
            return(
        <Stage className="canvas" width={window.innerWidth} height={window.innerHeight} >
            <Layer>
                <BackRect />
                <GroupRobotNoir />

            </Layer>
        </Stage>
    );
};

export default App;



