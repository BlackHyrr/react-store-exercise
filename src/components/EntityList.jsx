import { useSelector } from 'react-redux';
import './EntityList.css';

const EntityList = ({ selector, ageSelector, entityName }) => {
    const entities = useSelector(selector);
    const age = ageSelector ? useSelector(ageSelector) : undefined;

    return (
        <>
            {entities.length > 0 && (
                <div className={'list-container'}>
                    <h2>{entityName}</h2>
                    <ul>
                        {entities.map((entity) => (
                            <li key={entity.id}>
                                {entity.name}
                                {age && ` (Age: ${age})`} {
                                    entity.age && ` (Age: ${entity.age})`
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default EntityList;