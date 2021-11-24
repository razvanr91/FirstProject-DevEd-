import React from 'react';
import { v4 as uuid } from 'uuid';

export default function CreateTweet({ tweets, setTweets, textInput, setTextInput }) {

    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    }

    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, { id: uuid(), message: textInput }]);
        setTextInput("");
    }

    return (
        <form onSubmit={submitTweetHandler}>
            <textarea value={textInput} onChange={userInputHandler}></textarea>
            <button>Submit</button>
        </form>
    );
}