import React,{useEffect} from 'react'
import { useQuery } from '@apollo/client';
import { GET_ALL_QUOTES } from '../gqloperations/queries';

export default function Home() {
   const {loading,error,data} = useQuery(GET_ALL_QUOTES,{
    fetchPolicy:"cache-and-network"
    })

   if(loading) return <h1>Loading</h1>
   if(error){
       console.log(error.message)
   }
   if(data?.quotes?.length == 0){
    return  <h2>No Quotes available</h2>
   }
   console.log('data ',data)
    return (
        <div className="container">
            {
                data?.quotes?.map((quote,i)=>{
                    return(
                   <blockquote key={i}>
                        <h6>{quote?.name}</h6>
                        <p className="right-align">~{quote?.by?.firstName}</p>
                    </blockquote>
                    )
                })
            }
            
        </div>
    )
}


// {
//     data?.quotes?.map((item)=>(
//         <blockquote>
//         <h6>{item?.name}</h6>
//         <p className="right-align">~{item?.by?.firstName}</p>
//         </blockquote>
//     ))
// }
// <blockquote>
//     <h6>{data?.quotes[0]?.name}ss</h6>
//     <p className="right-align">~{data?.quotes[0]?.by?.firstName}ss</p>
// </blockquote>