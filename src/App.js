import './App.css';
import { useJsonFetch } from './components/useJsonFetch/useJsonFetch';

function App() {

  const {data, error, isLoading} = useJsonFetch('http://localhost:7070/loading')
// error data loading

  return (
    <div className="App">
      {isLoading || data === null ? (
        <div>Loading...</div>)
        : (
          <div>
            {JSON.stringify(data)}
          </div>
      )}
      {error && <div>Error: {error}</div>}
    </div>
    
    
  );
}

export default App;
