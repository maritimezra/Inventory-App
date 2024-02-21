import { useEffect, useState } from 'react'
import axios from  'axios'

function App() {

  const endpoint = '${import.meta.env.VITE_API_URL}/products/'

  const fetchData =  async () => {
    console.log('fetching....')
    const response = await axios.get(endpoint)
    console.log(response)
    const {data} =  response
    console.log(data)
    return  data

  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      Hello World
    </>
  )
}

export default App
