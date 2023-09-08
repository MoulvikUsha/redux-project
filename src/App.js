import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { MovieDetails } from './components/MovieDetails/MovieDetails';
import { MovieCard } from './components/MovieCard/MovieCard';
import { MovieListing } from './components/Movielisting/MovieListing';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:imdbID' element={<MovieDetails />} />
        <Route path='/movie-card' element={<MovieCard />} />
        <Route path='/movie-listing' element={<MovieListing />} />
        <Route path='8' element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
