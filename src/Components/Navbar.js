// Importing
import React from 'react'

export default function Navbar(props) {
    return (
        <div className="sticky-top">
            <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <button onClick={props.rand} style={{display: "flex",justifyContent:"flex-start",justifyItems:"flex-start"}} className="mx-1 my-2 btn-success border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base md:mt-0">Get a Random Quote
      </button>
    </nav>
    <a href="/" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="w-10 h-10 text-white p-2 bg-green-500 rounded" viewBox="0 0 24 24"><path d="M12 6v3.028c0 2.337-1.529 3.91-3.684 4.335l-.406-.87c.996-.375 1.637-1.587 1.637-2.493h-1.547v-4h4zm5 0v3.028c0 2.337-1.529 3.91-3.684 4.335l-.406-.87c.996-.375 1.637-1.587 1.637-2.493h-1.547v-4h4zm5-3v13h-11.643l-4.357 3.105v-3.105h-4v-13h20zm2-2h-24v16.981h4v5.019l7-5.019h13v-16.981z"/></svg>
      <span className="ml-3 text-xl xl:block lg:hidden">Anime-Quoter</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    <form>
      <input type="text" onChange={(e) => props.search(e.target.value)} />
      {/* onChange Gives off a event object so get the event as a function parameter and in the function pass the prop with event's value */}
      <button onClick={props.sAnime} className="mx-1 my-1 inline-flex items-center btn-success border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base md:mt-0">Search Anime</button>
      <button onClick={props.cAnime} className="mx-1 my-1 inline-flex items-center btn-success border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base md:mt-0">Search Character</button>
    </form>
    </div>
  </div>
</header>
        </div>
    )
}
