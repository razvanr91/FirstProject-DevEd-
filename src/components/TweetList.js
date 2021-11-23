import React from 'react';
import Tweet from './Tweet';

export default function TweetList({ name, tweets, setTweets }) {

    return (
        <div className="list" >
            {
                tweets.map(tweet => {
                    return <Tweet key={tweet} name={name} tweet={tweet} setTweets={setTweets} tweets={tweets} />
                })
            }
        </div>
    );
}