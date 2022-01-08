import React from "react";
import '../style/Callout.scss';

export default function Callout({
  children
}){
  
  return(
    <div className="callout">
      {children}
    </div>
  )
}