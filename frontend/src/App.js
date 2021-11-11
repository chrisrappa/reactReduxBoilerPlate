import {BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import { useState } from 'react';


function App() {

  const [navScroll, setNavScroll] = useState(false);

  const addShadow = () => {
    if (window.scrollY >= 50){
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  }

  window.addEventListener('scroll', addShadow);

  return (
  <BrowserRouter>
    <div className="grid-container">
      <header className={ navScroll ? "header active" : "header"}>
      </header>
      <main className="main">
        <div className="content" />
          <Route path="/" exact={true} component={HomeScreen} />
      </main>
    </div>
  </BrowserRouter>
  );
}

export default App;
