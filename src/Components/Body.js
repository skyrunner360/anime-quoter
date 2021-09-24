import React,{useEffect,useState} from 'react'
import Navbar from './Navbar'
import Quotes from './Quotes'
import Spinner from './Spinner'

export default function Body(props) {
    const [anime, setAnime] = useState([])
    const [loading, setLoading] = useState(true)
    // const [loading, setLoading] = useState(true)
const fetchData= async()=>{
    const url=`https://animechan.vercel.app/api/quotes`
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setAnime(parsedData)
    setLoading(false)
}
useEffect(() => {
    fetchData();
  // eslint-disable-next-line
}, [])
    return (
        <>
            <div className="text-gray-400 bg-gray-900 body-font">
            <Navbar/>
            <h1 className="my-2 text-center text-gray-100 bg-gray-900 body-font" style={{margin: '35px 0px', marginTop:'90px'}}>Here are some Quotes from Animes for You</h1>
            {loading && <Spinner/>}
                 {anime.map(an=>{
                     return (
                            <div className="clo-md-4" key={an.quote}>
                                <Quotes quotes={an.quote} character={an.character} animeName={an.anime} />
                            </div>
                     )
                 })}
            </div>
        </>
    )
}
