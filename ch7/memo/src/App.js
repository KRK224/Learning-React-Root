import React, {useState, memo, useEffect} from 'react';

const Cat = ({name}) =>{
  console.log(`rendering ${name}`);
  return <p>{name}</p>
}

const PureCat = memo(Cat);

const App = () =>{
  const [cats, setCats] = useState(['Biscuit', 'Jungle', 'Outlaw']);


  return(
    <>
      {cats.map((name, i) => {
        return <PureCat key={i} name={name} /> // memo를 사용하여 프롭스 값이 변경 시에만 재렌더링 됨.
      })}
      <button onClick={()=>setCats([...cats, prompt("Name a cat")])}> Add a Cat</button>
    </>
  )
}

export default App;
