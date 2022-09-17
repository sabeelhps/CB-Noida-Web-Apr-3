import {useState} from 'react'

const useFormInp = () => {
  
    const [value, setValue] = useState("");
    
    const setInput = (event) => {
        setValue(event.target.value);
    }

    const resetInput = () => {
        setValue("");
    }

    return [value, setInput, resetInput];
}

export default useFormInp;