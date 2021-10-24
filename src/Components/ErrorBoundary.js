import React from "react";

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
    return <><h1><b>oops!Something Went Wrong. Please Try Again.</b></h1>
     <h2>Please make sure You typed the name correctly and selected the correct search button whether you're searching for an Anime or Character.</h2>
     <h3>If your spellings are correct and search option is also correct and still see this message then this most likely means we don't have any quotes from that anime/character.</h3>
     </>  
    }
    return this.props.children
    }
  }
  export default ErrorBoundary