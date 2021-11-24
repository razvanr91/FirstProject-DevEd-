import React from 'react';
import Tweet from './Tweet';

export default function TweetList({ name, tweets, setTweets }) {

    return (
        <div className="list" >
            {
                tweets.map(tweet => {
                    return <Tweet key={tweet.id} name={name} tweet={tweet.message} setTweets={setTweets} tweets={tweets} />
                })
            }
        </div>
    );
}