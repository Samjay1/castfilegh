import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url)=>{
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        axios.get(url)
        .then((response) => response.data)
        .then((jsonResponse)=>{
            let data = jsonResponse.response
            
            setResponse(data)
        }).catch((error)=>{
            console.log(error)
            setError(error)
            setResponse([])
        })
        .finally(()=>{
            setLoading(false)
            console.log('Request completed...')
        })
    },[url])

    return {response,error,loading}
}
export default useFetch;