import React from 'react';
import { Button } from '@ui5/webcomponents-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => alert('Hello World!')}>Hello world!</Button>
      </header>
    </div>
  );
}

export default App;
