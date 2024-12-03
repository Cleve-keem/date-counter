import { useState } from 'react';

export default function useCustom(){
  const [ value, setValue ] = useState();

  function handleIncrement(props){
    setValue((props)=>props + 1);
  }

  function handleDecrement(props){
    setValue((props)=>props - 1);
  }


  return { value, handleDecrement, handleIncrement }

}