import React, { useEffect } from 'react';
// import Checkbox from './components/Checkbox';
import DependencyArrayTest from './components/DependencyArrayTest'
import useAnyKeyToRender from './hooks/useAnyKeyToRender';

const App = () =>{
  useAnyKeyToRender();

  useEffect(()=>{
    console.log('fresh render');
  })
  return(
    // <Checkbox />
    // <DependencyArrayTest/>
    <h1>Open the console</h1>
  )
}

export default App;