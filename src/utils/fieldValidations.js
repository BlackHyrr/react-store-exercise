export const validateNotEmpty = value => value.trim() !== '' ? null : 'This field cannot be empty';
export const validateNumber = value => !isNaN(Number(value)) && value.trim() !== '' ? null : 'This field must be a number';
export const validatePositive = value => Number(value) > 0 ? null : 'This field must be a positive number';