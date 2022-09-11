import React,{useState} from 'react'

const useFormInp = () => {

    const [value, setValue] = useState('');

    const changeInp = (event) => {
        setValue(event.target.value);
    }

    const resetInp = () => {
        setValue('');
    }

    return [value, changeInp, resetInp];
}

export default useFormInp