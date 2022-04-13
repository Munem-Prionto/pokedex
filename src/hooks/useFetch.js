import { useEffect , useState } from 'react'

function useFetch(url) {
   const [data , setData] = useState(null);
   const [loading , setLoading] = useState(false);
   const [err , setErr] = useState(null)
   useEffect(()=> {
     const controller =  new AbortController()

    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(url , {signal : controller.signal})
        if(!res.ok) {
          throw new Error(res.statusText)
        }
         const json = await res.json()
           setLoading(false)
        setData(json)
      

      } catch (error) {
        if(error.name === "AbortError") {
          console.log('Fetch was aborted')
        }
        setLoading(false)
        setErr('Could not fetch data :(')
        console.log(error)
      }
      
    }
    fetchData()

    return (()=> {
     controller.abort();
    })
  } , [url])
  return {data , loading , err}
}

export default useFetch
