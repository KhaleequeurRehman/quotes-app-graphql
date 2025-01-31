import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_QUOTES } from '../gqloperations/queries';

export default function Home() {
    const { loading, error, data } = useQuery(GET_ALL_QUOTES, {
        fetchPolicy: "cache-and-network"
    });

    if (loading) return <h1>Loading...</h1>;

    if (error) {
        console.error('Error fetching quotes:', error.message);
        return <h3>Oops! Something went wrong. <br /> Please try again later.</h3>;
    }

    if (data?.quotes?.length === 0) {
        return <h3>You haven't created quotes curently, let's create a quote</h3>;
    }

    return (
        <div className="container">
            {data.quotes.map((quote, i) => (
                <blockquote key={i}>
                    <h6>{quote.name}</h6>
                    <p className="right-align">~{quote.by?.firstName}</p>
                </blockquote>
            ))}
        </div>
    );
}
