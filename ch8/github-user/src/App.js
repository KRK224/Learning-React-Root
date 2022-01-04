import React, { useState, useEffect } from 'react';
import GitHubUser from './components/GitHubUser';
import SearchForm from './components/SearchForm';
import UserRepositories from './components/UserRepositories';
import RepositoryReadme from './components/RepositoryReadme';
import { query, client } from './graphql/client';
import UserDetails from './components/UserDetails';
import List from './components/List';


export default function App(){
  const [login, setLogin] = useState("moontahoe");
  // const [repo, setRepo] = useState("backbone-chat");
  const [userData, setUserData] = useState();

  useEffect(()=> {
    client
      .request(query, {login})
      .then(({user}) => {
        // console.log('typeof user', typeof user);
        // console.log('user', user);
        // console.log('user.repositories.nodes', user.repositories.nodes)
        return user
      })
      .then(setUserData)
      .catch(console.error);
  }, [client, query, login])
  
  const handleSearch = login =>{
    if (login) return setLogin(login);
    setLogin('');
    setUserData();
  }

  if(!login)
    return (<SearchForm value={login} onSearch={handleSearch}/>);
    
  if (!userData) return <p>loading...</p>
  
  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <UserDetails data={userData} />
      <p>{userData.repositories.totalCount} - repos</p>
      <List
        data={userData.repositories.nodes}
        renderItem={repo => <span>{repo.name}</span>}
      />
    </>
  )

  // return (
  //   <>
  //     <SearchForm value={login} onSearch={setLogin} />
  //     {login && <GitHubUser login={login}/>}
  //     {login && <UserRepositories
  //       login={login}
  //       repo={repo}
  //       onSelect={setRepo}
  //     />}
  //     {login && repo &&<RepositoryReadme login={login} repo={repo} />}
  //   </>
  // );
}
