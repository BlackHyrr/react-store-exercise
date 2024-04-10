import { useDispatch } from "react-redux";
import './DefaultForm.css';
import { useState } from "react";

const DefaultForm = ({ formConfig, addEntityAction }) => {

    const dispatch = useDispatch()
    const [formErrors, setFormErrors] = useState({});

    const validateForm = (formConfig) => {
        const errors = {};

        for (let field of formConfig) {
            for (let validate of field.validate) {
                const errorMessage = validate(field.value);
                if (errorMessage) {
                    errors[field.name] = errorMessage;
                    break;
                }
            }
        }

        return errors;
    }

    const handleInputChange = (e, action) => {
        dispatch(action(e.target.value));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateForm(formConfig);
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        dispatch(addEntityAction())
    }

    return (
        <form onSubmit={handleSubmit} className={'form-container'}>
            {formConfig.map((field, index) => (
                <div key={index}>
                    <input
                        className={formErrors[field.name] ? 'invalid-field' : ''}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={field.value}
                        onChange={(e) => handleInputChange(e, field.action)}
                    />
                    {formErrors[field.name] && <div className="error">{formErrors[field.name]}</div>}
                </div>
            ))}
            <button className={'start-btn'} type="submit">Submit</button>
        </form>
    )
}

export default DefaultForm;