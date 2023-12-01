import React, {useEffect,useState} from 'react'

function App() {

  const[backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch('/api').then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div> 
      {(typeof backendData.skolar === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.skolar.map((skolar, i) => (
          <p key={i}>{skolar}</p>
        ))
      )}
    </div>
  )
}
export default App