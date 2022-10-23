import { useState, useEffect } from 'react'
import './banner.css'
import axios from '../axios/axios'
import { requests } from '../axios/request'
const Banner = () => {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData(){
      const response = await axios.get(requests.fetchNetflixOriginals)
   const request = response.data.results

    setMovie(request[
      Math.floor(Math.random() * request.length -1)
    ])

  
    }
    
    fetchData()
   
  }, []);
  function truncate(str, n) {
  return str?.length > n? str.substr(0, n - 1 ) + '...' : str
}
  return (
    <header className='banner' style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
    ,backgroundPosition: "center",
    backgroundSize: "cover"
    }}>

        <div className="banner__contents">
          <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My list</button>
          </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150) 
    }</h1>
        </div>
   
   <div className="banner--fadeBottom"></div>
    </header>
  )
}

export default Banner