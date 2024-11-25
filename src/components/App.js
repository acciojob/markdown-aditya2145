import React, {useState, useEffect} from 'react';
import "../styles/App.css"

const App = () => {

    let [mark, setMark] = useState("")

  return (
    <div className='container'>
        <div className='markdown'>
            <input onChange={e=>setMark(e.target.value)} type='text'/>
        </div>
        <div className='display'>
            {
                mark && 
                <p>{mark}</p>
            }
        </div>
    </div>
  )
}

export default App
