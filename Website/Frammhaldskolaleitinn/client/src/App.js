import React, {useEffect,useState} from 'react'

function App() {

  const[jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api');
        const data = await response.json();
        setJsonData(data);
      } catch(error) {
        console.error('Error featching data: ', error)
      }
    };
    fetchData();
  }, [])

    if (!jsonData) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h1>List of Schools</h1>
        <ul>
          {jsonData.map((schools) => (
            <li key={schools.ID}>{schools.nafn}, fjoldi nemenda : {schools.heildarnemendur}</li>
          ))}
        </ul>
      </div>
    )
}
export default App