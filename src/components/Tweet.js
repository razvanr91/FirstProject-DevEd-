import React from 'react';

export default function Tweet({ name, tweet, tweets, setTweets }) {

    const deleteTweet = () => {
        setTweets(tweets.filter(t => t !== tweet))
    }

    return (
        <div className="tweet">
            <h2>Author: {name}</h2>
            <h3>{tweet}</h3>
            <button onClick={deleteTweet}>Delete</button>
            <button>Like</button>
        </div>
    );
}