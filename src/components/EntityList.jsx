import { useSelector } from 'react-redux';
import './EntityList.css';

const EntityList = ({ selector, renderEntity }) => {
    const entities = useSelector(selector);

    return (
        <div className={'list-container'}>
            {entities.length > 0 && (
                <ul>
                    {entities.map((entity) => (
                        <li key={entity.id}>
                            {renderEntity(entity)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default EntityList;