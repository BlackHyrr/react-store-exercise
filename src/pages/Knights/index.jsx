import React from 'react';
import EntityList from '../../components/EntityList';
import { selectKnightAge, selectKnights } from '../../store/selectors';
import KnightInput from '../../components/KnightInput';

const Knights = () => {
    
    const renderKnights = (knight) => (
        <>
            {knight.name}
            {knight.age && ` (Age: ${knight.age})`}
        </>
    );

    return (
        <div>
            <h1>List of Knights</h1>
            <KnightInput/>
            <EntityList selector={selectKnights} ageSelector={selectKnightAge} renderEntity={renderKnights} />
        </div>
    );
};

export default Knights;