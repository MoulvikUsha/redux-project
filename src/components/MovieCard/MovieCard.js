import React from 'react'

export const MovieCard = (props) => {
    console.log('props:', props);
    const { data } = props
    return (
        <div className='card-item'>
            <div className='card-inner'>
                <div className='card-top'>
                    {/* <img src={data.Poster} alt={data.Title} /> */}
                </div>
                <div className='card-bottom'>
                    <div className='card-info'>
                        {/* <h4>{data.Title}</h4>
                        <p>{data.Year}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
