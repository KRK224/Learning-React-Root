import React from "react";
import '../style/SiteLayout.scss';

export default function SiteLayout({
  children,
  menu = c =>null
}){
  return(
    <div className="site-container">
      <div>{menu}</div>
      <div>{children}</div>
    </div>
  );
}