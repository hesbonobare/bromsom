import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Navbar from './components/Layout/LandingSections/Navbar';



function App() {

  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  return (
    <div className="App">
      <Layout />
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
