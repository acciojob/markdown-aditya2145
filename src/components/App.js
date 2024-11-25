import React, {useState, useEffect} from 'react';
import "../styles/App.css"

const App = () => {

    const [mark, setMark] = useState('');

  return (
    <div className='app'>
      <div className='preview'>
        <textarea className='textarea' onChange={(e) => setMark(e.target.value)}></textarea>
      </div>

      <div className='loading'>
        {mark}
      </div>
    </div>
  )
}

export default App
