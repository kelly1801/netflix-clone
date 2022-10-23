import  {useState, useEffect} from 'react'
import './homeScreen.css'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Row from '../components/Row'
import { requests } from '../axios/request'
const HomeScreen = () => {
  
  
  return (
    <main className='homeScreen'>
      
      <Nav/>
      
      <Banner/>

      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Top" fetchUrl={requests.fetchTopRated}/>
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
         </main>
  )
}

export default HomeScreen