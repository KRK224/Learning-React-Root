import React from 'react';
import RepositoryReadme from './RepositoryReadme';
import { useIterator } from './useIterator';

export function RepoMenu({
  repositories,
  login
}) {
  const [{name}, previous, next] = useIterator(
    repositories
  );

  return(
    <>
      <div style={{display: "flex"}}>
        <button onClick={previous}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
      <RepositoryReadme login={login} repo={name} />
    </>
  )
}