import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
  
 const [data , setData] = useState({})
    useEffect(() => {
        
        async function ApiCall(){

            try{ 
            const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            
            
            if(!response.ok){
                throw new Error("Ntework Error")
            }
            const res = await response.json()
           
            setData(res[currency])
        }catch(error){
            console.log(error)
        }

        }
        
            ApiCall()
        
            
    }, [currency])

   
    return data
}

export default useCurrencyInfo