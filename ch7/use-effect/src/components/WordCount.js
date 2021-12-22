import React, {useEffect} from 'react';
import useAnyKeyToRender from '../hooks/useAnyKeyToRender';

const WordCount = ({children=""}) =>{
  
  const words = children.split(" ");

  useAnyKeyToRender();

  useEffect(()=>{
    console.log("fresh render");
  }, [words]);

  return(
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>  
  )
}

export default WordCount;