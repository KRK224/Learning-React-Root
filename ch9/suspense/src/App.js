import React from 'react';
import SiteLayout from './components/SiteLayout';
import Callout from './components/Callout';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorScreen from './components/ErrorScreen';

const App = () =>{
  
  const BreakThings =() =>{
    throw new Error('We intentionally broke something');
  }
  
  return(
    <SiteLayout menu={
      <ErrorBoundary fallback={(error)=><ErrorScreen error={error}/>}>
        <p>Site Layout Menu</p>
        <BreakThings />
      </ErrorBoundary>
      }>
      <>
      <ErrorBoundary fallback={(error)=><ErrorScreen error={error}/>}>
        <Callout>Callout</Callout>
        <BreakThings />
      </ErrorBoundary>
      <ErrorBoundary fallback={(error)=><ErrorScreen error={error}/>}>
        <h1>Contents</h1>
        <p>This is the main part of the example layout</p>
      </ErrorBoundary>
      </>
    </SiteLayout>
  )
}

export default App;