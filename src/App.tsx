import { useEffect } from 'react';
import './App.css';
import request from './config/Http';
import Footer from './page/Footer/Footer';
import Header from './page/Header/Header';
import Main from './page/Main/Main';

function App() {
  useEffect(() => {
    console.info(`
        __ __          ____     _   __           __  __  ______  ______
      / //_/         / __ \   / | / /          / / / / /_  __/ /_  __/
      / ,<    ______ / / / /  /  |/ /          / /_/ /   / /     / /   
    / /| |  /_____// /_/ /  / /|  /          / __  /   / /     / /    
    /_/ |_|         \____/  /_/ |_/          /_/ /_/   /_/     /_/     
                                                                      
    `);
  }, [])
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App;
