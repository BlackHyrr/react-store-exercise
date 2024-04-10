import React from 'react';
import EntityList from '../../components/EntityList';
import { selectKnightError, selectKnightName, selectKnights } from '../../store/selectors';
import { addKnight, setKnightError, setKnightName } from '../../store/action';
import EntityInput from '../../components/EntityInput';

const Knights = () => {
    return (
        <div>
            <h1>List of Knights</h1>
            <EntityInput 
                selectName={selectKnightName} 
                selectEntities={selectKnights} 
                selectError={selectKnightError} 
                setNameAction={setKnightName} 
                setErrorAction={setKnightError} 
                addEntityAction={addKnight} 
                entityName="Knight" 
            />
            <EntityList selector={selectKnights} entityName="Knights" />
        </div>
    );
};

export default Knights;