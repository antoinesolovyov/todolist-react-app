import React from 'react';
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <React.Fragment>
        <Header />
        <Article />
        <Footer />
    </React.Fragment>
  );
}

export default App;
