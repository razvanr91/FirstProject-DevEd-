import logo from './logo.svg';
import './App.css';
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState("Razvan");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);


  useEffect(() => {
    console.log("We run a function");
  }, [textInput]);

  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TweetList tweets={tweets} name={name} setTweets={setTweets} />
        <CreateTweet tweets={tweets} setTweets={setTweets} textInput={textInput} setTextInput={setTextInput} />

      </header>
    </div>
  );
}

export default App;