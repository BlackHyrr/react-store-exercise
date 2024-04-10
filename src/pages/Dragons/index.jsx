import React from 'react';
import EntityList from '../../components/EntityList.jsx';
import EntityInput from '../../components/EntityInput.jsx';
import { addDragon, setDragonError, setDragonName } from "../../store/action/index.js";
import { selectDragonError, selectDragonName, selectDragons } from "../../store/selectors/index.js";

const Dragons = () => {
    return (
        <div>
            <h1>List of Dragons</h1>
            <EntityInput 
                selectName={selectDragonName} 
                selectEntities={selectDragons} 
                selectError={selectDragonError} 
                setNameAction={setDragonName} 
                setErrorAction={setDragonError} 
                addEntityAction={addDragon} 
                entityName="Dragon" 
            />
            <EntityList selector={selectDragons} entityName="Dragons" />
        </div>
    );
};

export default Dragons;