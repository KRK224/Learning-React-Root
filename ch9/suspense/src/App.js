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
    <ErrorBoundary fallback={ErrorScreen}>
      <SiteLayout menu={<p>Menu</p>} >
        <div>
          <Callout>Callout</Callout>
          <h1>Contents</h1>
          <p>This is the main part of the example layout</p>
        </div>
      </SiteLayout>
    </ErrorBoundary>
  )
}

export default App;