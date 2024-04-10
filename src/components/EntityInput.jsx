import { useSelector, useDispatch } from "react-redux";

const EntityInput = ({ 
    selectName, 
    selectEntities, 
    selectError, 
    setNameAction, 
    setErrorAction, 
    addEntityAction, 
    entityName 
}) => {

    const dispatch = useDispatch()

    const name = useSelector(selectName)
    const entities = useSelector(selectEntities)
    const error = useSelector(selectError)

    const handleChange = (e) => {
        dispatch(setNameAction(e.target.value))
    }

    const handleEntitySubmit = () => {
        if(name.trim() === '' || entities.find((entity) => entity.name.toLowerCase() === name.toLowerCase()) !== undefined) {
            dispatch(setErrorAction(`${entityName} already exists`))
            return;
        }
        dispatch(addEntityAction())
    }

    return (
        <>
            <div className={'form-container'}>
                <div className={'form container'}>
                    <input
                        type='text'
                        placeholder={`Enter the name for a ${entityName}`}
                        value={name}
                        onChange={handleChange}
                    />
                    <button
                        className={'start-btn'}
                        onClick={handleEntitySubmit}>Submit</button>
                </div>
                {
                    error !== '' && <p className={'error-message'}>{error}</p>
                }
            </div>
        </>
    )
}

export default EntityInput;