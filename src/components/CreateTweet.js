import React from 'react';

export default function CreateTweet({ tweets, setTweets, textInput, setTextInput }) {

    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    }

    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, textInput]);
        setTextInput("");
    }

    return (
        <form onSubmit={submitTweetHandler}>
            <textarea value={textInput} onChange={userInputHandler}></textarea>
            <button>Submit</button>
        </form>
    );
}