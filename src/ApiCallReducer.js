import React, { useEffect, useReducer } from 'react'
import UseReducer from './UseReducer';
import  axios  from 'axios';

function apiReducer(state, action){
    switch (action.type){
        case "LOADING":
            
            return {...state, data: null, loading: true, error: null}
        case "SUCCESS":
            
            return {...state, data: action.payload, loading: false, error: null}
        case "ERROR":
            
            return {...state, data: null, loading: false, error: action.error}
    }
}

const initialState = {
    data: null,
    loading: false,
    error: null
}

function ApiCallReducer() {
    const [state, dispatch] = useReducer(apiReducer, initialState);


    useEffect(() => {

        dispatch({type: "LOADING"})
        async function apicall(){
            try{
                const response =  await axios.get("https://jsonplaceholder.typicode.com/posts")
                dispatch({type: "SUCCESS", payload: response.data})
            }catch(err){
                dispatch({type: "ERROR", error: err.message})
            }
        }

        apicall()
    }, [])
  return (
    <div>
     {state.loading && <p>Loading...</p>}
        {state.error && <p>Error: {state.error}</p>}
        {state.data && <pre>{JSON.stringify(state.data, null, 10)}</pre>}
    </div>
  )
}

export default ApiCallReducer
