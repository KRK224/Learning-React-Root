import React, { useState } from 'react';
import GitHubUser from './components/GitHubUser';
import SearchForm from './components/SearchForm';

export default function App(){
  const [login, setLogin] = useState("moontahoe");

  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login}/>
    </>
    
  );
}