import React, { useState } from 'react';
import GitHubUser from './components/GitHubUser';
import SearchForm from './components/SearchForm';
import UserRepositories from './components/UserRepositories';
import RepositoryReadme from './components/RepositoryReadme';
import { useEffect } from 'react';

export default function App(){
  const [login, setLogin] = useState("moonhighway");
  const [repo, setRepo] = useState("backbone-chat");
  useEffect(()=>{
    console.log('repo is changed in App', repo);
  }, [repo, login])

  if(!login)
    return (<SearchForm value={login} />);
    
  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      {login && <GitHubUser login={login}/>}
      {login && <UserRepositories
        login={login}
        repo={repo}
        onSelect={setRepo}
      />}
      {login && repo &&<RepositoryReadme login={login} repo={repo} />}
    </>
  );
}
