import { useState } from 'react';

function useForm(inicialValues) {
  const [values, setValues] = useState(inicialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearForm() {
    setValues(inicialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
