import React, { useState } from 'react';
import './App.css';
import { Login } from './pages/Login'
import { Success } from './pages/Success'

const App: React.FC = () => {
  const [email, setEmail] = useState<string>()

  return (
    <div className="App">
      {email
        ? <Success email={email} />
        : <Login onLogin={setEmail}/>
      }

    </div>
  );
}

export default App;
