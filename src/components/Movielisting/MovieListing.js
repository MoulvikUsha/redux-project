import React from 'react'
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieListing = () => {
    const movies = useSelector(getAllMovies)
    let renderMovies = ''

    renderMovies = movies.Response === 'True' ? (
        // eslint-disable-next-line array-callback-return
        movies.Search.map((movie, index) => {
            <MovieCard key={index} data={movie} />
        })
    ) : (
        <div className='movie-error'>
            <h3>{movies.Error}</h3>
        </div>
    )
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies List</h2>
            </div>
        </div>
    )
}
