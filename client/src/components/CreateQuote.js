import React,{useState} from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_QUOTE } from '../gqloperations/mutations';

export default function CreateQuote() {
    const [quote,setQuote] = useState("")
    const [createQuote,{loading,error,data}] = useMutation(CREATE_QUOTE,{
        refetchQueries:[
            'getAllQuotes',
            'getMyProfile'
        ]
    })
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        createQuote({
            variables:{
                name:quote
            }
        })
        setQuote("")
    }

    // Handle loading state
    if (loading) return <h1>Loading...</h1>;

    // Log error to console but show a user-friendly error message
    if (error) {
        console.error('Error fetching quotes:', error.message);
        return <h3>Oops! Something went wrong. <br /> Please try again later.</h3>;  
    }
    
    return (
        <div className="container my-container">
            {
                error && 
                <div className="red card-panel">{error.message}</div>
            }
            {
                data && 
                <div className="green card-panel">{data.quote}</div>
            }
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={quote}
                    onChange={e=>setQuote(e.target.value)}
                    placeholder="write your quote here"
                    />
                 <button className="btn green">create</button>
            </form>
            
        </div>
    )
}
