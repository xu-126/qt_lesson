import React from 'react';
import axios from 'axios'
import { useEffect,useState } from 'react';
function useAxios(config) {
    const [ data,setData ] = useState([])
    const [ loading,setLoading ] = useState(true)
    const [ err,setErr ] = useState(null)
    useEffect(() => {
        console.log('useEffect')
        axios(config)
        .then(res => {
            setData(res.data)
            setLoading(false)
        })
        .catch(err => {
            setErr(err)
            setLoading(false)
        })
    },[])
    function request() {
        console.log('request')
        axios(config)
        .then(res => {
            setData(res.data)
            setLoading(false)
        })
        .catch(err => {
            setErr(err)
            setLoading(false)
        })
    }
    return [data, err, loading, request]
}
export default useAxios;