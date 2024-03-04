import axios from 'axios'
import {useState } from 'react'

const usePost = (url,body)=>{
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
        setLoading(true)
        axios.post(url, body)
        .then((response) => response.data)
        .then((jsonResponse)=>{
            let data = jsonResponse.response
            setResponse(data)
        }).catch((error)=>{
            console.log(error)
            setError(error)
        })
        .finally(()=>{
            setLoading(false)
            console.log('Request completed...')
        })

    return {response,error,loading}
}
export default usePost;