import React from 'react';

export default function List({data, renderItem}){
  return(
    <ul>
      {data.map((repo, i)=>{
        return <li key={i}>{renderItem(repo)}</li>
      })}
    </ul>
  )
};