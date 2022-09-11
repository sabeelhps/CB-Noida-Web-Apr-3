import {useState} from 'react';

const useToggle = (intialVal=false) => {

    const [toggle, setToggle] = useState(intialVal);

    const toggler = () => {
        setToggle(!toggle);
    }

    return [toggle, toggler];
}

export default useToggle;