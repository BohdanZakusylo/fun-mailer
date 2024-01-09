import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/Login'; // Assume you have an About component
// ... import other components

function App() {
  const [page, setPage] = useState('home');

  const navigate = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <button onClick={() => navigate('home')}>Home</button>
      <button onClick={() => navigate('about')}>About</button>
      {/* ... other navigation buttons */}

      {page === 'home' && <Home />}
      {page === 'about' && <About />}
      {/* ... other conditional components */}
    </div>
  );
}

export default App;
