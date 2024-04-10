import { useSelector } from "react-redux";
import { addDragon, setDragonName } from "../store/action/index.js";
import { selectDragonError, selectDragonName } from "../store/selectors/index.js";
import DefaultForm from "./DefaultForm.jsx";
import { validateNotEmpty } from "../utils/fieldValidations.js";

const DragonInput = () => {

    const name = useSelector(selectDragonName)
    const error = useSelector(selectDragonError)

    const formConfig = [
        {
            name: 'name',
            type: 'text',
            placeholder: 'Dragon name',
            value: name,
            action: setDragonName,
            validate: [validateNotEmpty]
        }
    ]

    return (
        <>
            <div className={'form-container'}>
                <DefaultForm  formConfig={formConfig} addEntityAction={addDragon}/>
                {
                    error !== '' && <p className={'error-message'}>{error}</p>
                }
            </div>
        </>
    )
}

export default DragonInput;