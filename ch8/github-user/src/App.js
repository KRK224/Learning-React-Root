import React, { useState, useEffect} from 'react';


function GitHubUser({ login }){
  const [data, setData] = useState();
  // const token = process.env.REACT_APP_GITHUB_TOKEN;
  

  useEffect(()=>{
    if(!login) return;
    console.log(login);
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
    console.log('data is sending');
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }
  return null; 
}

export default function App(){
  return(
    <GitHubUser login="krk224" />
  );
};