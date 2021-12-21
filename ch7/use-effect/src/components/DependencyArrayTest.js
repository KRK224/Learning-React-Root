import React, {useState, useEffect} from 'react';


const DependencyArrayTest = () =>{

  const [val, set] = useState('');
  const [phrase, setPharase] = useState('example phrase');

  const createPhrase = () =>{
    setPharase(val);
    set('');
  };

  useEffect(()=>{
    console.log(`typing ${val}`);
  }, [val]); // 의존 관계 배열 추가

  useEffect(()=>{
    console.log(`saved phrase ${phrase}`);
  }, [phrase]); // 의존 관계 배열 추가

  return(
    <>
      <label>Favorite phrase</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={e=> set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  );
}

export default DependencyArrayTest;