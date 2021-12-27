import React, { useState, useEffect} from 'react';

const loadJSON = key =>
  key && JSON.parse(localStorage.getItem(key));

const saveJSON = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

function GitHubUser({ login }){
  const [data, setData] = useState(loadJSON(`user:${login}`));
  // const token = process.env.REACT_APP_GITHUB_TOKEN;
  
  useEffect(()=>{
    if (!data) return;
    if (data.login === login) return;
    const {name, avatar_url, location} = data;
    saveJSON(`user:${login}`, {
      name,
      login,
      avatar_url,
      location
    })
  }, [data]);

  useEffect(()=>{
    if(!login) return;
    if(data && data.login === login) return;
    console.log('data is not it local storage');
      fetch(`https://api.github.com/users/${login}`, {
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${token}`
        // }
      })
        .then(response => {
          console.log('response is arrived');
          return response.json();
        })
        .then(setData)
        .catch(console.error)
  }, 
  //[login, token]
  [login])

  if(data){
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }
  return null; 
}

export default function App(){
  return(
    <GitHubUser login="moonhighway" />
  );
};