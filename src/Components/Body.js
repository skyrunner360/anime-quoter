//Importing
import React,{useEffect,useState} from 'react'
import Navbar from './Navbar'
import Quotes from './Quotes'
import Spinner from './Spinner'


//Start Body Functional Component
export default function Body(props) {
    const [anime, setAnime] = useState([]) //Create and set initial state of Anime as an empty array
    const [loading, setLoading] = useState(true) //Create and set the initial state of Loading as True
    //Function to Capitalize First Letter (not used as of now)

    // const capitalizeFirstLetter = (string)=>{
    //     return string.charAt(0).toUpperCase()+string.slice(1);
    // }

//An Asyncronous function to Fetch Data from the API
const fetchData= async()=>{
    const url=`https://animechan.vercel.app/api/quotes`
    setLoading(true) //Loading should be true until the data is fetched
    let data = await fetch(url); //Fetch data in data variable
    let parsedData = await data.json(); //Convert the fetched data into json with await and store it into parsedData
    setAnime(parsedData)//Store parsedData into Anime state
    setLoading(false)//Set loading to false to stop showing the loader
}
// useEffect is Similar to componentDidMount and componentDidUpdate:
useEffect(() => {
    document.title = `Anime Quoter`
    fetchData();    //Call fetchData function when component is mounted
    //Do not show the console error message
  // eslint-disable-next-line  
}, [])
    return (
        // Create a dummy component to fit the page into by using empty tags <>
        <>  
            <div className="text-gray-400 bg-gray-900 body-font">
            <Navbar/>
            {/* Render the navbar into this div */}
            <h1 className="my-2 text-center text-gray-100 bg-gray-900 body-font" style={{margin: '35px 0px', marginTop:'90px'}}>Here are some Quotes from Animes for You</h1>
            <h2 className="my-2 text-center text-gray-100 bg-gray-900 body-font" style={{margin: '35px 0px', marginTop:'90px'}}>Refresh for More Quotes and immerce yourself in the mesmerizing world of Anime</h2>
            {loading && <Spinner/>} 
            {/* This show's the spinner only when the loading is true. Basically only when loading and spinner are true */}
                 {anime.map(an=>{
                    //  The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. 
                     //Map the data of anime state into 'an' 
                     return (
                            <div className="clo-md-4" key={an.quote}> 
                            {/* Send quote as key to div so that react can differentiate. */}
                                <Quotes quotes={an.quote} character={an.character} animeName={an.anime} />
                                {/* Send properties/props to quotes component */}
                            </div>
                     )
                 })}
            </div>
        </>
    )
}
