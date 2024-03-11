import { useEffect, useState } from 'react'
import axios from  'axios'
import './App.css';

function App() {
  const[productsData, setProductsData] = useState([])

  const endpoint = `${import.meta.env.VITE_API_URL}/products/`

  const fetchData =  async () => {
    console.log('fetching....')
    const response = await axios.get(endpoint)
    console.log(response)
    const {data} =  response
    setProductsData(data)
    console.log(data)
    return  data

  }

  const postData = async() => {
    const name = 'test z'
    const description = 'test z description'
    const body = {name ,description}

    const response = await axios.post(endpoint, body)
    console.log(response)
    return response.data
  }

  const handleSendData = async() => {
    const newData = await postData()
    if  (newData){
      setProductsData(prevstate =>  [...prevstate, newData])
      alert(`A new product "${newData.name}" has been added to the inventory`)
      fetchData()
    } else {
      alert("Error occured while adding new product")
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <ul>
    {productsData.map(el =><li key={el.id}>{el.name}</li>)}
    </ul>
    <button onClick={handleSendData}>Send Data</button>
    </>
  )
}

export default App
