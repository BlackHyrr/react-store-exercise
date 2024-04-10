import { useSelector } from "react-redux";
import { addKnight, setKnightAge, setKnightName } from "../store/action/index.js";
import { selectDragonName, selectKnightAge, selectKnightError } from "../store/selectors/index.js";
import DefaultForm from "./DefaultForm.jsx";
import { validateNotEmpty, validateNumber, validatePositive } from "../utils/fieldValidations.js";

const KnightInput = () => {

    const name = useSelector(selectDragonName)
    const age = useSelector(selectKnightAge)
    const error = useSelector(selectKnightError)

    const formConfig = [
        {
            name: 'name',
            type: 'text',
            placeholder: 'Knight name',
            value: name,
            action: setKnightName,
            validate: [validateNotEmpty]
        },
        {
            name: 'age',
            type: 'text',
            placeholder: 'Knight age',
            value: age,
            action: setKnightAge,
            validate: [validateNumber, validatePositive]
        }
    ]

    return (
        <>
            <div className={'form-container'}>
                <DefaultForm  formConfig={formConfig} addEntityAction={addKnight}/>
                {
                    error !== '' && <p className={'error-message'}>{error}</p>
                }
            </div>
        </>
    )
}

export default KnightInput;