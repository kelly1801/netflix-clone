import './banner.css'

const Banner = () => {

function truncate(str, n) {
  return str?.length > n? str.substr(0, n - 1 ) + '...' : string
}
  return (
    <header className='banner' style={{
        backgroundImage: `url('https://wallpaperaccess.com/full/1129018.jpg')`
    ,backgroundPosition: "center",
    backgroundSize: "cover"
    }}>

        <div className="banner__contents">
          <h1 className="banner__title">Movie title</h1>
        <div className="banner__buttons">
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My list</button>
          </div>
        <h1 className="banner__description">{
            truncate(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste impedit eligendi amet quisquam repellat quo molestias repellendus cupiditate reprehenderit eveniet, similique voluptate, quibusdam maxime, deleniti ex voluptatum dolorem sapiente asperiores nulla architecto maiores perspiciatis deserunt! Numquam voluptatem dignissimos quisquam quasi, labore autem sunt minus tenetur voluptatum at ullam, quae, eius debitis aliquid ab consectetur nemo porro ad. Eum molestias, alias voluptates earum sunt tempore, vero voluptas dolore voluptatum ea tempora voluptatem sapiente facere assumenda minima eos quia ratione saepe commodi nihil. Repudiandae nisi veritatis incidunt, atque voluptates dignissimos commodi animi, molestias eligendi deleniti expedita assumenda nulla culpa. Voluptate, nesciunt neque.`, 50) 
          }</h1>
        </div>
   
   <div className="banner--fadeBottom"></div>
    </header>
  )
}

export default Banner