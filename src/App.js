import './App.css';
import {useState} from "react";
import axios from "axios";
import QuoteCard from './components/QuoteCard';

const sampleCard = {
  quote: "Welcome to our App!",
  image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
  character: "Lisa Simpson"
}

function App() {
  const [quoteList, setQuoteList] = useState(sampleCard);

  const getQuote = () => {
    axios
    .get("https://simpsons-quotes-api.herokuapp.com/quotes?count=10")
    .then((response) => response.data)
    .then((data) => {
      setQuoteList(data[0]);
    });
  };

  return (
    <div className="App">
      <h1>Simpsons' Quotes</h1>
      <QuoteCard quoteList={quoteList}/>
      <button type="button" onClick={getQuote} className="button">Click Me</button>
    </div>
  );
}

export default App;
