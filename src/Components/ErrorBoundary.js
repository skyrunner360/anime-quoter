import React from "react";
import Navbar from "./Navbar";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) { 
        return { hasError : true};
    }   // Update state so the next render will show the fallback UI.    return { hasError: true };  }
    render() {
      if (this.state.hasError) {      // You can render any custom fallback UI      return <h1>Something went wrong.</h1>;    }
    return <> 
    <div className="text-gray-400 bg-gray-900 body-font" style={{height: "100vh"}}>
    <Navbar/>
    <h1 className="my-2 text-center text-gray-100 bg-gray-900 body-font" style={{margin: '35px 0px', marginTop:'90px',fontSize:"5vh"}}><b>oops!Something Went Wrong. Please Try Again.</b></h1>
     <h2 className="my-2 text-center text-gray-100 bg-gray-900 body-font" style={{margin: '35px 0px', marginTop:'90px', fontSize: "3vh"}}>Please make sure You typed the name correctly and selected the correct search button whether you're searching for an Anime or Character.</h2>
     <h3 className="my-2 text-center text-gray-100 bg-gray-900 body-font" style={{margin: '35px 0px', marginTop:'90px', fontSize: "3vh"}}>If your spellings are correct and search option is also correct and still see this message then this most likely means we don't have any quotes from that anime/character.</h3>
     <h3 className="my-2 text-center text-gray-100 bg-gray-900 body-font" style={{margin: '35px 0px', marginTop:'90px', fontSize: "4vh"}}><a href="/">Go to the Home Page by refreshing, clicking on the icon in the navbar or clicking Here.</a></h3>
     </div>
     </>  
    }
    return this.props.children
    }
  }
  export default ErrorBoundary