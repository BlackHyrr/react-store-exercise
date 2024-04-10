import { useSelector } from 'react-redux';

const EntityList = ({ selector, entityName }) => {
    const entities = useSelector(selector);

    return (
        <>
            {entities.length > 0 && (
                <div className={'list-container'}>
                    <h2>{entityName}</h2>
                    <ul>
                        {entities.map((entity) => (
                            <li key={entity.id}>{entity.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default EntityList;