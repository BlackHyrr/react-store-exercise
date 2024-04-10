import React from 'react';
import EntityList from '../../components/EntityList.jsx';
import { selectDragons } from "../../store/selectors/index.js";
import DragonInput from '../../components/DragonInput.jsx';

const Dragons = () => {

    const renderDragons = (dragon) => (
        <>
            {dragon.name}
        </>
    );

    return (
        <div>
            <h1>List of Dragons</h1>
            <DragonInput/>
            <EntityList selector={selectDragons} renderEntity={renderDragons} />
        </div>
    );
};

export default Dragons;