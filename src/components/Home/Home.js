import React, { useEffect } from 'react'
import { MovieListing } from '../Movielisting/MovieListing'
import MovieApi from '../../common/APIs/MovieApi'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'

export const Home = () => {
    const APIKey = '53c800d';
    const movieText = 'Harry';
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await MovieApi
                .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
                .catch((err) => {
                    console.log('Error:', err);
                })
            dispatch(addMovies(response.data))
        }
        fetchMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <MovieListing />
        </div>
    )
}
