import React from 'react';
import { useEffect } from 'react';
// import RepositoryReadme from './RepositoryReadme';
import { useIterator } from './useIterator';

export function RepoMenu({
  repositories,
  selected,
  onSelect = f => f
}) {

  const [{name}, previous, next] = useIterator(
    repositories,
    selected? repositories.findIndex(repo => repo.name === selected): null
  );
  

  useEffect(()=>{
    // console.log('selected in RepoMenu is changed');
    // console.log('name in RepoMenu', name);
    onSelect(name);
  }, [name, repositories])
    

    return(
      <>
        <div style={{display: "flex"}}>
          <button onClick={previous}>&lt;</button>
          <p>{name}</p>
          <button onClick={next}>&gt;</button>
        </div>
        {/* <RepositoryReadme login={login} repo={name} /> */}
      </>
    )
  
  
}

