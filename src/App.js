import React, {useState, useEffect} from 'react';
import Loading from './Loading';

function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([])

  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return<h2>Tours project excercise</h2>
}

export default App;