import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { MovieDetails } from './components/MovieDetails/MovieDetails';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Footer } from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <PageNotFound element={<PageNotFound />} />
      <Footer></Footer>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:imdbID' element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
