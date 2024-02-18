import {useEffect, useState} from 'react'

function useCurrencyInfo(currency){
    const [data, setData] = useState({});

    useEffect(() =>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())  // jo bhi api aata hai vo string me hota hai,usko json form me convert karne ke liye .json() ka use karte hai
        // .then((res) => setData(res.currency))
        .then((res) => setData(res[currency]))  // ye bhi ek tarika hai object ko access karne ka
        console.log(data);
    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;