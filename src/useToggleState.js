import React, {useState} from 'react';

const useToggleState = (initialValue)=> {
const [toggleValue, setToggleValue] = useState(initialValue);
const toggler = ()=>(setToggleValue(!toggleValue));

return [toggleValue, toggler];
}
export default useToggleState;