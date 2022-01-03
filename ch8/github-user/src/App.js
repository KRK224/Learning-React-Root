import React, { useState } from 'react';
import GitHubUser from './components/GitHubUser';
import SearchForm from './components/SearchForm';
import UserRepositories from './components/UserRepositories';
import RepositoryReadme from './components/RepositoryReadme';

export default function App(){
  const [login, setLogin] = useState("moonhighway");
  const [repo, setRepo] = useState("backbone-chat");

  const handleSearch = login =>{
    if (login) return setLogin(login);
    setLogin('');
    setRepo('');
  }

  if(!login)
    return (<SearchForm value={login} onSearch={handleSearch} />);
    
  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      {login && <GitHubUser login={login}/>}
      { login && <UserRepositories
        login={login}
        repo={repo}
        onSelect={setRepo}
      />}
      {login && repo &&<RepositoryReadme login={login} repo={repo} />}
    </>
  );
}
