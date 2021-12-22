import React, { useEffect } from 'react';
// import Checkbox from './components/Checkbox';
// import DependencyArrayTest from './components/DependencyArrayTest'
// import WordCount from './components/WordCount';
import useAnyKeyToRender from './hooks/useAnyKeyToRender';

const App = () =>{
  
  const word = "gnar"; // 원시 값으로서의 word
  const words = ['sick', 'powder', 'day']
  useAnyKeyToRender();

  useEffect(()=>{
    console.log('word fresh render');
  }, [word]); // fresh render가 찍히지 않는다.

  useEffect(()=>{
    console.log('words fresh render');
  }, [words]); // 배열은 참조값, 매 렌더링마다 새로 생성한다.

  return(
    // <Checkbox />
    // <DependencyArrayTest/>
    <h1>Open the console</h1>
    // <WordCount>
    //   You are not going to believe this but...
    // </WordCount>
  )
}

export default App;