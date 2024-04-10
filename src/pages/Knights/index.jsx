import React from 'react';
import EntityList from '../../components/EntityList';
import { selectKnightAge, selectKnightError, selectKnightName, selectKnights } from '../../store/selectors';
import { addKnight, setKnightAge, setKnightError, setKnightName } from '../../store/action';
import EntityInput from '../../components/EntityInput';

const Knights = () => {
    return (
        <div>
            <h1>List of Knights</h1>
            <EntityInput 
                selectName={selectKnightName} 
                selectEntities={selectKnights} 
                selectAge={selectKnightAge}
                selectError={selectKnightError} 
                setNameAction={setKnightName} 
                setAgeAction={setKnightAge} 
                setErrorAction={setKnightError} 
                addEntityAction={addKnight} 
                entityName="Knight" 
            />
            <EntityList selector={selectKnights} ageSelector={selectKnightAge} entityName="Knights" />
        </div>
    );
};

export default Knights;