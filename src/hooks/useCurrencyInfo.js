import { useEffect, useState } from "react";


function useCurrencyInfo(Currency){

    const [data,setData]=useState({});

    // custom hook
     useEffect(()=>{
        // API link
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${Currency}.json`)
        .then((res)=> res.json())
        .then((res)=>setData(res[Currency]))
        console.log(data);
     },[Currency])
     console.log(data);
     return data
}
export default useCurrencyInfo;