import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';


export default function Joke() {
  const [Joke,setJoke]=useState({});
  const[Loading,setLoading]=useState(false)
  const [reload, setReload]=useState(false)
  useEffect(
    ()=>{
      setLoading(true)
       axios.get("https://jsonplaceholder.typicode.com/todos")
       .then((resp)=>{
        setJoke(resp.data)
        setLoading(false)
       })

       .catch(err=>console.log(err))
    },[reload]
  )
  if(Loading)
    return(
    <h1>Loading...</h1>
    )
  return (
    <div className="joke-box">
      <h1>Joke</h1>
      <h2>{Joke.setup}</h2>
      <h2>{Joke.punchline}</h2>
      <button onClick={()=>setReload(!reload)}>Refresh</button>
    </div>
  )
}
