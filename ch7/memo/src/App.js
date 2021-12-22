import React, {useState, memo, useEffect} from 'react';

const Cat = ({name}) =>{
  console.log(`rendering ${name}`);
  return <p>{name}</p>
}

const PureCat = memo(Cat);

const App = () =>{
  const [cats, setCats] = useState(['Biscuit', 'Jungle', 'Outlaw']);

  useEffect(()=>{
    console.log(cats);
  },[cats]);

  return(
    <>
      {cats.map((name, i) => {
        return <Cat key={i} name={name} /> // 추가할 때마다 재 렌더링 됨.
      })}
      <button onClick={()=>setCats([...cats, prompt("Name a cat")])}> Add a Cat</button>
    </>
  )
}

export default App;
