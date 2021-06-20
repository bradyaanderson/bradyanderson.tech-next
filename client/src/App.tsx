import axios from 'axios';
import React, {useState} from 'react';
import './assests/stylesheets/App.css';

function App() {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    axios.get("/test").then(response => setData(response.data.test));
  }, []);

  return (
    <div className="App">
      <h1>Welcome to the new bradyanderson.tech</h1>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
