import './App.css';
import Body from './Components/Body';
import ErrorBoundary  from './Components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>  
      <Body/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
